async function obtainData() {
  try {
    const response = await fetch('./assets/data/beasts.json')
    const bestias = await response.json()
    return bestias
  } catch (error) {
    let beastContainer = document.getElementById("beastContainer")
    beastContainer.innerHTML = ""
    let msjError = document.createElement("div")
    msjError.innerHTML = `
  <h2>Ocurrió un error al cargar la página, intente de nuevo más tarde</h2>
  `
    beastContainer.appendChild(msjError)
  }
}
//creo una funcion que le agregue un id a cada objeto ya que el json de donde lo saque no lo tenia
function addId(beasts) {
  let c = 1
  beasts.forEach(element => {
    element.id = c++
  })
  return beasts
}

const obtainBeastsLS = () => JSON.parse(localStorage.getItem("bestiasComp")) || []
const obtainOrderSS = () => JSON.parse(sessionStorage.getItem("currentOrder")) || []

function orderByName(obj, way) {
  let copyObj = [...obj]
  let ordered = []
  if (way !== "default") {
    ordered = copyObj.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    })
    if (way === "z-a") {
      ordered.reverse()
    }
    renderizarBestias(ordered)
  } else {
    renderizarBestias(obj)
  }
  sessionStorage.setItem("currentOrder", JSON.stringify(way))


}


function filtrarBestias(bestias) {
  let inputSearch = document.getElementById("buscador")
  return bestias.filter((el) => el.name.toLowerCase().includes(inputSearch.value.toLowerCase()) || el.type.toLowerCase().includes(inputSearch.value.toLowerCase()))
}

function compareBeasts(e, beasts) {
  let compareArr = obtainBeastsLS()
  let checkBox = e.target
  let beastId = Number(checkBox.id.substring(7))
  let selectedBeast = beasts.find(beast => beast.id === beastId)


  if (checkBox.checked) {
    if (compareArr.length > 2) {
      checkBox.checked = false
      Toastify({

        text: "Has alcanzado el máximo posible a comparar",
        className: "tostada",
        style: {
          background: "black",
        },
        gravity: "bottom",
        duration: 3000

      }).showToast()

    } else {
      compareArr.push(selectedBeast)
      localStorage.setItem("bestiasComp", JSON.stringify(compareArr))
      Toastify({

        text: selectedBeast.name + " agregado a la comparacion",
        className: "tostada",
        style: {
          background: "black",
        },
        gravity: "bottom",
        duration: 3000

      }).showToast()
    }
  } else {
    compareArr = compareArr.filter(beast => beast.id !== beastId)
    localStorage.setItem("bestiasComp", JSON.stringify(compareArr))
    Toastify({

      text: "Se ha quitado " + selectedBeast.name + " de la comparacion",
      style: {
        background: "black",

      },
      className: "tostada",
      gravity: "bottom",
      duration: 3000

    }).showToast()
  }

  mostrarBtnCompare(compareArr)
}

function checkearCompare(id) {
  let bestiasComp = obtainBeastsLS()
  let flag = false
  if (bestiasComp.length > 1) {
    bestiasComp.forEach(bC => {
      if (bC.id === id) {
        flag = true
      }
    })
    return flag
  }

}

function mostrarBtnCompare(arrCheck) {
  let btnCompare = document.getElementById("btnCompare")
  if (arrCheck.length >= 2) {
    btnCompare.classList.replace("notDisplay", "nowDisplay")
  } else { btnCompare.classList.replace("nowDisplay", "notDisplay") }
}

