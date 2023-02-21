<script setup>
import { ref, computed, onBeforeMount, onMounted, onUpdated }  from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGrid } from 'vue-screen'

import ResultItemBigScreenCard from '@/components/ResultItemBigScreenCard.vue'
import ResultItemSmallScreenCard from '@/components/ResultItemSmallScreenCard.vue'

const router = useRouter()
const route = useRoute()

const grid = useGrid({
    sm: 0,
    md: 768,
    lg: 1440,
    isMobile: grid => grid.sm && !grid.md,
    isTablet: grid => grid.md && !grid.lg,
    isMobileAndTablet: grid => grid.sm && !grid.lg,
    isDesktop: grid => grid.lg,
})

const testSearchResultsListData = [
    {
        id: 1,
        title: 'Открыть карту иностранного банка',
        text: ' Открытие счетов в странах СНГ Наибольшей популярностью среди россиян пользуются казахстанские, грузинские, азербайджанские и узбекистанские банки. В Армению обращаются реже из-за ряда ограничений по отношению к резидентам РФ, но открыть счет здесь по-прежнему реально. В банках Грузии, Казахстана, Армении и Узбекистана действует система KYC. Она предполагает строгие проверки россиян, из-за которых сроки одобрения заявки нередко затягиваются на длительный период времени. Помимо этого, финансовые организации оставляют за собой право отказать в обслуживании, не объясняя причину. Впрочем, на данный момент подобное происходит достаточно редко.',
        date: '14 Апр 2022',
        time: '18:48',
    },
    {
        id: 2,
        title: 'Как открыть банковскую карту в Беларуси',
        text: 'Открыть карту в Беларуси просто — достаточно предъявить внутренний российский паспорт. Комиссия за оформление карты в Беларуси для иностранцев составляет порядка 7017—7719 Р. Мы с женой оформили счет и получили карту за два дня. Перед тем как планировать поездку, я рекомендую проверить тарифы и условия для иностранцев на сайте белорусского банка, который вас интересует. Правила и сроки могут поменяться.',
        date: '15 Апр 2022',
        time: '16:48',
    },
    {
        id: 3,
        title: 'В какой стране можно открыть счёт в банке и что для этого нужно',
        text: 'ЕС панирует ввести цифровые шенгенские визы к 2026 году Парламент Евросоюза 31 января одобрил предложение о цифровизации процедуры получения шенгенской визы: документы от туристов планируется принимать онлайн, а стикеры заменить на цифровые сведения. Заявления на получение визы будут обрабатываться на единой онлайн-платформе. «Мы хотим предоставить современное, удобное и простое цифровое решение для подачи заявлений на получение визы в ЕС.',
        date: '15 Апр 2022',
        time: '16:48',
    },
    {
        id: 4,
        title: 'Банковский счет в Грузии',
        text: 'Открыть счет в грузинском банке можно удаленно – не нужно ехать в Грузию, чтобы посетить банк лично. Все, что вам нужно, это доверенность от местного нотариуса, отправленная нам по почте вместе с копией вашего паспорта, также нотариально заверенной. У грузинских банков даже отсутствует требование минимального начального депозита на счет. Резиденты всех стран (кроме тех, которые находятся под санкциями) могут открыть личный банковский счет в Грузии.',
        date: '16 Апр 2022',
        time: '09:04',
    },
    {
        id: 5,
        title: 'Как турецкие банки открывают счета россиянам',
        text: 'Как и в других странах мира, российские Visa и Mastercard в Турции не принимаются. Расплачиваться можно Visa и Mastercard, выпущенными не в России, а также российскими карточками Мир и UnionPay. Это ведущие банковские учреждения страны. Halkbank присоединился к системе недавно, в июле 2022 года, и теперь россияне могут пользоваться примерно половиной банкоматов в Турции. Большинство кассовых терминалов в турецких магазинах также работают через партнёров системы Мир.',
        date: '2 Фев 2022',
        time: '09:04',
    },
    {
        id: 6,
        title: 'Перевод рублей в зарубежный банк через криптовалюту',
        text: 'Россияне по-прежнему могут переводить средства в страну из-за рубежа: Центробанк уточнил, что ограничений на прием платежей нет. Однако трудности могут быть связаны с санкциями и контрсанкциями России, а также мерами ЦБ по стабилизации валютного курса. «РБК Инвестиции  » разбирались, как перевести деньги в Россию.',
        date: '28 Янв 2022',
        time: '16:21',
    },
    {
        id: 7,
        title: 'Открыть карту иностранного банка',
        text: ' Открытие счетов в странах СНГ Наибольшей популярностью среди россиян пользуются казахстанские, грузинские, азербайджанские и узбекистанские банки. В Армению обращаются реже из-за ряда ограничений по отношению к резидентам РФ, но открыть счет здесь по-прежнему реально. В банках Грузии, Казахстана, Армении и Узбекистана действует система KYC. Она предполагает строгие проверки россиян, из-за которых сроки одобрения заявки нередко затягиваются на длительный период времени. Помимо этого, финансовые организации оставляют за собой право отказать в обслуживании, не объясняя причину. Впрочем, на данный момент подобное происходит достаточно редко.',
        date: '14 Апр 2022',
        time: '18:48',
    },
    {
        id: 8,
        title: 'Как открыть банковскую карту в Беларуси',
        text: 'Открыть карту в Беларуси просто — достаточно предъявить внутренний российский паспорт. Комиссия за оформление карты в Беларуси для иностранцев составляет порядка 7017—7719 Р. Мы с женой оформили счет и получили карту за два дня. Перед тем как планировать поездку, я рекомендую проверить тарифы и условия для иностранцев на сайте белорусского банка, который вас интересует. Правила и сроки могут поменяться.',
        date: '15 Апр 2022',
        time: '16:48',
    },
    {
        id: 9,
        title: 'В какой стране можно открыть счёт в банке и что для этого нужно',
        text: 'ЕС панирует ввести цифровые шенгенские визы к 2026 году Парламент Евросоюза 31 января одобрил предложение о цифровизации процедуры получения шенгенской визы: документы от туристов планируется принимать онлайн, а стикеры заменить на цифровые сведения. Заявления на получение визы будут обрабатываться на единой онлайн-платформе. «Мы хотим предоставить современное, удобное и простое цифровое решение для подачи заявлений на получение визы в ЕС.',
        date: '15 Апр 2022',
        time: '16:48',
    },
]
let modifiedSearchResultsList = ref();
let urlQueryParams = ref("");
let isAnyResultItemActive = ref(false);
let showSearchContent = ref(false)

