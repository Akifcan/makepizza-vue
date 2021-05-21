import { mount } from '@vue/test-utils'
import AppPrice from '@/components/AppPrice'
import store from '@/store'

describe('AppPrice.vue', () => {
  const wrapper = mount(AppPrice, {
    global: {
      plugins: [store]
    }
  })
  it('should be equal to 20₺', () => {
    const priceElement = wrapper.get('.price')
    expect(priceElement.text()).toEqual('20₺')
  })
  it('should push to basket', () => {
    const addToBasketButton = wrapper.get('button')
    addToBasketButton.trigger('click')
      .then(_ => {
        expect(store.state.basket.length > 0).toEqual(true)
      })
  })
  it('total price should be number', () => {
    expect(typeof store.getters.totalPrice).toBe('number')
  })

})
