<script>
import vClickOutside from 'click-outside-vue3';

export default {
    directives: {
        clickOutside: vClickOutside.directive
    },

    methods: {
        close() {
            this.$emit('close');
        },
    }
};
</script>

<template>
    <div class="modal-window-wrapper">
        <div class="modal-window" v-click-outside="close">
            <span class="modal-window__close-icon" @click="close"></span>
            <div class="modal-window__content">
                <slot name="content">
                    default content
                </slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.modal-window-wrapper {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 5000;

    .modal-window {
        display: flex;
        flex: 100%;
        align-self: flex-end;
        height: calc(100% - 48px);
        max-width: 728px;
        padding: 40px;
        background-color: var(--background-color-0);
        border-radius: 16px;
        position: relative;

        &__close-icon {
            display: block;
            width: 60px;
            height: 6px;
            position: absolute;
            left: calc(50% - 30px);
            background-color: var(--background-color-100);
            border-radius: 100px;
            cursor: pointer;
        }

        &__content {
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: 20px;
        }
    }

    @media (max-width: 767px) {
        .modal-window {
            padding: 24px 0 24px 24px;
            border-radius: 24px 24px 0 0;

            &__close-icon {
                top: 9px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1439px) {
        .modal-window {
            padding: 38px 44px 0 64px;
            border-radius: 20px 20px 0 0;

            &__close-icon {
                top: 16px;
            }
        }
    }

    @media (min-width: 1440px) {
        .modal-window {
            padding: 38px 64px 0;
            border-radius: 20px 20px 0 0;

            &__close-icon {
                top: 16px;
            }
        }
    }
}
</style>
