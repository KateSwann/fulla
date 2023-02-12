<script setup>
import { ref }  from 'vue'

import ArticleLabelsList from './Article/ArticleLabelsList.vue'
import ArticleSocialCard from './Article/ArticleSocialCard.vue'
import ArticleQuestionsSection from './Article/ArticleQuestionsSection.vue'
import IconCross from '@/components/Icons/Controls/IconCross.vue'
import IconOpen from '@/components/Icons/Controls/IconOpen.vue'
import ResultItemArticlePopup from '@/components/ResultItemArticlePopup.vue'

let isShowResultItemPopup = ref(false);

function toggleResultItemPopup() {
    isShowResultItemPopup.value = !isShowResultItemPopup.value;
}

function cancel() {
    isShowResultItemPopup.value = false;
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
    <div class="result-item-big-card-container">
        <article class="result-item-big-card">
            <div class="result-item-big-card__side-content">
                <span class="result-item-big-card__date">{{ resultItem.resultDate }},</span>
                <span class="result-item-big-card__time">{{ resultItem.resultTime }}</span>
            </div>

            <div class="result-item-big-card__main-content">
                <RouterLink :to="{ name: 'article'}"
                            class="result-item-big-card__title-link">
                    <h2 class="result-item-big-card__title">{{ resultItem.resultTitle }}</h2>
                </RouterLink>

                <p class="result-item-big-card__text">{{ resultItem.resultText }}</p>
            </div>
        </article>

        <article class="result-item-big-preview-card">
            <ArticleLabelsList />

            <RouterLink :to="{ name: 'article'}"
                        class="result-item-big-preview-card__title-link">
                <h2 class="result-item-big-preview-card__title">{{ resultItem.resultTitle }}</h2>
            </RouterLink>

            <p class="result-item-big-preview-card__text">
                {{ resultItem.resultText }}
                <span class="result-item-big-preview-card__button-read-more">Читать подробнее</span>
            </p>

            <div class="controls-buttons-group">
                <div class="controls-buttons-group__button
                            controls-buttons-group__button--close">
                    <IconCross />
                </div>

                <div class="controls-buttons-group__button
                            controls-buttons-group__button--open"
                            @click="toggleResultItemPopup">
                    <IconOpen />
                </div>
            </div>

            <ArticleSocialCard />

            <hr class="result-item-big-preview-card__sections-divider">

            <ArticleQuestionsSection />
        </article>

        <ResultItemArticlePopup class="modal-window-fillin"
                                :resultItem=resultItem
                                v-if="isShowResultItemPopup"
                                @close="cancel">
        </ResultItemArticlePopup>
    </div>
</template>

<style lang="scss">
.result-item-big-card {
    color: var(--text-color-regular);

    &:hover {
        background-color: var(--background-color-50);
    }

    &__side-content {
        font: 400 10px/1.4 'Helvetica Neue';
        color: rgba($color: #000000, $alpha: .4);
    }

    &__title-link {
        display: block;
        margin-bottom: 4px;
    }

    &__title {
        font: 700 20px/1.12 'Helvetica';
        letter-spacing: -0.05em;
        color: var(--text-color-regular);
    }

    &__text {
        margin: 0;
        padding: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font: 400 12px/1.4 'Roboto Mono';
        letter-spacing: -0.03em;
        color: rgba($color: #000000, $alpha: .6);
    }

    @media (max-width: 767px) {
        padding: 12px 20px;

        &__side-content {
            margin-bottom: 4px;
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        display: flex;
        flex-wrap: nowrap;
        padding: 20px 40px;
        border-radius: 16px;

        &__side-content {
            flex: 0 0 100px;
            padding-right: 35px;
            display: flex;
            flex-direction: column;
        }
    }

    @media (min-width: 1440px) {
        display: flex;
        flex-wrap: nowrap;
        padding: 20px 64px 20px 36px;

        &__side-content {
            flex: 0 0 100px;
            padding-right: 35px;
            display: flex;
            flex-direction: column;
        }
    }
}

.result-item-big-preview-card {
    display: none;
    width: 720px;
    padding: 37px 90px 37px 150px;
    position: fixed;
    top: 129px;
    left: calc(50% - 60px);
    right: auto;
    bottom: 0;
    overflow-y: scroll;
    background-color: rgba($color: lightblue, $alpha: .4);

    &__title-link {
        color: var(--text-color-regular);
    }

    &__title {
        font: 700 40px/1 'Helvetica';
        letter-spacing: -0.05em;
    }

    &__text {
        margin: 0;
        padding: 0;
        font: 400 16px/1.4 'Helvetica';
        letter-spacing: -0.02em;
    }

    &__button-read-more {
        font-weight: 700;
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

    .controls-buttons-group {
        display: flex;
        flex-direction: column;
        position: fixed;
        right: calc(50% - 645px);
        top: 116px;
        z-index: 5;

        &__button {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--background-color-50);
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: 12px;
            }

            &--close {
                .fill-color {
                    fill: var(--text-color-regular);
                    opacity: 1;
                }
            }

            &--open {
                .fill-color {
                    stroke: var(--text-color-regular);
                }
            }
        }
    }

    @media (max-width: 767px) {
        &__button-read-more {
            display: block;
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        &__button-read-more {
            display: block;
        }
    }

    @media (min-width: 1440px) {
        &__title {
            margin-bottom: 20px;
            text-align: center;
        }

        &__text {
            text-align: center;
        }
    }
}

.result-item-big-card-container {
    &:hover,
    &--selected {
        .result-item-big-preview-card {
            display: block;
        }
    }
}
</style>
