import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('post', {
    state: () => ({
        post: ref([]),
        error: null,
        loading: false,
    }),

    getters: {
        getPost(state) {
            return state.post
        }
    },

    actions: {
        async fetchPost(postId) {
            this.post = ref([])
            this.loading = true
            try {
                const data = await axios.get(`http://45.92.176.110/posts/${postId}`)
                this.post = data.data
            }
            catch (error) {
                this.error = error;
                console.log('ERROR POST', this.error);
            }
            finally {
                this.loading = false;
            }
        },
    },
})
