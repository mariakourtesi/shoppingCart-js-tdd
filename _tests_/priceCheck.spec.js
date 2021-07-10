import { calculate } from '../src/prices';

describe('calculate prices', function() {
	describe('A', function() {
		it('should scan item A and add price 50', function() {
			expect(calculate('A', 1)).toEqual(50);
		});

        it('should scan two A and total 100', function() {
			expect(calculate('A', 2)).toEqual(100);
		});

		it('should scan three A and total 150', function() {
			expect(calculate('A', 3)).toEqual(150);
		});

		it('should scan four A and total 200', function() {
			expect(calculate('A', 4)).toEqual(200);
		});
	});

    describe('B', function() {
		it('should scan item B and add price 30', function() {
			expect(calculate('B', 1)).toEqual(30);
		});

		it('should scan two B and total 60', function() {
			expect(calculate('B', 2)).toEqual(60);
		});

		it('should scan three B and total 90', function() {
			expect(calculate('B', 3)).toEqual(90);
		});

		it('should scan four B and total 1.20', function() {
			expect(calculate('B', 4)).toEqual(120);
		});
	});

    describe('C', function() {
		it('should scan item C and add price 25', function() {
			expect(calculate('C', 1)).toEqual(25);
		});

		it('should scan two C and total 50', function() {
			expect(calculate('C', 2)).toEqual(50);
		});

		it('should scan three C and total 75', function() {
			expect(calculate('C', 3)).toEqual(75);
		});

		it('should scan four C and total 100', function() {
			expect(calculate('C', 4)).toEqual(100);
		});
	});

    describe('D', function() {
		it('should scan item D and add price 15', function() {
			expect(calculate('D', 1)).toEqual(15);
		});

		it('should scan two D and total 30', function() {
			expect(calculate('D', 2)).toEqual(30);
		});

		it('should scan three D and total 45', function() {
			expect(calculate('D', 3)).toEqual(45);
		});

		it('should scan four D and total 60', function() {
			expect(calculate('D', 4)).toEqual(60);
		});
	});
});