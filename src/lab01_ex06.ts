//ex06

/**
 * INICIO
 * LER fahrenheit, celsius: real
 * fahrenheit <- 32 + (9 / 5) x celsius 
 * ESCREVER (fahrenheit)
 * FIM 
 */

export function convertFahr(celsius: number):number{
    let fahrenheit = 32 + (9/5) * celsius;
    return fahrenheit;
}


