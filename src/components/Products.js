import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProduct } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

// data : products this mean alyas products

function Products() {
	const { data: products, status } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProduct());
	}, []);
	if (status === STATUSES.LOADING) {
		return <div>Loading...</div>;
	}

	const handleAdd = (product) => {
		dispatch(add(product));
	};

	return (
		<div className="productsWrapper">
			{products.map((product) => (
				<div className="card" key={product.id}>
					<img src={product.image} alt="product" />
					<h4>{product.title}</h4>
					<h5>{product.price}</h5>
					<button className="btn" onClick={() => handleAdd(product)}>
						Add to cart
					</button>
				</div>
			))}
		</div>
	);
}

export default Products;
