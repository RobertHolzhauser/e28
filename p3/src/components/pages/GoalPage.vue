<template>
  <div id="goal-page" v-if="goal"> 
    <h1>Goal: {{ goal.goal }}</h1>
    <p class="goal-description">Description: {{ goal.description }}</p>
    <p class="goal-benefits">Benefits: {{ goal.benefits }}</p>
    <p class="goal-criteria">Why: {{ goal.criteria }}</p>
    <p class="goal-consequences">Consequences: {{ goal.consequences }}</p>
    <p class="goal-difference">Difference: {{ goal.difference }}</p>
    <p class="goal-difficulty">Difficulty: {{ goal.difficulty }}</p>
    <p class="goal-importance">Importance: {{ goal.importance }}</p>
    <p class="goal-evidence">Evidence: {{ goal.evidence }}</p>
    <p class="goal-hear">Hear: {{ goal.hear }}</p>
    <p class="goal-see">See:  {{ goal.see }}</p>
    <p class="goal-feel">Feel:  {{ goal.feel }}</p>
    <p class="goal-obstacles">Obstacles: {{ goal.obstacles }}</p>
    <p class="goal-lifeareas">Areas: {{ goal.lifeareas }}</p>
    <p class="goal-resources">Resources: {{ goal.resources }}</p>
    <p class="goal-timeline">Timeline: {{ goal.timeline }}</p>
    <p class="goal-who">Allies: {{ goal.who }}</p>
    <p class="goal-rolemodels">Role Models: {{ goal.rolemodels }}</p>
    <p class="goal-opportunitycost">Opportunity Cost: {{ goal.opportunitycost }}</p>
    <p class="goal-ecology">Ecology: {{ goal.ecology }}</p>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
  name: '',  
  props: ["slug"],
  data: function() {
    return {
      goal: null,
    };
  },
 
   computed: {
      goals: function() {
        return this.$store.state.goals;
      },

      fetchGoal() {
        return this.$store.getters.getGoalBySlug(this.slug);
      }
    },

  mounted: function() {
    // Load goal info from Database
    app.api.find('goals','slug', this.slug).then(response => {
        this.goal = response;
    });
  },

    getters: {
      getGoalBySlug(state) {
        return function (slug) {
          for (let key of Object.keys(state.goal)) {
            if (state.goals[key].slug == slug) {
                  return state.goals[key];
              }
          }
        }
      }
    },
};
</script>

<style scoped></style>
