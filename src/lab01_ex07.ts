// Exercício 7: Conversão para minutos (*)
// Escreva um algoritmo que a partir de dois números inteiros, H e M, que representam horas e minutos,
// respetivamente, calcule o número de minutos passados desde as 0H

/**
 * INICIO
 * 
 * H, M: reais,
 * m = 
 * 
 * 1 min tem 60s
 * 1 hr tem 60min
 * 
 * 6h = 60 min x 6
 * 
 * 
 */

export function convMin(hora: number):number{
    const min: number = 60;
    let qthora: number = hora * min;
    return qthora;
}
