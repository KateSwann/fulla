<script setup>
import { ref, computed, onBeforeMount, onMounted, onUpdated }  from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useResultStore } from '@/stores/result';
import { useGrid } from 'vue-screen'

import ResultItemBigScreenCard from '@/components/ResultItem/ResultItemBigScreenCard.vue'
import ResultItemSmallScreenCard from '@/components/ResultItem/ResultItemSmallScreenCard.vue'

const route = useRoute()
const { query, resultsTotalCount, modifyResults } = storeToRefs(useResultStore())
const { fetchPostsSearchResults } = useResultStore()

const grid = useGrid({
    sm: 0,
    md: 768,
    lg: 1440,
    isMobile: grid => grid.sm && !grid.md,
    isTablet: grid => grid.md && !grid.lg,
    isMobileAndTablet: grid => grid.sm && !grid.lg,
    isDesktop: grid => grid.lg,
})

let isAnyResultItemActive = ref(false);
let showSearchContent = ref(false)

onBeforeMount(() => {
    fetchPostsSearchResults(route.query.q);
});

onMounted(() => {
    showSearchContent.value = true;
    fetchPostsSearchResults(route.query.q);
});

onUpdated(() => {
    fetchPostsSearchResults(route.query.q);
});

function closeAllResultItems() {
    modifyResults.value.map(i => i.isActive = false);
    isAnyResultItemActive.value = false;
}

function toggleResultItemOpen(item) {
    closeAllResultItems();
    item.isActive = !item.isActive;
    item.isActive ? isAnyResultItemActive.value = true : isAnyResultItemActive.value = false;
}

const nounCounterDeclension = computed(() => {
    const n = resultsTotalCount.value;
    return `результа${
        (n%100<11 || n%100>19) ?
            ((n%10!=1) ?
                ((n%10>1 && n%10<5) ? 'та':'тов')
            :'т')
        :'тов'
    }`;
});
</script>

<template>
    <Transition name="search-content">
        <main class="search-view" v-if="showSearchContent"
            v-show="modifyResults">
            <template v-if="modifyResults.length">
                <section class="search-results-counter-block">
                    Fulla /
                    <span class="search-results-counter-block__highlighted-text">
                        {{ resultsTotalCount }} {{ nounCounterDeclension }} поиска
                    </span>
                </section>

                <!-- START Содержание контента - mobile -->
                <section class="search-view__content"
                     v-show="grid.isMobileAndTablet">
                    <TransitionGroup name="search-results-list" tag="ul">
                        <template v-if="query">
                            <template v-for="(resultItem, index) in modifyResults"
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
                            <template v-if="query">
                                <template v-for="(resultItem, index) in modifyResults"
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
                <div v-for="result in modifyResults" :key="result.id">
                    {{ result.id }} | {{ result.title }}
                </div>
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
            margin-bottom: 43px;
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
