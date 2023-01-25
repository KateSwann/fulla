<template>
    <article class="result-item-small-card">
        <div class="result-item-small-card__side-content">
            <span class="result-item-small-card__date">14 Апр 2022,</span>
            <span class="result-item-small-card__time">14:12</span>
        </div>

        <div class="result-item-small-card__main-content">
            <RouterLink :to="{ name: 'article'}"
                        class="result-item-small-card__title-link">
                <h2 class="result-item-small-card__title">
                    В какой стране можно открыть счёт в банке и что для этого нужно
                </h2>
            </RouterLink>

            <p class="result-item-small-card__text-container">
                <span class="result-item-small-card__text">
                    Грузинские банки не открывают счета иностранцам, в том числе россиянам, удаленно. Единственное, что можно сделать, это подать с помощью доверенного представителя документы на открытие счета в Грузии, а также заполнить анкету KYC. Однако в случае одобрения, чтобы завершить процедуру, понадобиться личное присутствие заявителя в отделении банка в Грузии.
                </span>
                <span class="result-item-small-card__button-read-more">Читать подробнее</span>
            </p>
        </div>
    </article>
</template>

<style lang="scss">
.result-item-small-card {
    color: var(--text-color-regular);

    &:hover {
        background-color: var(--background-color-50);
    }

    &:hover,
    &--selected {
        .result-item-small-card__title-link {
            margin-right: 112px;
        }

        .result-item-small-card__title {
            margin-bottom: 16px;
        }

        .result-item-small-card__text {
            font: 400 16px/1.4 'Helvetica';
            letter-spacing: -0.02em;
        }

        .result-item-small-card__button-read-more {
            display: inline-block;
        }
    }

    &__side-content {
        font: 400 10px/1.4 'Helvetica Neue';
        opacity: .4;
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

    &__text-container {
        margin: 0;
        padding: 0;
    }

    &__text {
        font: 400 12px/1.4 'Roboto Mono';
        letter-spacing: -0.03em;
        opacity: .6;
    }

    &__button-read-more {
        display: none;
        font-weight: 700;
        border-bottom: 1px solid;
        cursor: pointer;
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
}
</style>
