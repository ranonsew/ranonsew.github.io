<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-home inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
