import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import { primos,comp3,fechas } from './prueba'

const main = async () => {
    let n: number
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log("Estoy en opción primos")
                let primo
                primo = await leerTeclado('Dame un número: ')
                primo = Number(primo)
                await primos(primo)
                break
            case 2:
                console.log("Estoy en opción comp3")
                let num1, num2, num3
                num1 = await leerTeclado('Dame un número: ')
                num2 = await leerTeclado('Dame un número: ')
                num3 = await leerTeclado('Dame un número: ')
                num1 = Number(num1), num2 = Number(num2), num3 = Number(num3),
                await comp3(num1,num2,num3)
                break
            /*case 3:
                console.log("Estoy en opción fechas")
                let fecha1:Date, fecha2:Date
                fecha1 = await new Date(leerTeclado('Dame una fecha: ')) 
                fecha2 = await new Date(leerTeclado('Dame otra fecha: '))
                
                await fechas(fecha1,fecha2)
                break*/
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()



