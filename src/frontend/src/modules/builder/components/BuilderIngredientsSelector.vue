<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrop @drop="$emit('drop', $event)">
          <AppDrag :transfer-data="ingredient" @drop="moveIngredient">
            <span :class="`filling filling--${ingredient.value}`">
              {{ ingredient.name }}
            </span>
          </AppDrag>
        </AppDrop>
        <ItemCounter @changeCount="changeCount($event, ingredient)" />
      </li>
    </ul>
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter.vue";
import AppDrop from "../../../common/components/AppDrop.vue";
import AppDrag from "../../../common/components/AppDrag.vue";
export default {
  name: "BuilderIngredientsSelector",
  components: {
    ItemCounter,
    AppDrop,
    AppDrag,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeCount(countValue, ingredient) {
      return this.$emit("changeCount", { countValue, ingredient });
    },
    moveIngredient() {
      console.log("test drag drop");
    },
  },
};
</script>
