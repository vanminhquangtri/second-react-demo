const RotateCartAmount = function () {
    window.addEventListener("load", function (){
        const addToCartBtn = document.querySelectorAll(".add-to-cart");
        for (let i = 0; i < addToCartBtn.length; i++) {
            addToCartBtn[i].addEventListener("click", () => {
                const currentAmount = document.querySelector(".current-amount");
                currentAmount.style.transition = "1s";
                const currentRotate = currentAmount.style.transform;
                if (currentRotate === "rotate(0deg)"){
                    currentAmount.style.transform = "rotate(360deg)";
                    currentAmount.style.transition = "1s";
                }
                if (currentRotate === "rotate(360deg)"){
                    currentAmount.style.transform = "rotate(0deg)";
                    currentAmount.style.transition = "1s";
                }
            })
        }
    })
}

export default RotateCartAmount;