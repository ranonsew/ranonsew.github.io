<script setup lang="ts">
const { t, availableLocales, locale } = useI18n();

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales;
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
// };
</script>

<template>
  <nav text-xl mt-6 flex justify-end px-3>
    <RouterLink icon-btn mx-2 to="/" :title="t('button.home')">
      <div i-carbon-home />
    </RouterLink>
    <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>
    <!-- <label for="langswitch" icon-btn mx-2>
      <div i-carbon-language />
    </label> -->
    <select id="langswitch" v-model="locale" icon-btn mx-2 :class="{ dark: isDark }" :title="t('button.toggle_langs')">
      <option v-for="lang in availableLocales" :key="lang">
        {{ lang }}
      </option>
    </select>
    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/ranonsew/" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
