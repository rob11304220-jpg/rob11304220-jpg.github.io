(function () {
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function setNavOpen(open) {
    document.body.classList.toggle("nav-open", open);
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
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
      if (e.key === "Escape") {
        setNavOpen(false);
      }
    });
  }

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
})();
