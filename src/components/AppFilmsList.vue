<script>

import AppFilmCard from './AppFilmCard.vue';
import AppLoader from './AppLoader.vue';

import { store } from '../store.js';

    export default {
        components:{
            AppFilmCard,
            AppLoader
        },
        data(){
            return{
                store
            }
        }            
    }
</script>
<template lang="">
    
        <div clas="container">
            <div class="row" v-if="store.loading === false">
                    <div v-for="(film,index)  in store.filmList" :key="index" class="col-6 col-lg-3 ">
                    <AppFilmCard :myFilm="film"/> 
                    </div>              
            </div>
            <AppLoader v-else/>
        </div>
</template>
<style lang="">
    
</style>