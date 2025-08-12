function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "chat.html";
        })
        .catch(error => {
            document.getElementById("login-error").innerText = "❌ " + error.message;
        });
}

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "chat.html";
        })
        .catch(error => {
            document.getElementById("login-error").innerText = "❌ " + error.message;
        });
}
