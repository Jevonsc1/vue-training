<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-1"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
            src="@/assets/notion.png"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Notion
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            All-in-one workspace
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-2"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
            src="@/assets/figma.png"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Figma
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Collaborative design tool.
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-3"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
            src="@/assets/contentful.png"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Contentful
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Content management system.
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-4"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
            src="@/assets/dropbox.png"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Dropbox
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Storage space in the cloud.
          </p>
        </a>
      </transition>
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-5"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <img
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
            src="@/assets/slack.png"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Messaging app for all team communication.
          </p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 25px;
}
h2 {
  @include heading-2;
}
h3 {
  @include heading-3;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}
.card {
  max-width: 300px;
  height: 400px;
  width: 100%;
  margin: 20px;
  border-radius: 10px;
  text-align: center;
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
}
.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  width: 100%;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}
</style>
