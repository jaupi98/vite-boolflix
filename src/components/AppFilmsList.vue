<script>
import axios from 'axios';

    export default {
        data() {
            return {
            
                filmList: []
            }
        },
        mounted() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=e5bcdd9db0714a9e718357e96cd962be&query=ritorno+al+fut').then((response) =>{
                this.filmList = response.data.results;
            })
        }           
    }
</script>
<template lang="">
    <div>
        <div clas="container">
            <div class="row">
                
                <div v-for="(film,index)  in filmList" :key="index" class="col-2">
                    <div>{{film.title}}</div>
                    <div>{{film.original_title}}</div>
                    <div>{{film.vote_avarage}}</div>
                    <div>{{film.overview}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>