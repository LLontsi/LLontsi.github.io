document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
    const subNavigationLinks = document.querySelectorAll("[data-subnav-link]");
    const subPages = document.querySelectorAll(".sub-page");
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.querySelector(".lightbox-content");
    const lightboxCaption = document.querySelector(".caption");
    const closeLightbox = document.querySelector(".close");

    // Navigation principale entre les pages
    navigationLinks.forEach(link => {
        link.addEventListener("click", function() {
            const targetPage = this.getAttribute("data-nav-link");

            pages.forEach(page => {
                if (page.getAttribute("data-page") === targetPage) {
                    page.classList.add("active");
                } else {
                    page.classList.remove("active");
                }
            });

            navigationLinks.forEach(nav => {
                if (nav.getAttribute("data-nav-link") === targetPage) {
                    nav.classList.add("active");
                } else {
                    nav.classList.remove("active");
                }
            });

            window.scrollTo(0, 0);
        });
    });

    // Navigation entre les sous-pages (Poèmes, Vœux d'anniversaire, Histoire)
    subNavigationLinks.forEach(link => {
        link.addEventListener("click", function() {
            const targetSubPage = this.getAttribute("data-subnav-link");

            subPages.forEach(page => {
                if (page.id === `sub-${targetSubPage}`) {
                    page.classList.add("active");
                } else {
                    page.classList.remove("active");
                }
            });

            subNavigationLinks.forEach(nav => {
                if (nav.getAttribute("data-subnav-link") === targetSubPage) {
                    nav.classList.add("active");
                } else {
                    nav.classList.remove("active");
                }
            });
        });
    });

    // Lightbox pour les images de la galerie
    galleryImages.forEach(image => {
        image.addEventListener("click", function() {
            const src = this.getAttribute("src");
            const alt = this.getAttribute("alt");
            const description = this.nextElementSibling.innerHTML;

            lightboxContent.setAttribute("src", src);
            lightboxContent.setAttribute("alt", alt);
            lightboxCaption.innerHTML = description;

            lightbox.style.display = "block";
        });
    });

    // Fermer la lightbox en cliquant sur le bouton de fermeture
    closeLightbox.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    // Fermer la lightbox en cliquant en dehors de l'image
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
