<template>
  <div>
    <h2>Create a Goal</h2>

    <label for="goal">Goal</label>
    <input type="text" v-model="goal.goal" id="goal" />

    <label for="slug">Unique Abbreviated Name for your goal</label>
    <input type="text" v-model="goal.slug" id="slug" />

    <label for="description">Describe your goal in detail</label>
    <textarea v-model="goal.description" id="description"></textarea>

    <label for="lifeareas">
      What area(s) of life does this goal pertain to? For example, health and fitness,
      career, finances, family, spirituality, personal development, relationships, etc.
    </label>
    <textarea v-model="goal.lifeareas" id="lifeareas"></textarea>

    <label
      for="difference"
    >What are the differences between your current situation and having this goal?</label>
    <textarea v-model="goal.difference" id="difference"></textarea>

    <label for="see">
      What will you see when you get this goal? What will it look like to have this goal?
      What will other people see you get this goal?
    </label>
    <textarea v-model="goal.see" id="see"></textarea>

    <label for="hear">
      What will you hear when you get this goal? What will it sound like to have this goal?
      What will you say to yourself when you get this goal?
    </label>
    <textarea v-model="goal.hear" id="hear"></textarea>

    <label for="feel">How do you feel about this goal? What will it feel like to have this goal?</label>
    <textarea v-model="goal.feel" id="feel"></textarea>

    <label for="evidence">How will you know when you have attained it?</label>
    <input type="text" v-model="goal.evidence" id="measures" />

    <label for="timeline">By when will you achieve your goal?</label>
    <input type="text" v-model="goal.timeline" id="timeline" />

    <label for="benefits">What benefits will you get from achieving this goal?</label>
    <input type="text" v-model="goal.benefits" id="benefits" />

    <label for="skills">What Skills and Knowledge will you need in order to achieve your goal?</label>
    <input type="text" v-model="goal.skills" id="skills" />

    <label
      for="selfinitiated"
    >Is this goal something that you can initiate and maintained for yourself?</label>
    <input type="checkbox" v-model="goal.selfinitiated" id="selfinitiated" />

    <label for="difficulty">How easy do you expect it will be to achieve this goal?</label>
    <input
      type="range"
      name="difficulty"
      min="1"
      max="10"
      v-model="goal.difficulty"
      id="difficulty"
    />
    >
    <label for="importance">How important is it for you to achieve this goal?</label>
    <input
      type="range"
      id="importance"
      name="importance"
      min="1"
      max="10"
      v-model="goal.importance"
    />

    <label for="consequences">What will happen as a result of pursuing and achieving this goal?</label>
    <textarea v-model="goal.consequences" id="consequences"></textarea>

    <label for="criteria">What's important about achieving this goal?</label>
    <input type="text" v-model="goal.criteria" id="criteria" />

    <label for="who">
      Who's help, support or coopoeration do you need?
      Who do you need to work with or work around to make this happen?
    </label>
    <input type="text" v-model="goal.who" id="who" />

    <label for="consequences">What will happen as a result of pursuing and achieving this goal?</label>
    <input type="text" v-model="goal.consequences" id="consequences" />

    <label
      for="actions"
    >What are all of the specific actions that you possibly could take to move toward achieving this goal?</label>
    <input type="text" v-model="goal.actions" id="actions" />

    <label for="obstacles">
      What has stopped you in the past from already having achieved this goal?
      How is it possible that you don't already have it now?
      What additional resources or strategies could you use to address these obstacles?
      How could you utilize those obstacles?
      How can you adjust your path or process so that the obstacles become stepping stones?
    </label>
    <input type="text" v-model="goal.obstacles" id="obstacles" />

    <label for="opportunitycost">
      What tradeoffs or sacrifices will you have to make in order to accomplish this?
      What will cost to achieve this goal?
      What will you have to give up, or not do in order to be able to achieve this?
      Is it worth doing what it will take?
    </label>
    <input type="text" v-model="goal.opportunitycost" id="opportunitycost" />

    <label for="resources">
      What resources do you already have that you can use to get this goal?
      How can you utilize these resources?
      What additional resources do you need to access or develop?
      Have you ever done anything similar to this goal, or any of the aspects or components of this goal?
      If so, what did you do then? What was that like?
      What would it be like if you already had an abundance of these resources?
    </label>
    <input type="text" v-model="goal.resources" id="resources" />

    <label for="rolemodels">
      Who are your model? Who has done this or similar things before?
      Who are your heroes? Who do you admire? Who do you want to be like?
      What would your role models do in this case?
    </label>
    <input type="text" v-model="goal.rolemodels" id="rolemodels" />

    <label for="ecological">
      How will going for and achieving this goal impact your life?
      Is this goal good for you? Is it good for the important people in your life?
      Is this goal good for your community? Is this goal good for the world?
      Is there anything you will lose through this goal?
      What downsides or disadvantages are there to the process of having this goal?
    </label>
    <textarea v-model="goal.ecological" id="ecological"></textarea>

    <input type="submit" value="Add" @click.prevent="addGoal" />

    <transition name="fade">
      <div class="alert" v-if="added">Your {{ goal.name }} Goal has been created!</div>
    </transition>
  </div>
</template>

<!--actions: ['actions'],
  //  benefits: ['gain'],
   // consequences: ['what will happen'],
   // criteria: ['important'],
   // description: ['example description'],
   // difference: ['ps to ds diff'],
   // difficulty: ,
   // ecological: ['good for self, others, community, world'],
    //evidence: ['measurable'],
   // feel: ['kino'],
   // goal: 'example goal',
    goalid: 0,  --- firbase id
    //hear: ['auditory'],
   // importance: 0,
    //purpose: ['meta'],
    //obstacles: ['stops'],
    //opportunitycost: ['trade off'],
    //resources: ['my resources'],
    //rolemodels: ['who has done this'],
    //see: ['visual'],
    //skills: ['know how'],
    //when: ['timeline'],
    //who: ['people'],
    //slug: 'aaaa',
    //lifeareas: ['school']
-->
<script>
import * as app from "@/common/app.js";

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
      });
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
