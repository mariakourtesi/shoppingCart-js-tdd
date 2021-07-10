  import { addOffer, getOfferTotal  } from '../src/offerCalculator';

describe('the offer calculator', function() {
	it('should allow you to add an offer', function() {
		expect(addOffer).toBeTruthy();
	});

	it('should allow you to get an offer total', function() {
		expect(getOfferTotal).toBeTruthy();
	});

	
});