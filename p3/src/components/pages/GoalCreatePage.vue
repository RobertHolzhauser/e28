<template>
  <div>
    <h2>Create a Goal</h2>

    <label for="goal">
      <h4>Goal</h4>
      <ul class="bulletfree">      
        <li>What is your Goal? </li>    
        <li>What, specifically, do you want?</li>
      </ul>
      </label>
    <input type="text" v-model='goal.goal' id="goal" />

<!--:class='{ "form-input-error": $v.goal.goal.$error }' -->

<!--
    <div v-if='$v.goal.goal.$error'>
      <div class='form-feedback-error' v-if='!$v.goal.goal.required'>Goal is required.</div>
    </div>
    -->

    <label for="slug">
      <h4>Short Name</h4>
      What is a unique, short, perhaps abbreviated name for your goal?</label>
    <input type="text" v-model="goal.slug" id="slug" />

    <label for="description">
      <h4>Description</h4>
      Describe your goal in as much detail as you possibly can.</label>
    <b-form-textarea v-model="goal.description" id="description" rows="3"
      max-rows="6" placeholder="Fully Describe it"></b-form-textarea>

    <label for="lifeareas">
    <h4>Life Areas</h4>
      What area(s) of life does this goal pertain to? For example: 
      <ul class="bulletfree">
        <li>Health and Fitness </li>    
        <li>Career </li> 
        <li>Finances</li> 
        <li>Family</li>
        <li>Spirituality</li>
        <li>Personal Development</li>
        <li>Relationships</li> 
      </ul>
    </label>
    <b-form-textarea v-model="goal.lifeareas" id="lifeareas" placeholder="Areas of life"></b-form-textarea>

    <label
      for="difference"
    >
    <h4>Differences</h4>
    What are the differences between your current situation and having this goal?</label>
    <b-form-textarea v-model="goal.difference" id="difference" rows="3"
      max-rows="12" placeholder="What's the difference ?"></b-form-textarea>

    <label for="see">
      <h4>See it</h4>
      <ul class="bulletfree">
        <li>What will you see when you get this goal? </li>     
        <li>What will it look like to have this goal?</li> 
        <li>What will other people see you get this goal?</li>
      </ul>
      
    </label>
    <b-form-textarea v-model="goal.see" id="see" rows="3"
      max-rows="6" placeholder="What does it look like?"> </b-form-textarea>

    <label for="hear">
      <h4>Hear it</h4>
      <ul class="bulletfree">
        <li>What will you hear when you get this goal?</li>       
        <li>What will it sound like to have this goal?</li>      
        <li>What will you say to yourself when you get this goal?</li>
        <li>What will other people say to you or about you?</li>
      </ul>
      
    </label>
    <b-form-textarea v-model="goal.hear" id="hear" rows="3"
      max-rows="6" placeholder="How does this goal sound?"></b-form-textarea>

    <label for="feel">
      <h4>Feel it</h4>
      <ul class="bulletfree">
          <li>How do you feel about this goal?</li>
          <li>What will it feel like to have this goal?</li>
      </ul>
      
      </label>
    <b-form-textarea v-model="goal.feel" id="feel" rows="3"
      max-rows="6" placeholder="What does it feel like?"></b-form-textarea>

    <label for="evidence">
      <h4>Evidence and Measures</h4>
      <ul class="bulletfree">
        <li>How will you know when you have attained it?</li>   
        <li>What evidence can you use to guage your progress?</li>      
        <li>What will it be like?</li> 
        <li>How will you measure your progress?</li>
      </ul>
      </label>
    <b-form-textarea  v-model="goal.evidence" id="measures" rows="3"
      max-rows="12" placeholder="What milestones indicate successful progress?" ></b-form-textarea>

    <label for="timeline">
      <h4>Timeline</h4>
      By when will you achieve your goal?</label>
    <input  v-model="goal.timeline" id="timeline" />

    <label for="benefits">
      <h4>Benefits</h4>
      What benefits will you get from achieving this goal?</label>
    <b-form-textarea  v-model="goal.benefits" id="benefits" rows="3"
      max-rows="12" placeholder="Benefits" ></b-form-textarea>

    <label for="skills">
      <h4>Skills and Knowledge</h4>
      What Skills and Knowledge will you need in order to achieve your goal?</label>
    <b-form-textarea  v-model="goal.skills" id="skills" rows="3"
      max-rows="12" placeholder="What do you need to learn?" ></b-form-textarea>

    <label
      for="selfinitiated"
    >
    <h4>Self initiated and Maintained</h4>
    Is this goal something that you can initiate and maintain for yourself?</label>
    <input type="checkbox" v-model="goal.selfinitiated" id="selfinitiated" />

    <label for="difficulty">
      <h4>Difficulty</h4>
      How easy or difficult do you expect it will be to achieve this goal?</label>
    Easy
    <input
      type="range"
      name="difficulty"
      min="1"
      max="10"
      v-model="goal.difficulty"
      id="difficulty"
    />
    Difficult

    <label for="importance">
      <h4>Importance</h4>
      How important is it for you to achieve this goal?</label>
    Not Important at all
    <input
      type="range"
      id="importance"
      name="importance"
      min="1"
      max="10"
      v-model="goal.importance"
    />
    Extremely Important

    <label for="criteria">
      <h4>Value</h4>
      What's important about achieving this goal?</label>
    <b-form-textarea v-model="goal.criteria" id="criteria" rows="3"
      max-rows="12" placeholder="Why is this important?" ></b-form-textarea>

    <label for="who">
      <h4>Allies</h4>
      <ul class="bulletfree">
        <li>Who's help, support or cooperation do you need?</li>
        <li>Who do you need to work with or work around to make this happen?</li>
      </ul>
      
    </label>
    <b-form-textarea v-model="goal.who" id="who" rows="3"
      max-rows="12" placeholder="Who are your allies?" ></b-form-textarea>

    <label for="consequences">
      <h4>Consequences</h4>
      What will happen as a result of pursuing and achieving this goal?</label>
    <b-form-textarea v-model="goal.consequences" id="consequences" rows="3"
      max-rows="12" placeholder="Consequences" ></b-form-textarea>

    <label
      for="actions"
    >
    <h4>Action Plan</h4>
    What are all of the specific actions that you possibly can take to move toward achieving this goal?</label>
    <b-form-textarea v-model="goal.actions" id="actions" rows="3"
      max-rows="12" placeholder="Action Plan" ></b-form-textarea>

    <label for="obstacles">
      <h4>Obstacles</h4>
      <ul class="bulletfree">
        <li>What has stopped you in the past from already having achieved this goal?</li>
        <li>How is it possible that you don't already have it now?</li>
        <li>What additional resources or strategies could you use to address these obstacles?</li>
        <li>What has been preventing you from having this goal?</li>
        <li>How could you utilize those obstacles?</li>
        <li>How can you adjust your path or process so that the obstacles become stepping stones?</li>
      </ul>
      
    </label>
    <b-form-textarea v-model="goal.obstacles" id="obstacles" rows="3"
      max-rows="12" placeholder="What stops you?" ></b-form-textarea>

    <label for="opportunitycost">
      <h4>Opportunity Cost</h4>
      <ul class="bulletfree">
        <li>What tradeoffs or sacrifices will you have to make in order to accomplish this?</li>
        <li>What will cost to achieve this goal?</li>
        <li>What will you have to give up, or not do in order to be able to achieve this?</li>
        <li>Is it worth doing what it will take?</li>
      </ul>
    </label>
    <b-form-textarea v-model="goal.opportunitycost" id="opportunitycost" rows="3"
      max-rows="12" placeholder="What is the price of this success?" ></b-form-textarea>

    <label for="resources">
      <h4>Resources</h4>
      <ul class="bulletfree">
         <li>What resources do you already have that you can use to get this goal?</li>
         <li>How can you utilize these resources?</li>
         <li>What additional resources do you need to access or develop?</li>
         <li>Have you ever done anything similar to this goal, or any of the aspects or components of this goal?</li>
         <li>If so, what did you do then? What was that like?</li>
         <li>What would it be like if you already had an abundance of these resources? </li>
      </ul>
      
    </label>
    <b-form-textarea v-model="goal.resources" id="resources" rows="3"
      max-rows="12" placeholder="How can you fully utilize the available resources?" ></b-form-textarea>

    <label for="rolemodels">
      <h4>Role Models</h4>
      <ul class="bulletfree">
        <li>Who are your models?</li> 
        <li>Who has done this or similar things before?</li>
        <li>Who are your heroes? </li>
        <li>Who do you admire? </li>
        <li>Who do you want to be like?</li>
        <li>What would your role models do in this case?</li>
        <li>What are the qualities and attributes of your role models?</li>
      </ul>
      
    </label>
    <b-form-textarea v-model="goal.rolemodels" id="rolemodels" rows="3"
      max-rows="12" placeholder="What qualities do the people you admire have?" ></b-form-textarea>

    <label for="ecological">
      <h4>Ecology</h4>
      <ul class="bulletfree">
        <li>How will going for and achieving this goal impact your life?</li>
        <li>Is this goal good for you? </li>
        <li>Is it good for the important people in your life?</li>
        <li>Is this goal good for your community? </li>
        <li>Is this goal good for the world?</li>
        <li>Is there anything you will lose through this goal?</li>
        <li>What downsides or disadvantages are there to the process of having this goal?</li>
      </ul>
      
    </label>
    <b-form-textarea v-model="goal.ecological" id="ecological" rows="3"
      max-rows="6" placeholder="What about the ecology of this goal?"></b-form-textarea>

    <input type="submit" value="Add" @click.prevent="addGoal" />

    <transition name="fade">
      <div class="alert" v-if="added">Your {{ goal.name }} Goal has been created!</div>
    </transition>
  </div>
