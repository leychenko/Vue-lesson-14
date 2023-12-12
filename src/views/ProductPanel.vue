<template>
	<product-item v-for="item in getFilteredProductList" :key="item.id" :product="item">

	</product-item>

</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapGetters } from "vuex";
	export default {
		name:'ProductPanel',
		components: {
			ProductItem,
		},
		  computed: {
    ...mapGetters(['getFilteredProductList']),
  },
	}
</script>

<style lang="scss" scoped>

</style>