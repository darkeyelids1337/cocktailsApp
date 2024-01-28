import { defineStore } from 'pinia'
import axios from 'axios'
import { INGREDIENTS_URL, COCKTAILS_BY_INGREDIENT_URL } from '@/constants'
export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: []
  }),
  actions: {
    async getIngredients(){
      const res = await axios.get(INGREDIENTS_URL)
      this.ingredients = res?.data?.drinks;
    },
    async getCocktails(ingredient){
      const res = await axios.get(`${COCKTAILS_BY_INGREDIENT_URL}${ingredient}`)
      this.cocktails = res?.data?.drinks;
    },
    setIngredient(val){
      this.ingredient = val;
    }
  }
})
