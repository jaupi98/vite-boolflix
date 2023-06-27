<script>
import AppHeader from './components/AppHeader.vue';
import AppFilmList from './components/AppFilmsList.vue';

  export default {
      components:{
        AppHeader,
        AppFilmList
      }
    }
</script>
<template lang="">
  <div>
    <AppHeader title ="boolflix"/>
    <AppFilmList/>
  </div>
</template>
<style lang="scss">
 @use './styles/generals.scss';
</style>