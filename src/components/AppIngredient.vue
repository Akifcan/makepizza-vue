<script>
import { onMounted } from "vue";
export default {
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>
<template>
  <div class="ingredient-item" :title="ingredient.name">
    <img :src="ingredient.url" :alt="ingredient.name" />
  </div>
</template>


<style scoped>
.ingredient-item {
  cursor: grab;
  width: 6rem;
  height: 6rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>