const contactForm = document.querySelector("form.form");
let leadName = document.getElementById("name-id");
let email = document.getElementById("email-id");
let website = document.getElementById("website-id");
let message = document.getElementById("message-id");

contactForm.addEventListener("submit", function (e) {
  //prevent the normal submission of the form
  e.preventDefault();

  var formData = {
    name: leadName.value,
    email: email.value,
    website: website.value,
    message: message.value,
  };

  console.log(formData);

  let xhr = new XMLHttpRequest();

  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("email successfully sent");
      leadName.value = "";
      email.value = "";
      website.value = "";
      message.value = "";
    } else {
      alert("something went wrong... try us at hello@sprk.digital");
    }
  };

  xhr.send(JSON.stringify(formData));
});
