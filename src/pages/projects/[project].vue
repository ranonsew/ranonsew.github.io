<script setup lang="ts">
const props = defineProps<{
  // project: string
  // link: string
  // desc: string
  // icon: string
  project: { name: string; link: string; desc: string; icon: string }
}>();
const route = useRoute();
</script>

<template>
  {{ route.params.project }}
  <a
    class="item flex relative items-center"
    :class="route.params.link ? '' : 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4'"
    :title="props.project.name"
    :href="props.project.link"
    target="_blank"
  >
    <div v-if="route.params.icon">
      <span :class="route.params.icon" />
    </div>
    <div flex-auto>
      <div text-normal>
        {{ props.project.name }}
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
