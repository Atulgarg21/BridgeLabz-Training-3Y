
"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.body.innerHTML = `
    <h2>Edit User Details</h2>
    <form id="userForm">
        <label>Name</label><br>
        <input name="name" required><br><br>

        <label>Email</label><br>
        <input name="email" type="email" required><br><br>

        <label>Age</label><br>
        <input name="age" type="number" min="1" required><br><br>

        <button type="submit">Update User</button>
    </form>

    <h3>Updated User Details</h3>
    <pre id="output"></pre>
`;

const form = document.getElementById("userForm");

form.elements.name.value = user.name;
form.elements.email.value = user.email;
form.elements.age.value = user.age;

function displayUser() {
    document.getElementById("output").textContent =
        JSON.stringify(user, null, 2);
}

displayUser();

form.addEventListener("submit", event => {
    event.preventDefault();

    user.name = form.elements.name.value.trim();
    user.email = form.elements.email.value.trim();
    user.age = Number(form.elements.age.value);

    displayUser();
    console.log(user);
});
