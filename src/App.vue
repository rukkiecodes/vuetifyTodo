<template>
  <v-container class="d-flex justify-center align-center">
    <v-card width="400" max-width="100%" flat>
      <v-card-title class="text-center"> Add Todo </v-card-title>
      <v-toolbar class="rounded-lg px-2" color="blue" flat>
        <v-text-field
          label="Add todo"
          density="compact"
          variant="plain"
          prepend-inner-icon="mdi-plus-circle"
          clearable
          hide-details
          v-model="newTodo"
          @keypress.enter="addTodo"
        />
        <v-btn
          class="text-capitalize bg-blue-darken-4 ml-2 text-body-2"
          height="44"
          flat
          @click="addTodo"
          >Add Todo</v-btn
        >
      </v-toolbar>

      <v-card-text class="px-1">
        <v-slide-y-transition group tag="v-list">
          <v-card
            v-for="(todo, i) in todos"
            :key="i"
            elevation="2"
            class="rounded-lg mb-4"
          >
            <v-card-title class="d-flex justify-space-between align-center">
              {{ todo }}
              <v-btn @click="removeTodo(i)" icon size="small" flat>
                <v-icon color="red">mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-slide-y-transition>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const todos = ref([]);
const newTodo = ref("");

const addTodo = () => {
  if(newTodo.value == '') return //check if input is empty
  todos.value.push(newTodo.value);
  newTodo.value = "";
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>
