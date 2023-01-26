<template>
    <ul class="article-labels-list">
        <li class="article-labels-list__item">грузия</li>
        <li class="article-labels-list__item">банковские карты</li>
        <li class="article-labels-list__item">открытие счета</li>
    </ul>
</template>

<style lang="scss">
.article-labels-list {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    &__item {
        padding: 2px 4px;
        margin: 0 2px;
        font: 400 10px/1.4 'Roboto Mono';
        letter-spacing: -0.02em;
        color: rgba($color: #000000, $alpha: .8);
        border-radius: 4px;

        &:nth-child(3n+1) {
            background-color: #FAEDCC;
        }

        &:nth-child(3n+2) {
            background-color: #E3EFE1;
        }

        &:nth-child(3n+3) {
            background-color: #ECE0DB;
        }
    }
}
</style>
