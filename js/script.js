//const numeroPrendas = x => prendas + x;

//const numeroPrendas = a => a + 1;
/* function numeroPrendas(a) {
    for(let resultado = 0; 0 < 50; resultado++){
        if(resultado >= 50){
            alert('Capacidad Maxima del "Carrito" alcanzado')
        }
    }
} */

let continuar = true;



while (continuar) {
    let pregunta = prompt('Ingrese que tipo de prenda quisiera comprar: \n1 - Camiseta \n2 - Pantalon \n3 - Gorro \n4 - Chaqueta \n5 - Zapatos \n6 - Ropa Interior')
    
    let prendasGuardadas = 0;
    
    switch (pregunta) {
        case '1':
            alert('Ha agregado una "Camiseta" a su carrito');
            alert('Prendas totales en el carrito: '+ numeroPrendas(prendasGuardadas) )
            continuar = false;
            break;
        case '2':
            alert('Ha agregado un "Pantalon" a su carrito')
            alert('Prendas totales en el carrito: '+ (numeroPrendas + 1))
            continuar = false;
            break;
        case '3':
            alert('Ha agregado un "Gorro" a su carrito')
            alert('Prendas totales en el carrito: '+ (numeroPrendas + 1))
            continuar = false;
            break;
        case '4':
            alert('Ha agregado una "Chaquta" a su carrito')
            alert('Prendas totales en el carrito: '+ (numeroPrendas + 1))
            continuar = false;
            break;
        case '5':
            alert('Ha agregado uns "Zapatos" a su carrito')
            alert('Prendas totales en el carrito: '+ (numeroPrendas + 1))
            continuar = false;
            break;
        case '6':
            alert('Ha agregado "Ropa Interior" a su carrito')
            alert('Prendas totales en el carrito: '+ (numeroPrendas + 1))
            continuar = false;
            break;
        default:
            alert('Dato incorrecto')
    }

    let salida = prompt('Desea continuar con la compra?: Si (continuar) - No (Salir)')
    if (salida == 'Si') {
        continuar = true
        alert('Continuando con la compra..')
    } else if (salida == 'No'){
        continuar = false
        alert('Saliendo del carrito.')
    }
}

alert('Compra Finalizada');