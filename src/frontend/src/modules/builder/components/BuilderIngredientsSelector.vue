<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <RadioButton
            v-for="sauce in sauces"
            :key="sauce.id"
            class="radio ingredients__input"
            type="radio"
            name="sauce"
            :value="sauce.value"
            :checked="sauce.value === checkedSauce.id"
            @change="$emit('changeSauce', sauce.value)"
            :description="sauce.name"
          >
          </RadioButton>
        </div>
        <div class="ingredients__filling">
          <p>Начинка:</p>
          <ul class="ingredients__list">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <SelectorItem :ingredient="ingredient" />
              <ItemCounter
                class="ingredients__counter"
                :value="ingredient.count"
                :min="0"
                :max="3"
                @changeCount="
                  $emit('changeCount', {
                    value: ingredient.value,
                    count: $event,
                  })
                "
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter.vue";
import RadioButton from "../../../common/components/RadioButton.vue";
import SelectorItem from "../../../common/components/SelectorItem.vue";
export default {
  name: "BuilderIngredientsSelector",
  components: {
    ItemCounter,
    RadioButton,
    SelectorItem,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
    checkedSauce: {
      type: Object,
      required: true,
    },
  },
};
</script>
