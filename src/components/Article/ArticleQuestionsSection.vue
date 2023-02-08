<script setup>
import IconCross from '@/components/Icons/Controls/IconCross.vue'
import IconSearch from '@/components/Icons/Controls/IconSearch.vue'
import ArticleQuestionItem from '@/components/Article/ArticleQuestionItem.vue'
</script>

<template>
    <section class="article-questions-section">
        <div class="article-questions-section-header">
            <input class="questions-searchbar"
                    type="search"
                    placeholder="Поиск по вопросам">

            <span class="article-questions-section-header__title">Вопросы по теме:</span>

            <IconCross class="questions-searchbar-clear-button" />

            <IconSearch class="questions-searchbar-search-icon" />
        </div>

        <div class="article-questions-section__questions-list">
            <ArticleQuestionItem class="article-questions-section__questions-list-item" />
            <ArticleQuestionItem class="article-questions-section__questions-list-item" />
        </div>

    </section>
</template>

<style lang="scss">
.article-questions-section {
    .article-questions-section-header {
        display: flex;
        margin-bottom: 40px;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        position: relative;

        &__title {
            font: 700 14px/1.2 'Helvetica';
            color: #000;
            letter-spacing: -0.02em;
        }

        .questions-searchbar-clear-button {
            display: none;
            position: absolute;
            right: 0;
            top: calc(50% - 5px);
            cursor: pointer;
        }

        .questions-searchbar-search-icon {
            position: absolute;
            right: 131px;
            top: calc(50% - 9px);
        }

        input.questions-searchbar {
            width: 123px;
            flex: 0 0 123px;
            font-size: 12px;

            &:focus {
                position: absolute;
                right: 0;
                width: calc(100% - 28px);
                transition: 200ms ease-in-out;

                & + .article-questions-section-header__title {
                    color: transparent;
                }

                & ~ .questions-searchbar-clear-button {
                    display: block;
                }

                & ~ .questions-searchbar-search-icon {
                    right: calc(100% - 18px);
                    transition: 200ms ease-in;
                }
            }
        }
    }

    @media (max-width: 767px) {
        &__questions-list-item {
            &:not(:last-child) {
                margin-bottom: 48px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        &__questions-list-item {
            &:not(:last-child) {
                margin-bottom: 40px;
            }
        }
    }

    @media (min-width: 1440px) {
        &__questions-list-item {
            &:not(:last-child) {
                margin-bottom: 40px;
            }
        }
    }
}
</style>
