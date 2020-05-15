<template>
  <div id="app">
    <h1 class="display-4">The Dream Machine</h1>
    <h5>A powerful and effective process for turning your goals and dreams into REALITY.</h5>
    <img
      alt="Dream Machine logo which is a steam engine"
      src="@/assets/images/steam-engine.jpg"
      id="logo_img"
    /> <p>Currently Tracking {{ goalCount }} Goals {{  }}</p> 
    <div>
      <b-nav>
        <b-nav-item v-for="link in links" :key="link">
          <router-link :to="{ name: link }" exact>{{ link }}</router-link>
        </b-nav-item>
      </b-nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      links: ["Home", "Goals", "Top", "Add a goal"]
    };
  },
  computed: {
        goalCount: function() {
            return this.$store.getters.getGoalCount();
        }
    },
  mounted: function() {
    this.$store.dispatch('setGoals');
    this.$store.dispatch('fetchGoalCount');
  }
};
</script>

<style>
@import "./assets/css/site.css";
</style>
