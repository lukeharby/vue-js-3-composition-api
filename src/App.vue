<template>
  <nav class="p-5 bg-green-400 text-white mb-10">
    <router-link :to="{ name: 'Home' }">Fake Blog</router-link>
  </nav>
  <div class="container">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <suspense>
          <template #default>
            <component :is="Component"></component>
          </template>
          <template #fallback>
            Loading...
          </template>
        </suspense>
      </template>
    </router-view>
  </div>
</template>

<script setup></script>
<style lang="css">
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
