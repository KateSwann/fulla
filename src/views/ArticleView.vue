<script setup>
import { onBeforeMount, onUpdated } from 'vue';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/stores/post';

import ArticleLabelsList from '@/components/Article/ArticleLabelsList.vue'
import ArticleSocialCard from '@/components/Article/ArticleSocialCard.vue'
import ArticleQuestionsSection from '@/components/Article/ArticleQuestionsSection.vue'

const route = useRoute()
const { getPost } = storeToRefs(usePostStore())
const { fetchPost } = usePostStore()

let articleId = route.params.resultItemId;

onBeforeMount(() => {
    fetchPost(articleId);
});

onUpdated(() => {
    fetchPost(articleId);
});
</script>

<template>
    <main class="article-view">
        <article class="article-view__content">
            <ArticleLabelsList class="article-view__article-labels-list" />

            <template v-if="getPost">
                <h1 class="article-view__title">{{ getPost.title }}</h1>

                <p class="article-view__text">{{ getPost.content }}</p>
            </template>

            <ArticleSocialCard class="article-view__article-social-network-card" />

            <hr class="article-view__sections-divider">

            <ArticleQuestionsSection />
        </article>
    </main>
</template>

<style lang="scss">
.article-view {
    &__content {
        max-width: 620px;
        padding: 0 20px 40px;
        margin: 0 auto;
    }

    &__title {
        font: 700 40px/1 'Helvetica';
        letter-spacing: -0.05em;
        text-align: center;
    }

    &__text {
        margin: 0;
        padding: 0;
        font: 400 16px/1.4 'Helvetica';
        letter-spacing: -0.02em;
        text-align: center;
    }

    &__sections-divider {
        margin: 58px 0 32px;
        border-color: rgba($color: #000000, $alpha: .1);
    }

    &__article-social-network-card {
        margin-top: 40px;
    }

    @media (max-width: 767px) {
        padding-top: 40px;

        &__article-labels-list {
            margin-top: 16px;
        }

        &__title {
            margin-bottom: 18px;
        }

        &__text {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        &__button-read-more {
            display: block;
        }

        &__sections-divider {
            margin: 40px 0;
        }
    }

    @media (min-width: 768px) {
        &__article-labels-list {
            margin-top: 44px;
        }

        &__title {
            margin-bottom: 46px;
        }

        &__button-read-more {
            display: none;
        }
    }
}
</style>
