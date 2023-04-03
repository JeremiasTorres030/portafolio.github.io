(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(c){if(c.ep)return;c.ep=!0;const i=e(c);fetch(c.href,i)}})();document.querySelector("#app").innerHTML=`
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
              src="/assets/images/flecha.png"
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
                src="/assets/icons/linkedin-1-svgrepo-com.svg"
                alt="icono de linkedin"
              />Linkedin</a
            >
            <a
              href="https://github.com/JeremiasTorres030"
              target="_blank"
              class="boton"
            >
              <img
                src="/assets/icons/github-svgrepo-com.svg"
                alt="Icono de GitHub"
              />
              GitHub</a
            >
            <a
              href="/assets/Currículum Jeremias Torres.pdf"
              target="_blank"
              class="boton"
            >
              <img
                src="/assets/icons/curriculum-vitae-resume-svgrepo-com.svg"
                alt="icono Curriculum"
              />
              Curriculum</a
            >
          </div>
        </section>
        <section id="proyectos">
          <button
            id="flechaDerecha"
            class="botonProyectos"
          >
            <img
              src="/assets/images/flecha.png"
              alt="flecha derecha"
            />
          </button>
          <button
            id="flechaIzquierda"
            class="botonProyectos"
          >
            <img
              src="/assets/images/flecha.png"
              alt="flecha izquierda"
            />
          </button>
          <div class="proyectos fadeInLargo">
            <div class="proyectoCard">
              <p>Ecommerce (Tienda online)</p>
              <div class="proyectImage">
                <img
                  src="/assets/images/Ecommerce.jpg"
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
                  src="/assets/images/Lectura.PNG"
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
                  src="/assets/images/Red social.PNG"
                  alt="Imagen del proyecto Migurd"
                />
                <button class="botonHover botonSocial">Mas informacion</button>
              </div>
            </div>
            <div class="proyectoCard">
              <p>Quirrel (Chat grupal)</p>
              <div class="proyectImage">
                <img
                  src="/assets/images/Chat.PNG"
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
                  src="/assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="/assets/images/Ecommerce.jpg"
                  alt="Imagen del proyecto ecommerce"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="/assets/icons/monitor-code-svgrepo-com.svg"
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
                      src="/assets/icons/github-svgrepo-com copy.svg"
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
                    src="/assets/icons/angular-svgrepo-com.svg"
                    alt="Icono de Angular"
                  />
                  <img
                    src="/assets/icons/tailwind-svgrepo-com.svg"
                    alt="Icono de Tailwind"
                  />
                  <img
                    src="/assets/icons/typescript-official-svgrepo-com.svg"
                    alt="Icono de Typescript"
                  />
                  <img
                    src="/assets/icons/django-svgrepo-com.svg"
                    alt="Icono de Django"
                  />
                  <img
                    src="/assets/icons/mysql-svgrepo-com.svg"
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
                  src="/assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
              <p>Hollow (Biblioteca)</p>
              <button class="botonInfoDere botonBiblioteca">
                <img
                  src="/assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="/assets/images/Lectura.PNG"
                  alt="Imagen del proyecto Quirrel"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="/assets/icons/monitor-code-svgrepo-com.svg"
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
                      src="/assets/icons/github-svgrepo-com copy.svg"
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
                    src="/assets/icons/react-svgrepo-com (1).svg"
                    alt="Icono de React"
                  />
                  <img
                    src="/assets/icons/redux-svgrepo-com.svg"
                    alt="Icono de Redux"
                  />
                  <img
                    src="/assets/icons/typescript-official-svgrepo-com.svg"
                    alt="Icono de Typescript"
                  />
                  <img
                    src="/assets/icons/django-svgrepo-com.svg"
                    alt="Icono de Django"
                  />
                  <img
                    src="/assets/icons/mysql-svgrepo-com.svg"
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
                  src="/assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
              <p>Migurd (Red social)</p>
              <button class="botonInfoDere botonSocial">
                <img
                  src="/assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="/assets/images/Red social.PNG"
                  alt="Imagen del proyecto Migurd"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="/assets/icons/monitor-code-svgrepo-com.svg"
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
                      src="/assets/icons/github-svgrepo-com copy.svg"
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
                    src="/assets/icons/react-svgrepo-com (1).svg"
                    alt="Icono de React"
                  />
                  <img
                    id="express"
                    src="/assets/icons/express-svgrepo-com.svg"
                    alt="Icono de Express"
                  />
                  <img
                    src="/assets/icons/mongo-svgrepo-com.svg"
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
                  src="/assets/images/flecha.png"
                  alt="imagen de flecha"
                />
              </button>
              <p>Quirrel (Chat grupal)</p>
            </div>
            <div class="info">
              <div class="codigoEImage">
                <img
                  src="/assets/images/Chat.PNG"
                  alt="Imagen del proyecto Quirrel"
                />
                <div class="codigo">
                  <div>
                    <img
                      src="/assets/icons/monitor-code-svgrepo-com.svg"
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
                      src="/assets/icons/github-svgrepo-com copy.svg"
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
                    src="/assets/icons/angular-svgrepo-com.svg"
                    alt="Icono de Angular"
                  />
                  <img
                    src="/assets/icons/typescript-official-svgrepo-com.svg"
                    alt="Icono de Typescript"
                  />
                  <img
                    id="express"
                    src="/assets/icons/express-svgrepo-com.svg"
                    alt="Icono de Express"
                  />
                  <img
                    src="/assets/icons/mongo-svgrepo-com.svg"
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
              src="/assets/images/flecha.png"
              alt="flecha derecha"
            />
          </button>
          <button
            id="flechaIzquierda"
            class="botonTecnologias"
          >
            <img
              src="/assets/images/flecha.png"
              alt="flecha izquierda"
            />
          </button>

          <div class="tecnologias fadeInLargo">
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/react-svgrepo-com (1).svg"
                alt="icono de react"
              />
              <p>React</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/angular-svgrepo-com.svg"
                alt="icono de angular"
              />
              <p>Angular</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/typescript-official-svgrepo-com.svg"
                alt="icono de TypeScript"
              />
              <p>TypeScript</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/tailwind-svgrepo-com.svg"
                alt="icono de Tailwind"
              />
              <p>Tailwind</p>
            </div>
          </div>
          <div class="tecnologias fadeInLargo">
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/django-svgrepo-com.svg"
                alt="icono de Django"
              />
              <p>Django</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/express-svgrepo-com.svg"
                alt="icono de Express"
                id="express"
              />
              <p>Express</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/mongo-svgrepo-com.svg"
                alt="Icono de MongoDB"
              />
              <p>MongoDB</p>
            </div>
            <div class="tecnologiaCard">
              <img
                src="/assets/icons/mysql-svgrepo-com.svg"
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
              src="/assets/images/flecha.png"
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
                  src="/assets/icons/email-svgrepo-com.svg"
                  alt="icono de correo"
                />
                <p>jeremiastorres030@gmail.com</p>
              </div>
              <div class="contacto">
                <img
                  src="/assets/icons/phone-call-svgrepo-com.svg"
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
                    src="/assets/icons/linkedin-1-svgrepo-com copy.svg"
                    alt="icono linkedin"
                /></a>
                <a
                  href="https://github.com/JeremiasTorres030"
                  target="_blank"
                  ><img
                    src="/assets/icons/github-svgrepo-com copy.svg"
                    alt="icono github"
                /></a>
                <a
                  href="/assets/Currículum Jeremias Torres.pdf"
                  target="_blank"
                  ><img
                    class="curriculum"
                    src="/assets/icons/curriculum-vitae-resume-svgrepo-com.svg"
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
            src="/assets/icons/email-svgrepo-com.svg"
            alt="icono de correo"
          />
          <p>jeremiastorres030@gmail.com</p>
        </div>
        <div class="contacto">
          <img
            src="/assets/icons/phone-call-svgrepo-com.svg"
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
            src="/assets/icons/linkedin-1-svgrepo-com copy.svg"
            alt="icono de linkedin"
          />Linkedin</a
        >
        <a
          href="https://github.com/JeremiasTorres030"
          target="_blank"
          class="boton github"
        >
          <img
            src="/assets/icons/github-svgrepo-com copy.svg"
            alt="Icono de GitHub"
          />
          GitHub</a
        >
        <a
          href="/assets/Currículum Jeremias Torres.pdf"
          target="_blank"
          class="boton"
        >
          <img
            src="/assets/icons/curriculum-vitae-resume-svgrepo-com.svg"
            alt="icono Curriculum"
          />
          Curriculum</a
        >
      </div>
    </footer>
`;particlesJS.load("particles-js","/assets/particles.json");const l=s=>document.getElementById(s),u=document.querySelectorAll("#flechaIzquierda"),I=document.querySelectorAll("#flechaDerecha"),p=document.querySelectorAll("button.botonInfoIzq"),q=document.querySelectorAll("button.botonInfoDere"),S=document.querySelectorAll(".nav"),v=document.querySelectorAll(".botonHover"),b=document.querySelectorAll(".cerrar"),d=document.querySelector("main"),f=document.querySelector("body"),h={botonInicio:[null,"proyectos","inicio"],botonProyectos:["inicio","tecnologias","proyectos"],botonTecnologias:["proyectos","contacto","tecnologias"],botonContacto:["tecnologias",null,"contacto"]},L={inicio:"fondoDorado",proyectos:"fondoAzul",tecnologias:"fondoRojo",contacto:"fondoNegro"},a={botonEcommerce:"infoEcommerce",botonBiblioteca:"infoBiblioteca",botonSocial:"infoSocial",botonChat:"infoChat"},y={botonEcommerce:[null,"infoBiblioteca"],botonBiblioteca:["infoEcommerce","infoSocial"],botonSocial:["infoBiblioteca","infoChat"],botonChat:["infoSocial",null]};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".Inicio.fadeIn").forEach(t=>{t.classList.add("active")})});const m=(s,t)=>{document.querySelector(`.${t}`).classList.remove("subrayar"),document.querySelector(`.${s}`).classList.add("subrayar")},r=s=>{document.querySelectorAll(`.${s}.fadeInLargo`).forEach(e=>{e.classList.add("active")})},g=s=>{const t=f.classList.item(0);f.classList.replace(t,L[s])};I.forEach((s,t)=>{s.addEventListener("click",e=>{const o=h[s.getAttribute("class")],i=l(o[1]).offsetLeft;e.preventDefault(),m(o[1],o[2]),g(o[1]),d.scrollTo({left:i,behavior:"smooth"}),r(o[1])}),u[t].addEventListener("click",e=>{const o=h[u[t].getAttribute("class")],i=l(o[0]).offsetLeft;e.preventDefault(),m(o[0],o[2]),g(o[0]),d.scrollTo({left:i,behavior:"smooth"})})});S.forEach((s,t)=>{s.addEventListener("click",()=>{const e=document.querySelector(".subrayar").classList.item(0),o=s.classList.item(0),i=l(o).offsetLeft;d.scrollTo({left:i,behavior:"smooth"}),m(o,e),g(o),o==="proyectos"?r(o):o==="tecnologias"?(r("proyectos"),r(o)):(r("proyectos"),r("tecnologias"))}),v[t].addEventListener("click",()=>{document.querySelector("div.proyectos").classList.remove("active"),setTimeout(()=>{document.querySelector("div.proyectos").classList.add("oculto");const e=v[t].classList.item(1);document.querySelector(`.${a[e]}`).classList.remove("oculto"),setTimeout(()=>{document.querySelector(`.${a[e]}`).classList.add("active")},100)},1350)}),b[t].addEventListener("click",()=>{const e=b[t].classList.item(1);document.querySelector(`.${a[e]}`).classList.remove("active"),setTimeout(()=>{document.querySelector(`.${a[e]}`).classList.add("oculto"),document.querySelector("div.proyectos").classList.remove("oculto"),setTimeout(()=>{document.querySelector("div.proyectos").classList.add("active")},100)},1e3)})});q.forEach((s,t)=>{s.addEventListener("click",()=>{const e=s.classList.item(1),o=y[e];document.querySelector(`.${a[e]}`).classList.remove("active"),setTimeout(()=>{document.querySelector(`.${a[e]}`).classList.add("oculto"),document.querySelector(`.${o[1]}`).classList.remove("oculto"),setTimeout(()=>{document.querySelector(`.${o[1]}`).classList.add("active")},100)},1e3)}),p[t].addEventListener("click",()=>{const e=p[t].classList.item(1),o=y[e];document.querySelector(`.${a[e]}`).classList.remove("active"),setTimeout(()=>{document.querySelector(`.${a[e]}`).classList.add("oculto"),document.querySelector(`.${o[0]}`).classList.remove("oculto"),setTimeout(()=>{document.querySelector(`.${o[0]}`).classList.add("active")},100)},1e3)})});document.querySelector("form").addEventListener("submit",s=>{s.preventDefault();const t=s.target[0].value,e=s.target[1].value,o=s.target[2].value,c=s.target[3].value;Email.send({Host:"smtp.elasticemail.com",Username:"jeremiastorres030@gmail.com",Password:"14B2A37C8520A434F62A956A4033568026C4",To:"jeremiastorres030@gmail.com",From:"jeremiastorres030@gmail.com",Subject:o,Body:`Nombre: ${t} <br> Correo: ${e} <br> Mensaje: ${c}`}).then(i=>alert(i))});
