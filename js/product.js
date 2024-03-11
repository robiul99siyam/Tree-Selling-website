

let currentPage = 1;


const LoadProduct = (search, page, tagname) => {
    console.log("Search:", search);
    console.log("Page:", page);
    console.log("Tagname:", tagname);
    fetch(`https://botanical-wep-api.onrender.com/product/list/?search=${search ? search : ""}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Data:", data); // Log the data received from the API
            DisplayProduct(data.results);
        })
        .catch((error) => console.error('Error fetching data:', error));
}

const DisplayProduct = (products) => {
    const parent = document.getElementById("parent-product");
    parent.innerHTML = ''; // Clear previous content
    products.forEach((product) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card " style="width: 17rem;">
                <img style="height:200px;" src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="flex-grow-1">
                        <strong>${product.name}</strong> 
                        <p>price: ${product.price}$</p>
                        <p class="card-text"> Product Tag : ${product.product_tag}</p>
                    </div>
                </div>
            </div>`;
        parent.appendChild(div);
    });
}



const LoadProductTag = () => {
    fetch("https://botanical-wep-api.onrender.com/product/productTag/")
        .then((res) => res.json())
        .then((data) => {

            data.forEach((items) => {
                // const parent = document.getElementById("parent-btn");
                // const button = document.createElement("button");
                // button.style.border = "1px solid rgb(232, 224, 224)";
                // button.style.borderRadius = "20px";
                // button.className = "btn hvr-back-pulse";
                // button.textContent = tag.name;

                // button.onclick = function () {
                //     LoadProduct('', 1, tag.name)
                // }
                // parent.appendChild(button);


                const parent = document.getElementById("parent-btn");
                const li = document.createElement("li");
                li.style.border = "1px solid rgb(232, 224, 224)";
                li.style.borderRadius = "20px";
                li.className = "btn hvr-back-pulse";
                li.textContent = items.name;
                li.onclick = function() {
                    LoadProduct('',1,items.name);
                };
                parent.appendChild(li);
            });

        })
}
const LoadSearch = (event) => {
    event.preventDefault();
    const value = document.getElementById("search").value;
    LoadProduct(value, 1); // Load the first page when performing a new search
}

const nextPage = () => {
    currentPage++;
    LoadProduct(document.getElementById("search").value, currentPage);
}

const previousPage = () => {
    if (currentPage > 1) {
        currentPage--;
        LoadProduct(document.getElementById("search").value, currentPage);
    }
}

// Initial load
LoadProductTag();
LoadProduct('', currentPage); // Load the initial page