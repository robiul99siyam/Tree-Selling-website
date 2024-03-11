const DatailProduct = () => {
    fetch("https://botanical-wep-api.onrender.com/feature/")
        .then((res) => res.json())
        .then((data) => LoadData(data))
        .catch((error) => console.error('Error fetching data:', error));
}

const LoadData = (DatailsFe) => {
    const parent = document.getElementById("parent-datail");
    DatailsFe.forEach((details) => {
        const div = document.createElement("div");
        div.innerHTML = `
       
            <img src="${details.image}" class="img-fluid w-100">

        `;
        parent.appendChild(div);
    });
}

DatailProduct();


