<script setup>
import ArticleLabelsList from '@/components/Article/ArticleLabelsList.vue'
import ArticleSocialCard from '@/components/Article/ArticleSocialCard.vue'
import ArticleQuestionsSection from '@/components/Article/ArticleQuestionsSection.vue'
import ModalWindow from '@/components/Base/ModalWindow.vue'

const emit = defineEmits(['cancel'])

const cancel = () => {
    emit('cancel')
}

const props = defineProps({
    resultItem: {
        resultTitle: String,
        resultText: String,
        resultDate: String,
        resultTime: Number,
    }
});
</script>

<template>
    <ModalWindow class="modal-window-fillin"
                 @close="cancel">
        <template v-slot:content>
            <article class="modal-result-item-article">
                <ArticleLabelsList class="modal-result-item-article__article-labels-list" />

                <RouterLink :to="{ name: 'article'}"
                            class="modal-result-item-article__title-link">
                    <h2 class="modal-result-item-article__title">{{ resultItem.resultTitle }}</h2>
                </RouterLink>

                <p class="modal-result-item-article__text">
                    {{ resultItem.resultText }}
                </p>

                <RouterLink :to="{ name: 'article'}"
                             class="modal-result-item-article__button-read-more">
                    Читать подробнее
                </RouterLink>

                <ArticleSocialCard />

                <hr class="modal-result-item-article__sections-divider">

                <ArticleQuestionsSection />
            </article>
        </template>
    </ModalWindow>
</template>

<style lang="scss">
.modal-result-item-article {
    display: flex;
    flex-direction: column;

    &__title-link {
        color: var(--text-color-regular);
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

    &__button-read-more {
        display: inline-flex;
        align-self: center;
        font-weight: 700;
        color: var(--text-color-regular);
        border-bottom: 1px solid;
        cursor: pointer;
    }

    &__sections-divider {
        margin: 58px 0 32px;
        border-color: rgba($color: #000000, $alpha: .1);
    }

    .article-social-network-card {
        margin-top: 40px;
    }

    @media (max-width: 767px) {
        &__article-labels-list {
            margin-top: 16px;
        }

        &__title {
            margin-bottom: 8px;
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
