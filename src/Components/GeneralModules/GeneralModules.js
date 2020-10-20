import $ from "jquery";
const ScrollToTop = (position, speed) => {
    $("html, body").animate({
        scrollTop: position
    }, speed)
}
export default ScrollToTop;