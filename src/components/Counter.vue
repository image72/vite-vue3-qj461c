<template>
  <div class="counter d-inline-block">
    <button
      type="button"
      class="btn danger"
      @click="$emit('update:count', count - 1)"
    >
      -
    </button>
    <span class="mx-3">{{ count }}</span>
    <span class="mx-3">{{ doubleCount }}</span>
    <button
      type="button"
      class="btn secondary"
      @click="$emit('update:count', count + 1)"
    >
      +
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
});
defineEmits({
  'update:count': null
});
const doubleCount = $computed(() => props.count * 2);
</script>

<style lang="scss" scoped>
.counter {
  span,
  button {
    vertical-align: middle;
  }
}
</style>
