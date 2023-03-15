import { somaRamo } from "../lab01_ex02";

describe('test recebe valores para soma', () => {

    test('funcao soma flores', () => {
        //arrange
        const qtR: number = 3;
        const qtT: number = 5;
        const pR: number = 1.00;
        const pT: number = 2.00;
        let expectSoma: number = 13.00;

        //act

        let totalRamo: number = somaRamo(qtR, qtT, pR, pT)

        //assert
        expect(totalRamo).toBe(expectSoma);
        
    });
});describe 

