function sayHello() {
  console.log("Hello aus Github");
  window.location.href = "https://www.immobilienscout24.de/Suche/de/hessen/giessen-kreis/haus-kaufen?sorting=2";
  
  setTimeout(function(){ console.log(document.querySelectorAll('[data-obid]')); }, 4000);

  

}
