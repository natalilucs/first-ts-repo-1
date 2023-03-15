import {calcPerimetro} from '../lab01_ex04';

describe('funcao que calcula o perimetro', ()=>{
    test('o resultado ', ()=>{
        // arrange
        let base: number = 4;
        let altura: number = 6;
        let expectperimetro: number = 20;
        //assert
        let perimetro: number = calcPerimetro(base, altura);
        // act
        expect(perimetro).toBe(expectperimetro);
    });
});describe