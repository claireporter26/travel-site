import '../styles/styles.css'



//mobile menu function//

class MobileMenu {
    constructor(){
      this.menuIcon = document.querySelector(".site-header__menu-icon")
      this.menuContent = document.querySelector(".site-header__menu-content")
      this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
       this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    }
}

let mobileMenu = new MobileMenu();



if (module.hot) {
    module.hot.accept()
}









