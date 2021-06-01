<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a @click="onClick">Logout</a>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  methods: {
    onClick() {
      const user = auth.currentUser();

      user
        .logout()
        .then(() => {
          this.$router.push({
            name: "signin",
            params: { userLoggedOut: true },
          });
        })
        .catch((error) => {
          alert("Error:" + error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
