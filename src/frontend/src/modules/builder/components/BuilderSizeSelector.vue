<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <RadioButton
          v-for="size in sizes"
          :class="`diameter__input diameter__input--${size.value}`"
          :key="size.id"
          type="radio"
          name="diameter"
          :value="size.value"
          :checked="size.id === checkedSize.id"
          @change="$emit('changeSize', size.id)"
          :description="size.name"
        >
        </RadioButton>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../../common/components/RadioButton.vue";
export default {
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    checkedSize: {
      type: Object,
      required: true,
    },
  },
};
</script>
