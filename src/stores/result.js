import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"
import axios from 'axios'

export const useResultStore = defineStore('result', {
    state: () => ({
        results: ref([]),
        resultsSearchSuggestions: ref([]),
        resultsTotalCount: ref(null),
        enteredQueries: useLocalStorage('enteredQueries', []),
        query: ref(''),
        error: null,
        isLoading: false,
    }),

    getters: {
        showSearchSuggestions(state) {
            if (state.results) {
                state.resultsSearchSuggestions = state.results
                    .map(i => ({...i, isVisible: true}))
                    .slice(0, 10);
                return state.resultsSearchSuggestions;
            } else {
                return null;
            }
        },

        modifyResults(state) {
            return state.results.map(i => ({...i, isActive: false}));
        }
    },

    actions: {
        async fetchPostsSearchResults(userQuery) {
            this.isLoading = true;
            try {
                this.query = userQuery;
                const data = await axios.get(`http://45.92.176.110/posts?q=${this.query}`);
                this.isLoading = false;
                this.results = data.data.results;
                this.resultsTotalCount = data.data.total;
            }
            catch (error) {
                this.error = error;
                console.log('ERROR RESULT', this.error);
            }
            finally {
                this.isLoading = false;
            }
        },

        addEnteredQueryToArray(userQuery) {
            this.enteredQueries = [
                { title: userQuery, isVisible: true },
                 ...this.enteredQueries
            ];
            console.log(this.enteredQueries);
        },

        removeEnteredQueryFromArray(queryIndex) {
            this.enteredQueries.splice(queryIndex, 1);
            console.log(this.enteredQueries);
        },
    },
})
