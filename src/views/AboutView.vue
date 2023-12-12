<template>
  <main-master-page>
	 <h2>Оберіть продукти</h2>
	 <product-list-view/>
	</main-master-page>
   
  
</template>
<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import ProductListView from './ProductListView.vue';


export default {
    name: 'AboutView',
    components: { MainMasterPage, ProductListView },

}
</script>