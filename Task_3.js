function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var message = document.getElementById("message").value;

    // Validate name
    if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
    }

    // Validate email
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Validate website
    var websiteRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (website.trim() !== "" && !websiteRegex.test(website)) {
      alert("Please enter a valid website URL.");
      return false;
    }

    // Validate message
    if (message.trim() === "") {
      alert("Please enter your message.");
      return false;
    }

    // Form is valid, submit the data or perform further actions
    // Replace the code below with your own logic
    alert("Form submitted successfully!");

    return true;
  }