  import { addOffer, getOfferTotal  } from '../src/offerCalculator';

describe('the offer calculator', function() {
	it('should allow you to add an offer', function() {
		expect(addOffer).toBeTruthy();
	});

	it('should allow you to get an offer total', function() {
		expect(getOfferTotal).toBeTruthy();
	});

    describe('when there are no offer', function() {
		it('should calculate offer price as 0 and remaining untotalled items as quantity passed in', function() {
			//A is 50 each of 3 for 130
			let result = getOfferTotal('A', 4);
			expect(result).toEqual({
				offerTotal:0,
				unmatchedItems:4
			});
		});
	});

    describe('when there is a matching offer', function() {
		it('should calculate offer price for A and remaining untotalled items', function() {
			//A is 50 each the offer is 3 for 130
			addOffer('A',3,130);
			var result = getOfferTotal('A', 4);
			expect(result).toEqual({
				offerTotal:130,
				unmatchedItems:1
			});
		});

        it('should calculate offer price for B and remaining untotalled items', function() {
			//B is 30 each the offer is 2 for 45
			addOffer('B',2,45);
			var result = getOfferTotal('B', 3);
			expect(result).toEqual({
				offerTotal:45,
				unmatchedItems:1
			});
		});
	});
	
});