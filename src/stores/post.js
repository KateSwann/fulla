import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('post', {
    state: () => ({
        post: ref(null),
        error: null,
        isLoading: false,
    }),

    actions: {
        async fetchPost(postId) {
            this.isLoading = true
            try {
                const data = await axios.get(`http://45.92.176.110/posts/${postId}`)
                this.post = data.data
            }
            catch (error) {
                this.error = error;
                console.log('ERROR POST', this.error);
            }
            finally {
                this.isLoading = false;
            }
        },
    },
})
