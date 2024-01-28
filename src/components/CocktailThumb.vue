<script setup>
const props = defineProps({
    cocktail:{
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="root">
        <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
            <div class="pic" :style="`background-image: url(${cocktail.strDrinkThumb})`"></div>
        </RouterLink>
        
        <div class="name">{{ cocktail.strDrink }}</div>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.root
    width: calc( 100% / 3)
    padding-right: 38px
    padding-bottom: 20px

    &:nth-child(3n+3)
        padding-right: 0
.pic
    width: 120px
    height: 120px
    margin: 0 auto
    background-repeat: no-repeat
    background-position: center 
    background-size: 100%
.name
    padding-top: 15px
    letter-spacing: 0.1em

@media(max-width: 911px)
    .pic
        width: 6.2vw
        height: 6.2vh
    .name
        padding-top: 1%
        letter-spacing: 0.1em
        font-size: 6px
        text-align: center
        max-width: 100%
    .root 
        padding-right: 5%
        padding-bottom: 2%
</style>