<script setup>
import IconSocialTg from '@/components/Icons/Social/IconSocialTg.vue'
</script>

<template>
    <div class="question-reply">
        <span class="question-reply__time">14 Апр 2022, 18:44</span>

        <p class="question-reply__text">
            Я думаю, что во всех банках примерно такие правила - по крайней мере, в Грузии
        </p>

        <div class="question-reply__info-block">
            <span class="question-reply__social-network-icon">
                <IconSocialTg />
            </span>

            <span class="question-reply__author-name">Anna Na****</span>
        </div>

        <div class="rating-controls">
            <input type="button"
                value="-"
                class="rating-controls__button"
                data-reply-rating-for="reply-rating">

            <span class="rating-controls__counter">144</span>

            <input type="button"
                value="+"
                class="rating-controls__button"
                data-reply-rating-for="reply-rating">
        </div>
    </div>
</template>

<style lang="scss">
.question-reply {
    padding: 10px 104px 20px 16px;
    border-left: 2px solid #000000;
    position: relative;

    &__time {
        display: block;
        margin-bottom: 4px;
        font: 400 10px/1.4 'Helvetica Neue';
        color: rgba($color: var(--text-color-regular), $alpha: .4);
    }

    &__text {
        margin-bottom: 8px;
        font: 400 16px/1.4 'Roboto Mono';
        letter-spacing: -0.04em;
    }

    &__info-block {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        line-height: 0;
    }

    &__social-network-icon {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }

    &__author-name {
        font: 400 12px/1.4 'Roboto Mono';
        color: rgba($color: var(--text-color-regular), $alpha: .4);
    }

    .rating-controls {
        position: absolute;
        right: 0;
        top: calc(50% - 14px);
    }

    @media (max-width: 767px) {
        &__text {
            font: 14px;
        }
    }
}

</style>
