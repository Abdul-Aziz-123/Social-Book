

var settingsmenu = document.querySelector(".settings-menu");
  var darkBtn = document.getElementById("dark-btn");


 function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-hight");
}
darkBtn.onclick = function () {
     darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theam");

}