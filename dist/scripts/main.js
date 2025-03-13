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
//rien ne fonctionne c'est tristoune, c'est pacre que j'écris mal mon JS ou bien parce que la class hidden correpond à un display: none; ?
