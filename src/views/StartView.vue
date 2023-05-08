<script setup>
import { ref, onMounted }  from 'vue'
import { onBeforeRouteLeave } from "vue-router";

import HeaderItem from '@/components/Base/HeaderItem.vue'

const showHeader = ref(true)
const childComponent = ref();

onMounted(() => {
  childComponent.value.setSearchInputFocus();
});

onBeforeRouteLeave((to, from, next) => {
    if (to.name === 'search') {
        showHeader.value = false;
        setTimeout(() => {
            next()
        // Timer counter equals movingHeaderCenterToTop animation
        // duratin minus 50ms
        }, 650)
    } else {
        next();
    }
})
</script>

<template>
    <div class="loader-view">
        <Transition name="header">
            <HeaderItem v-if="showHeader" ref="childComponent" />
        </Transition>

        <p class="loader-view__info-text">
            Все данные защищенны.<br>
            Мы испольщуем ключи ширфования,<br>
            чтобы ваши данные оставались анонимными.
        </p>
    </div>
</template>

<style lang="scss">
$logo-prefix-width: 23px;
$logo-prefix-margin: 2px;
$logo-postfix-width: 41px;
$logo-postfix-margin: 4px;
$logo-full-width: calc(
                        100vw -
                        (var(--logo-side-padding) * 2) -
                        $logo-prefix-width -
                        $logo-postfix-width -
                        $logo-prefix-margin -
                        $logo-postfix-margin
                    );
$logo-half-width: calc(($logo-full-width - 20px) / 2.5);
$logo-start-width: $logo-half-width;

@keyframes movingSearchTopToBottom {
    from {
        bottom: 40px;
        opacity: 0;
    }

    50% {
        opacity: .35;
    }

    to {
        opacity: 1;
        bottom: 9px;
    }
}

@keyframes logoHalfWidthStretch {
    from {
        width: 40px;
    }

    70% {
        width: calc($logo-half-width + 15px);
    }

    to {
        width: $logo-half-width;
    }
}

@keyframes logoFullWidthStretch {
    from {
        width: $logo-start-width;
    }

    70% {
        width: calc($logo-full-width + 15px);
    }

    to {
        width: $logo-full-width;
    }
}

@keyframes movingHeaderCenterToTop {
    from {
        top: 50%;
        transform: translateY(-50%);
    }

    to {
        top: 0;
        transform: translateY(0);
    }
}

.loader-view {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &__info-text {
        width: 240px;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        font: 400 10px/1 'Roboto Mono';
        letter-spacing: -0.03em;
        text-align: center;
        color: rgba($color: #000000, $alpha: .3);
    }

    .header {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        padding: 0;
        height: 0;

        .search-box {
            opacity: 0;
        }
    }

    .header-leave-active {
        animation: .7s movingHeaderCenterToTop forwards;
    }

    .search-overlay-box {
        display: none;
    }

    @media (max-width: 767px) {
        $logo-start-width: 20px;
        --logo-side-padding: 20px;

        .header {
            transform: translateY(calc(-50% - 9vh));

            .search-box {
                animation: .85s movingSearchTopToBottom 1.1s forwards;
            }

            .header-animated-logo__stretch-line {
                animation: 0.9s logoFullWidthStretch forwards;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        $logo-start-width: 60px;
        --logo-side-padding: 60px;

        .header {
            transform: translateY(calc(-50% - 4.5vh));

            .search-box {
                animation: .85s movingSearchTopToBottom 1.1s forwards;
            }

            .header-animated-logo__stretch-line {
                animation: 0.9s logoFullWidthStretch forwards;
            }
        }
    }

    @media (min-width: 1440px) {
        --logo-side-padding: 60px;

        .header {
            .search-box {
                animation: .85s movingSearchTopToBottom 2.4s forwards;
            }

            .header-animated-logo__stretch-line {
                animation: logoHalfWidthStretch, logoFullWidthStretch;
                animation-duration: .7s, .85s;
                animation-delay: 0s, 1.7s;
                animation-fill-mode: forwards, forwards;
            }
        }
    }
}

</style>
