

let user_id = localStorage.getItem("user_id");
let token = localStorage.getItem("token");

if (user_id && token) {
    document.getElementById("logout").style.display = 'block';
    document.getElementById("login").style.display = 'none';
    document.getElementById("register").style.display = 'none';
} else {
    document.getElementById("logout").style.display = 'none';
    document.getElementById("login").style.display = 'block';
    document.getElementById("register").style.display = 'block';
}

const LoadLogin = (event) => {
    event.preventDefault();

    const username = getIdValue("username");
    const password = getIdValue("password");

    fetch("https://botanical-wep-api.onrender.com/user/Login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.token && data.user_id) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user_id", data.user_id);
                window.location.href = "./index.html";
            }
        })
        .catch((error) => console.error("Error:", error));
};

const getIdValue = (value) => {
    return document.getElementById(value).value;
};

const LoadLogout = () => {
    fetch("https://botanical-wep-api.onrender.com/user/Logout/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
    })
        .then((res) => {
            if (res.ok) {
                localStorage.removeItem("user_id");
                localStorage.removeItem("token");
                window.location.href = './login.html';
            } else {
                console.error("Logout error:", res.status, res.statusText);
            }
        })
        .catch((error) => console.error("Error:", error));
};


