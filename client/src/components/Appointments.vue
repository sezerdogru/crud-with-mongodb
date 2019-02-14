<template>
  <div class="appointments">
    <h1>Appointments</h1>
    <div v-if="appointments.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewAppointment' }" class="">Add Appointment</router-link>
      </div>
      <table>
        <tr>
          <td>Name surname</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Start time</td>
          <td>Distance</td>
          <td>Quit time</td>
          <td>Arrive time</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="appointment in appointments">
          <td>{{ appointment.customer_name }} {{appointment.customer_surname}}</td>
          <td>{{ appointment.customer_email }}</td>
          <td>{{ appointment.customer_phone }}</td>
          <td>{{ appointment.start_time }}</td>
          <td>{{ appointment.start_time }}</td>
          <td>{{ appointment.distance }}</td>
          <td>{{ appointment.distance }}</td>
          <td align="center">
           <!-- <router-link v-bind:to="{ name: 'EditAppointment', params: { id: appointment.id } }">Edit</router-link>
            |-->
            <a href="" @click.prevent="deleteAppointment(appointment.id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no appointments.. Lets add one now <br/><br/>
      <router-link v-bind:to="{ name: 'NewAppointment' }" class="add_link">Add Appointment</router-link>
    </div>
  </div>
</template>
<script>
  import AppointmentsService from '@/services/AppointmentService'

  export default {
    name: 'appointments',
    data() {
      return {
        appointments: []
      }
    },
    mounted() {
      this.getAppointments()
    },
    methods: {
      async getAppointments() {
        await AppointmentsService.fetchAppointments()
          .then(res => {
            this.appointments = res.data.data;
          })
          .catch(err => console.log(err))
      },
      async deleteAppointment(id) {
        await AppointmentsService.deleteAppointment(id)
          .then(res => {
            if (res.data.status) {
              console.log(res.data.message)
              window.location.reload()//this.$router.push({name: 'Appointments'})
            }
          })
          .catch(er => console.log(er))
      }
    }
  }
</script>
<style type="text/css">
  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  table th, table tr {
    text-align: left;
  }

  table thead {
    background: #f2f2f2;
  }

  table tr td {
    padding: 10px;
  }

  table tr:nth-child(odd) {
    background: #f2f2f2;
  }

  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }

  a {
    color: #4d7ef7;
    text-decoration: none;
  }

  a.add_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>
