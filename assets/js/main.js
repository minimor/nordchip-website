(() => {
  document.documentElement.classList.add("js-enabled");
  const SELECTORS = {
    header: ".site-header",
    menuToggle: ".menu-toggle",
    nav: ".site-nav",
    navLinks: ".site-nav a",
    reveal: ".reveal",
    faqItem: ".faq-item",
    faqTrigger: ".faq-trigger",
    year: "[data-year]",
    leadForm: "#lead-form"
  };

  const BREAKPOINT = 860;
  const CONTACT_PHONE = "385955562984";
  const CONTACT_EMAIL = "nordchipzagreb@gmail.com";

  const strings = {
    hr: {
      required: "Molimo ispunite obavezna polja.",
      readyWhatsApp: "Otvaram WhatsApp s pripremljenom porukom.",
      readyEmail: "Otvaram e-mail s pripremljenim sadrzajem.",
      fallback: "Ako se prozor ne otvori, kontaktirajte me direktno putem WhatsAppa ili e-maila.",
      subject: "Upit - NordChip Zagreb",
      labelName: "Ime",
      labelService: "Usluga",
      labelDeadline: "Rok",
      labelBudget: "Budzet",
      labelMessage: "Opis zadatka"
    },
    en: {
      required: "Please fill in all required fields.",
      readyWhatsApp: "Opening WhatsApp with a prepared message.",
      readyEmail: "Opening email client with prepared content.",
      fallback: "If the window does not open, contact me directly via WhatsApp or email.",
      subject: "Request - NordChip Zagreb",
      labelName: "Name",
      labelService: "Service",
      labelDeadline: "Deadline",
      labelBudget: "Budget",
      labelMessage: "Task description"
    },
    uk: {
      required: "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0437\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0456 \u043f\u043e\u043b\u044f.",
      readyWhatsApp: "\u0412\u0456\u0434\u043a\u0440\u0438\u0432\u0430\u044e WhatsApp \u0437 \u043f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u043c \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f\u043c.",
      readyEmail: "\u0412\u0456\u0434\u043a\u0440\u0438\u0432\u0430\u044e e-mail \u0456\u0437 \u043f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u043c.",
      fallback: "\u042f\u043a\u0449\u043e \u0432\u0456\u043a\u043d\u043e \u043d\u0435 \u0432\u0456\u0434\u043a\u0440\u0438\u043b\u043e\u0441\u044f, \u043d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u043c\u0435\u043d\u0456 \u043d\u0430\u043f\u0440\u044f\u043c\u0443 \u0443 WhatsApp \u0430\u0431\u043e e-mail.",
      subject: "\u0417\u0430\u043f\u0438\u0442 - NordChip Zagreb",
      labelName: "\u0406\u043c'\u044f",
      labelService: "\u041f\u043e\u0441\u043b\u0443\u0433\u0430",
      labelDeadline: "\u0422\u0435\u0440\u043c\u0456\u043d",
      labelBudget: "\u0411\u044e\u0434\u0436\u0435\u0442",
      labelMessage: "\u041e\u043f\u0438\u0441 \u0437\u0430\u0434\u0430\u0447\u0456"
    }
  };

  const lang = (() => {
    const code = document.documentElement.lang || "hr";
    if (code.startsWith("en")) return "en";
    if (code.startsWith("uk") || code.startsWith("ua")) return "uk";
    return "hr";
  })();

  const i18n = strings[lang];

  const header = document.querySelector(SELECTORS.header);
  const menuToggle = document.querySelector(SELECTORS.menuToggle);
  const nav = document.querySelector(SELECTORS.nav);

  const setYear = () => {
    const yearNodes = document.querySelectorAll(SELECTORS.year);
    const year = String(new Date().getFullYear());
    yearNodes.forEach((node) => {
      node.textContent = year;
    });
  };

  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  const initMenu = () => {
    if (!menuToggle || !nav) return;

    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll(SELECTORS.navLinks).forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("open")) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!nav.contains(target) && !menuToggle.contains(target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > BREAKPOINT) {
        closeMenu();
      }
    });
  };

  const initStickyHeader = () => {
    if (!header) return;

    let ticking = false;

    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    update();
  };

  const initReveal = () => {
    const nodes = document.querySelectorAll(SELECTORS.reveal);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    nodes.forEach((node) => observer.observe(node));
  };

  const initFaq = () => {
    const items = document.querySelectorAll(SELECTORS.faqItem);
    if (!items.length) return;

    items.forEach((item, index) => {
      const trigger = item.querySelector(SELECTORS.faqTrigger);
      const panel = item.querySelector(".faq-panel");
      if (!trigger || !panel) return;

      const panelId = `faq-panel-${index + 1}`;
      trigger.setAttribute("aria-controls", panelId);
      trigger.setAttribute("aria-expanded", "false");
      panel.id = panelId;

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        trigger.setAttribute("aria-expanded", String(isOpen));

        items.forEach((other) => {
          if (other === item) return;
          other.classList.remove("open");
          const otherTrigger = other.querySelector(SELECTORS.faqTrigger);
          if (otherTrigger) {
            otherTrigger.setAttribute("aria-expanded", "false");
          }
        });
      });
    });
  };

  const initLeadForm = () => {
    const form = document.querySelector(SELECTORS.leadForm);
    if (!(form instanceof HTMLFormElement)) return;

    const status = form.querySelector(".form-status");
    const nameInput = form.querySelector("[name='name']");
    const serviceInput = form.querySelector("[name='service']");
    const deadlineInput = form.querySelector("[name='deadline']");
    const budgetInput = form.querySelector("[name='budget']");
    const messageInput = form.querySelector("[name='message']");

    if (!nameInput || !serviceInput || !messageInput) return;

    const setStatus = (text) => {
      if (!status) return;
      status.textContent = text;
    };

    const isValid = () => {
      const required = [nameInput, serviceInput, messageInput];
      return required.every((field) => field.value.trim().length > 0);
    };

    const buildMessage = () => {
      const lines = [
        `NordChip Zagreb`,
        `${i18n.labelName}: ${nameInput.value.trim() || "-"}`,
        `${i18n.labelService}: ${serviceInput.value.trim() || "-"}`,
        `${i18n.labelDeadline}: ${deadlineInput && deadlineInput.value.trim() ? deadlineInput.value.trim() : "-"}`,
        `${i18n.labelBudget}: ${budgetInput && budgetInput.value.trim() ? budgetInput.value.trim() : "-"}`,
        `${i18n.labelMessage}: ${messageInput.value.trim() || "-"}`
      ];
      return lines.join("\n");
    };

    const openWhatsApp = () => {
      const text = encodeURIComponent(buildMessage());
      const url = `https://wa.me/${CONTACT_PHONE}?text=${text}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus(`${i18n.readyWhatsApp} ${i18n.fallback}`);
    };

    const openEmail = () => {
      const subject = encodeURIComponent(i18n.subject);
      const body = encodeURIComponent(buildMessage());
      const url = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      window.location.href = url;
      setStatus(`${i18n.readyEmail} ${i18n.fallback}`);
    };

    form.querySelectorAll("[data-submit]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();

        if (!isValid()) {
          setStatus(i18n.required);
          if (nameInput.value.trim().length === 0) nameInput.focus();
          else if (serviceInput.value.trim().length === 0) serviceInput.focus();
          else messageInput.focus();
          return;
        }

        const type = button.getAttribute("data-submit");
        if (type === "whatsapp") {
          openWhatsApp();
        } else {
          openEmail();
        }
      });
    });
  };

  setYear();
  initMenu();
  initStickyHeader();
  initReveal();
  initFaq();
  initLeadForm();
})();



