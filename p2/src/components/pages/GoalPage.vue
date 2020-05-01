<template>
  <div id="goal-page" v-if="goal">
    <h1>{{ goal.name }}</h1>
    <p class="goal-description">{{ goal.description }}</p>
    <div class="measure">${{ goal.measure }}</div>

    <router-link :to="{ name: 'products' }">&larr; All Goals </router-link>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["slug"],
  data: function() {
    return {
      //id: this.$route.params.id
      goal: null,
    };
  },
  mounted: function() {
    // TODO: Load goal details from Firestore
  },
};
</script>

<style scoped></style>
