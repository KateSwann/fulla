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
}

ul {
    list-style: none;
    padding: 0;
}

a {
    text-decoration: none;
}
</style>
