<script setup>
import { useScreen, useGrid } from 'vue-screen'

import ResultItemCard from '@/components/ResultItemCard.vue'

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
    <main class="search-page">
        <div>
            <p>Screen width is {{ screen.width }}</p>
            <p>Screen height is {{ screen.height }}</p>
            <p>Current breakpoint is {{ grid.breakpoint }}</p>
        </div>

        <!-- START Содержание контента - mobile -->
        <div class="search-page__content"
             v-show="grid.isMobile">
            <ResultItemCard
                v-for="index in 10"
                :key="index">
            </ResultItemCard>
        </div>
        <!-- END Содержание контента - mobile -->

        <!-- START Содержание контента - tablet -->
        <div class="search-page__content"
             v-show="grid.isTablet">
            <ResultItemCard
                v-for="index in 10"
                :key="index">
            </ResultItemCard>
        </div>
        <!-- END Содержание контента - tablet -->

        <!-- START Содержание контента - desktop -->
        <div class="search-page__content"
             v-show="grid.isDesktop">
            <div class="search-page__left-column">
                <ResultItemCard
                    v-for="index in 10"
                    :key="index">
                </ResultItemCard>
            </div>

            <div class="search-page__right-column">
                RR
            </div>
        </div>
        <!-- END Содержание контента - desktop -->
    </main>
</template>

<style lang="scss">
.search-page {
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
        &__content {
            max-width: 1320px;
            margin: 0 auto;
            display: flex;
        }

        &__left-column {
            flex: 1;
            max-width: calc(50% - 60px);
            background-color: gold;
        }

        &__right-column {
            flex: 1;
            background-color: antiquewhite;
        }
    }
}
</style>
