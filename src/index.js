/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './src/assets/particles.json', function () {
  console.log('callback - particles.js config loaded')
})

const seleccionarSeccion = (seccion) => document.getElementById(seccion)
const flechaIzquierda = document.querySelectorAll('#flechaIzquierda')
const flechaDerecha = document.querySelectorAll('#flechaDerecha')
const botonesInfoIzq = document.querySelectorAll('button.botonInfoIzq')
const botonesInfoDere = document.querySelectorAll('button.botonInfoDere')
const botonesDeNavegacion = document.querySelectorAll('.nav')
const botonesDeInformacion = document.querySelectorAll('.botonHover')
const botonesCerrar = document.querySelectorAll('.cerrar')
const main = document.querySelector('main')
const body = document.querySelector('body')
const diccionarioFlechas = {
  botonInicio: [null, 'proyectos', 'inicio'],
  botonProyectos: ['inicio', 'tecnologias', 'proyectos'],
  botonTecnologias: ['proyectos', 'contacto', 'tecnologias'],
  botonContacto: ['tecnologias', null, 'contacto'],
}
const diccionarioFondos = {
  inicio: 'fondoDorado',
  proyectos: 'fondoAzul',
  tecnologias: 'fondoRojo',
  contacto: 'fondoNegro',
}
const diccionarioBotones = {
  botonEcommerce: 'infoEcommerce',
  botonBiblioteca: 'infoBiblioteca',
  botonSocial: 'infoSocial',
  botonChat: 'infoChat',
}

const diccionarioBotonesInfo = {
  botonEcommerce: [null, 'infoBiblioteca'],
  botonBiblioteca: ['infoEcommerce', 'infoSocial'],
  botonSocial: ['infoBiblioteca', 'infoChat'],
  botonChat: ['infoSocial', null],
}

document.addEventListener('DOMContentLoaded', () => {
  const elementosOcultos = document.querySelectorAll('.Inicio.fadeIn')
  elementosOcultos.forEach((element) => {
    element.classList.add('active')
  })
})

const subrayar = (subrayar, desubrayar) => {
  document.querySelector(`.${desubrayar}`).classList.remove('subrayar')
  document.querySelector(`.${subrayar}`).classList.add('subrayar')
}

const mostrarElementos = (seccion) => {
  const elementosOcultos = document.querySelectorAll(`.${seccion}.fadeInLargo`)
  elementosOcultos.forEach((element) => {
    element.classList.add('active')
  })
}

const cambiarFondo = (seccion) => {
  const claseActual = body.classList.item(0)
  body.classList.replace(claseActual, diccionarioFondos[seccion])
}

flechaDerecha.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    const ubicacionFlecha = diccionarioFlechas[element.getAttribute('class')]
    const seccion = seleccionarSeccion(ubicacionFlecha[1])
    const posicion = seccion.offsetLeft
    e.preventDefault()
    subrayar(ubicacionFlecha[1], ubicacionFlecha[2])
    cambiarFondo(ubicacionFlecha[1])
    main.scrollTo({
      left: posicion,
      behavior: 'smooth',
    })
    mostrarElementos(ubicacionFlecha[1])
  })

  flechaIzquierda[index].addEventListener('click', (e) => {
    const ubicacionFlecha =
      diccionarioFlechas[flechaIzquierda[index].getAttribute('class')]
    const seccion = seleccionarSeccion(ubicacionFlecha[0])
    const posicion = seccion.offsetLeft
    e.preventDefault()
    subrayar(ubicacionFlecha[0], ubicacionFlecha[2])
    cambiarFondo(ubicacionFlecha[0])
    main.scrollTo({
      left: posicion,
      behavior: 'smooth',
    })
  })
})

botonesDeNavegacion.forEach((element, index) => {
  element.addEventListener('click', () => {
    const botonSubrayado = document.querySelector('.subrayar').classList.item(0)
    const seccionSeleccionada = element.classList.item(0)
    const seccion = seleccionarSeccion(seccionSeleccionada)
    const posicion = seccion.offsetLeft
    main.scrollTo({
      left: posicion,
      behavior: 'smooth',
    })
    subrayar(seccionSeleccionada, botonSubrayado)
    cambiarFondo(seccionSeleccionada)

    if (seccionSeleccionada === 'proyectos') {
      mostrarElementos(seccionSeleccionada)
    } else if (seccionSeleccionada === 'tecnologias') {
      mostrarElementos('proyectos')
      mostrarElementos(seccionSeleccionada)
    } else {
      mostrarElementos('proyectos')
      mostrarElementos('tecnologias')
    }
  })

  botonesDeInformacion[index].addEventListener('click', () => {
    document.querySelector('div.proyectos').classList.remove('active')
    setTimeout(() => {
      document.querySelector('div.proyectos').classList.add('oculto')
      const seleccionado = botonesDeInformacion[index].classList.item(1)
      document
        .querySelector(`.${diccionarioBotones[seleccionado]}`)
        .classList.remove('oculto')
      setTimeout(() => {
        document
          .querySelector(`.${diccionarioBotones[seleccionado]}`)
          .classList.add('active')
      }, 100)
    }, 1350)
  })

  botonesCerrar[index].addEventListener('click', () => {
    const seleccionado = botonesCerrar[index].classList.item(1)
    document
      .querySelector(`.${diccionarioBotones[seleccionado]}`)
      .classList.remove('active')
    setTimeout(() => {
      document
        .querySelector(`.${diccionarioBotones[seleccionado]}`)
        .classList.add('oculto')
      document.querySelector('div.proyectos').classList.remove('oculto')
      setTimeout(() => {
        document.querySelector('div.proyectos').classList.add('active')
      }, 100)
    }, 1000)
  })
})

botonesInfoDere.forEach((element, index) => {
  element.addEventListener('click', () => {
    const posicionDelBoton = element.classList.item(1)
    const direccionesDelBoton = diccionarioBotonesInfo[posicionDelBoton]
    document
      .querySelector(`.${diccionarioBotones[posicionDelBoton]}`)
      .classList.remove('active')

    setTimeout(() => {
      document
        .querySelector(`.${diccionarioBotones[posicionDelBoton]}`)
        .classList.add('oculto')
      document
        .querySelector(`.${direccionesDelBoton[1]}`)
        .classList.remove('oculto')
      setTimeout(() => {
        document
          .querySelector(`.${direccionesDelBoton[1]}`)
          .classList.add('active')
      }, 100)
    }, 1000)
  })
  botonesInfoIzq[index].addEventListener('click', () => {
    const posicionDelBoton = botonesInfoIzq[index].classList.item(1)
    const direccionesDelBoton = diccionarioBotonesInfo[posicionDelBoton]
    document
      .querySelector(`.${diccionarioBotones[posicionDelBoton]}`)
      .classList.remove('active')
    setTimeout(() => {
      document
        .querySelector(`.${diccionarioBotones[posicionDelBoton]}`)
        .classList.add('oculto')
      document
        .querySelector(`.${direccionesDelBoton[0]}`)
        .classList.remove('oculto')
      setTimeout(() => {
        document
          .querySelector(`.${direccionesDelBoton[0]}`)
          .classList.add('active')
      }, 100)
    }, 1000)
  })
})
