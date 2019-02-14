import Api from '@/services/Api'

const config = {
  headers: {
    'x-access-token': localStorage.token,
    'Content-type': 'application/json'
  }
}
export default {

  fetchAppointments() {
    return Api().get('appointments', config)
  },
  addAppointment(params) {
    return Api().post('appointments', params, config)
  },
  deleteAppointment(id) {
    return Api().delete('appointments/' + id, config)
  }
}
