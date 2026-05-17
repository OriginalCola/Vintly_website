"use client";

import Image from "next/image";
import { useEffect } from "react";
import SalesChart from "./components/SalesChart";

export default function Page() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* ============== NAV ============== */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-logo" aria-label="Vintly">
            <Image
              src="/logotypenavbar.png"
              alt="Vintly"
              width={200}
              height={48}
              priority
            />
          </a>
          <nav className="nav-links">
            <a href="#funkcje">Funkcje</a>
            <a href="#jak">Jak to działa</a>
            <a href="#cennik">Cennik</a>
            <a href="#privacy">Privacy</a>
          </nav>
          <a href="#" className="btn btn-primary btn-sm">
            Dodaj do Chrome
            <span className="arrow" aria-hidden>
              ↗
            </span>
          </a>
        </div>
      </header>

      {/* ============== HERO ============== */}
      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1 className="reveal">
              Sprzedawaj <span className="accent italic">mądrzej</span>
              <br />
              na <span className="underline">Vinted</span>.
            </h1>
            <p className="hero-lead reveal reveal-delay-2">
              Vintly automatycznie podbija Twoje ogłoszenia, wystawia setki
              przedmiotów hurtowo i odpowiada kupującym, zanim zdążysz
              odblokować telefon. Mniej klikania, więcej sprzedaży.
            </p>
            <div className="hero-cta reveal reveal-delay-3">
              <a href="#" className="btn btn-primary">
                Dodaj do Chrome
                <span className="arrow" aria-hidden>
                  ↗
                </span>
              </a>
              <a href="#jak" className="btn btn-ghost">
                Zobacz jak to działa
              </a>
            </div>
            <div className="hero-meta reveal reveal-delay-4">
              <span>
                <span className="hero-meta-dot" />
                Działa z Vinted PL · DE · FR · ES
              </span>
              <span>Bez reklam · Bez śledzenia</span>
            </div>
          </div>

          {/* Visual: extension mockup composed in CSS/SVG */}
          <div className="hero-visual" aria-hidden>
            <div className="ext-card main float">
              <div className="ext-head">
                <span className="ext-dot r" />
                <span className="ext-dot y" />
                <span className="ext-dot g" />
                <span className="ext-title">Vintly · Auto-bump</span>
              </div>
              <div className="ext-row">
                <div className="name">
                  <span className="ext-thumb" />
                  Sukienka vintage
                </div>
                <span className="ext-pill">Bumped</span>
              </div>
              <div className="ext-row">
                <div className="name">
                  <span className="ext-thumb b" />
                  Kurtka skórzana
                </div>
                <span className="ext-pill">Bumped</span>
              </div>
              <div className="ext-row">
                <div className="name">
                  <span className="ext-thumb c" />
                  Sneakersy
                </div>
                <span className="ext-pill warn">In 4m</span>
              </div>
              <div className="ext-row">
                <div className="name">
                  <span className="ext-thumb d" />
                  Torebka
                </div>
                <span className="ext-pill warn">In 9m</span>
              </div>
            </div>

            <div className="ext-card product float-2">
              <div className="prod-img">
                <span className="prod-tag">Sold</span>
              </div>
              <div className="prod-title">Levi&apos;s 501 vintage</div>
              <div className="prod-meta">
                <span>Rozm. M</span>
                <strong>89 zł</strong>
              </div>
            </div>

            <div className="ext-card stat float-3">
              <div className="stat-label">Ten miesiąc</div>
              <div className="stat-value">2 847 zł</div>
              <div className="stat-delta">↑ 38% vs poprzedni</div>
              <svg
                className="stat-spark"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,32 L20,28 L40,30 L60,22 L80,24 L100,16 L120,18 L140,10 L160,14 L180,6 L200,4"
                  fill="none"
                  stroke="#f03d1e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0,32 L20,28 L40,30 L60,22 L80,24 L100,16 L120,18 L140,10 L160,14 L180,6 L200,4 L200,40 L0,40 Z"
                  fill="url(#sparkGrad)"
                  opacity="0.25"
                />
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f03d1e" />
                    <stop offset="100%" stopColor="#f03d1e" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TICKER ============== */}
      <div className="ticker" aria-hidden>
        <div className="ticker-inner">
          <span>Auto-bump 24/7</span>
          <span className="dot">●</span>
          <span>Bulk listing</span>
          <span className="dot">●</span>
          <span>Smart replies</span>
          <span className="dot">●</span>
          <span>Real-time analytics</span>
          <span className="dot">●</span>
          <span>GDPR compliant</span>
          <span className="dot">●</span>
          <span>Auto-bump 24/7</span>
          <span className="dot">●</span>
          <span>Bulk listing</span>
          <span className="dot">●</span>
          <span>Smart replies</span>
          <span className="dot">●</span>
          <span>Real-time analytics</span>
          <span className="dot">●</span>
          <span>GDPR compliant</span>
          <span className="dot">●</span>
        </div>
      </div>

      {/* ============== FEATURES (BENTO) ============== */}
      <section id="funkcje" className="features">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow reveal">Funkcje</span>
              <h2 className="reveal reveal-delay-1">
                Wszystko co potrzebne,
                <br />
                <span className="italic">nic czego nie chcesz.</span>
              </h2>
            </div>
            <p className="lead reveal reveal-delay-2">
              Vintly nie udaje rakiety. Robi konkretne rzeczy, których wymaga
              sprzedaż na Vinted — tylko szybciej i bez Twojego udziału.
            </p>
          </div>

          <div className="bento">
            <article className="tile tile-1 reveal">
              <div>
                <span className="num serif italic">01</span>
                <h3>Auto-bump, który nie śpi.</h3>
                <p>
                  Twoje ogłoszenia podbijają się dokładnie wtedy, kiedy
                  kupujący są online. Algorytm uczy się Twojej kategorii i
                  dobiera najlepsze sloty czasowe.
                </p>
              </div>
              <div className="bump-anim">
                <div className="bump-bar" />
                <div className="bump-bar" />
                <div className="bump-bar" />
                <div className="bump-bar" />
                <div className="bump-bar" />
              </div>
            </article>

            <article className="tile tile-2 reveal reveal-delay-1">
              <div>
                <span className="num serif italic">02</span>
                <h3>Smart replies.</h3>
                <p>
                  Szablony, które brzmią po ludzku. Negocjacje, pytania o
                  rozmiar, wysyłkę — Vintly odpowiada w Twoim stylu.
                </p>
              </div>
              <div className="replies">
                <div className="reply in">Cześć, czy ta kurtka jest jeszcze dostępna?</div>
                <div className="reply out">Hej! Tak, jest dostępna ✨</div>
                <div className="reply typing" aria-label="Pisanie">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </article>

            <article className="tile tile-3 reveal reveal-delay-2">
              <div>
                <span className="num serif italic">03</span>
                <h3>Bulk listing.</h3>
                <p>
                  Wystaw 50 przedmiotów w czasie, w którym normalnie
                  wystawiłeś jeden. CSV, drag & drop, auto-tagi.
                </p>
              </div>
              <div className="bulk-grid">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="bulk-item" />
                ))}
              </div>
            </article>

            <article className="tile tile-4 reveal reveal-delay-3">
              <div>
                <span className="num serif italic">04</span>
                <h3>Analityka, która coś znaczy.</h3>
                <p>
                  Realne wykresy zamiast emoji. Zobacz, co się sprzedaje, co
                  wisi i ile Twojego czasu warte jest każde kliknięcie.
                </p>
              </div>
              <div className="chart">
                <SalesChart />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section id="jak" className="how">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow reveal">Jak to działa</span>
              <h2 className="reveal reveal-delay-1">
                Trzy kroki.
                <br />
                <span className="italic">Zero magii.</span>
              </h2>
            </div>
            <p className="lead reveal reveal-delay-2">
              Instalacja zajmuje 30 sekund. Konfiguracja kolejne 2 minuty.
              Reszta dzieje się sama, gdy Ty zajmujesz się czymkolwiek innym.
            </p>
          </div>

          <div className="steps">
            <div className="step reveal">
              <div className="step-num">01</div>
              <h3>Zainstaluj</h3>
              <p>
                Dodaj rozszerzenie z Chrome Web Store. Jeden klik, żadnych
                kont, żadnych formularzy o pierworodnego.
              </p>
            </div>
            <div className="step reveal reveal-delay-1">
              <div className="step-num">02</div>
              <h3>Skonfiguruj</h3>
              <p>
                Zaloguj się do Vinted, wybierz częstotliwość bumpów, ustaw
                szablony odpowiedzi. Gotowe na zawsze.
              </p>
            </div>
            <div className="step reveal reveal-delay-2">
              <div className="step-num">03</div>
              <h3>Zarabiaj</h3>
              <p>
                Vintly pracuje 24/7 nawet kiedy śpisz. Ty tylko pakujesz
                paczki i sprawdzasz statystyki przy kawie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRICING ============== */}
      <section id="cennik" className="pricing">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow reveal">Cennik</span>
              <h2 className="reveal reveal-delay-1">
                Zacznij za darmo.
                <br />
                <span className="italic">Skaluj kiedy chcesz.</span>
              </h2>
            </div>
            <p className="lead reveal reveal-delay-2">
              Bez okresu próbnego, bez ukrytych opłat. Plan Free jest
              naprawdę darmowy. Pro odblokowuje moc.
            </p>
          </div>

          <div className="plans">
            <div className="plan reveal">
              <div className="plan-name">Free</div>
              <div className="plan-price">
                0 zł<span className="per">/zawsze</span>
              </div>
              <p className="plan-desc">
                Wszystko, czego potrzebujesz, żeby przetestować, czy Vintly
                jest dla Ciebie.
              </p>
              <ul className="plan-list">
                <li>Auto-bump do 10 ogłoszeń</li>
                <li>Podstawowe szablony odpowiedzi</li>
                <li>Bulk listing do 5 przedmiotów / dzień</li>
                <li>Statystyki z 7 dni</li>
                <li>Wsparcie e-mail</li>
              </ul>
              <a href="#" className="btn btn-ghost">
                Zacznij za darmo
              </a>
            </div>

            <div className="plan pro reveal reveal-delay-1">
              <span className="plan-badge">Polecane</span>
              <div className="plan-name">Pro</div>
              <div className="plan-price">
                29 zł<span className="per">/miesiąc</span>
              </div>
              <p className="plan-desc">
                Dla tych, którzy traktują Vinted poważnie i nie chcą tracić
                czasu na klikanie.
              </p>
              <ul className="plan-list">
                <li>Auto-bump bez limitu</li>
                <li>Nieograniczone smart replies z AI</li>
                <li>Bulk listing bez limitu + import CSV</li>
                <li>Pełna analityka i eksport danych</li>
                <li>Priorytetowe wsparcie 24/7</li>
                <li>Dostęp do nowych funkcji jako pierwszy</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Wybieram Pro
                <span className="arrow" aria-hidden>
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRIVACY POLICY ============== */}
      <section id="privacy" className="privacy">
        <div className="container privacy-wrap">
          <aside className="privacy-aside">
            <span className="eyebrow reveal">Privacy Policy</span>
            <h2 className="reveal reveal-delay-1">
              Your data,
              <br />
              <span className="italic">your rules.</span>
            </h2>
            <p className="meta">Last updated: 17 May 2026</p>
            <ul className="toc">
              <li>
                <a href="#pp-intro">1. Introduction</a>
              </li>
              <li>
                <a href="#pp-data">2. Data we collect</a>
              </li>
              <li>
                <a href="#pp-use">3. How we use data</a>
              </li>
              <li>
                <a href="#pp-storage">4. Storage &amp; security</a>
              </li>
              <li>
                <a href="#pp-sharing">5. Sharing with third parties</a>
              </li>
              <li>
                <a href="#pp-rights">6. Your rights (GDPR)</a>
              </li>
              <li>
                <a href="#pp-cookies">7. Cookies</a>
              </li>
              <li>
                <a href="#pp-children">8. Children&apos;s privacy</a>
              </li>
              <li>
                <a href="#pp-changes">9. Changes to this policy</a>
              </li>
              <li>
                <a href="#pp-contact">10. Contact</a>
              </li>
            </ul>
          </aside>

          <div className="privacy-content reveal reveal-delay-2">
            <details id="pp-intro" open>
              <summary>1. Introduction</summary>
              <div className="privacy-body">
                <p>
                  This Privacy Policy describes how <strong>Vintly</strong>{" "}
                  (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                  collects, uses, stores, and protects information when you use
                  the Vintly Chrome Extension (the &quot;Extension&quot;) and
                  the website at vintly.pl (collectively, the
                  &quot;Service&quot;).
                </p>
                <p>
                  By installing or using the Extension, you agree to the
                  practices described in this policy. If you do not agree, do
                  not install or use the Extension.
                </p>
                <p>
                  Vintly is not affiliated with, endorsed by, or sponsored by
                  Vinted UAB. Vinted is a trademark of its respective owner.
                </p>
              </div>
            </details>

            <details id="pp-data">
              <summary>2. Data we collect</summary>
              <div className="privacy-body">
                <p>We collect only the minimum data required to operate the Service:</p>
                <ul>
                  <li>
                    <strong>Account data:</strong> email address (when you
                    create a Vintly account), hashed password, account tier
                    (Free / Pro), and subscription status.
                  </li>
                  <li>
                    <strong>Extension usage data:</strong> anonymous usage
                    statistics such as feature usage counts, error logs,
                    extension version, and browser language. We do
                    <em> not </em>collect browsing history outside of Vinted.
                  </li>
                  <li>
                    <strong>Vinted activity (local only):</strong> the
                    Extension reads your active Vinted session in your browser
                    in order to perform automation actions (auto-bump, bulk
                    listing, replies). This data stays in your browser and is
                    never transmitted to our servers, except aggregated
                    statistics you explicitly enable.
                  </li>
                  <li>
                    <strong>Payment data:</strong> handled exclusively by our
                    payment processor (Stripe). We never see or store full
                    card details — we only receive the last 4 digits and a
                    transaction reference.
                  </li>
                  <li>
                    <strong>Technical data:</strong> IP address (truncated and
                    used only for fraud prevention), device type, and
                    timestamp of requests.
                  </li>
                </ul>
                <p>
                  We do <strong>not</strong> collect: real names, addresses,
                  phone numbers, photos, message content from buyers, or any
                  data unrelated to the Service.
                </p>
              </div>
            </details>

            <details id="pp-use">
              <summary>3. How we use your data</summary>
              <div className="privacy-body">
                <p>We use the data we collect strictly to:</p>
                <ul>
                  <li>Operate, maintain, and improve the Extension and the Service.</li>
                  <li>Authenticate users and manage subscriptions.</li>
                  <li>Detect and prevent fraud, abuse, and security incidents.</li>
                  <li>
                    Send transactional emails (account verification, password
                    resets, subscription receipts).
                  </li>
                  <li>
                    Provide customer support when you contact us at
                    <a href="mailto:contact@vintly.pl"> contact@vintly.pl</a>.
                  </li>
                  <li>
                    Comply with legal obligations under EU and Polish law.
                  </li>
                </ul>
                <p>
                  <strong>
                    We never sell your data to third parties. We never use
                    your data for advertising or profiling.
                  </strong>
                </p>
              </div>
            </details>

            <details id="pp-storage">
              <summary>4. Storage &amp; security</summary>
              <div className="privacy-body">
                <p>
                  All personal data is stored on encrypted servers located in
                  the European Union (Frankfurt, Germany). Data in transit is
                  protected by TLS 1.3. Data at rest is encrypted with AES-256.
                </p>
                <p>
                  Passwords are hashed using Argon2id and are never stored or
                  transmitted in plaintext. Access to production systems is
                  restricted to authorized personnel through multi-factor
                  authentication and is logged.
                </p>
                <p>
                  We retain account data for as long as your account is active.
                  Once you delete your account, your data is permanently erased
                  within 30 days, except where we are legally required to
                  retain it (e.g. invoicing data — kept for 5 years under
                  Polish accounting law).
                </p>
              </div>
            </details>

            <details id="pp-sharing">
              <summary>5. Sharing with third parties</summary>
              <div className="privacy-body">
                <p>
                  We share data only with carefully selected processors strictly
                  necessary to run the Service:
                </p>
                <ul>
                  <li>
                    <strong>Stripe</strong> (payments) — processes subscription
                    payments. See Stripe&apos;s privacy policy.
                  </li>
                  <li>
                    <strong>Hetzner</strong> (EU hosting) — provides server
                    infrastructure within the EU.
                  </li>
                  <li>
                    <strong>Postmark</strong> (transactional email) — delivers
                    account-related emails.
                  </li>
                </ul>
                <p>
                  Each processor is bound by a Data Processing Agreement (DPA)
                  and is GDPR-compliant. We do not transfer personal data
                  outside the European Economic Area.
                </p>
                <p>
                  We may disclose data if required by a valid legal request from
                  a competent authority, but we will challenge overly broad
                  requests whenever possible.
                </p>
              </div>
            </details>

            <details id="pp-rights">
              <summary>6. Your rights (GDPR)</summary>
              <div className="privacy-body">
                <p>
                  Under the EU General Data Protection Regulation (GDPR) and
                  Polish data protection law, you have the right to:
                </p>
                <ul>
                  <li>
                    <strong>Access</strong> — request a copy of the personal
                    data we hold about you.
                  </li>
                  <li>
                    <strong>Rectification</strong> — request correction of
                    inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong>Erasure</strong> — request deletion of your data
                    (&quot;right to be forgotten&quot;).
                  </li>
                  <li>
                    <strong>Portability</strong> — receive your data in a
                    machine-readable format (JSON export).
                  </li>
                  <li>
                    <strong>Restriction</strong> — request that we limit
                    processing of your data.
                  </li>
                  <li>
                    <strong>Objection</strong> — object to processing based on
                    legitimate interests.
                  </li>
                  <li>
                    <strong>Withdraw consent</strong> — at any time, where
                    processing is based on consent.
                  </li>
                  <li>
                    <strong>Lodge a complaint</strong> — with the Polish data
                    protection authority (Prezes Urzędu Ochrony Danych
                    Osobowych, uodo.gov.pl).
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, email{" "}
                  <a href="mailto:contact@vintly.pl">contact@vintly.pl</a>. We
                  will respond within 30 days.
                </p>
              </div>
            </details>

            <details id="pp-cookies">
              <summary>7. Cookies</summary>
              <div className="privacy-body">
                <p>The Vintly website uses a minimal set of cookies:</p>
                <ul>
                  <li>
                    <strong>Essential cookies</strong> — required for login
                    sessions and security (e.g. CSRF tokens). These cannot be
                    disabled.
                  </li>
                  <li>
                    <strong>Preference cookies</strong> — remember your
                    settings (language, theme).
                  </li>
                </ul>
                <p>
                  We do <strong>not</strong> use advertising cookies, tracking
                  pixels, or third-party analytics that profile users. The
                  Vintly Extension itself does not set cookies on websites you
                  visit; it only reads your active Vinted session, locally,
                  to perform the automation you requested.
                </p>
                <p>
                  You can clear or block cookies at any time through your
                  browser settings. Doing so may impact login functionality.
                </p>
              </div>
            </details>

            <details id="pp-children">
              <summary>8. Children&apos;s privacy</summary>
              <div className="privacy-body">
                <p>
                  The Service is not directed at children under 16 years of
                  age. We do not knowingly collect personal data from children
                  under 16. If you believe a child has provided us with
                  personal data, please contact us and we will delete it.
                </p>
              </div>
            </details>

            <details id="pp-changes">
              <summary>9. Changes to this policy</summary>
              <div className="privacy-body">
                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes in our practices, technology, legal
                  requirements, or other factors. When we make material
                  changes, we will notify you by email and update the
                  &quot;Last updated&quot; date at the top of the policy.
                </p>
                <p>
                  Continued use of the Service after changes take effect
                  constitutes acceptance of the revised policy.
                </p>
              </div>
            </details>

            <details id="pp-contact">
              <summary>10. Contact</summary>
              <div className="privacy-body">
                <p>
                  If you have questions about this Privacy Policy or how we
                  handle your data, contact our Data Protection Officer:
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@vintly.pl">contact@vintly.pl</a>
                  <br />
                  <strong>Subject line:</strong> &quot;Privacy request&quot;
                </p>
                <p>
                  We aim to respond to all privacy-related inquiries within 5
                  business days.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Image
                src="/icon-with-text.png"
                alt="Vintly"
                width={160}
                height={40}
                className="footer-logo"
              />
              <p className="footer-tag">
                Automatyzacja sprzedaży na Vinted dla ludzi, którzy mają
                ważniejsze rzeczy na głowie niż klikanie &quot;podbij&quot;.
              </p>
            </div>
            <div className="footer-col">
              <h4>Produkt</h4>
              <ul>
                <li>
                  <a href="#funkcje">Funkcje</a>
                </li>
                <li>
                  <a href="#jak">Jak to działa</a>
                </li>
                <li>
                  <a href="#cennik">Cennik</a>
                </li>
                <li>
                  <a href="#">Chrome Web Store</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="mailto:contact@vintly.pl">contact@vintly.pl</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Vintly. All rights reserved.</span>
            <span>Made with care in EU · Not affiliated with Vinted</span>
          </div>
        </div>
      </footer>
    </>
  );
}
