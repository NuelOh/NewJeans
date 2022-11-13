const $centerCard = document.querySelector("#centerCard");
const $attentionCard = document.querySelector("#attentionCard");
const $hypeBoyCard = document.querySelector("#hypeBoyCard");
const $cookieCard = document.querySelector("#cookieCard");
const $hurtCard = document.querySelector("#hurtCard");


const move = () => {
  if($attentionCard.style.transform === 'translate(-180px, -150px) rotateZ(360deg)') {
    $attentionCard.style.transform = 'translate(0px, 0px)';
    $hypeBoyCard.style.transform = 'translate(0px, 0px)';
    $cookieCard.style.transform = 'translate(0px, 0px)';
    $hurtCard.style.transform = 'translate(0px, 0px)';
  } else {
    $attentionCard.style.transform = 'translate(-180px, -150px) rotateZ(360deg)';
    $hypeBoyCard.style.transform = 'translate(110px, -230px) rotateZ(360deg)';
    $cookieCard.style.transform = 'translate(180px, 150px) rotateZ(360deg)';
    $hurtCard.style.transform = 'translate(-110px, 230px) rotateZ(360deg)';
  }
}

$centerCard.addEventListener('click', move);

