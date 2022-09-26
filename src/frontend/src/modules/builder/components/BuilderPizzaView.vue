<template>
  <div>
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        v-model="pizzaName"
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>
    <AppDrop @drop="moveDrop">
      <div class="content__constructor">
        <div
          class="pizza"
          :class="`pizza--foundation--${sizeName}-${sauceName}`"
        >
          <div class="pizza__wrapper">
            <template v-for="ingredient in ingredients">
              <div
                :key="ingredient.id"
                class="pizza__filling"
                :class="`pizza__filling--${ingredient.value}`"
              />
              <!-- <div
                v-if="ingredient.count === 2"
                :class="`pizza__filling pizza__filling--${ingredient.value} pizza__filling--second`"
              />
              <div
                v-if="ingredient.count === 3"
                :class="`pizza__filling pizza__filling--${ingredient.value} pizza__filling--third`"
              /> -->
            </template>
          </div>
        </div>
      </div>
    </AppDrop>
  </div>
</template>

<script>
import AppDrop from "@/common/components/AppDrop";
export default {
  name: "BuilderPizzaView",
  components: { AppDrop },
  props: {
    ingredients: {
      type: Array,
      defaults: [],
    },
    dough: {
      type: String,
      default: "light",
    },
    sauce: {
      type: String,
      default: "tomato",
    },
    pizzaName: {
      type: String,
      default: "",
    },
  },
  computed: {
    sizeName() {
      return this.dough === "large" ? "big" : "small";
    },
    sauceName() {
      return this.sauce === "creamy" ? "creamy" : "tomato";
    },
  },
  methods: {
    moveDrop(event) {
      this.$emit("addIngredient", event);
    },
  },
};
</script>
