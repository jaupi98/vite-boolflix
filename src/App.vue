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
           this.getFilm()
        },
        methods: {
          getFilm(){
            //  console.log(store.serchText);
            // RECUPERO IL MIO ENDPOINT
            let myUrl = store.apiUrl;

            if (store.searchText !== '') {
              myUrl += `?title=${store.searchText}`;
              
            }

            axios.get(myUrl).then((response) =>{
                store.filmList = response.data.results;
                store.loading = false;
            })

          }
        }     
    }
</script>
<template lang="">
  <div>
    <AppHeader title ="boolflix"/>
    <AppSerchBar @search="getFilm"/>
    <AppFilmList/>
  </div>
</template>
<style lang="scss">
 @use './styles/generals.scss';
</style>