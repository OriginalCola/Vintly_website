"use client";

import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SalesChart from "./components/SalesChart";

const FAQ = [
  {
    q: "Czy Vintly jest legalne i czy mogę dostać bana na Vinted?",
    a: "Vintly automatyzuje czynności, które i tak codziennie wykonujesz ręcznie — podbijanie ogłoszeń, odpowiadanie kupującym, wystawianie przedmiotów. Działa z Twoją normalną sesją w przeglądarce, z naturalnymi opóźnieniami i w granicach limitów Vinted. W historii produktu nie odnotowaliśmy bana spowodowanego użyciem Vintly. Mimo to: nie oferujemy gwarancji ani ubezpieczenia konta — używasz na własną odpowiedzialność.",
  },
  {
    q: "Czy moje hasło do Vinted jest bezpieczne?",
    a: "Nie przechowujemy Twojego hasła. Vintly korzysta z aktywnej sesji Vinted w Twojej przeglądarce — tej samej, którą i tak masz otwartą po zalogowaniu. Hasło nigdy nie opuszcza Twojego komputera, nie jest wysyłane na nasze serwery, nie jest logowane.",
  },
  {
    q: "Na jakich systemach i przeglądarkach działa?",
    a: "Wszędzie, gdzie działa Chrome — Windows, macOS, Linux, ChromeOS. Edge i Brave (oparte na Chromium) też. Safari nie jest wspierane. Smartfon też nie — Vintly to rozszerzenie desktopowe.",
  },
  {
    q: "Co się dzieje, kiedy Vinted zaktualizuje swoją stronę?",
    a: "Pilnujemy zmian po stronie Vinted i wypuszczamy aktualizacje średnio raz w tygodniu. Jeśli coś się zepsuje, zwykle naprawiamy w 24–48 godzin i automatycznie aktualizujemy rozszerzenie — nic nie musisz robić.",
  },
  {
    q: "Mogę anulować Pro w każdej chwili?",
    a: "Tak. Klik w ustawieniach konta i koniec — bez okresu wypowiedzenia, bez pytań „dlaczego odchodzisz”, bez retencji. Po anulowaniu Pro działa do końca opłaconego miesiąca, potem konto wraca do planu Free.",
  },
  {
    q: "Jak często Vintly podbija moje ogłoszenia?",
    a: "Algorytm pilnuje minimalnego odstępu wymaganego przez Vinted (3 dni dla większości kategorii) i wybiera sloty czasowe, w których kupujący Twojej kategorii są najbardziej aktywni. Możesz też ustawić własny harmonogram, jeśli wolisz pełną kontrolę.",
  },
  {
    q: "Czy smart replies brzmią naturalnie, czy jak bot?",
    a: "Każdą odpowiedź konfigurujesz pod siebie — Vintly podpowiada szablon, ale finalnie używa Twojego stylu, Twoich emoji, Twoich skrótów. Pro odblokowuje generowanie odpowiedzi z AI dopasowanych do kontekstu rozmowy. Zawsze możesz włączyć tryb „pokaż przed wysłaniem” i ręcznie zaakceptować każdą wiadomość.",
  },
  {
    q: "Mogę używać Vintly na kilku kontach Vinted?",
    a: "W planie Free — jedno konto. Pro pozwala na maks. 3 aktywne konta jednocześnie, przełączane jednym kliknięciem. Każde konto ma osobne ustawienia bumpów, szablonów i statystyki.",
  },
];

export default function Page() {
  useEffect(() => {
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
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />

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
              przedmiotów hurtowo i odpowiada kupującym, zanim zdążysz odblokować
              telefon. Mniej klikania, więcej sprzedaży.
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
              sprzedaż na Vinted - tylko szybciej i bez Twojego udziału.
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
                  rozmiar, wysyłkę - Vintly odpowiada w Twoim stylu.
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
                  Wystaw 50 przedmiotów w czasie, w którym normalnie wystawiłeś
                  jeden. CSV, drag &amp; drop, auto-tagi.
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
                Vintly pracuje 24/7 nawet kiedy śpisz. Ty tylko pakujesz paczki
                i sprawdzasz statystyki przy kawie.
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
              Bez okresu próbnego, bez ukrytych opłat. Plan Free jest naprawdę
              darmowy. Pro odblokowuje moc.
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

      {/* ============== FAQ ============== */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow reveal">FAQ</span>
              <h2 className="reveal reveal-delay-1">
                Pytania,
                <br />
                <span className="italic">które najczęściej dostajemy.</span>
              </h2>
            </div>
            <p className="lead reveal reveal-delay-2">
              Nie znalazłeś odpowiedzi? Napisz do nas:{" "}
              <a href="mailto:contact@vintly.pl" className="lead-link">
                contact@vintly.pl
              </a>
              . Odpowiadamy zwykle w ciągu kilku godzin.
            </p>
          </div>

          <div className="faq-list reveal">
            {FAQ.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span className="faq-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-q">{item.q}</span>
                  <span className="faq-icon" aria-hidden />
                </summary>
                <div className="faq-a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
