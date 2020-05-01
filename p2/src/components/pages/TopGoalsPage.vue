<template>
  <div id="goals">
    <h2>Top Goals</h2>
    <div class="card-group">
      <show-goal v-for="goal in goals" :key="goal.id" :goal="goal"></show-goal>
    </div>
  </div>
</template>

<script>
import ShowGoal from "@/components/ShowGoal.vue";
import * as app from "@/common/app.js";
export default {
  name: "",
  components: {
    "show-goal": ShowGoal
  },
  props: [],
  data: function() {
    return {
      goals: []
    };
  },
  mounted: function() {
    app.api.find("goals", "importance", 8).then(response => {
      this.goals = response;
    });
  }
};
</script>

<style scoped></style>
