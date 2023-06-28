import { reactive } from 'vue';

export const store = reactive ({
    apiUrl : 'https://api.themoviedb.org/3/search/movie?api_key=e5bcdd9db0714a9e718357e96cd962be&query=ritorno+al+fut',
    filmList: [],
    loading: true,
    titleApp: 'bootflix',

})