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
  {{ props }}
  <a
    class="item flex relative items-center"
    :class="route.params.link ? '' : 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4'"
    :title="props.project"
    :href="route.params.link as string"
    target="_blank"
  >
    <div v-if="route.params.icon">
      <span :class="route.params.icon" />
    </div>
    <div flex-auto>
      <div text-normal>
        {{ props.project }}
      </div>
      <div text-sm opacity-50 font-normal>
        {{ route.params.desc }}
      </div>
    </div>
  </a>
</template>

