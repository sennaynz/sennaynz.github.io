import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-main">
        <div className="container-header">
          <section className="about-me">
            <h1 className="title">
              <a href="">
                Matheus Sena <span>(@sennaynw)</span>
              </a>
            </h1>
            <span className="job">Desenvolvedor de Software</span>
            <p className="desc">
              Meu nome é Matheus Sena, programador em formação, com foco no
              desenvolvimento de soluções e evolução técnica contínua.
            </p>
          </section>
          <nav className="container-links">
            <a href="" className="link">
              Sobre
            </a>
            <a href="" className="link">
              Projetos
            </a>
            <a href="" className="link">
              Contatos
            </a>
          </nav>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/sennaynz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sennaynz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto:contact.sennaynz@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sennaynz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="container-details">
          <div className="container-about">
            <p>
              <strong>Olá, me chamo Matheus Sena</strong> e tenho{" "}
              <strong>17 anos</strong>. Atualmente curso o ensino médio com
              curso técnico integrado em <strong>Marketing Digital</strong>,
              onde desenvolvi uma base sólida em <strong>comunicação</strong>,{" "}
              <strong>estratégia</strong> e <strong>presença digital</strong>.
            </p>
            <p>
              Sou um <strong>desenvolvedor de software em formação</strong> e
              estou me preparando para ingressar na área de{" "}
              <strong>Tecnologia da Informação</strong>, com foco em construir
              uma <strong>carreira como desenvolvedor</strong>. Estudo de forma
              contínua <strong>programação</strong> e{" "}
              <strong>desenvolvimento de software</strong>, aplicando esses
              conhecimentos em <strong>projetos próprios</strong>.
            </p>
          </div>
          <div className="container-projects">
            <h1 className="su-title">Projetos</h1>
            <div className="container-box">
              <img src="/banner.jpg" alt="" className="banner" />
              <setion className="details">
                <h2 className="title">
                  Lorem, ipsum dolor.{" "}
                  <i className="fas fa-arrow-up-right-from-square"></i>
                </h2>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  corporis consequuntur, accusamus amet natus laudantium?
                </p>
              </setion>
            </div>
            <div className="container-box">
              <img src="/banner.jpg" alt="" className="banner" />
              <setion className="details">
                <h2 className="title">
                  Lorem, ipsum dolor.{" "}
                  <i className="fas fa-arrow-up-right-from-square"></i>
                </h2>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  Lorem ipsum dolor sit amet.
                </p>
              </setion>
            </div>
            <div className="container-box">
              <img src="/banner.jpg" alt="" className="banner" />
              <setion className="details">
                <h2 className="title">
                  Lorem. <i className="fas fa-arrow-up-right-from-square"></i>
                </h2>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, doloremque.
                </p>
              </setion>
            </div>
            <a
              href="https://github.com/sennaynz"
              target="_blank"
              className="link"
            >
              Ver todos os projetos <i class="fas fa-arrow-right"></i>
            </a>
          </div>
          <footer>
            <span className="copyright-text">
              &copy; Todos os Direitos Reservados,
              <br />
              Desenvolvido por 🤘 <span className="color">@sennaynw</span>.
            </span>
            <button
              className="top"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
