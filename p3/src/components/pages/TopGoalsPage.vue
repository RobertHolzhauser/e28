<template>
  <div id="goals">
    <div class="card-group">
      <show-top></show-top>
      <show-evidence></show-evidence>
      <show-action></show-action>
      <show-benefits></show-benefits>
      <show-obstacles></show-obstacles>
    </div>
  </div>
</template>

<script>
import ShowTop from "@/components/ShowTop.vue";
import ShowEvidence from "@/components/ShowEvidence.vue";
import ShowAction from "@/components/ShowAction.vue";
import ShowBenefits from "@/components/ShowBenefits.vue";
import ShowObstacles from "@/components/ShowObstacles.vue";
import * as app from "@/common/app.js";
export default {
  name: "",
  components: {
    "show-top": ShowTop,
    "show-evidence": ShowEvidence,
    "show-action": ShowAction,
    "show-benefits": ShowBenefits,
    "show-obstacles": ShowObstacles,
  },
  props: [],
  data: function() {
    return {
      goals: []
    };
  },
  mounted: function() {
    app.api.findGreaterThan("goals", "importance", 7).then(response => {
      this.goals = response;
    });
  }
};
</script>

<style scoped></style>
