<script setup>
import { ref, onMounted }  from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import { useGrid } from 'vue-screen'

import IconCross from '@/components/Icons/Controls/IconCross.vue'

const router = useRouter()
const route = useRoute()

const grid = useGrid({
    sm: 0,
    md: 768,
    lg: 1440,
    isMobile: grid => grid.sm && !grid.md,
    isTablet: grid => grid.md && !grid.lg,
    isDesktop: grid => grid.lg,
})

const searchQuery = ref("");
let isSearchOverlayOpen = ref(false);
let searchSuggestionsListTestData = ref([
    {
        id: 1,
        title: 'yandex practicum кому сейчас принадлежит',
        isVisible: true,
    },
    {
        id: 2,
        title: 'Куда проще всего переехать без оформления визы',
        isVisible: true,
    },
    {
        id: 3,
        title: 'гриша коченов',
        isVisible: true,
    },
    {
        id: 4,
        title: 'оформление ИП в Грузии через дом юстиций',
        isVisible: true,
    },
    {
        id: 5,
        title: 'yandex practicum кому сейчас принадлежит',
        isVisible: true,
    },
    {
        id: 6,
        title: 'Куда проще всего переехать без оформления визы',
        isVisible: true,
    },
    {
        id: 7,
        title: 'гриша коченов',
        isVisible: true,
    },
    {
        id: 8,
        title: 'оформление ИП в Грузии через дом юстиций',
        isVisible: true,
    },
])

onBeforeRouteUpdate(async () => {
    isSearchOverlayOpen.value = await false;
})

onMounted(() => {
    getUrlQueryParams()
});

const getUrlQueryParams = async () => {
  await router.isReady();
  searchQuery.value = route.query.q;
}

const setUrlQueryParams = () => {
    router.push({ name: 'search', query: { q: searchQuery.value } });
}

function clearSearchField() {
    searchQuery.value = "";
    router.push({ name: 'start' });
}

function toggleSearchOverlay() {
    isSearchOverlayOpen.value = !isSearchOverlayOpen.value;
}

function clearSearchSuggestion(id) {
    const saggestionItem = searchSuggestionsListTestData.value.find(el => el.id === id);
    saggestionItem.isVisible = false;
}
</script>

<template>
    <header class="header">
        <div class="header-animated-logo"
             @click="toggleHeaderIconSize">
            <RouterLink :to="{ name: 'start' }"
                        class="header-animated-logo__prefix"></RouterLink>
            <div class="header-animated-logo__stretch-line">
                <div class="header-animated-logo__search-box
                            search-box">
                    <input
                        @keyup.enter="setUrlQueryParams"
                        v-model.trim="searchQuery"
                        class="search-box__input"
                        :class="{ 'search-box__input--empty': !searchQuery }"
                        type="search"
                        name="q"
                        autocomplete="off"
                        placeholder="Поиск..."
                        @click="grid.isMobile ? toggleSearchOverlay() : null"
                    />

                    <span class="search-box__button-clear"
                          @click="clearSearchField">
                        <IconCross />
                    </span>
                </div>
            </div>
            <div class="header-animated-logo__postfix"></div>
        </div>

        <section class="search-overlay-box"
             v-show="isSearchOverlayOpen">
            <div class="search-overlay-box__content">
                <div class="search-overlay-box__search-box
                            search-box">
                    <input
                        @keyup.enter="setUrlQueryParams"
                        v-model.trim="searchQuery"
                        class="search-box__input"
                        :class="{ 'search-box__input--empty': !searchQuery }"
                        type="search"
                        name="q"
                        autocomplete="off"
                        placeholder="Поиск..."
                    />

                    <span class="search-box__button-clear"
                          @click="clearSearchField">
                        <IconCross />
                    </span>
                </div>

                <ul class="search-overlay-box__search-suggestion-list
                           search-suggestion-list">
                    <template v-for="(suggestion, index) in searchSuggestionsListTestData"
                              :key="index">
                        <li class="search-suggestion-list__item
                                   search-suggestion-list-item"
                            v-show="suggestion.isVisible">
                            <RouterLink :to="{
                                            name: 'article',
                                            params: { resultItemId: 1 },
                                         }"
                                        class="search-suggestion-list-item__text">
                                {{ suggestion.title }}
                            </RouterLink>

                            <div class="search-suggestion-list-item__button-clear"
                                  @click="clearSearchSuggestion(suggestion.id)">
                                <IconCross />
                            </div>
                        </li>
                    </template>
                </ul>
            </div>

            <div class="search-overlay-box__button-close"
                 @click="toggleSearchOverlay">
                <IconCross />
            </div>
        </section>
    </header>
