window.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("/.netlify/functions/get-users");
    const users = await response.json();

    const userTable = document.getElementById("userTable").querySelector("tbody");
    userTable.innerHTML = "";

    users.forEach(user => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.lineName}</td>
        <td>${user.email}</td>
        <td>${new Date(user.registeredAt).toLocaleDateString()}</td>
        <td><button onclick="togglePaid('${user._id}', ${user.isPaid})">${user.isPaid ? '解除' : '有料化'}</button></td>
        <td><button onclick="deleteUser('${user._id}')">削除</button></td>
    `;

    userTable.appendChild(row);
    });
});

async function togglePaid(userId, isPaid) {
    await fetch("/.netlify/functions/update-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, isPaid: !isPaid }),
    });

    window.location.reload();
}

async function deleteUser(userId) {
    await fetch("/.netlify/functions/delete-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
    });

    window.location.reload();
}