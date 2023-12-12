import { createStore } from "vuex";
import { productsList } from "@/data/productData.js";
import {suppliers} from '@/data/supplirsList.js';
import { pictures } from "@/data/picturesData.js";

export default createStore({
  state: {
    status: true,
    productList: productsList,
    suppliersData: suppliers,
    correctRating: null,
    picturesList: pictures,
    filterValue: null,
  },
  getters: {
    getStatus: ({ status }) => {
      return status ? "Відчинино" : "Зачинено";
    },
    getFilterValue: (state) => state.filterValue,
    getFilteredProductList: (state) => {
      if (state.filterValue)
        return state.productList.filter((item) =>
          item.title
            .toLocaleLowerCase()
            .includes(state.filterValue.toLocaleLowerCase())
        );

      return state.productList;
    },
    getProductList: ({ productList }) => productList,
    getSuppliersData: ({ suppliersData }) => suppliersData,
    getPictureList: ({ picturesList }) => picturesList,
    getCorrectRating: (state) => {
      const result = 1 + Math.floor(Math.random() * (10000 - 1));
      return (state.correctRating = result);
    },
  },
  mutations: {
    setProductValue(state, newVal) {
      state.filterValue = newVal;
    },
    addNewProduct(state,newProduct){
		state.productList.push(newProduct)
	 }
  },
  actions: {
    setProductValue({ commit }, productValue) {
      commit("setProductValue", productValue);
    },
    addNewProduct({ commit }, product) {
      commit("addNewProduct", {
        id: new Date().getTime(),
        ...product,
      });
    },
  },
  modules: {},
});
