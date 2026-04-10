let regBut = document.getElementById('but__reg');
let regConf = document.querySelector('.confirmbtn');
let accForm = document.querySelector('.wrapper__acc');
let regForm = document.querySelector('.wrapper__reg');
let hvAcc = document.getElementById('have__acc');
let regConfadd = document.getElementById('but__conf3');
let addConf = document.getElementById('but__conf');
let errorConf = document.getElementById('error');

let addPass = document.getElementById('useradd');
let useraddpass = document.getElementById('useraddpass');
errorConf.hidden = true;
let admin = {
   user: 'Admin',
   email: "egorproshaev@gmail.com",
   password: '123123',
}
addConf.addEventListener('click', function (e) {
   e.preventDefault();
   if (admin.email == addPass.value && admin.password == useraddpass.value) {
      window.location.href = 'home.html';
   } else {
      addPass.style.cssText = `border: 1px solid red;`;
      useraddpass.style.cssText = `border: 1px solid red;`;
      errorConf.hidden = false;
   }
})
if (accForm.hidden === false) {
   regForm.hidden = true;
}
regBut.onmouseover = function () {
   regConf.style.cssText = `
      background-color: rgba(240, 248, 255, 0);
      color: white;
      transition: 1s ease;
   `
}
hvAcc.onmouseover = function () {
   regConfadd.style.cssText = `
      background-color: rgba(240, 248, 255, 0);
      color: white;
      transition: 1s ease;
   `
}
regBut.onmouseout = function () {
   regConf.style.cssText = `
      border: 1px solid rgba(70, 69, 69, 0.856);
      color: black;
      transition: 1s ease;
   `
}

hvAcc.onmouseout = function () {
   regConfadd.style.cssText = `
      border: 1px solid rgba(70, 69, 69, 0.856);
      color: black;
      transition: 1s ease;
   `
}

regBut.addEventListener('click', function () {
   accForm.hidden = true;
   regForm.hidden = false;
})

hvAcc.addEventListener('click', function () {
   accForm.hidden = false;
   regForm.hidden = true;
})

const form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
   e.preventDefault(); // предотвращаем перезагрузку страницы

   // получаем элементы напрямую через id
   const usernameInput = document.getElementById('user');
   const emailInput = document.getElementById('email');
   const passwordInput = document.getElementById('password');
   const confirmPasswordInput = document.getElementById('confpassword');

   const username = usernameInput.value.trim();
   const email = emailInput.value.trim();
   const password = passwordInput.value.trim();
   const confirmPassword = confirmPasswordInput.value.trim();
   if (password !== confirmPassword) {
      confirmPasswordInput.style.cssText = `border: 1px solid red;`;
      passwordInput.style.cssText = `border: 1px solid red;`
   }

   // Создаем объект
   const userData = { username, email, password };
});
// Преобразуем объект в JSON
//    const jsonData = JSON.stringify(userData, null, 2);

//    // Создаем файл для скачивания
//    if (password == confirmPassword) {
//       const blob = new Blob([jsonData], { type: 'application/json' });
//       const url = URL.createObjectURL(blob);

//       const a = document.createElement('a');
//       a.href = url;
//       a.download = `${username}.json`;
//       a.click();

//       URL.revokeObjectURL(url);
//    } else {
//       confirmPasswordInput.style.cssText = `border: 1px solid red;`;
//       passwordInput.style.cssText = `border: 1px solid red;`
//    }
// });


