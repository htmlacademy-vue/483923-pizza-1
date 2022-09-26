<template>
  <AppDrag :transfer-data="ingredient" :draggable="isDraggable">
    <span class="filling" :class="`filling--${ingredient.value}`">
      {{ ingredient.name }}
    </span>
  </AppDrag>
</template>

<script>
import AppDrag from "@/common/components/AppDrag";
import { INGREDIENT_MAX_COUNT } from "../constants";
export default {
  name: "SelectorItem",
  components: {
    AppDrag,
  },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isDraggable() {
      return this.ingredient.count < INGREDIENT_MAX_COUNT;
    },
  },
};
</script>
<style lang="scss" scoped>
.filling:hover {
  cursor: grab;
}
</style>
