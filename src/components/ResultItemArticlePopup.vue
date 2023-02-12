<script setup>
import ModalWindow from '@/components/Base/ModalWindow.vue'

const emit = defineEmits(['cancel'])

const cancel = () => {
    emit('cancel')
}

const props = defineProps({
    resultItem: {
        resultTitle: String,
        resultText: String,
        resultDate: String,
        resultTime: Number,
    }
});
</script>

<template>
    <ModalWindow class="modal-window-fillin"
                 @close="cancel">
        <template v-slot:content>
            <h1 class="modal-window-fillin__title">{{ resultItem.resultTitle }}</h1>

            <div class="modal-window-fillin__body">
                {{ resultItem.resultText }}
            </div>
        </template>
    </ModalWindow>
</template>
