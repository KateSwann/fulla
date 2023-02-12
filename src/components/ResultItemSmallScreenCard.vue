<script setup>
import { ref }  from 'vue'

import ArticleSocialCard from './Article/ArticleSocialCard.vue'
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
    <article class="result-item-small-card">
        <div class="result-item-small-card__side-content">
            <span class="result-item-small-card__date">{{ resultItem.resultDate }},</span>
            <span class="result-item-small-card__time">{{ resultItem.resultTime }}</span>
        </div>

        <div class="result-item-small-card__main-content">
            <RouterLink :to="{ name: 'article'}"
                        class="result-item-small-card__title-link">
                <h2 class="result-item-small-card__title">{{ resultItem.resultTitle }}</h2>
            </RouterLink>

            <p class="result-item-small-card__text-container">
                <span class="result-item-small-card__text">{{ resultItem.resultText }}</span>
                <span class="result-item-small-card__button-read-more">Читать подробнее</span>
            </p>

            <div class="controls-buttons-group">
                <div class="controls-buttons-group__button
                            controls-buttons-group__button--open">
                    <IconOpen @click="toggleResultItemPopup" />
                </div>

                <div class="controls-buttons-group__button
                            controls-buttons-group__button--close">
                    <IconCross />
                </div>
            </div>

            <ArticleSocialCard />
        </div>

        <ResultItemArticlePopup class="modal-window-fillin"
                                :resultItem=resultItem
                                v-if="isShowResultItemPopup"
                                @close="cancel">
        </ResultItemArticlePopup>
    </article>
</template>

<style lang="scss">
.result-item-small-card {
    position: relative;
    color: var(--text-color-regular);

    &:hover {
        background-color: var(--background-color-50);
    }

    &:hover,
    &--selected {
        .result-item-small-card__title-link {
            margin-right: 112px;
        }

        .result-item-small-card__title {
            margin-bottom: 16px;
        }

        .result-item-small-card__text {
            -webkit-line-clamp: 5;
            font: 400 16px/1.4 'Helvetica';
            letter-spacing: -0.02em;
        }

        .result-item-small-card__button-read-more {
            display: inline-block;
        }

        .article-social-network-card {
            display: flex;
        }

        .controls-buttons-group {
            display: flex;
        }
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

    &__text-container {
        margin: 0;
        padding: 0;
    }

    &__text {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font: 400 12px/1.4 'Roboto Mono';
        letter-spacing: -0.03em;
        color: rgba($color: #000000, $alpha: .6);
    }

    &__button-read-more {
        display: none;
        font-weight: 700;
        border-bottom: 1px solid;
        cursor: pointer;
    }

    .article-social-network-card {
        display: none;
    }

    .controls-buttons-group {
        display: none;
        position: absolute;

        &__button {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--background-color-0);
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 4px;
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
        padding: 18px 20px;

        &__side-content {
            margin-bottom: 4px;
        }

        &__title {
            min-height: 44px;
        }

        .article-social-network-card {
            margin: 22px 0 15px;
        }

        .controls-buttons-group {
            top: 36px;
            right: 20px;
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

        .article-social-network-card {
            margin: 24px 0 30px;
        }

        .controls-buttons-group {
            top: 12px;
            right: 12px;
        }
    }
}
</style>