function renderizarBestias(bestias) {
  let bestiasComp = obtainBeastsLS()
  let beastContainer = document.getElementById("beastContainer")
  beastContainer.innerHTML = ""

  bestias.forEach(({ id, name, type, loot, location, weakness, image }) => {
    let beastCard = document.createElement("div")
    beastCard.classList.add("tarjeta")
    beastCard.setAttribute("data-aos", "fade-up")
    beastCard.innerHTML = `
    <div class=contenedor-img>
    <img style=height: 250px;  width:250px; src=./assets/images/${image} />
    </div>
    <h3>${name}</h3>
    <h5>Type: ${type}</h5>
    <p>Loot: ${loot}</p>
    <p>Location: ${location}</p>
    <p>Weakness: ${weakness}</p>
    <button type="button" class="button-white mt-auto" id="view${id}">Ver Mas</button>
    <div class=checkContainer>
    <label for=compare${id}>Comparar</label>
    ${checkearCompare(id) ? `<input type="checkbox" id="compare${id}" class=checkBeast checked>` : `<input type="checkbox" id="compare${id}" class=checkBeast>`}
    </div>
    `

    beastContainer.appendChild(beastCard)
    let btnView = document.getElementById("view" + id)
    btnView.addEventListener("click", (e) => renderViewMore(e, bestias))

    let checkBeast = document.getElementById("compare" + id)
    checkBeast.addEventListener("change", (e) => compareBeasts(e, bestias))
  })


  let menu = document.getElementById("menu")
  let count = document.createElement("div")
  menu.innerHTML = ""
  count.innerHTML = `<p>${bestias.length} resultados</p>`
  menu.appendChild(count)

  mostrarBtnCompare(bestiasComp)
}

function filterRenderEnter(beasts, e) {
  e.key === "Enter" && filterRenderByTextAndSign(beasts)
}

function renderCompare() {
  let divSearch = document.getElementById("panelBusqueda")
  divSearch.classList.toggle("notDisplay")

  let divSignals = document.getElementById("filter-signals")
  divSignals.classList.replace("filter-sign", "notDisplay")

  let ordenar = document.getElementById("order")
  ordenar.classList.toggle("notDisplay")

  let volver = document.getElementById("btnVolver")
  volver.classList.toggle("nowDisplay")

  let btnCompare = document.getElementById("btnCompare")
  btnCompare.classList.replace("nowDisplay", "notDisplay")

  let resultados = document.getElementById("menu")
  resultados.classList.toggle("notDisplay")

  let bestiasLS = obtainBeastsLS()

  let main = document.getElementById("beastContainer")
  main.innerHTML = ""

  bestiasLS.forEach(({ name, type, loot, location, desc, weakness, image }) => {
    let beastContainer = document.createElement("div")
    beastContainer.classList.add("tarjeton")
    beastContainer.innerHTML = `
    <div class=contenedor-img>
    <img style=height: 250px;  width:250px; src=./assets/images/${image} />
    </div>
    <h3>${name}</h3>
    <h5>Type: ${type}</h5>
    <p>Description: ${desc}</p>
    <p>Loot: ${loot}</p>
    <p>Location: ${location}</p>
    <p>Weakness: ${weakness}</p>
    `

    main.appendChild(beastContainer)
  })

}

function renderViewMore(e, bestias) {
  let divSearch = document.getElementById("panelBusqueda")
  divSearch.classList.toggle("notDisplay")

  let divSignals = document.getElementById("filter-signals")
  divSignals.classList.replace("filter-sign", "notDisplay")

  let ordenar = document.getElementById("order")
  ordenar.classList.toggle("notDisplay")

  let regresar = document.getElementById("btnRegresar")
  regresar.classList.toggle("nowDisplay")

  let btnCompare = document.getElementById("btnCompare")
  btnCompare.classList.replace("nowDisplay", "notDisplay")

  let resultados = document.getElementById("menu")
  resultados.classList.toggle("notDisplay")

  let idBeast = Number(e.target.id.substring(4))

  let vBeast = bestias.find(e => e.id === idBeast)

  let main = document.getElementById("beastContainer")
  main.innerHTML = ""

    let beastContainer = document.createElement("div")
    beastContainer.classList.add("unico")
    beastContainer.innerHTML = `
    <div class=contenedor-img>
    <img style=height: 250px;  width:250px; src=./assets/images/${vBeast.image} />
    </div>
    <h3>${vBeast.name}</h3>
    <h5>Type: ${vBeast.type}</h5>
    <p>Description: ${vBeast.desc}</p>
    <p>Loot: ${vBeast.loot}</p>
    <p>Location: ${vBeast.location}</p>
    <p>Weakness: ${vBeast.weakness}</p>
    `

    main.appendChild(beastContainer)
}

