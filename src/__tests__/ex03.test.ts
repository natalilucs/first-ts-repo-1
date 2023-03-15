import { calcVolume } from '../lab01_ex03';

describe('Função de calcular volume', () => {

    test('trazer o resultado para calcular volume', () => {
        //arrenge
        const raioBase: number = 5;
        const alturaCilindro: number = 9;
        let expectvolumeCilindro: number = 706.50;

        //act

        let volumeCilindro: number = calcVolume(raioBase, alturaCilindro)

        //assert
        expect((volumeCilindro)).toBe(expectvolumeCilindro);
        });
});describe