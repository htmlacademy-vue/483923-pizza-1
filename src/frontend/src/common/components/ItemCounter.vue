<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="$emit('decrementCount', ingredient.id)"
      :disabled="isMinDisabled"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="ingredient.count"
      readonly
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="$emit('incrementCount', ingredient.id)"
      :disabled="isMaxDisabled"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { INGREDIENT_MIN_COUNT, INGREDIENT_MAX_COUNT } from "@/common/constants";

export default {
  name: "ItemCounter",
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isMinDisabled() {
      return this.ingredient.count === INGREDIENT_MIN_COUNT;
    },
    isMaxDisabled() {
      return this.ingredient.count === INGREDIENT_MAX_COUNT;
    },
  },
};
</script>