function regresarInicio(bestias){
  let divSearch = document.getElementById("panelBusqueda")
  divSearch.classList.toggle("notDisplay")

  let divSignals = document.getElementById("filter-signals")
  divSignals.classList.replace("notDisplay", "filter-sign")

  let selectO = document.getElementById("order")
  selectO.classList.toggle("notDisplay")

  let btnVolver = document.getElementById("btnRegresar")
  btnVolver.classList.toggle("nowDisplay")

  let resultados = document.getElementById("menu")
  resultados.classList.toggle("notDisplay")

  renderizarBestias(bestias)
}

function turnBack(bestias) {

  localStorage.removeItem("bestiasComp")

  let divSearch = document.getElementById("panelBusqueda")
  divSearch.classList.toggle("notDisplay")

  let divSignals = document.getElementById("filter-signals")
  divSignals.classList.replace("notDisplay", "filter-sign")

  let selectO = document.getElementById("order")
  selectO.classList.toggle("notDisplay")

  let btnVolver = document.getElementById("btnVolver")
  btnVolver.classList.toggle("nowDisplay")

  let resultados = document.getElementById("menu")
  resultados.classList.toggle("notDisplay")

  renderizarBestias(bestias)
}



function filterRenderByTextAndSign(bestias, e) {

  if (e) {
    let sign = e.target
    sign.classList.toggle("selected")
  }

  let inputSearch = document.getElementById("buscador").value.toLowerCase().trim()

  let selectedFilters = Array.from(document.querySelectorAll(".btn-filter.selected")).map(btn => btn.dataset.filter)

  let filteredBeasts = bestias.filter(beast => {
    let textFilterPassed = beast.name.toLowerCase().includes(inputSearch) || beast.type.toLowerCase().includes(inputSearch)

    let signalFiltersPassed = selectedFilters.every(filter => beast.weakness.toLowerCase().includes(filter))

    return textFilterPassed && signalFiltersPassed
  })
  let currentOrder = obtainOrderSS()
  if (currentOrder) {

    orderByName(filteredBeasts, currentOrder)
  } else {

    renderizarBestias(filteredBeasts)
  }

  return filteredBeasts
}


async function principal() {

  document.addEventListener('DOMContentLoaded', function () {
    AOS.init()
  })

  let bestias = await obtainData()

  sessionStorage.setItem("currentOrder", JSON.stringify("default"))

  addId(bestias)

  let btnSearch = document.getElementById("btnBuscar")
  btnSearch.addEventListener("click", () => filterRenderByTextAndSign(bestias))

  let selectOrder = document.getElementById("order")
  selectOrder.addEventListener("change", () => {
    let filteredBeasts = filterRenderByTextAndSign(bestias)
    orderByName(filteredBeasts, selectOrder.value)
  })

  let inputSearch = document.getElementById("buscador")
  inputSearch.addEventListener("keypress", (e) => filterRenderEnter(bestias, e))

  let btnCompare = document.getElementById("btnCompare")
  btnCompare.addEventListener("click", () => renderCompare())

  let btnVolver = document.getElementById("btnVolver")
  btnVolver.addEventListener("click", () => turnBack(bestias))

  let btnRegresar = document.getElementById("btnRegresar")
  btnRegresar.addEventListener("click",()=>regresarInicio(bestias))

  let btsFilter = document.getElementsByClassName("btn-filter")
  for (const btnFilter of btsFilter) {
    btnFilter.addEventListener("click", (e) => filterRenderByTextAndSign(bestias, e))
  }

  renderizarBestias(bestias)
}

principal()



