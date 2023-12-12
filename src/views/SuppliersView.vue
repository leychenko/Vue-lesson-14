<template>
  <main-master-page>
	<h2>Оберіть постачальника</h2>
    <div class="container">
		<suppliers-panel/>
	</div>
	<template #rating>
		<div >Найбільш популярний : <span>Економ</span></div>
	</template>
	<template #status>
		<div >Статус :<span> відкрито</span></div>
	</template>
	
  </main-master-page>

</template>

<script>
import SuppliersPanel from "@/components/SuppliersPanel.vue";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";

export default {
  name: "SuppliersView",
  components: { MainMasterPage, SuppliersPanel},
};
</script>

<style lang="scss" scoped>
span{
	color: green;
}

</style>
