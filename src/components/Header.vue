<template>
  <v-app-bar color="gray accent-4" dark>
    <v-app-bar-nav-icon>BBS</v-app-bar-nav-icon>

    <div class="flex-grow-1"></div>

    <Icon :type="magnify" />
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="route in routes" :key="route.name">
          <v-list-item-title v-if="!route.isNeedLogin">
            <router-link :to="route.link">{{ route.name }}</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "Header",
  components: {
    Icon,
  },
  data() {
    return {
      magnify: "mdi-magnify",
      routes: [
        {
          name: "ログイン",
          link: "/login",
          isNeedLogin: false,
        },
        {
          name: "登録",
          link: "/register",
          isNeedLogin: false,
        },
      ],
    };
  },
};
</script>
