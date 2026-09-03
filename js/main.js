(function () {
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var yearEl = document.getElementById("year");
  var navToggleLabel = navToggle ? navToggle.querySelector(".visually-hidden") : null;
  var mobileNav = window.matchMedia("(max-width: 720px)");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setNavOpen(open) {
    var shouldOpen = mobileNav.matches && open;

    document.body.classList.toggle("nav-open", shouldOpen);
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    }
    if (navToggleLabel) {
      navToggleLabel.textContent = shouldOpen ? "Close menu" : "Open menu";
    }
    if (siteNav) {
      siteNav.toggleAttribute("inert", mobileNav.matches && !shouldOpen);
      if (mobileNav.matches && !shouldOpen) {
        siteNav.setAttribute("aria-hidden", "true");
      } else {
        siteNav.removeAttribute("aria-hidden");
      }
    }
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = !document.body.classList.contains("nav-open");
      setNavOpen(open);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        setNavOpen(false);
        navToggle.focus();
      }
    });

    mobileNav.addEventListener("change", function () {
      setNavOpen(false);
    });

    setNavOpen(false);
  }

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
})();
