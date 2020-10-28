const NavImage = function (selector, source) {
    const navBtn = document.querySelectorAll(selector);
        source.slide__image.forEach((image, index) => {
            for (let i = 0; i < navBtn.length; i++){
                if (index === i){
                    navBtn[i].style.backgroundImage = `url(${image.default})`
                }
            }
        })
}
export default NavImage;