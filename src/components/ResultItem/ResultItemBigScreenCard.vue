<script setup>
import { ref }  from 'vue'

import ArticleLabelsList from '../Article/ArticleLabelsList.vue'
import ArticleSocialCard from '../Article/ArticleSocialCard.vue'
import ArticleQuestionsSection from '../Article/ArticleQuestionsSection.vue'
import IconCross from '@/components/Icons/Controls/IconCross.vue'
import IconOpen from '@/components/Icons/Controls/IconOpen.vue'
import ResultItemArticlePopup from '@/components/ResultItem/ResultItemArticlePopup.vue'

let isShowResultItemPopup = ref(false);

function toggleResultItemPopup() {
    isShowResultItemPopup.value = !isShowResultItemPopup.value;
}

function cancel() {
    isShowResultItemPopup.value = false;
}

const emit = defineEmits(['closeResultItem'])

const closeResultItem = () => {
    emit('closeResultItem')
}

const props = defineProps({
    resultItem: {
        id: Number,
        title: String,
        text: String,
        date: String,
        time: Number,
    }
});
</script>

<template>
    <div class="result-item-big-card-container">
        <article class="result-item-big-card">
            <div class="result-item-big-card__side-content">
                <span class="result-item-big-card__date">{{ resultItem.date }},</span>
                <span class="result-item-big-card__time">{{ resultItem.time }}</span>
            </div>

            <div class="result-item-big-card__main-content">
                <h2 class="result-item-big-card__title">{{ resultItem.title }}</h2>

                <p class="result-item-big-card__text">{{ resultItem.text }}</p>
            </div>
        </article>

        <article class="result-item-big-preview-card">
            <ArticleLabelsList />

            <RouterLink :to="{
                                name: 'article',
                                params: {
                                    resultItemId: resultItem.id,
                                },
                            }"
                        target='_blank'
                        class="result-item-big-preview-card__title-link">
                <h2 class="result-item-big-preview-card__title">{{ resultItem.title }}</h2>
            </RouterLink>

            <p class="result-item-big-preview-card__text">
                {{ resultItem.text }}
                <RouterLink :to="{
                                name: 'article',
                                params: {
                                    resultItemId: resultItem.id,
                                },
                            }"
                        target='_blank'
                        class="result-item-big-preview-card__button-read-more">
                        Читать подробнее
                </RouterLink>
            </p>

            <div class="controls-buttons-group">
                <div class="controls-buttons-group__button
                            controls-buttons-group__button--close"
                            @click.stop.prevent="closeResultItem">
                    <IconCross />
                </div>

                <RouterLink :to="{
                                name: 'article',
                                params: {
                                    resultItemId: resultItem.id,
                                },
                            }"
                            target='_blank'
                            class="controls-buttons-group__button
                            controls-buttons-group__button--open">
                    <IconOpen />
                </RouterLink>
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
    cursor: pointer;

    &:hover {
        background-color: var(--background-color-50);
    }

    &__side-content {
        font: 400 10px/1.4 'Helvetica Neue';
        color: rgba($color: #000000, $alpha: .4);
    }

    &__title {
        margin-bottom: 4px;
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
        padding: 24px 86px 23px 36px;

        &__title {
            margin-bottom: 7px;
            line-height: 1.05;
        }

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
    width: 750px;
    padding: 37px 120px 37px 90px;
    position: fixed;
    top: 126px;
    left: calc(50% - 60px);
    right: auto;
    bottom: 0;
    overflow-y: scroll;
    background-color: var(--background-color-0);

    &__title {
        font: 700 40px/1 'Helvetica';
        letter-spacing: -0.05em;
        color: var(--text-color-regular);
    }

    &__text {
        margin: 0;
        padding: 0;
        font: 400 16px/1.4 'Helvetica';
        letter-spacing: -0.02em;
    }

    &__button-read-more {
        font-weight: 700;
        line-height: 1.4;
        border-bottom: 1px solid;
        color: var(--text-color-regular);
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
        right: calc(50% - 660px);
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
    &--active {
        background-color: var(--background-color-50);

        .result-item-big-preview-card {
            display: block;
        }
    }
}
</style>
