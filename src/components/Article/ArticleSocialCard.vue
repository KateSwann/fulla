<template>
    <section class="article-social-network-card">
        <div class="article-social-network-card__left-column">
            <img src="@/assets/images/temporary-img-social-avatar.png"
                 class="article-social-network-card__img"
                 alt="">
        </div>

        <div class="article-social-network-card__right-column">
            <h3 class="article-social-network-card__title">
                Банковские карты Казахстан, Узбекистан, Грузия помощь в открытии Travelbelka.ru
            </h3>

            <p class="article-social-network-card__text">
                Тинькофф банк увеличивает бесплатный порог хранения долларов и евро на банковских и брокерских счетах до $/€100.000
            </p>
        </div>

        <ul class="reactions-list">
            <li class="li reactions-list__item">🕊️ 53</li>
            <li class="li reactions-list__item">👍 7</li>
            <li class="li reactions-list__item">🤬 4</li>
        </ul>

        <img src="@/assets/images/social/social-network-tg.png"
             class="article-social-network-card__icon"
             alt="">
    </section>
</template>

<style lang="scss">
.article-social-network-card {
    display: flex;
    flex-wrap: wrap;
    border-radius: 16px;
    border: 1px solid rgba($color: #000000, $alpha: .1);
    position: relative;

    &__right-column {
        flex: 1 0;
    }

    &__title {
        margin-bottom: 6px;
        font: 700 14px/1.2 'Helvetica';
        letter-spacing: -0.02em;
    }

    &__text {
        font: 400 14px/1.4 'Helvetica';
        letter-spacing: -0.02em;
        color: rgba($color: #000000, $alpha: .6);
    }

    &__img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: var(--background-color-50);
    }

    &__icon {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 8px;
        border-radius: 50%;
    }

    .reactions-list {
        display: flex;
        flex-wrap: wrap;
        flex: 1 0 100%;

        &__item {
            padding: 4px 10px;
            margin-right: 5px;
            font-size: 14px;
            border-radius: 14px;
            color: #417FC6;
            background-color: #ecf2f9;
        }
    }

    @media (max-width: 767px) {
        padding: 16px;
        background-color: rgba($color: #FFFFFF, $alpha: .1);

        &__left-column {
            flex: 0 0 48px;
        }

        &__title {
            margin-right: 39px;
        }

        &__icon {
            right: 8px;
        }

        .reactions-list {
            margin-top: 12px;
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        padding: 20px;
        background-color: var(--background-color-0);

        &__left-column {
            flex: 0 0 52px;
        }

        &__title {
            margin-right: 56px;
        }

        &__icon {
            right: 12px;
        }

        .reactions-list {
            margin-top: 16px;
            margin-left: 52px;
        }
    }

    @media (min-width: 1440px) {
        padding: 20px;

        &__left-column {
            flex: 0 0 52px;
        }

        &__title {
            margin-right: 56px;
        }

        &__icon {
            right: 12px;
        }

        .reactions-list {
            margin-top: 16px;
            margin-left: 52px;
        }
    }
}
</style>
