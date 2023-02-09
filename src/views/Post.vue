<template>
  <v-container>
    <v-card width="500" max-width="100%" class="mx-auto" flat>
      <v-toolbar rounded="lg" color="primary" class="px-5">
        <v-text-field
          v-model="post"
          @keypress.enter="addPost"
          hide-details
          variant="plain"
          label="Add new post"
          placeholder="What is on your mind"
        />
      </v-toolbar>

      <v-card v-for="(post, i) in posts" :key="i" class="mb-4">
        <v-card-title class="text-h5">Post {{ i + 1 }}</v-card-title>
        <v-card-text class="text-body-2">{{ post }} </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn variant="text" class="text-capitalize">Like</v-btn>
          <v-btn variant="text" class="text-capitalize">Share</v-btn>

          <v-spacer />
          <v-btn
            @click="deletePost(i)"
            color="red"
            variant="text"
            class="text-capitalize"
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([]);
const post = ref("");

const addPost = () => {
  if (!post.value) return;
  posts.value.push(post.value);
  post.value = "";
};

const deletePost = (index) => {
  posts.value.splice(index, 1);
};
</script>
