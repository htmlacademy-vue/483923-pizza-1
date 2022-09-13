<template>
    <AppDrag :transfer-data="ingredient" :draggable="draggable">
        <span :class="draggable && 'item--draggable'">
            {{ingredient.name}}
        </span>
    </AppDrag>
</template>

<script>
import AppDrag from './AppDrag.vue';
import { INGREDIENT_MAX_COUNT } from '../constants';

export default {
    name: "SelectorItem",
    components: {
        AppDrag
    },
    props: {
        ingredient: {
            type: Object,
            required: true,
        },
    },
    computed: {
        draggable() {
            return this.ingredient.count < INGREDIENT_MAX_COUNT;  
        },
    },
};
</script>