<template>
  <div class="wrapper">
    <div class="container">
    	<slot name="container-menu">
    		<nav>
		      <router-link to="/">Головна</router-link> |
		      <router-link :to="{ name: 'products' }">Товари</router-link> |
				<router-link :to="{ name: 'suppliers' }">Постачальники</router-link> |
				<router-link :to="{ name: 'contacts' }">Контакти</router-link> |
				<router-link :to="{ name: 'shopping-rules' }">Правила купівлі</router-link>
				
		    </nav>
    	</slot>
		<div class="container__main">
			<slot name="container__main"></slot>
			<slot>
				
			</slot>
			
		</div>
	
		<footer class="container__footer">
			<slot name="rating"></slot>
			
			
			<slot name="owner">
				
			</slot>
			
				<slot name="status" >
					
				</slot>
			
		</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
};
</script>

<style lang="scss" scoped>
.wrapper{
	padding: 20px;
	
}
.container {
		display: flex;
	flex-direction: column;
	min-height:60vh;
		// .container__main
		&__main {
			flex-grow: 1;
		}
		// .container__footer
		&__footer {
			
		}
}
.container__footer{
	padding-top: 50px;
	display: flex;
	justify-content: space-between;
	font-size: 25px;
	font-weight: 700;
	.status{
		color:green;
	}
}
</style>
