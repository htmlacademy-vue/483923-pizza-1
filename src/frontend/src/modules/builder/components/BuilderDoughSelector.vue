<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <RadioButton
          v-for="dough in doughList"
          :class="`dough__input dough__input--${dough.value}`"
          :key="dough.id"
          type="radio"
          name="dought"
          :value="dough.value"
          :checked="dough.id === checkedDough.id"
          @change="$emit('changeDough', dough.id)"
          :text="dough.name"
          :description="dough.description"
        >
        </RadioButton>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../../common/components/RadioButton.vue";
export default {
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  props: {
    doughList: {
      type: Array,
      required: true,
    },
    checkedDough: {
      type: Object,
      required: true,
    },
  },
};
</script>
