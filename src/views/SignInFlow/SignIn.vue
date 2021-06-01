<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ-dark.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign Into Design+Code
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="email"
          placeholder="Email"
          v-model="email"
        />
        <input
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <button>Sign In</button>
      </form>
      <router-link
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        to="/recover"
        >Forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import { auth } from "@/main";
import Notification from "@/components/Notification.vue";

export default {
  name: "SignIn",
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: "",
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    }
  },
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification,
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then((response) => {
          console.log(response);
          this.$router.replace("/");
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.login {
  width: 400px;
  img {
    height: 100px;
    width: 100%;
    margin: 0 auto;
  }
}
h4 {
  margin: 0px;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  /* color: #ffffff; */
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 20px;
  height: 60px;
  width: 100%;
  padding-left: 20px;
  color: white;
  font-size: 20px;
}
button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  text-decoration: none;
}
</style>
