<script setup>
import {Back} from '@element-plus/icons-vue'
import {ROUTES_PATHS} from '@/constants'
import { computed } from 'vue';
import {useRoute, useRouter} from 'vue-router'


const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    },
    backFunc: {
        type: Function,
        required: true
    },
    isArrow:{
        type: Boolean,
        required: false,
        default: true
    }
})
const route = useRoute()
const router = useRouter()
const routeName = computed(() => route.name)

function goForCocktailRandom(){
    router.push(ROUTES_PATHS.COCKTAIL_RANDOM)
    if(routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
        router.go();
    }
}
</script>

<template>
    <div class="root">
        <div class="img"></div>
        <div class="main">
            <div class="btns">
                <el-button v-show="isArrow" @click="backFunc" type="primary" :icon="Back" circle class="back"></el-button>
                <el-button class="btn" @click="goForCocktailRandom">Get random cocktail</el-button>
            </div>
            
            <slot></slot>
        </div>
    </div>
</template>


<style lang="sass" scoped>
@import '../assets/styles/main'

.img
    background-image: url("/cocktailsApp/public/bg-1.jpg")
.root 
    display: flex
    background-color: $background
    min-height: 100vh
.img
    min-width: 50%
    background-repeat: no-repeat
    background-position: center
    background-size: cover
.main
    position: relative
    min-width: 50%
    padding: 32px 40px 
.btn
    position: absolute
    top: 32px
    right: 40px
    background-color: $accent 
    border-color: $accent
    color: $text
    font-size: 16px
    font-family: 'Raleway'
    &:hover,
    &:active
        background-color: darken( $accent, 10% )
        border-color: darken( $accent, 10% )
.btns
    display: flex
    justify-content: space-between
    align-items: center
.back
    background-color: transparent
    border-color: #ffffff
    &:hover
        border-color: $accent

@media (max-width: 730px)
    .btn
        right: 2%
        font-size: 8px
    .back
        position: relative
        right: 25%
    
</style>