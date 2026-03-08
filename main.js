(function () {
    const btn = document.getElementById("menuBtn");
    const menu = document.getElementById("mobileMenu");
    const burger = document.getElementById("iconBurger");
    const close = document.getElementById("iconClose");

    function setOpen(open) {
        menu.classList.toggle("hidden", !open);
        burger.classList.toggle("hidden", open);
        close.classList.toggle("hidden", !open);
        btn.setAttribute("aria-expanded", String(open));
        btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    }

    btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        setOpen(!isOpen);
    });

    // Fermer au redimensionnement vers desktop
    const mql = window.matchMedia("(min-width: 640px)");
    mql.addEventListener?.("change", (e) => {
        if (e.matches) setOpen(false);
    });
})();