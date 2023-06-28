 <script>
 import { store } from '../store.js';
        export default {
          data() {
            return {
                store
            }
          },
          methods: {
            // sendSearch(){
            //     this.$emit('search');
            // }
          },  
        }
 </script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3">
                <div class="d-flex my-4">
                    
                        <input type="text" v-model="store.searchText" class="from-control me-2" placeholder=" Search film" @keyup.enter="$emit('search')">

                        <button class="btn btn-sm btn-primary" @click="$emit('search')">Search </button>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
</style>