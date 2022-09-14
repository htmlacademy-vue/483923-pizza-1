<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <!--<div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <div class="sheet__content dough">
                <label
                  v-for="dough in dough"
                  :class="`dough__input dough__input--${dough.value}`"
                  :key="dough.id"
                >
                  <input
                    type="radio"
                    name="dought"
                    :value="dough.value"
                    class="visually-hidden"
                    :checked="dough.isChecked"
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </div>
            </div>
          </div> -->
          <BuilderDoughSelector
            :doughList="dough"
            :checkedDough="dough"
            @changeDough="changeDough"
          />
          <BuilderSizeSelector
            :sizes="sizes"
            :checkedSize="sizes"
            @changeSize="changeSize"
          />
          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>
              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>
                  <label
                    v-for="sauce in sauces"
                    :key="sauce.id"
                    class="radio ingredients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.value"
                      :checked="sauce.isChecked"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>
                <BuilderIngredientsSelector :ingredients="ingredients" />
              </div>
            </div>
          </div>
          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>
            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>
            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
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

export default {
  name: "Index",
  components: {
    BuilderIngredientsSelector,
    BuilderDoughSelector,
    BuilderSizeSelector,
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
  },
  methods: {
    changeDought(id) {
      this.changeDought = id;
      console.log(this.changeDought);
    },
    changeSize(id) {
      this.changeSize = id;
      console.log(this.changeSize);
    },
  },
};
</script>
