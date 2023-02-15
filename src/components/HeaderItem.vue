<script setup>
import { ref }  from 'vue'

let isLogoBig = ref(false);

function toggleHeaderIconSize() {
    isLogoBig.value = !isLogoBig.value;
}
</script>

<template>
    <header class="header">
        <div class="header-animated-logo"
             :class="{ 'header-animated-logo--opened': isLogoBig }"
             @click="toggleHeaderIconSize">
            <div class="header-animated-logo__prefix"></div>
            <div class="header-animated-logo__stretch-line"></div>
            <div class="header-animated-logo__postfix"></div>
        </div>
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
        $logo-postfix-width: 41px;
        $logo-side-padding-big: 60px;
        $logo-side-padding-small: 20px;
        $logo-full-width: calc(
                                100vw -
                                ($logo-side-padding-big * 2) -
                                $logo-prefix-width -
                                $logo-prefix-width
                            );
        $logo-half-width: calc(($logo-full-width - 20px) / 2.5);

        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

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
                width: $logo-half-width;
            }

            70% {
                width: calc($logo-full-width + 15px);
            }

            to {
                width: $logo-full-width;
            }
        }

        &--opened {
            .header-animated-logo__stretch-line {
                animation: logoHalfWidthStretch, logoFullWidthStretch;
                animation-duration: .7s, .85s;
                animation-delay: 0s, 1.7s;
                animation-fill-mode: forwards, forwards;
            }
        }

        &__prefix {
            width: $logo-prefix-width;
            height: 35px;
            background-image: url("data:image/svg+xml,%3Csvg width='23' height='35' viewBox='0 0 23 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 35V0H23V6.10107H7.3444V14.4409H21.4735V20.542H7.3444V35H0Z' fill='black'/%3E%3C/svg%3E%0A");
        }

        &__postfix {
            width: $logo-postfix-width;
            height: 35px;
            background-image: url("data:image/svg+xml,%3Csvg width='42' height='35' viewBox='0 0 42 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.26898 0V34.5113H0.95166V0H8.26898Z' fill='black'/%3E%3Cpath d='M17.5783 0V34.5113H10.261V0H17.5783Z' fill='black'/%3E%3Cpath d='M27.0937 35C25.4104 35 23.9103 34.7135 22.5934 34.1406C21.2765 33.5564 20.2345 32.697 19.4672 31.5624C18.7114 30.4165 18.3336 28.9897 18.3336 27.2821C18.3336 25.8442 18.6027 24.6365 19.1409 23.6591C19.6791 22.6818 20.4119 21.8954 21.3395 21.3C22.267 20.7045 23.3206 20.2552 24.5 19.9519C25.691 19.6485 26.9391 19.4351 28.2446 19.3115C29.779 19.1542 31.0158 19.0082 31.9548 18.8734C32.8938 18.7273 33.5751 18.5139 33.9988 18.233C34.4225 17.9522 34.6343 17.5365 34.6343 16.986V16.8849C34.6343 15.8177 34.2908 14.992 33.6037 14.4078C32.9281 13.8236 31.9662 13.5315 30.718 13.5315C29.4011 13.5315 28.3534 13.818 27.5747 14.3909C26.796 14.9527 26.2807 15.6604 26.0288 16.5142L19.2611 15.975C19.6046 14.4022 20.2803 13.0429 21.288 11.897C22.2957 10.7399 23.5954 9.85235 25.1871 9.23447C26.7903 8.60536 28.6454 8.29081 30.7524 8.29081C32.2181 8.29081 33.6209 8.45932 34.9607 8.79634C36.3119 9.13337 37.5086 9.65576 38.5507 10.3635C39.6042 11.0713 40.4344 11.9812 41.0413 13.0934C41.6482 14.1944 41.9517 15.5144 41.9517 17.0534V34.5113H35.0122V30.922H34.8061C34.3824 31.7309 33.8156 32.4442 33.1056 33.0621C32.3956 33.6688 31.5425 34.1462 30.5463 34.4945C29.55 34.8315 28.3992 35 27.0937 35ZM29.1893 30.0457C30.2657 30.0457 31.2162 29.8379 32.0406 29.4222C32.8651 28.9953 33.5121 28.4224 33.9816 27.7034C34.4511 26.9844 34.6859 26.17 34.6859 25.26V22.5132C34.4568 22.6593 34.1419 22.7941 33.7411 22.9177C33.3518 23.03 32.9109 23.1367 32.4185 23.2378C31.9261 23.3277 31.4337 23.412 30.9413 23.4906C30.4489 23.558 30.0023 23.6198 29.6015 23.676C28.7427 23.7996 27.9926 23.9962 27.3514 24.2658C26.7101 24.5354 26.212 24.9005 25.857 25.3611C25.502 25.8105 25.3245 26.3722 25.3245 27.0462C25.3245 28.0236 25.6852 28.7707 26.4067 29.2874C27.1395 29.793 28.0671 30.0457 29.1893 30.0457Z' fill='black'/%3E%3C/svg%3E%0A");
            background-position-x: -1px;
        }

        &__stretch-line {
            width: 40px;
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
