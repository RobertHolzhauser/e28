 <template>
  <router-link class="goal" :to="{ name: 'goal', params: {slug: goal.slug }}">
    <div class="card text-white bg-dark mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="goal-goal card-title">Goal: {{ goal.goal }}</h5>
        <div class="card-text">
          <div class="goal-difficulty">Difficulty: {{ goal.difficulty }}</div>
          <div class="goal-importance">Importance: {{ goal.importance }}</div>
          <div class="goal-timeline">Timeline: {{ goal.timeline }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "",
  props: ["goal"],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>

