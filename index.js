
const formular = document.querySelector("#registrace")
const mail = document.querySelector("#email")


const redBorder = (event) => {
    if (event.target.value === "" || !event.target.value.includes('@')) {
        mail.classList.add("ramecek")
    } else {
        mail.classList.remove("ramecek")
    }
} 

const message = (event) => {
    event.preventDefault()
    const oznameni = document.querySelector("#zprava")
    const oznameni1 = document.querySelector("#zprava1")
    oznameni.textContent = `Jupí! Těšte se na novinky ze světa frontendu a UX na vaší adrese ${mail.value}`
    oznameni1.textContent = ``
}

mail.addEventListener("input", redBorder) 
formular.addEventListener("submit", message) 


