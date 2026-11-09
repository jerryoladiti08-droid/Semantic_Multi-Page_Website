function News_flasher() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>News Flasher - Project Documentation</title>
      </head>

      <header>
        <h1>News Flasher &mdash; Project Documentation</h1>
        <p>
          Version 1.2.0 &middot; Last updated
          <time datetime="2026-08-18">August 18, 2026</time>
        </p>
      </header>

      <nav aria-label="Table of contents">
        <h2>Contents</h2>
        <ol>
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li>
            <a href="#status">Build Status</a>
          </li>
          <li>
            <a href="#architecture">Architecture</a>
          </li>
          <li>
            <a href="#glossary">Glossary</a>
          </li>
          <li>
            <a href="#changelog">Changelog</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#setup">Setup Instructions</a>
          </li>
          <li>
            <a href="#feedback">Feedback</a>
          </li>
        </ol>
      </nav>
      <body>
        <main>
          <section id="summary">
            <h2>Summary</h2>
            <p>
              <mark>News Flasher</mark> is a Flutter-based news reader app using
              <abbr title="A predictable state management library for Flutter">
                Provider
              </abbr>
              for state management, consuming articles from the
              <abbr title="JSONPlaceholder is a free fake REST API for testing">
                JSONPlaceholder
              </abbr>
              API.
            </p>
          </section>

          <section id="status">
            <h2>Build Status</h2>

            <p>
              Test coverage:
              <meter value="78" min="0" max="100">
                78%
              </meter>
              78%
            </p>

            <p>
              Build progress:
              <progress value="100" max="100">
                100%
              </progress>
              Complete
            </p>
          </section>

          <section id="architecture">
            <h2>Architecture</h2>
            <p>
              The app follows a simple layered structure. Widgets call into a
              <code>NewsProvider</code> class, which fetches data and exposes it
              via <code>ChangeNotifier</code>.
            </p>

            <pre>
              <code>
                lib/ main.dart providers/ news_provider.dart screens/
                home_screen.dart article_screen.dart models/ article.dart
              </code>
            </pre>

            <p>
              Running the app locally prints output similar to:
              <br />
              <samp>Launching lib/main.dart on Redmi 13C in debug mode...</samp>
            </p>

            <p>
              To hot reload during development, press <kbd>r</kbd> in the
              terminal; to hot restart, press <kbd>R</kbd>.
            </p>
          </section>

          <section id="glossary">
            <h2>Glossary</h2>
            <dl>
              <dt>Provider</dt>
              <dd>
                A Flutter state management approach built on
                <code>InheritedWidget</code>.
              </dd>

              <dt>ADB</dt>
              <dd>
                <dfn>Android Debug Bridge</dfn> &mdash; a command-line tool for
                communicating with an Android device, including over Wi-Fi.
              </dd>

              <dt>JSON</dt>
              <dd>
                <dfn>JavaScript Object Notation</dfn> &mdash; a lightweight
                data-interchange format used by the API this app consumes.
              </dd>
            </dl>
          </section>

          <section id="changelog">
            <h2>Changelog</h2>
            <ul>
              <li>
                <ins>Added wireless ADB debugging support</ins>
              </li>
              <li>
                <del>Removed deprecated HTTP package in favor of Dio</del>
              </li>
              <li>Fixed article list not refreshing on pull-to-refresh</li>
            </ul>
          </section>

          <section id="faq">
            <h2>FAQ</h2>

            <details>
              <summary>Why does the app fail to connect over ADB?</summary>
              <p>
                Confirm the device and computer are on the same network, and
                that
                <code>adb tcpip 5555</code> was run while connected via USB
                first.
              </p>
            </details>

            <details>
              <summary>Can I use a different news API?</summary>
              <p>
                Yes &mdash; swap the base URL in
                <code>news_provider.dart</code> and adjust the model parsing to
                match the new API's response shape.
              </p>
            </details>
          </section>

          <section id="setup">
            <h2>Setup Instructions</h2>
            <ol>
              <li>Clone the repository.</li>
              <li>
                Run <code>flutter pub get</code> to install dependencies.
              </li>
              <li>Connect a device or start an emulator.</li>
              <li>
                Run <code>flutter run</code> to launch the app.
              </li>
            </ol>
          </section>

          <section id="feedback">
            <h2>Feedback</h2>
            <form>
              <fieldset>
                <legend>Report an Issue</legend>

                <div>
                  <label for="issue-type">Issue type:</label>
                  <select id="issue-type" name="issue-type" required>
                    <option value="">-- Select --</option>
                    <option value="bug">Bug</option>
                    <option value="feature">Feature Request</option>
                    <option value="docs">Documentation</option>
                  </select>
                </div>

                <div>
                  <label for="severity">Severity:</label>
                  <input
                    type="range"
                    id="severity"
                    name="severity"
                    min="1"
                    max="5"
                  />
                </div>

                <div>
                  <label for="email">Your email:</label>
                  <input type="email" id="email" name="email" />
                </div>

                <div>
                  <label for="description">Description:</label>
                  <br />
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    cols="40"
                  ></textarea>
                </div>

                <button type="submit">Submit Report</button>
              </fieldset>
            </form>
          </section>
          <footer>
            <address>
              Maintained by Jeremiah Oladiti &mdash;
              <a href="mailto:jerryoladiti@gmail.com">jerryoladiti@gmail.com</a>
            </address>
          </footer>
        </main>
      </body>
    </>
  );
}

export default News_flasher;
