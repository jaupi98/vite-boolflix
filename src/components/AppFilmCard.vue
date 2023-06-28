<script>
    export default {
            props:{
                myFilm: Object
            }
        }
</script>
<template lang="">
    <div class=" film text-center">
        <!-- <img :src="myFilm.poster_path" class="img-fluid mb-3" alt=""> -->
        <img src="./img/avatar_1.jpg" alt="">
        <p>{{myFilm.title}}</p>
        <p>{{myFilm.original_title}}</p>
        <p>{{myFilm.vote_average}}</p>
        <p>{{myFilm.overview}}</p>
        

    </div>
</template>
<style lang="scss" scoped>
    .film{
        margin-bottom: 3rem ;
    }
    img{
        height: 300px;
        box-shadow:  0px 0px 6px 3px rgba(0,0,0,5) ;
    }
</style>