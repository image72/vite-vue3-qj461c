<template>
  <div class="home">
    <h1>Home</h1>
    <HelloWorld msg="Hi" />
    <Counter v-model:count="count" />
    <hr />
    <pre>state: {{ $store.state }}</pre>
    <pre>getters: {{ $store.getters }}</pre>
    <div class="hstack gap-3">
      <button
        type="button"
        class="btn primary"
        @click="$store.commit('increment')"
      >
        increment mutation
      </button>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from '/@/components/HelloWorld.vue';
import Counter from '/@/components/Counter.vue';

let count = $ref(0);
</script>

<style lang="scss" scoped></style>