</template>


<script>
import * as app from "@/common/app.js";
import { required } from 'vuelidate/lib/validators';

export default {
  name: "",
  data: function() {
    return {
      added: false,
      goal: {
        timeline: "",
        selfinitiated: false,
        actions: "",
        benefits: "",
        consequences: "",
        criteria: "",
        description: "",
        difference: "",
        difficulty: 1,
        ecological: "",
        evidence: "",
        feel: "",
        goal: "",
        goalid: "",
        hear: "",
        importance: 10,
        purpose: "",
        obstacles: "",
        opportunitycost: "",
        resources: "",
        rolemodels: "",
        see: "",
        skills: "",
        when: "",
        who: "",
        slug: "",
        lifeareas: ""
      }
    };
  },
  methods: {
    addGoal: function() {
      
      app.api.add("goals", this.goal).then(id => {
        console.log("Goal added to DB, id= " + id);
        this.added = true;
        setTimeout(() => (this.added = false), 3000);
        this.goal = {
          timeline: "",
          selfinitiated: false,
          actions: "",
          benefits: "",
          consequences: "",
          criteria: "",
          description: "",
          difference: "",
          difficulty: "",
          ecological: "",
          evidence: "",
          feel: "",
          goal: "",
          goalid: "",
          hear: "",
          importance: "",
          purpose: "",
          obstacles: "",
          opportunitycost: "",
          resources: "",
          rolemodels: "",
          see: "",
          skills: "",
          when: "",
          who: "",
          slug: "",
          lifeareas: ""
        };
        this.$store.commit('updateGoalCount', 1);
      });
    }
  }, 
  validations: {
    goal: {
        goal: {
            required
        },
    }
}
};
</script>

<style scoped>
input {
  font-size: 15pt;
}
textarea,
input[type="text"] {
  width: 50%;
}
textarea {
  height: 75px;
  display: block;
  margin: auto;
}
label {
  margin-top: 20px;
  display: block;
  font-weight: bold;
}
input[type="submit"] {
  display: inline-block;
  margin-top: 10px;
}
</style>
