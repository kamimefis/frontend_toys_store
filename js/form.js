const formulario= document.getElementById('formulario');
const inputFormulario= document.getElementById('inputFormulario')

const formularioFiltrado= (data) =>{
    formulario.addEventListener( 'keyup', e =>{
        e.preventDefault();
        const inputValue= inputFormulario.value.toLowerCase();
        // console.log(inputValue)
        const filtrandoNombres= data.filter(item =>{
            const capturandoNombre= item.product_name.toLowerCase()
            if(capturandoNombre.indexOf(inputValue) !== -1) {
                return item
            }    
        })
        console.log(filtrandoNombres)
        producto(filtrandoNombres);
    })
}