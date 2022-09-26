<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector
            :doughList="dough"
            :checkedDough="dough"
            @changeDough="changeDough"
          />
          <BuilderSizeSelector
            :sizes="sizes"
            :checkedSize="sizes"
            @changeSize="changedSize"
          />
          <BuilderIngredientsSelector
            :sauces="sauces"
            :checkedSauce="sauces"
            :ingredients="ingredients"
            @changeCount="changeIngredient"
          />
          <div class="content__pizza">
            <BuilderPizzaView
              :ingredients="ingredients"
              :dough="dough.value"
              :sauce="sauces.value"
              @addIngredient="changeIngredient"
            />
            <BuilderPriceCounter
              :totalPrice="totalPrice"
              :disabled="isDisabled"
            />
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import { normalizeData } from "../common/helpers";
import { DOUGH, INGREDIENTS, SAUCES, SIZES } from "../common/constants";
import BuilderIngredientsSelector from "../modules/builder/components/BuilderIngredientsSelector.vue";
import BuilderDoughSelector from "../modules/builder/components/BuilderDoughSelector.vue";
import BuilderSizeSelector from "../modules/builder/components/BuilderSizeSelector.vue";
import BuilderPizzaView from "../modules/builder/components/BuilderPizzaView.vue";
import BuilderPriceCounter from "../modules/builder/components/BuilderPriceCounter.vue";

export default {
  name: "Index",
  components: {
    BuilderIngredientsSelector,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  data() {
    return {
      pizzName: "",
    };
  },
  computed: {
    dough: function () {
      return pizza.dough.map((dough) => normalizeData(dough, DOUGH));
    },
    ingredients: function () {
      return pizza.ingredients.map((ingredients) =>
        normalizeData(ingredients, INGREDIENTS)
      );
    },
    sizes: function () {
      return pizza.sizes.map((sizes) => normalizeData(sizes, SIZES));
    },
    sauces: function () {
      return pizza.sauces.map((sauces) => normalizeData(sauces, SAUCES));
    },
    totalPrice() {
      let priceIngredients = this.ingredients.reduce(
        (currentSum, ingredient) => {
          return currentSum + ingredient.price * ingredient.count;
        },
        0
      );
      return (
        this.size * (this.dough.price + this.sauces.price + priceIngredients)
      );
    },
    isDisabled() {
      return Boolean(this.pizzName.length && this.ingredients.length);
    },
  },
  methods: {
    changeDought(id) {
      this.changeDought = id;
    },
    changeSize(id) {
      this.changeSize = id;
    },
    changeIngredient(event) {
      let index = this.ingredients.find((item) => item.value === event.value);
      this.ingredients[index].count === event.count;
    },
  },
};
</script>
