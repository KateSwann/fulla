<script setup>
import ArticleReplyItem from '@/components/Article/ArticleReplyItem.vue'
</script>

<template>
    <article class="article-question-item">
        <h3 class="article-question-item__title">
            Есть ли возможность оформить (включая другие банки) без справок НДФЛ и тд?
        </h3>

        <div class="article-question-item__body">
            <ArticleReplyItem />
        </div>

        <span class="article-question-item__read-more">См. все ответы</span>
    </article>
</template>

<style lang="scss">
.article-question-item {
    &__title {
        margin-bottom: 8px;
        font: 700 20px/1.12 'Helvetica';
        letter-spacing: -0.05em;
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
    }
}

</style>
