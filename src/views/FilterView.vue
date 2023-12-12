<template>
	<div class="filter">
			<div class="filter__line">
				<label for="filter__label"></label>
				<input v-model="currentInputValue"  type="text" class="filter__input">
			</div>
		<button type="button" class="filter__button" @click="clearFilter">Clear filter</button>
	</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';


	export default {
		name:'FilterView',
		computed: {
			...mapGetters(['getFilteredProductList','getFilterValue']),
			currentInputValue:{
			get(){
				return this.getFilterValue
			},
			set(val){
				return this.setProductValue(val)
			}
		},
		},
		methods: {
			...mapActions(['setProductValue']),
			clearFilter(){
				this.currentInputValue = null
			}
		},
	}
</script>

<style lang="scss" scoped>
.filter {
	margin: 40px 0;
	display: flex;
	flex-direction: column;
	max-width: 300px;
	gap: 15px;
	border: 1px solid black;
	border-radius: 5px;
	padding: 10px;
		// .filter__line
		&__line {
		}
		// .filter__input
		&__input {
			padding: 5px;
			width: 95%;
		}
		// .filter__button
		&__button {
			align-self: flex-start;
			padding: 5px 10px;
			font-size: 16px;
		}
}


</style>