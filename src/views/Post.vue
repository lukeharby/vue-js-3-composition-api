<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import useResource from '../composables/useResource.js';
const route = useRoute();

const { item: post, fetchItem: fetchPost } = useResource('posts');
const { item: user, fetchItem: fetchUser } = useResource('users');

fetchPost(route.params.id);

watch(
  () => ({...post.value}),
  () => fetchUser(post.value.userId)
);

</script>
