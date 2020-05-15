import Vue from 'vue'
import Vuex from 'vuex'

import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        goalCount: 0,
        goals: [],
    },
    // update data in the store.
    mutations: {
        setGoalCount(state, payload) {
            state.goalCount = payload;
        },
        updateGoalCount(state, payload) {
            state.goalCount += payload;
        },
        updateGoals(state, payload) {
            state.goals = payload;
        },
        setGoals(state, payload) {
            state.goals = payload;
        },
        addGoal(state, payload) {
            state.goals.push(payload);
        }
    },
     // change store
     actions: {
        setGoals(context) {
            app.api.all('goals').then(response => {
                context.commit('updateGoals', response);
            });
        },
        fetchGoalCount(context) {
            let myCount = this.state.goals.length;   
            context.commit('setGoalCount', myCount);
        }
       
    },

    // get data from store.
    getters: {
        getGoalBySlug(state) {
            return function (slug) {
                for (let key of Object.keys(state.goals)) {
                    if (state.goals[key].slug == slug) {
                        return state.goals[key];
                    }
                }
            }
        },

        getGoalCount(state) {
            return function () {
                let myCount = state.goals.length;           
                return myCount;
            }
        },
        
        getAllGoals(state) {
            return state.goals;
        }
    }
})