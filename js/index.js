function generadorAutomatico() {
    recetas.push(new Receta('A','TORTA', "SALADO", '1'))
    recetas.push(new Receta('B','POSTRE', "DULCE", '2'))
    recetas.push(new Receta('C','BEBIDA', "AMARGO", '3'))

}

function nuevaReceta() {
    
    let nombre = prompt("Ingrese el nombre de la receta")
    let tipo = prompt("Ingrese el tipo de la receta", "Ej: comida, bebida, postre, torta, snack")
    let sabor = prompt("Ingrese el sabor de la receta", "Ej: dulce, salado, agridulce, amargo")
    let tiempo = prompt("Ingrese el tiempo aproximado de elaboración")
    recetas.push(new Receta(nombre, tipo, sabor, tiempo))
    console.table(recetas)

    let agregarAhora = true

    agregarAhora = confirm("¿Desea agregar los ingredientes de la receta?")

    if (agregarAhora) {       
//        agregarIngredientes()
           let seguimos = true
           let cantIngredientes = 0
           
           while(seguimos) {
           
           let ing = prompt("Agregar ingrediente:")
           let cantidad = prompt("Cantidad del ingrediente ingresado:")
           
           if (ing == "" || cantidad == "" || ing == null || cantidad == null) {
               console.error("Los campos no pueden quedar vacios!")
           }
           else {
                console.log(ing, ",", cantidad)
                cantIngredientes++
                ingredientes.push(new Ingrediente(nombre, ing, cantidad))
           }
           
           seguimos = confirm("¿Desea agregar otro ingrediente?")
           
                if ((seguimos == false) && (cantIngredientes < 3)) {
               console.warn("Debe agregar minimo 3 ingredientes.")
               seguimos = true
               } 
           
           }
           console.log("Cantidad de ingredientes: ", cantIngredientes)
    } 
        console.log("La receta fue agregada exitosamente.")
}

//function agregarIngredientes() {
//    debugger
//    let seguimos = true
//    let cantIngredientes = 0
//    let nombreReceta = recetas.find(receta )
//
//    while(seguimos) {
//
//    let ing = prompt("Agregar ingrediente:")
//    let cantidad = prompt("Cantidad del ingrediente ingresado:")
//
//    if (ing == "" || cantidad == "" || ing == null || cantidad == null) {
//        console.error("Los campos no pueden quedar vacios!")
//    }
//    else {
//         console.log(ing, ",", cantidad)
//         cantIngredientes++
//         ingredientes.push(new Ingrediente(nombreReceta, ing, cantidad))
//    }
//
//    seguimos = confirm("¿Desea agregar otro ingrediente?")
//
//         if ((seguimos == false) && (cantIngredientes < 3)) {
//        console.warn("Debe agregar minimo 3 ingredientes.")
//        seguimos = true
//        } 
//
//    }
//    console.log("Cantidad de ingredientes: ", cantIngredientes)
//}



function calcularIMC() {
     peso = parseInt(prompt("Ingrese su peso en kilogramos:"))
     altura = parseInt(prompt("Ingrese su altura en centimetros:"))
     altura = altura / 100
     imc = peso / (altura * altura)
     if (peso == "" || altura == "") {
        console.error("Los campos no pueden quedar vacios!")    
    } else {
         console.log("Su indice de masa corporal es:", imc)
    }

    if (imc >= 18.5 && imc <= 24.9) {
        console.log("Su peso se encuentra normal")
    } else if (imc > 25){
        console.log("Se encuentra por arriba del limite")
    } else if (imc < 18.4){
        console.log("Se encuentra por debajo del limite")
    } else {
        console.warn("Ups, ocurrió un erro en el calculo.")
    }
}
