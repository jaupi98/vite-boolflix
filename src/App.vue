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
           this.getFilm();
           axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e5bcdd9db0714a9e718357e96cd962be').then((response) =>{

              store.filmList = response.data.results;
           })
        },
        methods: {
          getFilm(){
            //  console.log(store.serchText);
            // RECUPERO IL MIO ENDPOINT
            let myUrl = store.apiUrl;

            if (store.searchText !== '') {
              myUrl += `&query=${store.searchText}`;
              
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