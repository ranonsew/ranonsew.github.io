<!--
  need to rethink how things will be done when it comes to displaying the projects like this
  since on reload, the parameters do not all go over
-->
<script setup lang="ts">
import { type Project } from "../pages/projects/types";
const props = defineProps<{ projects: Record<string, any[]> }>();
const router = useRouter();
// turns out the solution was to move the thing out into its own function?
const go = ({ name, link, desc, icon }: Project) => router.push({ name: "project-individual", params: { name, link, desc, icon } });
// const go2 = () => router.push({ name: "project-individual", params: { project: 1, link: 2, desc: 3, icon: "i-carbon-campsite" } });
</script>

<template>
  <div v-for="(project, key, index) in props.projects" :key="index">
    <h4 mt-8 font-bold>
      {{ key }}
    </h4>
    <div class="project-grid py-2 gap-2">
      <button
        v-for="(item, idx) in project"
        :key="idx"
        class="item flex relative items-center"
        :class="item.link ? '' : 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4'"
        :title="item.name"
        @click="go(item)"
      >
        <div v-if="item.icon">
          <span :class="item.icon" />
        </div>
        <div flex-auto>
          <div text-normal>
            {{ item.name }}
          </div>
          <div max-w-xs truncate text-sm opacity-50 font-normal>
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
