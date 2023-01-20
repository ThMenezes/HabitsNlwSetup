const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save) // toda vez que atualizar a página, não vai sumir pq está guardado no LocalStorage

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // para deixar dessa forma -> 20/01
  //const today = "05/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    //vai verificar se já existe e para a função se já houver
    alert("Dia Já incluso 🛑")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) // transforma em String
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // transforma em objeto
nlwSetup.setData(data)
nlwSetup.load()
