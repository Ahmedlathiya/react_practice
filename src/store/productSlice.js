import { createSlice } from "@reduxjs/toolkit";

//inums javascript mein nhi hai but ham Object jaisa machenism bana skte hein
export const STATUSES = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	Loading: "loading",
});

const ProductSlice = createSlice({
	name: "product",
	initialState: {
		data: [],
		status: STATUSES.IDLE,
	},
	reducers: {
		setProducts(state, action) {
			state.data = action.payload;
		},
		setStatus(state, action) {
			state.status = action.payload;
		},
	},
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

//Thunls Middleware

export function fetchProduct() {
	return async function fetchProductThunk(dispatch, getState) {
		console.log(getState());
		dispatch(setStatus(STATUSES.LOADING));
		try {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			dispatch(setProducts(data));
			dispatch(setStatus(STATUSES.IDLE));
		} catch (error) {
			console.log(error);
			dispatch(setProducts(STATUSES.ERROR));
		}
	};
}
