<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Register</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required
             autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      <br/>
      <a href="/login">Login</a>
    </form>
  </div>
</template>

<script>
  import AuthService from '@/services/AuthService'

  export default {
    name: 'register',
    data() {
      return {
        email: '',
        password: '',
        error: false
      }
    },
    updated() {
      if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || '/appointments')
      }
    },
    methods: {
      register() {
        const user = {email: this.email, password: this.password}
        AuthService.register(user)
          .then(response => {
            response ? this.success(user) : this.failed()
          })
          .catch(() => this.failed())
      },
      success(resp) {
        AuthService.login(resp)
          .then(response => {
            if (!response.data.data.token) {
              this.failed()
              return
            }
            this.error = false
            localStorage.token = response.data.data.token
            this.$router.replace(this.$route.query.redirect || '/appointments')
          })
          .catch(() => this.failed("An error has occured when login"))
      },
      failed(err = null) {
        this.error = err != null ? err : 'Signup failed!'
        delete localStorage.token
      }
    }
  }
</script>

<style lang="css">
  body {
    background: #605B56;
  }

  .login-wrapper {
    background: #fff;
    width: 70%;
    margin: 12% auto;
  }

  .form-signin {
    max-width: 330px;
    padding: 10% 15px;
    margin: 0 auto;
  }

  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }

  .form-signin .checkbox {
    font-weight: normal;
  }

  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
