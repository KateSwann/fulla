<script setup>
import { ref } from 'vue';

import ArticleReplyItem from '@/components/Article/ArticleReplyItem.vue'

const testRepliesListData = [
    {
        dateTime: '14 Апр 2022, 18:44',
        text: 'Все равно. Банк интересует чтобы у клиента был источник дохода.У меня договор на консультационные услуги с фирмой в USA.',
        authorName: 'Anna Na****',
        rating: 17,
        replies: [],
    },
    {
        dateTime: '14 Апр 2022, 18:44',
        text: 'Карта на 4 года, от 3-х дней для именной карты, от 2-х для неименной.',
        authorName: 'Vikk****',
        rating: 0,
        replies: [
            {
                dateTime: '14 Апр 2022, 18:44',
                text: 'для открытия потребовали Грузинский номер, но затем можно перепривязать на российский. Почему сразу на него не открыть непонятно - мб тетки в офисе просто не в курсе.',
                authorName: 'Mnchest****',
                rating: 5,
                replies: [],
            },
            {
                dateTime: '14 Апр 2022, 18:44',
                text: 'Что касается "зачем" - если вам не нужно, то и вопроса нет.',
                authorName: 'Looll****',
                rating: 199,
                replies: [],
            }
        ]
    },
];

let isQuestionOpened = ref(true);

function toggleQuestionRepliesDisplay() {
    isQuestionOpened.value = !isQuestionOpened.value;
}
</script>

<template>
    <article class="article-question-item">
        <h3 class="article-question-item__title">
            Есть ли возможность оформить (включая другие банки) без справок НДФЛ и тд?
        </h3>

        <div class="article-question-item__body">
            <template v-for="(replyItem, index) in testRepliesListData"
                      :key="index">
                <ArticleReplyItem class="article-question-item__reply-item"
                                  :class="{ 'article-question-item__reply-item--opened': isQuestionOpened }"
                                  :replyItem=replyItem
                                  />
            </template>
        </div>

        <span class="article-question-item__read-more"
              :class="{ 'article-question-item__read-more--opened': isQuestionOpened }"
              @click="toggleQuestionRepliesDisplay">
              {{ isQuestionOpened ? "Свернуть" : "См. все ответы" }}
        </span>
    </article>
</template>

<style lang="scss">
.article-question-item {
    &__title {
        margin-bottom: 18px;
        font: 700 20px/1.12 'Helvetica';
        letter-spacing: -0.05em;
    }

    &__reply-item {
        &:not(:last-child) {
            margin-bottom: 6px;
        }

        &--opened {
            &.question-reply,
            .question-reply {
                border-left-color: rgba($color: #000000, $alpha: .1);
            }
        }
    }

    &__read-more {
        display: inline-block;
        margin: 3px 0 0 20px;
        font: 400 12px/1.4 'Helvetica Neue';
        letter-spacing: -0.01em;
        border-bottom: 1px solid;
        position: relative;
        cursor: pointer;

        &::before {
            content: "";
            width: 2px;
            height: 10px;
            position: absolute;
            left: -20px;
            top: calc(50% - 5px);
            background-image: repeating-linear-gradient(180deg,
                                                     var(--text-color-regular),
                                                     var(--text-color-regular) 2px,
                                                     transparent 2px,
                                                     transparent 4px);
        }

        &--opened {
            color: rgba($color: #000000, $alpha: .4);

            &::before {
                height: 2px;
                top: calc(50% - 1px);
                background-color: rgba($color: #000000, $alpha: .4);
                background-image: none;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        &__body {
            padding-right: 104px;
        }
    }

    @media (min-width: 1440px) {
        &__body {
            padding-right: 104px;
        }
    }
}

</style>
