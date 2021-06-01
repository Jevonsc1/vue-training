<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
    <div v-show="show" class="bubble">
      <div class="message">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  border-radius: 6px;
  background-color: $blue;
  padding: 5px 10px;
  position: absolute;
  top: 10%;
}
.message {
  @include medium-text;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
