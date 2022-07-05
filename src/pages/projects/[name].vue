<script setup lang="ts">
// like interface Project under ./types.ts, but can't import due to the way vue works
const props = defineProps<{
  name: string
  link: string
  desc: string
  icon: string
}>();

// useStorage composable (@vueuse/core)
const curr_project = useStorage("project-current", { ...props });
// if storage name !== current prop name, switch
if (props.name !== curr_project.value.name) // props name always available between switching thanks to dynamic route name
  curr_project.value = { ...props };
</script>

<template>
  <a
    class="item flex relative items-center"
    :class="curr_project.link ? '' : 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4'"
    :title="curr_project.name"
    :href="curr_project.link"
    target="_blank"
  >
    <div :class="curr_project.icon" />
    <div flex-auto>
      <div text-normal>
        {{ curr_project.name }}
      </div>
      <div text-sm opacity-50 font-normal>
        {{ curr_project.desc }}
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
