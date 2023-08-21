import { makeIcecream } from "./icecream-machine.js";

const $flavors = document.querySelectorAll(".flavor");
$flavors.forEach(($el) => $el.addEventListener("click", selectFlavor));
function selectFlavor() {
  this.classList.toggle("is-active");
}

window.btn.addEventListener("click", () => {
  const $flavors = document.querySelectorAll(".flavor.is-active");
  // console.log($flavors);
  try {
    makeIcecream([...$flavors]);
  } catch (error) {
    alert(`Aún no completas los sabores para preparar tu helado`);
  }
});
