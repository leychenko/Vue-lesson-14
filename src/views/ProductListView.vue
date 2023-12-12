<template>
  <main-master-page>
	<h2>Оберіть товар</h2>
		<div class="search">
			<router-link to="/products/selector" class="link">Пошук товару</router-link> | 
			<router-link to="/products/editor" class="link">Додати товар</router-link>
			<router-view/>
		</div>
	<div class="container"><product-panel/></div>
	<template #rating>
		<div>Рейтинг магазину : <span>{{getCorrectRating}}</span></div>
	</template>

    <template #status>
      <div>Статус : <span>{{getStatus}}</span></div>
    </template>

  </main-master-page>
</template>

<script>
// import FilterView from '@/views/FilterView.vue';
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import ProductPanel from '@/views/ProductPanel.vue';
import { mapGetters } from "vuex";

export default {
  name: "ProductListView",
  components: {
    MainMasterPage,
     ProductPanel,
	//   FilterView
  },
  computed: {
	...mapGetters(['getStatus','getCorrectRating'])
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  max-width: 1000px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  margin: 0 auto;
  span{
	color: green;
  }
}
.search{
	max-width: 600px;
	padding: 20px 10px;
}
.link{
	text-decoration: none;
	border: 2px solid black;
	padding: 10px;
	font-weight: 700;
	border-radius: 5px;
	background-color: #84e9d7;
	color: black;
}
</style>
