<template>
  <Layout>
    <main class="flex flex-col gap-y-14 md:gap-y-16">
      <HeroSection />

      <AboutMeSection />

      <ExperienceSection />

      <EducationSection />

      <SkillsSection />
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import HeroSection from '@/components/abouts/HeroSection.vue'
import AboutMeSection from '@/components/abouts/AboutMeSection.vue'
import ExperienceSection from '@/components/abouts/ExperienceSection.vue'
import EducationSection from '@/components/abouts/EducationSection.vue'
import SkillsSection from '@/components/abouts/SkillsSection.vue'
</script>
