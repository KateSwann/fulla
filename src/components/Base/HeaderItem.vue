<script setup>
import { ref, nextTick, onMounted }  from 'vue'
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
const searchMainInput = ref(null)
const searchOverlayInput = ref(null)
let isSearchOverlayOpen = ref(false);
let isSearchDropdownOpen = ref(false);
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
    isSearchDropdownOpen.value = await false;
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

const updateDropdownList = () => {
    searchQuery.value ? isSearchDropdownOpen.value = true : isSearchDropdownOpen.value = false;
}

function clearSearchField() {
    searchQuery.value = "";
    isSearchDropdownOpen.value = false;
    router.push({ name: 'start' });
}

function toggleSearchOverlay() {
    isSearchOverlayOpen.value = !isSearchOverlayOpen.value;

    if(!isSearchOverlayOpen.value) {
        nextTick(() => {
            searchMainInput.value.focus();
        });
    }
}

function openSearchOverlay() {
    isSearchOverlayOpen.value = true;

    nextTick(() => {
        searchOverlayInput.value.focus();
    });
}

function openSearchDropdown() {
    isSearchDropdownOpen.value = true;
}

function closeSearchDropdown() {
    if (isSearchDropdownOpen.value) {
        isSearchDropdownOpen.value = false;
    }
}

function clearSearchSuggestion(id) {
    const saggestionItem = searchSuggestionsListTestData.value.find(el => el.id === id);
    saggestionItem.isVisible = false;
}

function setSearchInputFocus() {
    nextTick(() => {
        searchMainInput.value.focus();
    })
}

defineExpose({
    setSearchInputFocus,
})
</script>

<template>
    <header class="header">
        <div class="header-animated-logo">
            <RouterLink :to="{ name: 'start' }"
                        class="header-animated-logo__prefix"></RouterLink>
            <div v-click-outside="closeSearchDropdown"
                 class="header-animated-logo__stretch-line">
                <div class="header-animated-logo__search-box
                            search-box
                            search-box--animated">
                    <input
                        @keyup.enter="setUrlQueryParams"
                        @keyup="openSearchOverlay(), updateDropdownList()"
                        v-model.trim="searchQuery"
                        ref="searchMainInput"
                        class="search-box__input"
                        :class="{ 'search-box__input--empty': !searchQuery }"
                        type="search"
                        name="q"
                        autocomplete="off"
                        placeholder="Поиск..."
                        @click="openSearchOverlay(), openSearchDropdown()"
                    />

                    <span class="search-box__button-clear"
                          @click="clearSearchField">
                        <IconCross />
                    </span>
                </div>

                <!-- START search dropdown box -->
                <section class="search-dropdown-box"
                         v-show="isSearchDropdownOpen">
                    <div class="search-dropdown-box__content">
                        <div class="search-dropdown-results-list">
                            <template v-for="(suggestion, index) in searchSuggestionsListTestData"
                                    :key="index">
                                <RouterLink :to="{
                                                    name: 'article',
                                                    params: { resultItemId: 1 },
                                                }"
                                            class="search-dropdown-results-list-item">
                                    <span class="search-dropdown-results-list-item__text">
                                        {{ suggestion.title }}
                                    </span>

                                    <span class="search-dropdown-results-list-item__total">
                                        1345
                                    </span>
                                </RouterLink>
                            </template>

                            <RouterLink :to="{
                                                name: 'search',
                                                query: { q: searchQuery }
                                            }"
                                        class="search-dropdown-results-list__item
                                               search-dropdown-results-list-item">
                                <span class="search-dropdown-results-list-item__text">
                                    Смотреть все 3204 результатов для &#171;{{searchQuery}}&#187;
                                </span>

                                <span class="search-dropdown-results-list-item__icon-enter">
                                    Enter
                                </span>
                            </RouterLink>
                        </div>
                    </div>
                </section>
                <!-- END search dropdown box -->
            </div>
            <div class="header-animated-logo__postfix"></div>
        </div>

        <!-- START search overlay box -->
        <section class="search-overlay-box"
                 v-show="isSearchOverlayOpen">
            <div class="search-overlay-box__content">
                <div class="search-overlay-box__search-box
                            search-box">
                    <input
                        @keyup.enter="setUrlQueryParams"
                        v-model.trim="searchQuery"
                        ref="searchOverlayInput"
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
                 @click="toggleSearchOverlay(), closeSearchDropdown()">
                <IconCross />
            </div>
        </section>
        <!-- END search overlay box -->
    </header>
