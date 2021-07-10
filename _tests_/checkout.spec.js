
import { calculate } from '../src/checkout'

describe('Calculate function', () =>{
    test('It should calculate the total price of a number of items', () => {
        const
            A  = 0.50,
            B  = 0.30,
            C  = 0.20,
            D  = 0.15;

            expect(calculate(A, B)).toEqual(0.80)
    })

   
})