function CFD_Reports() {
  return (
    <>
      <header>
        <h1>CFD Simulation Report: NASA SC(2)-0412 Wing</h1>
        <p>
          Report date: <time dateTime="2026-08-18">August 18, 2026</time>
        </p>
      </header>
      <body>
        <main>
          <section id="overview">
            <h2>Overview</h2>
            <p>
              This report summarizes a 3&times;3 matrix of CFD simulations
              investigating vortex formation on a tapered sweptback
              supercritical wing, varying sweep angle and freestream velocity
              across nine cases.
            </p>
          </section>
          <section>
            <h2>Results Summary</h2>
            <table boundary="1">
              <thead>
                <tr>
                  <th>Sweep Angle</th>
                  <th>Velocity (m/s)</th>
                  <th>Lift Coefficient</th>
                  <th>Drag Coefficient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15°</td>
                  <td>50</td>
                  <td>0.42</td>
                  <td>0.031</td>
                </tr>
                <tr>
                  <td>25°</td>
                  <td>75</td>
                  <td>0.38</td>
                  <td>0.045</td>
                </tr>
                <tr>
                  <td>35°</td>
                  <td>100</td>
                  <td>0.29</td>
                  <td>0.061</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Case Details</h2>
            <article>
              <details>
                <summary>Case 1: 15° sweep, 50 m/s</summary>
                <p>
                  At this configuration, flow separation was minimal and vortex
                  formation near the wingtip was not yet significant.
                </p>
              </details>
            </article>
            <article>
              <details>
                <summary>Case 2: 25° sweep, 75 m/s</summary>
                <p>
                  A moderate leading-edge vortex began to form, with a
                  noticeable increase in induced drag.
                </p>
              </details>
            </article>
            <article>
              <details>
                <summary>Case 3: 35° sweep, 100 m/s</summary>
                <p>
                  Vortex breakdown was observed further inboard, reducing
                  overall lift efficiency.
                </p>
              </details>
            </article>
          </section>
          <section>
            <h2>Figures</h2>
            <figure>
              <img
                src="/Picture1.png"
                alt="Pressure distribution at 15 degree sweep"
              />
              <figcaption>Fig 1. Pressure contour, 15° sweep angle.</figcaption>
            </figure>
            <figure>
              <img
                src="/Picture2.png"
                alt="Vortex formation at 35 degree sweep"
              />
              <figcaption>Fig 2. Vortex formation, 35° sweep angle.</figcaption>
            </figure>
          </section>
          <section>
            <h2>Reference</h2>
            <blockquote>
              "The vortex formation pattern shifts significantly beyond 20
              degrees sweep, with measurable impact on lift efficiency." <br />
              <cite>&mdash; Thesis Chapter 4, Results and Discussion</cite>
            </blockquote>
          </section>
          <section>
            <h2>Feedback</h2>
            <form>
              <fieldset>
                <legend>Feedback</legend>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div>
                  <label htmlFor="rating">Confidence rating (1-10):</label>
                  <input
                    type="range"
                    id="rating"
                    name="rating"
                    min="1"
                    max="10"
                  />
                </div>
                <div>
                  <label htmlFor="review-date">Review date:</label>
                  <input type="date" id="review-date" name="review-date" />
                </div>
                <div>
                  <label htmlFor="comments">Comments:</label>
                </div>
                <div>
                  <textarea id="comments" name="comments"></textarea>
                </div>
                <div>
                  <button type="submit">Submit Feedback</button>
                </div>
              </fieldset>
            </form>
          </section>
          <footer>
            <address>
              Prepared by Jeremiah Oladiti &mdash;{" "}
              <a href="mailto:jerryoladiti@gmail.com">jerryoladiti@gmail.com</a>
            </address>
          </footer>
        </main>
      </body>
    </>
  );
}

export default CFD_Reports;
