import {calcHipo} from '../lab01_ex05';

describe('funcao que calcula o valor da hipotenusa', () =>{
    test('calcular o valor da hipotenusa e retornar', ()=>{
        let c1: number = 6;
        let c2: number = 4;
        let expecthipotenusa: number = 46912;

        let hipotenusa: number = calcHipo(c1,c2);

        expect(hipotenusa).toBe(expecthipotenusa);
    });
});describe