/* ==========================================================================
   Dr. Amely Campe - Premium JS Script (Scholz & Friese UX Pro Max)
   ========================================================================== */

// Default seminars list to seed localStorage (even number: 6 items for grid balance)
const DEFAULT_SEMINARS = [
    {
        id: "sem-1",
        title: "Kommunikation mit Tierhalter:innen",
        audience: "Tierärzt:innen & Praxisteams",
        duration: "Tagesseminar",
        description: "Souveräner und empathischer Umgang mit hohen Erwartungen, schwierigen Nachrichten und Konflikten im Sprechzimmer."
    },
    {
        id: "sem-2",
        title: "Kommunikation im Team",
        audience: "Praxisteams & Kliniken",
        duration: "Workshop (Halbtag/Ganztag)",
        description: "Missverständnisse abbauen, die Zusammenarbeit nachhaltig stärken und eine konstruktive, wertschätzende Feedbackkultur etablieren."
    },
    {
        id: "sem-3",
        title: "Führung und Mitarbeitendengespräche",
        audience: "Führungskräfte & Praxisinhaber",
        duration: "2-Tages-Intensivkurs",
        description: "Mitarbeitende zeitgemäß motivieren, gesunde Grenzen setzen und schwierige Entwicklungsgespräche zielgerichtet führen."
    },
    {
        id: "sem-4",
        title: "Mental Health in der Tiermedizin",
        audience: "Alle Berufsgruppen",
        duration: "Halbtagesseminar / Vortrag",
        description: "Umgang mit Stress, emotionaler Belastung und Überlastungssignalen. Praktische Strategien für gesunde Abgrenzung im Berufsalltag."
    },
    {
        id: "sem-5",
        title: "Konflikte in Praxis, Behörde oder Organisation",
        audience: "Teams & Abteilungsleiter",
        duration: "Tagesseminar",
        description: "Spannungen frühzeitig erkennen, lösungsorientiert ansprechen und strukturelle Konfliktursachen nachhaltig beheben."
    },
    {
        id: "sem-6",
        title: "Praxisübergabe und berufliche Veränderung",
        audience: "Inhaber:innen & Nachfolger:innen",
        duration: "Individueller Workshop",
        description: "Den emotionalen, rollenbezogenen und strukturellen Wandel bei Inhaberwechseln und Neuanfängen erfolgreich begleiten."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA SEEDING (Only seed if empty or not present)
    const currentSems = JSON.parse(localStorage.getItem('sf_seminars'));
    if (!currentSems || currentSems.length === 0) {
        localStorage.setItem('sf_seminars', JSON.stringify(DEFAULT_SEMINARS));
    }

    // 2. RENDER SEMINARS ON HOMEPAGE
    renderSeminars();

    // 3. STICKY HEADER
    const header = document.getElementById('siteHeader');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately

    // 4. MOBILE NAVIGATION MENU
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Close when clicking nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // 5. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll('.reveal, .stagger-container');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run immediately

    // 6. MULTI-STEP WIZARD FORM & CF TURNSTILE HANDLING
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Wizard navigation buttons
        const btnNext1 = document.getElementById('btnNext1');
        const btnNext2 = document.getElementById('btnNext2');
        const btnBack2 = document.getElementById('btnBack2');
        const btnBack3 = document.getElementById('btnBack3');

        // Panels & steps indicators
        const panels = document.querySelectorAll('.form-step-panel');
        const steps = document.querySelectorAll('.form-step-indicator');
        const line1 = document.getElementById('stepLine1');
        const line2 = document.getElementById('stepLine2');

        const showStep = (stepNumber) => {
            panels.forEach(p => p.classList.remove('active'));
            steps.forEach(s => {
                s.classList.remove('active', 'completed');
                const sNum = parseInt(s.getAttribute('data-step'));
                if (sNum === stepNumber) {
                    s.classList.add('active');
                } else if (sNum < stepNumber) {
                    s.classList.add('completed');
                }
            });

            document.querySelector(`.form-step-panel[data-panel="${stepNumber}"]`).classList.add('active');

            if (stepNumber > 1) line1.classList.add('active');
            else line1.classList.remove('active');

            if (stepNumber > 2) line2.classList.add('active');
            else line2.classList.remove('active');
        };

        // Step 1 -> Step 2
        btnNext1.addEventListener('click', () => {
            const msg = document.getElementById('message').value.trim();
            if (!msg) {
                alert('Bitte beschreiben Sie kurz Ihr Anliegen.');
                document.getElementById('message').focus();
                return;
            }
            showStep(2);
        });

        // Step 2 -> Step 1
        btnBack2.addEventListener('click', () => {
            showStep(1);
        });

        // Step 2 -> Step 3
        btnNext2.addEventListener('click', () => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name) {
                alert('Bitte geben Sie Ihren Namen an.');
                document.getElementById('name').focus();
                return;
            }
            if (!email || !emailRegex.test(email)) {
                alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                document.getElementById('email').focus();
                return;
            }
            showStep(3);
        });

        // Step 3 -> Step 2
        btnBack3.addEventListener('click', () => {
            showStep(2);
        });

        // Final Submit
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const privacy = document.getElementById('privacy').checked;
            if (!privacy) {
                alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
                return;
            }

            // Cloudflare Turnstile token validation
            const turnstileToken = window.turnstile ? window.turnstile.getResponse() : null;
            if (!turnstileToken) {
                alert('Bitte bestätigen Sie die Sicherheitsprüfung (Turnstile).');
                return;
            }

            const submitBtn = document.getElementById('btnSubmitContactForm');
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Wird gesendet... <span class="spinner" style="display:inline-block; border: 2px solid rgba(255,255,255,0.3); border-radius:50%; border-top: 2px solid #fff; width:12px; height:12px; animation: spin 1s linear infinite; margin-left:8px; vertical-align: middle;"></span>';

            // Simulate sending & redirecting
            setTimeout(() => {
                window.location.href = 'danke.html';
            }, 1000);
        });

        // Add CSS keyframe rotation for spinner to document if not already there
        if (!document.getElementById('spinner-keyframes')) {
            const style = document.createElement('style');
            style.id = 'spinner-keyframes';
            style.innerHTML = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
            document.head.appendChild(style);
        }
    }

    // 7. EVENT DELEGATION FOR SERVICE LINK SELECTION
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.service-contact-link');
        if (link) {
            const serviceVal = link.getAttribute('data-service');
            const formatSelect = document.getElementById('format');
            if (formatSelect && serviceVal) {
                formatSelect.value = serviceVal;
            }
            // If they clicked a link, reset the contact form to Step 1
            const panels = document.querySelectorAll('.form-step-panel');
            const steps = document.querySelectorAll('.form-step-indicator');
            const line1 = document.getElementById('stepLine1');
            const line2 = document.getElementById('stepLine2');
            
            if (panels.length > 0 && steps.length > 0) {
                panels.forEach(p => p.classList.remove('active'));
                panels[0].classList.add('active');
                steps.forEach((s, idx) => {
                    s.classList.remove('active', 'completed');
                    if (idx === 0) s.classList.add('active');
                });
                if (line1) line1.classList.remove('active');
                if (line2) line2.classList.remove('active');
            }
        }
    });
});

