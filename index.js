const container = document.querySelector('.container');
const card = document.querySelector('.card_container');
const shoe = document.querySelector('.image_container img');
const words = document.querySelector('.title');
const buttons = document.querySelector('.button_container');
const purchaseButton = document.querySelector('.bigButton__container');
const description = document.querySelector('.info_container h5');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  shoe.style.transform = 'translateZ(200px) rotate(-45deg)';
  words.style.transform = 'translateZ(150px)';
  description.style.transform = 'translateZ(150px)';
  buttons.style.transform = 'translateZ(100px)';
  purchaseButton.style.transform = 'translateZ(50px)';
});

container.addEventListener('mouseleave', (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  shoe.style.transform = 'translateZ(0px) rotate(0deg)';
  words.style.transform = 'translateZ(0px)';
  description.style.transform = 'translateZ(0px)';
  buttons.style.transform = 'translateZ(0px)';
  purchaseButton.style.transform = 'translateZ(0px)';
});
