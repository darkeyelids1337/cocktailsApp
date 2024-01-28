<script setup>
import CocktailThumb from '@/components/CocktailThumb.vue'
import AppLayout from '@/components/AppLayout.vue'
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'
const rootStore = useRootStore()
rootStore.getIngredients()
const { ingredients, cocktails, ingredient } = storeToRefs(rootStore)

function goBack() {
  rootStore.setIngredient(null)
}

function getCocktails(ingredient) {
  rootStore.getCocktails(ingredient)
}
</script>

<template>
  <AppLayout
    imgUrl="/cocktailsApp/bg-1.jpg"
    :backFunc="goBack"
    :isArrow="ingredient"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="ingredient"
            placeholder="Choose main ingredient"
            size="large"
            filterable
            class="select"
            @change="() => getCocktails(ingredient)"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
          ingredient through our cocktail generator.
        </div>
        <div class="image-cocktails"></div>
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          ></CocktailThumb>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main.sass'

.select-wrapper
    padding-top: 50px
.select
    width: 220px
.text
    padding-top: 50px
    line-height: 36px
    letter-spacing: 0.1em
    color: $text
    max-width: 516px
    margin: 0 auto
.image-cocktails
    background-image: url('@/assets/img/bg-2.png')
    width: 345px
    height: 120px
    margin: 0 auto
    margin-top: 60px
.cocktails
    display: flex
    flex-wrap: wrap
    max-height: 400px
    overflow-y: auto
    justify-content: space-between
    align-items: center
    margin-top: 60px

@media(max-width:730px)
  .select
    width: 120px
  .text
      max-width: 100% 
      font-size: 12px
      padding-top: 50px
      line-height: 24px
  .image-cocktails
    width: 140px  
    height: 52px
    margin: 0 auto
    margin-top: 10px
    background-size: cover
  .cocktails
    margin-top: 30px
</style>
