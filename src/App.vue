<template>
  <v-app>
    <v-app-bar title="Application">
      <v-btn v-for="(route, i) in routes" :key="i" :to="route.to">{{
        route.title
      }}</v-btn>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list density="compact">
        <v-list-item
          v-for="(route, i) in routes"
          :key="i"
          :to="route.to"
          :value="route"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="route.icon"></v-icon>
          </template>

          <v-list-item-title v-text="route.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
const routes = [
  {
    title: "Home",
    icon: "mdi-home",
    to: "/",
  },
  {
    title: "Post",
    icon: "mdi-pencil",
    to: "/post",
  },
  {
    title: "About",
    icon: "mdi-account",
    to: "/about",
  },
];
</script>