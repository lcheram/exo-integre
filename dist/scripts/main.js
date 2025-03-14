const $speaker_main = document.querySelector(".speaker_main");
const $speaker_details = document.querySelector(".speaker_details");
const $btn_infos = document.querySelector(".info"); //afficher et click dessus re-toggle class
const $btn_about = document.querySelector(".speaker_details__footer_btn"); // pour fermer les infos
//add event listener et toggle class : hidden et active (les créer)

$btn_infos.addEventListener("click", (e) => {
  e.preventDefault();
  $speaker_details.classList.toggle("hidden");
  $speaker_main.classList.toggle("hidden");
});

$speaker_details.addEventListener("click", (e) => {
  e.preventDefault();
  $speaker_main.classList.toggle("hidden");
  $speaker_details.classList.toggle("hidden");
});
// faut que je boucle sur mes speakers, sinon ça prend que le premier. De toutes façons il y a un soucis avec mon display none qui ne prend pas sur un event. faudrait cibler le grand-parent de mon élément ? et mettre la classe info sur mes boutons partout dans mon HTML et pas juste sur mes deux premiers orateurs

const $menu_mobile = document.querySelector(".mobile_nav__icons--menu");
const $overlay = document.querySelector(".mobile_nav__overlay");

$menu_mobile.addEventListener("click", (e) => {
  e.preventDefault();
  // ça ne donne rien de nouveau, faut vraiment que je fasse des exercices de JS, parce que je me souviens de rien
  $overlay.classList.toggle("hidden");
  console.log(e); // y a rien dans mon console log <3 because j'ai fait de la merde <3
});
