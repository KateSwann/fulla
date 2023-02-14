<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/styles/palette.scss';

html {
    font-family: 'Helvetica';
    font-weight: 400;
    color: var(--text-color-regular);
}

*,
*::before,
*::after {
  box-sizing: border-box;
    margin: 0;
    font-weight: normal;
}

body {
    min-height: 100vh;
    background: var(--background-color-0);
    transition: color 0.5s,
                background-color 0.5s;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 767px) {
        padding-top: 90px;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        padding-top: 140px;
    }

    @media (min-width: 1440px) {
        padding-top: 108px;
    }
}

ul {
    list-style: none;
    padding: 0;
}

a {
    text-decoration: none;
}
</style>
