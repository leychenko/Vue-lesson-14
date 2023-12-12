<template>
	<div class="editor">
		<div class="editor__line">
			<label class="editor__label">Назва товара</label>
			<input v-model="product.title" type="text" class="editor__input">
		</div>
		<div class="editor__line">
			<label class="editor__label">Ціна товара</label>
			<input v-model="product.price" type="number" class="editor__input">
		</div>
		<button type="button" class="editor__button" @click="onAddProduct">Додати</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

	export default {
		name:'EditorView',
		data() {
			return {
				product: {}
			}
		},
		methods: {
			...mapActions(['addNewProduct']),
			onAddProduct(){
				this.addNewProduct(this.product)
				this.product = {}
			}
		},
	}
</script>

<style lang="scss" scoped>
.editor {
	margin-top: 40px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	display: flex;
	gap: 15px;
	border: 2px solid black;

		// .editor__line
		&__line {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		// .editor__label
		&__label {
			font-size: 17px;
		}
		// .editor__input
		&__input {
			padding: 5px;
			font-size: 16px;
		}
		// .editor__button
		&__button {
			padding: 10px 15px;
			font-size: 17px;
			cursor: pointer;
			transition: background-color 0.3s ease 0s;
			align-self: flex-end;
			border: none;
			border-radius: 5px;
			@media (any-hover: hover){
				&:hover{
					background-color: #7A956B;
					color: #fff;
				}
			}
		}
}

</style>