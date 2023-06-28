<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppFilmList from './components/AppFilmsList.vue';
import AppSerchBar from './components/AppSerchBar.vue';

import { store } from './store';

  export default {
      components:{
        AppHeader,
        AppFilmList,
        AppSerchBar
      },
      data() {
            return {
                store
                
            }
        },
      mounted() {
            axios.get(store.apiUrl).then((response) =>{
                store.filmList = response.data.results;
                store.loading = false;
            })
        },
        methods: {
          searchFilm(){
            console.log('EMIT FUNZIONANTE')
          }
        }     
    }
</script>
<template lang="">
  <div>
    <AppHeader title ="boolflix"/>
    <AppSerchBar @search="searchFilm"/>
    <AppFilmList/>
  </div>
</template>
<style lang="scss">
 @use './styles/generals.scss';
</style>