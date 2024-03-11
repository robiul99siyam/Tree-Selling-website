let user_id =  localStorage.getItem("user_id");

let token = localStorage.getItem("token");

if (user_id && token) {
    document.getElementById("cart_btn").style.display = 'block';
   
} else {
    document.getElementById("cart_btn").style.display = 'none';
    
}



const LoadCartAddHere = (event) => {
    event.preventDefault();

    
   
    const product_name = document.getElementById("Product_name").value;


    const phone_number = document.getElementById("phone_number").value;


    const current_address = document.getElementById("current_address").value;

    const full_name = document.getElementsByName("full_name").value;

    const email = document.getElementById("email").value;

    const city_name = document.getElementById("city_name").value;

    const zip_code = document.getElementById("zip_code").value;

    const Credit_Number = document.getElementById('credit_number').value;


    fetch("https://botanical-wep-api.onrender.com/order/",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({product_name,phone_number,current_address,full_name,email,city_name,zip_code,Credit_Number})
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        if(data.user_id && data.token)
        {
            localStorage.setItem("token",data.token);


            localStorage.setItem("user_id",data.token);


            window.location.href = "./index.html";

            alert("order successfully now , thank you dear coustomer !")
        }
    })
    .catch((error)=>
    {
        console.error("error",error);
        alert("Error occurred while submitting data!"); 
    })


    
}



LoadCartAddHere();