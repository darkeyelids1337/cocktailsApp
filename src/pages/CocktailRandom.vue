<script setup>
import { useRouter } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'
import { computed, ref } from 'vue'
import { COCKTAIL_RANDOM, INGREDIENT_PIC } from '@/constants'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const router = useRouter()
const cocktail = ref(null)

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break
    const ingredient = cocktail.value[`strIngredient${i}`]

    ingredients.push(ingredient)
  }
  return ingredients
})
async function getCocktail() {
  const data = await axios.get(COCKTAIL_RANDOM)
  cocktail.value = data?.data?.drinks[0]
}

function goBack() {
  router.go(-1)
}
getCocktail()
</script>

<template>
  <div class="wrap" v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <Swiper class="swiper" :slides-per-view="3" :space-between="50">
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key" class="swiperSlide">
                <img :src="`${INGREDIENT_PIC}${ingredient}-small.png`" width="100" height="100" class="swiper-img"/>
                <div class="name">
                  {{ ingredient }}
                </div>
              </swiper-slide>
            </Swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main.sass'

.slider
    padding: 50px 0
.swiper
    width: 586px
.name
    padding-top: 20px

@media (max-width: 1047px)
  .instructions
    font-size: 12px
    max-width: 100%
  .swiper
    min-width: 75%
    width: 0
    img
      // max-width: 75%
      // max-height: 75%
      width: 15px
      height: 15px
    .name
      padding-top: 10px
      font-size: 8px
      max-width: 50px
  .slider
    min-width: 75%
  .info
    min-width: 75%
  .swiperSlide
    margin-right: 10px !important
    flex-shrink: 1
</style>
