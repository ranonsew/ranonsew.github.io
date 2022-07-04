<script setup lang="ts">
const props = defineProps<{
  project: string
  link: string
  desc: string
  icon: string
}>();
const route = useRoute();
</script>

<template>
  {{ route }}
  <a
    class="item flex relative items-center"
    :class="route.params.link ? '' : 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4'"
    :title="(route.params.project as string)"
    :href="(route.params.link as string)"
    target="_blank"
  >
    <div :class="route.params.icon" />
    <div flex-auto>
      <div text-normal>
        {{ route.params.project }}
      </div>
      <div text-sm opacity-50 font-normal>
        {{ route.params.desc }}
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
