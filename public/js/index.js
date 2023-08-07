function OnclickOpenMenu() {
  document.getElementById("header-nav").classList.remove("hidden")
  document.getElementById("close-menu").classList.remove("hidden")
  document.getElementById("open-menu").classList.add("hidden")
}

function OnclickCloseMenu() {
  document.getElementById("header-nav").classList.add("hidden")
  document.getElementById("close-menu").classList.add("hidden")
  document.getElementById("open-menu").classList.remove("hidden")
}

// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

function SetCookies(value){
  var expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 1);
  document.cookie = `dark-mode=${value}; expires=${expiryDate}; path=/`
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
} 

(function () {
  console.log(getCookie('dark-mode'));
  if (getCookie('dark-mode') == "On") {
    document.documentElement.classList.add("dark");
  }
  else if (getCookie('dark-mode') == "Off") {
    document.documentElement.classList.remove("dark");
  }else if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      SetCookies('On')
      document.documentElement.classList.add("dark")
    }else{
      SetCookies('Off')
      document.documentElement.classList.remove("dark")
    }
  }

})();

function darkmode() {
  SetCookies('On')
  document.documentElement.classList.add("dark");
}

function lightmode() {
  SetCookies('Off')
  document.documentElement.classList.remove("dark");
}
