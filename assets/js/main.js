// ABC Foundation - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('page-fade');
    requestAnimationFrame(() => {
        document.body.classList.add('is-loaded');
    });

    const translateToggle = document.getElementById('translate-toggle');
    const translatePanel = document.getElementById('google-translate-panel');
    if (translateToggle && translatePanel) {
        translateToggle.addEventListener('click', function () {
            const isOpen = !translatePanel.hasAttribute('hidden');
            if (isOpen) {
                translatePanel.setAttribute('hidden', '');
                translateToggle.setAttribute('aria-expanded', 'false');
            } else {
                translatePanel.removeAttribute('hidden');
                translateToggle.setAttribute('aria-expanded', 'true');
            }
        });

        document.addEventListener('click', function (event) {
            if (!translatePanel.contains(event.target) && event.target !== translateToggle) {
                translatePanel.setAttribute('hidden', '');
                translateToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', function () {
            const isOpen = menu.classList.toggle('open');
            hamburger.classList.toggle('is-active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    document.addEventListener('click', function (event) {
        if (!hamburger || !menu) return;
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('open');
            hamburger.classList.remove('is-active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    if (hamburger) {
        hamburger.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                hamburger.click();
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const navBar = document.querySelector('nav');
    if (navBar) {
        const handleScroll = () => {
            navBar.classList.toggle('nav-scrolled', window.scrollY > 10);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    if (navLinks.length) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('nav-link-active');
                link.setAttribute('aria-current', 'page');
            }
            if (menu && hamburger) {
                link.addEventListener('click', function () {
                    menu.classList.remove('open');
                    hamburger.classList.remove('is-active');
                    hamburger.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length) {
        const formatter = new Intl.NumberFormat('en-IN');
        const animateNumber = (element, target) => {
            const duration = 2000;
            const startTime = performance.now();

            const step = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const value = Math.floor(progress * target);
                const suffix = element.dataset.suffix || '';
                element.textContent = `${formatter.format(value)}${suffix}`;
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        };

        const statsSection = document.getElementById('impact');
        const triggerCounters = () => {
            statNumbers.forEach((element) => {
                const target = Number(element.dataset.target || 0);
                animateNumber(element, target);
            });
        };

        if (statsSection && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        triggerCounters();
                        observer.disconnect();
                    }
                });
            }, { threshold: 0.4 });

            observer.observe(statsSection);
        } else {
            triggerCounters();
        }
    }

    const animatedItems = document.querySelectorAll('[data-animate=\"fade-up\"]');
    if (animatedItems.length) {
        const reveal = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const animationObserver = new IntersectionObserver(reveal, { threshold: 0.2 });
        animatedItems.forEach((item) => animationObserver.observe(item));
    }

    const donationOptions = document.querySelectorAll('.donation-option');
    const customAmountInput = document.getElementById('custom-amount');

    if (donationOptions.length) {
        donationOptions.forEach((option) => {
            option.addEventListener('click', function () {
                donationOptions.forEach((btn) => btn.classList.remove('selected'));
                option.classList.add('selected');
                if (customAmountInput) {
                    const amount = option.dataset.amount || '';
                    if (amount === 'custom') {
                        customAmountInput.value = '';
                        customAmountInput.focus();
                    } else {
                        customAmountInput.value = amount;
                    }
                }
            });
        });
    }

    if (customAmountInput) {
        customAmountInput.addEventListener('input', function () {
            donationOptions.forEach((btn) => btn.classList.remove('selected'));
        });
    }

    const galleryImages = document.querySelectorAll('.gallery-image');
    if (galleryImages.length) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox hidden';
        lightbox.innerHTML = '<img src="" alt="Expanded gallery image"><button type="button" aria-label="Close preview">×</button>';
        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector('img');
        const closeButton = lightbox.querySelector('button');

        const closeLightbox = () => {
            lightbox.classList.add('hidden');
            lightboxImage.src = '';
            document.body.style.overflow = '';
        };

        galleryImages.forEach((image) => {
            image.addEventListener('click', function () {
                lightboxImage.src = image.dataset.full || image.src;
                lightbox.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        closeButton.addEventListener('click', closeLightbox);

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        });
    }

    const filterButtons = document.querySelectorAll('.gallery-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                filterButtons.forEach((btn) => btn.classList.remove('selected'));
                button.classList.add('selected');

                galleryItems.forEach((item) => {
                    const category = item.dataset.category;
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    const demoForms = document.querySelectorAll('form[data-demo="true"]');
    demoForms.forEach((form) => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for your submission! This is a demo form.');
        });
    });

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (!document.querySelector('.sticky-donate')) {
        const donateButton = document.createElement('a');
        donateButton.href = 'donate.html';
        donateButton.id = 'sticky-donate';
        donateButton.className = 'sticky-donate btn-primary';
        donateButton.textContent = 'Donate Now';
        donateButton.setAttribute('aria-label', 'Donate Now');
        document.body.appendChild(donateButton);
    }
});


