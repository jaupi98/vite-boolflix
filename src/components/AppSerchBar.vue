 <script>
        export default {
          data() {
            return {
                searchText:''
            }
          },
          methods: {
            sendSearch(){
                console.log(this.searchText);
            }
          },  
        }
 </script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3">
                <div class="d-flex my-4">
                    
                        <input type="text" v-model="searchText" class="from-control me-2" placeholder=" Search film" @keyup.enter="$emit('search')">
                        <button class="btn btn-sm btn-primary" @click="$emit('search')">Search </button>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
</style>