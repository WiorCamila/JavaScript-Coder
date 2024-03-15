
function saludar (nombre,apellido){
    nombre = prompt("Ingrese tu nombre.")
    apellido = prompt('Ingrese tu apellido.')
    resultado = nombre + apellido
    alert('¡Hola ' + nombre + ' ' + apellido + ', bienvenido a tu compra online!')
}
saludar()

function calculoDelTotal(precio, precioTotal){
    precioTotal = precioTotal + precio
    return precioTotal
}
calculoDelTotal()

const frutas = []
let precios = 0
let comprasOnline = confirm('¿Quieres realizar la compra?')


if(comprasOnline == true){
    alert("Tienes 4 compras para realizar.")
    for (let i=0; i<4; i++){
        let compras = prompt('Productos disponible: Banana, Frutillas, Manzana, Mango y Kiwi.')
        switch(compras){
            case 'Banana':
                frutas.push('Banana')                
                precios = calculoDelTotal(2000, precios)
                break;
            case 'Frutillas':
                frutas.push('Frutillas')
                precios = calculoDelTotal(3000, precios)
                break;
            case 'Manzana':
                frutas.push('Manzana')
                precios = calculoDelTotal(4000, precios)
                break;
            case 'Mango':
                frutas.push('Mango')
                precios = calculoDelTotal (2500, precios)
                break;
            case 'Kiwi':
                frutas.push('Kiwi')
                precios = calculoDelTotal (800, precios)
                break;
            default:
               alert('La fruta no esta disponible.')
               break;
        }
    }
    alert("Precio total es: $" +precios +'.' + ' Frutas elegidas: ' + frutas.join(", ")+'.')
}else{
    alert('¡Gracias, vuelva pronto!')
}