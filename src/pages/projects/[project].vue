<script setup lang="ts">
const props = defineProps<{
  project: string
  link: string
  desc: string
  icon: string
}>();
</script>

<template>
  <a
    class="item flex relative items-center"
    :class="props.link ? '' : 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4'"
    :title="props.project"
    :href="props.link"
    target="_blank"
  >
    <div :class="props.icon" />
    <div flex-auto>
      <div text-normal>
        {{ props.project }}
      </div>
      <div text-sm opacity-50 font-normal>
        {{ props.desc }}
      </div>
    </div>
  </a>
</template>

<route lang="yaml">
name: project-individual
props: true
meta:
  layout: default
</route>
