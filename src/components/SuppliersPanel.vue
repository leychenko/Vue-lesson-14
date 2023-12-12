<template>
	<product-item v-for="item in getSuppliersData" :key="item.id" :product='item'>
		<template #title>
			<span><font-awesome-icon :icon="['fas', `${item.icon}`]" /></span>
			<span><font-awesome-icon :icon="['fas', `${item.icon2}`]" /></span>
		</template>
	</product-item>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from '@/components/ProductItem.vue';

	export default {
		name:'SuppliersPanel',
		components: {
			ProductItem,
		},
		computed: {
			...mapGetters(['getSuppliersData'])
		},
	}
</script>

<style lang="scss" scoped>

</style>