// join.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop default form submission

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const bank = document.getElementById("bank").value.trim();
    const trust = document.getElementById("trust").checked;

    // Basic validation
    if (!fullname || !email || !bank) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    if (!trust) {
      alert("⚠️ You must agree to the trust checkbox before joining.");
      return;
    }

    // Show a friendly confirmation
    alert(`💙 Thank you, ${fullname}! 
Your membership request has been received. 
We'll contact you at ${email} with next steps.`);

    // Reset the form
    form.reset();
  });
});
