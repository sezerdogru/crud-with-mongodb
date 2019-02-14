<template>
  <div class="appointments">
    <h1>Add Appointment</h1>
    <form class="form-signin" @submit.prevent="addAppointment">
      <div class="form">
        <div>
          <input type="text" name="customer_name" placeholder="Customer name" v-model="customer_name" required>
        </div>
        <div>
          <input type="text" name="customer_surname" placeholder="Customer surname" v-model="customer_surname" required>
        </div>
        <div>
          <input type="email" name="customer_email" placeholder="Customer email" v-model="customer_email" required>
        </div>
        <div>
          <input type="number" name="customer_phone" placeholder="Customer phone" v-model="customer_phone" required>
        </div>
        <div>
          <input type="datetime" name="start_time" placeholder="Start time" v-model="start_time" required>
        </div>
        <div>
          <input type="number" name="distance" placeholder="distance" v-model="distance" required>
        </div>
        <div>
          <button class="app_btn">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import AppointmentService from '@/services/AppointmentService'

  export default {
    name: 'NewAppointment',
    data() {
      return {
        customer_name: 'sdf',
        customer_surname: 'sdfds',
        customer_email: 'df@df.df',
        customer_phone: 1212,
        start_time: '2014-05-11',
        distance: 334
      }
    },
    methods: {
      async addAppointment() {
        const {customer_name, customer_surname, customer_email, customer_phone, start_time, distance} = this
        await AppointmentService.addAppointment({
          customer_name, customer_surname, customer_email, customer_phone, start_time, distance
        })
          .then(res => this.$router.push({name: 'Appointments'}))
          .catch(err => console.log(err))
      }
    }
  }
</script>
<style type="text/css">
  .form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
  }

  .form div {
    margin: 20px;
  }

  .app_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
</style>
