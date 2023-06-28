<script>
import { store } from '../store.js'
export default {
            data() {
                return {
                    store
                }
            },
    }
    </script>
<template lang="">
    <div class="loader-wrapper">
        <div class="text">{{store.titleApp}}</div>
    <div class="loader"></div>

    </div>
    
</template>
<style lang="scss" scoped>
.loader-wrapper{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    border: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;


}

.text{
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2rem;
}
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #da1e05;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    }

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>