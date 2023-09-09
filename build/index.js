const initApp = () => {
    const hambugerBtn = document.getElementById("hamgurger-button")
    const mobileMenu = document.getElementById("mobile-menu")
    const toggelMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hambugerBtn.classList.toggle('toggle-btn')
    }
    hambugerBtn.addEventListener('click', toggelMenu)
    mobileMenu.addEventListener('click', toggelMenu)
}

document.addEventListener('DOMContentLoaded', initApp)