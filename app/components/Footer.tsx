import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
                <Link href="/#funkcje">Funkcje</Link>
              </li>
              <li>
                <Link href="/#jak">Jak to działa</Link>
              </li>
              <li>
                <Link href="/#cennik">Cennik</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
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
                <Link href="/privacy">Privacy Policy</Link>
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
  );
}
