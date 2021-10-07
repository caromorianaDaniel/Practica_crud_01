import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Primos')
    console.log('2.- Comparar 3 números')
    console.log('3.- Calculos con fechas')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}