onBeforeMount(() => {
    modifySearchResults();
});

onMounted(() => {
    getUrlQueryParams()
    showSearchContent.value = true;
});

onUpdated(() => {
    getUrlQueryParams();
});

const getUrlQueryParams = async () => {
    await router.isReady();
    urlQueryParams.value = route.query.q;
}

function modifySearchResults() {
    modifiedSearchResultsList.value = testSearchResultsListData.map(i => ({...i, isActive: false}));
}

function closeAllResultItems() {
    modifiedSearchResultsList.value.map(i => i.isActive = false);
    isAnyResultItemActive.value = false;
}

function toggleResultItemOpen(item) {
    closeAllResultItems();
    item.isActive = !item.isActive;
    item.isActive ? isAnyResultItemActive.value = true : isAnyResultItemActive.value = false;
}

const nounCounterDeclension = computed(() => {
    const n = filteredSearchResults.value.length;
    return `результа${
        (n%100<11 || n%100>19) ?
            ((n%10!=1) ?
                ((n%10>1 && n%10<5) ? 'та':'тов')
            :'т')
        :'тов'
    }`;
});

const filteredSearchResults = computed(() => {
    if (urlQueryParams.value) {
        return modifiedSearchResultsList.value.filter((resultItem) => {
            return urlQueryParams.value
                    .toLowerCase()
                    .split(" ")
                    .every((v) => resultItem.text.toLowerCase().includes(v))
        });
    } else {
        return modifiedSearchResultsList.value;
    }
});
</script>

