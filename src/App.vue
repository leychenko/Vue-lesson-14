<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
	 text-decoration: none;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
display: grid;
max-width: 1000px;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
gap: 10px;
margin: 0 auto;
}
</style>
