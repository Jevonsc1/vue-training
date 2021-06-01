<template>
  <router-view />
</template>

<script>
import "animate.css";

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  },
};
</script>

<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
body {
  background: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $system-font-family;
  /* text-align: center; */
  color: $white;
}

/* Theme */
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}
.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
