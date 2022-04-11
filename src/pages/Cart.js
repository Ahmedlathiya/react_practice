import React from "react";
import { remove } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(remove(id));
	};
	return (
		<div>
			<h3>Cart</h3>
			<div className="cardWrapper">
				{products.length > 0 ? (
					products.map((product) => (
						<div className="cartCard">
							<img src={product.image} alt="Product_Image" />
							<h5>{product.title}</h5>
							<h5>{product.price}</h5>
							<button className="btn" onClick={() => handleDelete(product.id)}>
								Remove
							</button>
						</div>
					))
				) : (
					<h2
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						No Item in Cart
					</h2>
				)}
			</div>
		</div>
	);
};

export default Cart;
