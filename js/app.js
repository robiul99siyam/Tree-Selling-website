const text =   "HousePlant,  The Perfect Choice ";
let index = 0;
const speed = 140; // typing speed in milliseconds

function typeWriter() {
    if (index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();



const FeatureDisplay = () => {
    fetch("https://botanical-wep-api.onrender.com/feature/")
        .then((res) => res.json())
        .then((data) => FeatureLoad(data));
}

const FeatureLoad = (Features) => {
    const parent = document.getElementById("parent-div");

    Features.forEach((feature) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div  class="card mb-4 hvr-shrink" style="width: 16rem;">
        <img  src="${feature.image}" class="card-img-top h-50 image " alt="...">
        <div class="card-body m-auto">
           <p>${feature.name}</p>
           <p>$ ${feature.price}</p>
        </div>
        </div>
        `
        parent.appendChild(div);
    })
}
FeatureDisplay();



const DailyProductDisplay = () => {
    fetch("https://botanical-wep-api.onrender.com/dailyProduct/")
        .then((res) => res.json())
        .then((data) => DailyProductLoad(data))
}

const DailyProductLoad = (Dailys) => {
    const parent = document.getElementById("parent-deal");
    Dailys.forEach((daily) => {
        const li = document.createElement("li");
        li.innerHTML = `
        
        <div class="card shadow h-100">
            <div class="ratio ratio-1x1">
                <img src="${daily.image}" loading="lazy" alt="...">
            </div>
                <div class="card-body d-flex flex-column flex-md-row">
                    <div class="flex-grow-1">
                            <strong>${daily.name}</strong>
                            <p class="card-text">Product Code : ${daily.product_code}</p>
                    </div>
                    <div class="px-md-2">$ ${daily.price}</div>
                    </div>
                </div>
        `;
        parent.appendChild(li);
    })
}

DailyProductDisplay();




const achiveDisplay = () => {
    fetch("https://botanical-wep-api.onrender.com/achive/")
        .then((res) => res.json())
        .then((data) => achiveLoading(data))
}


const achiveLoading = (achives) => {
    const parent = document.getElementById("parent-logo");

    achives.forEach((achive) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <img src="${achive.image}"  alt="not">
       
        `;
        parent.appendChild(div);
    })
}
achiveDisplay();