</template>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 4px solid lightsalmon;
    background-color: var(--background-color-0);
    z-index: 100;

    .header-animated-logo {
        $logo-prefix-width: 23px;
        $logo-prefix-margin: 2px;
        $logo-postfix-width: 41px;
        $logo-postfix-margin: 4px;
        $logo-side-padding-big: 60px;
        $logo-side-padding-small: 20px;
        $logo-full-width: calc(
                                100vw -
                                (var(--logo-side-padding) * 2) -
                                $logo-prefix-width -
                                $logo-postfix-width -
                                $logo-prefix-margin -
                                $logo-postfix-margin
                            );

        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &__search-box {
            position: absolute;
            bottom: 9px;
            left: 5px;
            right: -4px;
        }

        &__prefix {
            width: $logo-prefix-width;
            height: 35px;
            background-repeat: no-repeat;
            background-image: url("data:image/svg+xml,%3Csvg width='23' height='35' viewBox='0 0 23 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 35V0H23V6.10107H7.3444V14.4409H21.4735V20.542H7.3444V35H0Z' fill='black'/%3E%3C/svg%3E%0A");
        }

        &__postfix {
            width: $logo-postfix-width;
            height: 35px;
            background-repeat: no-repeat;
            background-image: url("data:image/svg+xml,%3Csvg width='42' height='35' viewBox='0 0 42 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.26898 0V34.5113H0.95166V0H8.26898Z' fill='black'/%3E%3Cpath d='M17.5783 0V34.5113H10.261V0H17.5783Z' fill='black'/%3E%3Cpath d='M27.0937 35C25.4104 35 23.9103 34.7135 22.5934 34.1406C21.2765 33.5564 20.2345 32.697 19.4672 31.5624C18.7114 30.4165 18.3336 28.9897 18.3336 27.2821C18.3336 25.8442 18.6027 24.6365 19.1409 23.6591C19.6791 22.6818 20.4119 21.8954 21.3395 21.3C22.267 20.7045 23.3206 20.2552 24.5 19.9519C25.691 19.6485 26.9391 19.4351 28.2446 19.3115C29.779 19.1542 31.0158 19.0082 31.9548 18.8734C32.8938 18.7273 33.5751 18.5139 33.9988 18.233C34.4225 17.9522 34.6343 17.5365 34.6343 16.986V16.8849C34.6343 15.8177 34.2908 14.992 33.6037 14.4078C32.9281 13.8236 31.9662 13.5315 30.718 13.5315C29.4011 13.5315 28.3534 13.818 27.5747 14.3909C26.796 14.9527 26.2807 15.6604 26.0288 16.5142L19.2611 15.975C19.6046 14.4022 20.2803 13.0429 21.288 11.897C22.2957 10.7399 23.5954 9.85235 25.1871 9.23447C26.7903 8.60536 28.6454 8.29081 30.7524 8.29081C32.2181 8.29081 33.6209 8.45932 34.9607 8.79634C36.3119 9.13337 37.5086 9.65576 38.5507 10.3635C39.6042 11.0713 40.4344 11.9812 41.0413 13.0934C41.6482 14.1944 41.9517 15.5144 41.9517 17.0534V34.5113H35.0122V30.922H34.8061C34.3824 31.7309 33.8156 32.4442 33.1056 33.0621C32.3956 33.6688 31.5425 34.1462 30.5463 34.4945C29.55 34.8315 28.3992 35 27.0937 35ZM29.1893 30.0457C30.2657 30.0457 31.2162 29.8379 32.0406 29.4222C32.8651 28.9953 33.5121 28.4224 33.9816 27.7034C34.4511 26.9844 34.6859 26.17 34.6859 25.26V22.5132C34.4568 22.6593 34.1419 22.7941 33.7411 22.9177C33.3518 23.03 32.9109 23.1367 32.4185 23.2378C31.9261 23.3277 31.4337 23.412 30.9413 23.4906C30.4489 23.558 30.0023 23.6198 29.6015 23.676C28.7427 23.7996 27.9926 23.9962 27.3514 24.2658C26.7101 24.5354 26.212 24.9005 25.857 25.3611C25.502 25.8105 25.3245 26.3722 25.3245 27.0462C25.3245 28.0236 25.6852 28.7707 26.4067 29.2874C27.1395 29.793 28.0671 30.0457 29.1893 30.0457Z' fill='black'/%3E%3C/svg%3E%0A");
            background-position-x: -1px;
        }

        &__stretch-line {
            width: $logo-full-width;
            margin: 0 4px 0 2px;
            height: 11.21px;
            border-bottom: 4.8px solid var(--text-color-regular);
            position: relative;
            transform-origin: center;

            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 4.5px;
                height: 12px;
                background-image: url("data:image/svg+xml,%3Csvg width='5' height='12' viewBox='0 0 5 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.000133514L0 11.2075H4.51704L4.51704 0.000133514H0Z' fill='black'/%3E%3C/svg%3E%0A");
            }

            &::before {
                left: 0;
            }

            &::after {
                right: 0;
            }
        }
    }

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

    .search-box {
        height: 48px;
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
        font: 400 14px/1.4 'Helvetica';
        letter-spacing: -0.02em;

        &__input {
            flex: 1;
            height: 20px;
            min-width: 20px;
            padding: 0;
            -webkit-mask-image: linear-gradient(90deg, #000 10%, #000 calc(100% - 240px),  transparent);
            mask-image: linear-gradient(90deg, #000 10%, #000 calc(100% - 240px),  transparent);

            &:focus {
                -webkit-mask-image: none;
                mask-image: none;
                margin-right: 10px;
            }

            &--empty {
                margin-left: 9px;
                box-shadow: inset 1px 0 0 0 black;

                & + .search-box__button-clear {
                    display: none;
                }
            }
        }

        &__button-clear {
            cursor: pointer;
        }
    }

    .search-overlay-box {
        padding: 40px 0 20px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--background-color-0);
        overflow: hidden;

        &__content {
            display: flex;
            flex-direction: column;
            height: 100%;
            overflow: hidden;
        }

        &__button-close {
            position: absolute;
            right: 25px;
            top: 25px;
            cursor: pointer;
        }

        &__search-box {
            padding: 10px 0 13px;
            margin: 0 20px 28px;
            flex: 0;
            border-bottom: 1px solid rgba($color: #000000, $alpha: .1);

            .search-box__input--empty {
                margin-left: 0;
            }
        }

        &__search-suggestion-list {
            flex: 1;
            overflow-y: auto;
        }
    }

    .search-suggestion-list {
        padding: 0 20px;
        display: flex;
        flex-direction: column;

        &__item {
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }

    .search-suggestion-list-item {
        display: flex;
        align-items: center;

        &::before {
            content: "";
            width: 16px;
            height: 16px;
            margin: 0 26px 0 20px;
            opacity: .1;
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11.44 10.56L7.2 8.24V4H8.4V7.52L12 9.52L11.44 10.56V10.56Z' fill='black'/%3E%3C/svg%3E%0A");
        }

        &__text {
            flex: 1;
            font: 700 14px/1.4 'Helvetica';
            letter-spacing: -0.02em;
            color: var(--text-color-regular);
        }

        &__button-clear {
            margin-left: 18px;
            padding: 5px;
            cursor: pointer;
        }
    }

    @media (max-width: 767px) {
        --logo-side-padding: 20px;

        height: 90px;

        .search-box {
            &__input {
                &--empty {
                }
            }

            &__button-clear {
                margin: 0 4.8px 0 3px
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        --logo-side-padding: 60px;

        height: 140px;

        .search-box {
            &__input {
                &--empty {
                }
            }

            &__button-clear {
                margin: 0 10.8px 0 7px;
            }
        }
    }

    @media (min-width: 1440px) {
        --logo-side-padding: 60px;

        height: 108px;

        .search-box {
            &__button-clear {
                margin: 0 10.8px 0 8px;
            }
        }
    }
}
</style>
