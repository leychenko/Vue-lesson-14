<template>
  <main-master-page>
		
    <template #container-menu>
      <nav>
        <router-link :to="{ name: 'home' }">На головну</router-link>
      </nav>
		 </template>
		 <template #container__main>
        	<h2>Наші контакти:</h2>
	        <div>Адресса магазину: біля будинку Баби Галі</div>
	        <div>Менеджер: Дід Петро</div>
	        <div>Заступник: онука Софія</div>
        </template>
      <div class="">

		  <div class="gallary-container">
		  	<h2>Галерея</h2>
	        <div class="gallary">
	          <div
	            v-for="item in getPictureList"
	            :key="item.id"
	            class="gallary__image">
	            <img :src="item.imgSrc" alt="" />
	          </div>
	        </div>
		  </div>
      </div>
   
	      
  </main-master-page>
  
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import { mapGetters } from "vuex";
export default {
  name: "ContactsView",
  components: {
    MainMasterPage,
  },
  computed: {
    ...mapGetters(["getPictureList"]),
  },
};
</script>

<style lang="scss" scoped>
.gallary-container{
	padding-top: 50px;
}
.gallary {
	display: grid;
	grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
	gap: 15px;
	margin-top: 50px;
		// .gallary__image
		&__image {
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
}


</style>