// Helper function to render seminars on the homepage
function renderSeminars() {
    const grid = document.getElementById('seminarCardsGrid');
    if (!grid) return; // Only run on homepage if grid container exists

    const seminars = JSON.parse(localStorage.getItem('sf_seminars') || '[]');
    grid.innerHTML = '';

    if (seminars.length === 0) {
        grid.innerHTML = '<p style="grid-column: span 2; text-align: center; padding: 40px; color: var(--color-text-muted);">Aktuell sind keine Seminare eingetragen.</p>';
        return;
    }

    seminars.forEach(sem => {
        const card = document.createElement('div');
        card.className = 'seminar-large-card reveal';
        card.id = `card-${sem.id}`;
        
        card.innerHTML = `
            <div class="seminar-card-header">
                <span class="seminar-card-badge">${escapeHtml(sem.audience)}</span>
                <h3>${escapeHtml(sem.title)}</h3>
            </div>
            <p class="seminar-card-desc">${escapeHtml(sem.description)}</p>
            <div class="seminar-card-footer">
                <span class="seminar-meta">
                    <i data-lucide="clock"></i>
                    <span>${escapeHtml(sem.duration)}</span>
                </span>
                <a href="#contact" class="btn-text service-contact-link" data-service="seminar">Anfragen <i data-lucide="arrow-right"></i></a>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // Reinitialize lucide icons for dynamic elements
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Simple HTML escaping helper to prevent XSS in localStorage data
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
