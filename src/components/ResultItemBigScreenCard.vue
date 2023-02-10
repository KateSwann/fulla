<script setup>
import ArticleLabelsList from './Article/ArticleLabelsList.vue'
import ArticleSocialCard from './Article/ArticleSocialCard.vue'
import ArticleQuestionsSection from './Article/ArticleQuestionsSection.vue'
import IconCross from '@/components/Icons/Controls/IconCross.vue'
import IconOpen from '@/components/Icons/Controls/IconOpen.vue'
</script>

<template>
    <div class="result-item-big-card-container">
        <article class="result-item-big-card">
            <div class="result-item-big-card__side-content">
                <span class="result-item-big-card__date">14 Апр 2022,</span>
                <span class="result-item-big-card__time">14:12</span>
            </div>

            <div class="result-item-big-card__main-content">
                <RouterLink :to="{ name: 'article'}"
                            class="result-item-big-card__title-link">
                    <h2 class="result-item-big-card__title">
                        В какой стране можно открыть счёт в банке и что для этого нужно
                    </h2>
                </RouterLink>

                <p class="result-item-big-card__text">
                    Грузинские банки не открывают счета иностранцам, в том числе россиянам, удаленно. Единственное, что можно сделать, это подать с помощью доверенного представителя документы на открытие счета в Грузии, а также заполнить анкету KYC. Однако в случае одобрения, чтобы завершить процедуру, понадобиться личное присутствие заявителя в отделении банка в Грузии.
                </p>
            </div>
        </article>

        <article class="result-item-big-preview-card">
            <ArticleLabelsList />

            <RouterLink :to="{ name: 'article'}"
                        class="result-item-big-preview-card__title-link">
                <h2 class="result-item-big-preview-card__title">
                    В какой стране можно открыть счёт в банке и что для этого нужно
                </h2>
            </RouterLink>

            <p class="result-item-big-preview-card__text">
                Грузинские банки не открывают счета иностранцам, в том числе россиянам, удаленно. Единственное, что можно сделать, это подать с помощью доверенного представителя документы на открытие счета в Грузии, а также заполнить анкету KYC. Однако в случае одобрения, чтобы завершить процедуру, понадобиться личное присутствие заявителя в отделении банка в Грузии.
                <span class="result-item-big-preview-card__button-read-more">Читать подробнее</span>
            </p>

            <div class="controls-buttons-group">
                <div class="controls-buttons-group__button
                            controls-buttons-group__button--close">
                    <IconCross />
                </div>

                <div class="controls-buttons-group__button
                            controls-buttons-group__button--open">
                    <IconOpen />
                </div>
            </div>

            <ArticleSocialCard />

            <hr class="result-item-big-preview-card__sections-divider">

            <ArticleQuestionsSection />
        </article>
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
        font: 400 12px/1.4 'Roboto Mono';
        letter-spacing: -0.03em;
        color: rgba($color: #000000, $alpha: .6);
        margin: 0;
        padding: 0;
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
