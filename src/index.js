import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelector(".logo-heading").addEventListener("mouseover", (e) => {
  e.target.style.color = "green";
});
document.querySelector(".logo-heading").addEventListener("mouseleave", (e) => {
  e.target.style.color = "black";
});

document.querySelector(".intro img").addEventListener("wheel", (e) => {
  e.target.style.transform = "scale(1.3)";
});
document.querySelector(".intro img").addEventListener("mouseleave", (e) => {
  e.target.style.transform = "scale(1)";
});
document.querySelector(".img-content img").addEventListener("wheel", (e) => {
  e.target.style.transform = "scale(1.3)";
});
document
  .querySelector(".img-content img")
  .addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
  });
document
  .querySelector(".content-destination img")
  .addEventListener("wheel", (e) => {
    e.target.style.transform = "scale(1.3)";
  });
document
  .querySelector(".content-destination img")
  .addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
  });
document
  .querySelectorAll(".img-content img")[1]
  .addEventListener("wheel", (e) => {
    e.target.style.transform = "scale(1.3)";
  });
document
  .querySelectorAll(".img-content img")[1]
  .addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
  });

document
  .querySelectorAll(".container  nav a")[3]
  .addEventListener("dblclick", function (e) {
    alert("Önceden Yerinizi Ayırtın");
  });
// document.querySelectorAll("btn")[0].addEventListener("click", focus);

document.getElementsByClassName("main-navigation").style.resize = "both";

// addEventListener("click").focus();
