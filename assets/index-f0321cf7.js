;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i)
  new MutationObserver((i) => {
    for (const c of i)
      if (c.type === 'childList')
        for (const n of c.addedNodes)
          n.tagName === 'LINK' && n.rel === 'modulepreload' && o(n)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(i) {
    const c = {}
    return (
      i.integrity && (c.integrity = i.integrity),
      i.referrerPolicy && (c.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (c.credentials = 'omit')
        : (c.credentials = 'same-origin'),
      c
    )
  }
  function o(i) {
    if (i.ep) return
    i.ep = !0
    const c = s(i)
    fetch(i.href, c)
  }
})()
document.querySelector('#app').innerHTML = `
    <div class="particulas">
      <div id="particles-js"></div>
      <header>
        <nav>
          <p class="inicio subrayar nav">Inicio</p>
          <p class="proyectos nav">Proyectos</p>
          <div
            id="logo"
          >
            <label>JT</label>
          </div>
          <p
            id="tec"
            class="tecnologias nav"
          >
            Tecnologias
          </p>
          <p class="contacto nav">Contacto</p>
        </nav>
      </header>
      <main>
        <section id="inicio">
          <button
            id="flechaDerecha"
            class="botonInicio"
          >
            <img
              src="./assets/images/flecha.png"
              alt="flecha derecha"
            />
          </button>

          <h1>Bienvenid@!</h1>
          <p>
            Mi nombre es <strong>Jeremías Torres</strong> , vivo en
            <strong>Argentina, Mendoza</strong>. Tengo 19 años y actualmente
            estudio <strong>desarrollo web full-stack</strong> de manera
            autodidacta.
          </p>

          <div class="botones">
            <a
              href="https://www.linkedin.com/in/jeremiastorres/"
              target="_blank"
              class="boton"
            >
              <img
                src="./assets/icons/linkedin-1-svgrepo-com.svg"
                alt="icono de linkedin"
              /><p>Linkedin</p></a
            >
            <a
              href="https://github.com/JeremiasTorres030"
              target="_blank"
              class="boton"
            >
              <img
                src="./assets/icons/github-svgrepo-com.svg"
                alt="Icono de GitHub"
              />
              <p>GitHub</p></a
            >
            <a
              href="./assets/Currículum Jeremias Torres.pdf"
              target="_blank"
              class="boton"
            >
              <img
                src="./assets/icons/curriculum-vitae-resume-svgrepo-com.svg"
                alt="icono Curriculum"
              />
              <p>Curriculum</p></a
            >
          </div>
        </section>
        <section id="proyectos">
          <button
            id="flechaDerecha"
            class="botonProyectos"
          >
            <img
              src="./assets/images/flecha.png"
              alt="flecha derecha"
            />
          </button>
          <button
            id="flechaIzquierda"
            class="botonProyectos"
          >
            <img
              src="./assets/images/flecha.png"
              alt="flecha izquierda"
            />
          </button>
          <div class="proyectos fadeInLargo">
            <div class="proyectoCard">
              <p>Ecommerce (Tienda online)</p>
              <div class="proyectImage">
                <img
                  src="./assets/images/Ecommerce.jpg"
                  alt="Imagen del proyecto ecommerce"
                />
                <button class="botonHover botonEcommerce">
                  Mas informacion
                </button>
              </div>
            </div>
            <div class="proyectoCard">
              <p>Hollow (Biblioteca)</p>
              <div class="proyectImage">
                <img
                  src="./assets/images/Lectura.PNG"
                  alt="Imagen del proyecto Hollow"
                />
                <button class="botonHover botonBiblioteca">
                  Mas informacion
                </button>
              </div>
            </div>
            <div class="proyectoCard">
              <p>Migurd (Red Social)</p>
              <div class="proyectImage">
                <img
                  src="./assets/images/Red social.PNG"
                  alt="Imagen del proyecto Migurd"
                />
                <button class="botonHover botonSocial">Mas informacion</button>
              </div>
            </div>
            <div class="proyectoCard">
              <p>Quirrel (Chat grupal)</p>
              <div class="proyectImage">
                <img
                  src="./assets/images/Chat.PNG"
                  alt="Imagen del proyecto Quirrel"
                />
                <button class="botonHover botonChat">Mas informacion</button>
              </div>
            </div>
          </div>
          <div class="infoEcommerce fadeIn oculto">
            <button class="cerrar botonEcommerce">X</button>
            <div class="tituloBotones">
              <p>Ecommerce (Tienda online)</p>
              <button class="botonInfoDere botonEcommerce">
                <img
                  src="./assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="./assets/images/Ecommerce.jpg"
                  alt="Imagen del proyecto ecommerce"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="./assets/icons/monitor-code-svgrepo-com.svg"
                      alt="Icono de Demo"
                    />
                    <a
                      target="_blank"
                      href="https://ecommerce-production-e985.up.railway.app/"
                      >Demo</a
                    >
                  </div>
                  <div>
                    <img
                      src="./assets/icons/github-svgrepo-com copy.svg"
                      alt="Icono de GitHub"
                    />
                    <a
                      target="_blank"
                      href="https://github.com/JeremiasTorres030/Ecommerce"
                      >Fuente</a
                    >
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Inspirado por la tienda online Amazon. Permite la
                    publicacion de Productos con la finalidad de realizar compra
                    y venta de los mismos.
                  </p>
                  <p>
                    Este proyecto fue creado para afianzar mis conocimientos
                    sobre Angular, Typescript , Django , Sql y aprender
                    Tailwind.
                  </p>
                  <p>Diseño 100% responsive.</p>
                </div>

                <div class="infoTecnologias">
                  <img
                    src="./assets/icons/angular-svgrepo-com.svg"
                    alt="Icono de Angular"
                  />
                  <img
                    src="./assets/icons/tailwind-svgrepo-com.svg"
                    alt="Icono de Tailwind"
                  />
                  <img
                    src="./assets/icons/typescript-official-svgrepo-com.svg"
                    alt="Icono de Typescript"
                  />
                  <img
                    src="./assets/icons/django-svgrepo-com.svg"
                    alt="Icono de Django"
                  />
                  <img
                    src="./assets/icons/mysql-svgrepo-com.svg"
                    alt="Icono de Sql"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="infoBiblioteca fadeIn oculto">
            <button class="cerrar botonBiblioteca">X</button>
            <div class="tituloBotones">
              <button class="botonInfoIzq botonBiblioteca">
                <img
                  src="./assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
              <p>Hollow (Biblioteca)</p>
              <button class="botonInfoDere botonBiblioteca">
                <img
                  src="./assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="./assets/images/Lectura.PNG"
                  alt="Imagen del proyecto Quirrel"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="./assets/icons/monitor-code-svgrepo-com.svg"
                      alt="Icono de Demo"
                    />
                    <a
                      target="_blank"
                      href="https://lectura-production.up.railway.app/"
                      >Demo</a
                    >
                  </div>
                  <div>
                    <img
                      src="./assets/icons/github-svgrepo-com copy.svg"
                      alt="Icono de GitHub"
                    />
                    <a
                      target="_blank"
                      href="https://github.com/JeremiasTorres030/Hollow-Biblioteca-"
                      >Fuente</a
                    >
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Aplicación de gestión para archivos pdfs, permite subirlos y
                    leerlos.
                  </p>
                  <p>
                    Este proyecto nació en la necesidad de querer tener mis
                    archivos pdfs en un solo lugar para poder acceder a ellos
                    tanto en mi pc como en mi celular. Además de poner en
                    práctica las tecnologías de Python,Django,SQL,React con
                    Typescript y Redux.
                  </p>
                  <p>Diseño 100% responsive.</p>
                </div>

                <div class="infoTecnologias">
                  <img
                    src="./assets/icons/react-svgrepo-com (1).svg"
                    alt="Icono de React"
                  />
                  <img
                    src="./assets/icons/redux-svgrepo-com.svg"
                    alt="Icono de Redux"
                  />
                  <img
                    src="./assets/icons/typescript-official-svgrepo-com.svg"
                    alt="Icono de Typescript"
                  />
                  <img
                    src="./assets/icons/django-svgrepo-com.svg"
                    alt="Icono de Django"
                  />
                  <img
                    src="./assets/icons/mysql-svgrepo-com.svg"
                    alt="Icono de Sql"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="infoSocial fadeIn oculto">
            <button class="cerrar botonSocial">X</button>
            <div class="tituloBotones">
              <button class="botonInfoIzq botonSocial">
                <img
                  src="./assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
              <p>Migurd (Red social)</p>
              <button class="botonInfoDere botonSocial">
                <img
                  src="./assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="./assets/images/Red social.PNG"
                  alt="Imagen del proyecto Migurd"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="./assets/icons/monitor-code-svgrepo-com.svg"
                      alt="Icono de Demo"
                    />
                    <a
                      target="_blank"
                      href="https://migurd-production.up.railway.app/"
                      >Demo</a
                    >
                  </div>
                  <div>
                    <img
                      src="./assets/icons/github-svgrepo-com copy.svg"
                      alt="Icono de GitHub"
                    />
                    <a
                      target="_blank"
                      href="https://github.com/JeremiasTorres030/Migurd-Red-social-"
                      >Fuente</a
                    >
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Inspirado por la red social Twitter. Cuenta con
                    funcionalidades como dar like, comentar , subir
                    publicaciones , editar perfil, seguir a otros, etc.
                  </p>
                  <p>
                    Este proyecto fue creado con la finalidad de afianzar mis
                    conocimientos sobre React, Express y MongoDB.
                  </p>
                  <p>Diseño 100% responsive.</p>
                </div>

                <div class="infoTecnologias">
                  <img
                    src="./assets/icons/react-svgrepo-com (1).svg"
                    alt="Icono de React"
                  />
                  <img
                    id="express"
                    src="./assets/icons/express-svgrepo-com.svg"
                    alt="Icono de Express"
                  />
                  <img
                    src="./assets/icons/mongo-svgrepo-com.svg"
                    alt="Icono de MongoDB"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="infoChat fadeIn oculto">
            <button class="cerrar botonChat">X</button>
            <div class="tituloBotones">
              <button class="botonInfoIzq botonChat">
                <img
                  src="./assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
              <p>Quirrel (Chat grupal)</p>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="./assets/images/Chat.PNG"
                  alt="Imagen del proyecto Quirrel"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="./assets/icons/monitor-code-svgrepo-com.svg"
                      alt="Icono de Demo"
                    />
                    <a
                      target="_blank"
                      href="https://chat-production-fd71.up.railway.app/login"
                      >Demo</a
                    >
                  </div>
                  <div>
                    <img
                      src="./assets/icons/github-svgrepo-com copy.svg"
                      alt="Icono de GitHub"
                    />
                    <a
                      target="_blank"
                      href="https://github.com/JeremiasTorres030/Quirrel-Chat-grupal-"
                      >Fuente</a
                    >
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Inspirado por la aplicación del escritorio Discord.Permite
                    la creación de grupos e invitar a gente para que se una con
                    la finalidad de chatear.
                  </p>
                  <p>
                    Este proyecto fue creado para afianzar mis conocimientos
                    sobre Angular, Typescript , Express con Typescript, MongoDB
                    y Sockets.
                  </p>
                  <p>Diseño 100% responsive.</p>
                </div>

                <div class="infoTecnologias">
                  <img
                    src="./assets/icons/angular-svgrepo-com.svg"
                    alt="Icono de Angular"
                  />
                  <img
                    src="./assets/icons/typescript-official-svgrepo-com.svg"
                    alt="Icono de Typescript"
                  />
                  <img
                    id="express"
                    src="./assets/icons/express-svgrepo-com.svg"
                    alt="Icono de Express"
                  />
                  <img
                    src="./assets/icons/mongo-svgrepo-com.svg"
                    alt="Icono de MongoDB"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tecnologias">
          <button
            id="flechaDerecha"
            class="botonTecnologias"
          >
            <img
              src="./assets/images/flecha.png"
              alt="flecha derecha"
            />
          </button>
          <button
            id="flechaIzquierda"
            class="botonTecnologias"
          >
            <img
              src="./assets/images/flecha.png"
              alt="flecha izquierda"
            />
          </button>

          <div class="tecnologias fadeInLargo">
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/react-svgrepo-com (1).svg"
                alt="icono de react"
              />
              <p>React</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/angular-svgrepo-com.svg"
                alt="icono de angular"
              />
              <p>Angular</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/typescript-official-svgrepo-com.svg"
                alt="icono de TypeScript"
              />
              <p>TypeScript</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/tailwind-svgrepo-com.svg"
                alt="icono de Tailwind"
              />
              <p>Tailwind</p>
            </div>
          </div>
          <div class="tecnologias fadeInLargo">
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/django-svgrepo-com.svg"
                alt="icono de Django"
              />
              <p>Django</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/express-svgrepo-com.svg"
                alt="icono de Express"
                id="express"
              />
              <p>Express</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/mongo-svgrepo-com.svg"
                alt="Icono de MongoDB"
              />
              <p>MongoDB</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="./assets/icons/mysql-svgrepo-com.svg"
                alt="Icono de mySql"
              />
              <p>MySql</p>
            </div>
          </div>
        </section>
        <section id="contacto">
          <button
            id="flechaIzquierda"
            class="botonContacto"
          >
            <img
              src="./assets/images/flecha.png"
              alt="flecha izquierda"
            />
          </button>
          <div class="contactoForm">
            <form>
              <label>Nombre completo</label>
              <input
                placeholder="Ingrese su nombre completo."
                type="text"
                required
              />
              <label>Correo electronico</label>
              <input
                placeholder="Ingrese su correo electronico."
                type="email"
                required
              />
              <label>Asunto</label>
              <input
                placeholder="Ingrese el asunto que desea tratar."
                type="text"
                required
              />
              <label>Mensaje</label>
              <textarea
                placeholder="Deje un mensaje."
                cols="40"
                rows="5"
                required
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
            <div class="contactos">
              <p>Contacto</p>
              <div class="contacto">
                <img
                  src="./assets/icons/email-svgrepo-com.svg"
                  alt="icono de correo"
                />
                <p>jeremiastorres030@gmail.com</p>
              </div>
              <div class="contacto">
                <img
                  src="./assets/icons/phone-call-svgrepo-com.svg"
                  alt="icono telefono"
                />
                <p>+542612421297</p>
              </div>
              <div class="miniContacto">
                <a
                  href="https://www.linkedin.com/in/jeremiastorres/"
                  target="_blank"
                  ><img
                    class="linkedin"
                    src="./assets/icons/linkedin-1-svgrepo-com copy.svg"
                    alt="icono linkedin"
                /></a>
                <a
                  href="https://github.com/JeremiasTorres030"
                  target="_blank"
                  ><img
                    src="./assets/icons/github-svgrepo-com copy.svg"
                    alt="icono github"
                /></a>
                <a
                  href="./assets/Currículum Jeremias Torres.pdf"
                  target="_blank"
                  ><img
                    class="curriculum"
                    src="./assets/icons/curriculum-vitae-resume-svgrepo-com.svg"
                    alt="icono curriculum"
                /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    <footer>
      <div class="contactos">
        <p>Contacto</p>
        <div class="contacto">
          <img
            src="./assets/icons/email-svgrepo-com.svg"
            alt="icono de correo"
          />
          <p>jeremiastorres030@gmail.com</p>
        </div>
        <div class="contacto">
          <img
            src="./assets/icons/phone-call-svgrepo-com.svg"
            alt="icono telefono"
          />
          <p>+542612421297</p>
        </div>
      </div>
      <div class="botonesFooter">
        <a
          href="https://www.linkedin.com/in/jeremiastorres/"
          target="_blank"
          class="boton linkedin"
        >
          <img
            src="./assets/icons/linkedin-1-svgrepo-com copy.svg"
            alt="icono de linkedin"
          /><p>Linkedin</p></a
        >
        <a
          href="https://github.com/JeremiasTorres030"
          target="_blank"
          class="boton github"
        >
          <img
            src="./assets/icons/github-svgrepo-com copy.svg"
            alt="Icono de GitHub"
          />
          <p>GitHub</p></a
        >
        <a
          href="./assets/Currículum Jeremias Torres.pdf"
          target="_blank"
          class="boton"
        >
          <img
            src="./assets/icons/curriculum-vitae-resume-svgrepo-com.svg"
            alt="icono Curriculum"
          />
          <p>Curriculum</p></a
        >
      </div>
    </footer>
`
particlesJS.load('particles-js', './particles.json')
const l = (e) => document.getElementById(e),
  p = document.querySelectorAll('#flechaIzquierda'),
  I = document.querySelectorAll('#flechaDerecha'),
  u = document.querySelectorAll('button.botonInfoIzq'),
  q = document.querySelectorAll('button.botonInfoDere'),
  L = document.querySelectorAll('.nav'),
  v = document.querySelectorAll('.botonHover'),
  b = document.querySelectorAll('.cerrar'),
  d = document.querySelector('main'),
  f = document.querySelector('body'),
  h = {
    botonInicio: [null, 'proyectos', 'inicio'],
    botonProyectos: ['inicio', 'tecnologias', 'proyectos'],
    botonTecnologias: ['proyectos', 'contacto', 'tecnologias'],
    botonContacto: ['tecnologias', null, 'contacto'],
  },
  S = {
    inicio: 'fondoDorado',
    proyectos: 'fondoAzul',
    tecnologias: 'fondoRojo',
    contacto: 'fondoNegro',
  },
  a = {
    botonEcommerce: 'infoEcommerce',
    botonBiblioteca: 'infoBiblioteca',
    botonSocial: 'infoSocial',
    botonChat: 'infoChat',
  },
  y = {
    botonEcommerce: [null, 'infoBiblioteca'],
    botonBiblioteca: ['infoEcommerce', 'infoSocial'],
    botonSocial: ['infoBiblioteca', 'infoChat'],
    botonChat: ['infoSocial', null],
  }
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.Inicio.fadeIn').forEach((t) => {
    t.classList.add('active')
  })
})
const m = (e, t) => {
    document.querySelector(`.${t}`).classList.remove('subrayar'),
      document.querySelector(`.${e}`).classList.add('subrayar')
  },
  r = (e) => {
    document.querySelectorAll(`.${e}.fadeInLargo`).forEach((s) => {
      s.classList.add('active')
    })
  },
  g = (e) => {
    const t = f.classList.item(0)
    f.classList.replace(t, S[e])
  }
