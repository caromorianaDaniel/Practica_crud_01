export const primos = async (primo:number) => {
    let i = 0
    let resultado = 0
    while (resultado != 1 && primo < i ) {
        i++
        resultado=primo%i
    }
    if (resultado == 1){
        console.log('El numero introducido (',primo,') es primo')
    } else {
        console.log('El numero introducido (',primo,') no es primo')
    }
}

export const comp3 = async (num1:number, num2:number, num3:number) => {

    if (num1 > num2 && num1 > num3) {
        if (num2 < num3){
            console.log("El número mayor es ",num1," y el menor es ",num2)
        } else {
            console.log("El número mayor es ",num1," y el menor es ",num3)
        } 
    } else if (num2 > num1 && num2 > num3){
        if (num1 < num3){
            console.log("El número mayor es ",num2," y el menor es ",num1)
        } else {
            console.log("El número mayor es ",num2," y el menor es ",num3)
        }
    } else if ( num3 > num1 && num3 > num2){
        if (num1 < num2){
            console.log("El número mayor es ",num3," y el menor es ",num1)
        } else {
            console.log("El número mayor es ",num3," y el menor es ",num2)
        }
    } 

}

export const fechas = async (fecha1:Date, fecha2:Date) => {
    if (fecha1 > fecha2){

    } else {
        
    }
}
