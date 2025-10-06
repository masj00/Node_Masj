

const copyrightYearSpan = document.getElementById("copyright-year")

copyrightYearSpan.innerText = new Date().getFullYear();

//innerhtml er dårligt fordi cross-side scripting og kan ændres og dumt og dårligt