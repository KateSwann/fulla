<template>
    <header class="header"></header>
</template>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: black;
    z-index: 100;

    @media (max-width: 767px) {
        height: 90px;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        height: 140px;
    }

    @media (min-width: 1440px) {
        height: 108px;
    }
}
</style>
