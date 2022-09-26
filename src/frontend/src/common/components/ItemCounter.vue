<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="$emit('changeCount', value - 1)"
      :disabled="value === min"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="value"
      readonly
      @input="$emit('input', Number($event.target.value))"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="$emit('changeCount', value + 1)"
      :disabled="value === max"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
  },
};
</script>
