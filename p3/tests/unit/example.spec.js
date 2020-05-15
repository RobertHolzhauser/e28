import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ShowGoal from '@/components/ShowGoal.vue'

describe('ShowGoal.vue', () => {
  it('shows a goal', () => {
    let goal = {
      goal: 'Unit Test Goal',
      slug: 'utg',
      benefits: 'test benefits',
      importance: 8,
      difficulty: 3
    }

    const wrapper = shallowMount(ShowGoal, {
      propsData: { goal },
      stubs: {
          RouterLink: RouterLinkStub
      }
  })

  expect(wrapper.text()).to.include(goal.goal)
  let foundGoalLink = wrapper.find('[data-test="goal-link"]').exists();
  expect(foundGoalLink).to.equal(true);
  })
})
