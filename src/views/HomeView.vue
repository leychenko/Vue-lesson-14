<template>
 <main-master-page>
	<h2 class="title">Вітаємо!</h2>
	<h3 >Сподівась Ви будете чемними,і обов'язково щось купите</h3>
	<template #rating>Рейтинг магазину : {{getCorrectRating}}</template>
	<template #owner><div>Власник Баба Галя</div></template>
 </main-master-page>
	

</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import {mapGetters} from 'vuex';

export default {
  name: "HomeView",
  components: {
	MainMasterPage,
  },
  computed: {
	...mapGetters(['getCorrectRating'])
  },

};
</script>
<style lang="scss" scoped>
.title{
	font-size: 35px;
	color: green;
}
</style>

