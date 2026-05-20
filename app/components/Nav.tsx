"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Nav({ active }: { active?: "privacy" }) {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="Vintly">
          <Image
            src="/logotypenavbar.png"
            alt="Vintly"
            width={200}
            height={48}
            priority
          />
        </Link>
        <nav className="nav-links">
          <Link href="/#funkcje">Funkcje</Link>
          <Link href="/#jak">Jak to działa</Link>
          <Link href="/#cennik">Cennik</Link>
          <Link href="/#faq">FAQ</Link>
          <Link
            href="/privacy"
            className={active === "privacy" ? "is-active" : ""}
          >
            Privacy
          </Link>
        </nav>
        <a href="#" className="btn btn-primary btn-sm">
          Dodaj do Chrome
          <span className="arrow" aria-hidden>
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}
