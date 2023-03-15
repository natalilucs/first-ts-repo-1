import { convMin } from "../lab01_ex07";

describe('Converter horas em minutos', ()=>{
    test('funcao que converte hora para minutos', ()=>{
        //arrange
        let hora: number = 6;
        let expectMin: number = 360;

        //act

        let qtMinutos:number = convMin(hora); 

        //assert
        expect(qtMinutos).toBe(expectMin);
    });
});describe