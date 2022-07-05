<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-home inline-block />
    </div>
    <p>
      Main home page thing
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
