import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Vintly",
  description:
    "How Vintly collects, uses, stores, and protects your data. GDPR-compliant.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav active="privacy" />

      <section className="privacy privacy-page">
        <div className="container privacy-wrap">
          <aside className="privacy-aside">
            <span className="eyebrow">Privacy Policy</span>
            <h1 className="privacy-title">
              Your data,
              <br />
              <span className="italic">your rules.</span>
            </h1>
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

          <div className="privacy-content">
            <details id="pp-intro" open>
              <summary>1. Introduction</summary>
              <div className="privacy-body">
                <p>
                  This Privacy Policy describes how <strong>Vintly</strong>{" "}
                  (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects,
                  uses, stores, and protects information when you use the Vintly
                  Chrome Extension (the &quot;Extension&quot;) and the website
                  at vintly.pl (collectively, the &quot;Service&quot;).
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
                    used only for fraud prevention), device type, and timestamp
                    of requests.
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
                  <li>Comply with legal obligations under EU and Polish law.</li>
                </ul>
                <p>
                  <strong>
                    We never sell your data to third parties. We never use your
                    data for advertising or profiling.
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
                  visit; it only reads your active Vinted session, locally, to
                  perform the automation you requested.
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

      <Footer />
    </>
  );
}
