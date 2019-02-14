import Api from '@/services/Api'

export default {

  register(params) {
    return Api().post('users',params)
  },
  login(params) {
    return Api().post('users/login', params);
  }
}