</template>

<style lang="scss">
.header {
    $logo-prefix-width: 23px;
    $logo-prefix-margin: 2px;
    $logo-postfix-width: 41px;
    $logo-postfix-margin: 4px;
    $logo-side-padding-big: 60px;
    $logo-side-padding-small: 20px;

    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--background-color-0);
    z-index: 100;

    .header-animated-logo {
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
            margin: 0 $logo-postfix-margin 0 $logo-prefix-margin;
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
        height: 100vh;
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

    .search-dropdown-box {
        max-height: calc(50vh - 50px);
        width: 100%;
        position: absolute;
        top: calc(100% + 6px);
        overflow-y: auto;
        border-top: 6px solid transparent;
        background-color: var(--background-color-100);
    }

    .search-dropdown-results-list-item {
        $item-border-margin-left: 12px;
        $item-border-margin-right: 20px;

        display: flex;
        align-items: center;
        padding: 16px 0 18px;
        position: relative;

        &:not(:last-child) {
            &::after {
                content: "";
                top: calc(100% - 1px);
                left: $item-border-margin-left;
                width: calc(100% - $item-border-margin-left - $item-border-margin-right);
                height: 1px;
                position: absolute;
                background-color: rgba($color: #000000, $alpha: .1);
            }
        }

        &:last-child {
            .search-dropdown-results-list-item__text {
                color: rgba($color: #000000, $alpha: .4);
            }
        }

        &:hover {
            background-color: #E6E6E6;

            &::after {
                content: none;
            }

            &::before {
                content: "";
                bottom: calc(100% - 1px);
                position: absolute;
                width: 100%;
                height: 1px;
                background-color: #E6E6E6;
            }
        }

        &__text {
            margin-left: 20px;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font: 400 14px/1.4 'Helvetica';
            letter-spacing: -0.02em;
            color: rgba($color: #000000, $alpha: .6);
        }

        &__total {
            margin-right: 20px;
            white-space: nowrap;
            font: 400 10px/1.4 'Helvetica Neue';
            color: rgba($color: #000000, $alpha: .4);
        }

        &__icon-enter {
            width: 52px;
            height: 24px;
            margin-right: 20px;
            padding: 0 6px;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: end;

            font: 400 10px/1.4 'Helvetica Neue';
            color: rgba($color: #000000, $alpha: .4);
            background-color: var(--background-color-0);
            background-image: url("data:image/svg+xml,%3Csvg width='11' height='9' viewBox='0 0 11 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.4999 0.5H9.49995V5H2.70697L4.60347 3.1035L3.89647 2.3965L0.792969 5.5L3.89647 8.6035L4.60347 7.8965L2.70697 6H10.4999V0.5Z' fill='%23999999'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-position: 7px 8.5px;
        }
    }

    @media (max-width: 767px) {
        --logo-side-padding: 20px;

        height: 111px;
        padding-top: 60px;

        .search-box {
            &__button-clear {
                margin: 0 4.8px 0 3px
            }
        }

        .search-dropdown-box {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        --logo-side-padding: 60px;

        height: 111px;
        padding-top: 60px;

        .search-box {
            &__button-clear {
                margin: 0 10.8px 0 7px;
            }
        }

        .search-overlay-box {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        --logo-side-padding: 60px;

        height: 79px;
        padding-top: 28px;

        .header-animated-logo {
            $logo-prefix-margin: 13px;
            $logo-postfix-margin: 14px;
            $logo-full-width: calc(
                                    100vw -
                                    (var(--logo-side-padding) * 2) -
                                    $logo-prefix-width -
                                    $logo-postfix-width -
                                    $logo-prefix-margin -
                                    $logo-postfix-margin
                                );
            &__stretch-line {
                width: $logo-full-width;
                margin: 0 $logo-postfix-margin 0 $logo-prefix-margin;
            }
        }

        .search-box {
            &__button-clear {
                margin: 0 10.8px 0 8px;
            }
        }

        .search-overlay-box {
            display: none;
        }
    }
}
</style>
