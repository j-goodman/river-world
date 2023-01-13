let buttons = {}
let pages = {}
let elements = {}

onload = () => {
    setupButtons()
    setupPages()
    setupSpecialAbilitiesSearch()
    populateSpecialAbilitiesList()
}

let setupButtons = () => {
    buttons.characterCreator = document.getElementById("character-creator-button")
    buttons.zinePrint = document.getElementById("zine-print-button")
    buttons.backButton = document.getElementById("back-button")
    buttons.specialAbilities = document.getElementById("special-abilities-button")
    buttons.backgrounds = {
        warrior: document.getElementById("warrior-pick"),
        thief: document.getElementById("thief-pick"),
        merchant: document.getElementById("merchant-pick"),
        mage: document.getElementById("mage-pick"),
    }

    buttons.zinePrint.onclick = () => {
        buttons.backButton.classList.remove("nondisplay")
        pages.home.classList.add("nondisplay")
        pages.zinePrint.classList.remove("nondisplay")
    }

    buttons.specialAbilities.onclick = () => {
        buttons.backButton.classList.remove("nondisplay")
        pages.home.classList.add("nondisplay")
        pages.specialAbilities.classList.remove("nondisplay")
    }

    buttons.characterCreator.onclick = () => {
        buttons.backButton.classList.remove("nondisplay")
        pages.home.classList.add("nondisplay")
        pages.characterCreator.classList.remove("nondisplay")
    }
    
    buttons.backButton.onclick = () => {
        buttons.backButton.classList.add("nondisplay")
        pages.home.classList.remove("nondisplay")
        hideAllButHome()
    }
}

let setupPages = () => {
    pages.home = document.getElementById("home-page")
    pages.characterCreator = document.getElementById("character-creator")
    pages.zinePrint = document.getElementById("zine-print-page")
    pages.specialAbilities = document.getElementById("special-abilities-page")
}

let setupSpecialAbilitiesSearch = () => {
    elements.specialAbilitiesSearch = document.getElementById("special-abilities-input")
    let input = elements.specialAbilitiesSearch
    input.addEventListener('input', populateSpecialAbilitiesList.bind(null, input))
}

let hideAllButHome = () => {
    pages.characterCreator.classList.add("nondisplay")
    pages.zinePrint.classList.add("nondisplay")
    pages.specialAbilities.classList.add("nondisplay")
}

let pickBackground = (background) => {
  
}

let initializeCharacterCreator = (background) => {
    window.character = {
        background: background
    }
}

let arrayToOrString = (array) => {
    let string = ""
    array.forEach((item, index) => {
        if (index === array.length - 1) {
            string += "or " + item
        } else if (index === array.length - 2) {
            string += item + " "
        } else {
            string += item + ", "
        }
    })
    return string
}

let populateSpecialAbilitiesList = (searchInput) => {
    let list = document.getElementById("special-abilities-list")
    list.innerHTML = ""
    let abilities;
    abilities = specialAbilities
    abilities.forEach(ability => {
        let prerequisiteString;

        if (!searchInput || ability.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            if (ability.prerequisites === null) {
                prerequisiteString = "None"
            } else if (typeof ability.prerequisites === "string") {
                prerequisiteString = ability.prerequisites
            } else if (ability.prerequisites[0] === "any") {
                prerequisiteString = "<b>either</b> "
                prerequisiteString += arrayToOrString(ability.prerequisites.slice(1, ability.prerequisites.length))
            }
    
            let item = document.createElement("li")
            item.innerHTML = `<div><b>${ability.name}</b></div>
            <div>Cost: ${ability.cost}</div>
            <div>Prerequisites: ${prerequisiteString}</div>
            ${ability.duration ? "<div>Duration: " + ability.duration + "</div>" : ""}
            <div>Description: ${ability.description}</div>
            `
            list.appendChild(item)
        }
    })
}