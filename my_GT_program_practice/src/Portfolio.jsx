import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function Portfolio() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Jeremiah Oladiti</h1>
        <nav>
          <a href="#about">About</a> | <a href="#Skills">Skills</a> |{" "}
          <a href="#Projects">Projects</a> | <a href="#Contact">Contact</a>{" "}
          |{" "}
        </nav>
      </header>
      <body>
        <main>
          <section>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quos deleniti alias, sed iure, rem numquam dignissimos adipisci
              voluptates, id culpa. Quos ea sed assumenda debitis quia expedita
              cum nulla!
            </p>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              <li>HTML & CSS</li>
              <li>React</li>
              <li>Flutter</li>
            </ul>
          </section>
          <section>
            <h2>Projects</h2>
            <article>
              <h3>Personal Portfolio</h3>
              <p>
                A modern developer portfolio built with Next.js, TypeScript and
                Tailwind CSS featuring reusable components, smooth animations
                and responsive layouts.
              </p>
              <a href="https://my-portfolio-nine-sigma-82.vercel.app/">
                view project
              </a>
            </article>
            <article>
              <h3>Finance Manager</h3>
              <p>
                A finance tracking application with deposits, withdrawals,
                transaction history and local storage persistence for seamless
                financial management.
              </p>
              <a href="https://finance-manager-taupe-one.vercel.app/">
                view project
              </a>
            </article>
          </section>
          <footer>
            <p>
              Contact:{" "}
              <a href="mailto: jerryoladiti08@gmail.com">
                jerryoladiti@gmail.com
              </a>
            </p>
          </footer>
        </main>
      </body>
    </>
  );
}

export default Portfolio;
