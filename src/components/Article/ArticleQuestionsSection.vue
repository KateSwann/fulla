<script setup>
import IconCross from '@/components/Icons/IconCross.vue'
import IconSearch from '@/components/Icons/IconSearch.vue'
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
    </section>
</template>

<style lang="scss">
.article-questions-section {
    .article-questions-section-header {
        display: flex;
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
}

</style>
