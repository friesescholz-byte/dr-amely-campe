/* ==========================================================================
   Dr. Amely Campe - Premium JS Script (Scholz & Friese UX Pro Max)
   ========================================================================== */

// Default seminars list from amely-campe.de (9 authentic topics, exact original texts)
const DEFAULT_SEMINARS = [
    {
        id: "sem-1",
        title: "Kommunikation mit Tierbesitzern",
        audience: "Tierarztpraxen & Vet. Behörden",
        quotes: [
            "„'Herr Meyer' ignoriert Ihre Ratschläge seit Jahren, obwohl seine Tiere offenbar leiden.“",
            "„'Frau Müller' ist nicht mal pünktlich, droht aber mit einer schlechten Bewertung im Internet.“",
            "„'Frau Schulze' hat vor Ihnen schon Dr. Google und andere ratgebende Quellen konsultiert.“"
        ],
        teaser: "Warum eskalieren Gespräche? Wie kommen Missverständnisse zustande? Warum versteht man mich nicht? Was kann ich in Zukunft tun oder bedenken, wenn es scheinbar wieder schiefgeht?",
        paragraphs: [
            "Der Workshop richtet sich an alle Personen, die in Tierarztpraxen oder Vet. Behörden beschäftigt sind. Die theoretischen Inhalte werden anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht.",
            "Der Workshop hat das Ziel, das Miteinander auf der Beziehungsebene in den Blick zu nehmen und anhand von neuen Erkenntnissen Verständnis füreinander zu schaffen, das Miteinander zu erleichtern und die berufliche Zufriedenheit zu erhöhen."
        ],
        note: ""
    },
    {
        id: "sem-2",
        title: "Kommunikation mit Mitarbeitenden",
        audience: "Teamleiter:innen, Chef:innen & Leitungen",
        quotes: [
            "„Keiner macht hier mal was von selbst.“",
            "„Manchmal glaube ich, die sind alle dumm; wie soll ich es denn noch erklären, damit sie es verstehen?“",
            "„Dieser Zickenkrieg hier im Team nervt mich total.“",
            "„Wenn das hier nicht bald besser wird, dann ziehe ich aber andere Seiten auf.“"
        ],
        teaser: "Was man sagt, was man meint und was der/die Andere versteht, kann sich stark unterscheiden. Warum engagieren die Mitarbeitenden sich nicht wie gewünscht? Welchen Anteil habe ich als ChefIn an Konflikten im Team? Wie kann ich auf Drohungen und Druck verzichten? Welche Arten von Gesprächen mit den Mitarbeitenden gibt es (von kurzen Absprachen zwischen Tür und Angel über Teamgespräche bis zum alljährlichen Entwicklungsgespräch)?",
        paragraphs: [
            "Der Workshop richtet sich an TeamleiterInnen, ChefInnen und LeiterInnen von Tierarztpraxen oder Vet. Behörden. Die theoretischen Inhalte werden anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht.",
            "Der Workshop hat das Ziel, das Miteinander auf der Beziehungsebene in den Blick zu nehmen und anhand von neuen Erkenntnissen Verständnis füreinander zu schaffen, das Miteinander zu erleichtern und die berufliche Zufriedenheit zu erhöhen."
        ],
        note: ""
    },
    {
        id: "sem-3",
        title: "Kommunikation im Team und mit den Chefs",
        audience: "Angestellte in Praxis & Amt",
        quotes: [
            "„Die KollegIn versucht mir meine Arbeit mit Absicht schwer zu machen.“",
            "„Wenn die Vorgesetzten alles besser organisieren würden, müssten wir nicht ständig über dem Limit arbeiten.“",
            "„Es hat keinen Sinn die Vorgesetzten oder KollegInnen auf mein Problem anzusprechen; die drehen sowieso den Spieß um und beschuldigen mich oder machen mich klein.“"
        ],
        teaser: "Warum werde ich nicht gehört und gesehen mit meinen Bedürfnissen? Was geht eigentlich im Kopf der Anderen herum? Wie komme ich raus aus der Spirale der Schuldsuche und Beurteilungen und Stummheit?",
        paragraphs: [
            "Der Workshop richtet sich an Angestellte eines Teams in Tierarztpraxen oder Vet. Behörden. Die theoretischen Inhalte werden anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht.",
            "Der Workshop hat das Ziel, das Miteinander auf der Beziehungsebene in den Blick zu nehmen und anhand von neuen Erkenntnissen Verständnis füreinander zu schaffen, das Miteinander zu erleichtern und die berufliche Zufriedenheit zu erhöhen."
        ],
        note: ""
    },
    {
        id: "sem-4",
        title: "Wie sage ich es meinem Kinde – Analyse einer Befragungssituation im Tierseuchenfall in Theorie und Praxis",
        audience: "Amtstierärzt:innen & Öffentlicher Dienst",
        quotes: [
            "„Der öffentliche, politische und zeitliche Druck ist meist so hoch, dass viele ErmittlerInnen Fehler unbedingt vermeiden und nichts übersehen wollen.“",
            "„Nach dem Motto: ‚Verständnis verbessert Verständigung.‘“"
        ],
        teaser: "Viele Tierärzte im öffentliche Dienst haben heute wenig oder keine Erfahrungen damit, epidemiologische Ermittlungen im Ausbruchsfall durchzuführen. Der öffentliche, politische und zeitliche Druck ist meist so hoch, dass viele ErmittlerInnen Fehler unbedingt vermeiden und nichts übersehen wollen.",
        paragraphs: [
            "Im Workshop wird anhand eines imaginären Beispiels eine Befragungssituation nachgespielt, um sich in die beteiligten KommunikationspartnerInnen einzufühlen. Daran anschließend können die TeilnehmerInnen sich mit dem Kommunikationsmodell von Marshall Rosenberg, der sog. Gewaltfreien Kommunikation (GFK) bekannt machen und darüber gemeinsam reflektieren, welche Gefühle, Bedürfnisse und Wünsche/Bitten die Gesprächsbeteiligten hatten.",
            "Dies soll das Verständnis für die eigene Rolle im Ausbruchsfall ebenso erhellen wie klarer machen, wie es den anderen Beteiligten ergeht. Nach dem Motto „Verständnis verbessert Verständigung.“"
        ],
        note: ""
    },
    {
        id: "sem-5",
        title: "Mußestunde für Führungskräfte",
        audience: "Chef:innen & Praxisleitungen",
        quotes: [
            "„Ich bin mal angetreten, um für Tiere etwas Gutes zu tun. Jetzt geht es nur noch um Orga, Leistung, Arbeit und Geld.“",
            "„Was ist aus meinen Idealen geworden?“",
            "„Wie geht es mir eigentlich wirklich mit meinem Berufsleben?“"
        ],
        teaser: "Reflexion über Ideale, Realität & Zwänge, persönliche Entwicklung und wie man seine Rolle als ChefIn annimmt und ausfüllt. Wir schauen mit etwas Ruhe und Abstand auf Ihre derzeitige Tätigkeit, schauen zurück den Weg entlang, den Sie bereits gegangen sind und reflektieren darüber, in welcher Richtung es ab hier weitergehen soll.",
        paragraphs: [
            "Der Workshop richtet sich an ChefInnen von Tierarztpraxen und LeiterInnen von Vet. Behörden. Der Workshop hat das Ziel, kurz innezuhalten und in der wertschätzenden und mitfühlenden Atmosphäre von KollegInnen zu prüfen, wohin Ihr innerer Kompass zeigt und wie Sie den Weg dorthin finden können – trotz aller Widrigkeiten und Hindernisse.",
            "Anhand von neuen Erkenntnissen und guten Ideen für die Zukunft soll sich die berufliche Zufriedenheit erhöhen."
        ],
        note: ""
    },
    {
        id: "sem-6",
        title: "„Wir sind austherapiert!“ – Praxismanagement mal anders beleuchtet",
        audience: "Alle Personen in Tierarztpraxen",
        quotes: [
            "„Praxismanagement und Zeitmanagement mögen für Andere hilfreich sein, bei uns bringt das alles trotzdem nichts.“",
            "„Burn-Out, lange Krankschreibungen und häufige Kündigungen sind bei uns an der Tagesordnung.“",
            "„Konflikte im Team, fehlende Absprachen untereinander und verstörende Erlebnisse mit PatientenbesitzerInnen belasten das ganze Team und zehren uns aus.“"
        ],
        teaser: "Warum greifen die ganzen Coachings und Managementtools, die wir ausprobiert haben, bei uns nicht? Wie kommen wir aus dem Krisenmodus? Wie kommen wir zurück zu gegenseitiger Wertschätzung, Wohlwollen und Rückendeckung?",
        paragraphs: [
            "Der Workshop richtet sich an alle Personen, die in Tierarztpraxen beschäftigt sind. Die theoretischen Inhalte werden anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht.",
            "Der Workshop hat das Ziel, mal hinter den Vorhang zu schauen. In einem Praxissystem, geht es nicht nur um rationale Ablaufpläne, SOP’s und Co. Es geht auch um Menschen mit Gefühlen und Bedürfnissen und es geht um Beziehungen. Die Teilnehmenden haben die Möglichkeit, das Miteinander auf der Beziehungsebene in den Blick zu nehmen. Anhand von neuen Erkenntnissen können sie verstehen, was die Managementtools bisher hat scheitern lassen und herausfinden was nötig ist, damit sich neben einer besseren Praxisorganisation auch die berufliche Zufriedenheit verbessert."
        ],
        note: ""
    },
    {
        id: "sem-7",
        title: "Schnupperstunde „Supervision“",
        audience: "Tierarztpraxen & Vet. Behörden",
        quotes: [
            "„In meinem Team ist ein Konflikt.“",
            "„Die Patientenbesitzerin hört nicht auf meinen Rat.“",
            "„Meine Chefin interessiert sich nicht für meine Gefühle und Bedürfnisse.“",
            "„Nichts ist hier geregelt.“",
            "„Die Arbeit wächst mir über den Kopf.“"
        ],
        teaser: "Diese und ähnliche Themen des beruflichen Miteinanders von Menschen sind Themen und Inhalte einer Supervision. Man schaut in Begleitung einer professionellen Kraft „aus der Vogelperspektive“ auf den Fall / das Thema, mit dem es einem so schlecht geht. Was ist da eigentlich wirklich zwischen uns passiert? Wie mag es dem anderen damit gehen? Was fühle ich? Und was brauche ich? Wie bekomme ich das Heft des Handelns (wieder) in meine Hand? Was kann ich tun, um meine Bedürfnisse zu befriedigen?",
        paragraphs: [
            "Der Workshop ist als Supervisionseinheit aufgebaut, damit die Teilnehmenden das gemeinsame Arbeiten kennenlernen und eventuelle Berührungsängste abbauen können. Er richtet sich an alle Personen, die in Tierarztpraxen oder Vet. Behörden beschäftigt sind. Die theoretischen Inhalte werden anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht.",
            "Der Workshop hat das Ziel, das Miteinander auf der Beziehungsebene in den Blick zu nehmen und anhand von neuen Erkenntnissen Verständnis füreinander zu schaffen, das Miteinander zu erleichtern und die berufliche Zufriedenheit zu erhöhen."
        ],
        note: "Hinweis: Dieses Thema steht nicht als Vortrag im Angebot."
    },
    {
        id: "sem-8",
        title: "Mental Health – Was kann ich dafür tun (für mich selbst und für mein Team)?",
        audience: "Alle Beschäftigten in Tierarztpraxen",
        quotes: [
            "„Burn-Out, lange Krankschreibungen und häufige Kündigungen sind bei uns an der Tagesordnung.“",
            "„Ich kann arbeiten, soviel es geht; aber meinen ChefInnen ist es nie (gut) genug.“",
            "„Angst, Ärger, Wut und Schuldzuweisungen sind bei uns an der Tagesordnung.“",
            "„Meine Ängste bestimmen mein Leben.“",
            "„Der Tod einer Kollegin hat unser ganzes Team traumatisiert.“"
        ],
        teaser: "Mental Health – die psychische Gesundheit, der Geisteszustand… Gibt es eine Grenze zwischen gesund und krank? Was gefährdet unsere psychische Gesundheit häufig in der Tierarztpraxis? Was kann ich tun, um für mich zu sorgen?",
        paragraphs: [
            "Der Vortrag richtet sich an alle Personen, die in Tierarztpraxen beschäftigt sind. Die theoretischen Inhalte werden anhand von skizzierten Beispielen erklärt. Ziel ist es, einen Überblick zu geben, welche häufig auftretenden Probleme in Tierarztpraxen die psychische Gesundheit der Menschen gefährden und welche eigenen Möglichkeiten man hat, um für sich zu sorgen.",
            "Zudem wird aufgezeigt, welche professionellen Angebote es gibt, um für sich allein oder im Team an Problemlösungen zu arbeiten und berufliche Zufriedenheit (wieder-)herzustellen."
        ],
        note: "Hinweis: Dieses Thema steht nur als Vortrag im Angebot."
    },
    {
        id: "sem-9",
        title: "Praxisübergabe – Sanfter Übergang oder verbitterter Bruch?",
        audience: "Chef:innen von Praxen im Umbruch",
        quotes: [
            "„Die machen einfach alles anders, dabei hatte ich doch alles so gut in Gang.“",
            "„Ich gehöre doch noch nicht zum alten Eisen, warum hören die mir nicht mehr zu?“",
            "„Ich will nicht rausgeekelt werden, ich will selber meinen Abschied machen.“",
            "„Hätte ich mich bloß nicht darauf eingelassen; den werde ich nie los.“"
        ],
        teaser: "Die Übergabe einer Praxis ist eine heikle Zeit, nicht nur für den/die SeniorpartnerIn, auch für das Team und die neue Leitung. Das finanzielle und rechtliche ist geklärt, aber haben auch alle Beteiligten verarbeitet, was dieser Umschwung bedeutet? Ist klar, wie es weitergeht? Gibt es alternative Szenarien, wenn der gewählte Weg nicht gut läuft?",
        paragraphs: [
            "Der Workshop richtet sich an ChefInnen von Tierarztpraxen, die sich im Umbruch befinden. Er hat das Ziel, kurz innezuhalten und in der wertschätzenden und mitfühlenden Atmosphäre von KollegInnen in der gleichen Lebenssituation zu prüfen, ob auch im Herzen alles geklärt ist. Wir klopfen ab, ob das Team wirklich mitgenommen wurde und ob die Ausscheidenden und die Nachfolgenden auch auf der Beziehungsebene alles geklärt haben.",
            "Die theoretischen Inhalte sollen anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht werden. Der Workshop hat das Ziel, das Miteinander auf der Beziehungsebene in den Blick zu nehmen und anhand von neuen Erkenntnissen Verständnis füreinander zu schaffen und die Praxisübergabe zu aller Zufriedenheit zu gestalten."
        ],
        note: ""
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA SEEDING (Seed/Update to authentic seminars)
    const currentVersion = localStorage.getItem('sf_seminars_version');
    if (currentVersion !== 'v5') {
        localStorage.setItem('sf_seminars', JSON.stringify(DEFAULT_SEMINARS));
        localStorage.setItem('sf_seminars_version', 'v5');
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

        // Close when clicking mobile CTA button
        const mobileCta = document.getElementById('mobileMenuCta');
        if (mobileCta) {
            mobileCta.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        }

        // Close when tapping outside the mobile drawer
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
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

    // 6. HERO SLIDESHOW CONTROLLER (5-second auto-advance + interactive dots)
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.slider-indicator .dot');
    let currentHeroSlide = 0;
    let heroInterval = null;

    function goToHeroSlide(index) {
        if (heroSlides.length === 0) return;
        currentHeroSlide = (index + heroSlides.length) % heroSlides.length;
        heroSlides.forEach((s, idx) => {
            s.classList.toggle('active', idx === currentHeroSlide);
        });
        heroDots.forEach((d, idx) => {
            d.classList.toggle('active', idx === currentHeroSlide);
        });
    }

    function startHeroSlideShow() {
        if (heroInterval) clearInterval(heroInterval);
        heroInterval = setInterval(() => {
            goToHeroSlide(currentHeroSlide + 1);
        }, 5000);
    }

    heroDots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = parseInt(dot.getAttribute('data-index'), 10);
            goToHeroSlide(idx);
            startHeroSlideShow(); // restart the 5s timer on manual click
        });
    });

    if (heroSlides.length > 0) {
        startHeroSlideShow();
    }

    // 7. MULTI-STEP WIZARD FORM & CF TURNSTILE HANDLING
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

        // Step 1 -> Step 2 (Message is optional)
        btnNext1.addEventListener('click', () => {
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
            const seminarTitle = link.getAttribute('data-seminar-title');
            const formatSelect = document.getElementById('format');
            if (formatSelect && serviceVal) {
                formatSelect.value = serviceVal;
            }
            if (seminarTitle) {
                const messageField = document.getElementById('message');
                if (messageField) {
                    messageField.value = `Guten Tag Frau Dr. Campe,\n\nich interessiere mich für das Thema:\n„${seminarTitle}“\n\nBitte senden Sie mir hierzu nähere Informationen zu.\n\nMit freundlichen Grüßen`;
                }
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
        
        // Quotes box
        let quotesHtml = '';
        if (sem.quotes && Array.isArray(sem.quotes) && sem.quotes.length > 0) {
            quotesHtml = `
                <div class="seminar-quotes-box">
                    <ul class="seminar-quotes-list">
                        ${sem.quotes.map(q => `<li>${escapeHtml(q)}</li>`).join('')}
                    </ul>
                </div>
            `;
        } else if (sem.quote) {
            quotesHtml = `
                <div class="seminar-quotes-box">
                    <ul class="seminar-quotes-list">
                        <li>${escapeHtml(sem.quote)}</li>
                    </ul>
                </div>
            `;
        }

        // Original flowing paragraphs (verbatim without artificial labels)
        let paragraphsHtml = '';
        const paras = sem.paragraphs || [sem.targetGroup, sem.method, sem.goal].filter(Boolean);
        if (paras.length > 0) {
            paragraphsHtml = paras.map(p => `<p class="seminar-orig-paragraph">${escapeHtml(p)}</p>`).join('');
        }

        const noteHtml = sem.note ? `
            <div class="seminar-card-note">
                <i data-lucide="info"></i>
                <span>${escapeHtml(sem.note)}</span>
            </div>
        ` : '';

        const hasDetails = Boolean(paragraphsHtml || noteHtml);

        card.innerHTML = `
            <div class="seminar-card-content">
                <div class="seminar-card-header">
                    <span class="seminar-card-badge">${escapeHtml(sem.audience || 'Tiermedizin')}</span>
                    <h3>${escapeHtml(sem.title)}</h3>
                </div>
                ${quotesHtml}
                <div class="seminar-card-teaser-wrapper">
                    <p class="seminar-card-desc">${escapeHtml(sem.teaser || sem.description || '')}</p>
                </div>
                ${hasDetails ? `
                    <div class="seminar-card-details-wrapper" id="details-${sem.id}">
                        <div class="seminar-card-details-inner">
                            <div class="seminar-details-content">
                                ${paragraphsHtml}
                                ${noteHtml}
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>
            <div class="seminar-card-footer">
                ${hasDetails ? `
                    <button type="button" class="btn-toggle-seminar" data-card-id="card-${sem.id}" aria-expanded="false">
                        <span class="toggle-text">Mehr erfahren</span>
                        <i data-lucide="chevron-down" class="toggle-icon"></i>
                    </button>
                ` : '<span></span>'}
                <a href="#contact" class="btn-text service-contact-link" data-service="seminar" data-seminar-title="${escapeHtml(sem.title)}">Thema anfragen <i data-lucide="arrow-right"></i></a>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // Expand/Collapse event listeners
    grid.querySelectorAll('.btn-toggle-seminar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cardId = btn.getAttribute('data-card-id');
            const card = document.getElementById(cardId);
            if (!card) return;

            const isExpanded = card.classList.toggle('is-expanded');
            btn.setAttribute('aria-expanded', isExpanded);
            const textSpan = btn.querySelector('.toggle-text');
            if (textSpan) {
                textSpan.textContent = isExpanded ? 'Weniger anzeigen' : 'Mehr erfahren';
            }
        });
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
