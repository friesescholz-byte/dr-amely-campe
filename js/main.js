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
        teaser: "Was man sagt, was man meint und was der/die Andere versteht, kann sich stark unterscheiden. Warum engagieren die Mitarbeitenden sich nicht wie gewünscht? Welchen Anteil habe ich als Chef:in an Konflikten im Team? Wie kann ich auf Drohungen und Druck verzichten? Welche Arten von Gesprächen mit den Mitarbeitenden gibt es (von kurzen Absprachen zwischen Tür und Angel über Teamgespräche bis zum alljährlichen Entwicklungsgespräch)?",
        paragraphs: [
            "Der Workshop richtet sich an Teamleiter:innen, Chef:innen und Leiter:innen von Tierarztpraxen oder Vet. Behörden. Die theoretischen Inhalte werden anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht.",
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
            "„Der öffentliche, politische und zeitliche Druck ist meist so hoch, dass viele Ermittler:innen Fehler unbedingt vermeiden und nichts übersehen wollen.“",
            "„Nach dem Motto: ‚Verständnis verbessert Verständigung.‘“"
        ],
        teaser: "Viele Tierärzt:innen im öffentlichen Dienst haben heute wenig oder keine Erfahrungen damit, epidemiologische Ermittlungen im Ausbruchsfall durchzuführen. Der öffentliche, politische und zeitliche Druck ist meist so hoch, dass viele Ermittler:innen Fehler unbedingt vermeiden und nichts übersehen wollen.",
        paragraphs: [
            "Im Workshop wird anhand eines imaginären Beispiels eine Befragungssituation nachgespielt, um sich in die beteiligten Kommunikationspartner:innen einzufühlen. Daran anschließend können die Teilnehmer:innen sich mit dem Kommunikationsmodell von Marshall Rosenberg, der sog. Gewaltfreien Kommunikation (GFK) bekannt machen und darüber gemeinsam reflektieren, welche Gefühle, Bedürfnisse und Wünsche/Bitten die Gesprächsbeteiligten hatten.",
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
        teaser: "Du reflektierst über Ideale, Realität & Zwänge, Deine persönliche Entwicklung und wie Du Deine Rolle als Chef:in annimmst und ausfüllst. Wir schauen mit etwas Ruhe und Abstand auf Deine derzeitige Tätigkeit, blicken zurück den Weg entlang, den Du bereits gegangen bist und reflektieren darüber, in welcher Richtung es ab hier weitergehen soll.",
        paragraphs: [
            "Der Workshop richtet sich an Dich als Chef:in einer Tierarztpraxis oder Leiter:in einer Vet. Behörde. Der Workshop hat das Ziel, kurz innezuhalten und in der wertschätzenden und mitfühlenden Atmosphäre von Kolleg:innen zu prüfen, wohin Dein innerer Kompass zeigt und wie Du den Weg dorthin finden kannst – trotz aller Widrigkeiten und Hindernisse.",
            "Anhand von neuen Erkenntnissen und mit Hilfe von guten Ideen für Deine nächsten Schritte wird sich Deine berufliche Zufriedenheit erhöhen."
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
            "Der Workshop ist als Supervisionseinheit aufgebaut, damit Ihr als Teilnehmende das gemeinsame Arbeiten und die Vorzüge der Supervision kennenlernt. Er richtet sich an alle Personen, die in Tierarztpraxen oder Vet. Behörden beschäftigt sind. Die theoretischen Inhalte erkläre ich Euch anhand von Euren aktuellen Beispielen, damit sie gleich praktisch für Euch nutzbar sind.",
            "Der Workshop hat das Ziel, das Miteinander auf der Beziehungsebene in den Blick zu nehmen. Dabei begleite ich Dich und Euch dabei, neue Erkenntnisse über das eigene Verhalten und die Dynamiken im Team zu gewinnen. So entsteht ein tieferes Verständnis füreinander, das den Alltag erleichtert, Konflikte entschärft und die berufliche Zufriedenheit nachhaltig stärkt."
        ],
        note: "Hinweis: Dieses Thema steht nicht als Vortrag im Angebot."
    },
    {
        id: "sem-8",
        title: "Mental Health – Was kann ich dafür tun (für mich selbst und für mein Team)?",
        audience: "Alle Beschäftigten in Tierarztpraxen",
        quotes: [
            "„Burn-Out, lange Krankschreibungen und häufige Kündigungen sind bei uns an der Tagesordnung.“",
            "„Ich kann arbeiten, soviel es geht; aber meinen Chef:innen ist es nie (gut) genug.“",
            "„Angst, Ärger, Wut und Schuldzuweisungen sind bei uns an der Tagesordnung.“",
            "„Meine Ängste bestimmen mein Leben.“",
            "„Der Tod einer Kollegin hat unser ganzes Team traumatisiert.“"
        ],
        teaser: "Mental Health – die psychische Gesundheit, der Geisteszustand… Gibt es eine Grenze zwischen gesund und krank? Was gefährdet unsere psychische Gesundheit häufig in der Tierarztpraxis? Was kann ich tun, um für mich zu sorgen?",
        paragraphs: [
            "Der Vortrag richtet sich an alle Personen, die in Tierarztpraxen beschäftigt sind. Die theoretischen Inhalte werden anhand von skizzierten Beispielen erklärt. Ziel ist es, einen Überblick zu geben, welche häufig auftretenden Probleme in Tierarztpraxen die psychische Gesundheit der Menschen gefährden und welche eigenen Möglichkeiten man hat, um für sich zu sorgen.",
            "Zudem möchte ich Dir aufzeigen, welche professionellen Angebote es gibt, damit Du für Dich selbst oder im Team an Problemlösungen arbeiten und berufliche Zufriedenheit (wieder-)herzustellen kannst."
        ],
        note: "Hinweis: Dieses Thema steht nur als (interaktiver) Vortrag im Angebot."
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
            "Der Workshop richtet sich an Dich, wenn Du Chef:in einer Tierarztpraxis oder -Klinik bist, die sich im Umbruch befindet – egal, ob Du der abgebende oder der übernehmende Part bist. Du hast hier Gelegenheit, kurz innezuhalten und in der wertschätzenden und mitfühlenden Atmosphäre von Kolleg:innen in der gleichen Lebenssituation zu prüfen, ob Du auch im Herzen alles geklärt hast. Wir klopfen ab, ob Ihr das Team wirklich mitgenommen habt und ob die Ausscheidenden und die Nachfolgenden auch auf der Beziehungsebene alles geklärt haben.",
            "Die theoretischen Inhalte sollen anhand von echten Beispielen der Teilnehmenden erklärt und damit gleich praktisch nutzbar gemacht werden. Der Workshop hat das Ziel, das Miteinander auf der Beziehungsebene in den Blick zu nehmen und anhand von neuen Erkenntnissen Verständnis füreinander zu schaffen und die Praxisübergabe zu aller Zufriedenheit zu gestalten."
        ],
        note: ""
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA SEEDING (Seed/Update to authentic seminars)
    const currentVersion = localStorage.getItem('sf_seminars_version');
    if (currentVersion !== 'v7') {
        localStorage.setItem('sf_seminars', JSON.stringify(DEFAULT_SEMINARS));
        localStorage.setItem('sf_seminars_version', 'v7');
    }

    // 2. RENDER SEMINARS ON HOMEPAGE
    renderSeminars();

    // 2b. INIT HAPTISCHER GEDANKEN-STACK (OPTION C - SCHOLZ & FRIESE UX PRO MAX)
    initGedankenStack();

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

    // 6. HERO SLIDESHOW CONTROLLER (Synchrone Vordergrund- & Hintergrund-Slideshow)
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroBgSlides = document.querySelectorAll('.hero-bg-slide');
    const heroDots = document.querySelectorAll('.slider-indicator .dot');
    let currentHeroSlide = 0;
    let heroInterval = null;

    function goToHeroSlide(index) {
        if (heroSlides.length === 0) return;
        currentHeroSlide = (index + heroSlides.length) % heroSlides.length;
        heroSlides.forEach((s, idx) => {
            s.classList.toggle('active', idx === currentHeroSlide);
        });
        if (heroBgSlides.length > 0) {
            heroBgSlides.forEach((b, idx) => {
                b.classList.toggle('active', idx === currentHeroSlide);
            });
        }
        heroDots.forEach((d, idx) => {
            d.classList.toggle('active', idx === currentHeroSlide);
        });
    }

    function startHeroSlideShow() {
        if (heroInterval) clearInterval(heroInterval);
        heroInterval = setInterval(() => {
            goToHeroSlide(currentHeroSlide + 1);
        }, 6000);
    }

    heroDots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = parseInt(dot.getAttribute('data-index'), 10);
            goToHeroSlide(idx);
            startHeroSlideShow();
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

    // 7. EVENT DELEGATION FOR CONTACT LINKS & SMART ORIGIN SCROLL RESTORATION
    document.addEventListener('click', (e) => {
        const contactLink = e.target.closest('a[href="#contact"], .service-contact-link');
        if (contactLink) {
            // Save the exact current scroll position before navigating to #contact
            const currentScrollY = window.scrollY;
            sessionStorage.setItem('sf_contact_origin_scrollY', currentScrollY);

            // Push history state with exact scroll position so browser back button returns precisely here
            history.pushState({ originScrollY: currentScrollY, fromContact: true }, '', '#contact');

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
            }

            // Reset the contact form to Step 1
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

            // Smoothly scroll down to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                e.preventDefault();
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Handle browser back button (Pfeil zurück) to reliably return to exact origin
    window.addEventListener('popstate', (e) => {
        if (e.state && typeof e.state.originScrollY === 'number') {
            window.scrollTo({ top: e.state.originScrollY, behavior: 'smooth' });
        } else {
            const savedY = sessionStorage.getItem('sf_contact_origin_scrollY');
            if (savedY !== null && !window.location.hash.includes('contact')) {
                window.scrollTo({ top: parseFloat(savedY), behavior: 'smooth' });
            }
        }
    });

    // Handle in-page return button (#btnContactReturn)
    const btnContactReturn = document.getElementById('btnContactReturn');
    if (btnContactReturn) {
        btnContactReturn.addEventListener('click', () => {
            const savedY = sessionStorage.getItem('sf_contact_origin_scrollY');
            if (savedY !== null) {
                window.scrollTo({ top: parseFloat(savedY), behavior: 'smooth' });
                if (window.location.hash === '#contact') {
                    history.replaceState(null, '', window.location.pathname + window.location.search);
                }
            } else if (window.history.length > 1) {
                window.history.back();
            } else {
                const servicesSec = document.getElementById('services');
                if (servicesSec) servicesSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
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
                    <div class="seminar-title-row">
                        <h3>${escapeHtml(sem.title)}</h3>
                        <span class="seminar-mobile-toggle" aria-hidden="true">
                            <i data-lucide="chevron-down" class="seminar-mobile-chevron"></i>
                        </span>
                    </div>
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
        
        // Mobile Accordion: Click header to toggle open/close
        const cardHeader = card.querySelector('.seminar-card-header');
        if (cardHeader) {
            cardHeader.addEventListener('click', (e) => {
                if (window.innerWidth > 768) return;
                e.stopPropagation();
                const isMobileOpen = card.classList.contains('is-mobile-open');
                // Close other open seminar cards
                grid.querySelectorAll('.seminar-large-card.is-mobile-open').forEach(c => {
                    if (c !== card) c.classList.remove('is-mobile-open');
                });
                if (isMobileOpen) {
                    card.classList.remove('is-mobile-open');
                } else {
                    card.classList.add('is-mobile-open');
                }
            });
        }

        // When collapsed on mobile, clicking anywhere on the card expands it
        card.addEventListener('click', (e) => {
            if (window.innerWidth > 768) return;
            if (card.classList.contains('is-mobile-open')) return;
            if (e.target.closest('a') || e.target.closest('button')) return;
            grid.querySelectorAll('.seminar-large-card.is-mobile-open').forEach(c => {
                if (c !== card) c.classList.remove('is-mobile-open');
            });
            card.classList.add('is-mobile-open');
        });

        grid.appendChild(card);
    });

    // Expand/Collapse event listeners for desktop
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

// ==========================================================================
// HAPTISCHER GEDANKEN-STACK (OPTION C - SCHOLZ & FRIESE UX PRO MAX)
// ==========================================================================
function initGedankenStack() {
    const stack = document.getElementById('gedankenCardsStack');
    if (!stack) return;

    const cards = Array.from(stack.querySelectorAll('.gedanken-card'));
    if (cards.length === 0) return;

    const totalQuoteCards = 8; // cards 0..7 are quotes, card 8 is the final resolution card
    let currentIndex = 0;

    const counterVal = document.getElementById('gedankenCounterVal');
    const counterLabel = document.getElementById('gedankenCounterLabel');
    const dashes = Array.from(document.querySelectorAll('#gedankenDashes .dash-item'));
    const btnPrev = document.getElementById('btnGedankenPrev');
    const btnNext = document.getElementById('btnGedankenNext');
    const btnRestart = document.getElementById('btnGedankenRestart');

    function updateStack(newIndex) {
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= cards.length) newIndex = cards.length - 1;

        currentIndex = newIndex;

        cards.forEach((card, idx) => {
            card.classList.remove('is-active', 'is-next', 'is-queued', 'is-queued-hidden', 'is-swiped-left', 'is-swiped-right');

            if (idx === currentIndex) {
                card.classList.add('is-active');
            } else if (idx === currentIndex + 1) {
                card.classList.add('is-next');
            } else if (idx === currentIndex + 2) {
                card.classList.add('is-queued');
            } else if (idx > currentIndex + 2) {
                card.classList.add('is-queued-hidden');
            } else if (idx < currentIndex) {
                card.classList.add('is-swiped-left');
            }
        });

        // Toggle final card class on stack for smooth height adaptation
        stack.classList.toggle('is-showing-final', currentIndex === cards.length - 1);

        // Update Counter
        if (counterVal && counterLabel) {
            if (currentIndex < totalQuoteCards) {
                counterLabel.textContent = 'Gedanke aus dem Alltag';
                counterVal.textContent = `${currentIndex + 1} von ${totalQuoteCards}`;
            } else {
                counterLabel.textContent = 'Fazit & Ausblick';
                counterVal.textContent = 'Zusammenfassung';
            }
        }

        // Update Dashes
        dashes.forEach((dash, idx) => {
            dash.classList.remove('active', 'completed');
            if (currentIndex === cards.length - 1) {
                dash.classList.add('completed');
            } else if (idx === currentIndex) {
                dash.classList.add('active');
            } else if (idx < currentIndex) {
                dash.classList.add('completed');
            }
        });

        // Update Prev Button
        if (btnPrev) {
            btnPrev.disabled = currentIndex === 0;
        }

        // Update Next Button
        if (btnNext) {
            if (currentIndex < totalQuoteCards - 1) {
                btnNext.style.display = 'inline-flex';
                btnNext.innerHTML = '<span>Weiter</span><i data-lucide="arrow-right"></i>';
            } else if (currentIndex === totalQuoteCards - 1) {
                btnNext.style.display = 'inline-flex';
                btnNext.innerHTML = '<span>Fazit ansehen</span><i data-lucide="arrow-right"></i>';
            } else {
                // Final card reached
                btnNext.style.display = 'none';
            }
            if (window.lucide) window.lucide.createIcons();
        }
    }

    // Card click: clicking active card advances to next (except final card)
    cards.forEach((card, idx) => {
        card.addEventListener('click', (e) => {
            // Ignore clicks on links or restart button inside final card
            if (e.target.closest('a') || e.target.closest('button')) return;
            if (idx === currentIndex && currentIndex < cards.length - 1) {
                updateStack(currentIndex + 1);
            }
        });
    });

    // Button Next
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                updateStack(currentIndex + 1);
            }
        });
    }

    // Button Prev
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                updateStack(currentIndex - 1);
            }
        });
    }

    // Restart button in final card
    if (btnRestart) {
        btnRestart.addEventListener('click', () => {
            updateStack(0);
        });
    }

    // Dash click navigation
    dashes.forEach((dash, idx) => {
        dash.addEventListener('click', () => {
            updateStack(idx);
        });
    });

    // Touch swipe support on stack
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    stack.addEventListener('touchstart', (e) => {
        if (!e.changedTouches || e.changedTouches.length === 0) return;
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    stack.addEventListener('touchend', (e) => {
        if (!e.changedTouches || e.changedTouches.length === 0) return;
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Ensure horizontal swipe is dominant and significant (> 40px)
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
                // Swipe left -> Next card
                if (currentIndex < cards.length - 1) {
                    updateStack(currentIndex + 1);
                }
            } else {
                // Swipe right -> Prev card
                if (currentIndex > 0) {
                    updateStack(currentIndex - 1);
                }
            }
        }
    }, { passive: true });

    // Initialize stack state
    updateStack(0);
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
