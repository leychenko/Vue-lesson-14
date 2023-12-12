<template>
  <main-master-page>
    <template #container-menu>
      <nav>
        <router-link :to="{ name: 'home' }">На головну</router-link>
      </nav>
    </template>
    <template #container__main>
      <h3>Правилв купівлі:</h3>
      <ul>
        <li>Купуємо багато</li>
        <li>Платимо швидко</li>
        <li>Насолоджуємось товаром</li>
      </ul>
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
  name: "ShoppingRulesView",
  components: { MainMasterPage },
  computed: {
    ...mapGetters(["getPictureList"]),
  },
};
</script>

<style lang="scss" scoped>
.gallary {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 50px;
  // .gallary__image
  &__image {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
