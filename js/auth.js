const  LoadRegister = (event) => {
    event.preventDefault()

    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password1");
    const confrim_password = getValue("password2");

    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confrim_password

    }
    if (password == confrim_password) {

        document.getElementById("p").innerText = "";
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(confrim_password
        )) {

            fetch("https://botanical-wep-api.onrender.com/user/Register/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(info)
                })
                .then((res) => res.json())             

        }
        else {
            document.getElementById("p").innerText = "pass must contain Minimum eight characters, at least one letter and one number";
        }
    }
    else {
        document.getElementById('p').innerText = "Possword Don't Match ";
    }
}


const getValue = (value) => {
    return document.getElementById(value).value;
}
LoadRegister();



