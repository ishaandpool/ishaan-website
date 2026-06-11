/* ============================================================
   MOBILE NAV
   ============================================================ */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

/* ============================================================
   NAVBAR SCROLL STATE
   ============================================================ */
const navbar = document.querySelector('.navbar');

function updateNavbar() {
    if (window.pageYOffset > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/* ============================================================
   PARALLAX ENGINE
   All parallax updates happen inside one rAF loop.
   ============================================================ */
const parallaxOrbs = document.querySelectorAll('[data-speed]');
const sectionBgs   = document.querySelectorAll('[data-parallax-section]');

function updateParallax() {
    const scrollY = window.pageYOffset;

    // Hero orbs and GeoCycle orbs — move relative to absolute scroll position
    parallaxOrbs.forEach(orb => {
        const speed = parseFloat(orb.dataset.speed);
        orb.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // Section background radial glows — move relative to their section's position
    sectionBgs.forEach(bg => {
        const section = bg.parentElement;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress: 0 when section top at viewport bottom, 1 when section bottom at viewport top
        const progress = (vh - rect.top) / (vh + rect.height);
        const offset = (progress - 0.5) * 120;
        bg.style.transform = `translateY(${offset}px)`;
    });
}

/* ============================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   UNIFIED SCROLL HANDLER (throttled via rAF)
   ============================================================ */
let ticking = false;

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateNavbar();
            updateParallax();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// Run once on load
updateNavbar();
updateParallax();

/* ============================================================
   GEOCYCLE IFRAME — detect if it's being blocked
   We can't catch X-Frame-Options directly, so we wait for
   the iframe to load then check if contentDocument is accessible.
   If not (cross-origin blocked), show the fallback overlay.
   ============================================================ */
const gcFrame    = document.getElementById('gc-frame');
const gcFallback = document.getElementById('embed-fallback');

if (gcFrame && gcFallback) {
    // Give the iframe some time to attempt loading
    const fallbackTimer = setTimeout(() => {
        // If the iframe contentDocument is null or throws (blocked), show fallback
        try {
            const doc = gcFrame.contentDocument || gcFrame.contentWindow.document;
            if (!doc || doc.body === null || doc.body.innerHTML === '') {
                gcFallback.classList.add('visible');
            }
        } catch (e) {
            // Cross-origin access blocked — the embed itself may still be showing
            // Don't show fallback since the content might be rendering fine
        }
    }, 4000);

    gcFrame.addEventListener('load', () => {
        clearTimeout(fallbackTimer);
        try {
            const doc = gcFrame.contentDocument || gcFrame.contentWindow.document;
            if (!doc || doc.body === null) {
                gcFallback.classList.add('visible');
            }
        } catch (e) {
            // Cross-origin, but likely loaded — don't show fallback
        }
    });

    gcFrame.addEventListener('error', () => {
        gcFallback.classList.add('visible');
    });
}

/* Contact form submission handled by @formspree/ajax (see bottom of index.html) */

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, type = 'info') {
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const colors = { success: '#22c55e', error: '#F7374F', info: '#88304E' };
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: ${colors[type] || colors.info};
        color: #fff;
        padding: 0.9rem 1.5rem;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 500;
        font-family: 'Syne', sans-serif;
        box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        z-index: 10000;
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        max-width: 320px;
    `;

    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    });

    setTimeout(() => {
        toast.style.transform = 'translateY(20px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4500);
}

/* ============================================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navH = navbar ? navbar.offsetHeight : 0;
            const top  = target.getBoundingClientRect().top + window.pageYOffset - navH;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

/* ============================================================
   PAGE LOAD FADE-IN
   ============================================================ */
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.4s ease';
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
