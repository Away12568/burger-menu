const burger = document.querySelector(".burger")
const text = document.querySelector(".text")

burger.onclick = () => {
    text.classList.toggle("open")
}