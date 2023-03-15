import {convertFahr} from '../lab01_ex06';

describe('Calcula a conversão de Celsius para Fahrenheit', ()=>{
    test('Função que calcula a conversao de temperatura deve resultar', ()=>{
        //arrange
        let celsius: number;
        celsius = 28;
        let expectCelsius:number = 82.40; 
        //act

        let fahrenheit: number = convertFahr(celsius);

        //assert
        expect(fahrenheit).toBe(expectCelsius);
    });
});describe