<template>
    <Transition name="search-content">
        <main class="search-view" v-if="showSearchContent">
            <template v-if="filteredSearchResults.length">
                <section class="search-results-counter-block">
                    Fulla /
                    <span class="search-results-counter-block__highlighted-text">
                        {{ filteredSearchResults.length }} {{ nounCounterDeclension }} поиска
                    </span>
                </section>

                <!-- START Содержание контента - mobile -->
                <section class="search-view__content"
                     v-show="grid.isMobileAndTablet">
                    <TransitionGroup name="search-results-list" tag="ul">
                        <template v-if="urlQueryParams">
                            <template v-for="(resultItem, index) in filteredSearchResults"
                                    :key="index">
                                <ResultItemSmallScreenCard
                                    @click="toggleResultItemOpen(resultItem)"
                                    :class="{ 'result-item-small-card--active': resultItem.isActive }"
                                    :resultItem=resultItem
                                    @close-result-item="closeAllResultItems">
                                </ResultItemSmallScreenCard>
                            </template>
                        </template>
                    </TransitionGroup>
                </section>
                <!-- END Содержание контента - tablet -->

                <!-- START Содержание контента - desktop -->
                <section class="search-view__content"
                     v-show="grid.isDesktop">
                    <div class="search-view__left-column"
                        :class="{ 'search-view__left-column--result-item-active': isAnyResultItemActive }"
                        >
                        <TransitionGroup name="search-results-list" tag="ul">
                            <template v-if="urlQueryParams">
                                <template v-for="(resultItem, index) in filteredSearchResults"
                                        :key="index">
                                    <ResultItemBigScreenCard
                                        @click="toggleResultItemOpen(resultItem)"
                                        :class="{ 'result-item-big-card-container--active': resultItem.isActive }"
                                        :resultItem=resultItem
                                        @close-result-item="closeAllResultItems">
                                    </ResultItemBigScreenCard>
                                </template>
                            </template>
                        </TransitionGroup>
                    </div>

                    <div class="search-view__right-column"
                        :class="{ 'search-view__right-column--result-item-active': isAnyResultItemActive }"
                        ></div>
                </section>
                <!-- END Содержание контента - desktop -->
            </template>

            <p v-else class="search-view__empty-text">
                Ничего не найдено. Попробуйте еще раз.
            </p>
        </main>
    </Transition>
</template>

<style lang="scss">
.search-content-enter-active,
.search-content-leave-active {
  transition: all 0.5s ease;
}
.search-content-enter-from,
.search-content-leave-top {
  opacity: 0;
  transform: translateX(-30px);
}

.search-results-list-enter-active,
.search-results-list-leave-active {
  transition: all 0.5s ease;
}
.search-results-list-enter-from,
.search-results-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.search-view {
    &__empty-text {
        max-width: 200px;
        margin: 40px auto;
        font: 400 16px/1.4 'Roboto Mono';
        text-align: center;
        letter-spacing: -0.02em;
        color: rgba($color: #000000, $alpha: .6);
    }

    .search-results-counter-block {
        font: 400 12px/1.4 'Roboto Mono';
        letter-spacing: -0.03em;
        color: rgba($color: #000000, $alpha: .4);

        &__highlighted-text {
            color: rgba($color: #000000, $alpha: .6);
        }
    }

    @media (max-width: 767px) {
        .search-results-counter-block {
            padding: 84px 0 8px;
            margin: 0 20px 6px;
            border-bottom: 1px solid rgba($color: #000000, $alpha: .1);;
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        &__content {
            max-width: 728px;
            padding: 0 20px;
            margin: 0 auto;
        }

        .search-results-counter-block {
            margin-bottom: 44px;
            text-align: center;
        }
    }

    @media (min-width: 1440px) {
        display: flex;
        flex-flow: column;
        min-height: calc(100vh - 79px);

        &__content {
            max-width: 1320px;
            margin: 0 auto;
            display: flex;
            flex: 1;
        }

        &__left-column {
            flex: 1;
            max-width: calc(50% - 60px);

            &--result-item-active {
                box-shadow: inset -1px 0px 0px 0px rgba(217, 217, 217, .6);
            }
        }

        &__right-column {
            margin-bottom: 40px;
            flex: 1;
            background: linear-gradient(90deg,
                rgba(255, 255, 255, 1) 60px,
                rgba(217, 217, 217, .3) 60px);

            &--result-item-active {
                background: none;
            }
        }

        .search-results-counter-block {
            margin-bottom: 30px;
            text-align: center;
        }

        .result-item-card {
            &:hover {
                box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.1);
            }
        }
    }
}
</style>
