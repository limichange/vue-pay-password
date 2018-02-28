import PayPassword from './PayPassword'

PayPassword.install = function (Vue) {
  Vue.component(PayPassword.name, PayPassword)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PayPassword)
}

export default PayPassword
