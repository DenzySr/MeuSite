class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.NavLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.HandleClick = this.HandleClick.bind(this);
    }
    
    HandleClick(){
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.HandleClick);
    }
}