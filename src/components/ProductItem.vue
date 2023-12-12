<template>
		<div class="product-item item">
			<div class="item__image">
					<img :src="product.imgSrc ? product.imgSrc : defaultImg" alt="image">
			</div>
			<div class="item__info">
				<p><slot name="title" class="item__title">{{product.title}}</slot></p>
				<p><slot name="price" class="item__price">{{product.price}} <span v-if="product.price">грн</span></slot></p>
			</div>
			<button type="button" class="item__button">Купити</button>
		</div>
</template>

<script>



	export default {
		name:'ProductItem',
		props: {
			product: {
				type: Object,
				required: true
			},
		},
		data() {
			return {
				defaultImg:'https://img.freepik.com/premium-vector/circle-with-crossed-line-red-prohibition-sign_79145-715.jpg?w=740',
			}
		},
	}
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	padding: 10px;
	cursor: pointer;
	border: 3px solid black;
	// background-color: #7A956B;
	border-radius: 5px;
	transition: border 0.3s ease 0s;
	p{
		margin: 0;
	}
	@media (any-hover: hover){
		&:hover{
			border: 3px solid rgb(5, 237, 59);
		}
	}
		// .item__image
		&__image {
			overflow: hidden;
			border: 1px solid black;
			border-radius: 5px;
			flex: 0 1 70%;
			width: 100%;
			background-color: #fff;

			img{
				width: 100%;
				height: 100%;
			}
		}

				// .item__info
		&__info {
			flex-grow: 1;
			font-size: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
		}
		// .item__title
		&__title {
			font-weight: 700;
			&:not(:last-child) {
				margin-bottom: 25px;
			}
		}
		// .item__price
		&__price {
			color: rgb(0, 60, 255);
		}
		// .item__button
		&__button {
			padding: 10px 15px;
			font-size: 16px;
			border-radius: 5px;
			border: none;
			cursor: pointer;
			transition: background-color 0.3s ease 0s;
			@media (any-hover: hover){
				&:hover{
					background-color: #cacf6d;
				}
			}
		}
}



</style>