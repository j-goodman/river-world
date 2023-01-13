let buttons = {}
let pages = {}

onload = () => {
    setupButtons()
    setupPages()
}

let setupButtons = () => {
    buttons.characterCreator = document.getElementById("character-creator-button")
    buttons.backButton = document.getElementById("back-button")
    buttons.backgrounds = {
        warrior: document.getElementById("warrior-pick"),
        thief: document.getElementById("thief-pick"),
        merchant: document.getElementById("merchant-pick"),
        mage: document.getElementById("mage-pick"),
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
}

let hideAllButHome = () => {
    pages.characterCreator.classList.add("nondisplay")
}

let pickBackground = (background) => {
  
}

let initializeCharacterCreator = (background) => {
    window.character = {
        background: background
    }
}