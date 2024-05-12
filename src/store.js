import { reactive } from 'vue';

export const store = reactive ({
    api_key: import.meta.env.VITE_API_KEY, // per importare la chiave nascosta
    searchQuery: '',
    movieArr: [],
    seriesTvArr: [],
    castArr: [],
    genrArr: [],
    isLoading: false,
})