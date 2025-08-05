function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.getElementById("form1").addEventListener("submit", function () {
    let a=document.getElementById("email-field");
    console.log(a.value);
})