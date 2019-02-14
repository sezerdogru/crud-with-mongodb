import Api from '@/services/Api'

const auth = {
  headers: {'JWT ': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjMzNmQwYzI4MjdlMGY2Y2E1ZjdhZiIsImlhdCI6MTU1MDA3MzEwMCwiZXhwIjoxNTUwMDc2NzAwfQ._MLPmpWKO73Xdm9V651LW1Um3izTO7amfZS4MTo6AaM'}
}
export default {

  fetchAppointments() {
    return Api().get('appointments', auth)
  }
}
