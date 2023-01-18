<script setup>
import { useScreen, useGrid } from 'vue-screen'

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
  <main>
    <div>
        <p>Screen width is {{ screen.width }}</p>
        <p>Screen height is {{ screen.height }}</p>
        <p>Current breakpoint is {{ grid.breakpoint }}</p>
    </div>

    <div v-show="grid.isMobile">
        --------isMobile--------
    </div>

    <div v-show="grid.isTablet">
        --------isTablet--------
    </div>

    <div v-show="grid.isDesktop">
        --------isDesktop--------
    </div>
  </main>
</template>
