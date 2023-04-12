import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { checkoutOrderAction } from "../actions/OrderActions";

function CheckoutPage({ toplamfiyat }) {
	const dispatch = useDispatch();

	const tokenHandler = (token) => {
		console.log(token);
		dispatch(checkoutOrderAction(token, toplamfiyat));
	};

	return (
		<div>
			<StripeCheckout
				amount={toplamfiyat * 100}
				shippingAddress
				billingAddress
				token={tokenHandler}
				stripeKey="pk_test_51Moog7HmLJhuydfET0scjqhnQgob6P6m8IS17AdGh7sMFHpd5cqIeue0RNwUuewFl2w6j80qrHTeOYkHQo2VfHFb00wfWZRJiF"
				currency="TRY"
			>
				<button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
			</StripeCheckout>
		</div>
	);
}

export default CheckoutPage;
