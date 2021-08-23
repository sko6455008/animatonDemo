const targetElement = document.querySelectorAll(".animationTarget");

document.addEventListener("scroll", function () { /* スクロールするたびfor文が実行*/
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top /*ブラウザ上と要素の上からの距離*/
        // console.log(getElementDistance)
        if (window.innerHeight > getElementDistance)/*innerHeigth画面の高さ*/ {
            targetElement[i].classList.add("show") /* 画面の上が見えた瞬間にshowクラスになる*/
        }
    }
})
