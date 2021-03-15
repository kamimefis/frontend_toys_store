// const fetch = require('node-fetch');

const productos= document.querySelector('#productos')

document.addEventListener("DOMContentLoaded", (e)=> {
    fetchData()
});


const fetchData= async ()=>{
    const res= await fetch('http://localhost:3050/')
    const data= await res.json()
    producto(data)
    console.log(data);


}

const producto = data =>{
    let elementos= ''
    data.forEach(item => {
        elementos += `
        <div class="row">
            <div class="column">
                <div class="card">
                    <img src="${item.image_url}" alt="..." style="width:100%">
                    <h1>${item.product_name}</h1>
                    <p class="price">$ ${item.price}</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
        </div>
        `
    });
    productos.innerHTML= elementos
}