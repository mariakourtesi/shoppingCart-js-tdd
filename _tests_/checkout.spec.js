import { ShoppingCart } from '../src/checkout'

describe('the shopping cart', function() {
	let cart;

	beforeEach(function() {
		cart = new ShoppingCart();
	});

	it('should have a total function', function() {
		expect(cart.total).toBeTruthy();
	});

	it('should have a total of zero if the basket is empty', function() {
		expect(cart.total()).toEqual(0);
	});

	it('should be able to scan an item', function() {
		expect(cart.scan).toBeTruthy();
	});
});