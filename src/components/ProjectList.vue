<!-- listing out projects in pages/projects/index.md -->
<script setup lang="ts">
const props = defineProps<{ projects: Record<string, any[]> }>();
const router = useRouter();
</script>

<template>
  <div v-for="(project, key) in props.projects" :key="key">
    <h4 mt-8 font-bold>
      {{ key }}
    </h4>
    <div class="project-grid py-2 gap-2">
      <button
        v-for="(item, index) in project"
        :key="index"
        class="item flex relative items-center"
        :class="item.link ? '' : 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4'"
        :title="item.name"
        @click="router.push({ name: `project`, params: { project: item.name, link: item.link, desc: item.desc, icon: item.icon } })"
      >
        <div v-if="item.icon">
          <span :class="item.icon" />
        </div>
        <div flex-auto>
          <div text-normal>
            {{ item.name }}
          </div>
          <div text-sm opacity-50 font-normal>
            {{ item.desc }}
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.project-grid button.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}
.project-grid button.item:hover {
  background: #88888808;
}
</style>
