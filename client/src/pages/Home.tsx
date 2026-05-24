import { useState, useEffect } from "react";
import { articles, papers } from "@/data/writing";
import { tweets } from "@/data/tweets";
import type { Article, Paper } from "@/data/writing";
import type { Tweet } from "@/data/tweets";

function useTheme() {
  const themeStorageKey = "site-theme-v2";
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem(themeStorageKey) as "light" | "dark" | null;
    if (stored) return stored;
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "light" ? "dark" : "light")) };
}

// ─── Chevron icon (pure SVG, rotated via CSS on details[open]) ────────────────

function Chevron() {
  return (
    <svg
      className="site-chevron"
      viewBox="0 0 8 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.5 1.5L6.5 6L1.5 10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Writing list rows ────────────────────────────────────────────────────────

function ArticleRow({ article }: { article: Article }) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = Boolean(
    article.bodyHtml &&
    article.wordCount &&
    article.collapseAfterWords &&
    article.wordCount > article.collapseAfterWords
  );
  const articleHtml = article.bodyHtml ? withFootnoteTargets(article.bodyHtml) : "";

  return (
    <div className="site-article-item">
      <div className="site-article-header">
        {article.url ? (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="site-link"
          >
            {article.title}
          </a>
        ) : (
          <span className="site-title">{article.title}</span>
        )}
        <span className="site-label">{article.date ?? "coming soon"}</span>
      </div>

      {article.bodyHtml && (
        <div className="site-article-body">
          <div
            className={`site-article-content${shouldCollapse && !expanded ? " is-collapsed" : ""}`}
            dangerouslySetInnerHTML={{ __html: articleHtml }}
          />
          {shouldCollapse && (
            <button
              className="site-article-toggle"
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? "Show less" : "Read full article"}
            </button>
          )}
          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-substack-link"
            >
              Read the original on Substack
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function withFootnoteTargets(html: string) {
  const footnoteStart = html.indexOf("<h2>Footnotes</h2><ol>");
  if (footnoteStart === -1) return html;

  let index = 0;
  return (
    html.slice(0, footnoteStart) +
    html.slice(footnoteStart).replace(/<li>/g, () => {
      index += 1;
      return `<li id="user-content-fn-${index}">`;
    })
  );
}

function PaperRow({ paper }: { paper: Paper }) {
  return (
    <div className="site-row">
      <div className="site-paper-meta">
        {paper.url ? (
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="site-link"
          >
            {paper.title}
          </a>
        ) : (
          <span className="site-title">{paper.title}</span>
        )}
        <span className="site-venue">
          {paper.venue}
          {paper.year ? ` ${paper.year}` : ""}
        </span>
      </div>
      <span className="site-label">{paper.status}</span>
    </div>
  );
}

function TweetRow({ tweet }: { tweet: Tweet }) {
  return (
    <a
      href={tweet.url}
      rel="noopener noreferrer"
      className="site-tweet"
    >
      <span className="site-tweet-text">{tweet.text}</span>
      <span className="site-tweet-meta">
        {tweet.topic} / {tweet.date}
      </span>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const { theme, toggle } = useTheme();

  return (
    <div className="site-root">
      <div className="site-column">

        {/* ── Header ── */}
        <header className="site-header">
          <div
            className="site-header-bg"
            style={{ backgroundImage: "url('/header-bg.jpeg')" }}
            aria-hidden="true"
          />
          <div className="site-header-top">
            <img src="/avatar.jpeg" alt="Rabib Alam" className="site-avatar" />
            <div>
              <h1 className="site-name">Rabib Alam</h1>
              <p className="site-identity">
                Deploying GPUs and custom silicon @ Meta for the MSL and ads folks.
                Previously Tesla Energy and GM vehicle R&D.
              </p>
            </div>
          </div>
          <nav className="site-nav">
            <a href="#about">about</a>
            <a href="#writing">writing</a>
            <a href="#tweets">tweets</a>
            <a href="#contact">contact</a>
            <button className="site-theme-toggle" onClick={toggle} aria-label="Toggle color scheme">
              {theme === "light" ? "dark" : "light"}
            </button>
          </nav>
        </header>

        {/* ── About ── */}
        <section id="about" className="site-section">
          <h2 className="site-section-label">About</h2>

          <div className="site-prose">
            <p>
              I work on the network infrastructure behind Meta's AI datacenters —
              the fabric, switches, and NICs that let custom accelerators like MTIA
              train and serve at scale. Before Meta, I led projects in the realm of
              fleet-monitoring and over-the-air software update infrastructure at
              Tesla Energy to improve software update quality and speed across
              Tesla's 1M+ energy fleet of Superchargers, Megapacks, and Powerwalls,
              built ad platforms at Loblaw, and worked on vehicle R&D projects at
              General Motors, including ML-based auto-classification for service
              engineering requests.
            </p>
            <p>
              My academic background spans a master's in computer science at Georgia
              Tech, focused on compute architecture, high-performance computing, and
              networking, and a BSc in engineering from the University of Alberta.
            </p>
            <p>
              Across all of it, the same problem keeps pulling at me: at GW scale,
              AI infrastructure is bottlenecked less by raw compute than by how well
              network, silicon, and software are co-designed — and that coordination
              problem is mostly unsolved. I'm using this site to think out loud about
              it, and I'm working toward building in the space.
            </p>
          </div>

          {/* Collapsible work history — pure HTML, no JS */}
          <details className="site-details" open>
            <summary>
              Technical contributions
              <Chevron />
            </summary>
            <ul className="site-work-list">
              <li>
                <strong>Meta</strong> — Driving technical delivery across AI network
                infrastructure — including{" "}
                <a
                  href="https://ai.meta.com/blog/meta-mtia-scale-ai-chips-for-billions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MTIA
                </a>{" "}
                — adding GW-scale compute capacity to datacenters globally and
                powering long-context experiences for billions of Meta AI users.
              </li>
              <li>
                <strong>Tesla Energy</strong> — Migrated 1M+ devices to Tesla's
                internal OTA platform and stood up 600+ automated workflows
                sustaining 99% availability across Superchargers, Megapacks, and
                Powerwalls.
              </li>
              <li>
                <strong>Loblaw Digital</strong> — Led the build of personalized
                ML-ranked ads (replacing bid-only ranking) plus a self-serve
                toolkit — GenAI keyword suggestions, bid forecasting, CSV exports
                — scaling the{" "}
                <a
                  href="https://www.pcexpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PC Express
                </a>{" "}
                ads platform from 15 to 200+ advertisers.
              </li>
            </ul>
          </details>
        </section>

        {/* ── Writing ── */}
        <section id="writing" className="site-section">
          <h2 className="site-section-label">Writing</h2>

          <div className="site-list">
            {articles.map((article) => (
              <ArticleRow key={article.title} article={article} />
            ))}
          </div>

          {papers.length > 0 && (
            <div className="site-papers">
              <h3 className="site-subsection-label">Papers</h3>
              <div className="site-list">
                {papers.map((paper) => (
                  <PaperRow key={paper.title} paper={paper} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── Tweets ── */}
        <section id="tweets" className="site-section">
          <h2 className="site-section-label">Tweets</h2>

          <div className="site-tweet-list">
            {tweets.map((tweet) => (
              <TweetRow key={tweet.url} tweet={tweet} />
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="site-section">
          <h2 className="site-section-label">Contact</h2>
          <div className="site-contact">
            <a
              href="https://x.com/rabib_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/rabibalam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:emailrabibalam@gmail.com">Email</a>
          </div>
        </section>

        <footer className="site-footer">
          © {new Date().getFullYear()} Rabib Alam
        </footer>

      </div>
    </div>
  );
}
