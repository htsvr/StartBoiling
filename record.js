function updateUsername() {
    const nameEl = document.querySelector("#username");
    const username = localStorage.getItem("username");
    if (username) {
        nameEl.textContent = username;
    }
}

updateUsername();