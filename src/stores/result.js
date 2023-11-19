import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useResultStore = defineStore('result', {
    state: () => ({
        results: ref([]),
        resultsTotalCount: ref(null),
        error: null,
        loading: false,
    }),

    getters: {
        // getResults(state) {
        //     return state.results.results;
        // },

        // getResultsTotalCount(state) {
        //     return state.results.total;
        // },

        modifyResults(state) {
            return state.results.map(i => ({...i, isActive: false}));
        }
    },

    actions: {
        async fetchPostsSearchResults() {
            this.loading = true;
            try {
                const data = await axios.get('http://45.92.176.110/posts?query=')
                this.loading = false;
                this.results = data.data.results;
                this.resultsTotalCount = data.data.total;
            }
            catch (error) {
                this.error = error;
                console.log('ERROR RESULT', this.error);
            }
        },
    },
})
