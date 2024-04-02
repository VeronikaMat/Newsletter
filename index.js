const formular = document.querySelector("#registrace")

formular.addEventListener("input", (event) => {
    const oblast = document.querySelector(".container")
    const email = document.querySelector("#email")

    if (event.target.value.length > 1 || email.value.includes("@")) {
        oblast.classList.remove("red-border")
    } else {
        oblast.classList.add("red-border")
    }
})


formular.addEventListener("submit", (event) => {
    const emailValue = document.querySelector("#email").value
    
    if (emailValue.indexOf("@") === -1) {
        event.preventDefault()
        const oblast = document.querySelector(".container")
        oblast.classList.add("red-border")
    } else {
        const oblast = document.querySelector(".container")
        oblast.innerHTML = `Jupí!! Těš se na novinky ze světa frontendu a UX na vaší adrese ${emailValue}.`
    }
})

        oblast.classList.add("red-border")