import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/Home.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Home.vue', () => {
  it('does input exist', () => {
    const wrapper = shallowMount(Home, {
      data () {
        return { showInput: true }
      }
    })
    expect(wrapper.find('input').isVisible()).toBe(true)
  })
})
