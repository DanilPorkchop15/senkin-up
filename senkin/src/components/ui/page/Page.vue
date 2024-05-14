<script setup>
</script>

<template>
  <div class="page">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<style scoped>
  .page {
    min-height: 86dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100dvw;
  }
  .content {
    margin-block: 3rem;
    min-width: 70dvw;
  }
  @media (max-width: 768px) {
    .content {
      min-width: 90dvw;
    }
  }
</style>