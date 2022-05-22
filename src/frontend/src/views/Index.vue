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
          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <div class="sheet__content dough">
                <label
                  v-for="DOUGH in dough"
                  :class="`dough__input dough__input--${DOUGH.value}`"
                  :key="DOUGH.id"
                >
                  <input
                    type="radio"
                    name="dought"
                    :value="DOUGH.value"
                    :class="visually - hidden"
                    :checked="DOUGH.isChecked"
                  />
                  <b>{{ DOUGH.name }}</b>
                  <span>{{ DOUGH.description }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="SIZES in size"
                  :key="SIZES.id"
                  :class="`diameter__input diameter__input--${SIZES.value}`"
                >
                  <input
                    type="radio"
                    name="diameter"
                    value="SIZES.value"
                    :checked="SIZES.isChecked"
                    class="visually-hidden"
                  />
                  <span>{{ SIZES.name }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>
              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>
                  <label
                    v-for="SAUCES in sauces"
                    :key="SAUCES.id"
                    class="radio ingredients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      value="SAUCES.value"
                      checked="SAUCES.isChecked"
                    />
                    <span>{{ SAUCES.name }}</span>
                  </label>
                </div>
                <div class="ingredients__filling">
                  <p>Начинка:</p>
                  <ul class="ingredients__list">
                    <li
                      v-for="INGREDIENTS in ingredients"
                      :key="INGREDIENTS.id"
                      class="ingredients__item"
                    >
                      <span :class="`filling filling--${INGREDIENTS.value}`">
                        {{ INGREDIENTS.name }}
                      </span>
                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
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
import { SIZES, INGREDIENTS, DOUGH, SAUCES } from "../common/constants";

export default {
  name: "Index",
  data() {
    return {
      dough: pizza.dough.map((dough) => normalizeData(dough, DOUGH)),
      ingredients: pizza.ingredients.map((ingredients) =>
        normalizeData(ingredients, INGREDIENTS)
      ),
      size: pizza.sizes.map((size) => normalizeData(size, SIZES)),
      sauces: pizza.sauces.map((sauces) => normalizeData(sauces, SAUCES)),
    };
  },
};
</script>
