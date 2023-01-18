<template>
    <article class="result-item-card">
        <div class="result-item-card__side-content">
            <span class="result-item-card__date">14 Апр 2022,</span>
            <span class="result-item-card__time">14:12</span>
        </div>

        <div class="result-item-card__main-content">
            <RouterLink :to="{ name: 'article'}"
                        class="result-item-card__title-link">
                <h2 class="result-item-card__title">
                    В какой стране можно открыть счёт в банке и что для этого нужно
                </h2>
            </RouterLink>

            <span class="result-item-card__text">
                Грузинские банки не открывают счета иностранцам, в том числе россиянам, удаленно. Единственное, что можно сделать, это подать с помощью доверенного представителя документы на открытие счета в Грузии, а также заполнить анкету KYC. Однако в случае одобрения, чтобы завершить процедуру, понадобиться личное присутствие заявителя в отделении банка в Грузии.
            </span>
        </div>
    </article>
</template>

<style lang="scss">
.result-item-card {
    color: var(--text-color-regular);

    &:hover {
        background-color: var(--background-color-50);
    }

    .result-item-card__date {}

    .result-item-card__side-content {
        font: 400 10px/1.4 'Helvetica Neue';
        opacity: .4;
    }

    .result-item-card__main-content {}

    .result-item-card__title-link {
        display: block;
        margin-bottom: 4px;
    }

    .result-item-card__title {
        font: 700 20px/1.12 'Helvetica';
        letter-spacing: -0.05em;
        color: var(--text-color-regular);
    }

    .result-item-card__text {
        font: 400 12px/1.4 'Roboto Mono';
        letter-spacing: -0.03em;
        opacity: .6;
    }

    @media (max-width: 767px) {
        padding: 12px 20px;

        .result-item-card__date {}

        .result-item-card__side-content {
            margin-bottom: 4px;
        }

        .result-item-card__main-content {}

        .result-item-card__title-link {}

        .result-item-card__title {}

        .result-item-card__text {}
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        display: flex;
        flex-wrap: nowrap;
        padding: 20px 40px;
        border-radius: 16px;

        .result-item-card__date {}

        .result-item-card__side-content {
            flex: 0 0 100px;
            padding-right: 35px;
            display: flex;
            flex-direction: column;
        }

        .result-item-card__main-content {}

        .result-item-card__title-link {}

        .result-item-card__title {}

        .result-item-card__text {}
    }

    @media (min-width: 1440px) {
        display: flex;
        flex-wrap: nowrap;
        padding: 20px 64px 20px 36px;

        .result-item-card__date {}

        .result-item-card__side-content {
            flex: 0 0 100px;
            padding-right: 35px;
            display: flex;
            flex-direction: column;
        }

        .result-item-card__main-content {}

        .result-item-card__title-link {}

        .result-item-card__title {}

        .result-item-card__text {}
    }
}
</style>
