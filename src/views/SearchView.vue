<script setup>
import { useScreen, useGrid } from 'vue-screen'

import ResultItemBigScreenCard from '@/components/ResultItemBigScreenCard.vue'
import ResultItemSmallScreenCard from '@/components/ResultItemSmallScreenCard.vue'

const screen = useScreen({})
const grid = useGrid({
    sm: 0,
    md: 768,
    lg: 1440,
    isMobile: grid => grid.sm && !grid.md,
    isTablet: grid => grid.md && !grid.lg,
    isDesktop: grid => grid.lg,
})
</script>

<template>
    <main class="search-view">
        <!-- START Содержание контента - mobile -->
        <div class="search-view__content"
             v-show="grid.isMobile">
            <ResultItemSmallScreenCard
                v-for="index in 10"
                :key="index">
            </ResultItemSmallScreenCard>
        </div>
        <!-- END Содержание контента - mobile -->

        <!-- START Содержание контента - tablet -->
        <div class="search-view__content"
             v-show="grid.isTablet">
            <ResultItemSmallScreenCard
                v-for="index in 10"
                :key="index">
            </ResultItemSmallScreenCard>
        </div>
        <!-- END Содержание контента - tablet -->

        <!-- START Содержание контента - desktop -->
        <div class="search-view__content"
             v-show="grid.isDesktop">
            <div class="search-view__left-column">
                <ResultItemBigScreenCard
                    v-for="index in 10"
                    :key="index">
                </ResultItemBigScreenCard>
            </div>

            <div class="search-view__right-column">
                RR
            </div>
        </div>
        <!-- END Содержание контента - desktop -->

        <div>
            <p>Screen width is {{ screen.width }}</p>
            <p>Screen height is {{ screen.height }}</p>
            <p>Current breakpoint is {{ grid.breakpoint }}</p>
        </div>
    </main>
</template>

<style lang="scss">
.search-view {
    &__content {}

    @media (max-width: 767px) {
        &__content {}
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        &__content {
            max-width: 728px;
            padding: 20px;
            margin: 0 auto;
        }
    }

    @media (min-width: 1440px) {
        $header-hight: 108px;

        &__header-wrapper {
            height: $header-hight;
        }

        &__content {
            max-width: 1320px;
            margin: 0 auto;
            padding-top: $header-hight;
            display: flex;
        }

        &__left-column {
            flex: 1;
            max-width: calc(50% - 60px);
            background-color: gold;

            &:hover {
                box-shadow: inset -1px 0px 0px 0px rgba(217,217,217,0.6);

                &+.search-view__right-column {
                    background: var(--background-color-0);
                }
            }
        }

        &__right-column {
            flex: 1;
            background: linear-gradient(90deg, rgba(255,255,255,1) 60px, rgba(217,217,217,1) 60px);
        }

        .result-item-card {
            &:hover {
                box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.1);
            }
        }
    }
}
</style>
