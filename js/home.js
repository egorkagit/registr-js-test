let userPlace = document.querySelector('.menu__acclink')
let userBtn = document.querySelector('.acc__link')
let nameUser = document.querySelector('.name__user')
let emailUser = document.querySelector('.email__user')
let menuPlace = document.getElementById('menu__bord')
let menu = document.querySelector('.menu')

let htmlImg = document.querySelector('.html__btn')
let cssImg = document.querySelector('.css__btn')
let jsImg = document.querySelector('.js__btn')
let youtubeImg = document.querySelector('.youtube__btn')

let htmlTable = document.getElementById('htmlTable')
let cssTable = document.getElementById('cssTable')
let jsTable = document.getElementById('jsTable')
let youtubeTable = document.getElementById('youtubeTable')

userPlace.hidden = true;
menuPlace.hidden = true;

htmlTable.hidden = true;
cssTable.hidden = true;
jsTable.hidden = true;
youtubeTable.hidden = true;

htmlImg.addEventListener('click', function () {
   htmlImg.classList.toggle('active');
   cssImg.classList.remove('active');
   jsImg.classList.remove('active');
   youtubeImg.classList.remove('active');
   htmlTable.hidden = false;
   cssTable.hidden = true;
   jsTable.hidden = true;
   youtubeTable.hidden = true;
})

cssImg.addEventListener('click', function () {
   htmlImg.classList.remove('active');
   cssImg.classList.toggle('active');
   jsImg.classList.remove('active');
   youtubeImg.classList.remove('active');
   htmlTable.hidden = true;
   cssTable.hidden = false;
   jsTable.hidden = true;
   youtubeTable.hidden = true;
})

jsImg.addEventListener('click', function () {
   htmlImg.classList.remove('active');
   cssImg.classList.remove('active');
   jsImg.classList.toggle('active');
   youtubeImg.classList.remove('active');
   htmlTable.hidden = true;
   cssTable.hidden = true;
   jsTable.hidden = false;
   youtubeTable.hidden = true;
})

youtubeImg.addEventListener('click', function () {
   htmlImg.classList.remove('active');
   cssImg.classList.remove('active');
   jsImg.classList.remove('active');
   youtubeImg.classList.toggle('active');
   htmlTable.hidden = true;
   cssTable.hidden = true;
   jsTable.hidden = true;
   youtubeTable.hidden = false;
})


let admin = {
   user: 'Admin',
   email: "egorproshaev@gmail.com",
   password: '123123',
}

userBtn.addEventListener('click', function () {
   if (userPlace.hidden === true) {
      userPlace.hidden = false;
   } else {
      userPlace.hidden = true;
   }
})

menu.addEventListener('click', function () {
   if (menuPlace.hidden === true) {
      menuPlace.hidden = false;
   } else {
      menuPlace.hidden = true;
   }
})

nameUser.innerHTML = `Name: ${admin.user}`;
emailUser.innerHTML = `Email: ${admin.email}`;