I.forEach((e, t) => {
  e.addEventListener('click', (s) => {
    const o = h[e.getAttribute('class')],
      c = l(o[1]).offsetLeft
    s.preventDefault(),
      m(o[1], o[2]),
      g(o[1]),
      d.scrollTo({ left: c, behavior: 'smooth' }),
      r(o[1])
  }),
    p[t].addEventListener('click', (s) => {
      const o = h[p[t].getAttribute('class')],
        c = l(o[0]).offsetLeft
      s.preventDefault(),
        m(o[0], o[2]),
        g(o[0]),
        d.scrollTo({ left: c, behavior: 'smooth' })
    })
})
L.forEach((e, t) => {
  e.addEventListener('click', () => {
    const s = document.querySelector('.subrayar').classList.item(0),
      o = e.classList.item(0),
      c = l(o).offsetLeft
    d.scrollTo({ left: c, behavior: 'smooth' }),
      m(o, s),
      g(o),
      o === 'proyectos'
        ? r(o)
        : o === 'tecnologias'
        ? (r('proyectos'), r(o))
        : (r('proyectos'), r('tecnologias'))
  }),
    v[t].addEventListener('click', () => {
      document.querySelector('div.proyectos').classList.remove('active'),
        setTimeout(() => {
          document.querySelector('div.proyectos').classList.add('oculto')
          const s = v[t].classList.item(1)
          document.querySelector(`.${a[s]}`).classList.remove('oculto'),
            setTimeout(() => {
              document.querySelector(`.${a[s]}`).classList.add('active')
            }, 100)
        }, 1350)
    }),
    b[t].addEventListener('click', () => {
      const s = b[t].classList.item(1)
      document.querySelector(`.${a[s]}`).classList.remove('active'),
        setTimeout(() => {
          document.querySelector(`.${a[s]}`).classList.add('oculto'),
            document.querySelector('div.proyectos').classList.remove('oculto'),
            setTimeout(() => {
              document.querySelector('div.proyectos').classList.add('active')
            }, 100)
        }, 1e3)
    })
})
q.forEach((e, t) => {
  e.addEventListener('click', () => {
    const s = e.classList.item(1),
      o = y[s]
    document.querySelector(`.${a[s]}`).classList.remove('active'),
      setTimeout(() => {
        document.querySelector(`.${a[s]}`).classList.add('oculto'),
          document.querySelector(`.${o[1]}`).classList.remove('oculto'),
          setTimeout(() => {
            document.querySelector(`.${o[1]}`).classList.add('active')
          }, 100)
      }, 1e3)
  }),
    u[t].addEventListener('click', () => {
      const s = u[t].classList.item(1),
        o = y[s]
      document.querySelector(`.${a[s]}`).classList.remove('active'),
        setTimeout(() => {
          document.querySelector(`.${a[s]}`).classList.add('oculto'),
            document.querySelector(`.${o[0]}`).classList.remove('oculto'),
            setTimeout(() => {
              document.querySelector(`.${o[0]}`).classList.add('active')
            }, 100)
        }, 1e3)
    })
})
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const t = e.target[0].value,
    s = e.target[1].value,
    o = e.target[2].value,
    i = e.target[3].value,
    c = e.target[4]
  ;(c.innerHTML = 'Enviando...'),
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'jeremiastorres030@gmail.com',
      Password: '14B2A37C8520A434F62A956A4033568026C4',
      To: 'jeremiastorres030@gmail.com',
      From: 'jeremiastorres030@gmail.com',
      Subject: o,
      Body: `Nombre: ${t} <br> Correo: ${s} <br> Mensaje: ${i}`,
    }).then((n) => {
      n === 'OK'
        ? (c.classList.add('exito'), (c.innerHTML = 'Enviado'))
        : (c.classList.add('error'), (c.innerHTML = 'Error'))
    })
})
