import { ShoppingCart } from '../src/checkout'
import { addOffer  } from '../src/offerCalculator';

describe('add items to basket', function() {
	var cart;

	beforeEach(function() {
		addOffer('A',3,130);
		addOffer('B',2,45);
		cart = new ShoppingCart();
	});

	it('can add items in any order', function() {
		cart.scan('B');
		cart.scan('A');
		cart.scan('B');
		expect(cart.total()).toEqual(95);
	});

	describe('A', function() {
		it('should add item A and add price 50', function() {
			cart.scan('A');
			expect(cart.total()).toEqual(50);
		});

		it('should add two A items and total should be 100', function() {
			cart.scan('A');
			cart.scan('A');
			expect(cart.total()).toEqual(100);
		});

		it('should add three A and total 130', function() {
			cart.scan('A');
			cart.scan('A');
			cart.scan('A');
			expect(cart.total()).toEqual(130);
		});

		it('should add four A and total 180', function() {
			cart.scan('A');
			cart.scan('A');
			cart.scan('A');
			cart.scan('A');
			expect(cart.total()).toEqual(180);
		});
	});

    describe('B item', function() {
		it('should add item B and add price 30', function() {
			cart.scan('B');
			expect(cart.total()).toEqual(30);
		});

		it('should scan two B items and total should be 45', function() {
			cart.scan('B');
			cart.scan('B');
			expect(cart.total()).toEqual(45);
		});

		it('should scan three B and total should be 75', function() {
			cart.scan('B');
			cart.scan('B');
			cart.scan('B');
			expect(cart.total()).toEqual(75);
		});

		it('should scan four B and total 90', function() {
			cart.scan('B');
			cart.scan('B');
			cart.scan('B');
			cart.scan('B');
			expect(cart.total()).toEqual(90);
		});
	});

    describe('C item', function() {
		it('should add item C and add price 25', function() {
			cart.scan('C');
			expect(cart.total()).toEqual(25);
		});

		it('should add two C items and total  should be 50', function() {
			cart.scan('C');
			cart.scan('C');
			expect(cart.total()).toEqual(50);
		});

		it('should scan three C items and total 75', function() {
			cart.scan('C');
			cart.scan('C');
			cart.scan('C');
			expect(cart.total()).toEqual(75);
		});

		it('should scan four C and total 100', function() {
			cart.scan('C');
			cart.scan('C');
			cart.scan('C');
			cart.scan('C');
			expect(cart.total()).toEqual(100);
		});
	});

    describe('D', function() {
		it('should add item D and add price 15', function() {
			cart.scan('D');
			expect(cart.total()).toEqual(15);
		});

		it('should add two D and total 30', function() {
			cart.scan('D');
			cart.scan('D');
			expect(cart.total()).toEqual(30);
		});

		it('should scan three D and total 45', function() {
			cart.scan('D');
			cart.scan('D');
			cart.scan('D');
			expect(cart.total()).toEqual(45);
		});

		it('should scan four D and total 60', function() {
			cart.scan('D');
			cart.scan('D');
			cart.scan('D');
			cart.scan('D');
			expect(cart.total()).toEqual(60);
		});
	});
});