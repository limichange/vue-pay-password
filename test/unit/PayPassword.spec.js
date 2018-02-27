import { shallow } from '@vue/test-utils'
import PayPassword from '../../src/PayPassword.vue'
import { createRenderer } from 'vue-server-renderer'

describe('PayPassword.vue', () => {
  it('default render', () => {
    const wrapper = shallow(PayPassword)
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('set length as 10', () => {
    const wrapper = shallow(PayPassword, {
      propsData: {
        length: 10
      }
    })

    expect(wrapper.findAll('i')).toHaveLength(10)
  })

  it('set value as "123456"', () => {
    const value = '123456'
    const wrapper = shallow(PayPassword, {
      propsData: {
        value
      }
    })

    expect(wrapper.vm.val).toBe(value)
  })

  it('clear value', () => {
    const value = '123456'
    const wrapper = shallow(PayPassword, {
      propsData: {
        value
      }
    })

    wrapper.vm.clear()
    expect(wrapper.vm.val).toBe('')
  })
})
