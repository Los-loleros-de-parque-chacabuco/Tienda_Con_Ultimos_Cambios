var totalPago = 0;
const carrito = [];
let botonesAdquirirPromo=document.querySelectorAll(".adquririrPromo")
let botonesBiciCompra = document.querySelectorAll(".biciCompra")
const articulos = ["Specialized", "Bici2", "Bici3", "Bici4", "Bici5"];
const promociones = ["PromoBasica", "PromoBiciteka", "PromoPremiun"]
const valoresPromociones = [75000, 120000, 250000]

/*function bicicleta1() {
    var bici1 = confirm("Queres comprar la bici ?")
    if (bici1 === true) {
        totalPago += valoresArticulos[0]
        carrito.push(articulos[0])
    } else {
        alert("No hay drama rey , gracias por su visita")
    }
}
function bicicleta2() {
    var bici2 = confirm("Queres comprar la bici rey ?")
    if (bici2 === true) {
        totalPago += valoresArticulos[1]
        carrito.push(articulos[1])
    } else {
        alert("No hay drama rey , gracias por su visita")
    }
}
function bicicleta3() {
    var bici3 = confirm("Queres comprar la bici rey ?")
    if (bici3 === true) {
        totalPago += valoresArticulos[2]
        carrito.push(articulos[2])
    } else {
        alert("No hay drama rey , gracias por su visita")
    }
}

function promocionBasica() {
    var adquirir = confirm("Queres comprar el paquete ?")
    if (adquirir === true) {
        totalPago += valoresPromociones[0]
        carrito.push(promociones[0])


    }
}
function promocionBiciteka() {
    var adquirir2 = confirm("Queres comprar el paquete ?")
    if (adquirir2 === true) {
        totalPago += valoresPromociones[1]
        carrito.push(promociones[1])


    }
}
function promocionPremium() {
    var adquirir3 = confirm("Queres comprar el paquete ?")
    if (adquirir3 === true) {
        totalPago += valoresPromociones[2]
        carrito.push(promociones[2])


    }
}*/
botonesBiciCompra.forEach((botonBiciCompra)=>
botonBiciCompra.onclick = () => {
totalPago += parseInt(botonBiciCompra.dataset.valor)
carrito.push(botonBiciCompra)    
console.log(carrito) 
}
);   
botonesAdquirirPromo.forEach((botonAdquirirPromo)=>
botonAdquirirPromo.onclick = () => {
totalPago += parseInt(botonAdquirirPromo.dataset.valor)
carrito.push(botonAdquirirPromo)    
console.log(carrito) 
}
);   
//     

//         const biciletaElejida = botonBiciCompra.dataset.bici
// console.log(biciletaElejida)
//         borrarContenidoHTML(contenedorDeCards);
//         ocultar(resultadosTitulo);
//         ocultar(cantidadDeResultados);

//         crearTarjetaDetalleDeComic(comicCardElegida);

 // cierra el onclick
 // cierra el foreach
function comparBicicleta() {

}
var pagar;
var cuenta1;
var vuelto;
function vaciarCarrito() {
    totalPago = 0
    carrito = [];
}
function carritoCompra() {
    if (totalPago === 0) {
        alert("compra algo raton")
    } else {
        alert("Compraste estos articulos: " + "\n" + carrito + " tenes que pagar $ " + totalPago)
        pagar = parseInt(prompt("??Con cuento va pagar ?"))
        if (pagar > totalPago) {
            vuelto = pagar - totalPago;
            alert("Muchas gracias por su compra ;)\n Su vuelto es $ " + vuelto)
            vaciarCarrito()
        }
        else if (totalPago > pagar) {
            cuenta1 = (totalPago - pagar);
            alert("Te faltan $" + cuenta1)
            carritoCompra()
        }
        else {
            alert("Muchas gracias por su compra ;)")
            vaciarCarrito()
        }
    }
    console.log(carrito)
}



