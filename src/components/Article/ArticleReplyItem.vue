<script setup>
import IconSocialTg from '@/components/Icons/Social/IconSocialTg.vue'

const props = defineProps({
    replyItem: {
        dateTime: String,
        text: String,
        authorName: String,
        rating: Number,
        replies: Array,
    }
});
</script>

<template>
    <div class="question-reply">
        <div class="question-reply__body">
            <span class="question-reply__time">{{ replyItem.dateTime }}</span>

            <p class="question-reply__text">{{ replyItem.text }}</p>

            <div class="question-reply__info-block">
                <span class="question-reply__social-network-icon">
                    <IconSocialTg />
                </span>

                <span class="question-reply__author-name">{{ replyItem.authorName }}</span>
            </div>

            <div class="rating-controls">
                <input type="button"
                    value="-"
                    class="rating-controls__button"
                    data-reply-rating-for="reply-rating">

                <span class="rating-controls__counter">{{ replyItem.rating }}</span>

                <input type="button"
                    value="+"
                    class="rating-controls__button"
                    data-reply-rating-for="reply-rating">
            </div>
        </div>

        <template v-if="replyItem.replies.length">
            <template v-for="(replyItem, index) in replyItem.replies"
                      :key="index">
                <ArticleReplyItem class="article-question-item__reply-item"
                                  :replyItem=replyItem
                                  />
            </template>
        </template>
    </div>
</template>

<style lang="scss">
.question-reply {
    padding: 10px 0 0 16px;
    border-left: 2px solid #000000;

    &__body {
        position: relative;
    }

    &__time {
        display: block;
        margin-bottom: 4px;
        font: 400 10px/1.4 'Helvetica Neue';
        color: rgba($color: var(--text-color-regular), $alpha: .4);
    }

    &__text {
        margin-bottom: 18px;
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
    }

    @media (max-width: 767px) {
        &__body {
            padding-bottom: 0px;
        }

        &__text {
            font: 14px;
        }

        .rating-controls {
            bottom: 0;
            right: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        &__body {
            padding-bottom: 22px;
        }

        .rating-controls {
            right: -104px;
            top: 33px;
        }
    }

    @media (min-width: 1440px) {
        &__body {
            padding-bottom: 22px;
        }

        .rating-controls {
            right: -104px;
            top: 33px;
        }
    }
}

</style>
