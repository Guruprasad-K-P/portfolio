/* Builds the whole page from data.js. You normally don't need to edit this. */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  if (!D) return;

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);

  function h(tag, attrs = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false || v === "") continue;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    kids.flat().forEach(c => { if (c != null && c !== false) el.append(c); });
    return el;
  }

  const initials = s => s.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();

  // <img> that swaps itself for a neat placeholder if the file is missing
  function img(src, alt, cls, label) {
    const i = h("img", { src, alt, class: cls, loading: "lazy", decoding: "async" });
    i.addEventListener("error", () => {
      i.replaceWith(h("div", { class: (cls || "") + " ph", role: "img", "aria-label": alt }, h("span", { text: label || "" })));
    }, { once: true });
    return i;
  }

  const normImages = list => (list || []).map(x => typeof x === "string" ? { src: x, caption: "" } : x);

  const ext = (href, text, cls) =>
    h("a", { href, class: cls, target: "_blank", rel: "noopener", text });

  /* ---------- theme ---------- */
  const root = document.documentElement;
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("#theme-toggle").addEventListener("click", () => {
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- hero ---------- */
  const p = D.profile;
  $("#top").append(
    h("div", { class: "hero-text" },
      h("p", { class: "eyebrow", text: p.role }),
      h("h1", { class: "hero-name", text: p.name }),
      h("p", { class: "hero-line", text: p.tagline }),
      h("div", { class: "hero-actions" },
        h("a", { href: "#work", class: "btn btn-primary", text: "See my work" }),
        p.resume ? h("a", { href: p.resume, class: "btn btn-outline", target: "_blank", rel: "noopener", text: "Resume ↗" }) : null,
        ext(p.github, "GitHub", "btn btn-ghost"),
        ext(p.linkedin, "LinkedIn", "btn btn-ghost")
      ),
      h("p", { class: "hero-meta", text: p.location })
    ),
    h("div", { class: "hero-photo" }, img(p.photo, p.name, "avatar", initials(p.name)))
  );

  /* ---------- projects + filters ---------- */
  const grid = $("#projects");
  const filters = $("#filters");
  const tags = ["All", ...new Set(D.projects.flatMap(x => x.tags || []))];
  let active = "All";

  function renderFilters() {
    filters.replaceChildren(...tags.map(t =>
      h("button", {
        type: "button",
        class: "chip" + (t === active ? " on" : ""),
        "aria-pressed": String(t === active),
        text: t,
        onclick: () => { active = t; renderFilters(); renderProjects(); }
      })
    ));
    filters.hidden = tags.length <= 2;
  }

  function renderProjects() {
    const list = D.projects.filter(x => active === "All" || (x.tags || []).includes(active));
    grid.replaceChildren(...list.map(pr => {
      const cover = normImages(pr.images)[0];
      return h("article", { class: "card" },
        h("div", { class: "card-media" },
          img(cover ? cover.src : "", pr.title + " screenshot", "card-img", initials(pr.title))),
        h("div", { class: "card-body" },
          pr.date ? h("p", { class: "card-date", text: pr.date }) : null,
          h("h3", { class: "card-title" },
            h("button", { type: "button", class: "card-open", text: pr.title, onclick: () => openModal(pr) })),
          h("p", { class: "card-sum", text: pr.summary }),
          h("ul", { class: "stack" }, (pr.stack || []).map(s => h("li", { text: s })))
        )
      );
    }));
  }

  /* ---------- project dialog with gallery ---------- */
  const modal = $("#modal");
  let lastFocus = null;

  function openModal(pr) {
    lastFocus = document.activeElement;
    const imgs = normImages(pr.images);
    let idx = 0;

    const stage = h("div", { class: "stage" });
    const caption = h("p", { class: "caption" });
    const thumbs = h("div", { class: "thumbs" });

    function show(i) {
      idx = (i + imgs.length) % imgs.length;
      stage.replaceChildren(img(imgs[idx].src, `${pr.title} — ${imgs[idx].caption || "image " + (idx + 1)}`, "stage-img", "No image yet"));
      caption.textContent = imgs[idx].caption || "";
      [...thumbs.children].forEach((t, n) => t.classList.toggle("on", n === idx));
    }

    if (imgs.length > 1) {
      imgs.forEach((im, n) => thumbs.append(
        h("button", { type: "button", class: "thumb", "aria-label": `Show image ${n + 1}`, onclick: () => show(n) },
          img(im.src, "", "thumb-img", String(n + 1)))
      ));
    }

    const gallery = imgs.length ? h("div", { class: "gallery" },
      h("div", { class: "stage-wrap" },
        imgs.length > 1 ? h("button", { type: "button", class: "nav-btn prev", "aria-label": "Previous image", text: "‹", onclick: () => show(idx - 1) }) : null,
        stage,
        imgs.length > 1 ? h("button", { type: "button", class: "nav-btn next", "aria-label": "Next image", text: "›", onclick: () => show(idx + 1) }) : null
      ),
      caption, thumbs
    ) : null;

    modal.replaceChildren(
      h("button", { type: "button", class: "close", "aria-label": "Close", text: "✕", onclick: () => modal.close() }),
      gallery,
      h("div", { class: "modal-body" },
        pr.date ? h("p", { class: "card-date", text: pr.date }) : null,
        h("h2", { id: "modal-title", text: pr.title }),
        pr.details ? h("p", { class: "modal-text", text: pr.details }) : null,
        (pr.highlights || []).length ? h("ul", { class: "highlights" }, pr.highlights.map(t => h("li", { text: t }))) : null,
        h("ul", { class: "stack" }, (pr.stack || []).map(s => h("li", { text: s }))),
        h("div", { class: "modal-links" },
          pr.code ? ext(pr.code, "View code →", "btn btn-primary") : null,
          pr.demo ? ext(pr.demo, "Live demo →", "btn btn-outline") : null
        )
      )
    );
    if (imgs.length) show(0);
    modal.dataset.count = imgs.length;
    modal.showModal();
    document.body.classList.add("lock");
  }

  modal.addEventListener("close", () => {
    document.body.classList.remove("lock");
    if (lastFocus) lastFocus.focus();
  });
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });   // click on backdrop
  modal.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft")  { const b = $(".prev", modal); if (b) b.click(); }
    if (e.key === "ArrowRight") { const b = $(".next", modal); if (b) b.click(); }
  });

  /* ---------- about / skills / background / contact ---------- */
  $("#about-text").append(...D.about.map(t => h("p", { text: t })));

  $("#skills-grid").append(...D.skills.map(s =>
    h("div", { class: "skill-group" }, h("h4", { text: s.group }), h("p", { text: s.items.join(", ") }))));
  $("#learning").textContent = D.learning && D.learning.length ? "Currently learning: " + D.learning.join(", ") : "";

  $("#education").append(...D.education.map(e =>
    h("li", {}, h("strong", { text: e.title }), h("span", { text: e.place }), h("em", { text: e.when }))));
  $("#certs").append(...D.certifications.map(c =>
    h("li", {}, h("strong", { text: c.title }), h("span", { text: c.issuer }), h("em", { text: c.when }))));

  const em = $("#contact-email");
  em.href = "mailto:" + p.email;
  em.textContent = p.email;
  $("#contact-socials").append(ext(p.github, "GitHub →"), ext(p.linkedin, "LinkedIn →"));

  $("#year").textContent = new Date().getFullYear();

  renderFilters();
  renderProjects();
})();
