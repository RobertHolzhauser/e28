<template>
  <div>
   
    <div>
      <b-jumbotron header="The Dream Machine Process" >
         <template v-slot:lead>
            An achievement process that combines classic goal setting from Brian Tracy, and NLP Achievable Outcomes.
         </template>
        <hr class="my-4">
        <b-list-group>
        <b-list-group-item> Imagine your ultra ideal future.</b-list-group-item>
        <b-list-group-item>For each aspect of your ultra ideal future enter a goal into The Dream Machine.</b-list-group-item>
        <b-list-group-item>Refer to your goals on a daily basis, and continue to refine them.</b-list-group-item>
        <b-list-group-item>Celebrate your successes.</b-list-group-item>
        </b-list-group>
      </b-jumbotron>
    </div>
</div>
</template>

<script>
export default {
  name: "ShowHome"
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
