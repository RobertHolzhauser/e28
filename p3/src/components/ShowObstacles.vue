<template>
    <div id='top'>
        <h1>Top Obstacles</h1>
        <ul class='cleanList'>
            <li v-for='goal in topGoals' :key='goal.slug'>{{ goal.obstacles }}</li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    props: ['areas'],
    data: function() {
        return {
            goals: null,
            topGoals: []
        };
    },
    methods: {
        loadTopGoals: function() {
            // Loop through goals
            Object.keys(this.goals).map(key => {
                // Check whether this goal has an obstacle defined
                if (
                    this.goals[key].obstacles 
                ) {
                    // Add to topGoals array
                    this.topGoals.push(this.goals[key]);
                }
            });
        }
    },
    mounted: function() {
        app.api.all('goals').then(response => {
            this.goals = response
            this.loadTopGoals();
        });
    }
};
</script>

<style scoped>
</style>