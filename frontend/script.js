document.getElementById("registrationForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const lineName = document.getElementById("lineName").value;
    const email = document.getElementById("email").value;
  
    const response = await fetch("/.netlify/functions/register-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, lineName, email }),
    });
  
    const result = await response.json();
    document.getElementById("responseMessage").innerText = result.message;
  });
  