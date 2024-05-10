import { reactive } from 'vue';

export const store = reactive ({
    api_key: '5583593877ebeea65957dbe3ff360503',
    searchQuery: '',
    movieArr: [],
    seriesTvArr: [],
    isLoading: false,
})