<template>
    <div id='top'>
        <h1>Top Evidence</h1>
        <ul class='cleanList'>
            <li v-for='goal in topEvidence' :key='goal.slug'>{{ goal.evidence }}</li>
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
            topEvidence: []
        };
    },
    methods: {
        loadTopEvidence: function() {
            // Loop through goals
            Object.keys(this.goals).map(key => {
                // Check whether this goal has evidence defined
                if (
                    this.goals[key].evidence
                ) {
                    // Add to topEvidence array
                    this.topEvidence.push(this.goals[key]);
                }
            });
        }
    },
    mounted: function() {
        app.api.all('goals').then(response => {
            this.goals = response
            this.loadTopEvidence();
        });
    }
};
</script>

<style scoped>
</style>