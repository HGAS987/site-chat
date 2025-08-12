const auth = firebase.auth();
const db = firebase.database();

auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "index.html";
    }
});

function sendMessage() {
    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();

    if (message) {
        const user = auth.currentUser;
        db.ref("messages").push({
            user: user.email,
            text: message,
            timestamp: Date.now()
        });
        messageInput.value = "";
    }
}

db.ref("messages").on("child_added", snapshot => {
    const msg = snapshot.val();
    const messagesDiv = document.getElementById("messages");
    const messageElement = document.createElement("p");
    messageElement.textContent = `${msg.user}: ${msg.text}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}
