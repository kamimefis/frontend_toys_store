// const fetch = require('node-fetch');

const productos= document.querySelector('#productos')

document.addEventListener("DOMContentLoaded", (e)=> {
    fetchData()
});


const fetchData= async ()=>{
    const res= await fetch('http://localhost:3050/')
    const data= await res.json()
    producto(data)
    
    formularioFiltrado(data)

}

const producto = data =>{
    let elementos= ''
    data.forEach(item => {
        elementos += `
        <div class="card">
        <img src="${item.image_url}" alt="...">
        <h4>${item.product_name}</h4>
        <p>$ ${item.price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</p>
        <a href="#">Leer más</a>
    </div>
        `
    });
    productos.innerHTML= elementos
}

/*
<div class="column" style= "display: table-cell">
                <div class="card">
                    <img src="${item.image_url}" alt="..." style="width: 13rem">
                    <h1>${item.product_name}</h1>
                    <p class="price">$ ${item.price}</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
*/