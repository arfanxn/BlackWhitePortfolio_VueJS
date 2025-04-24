<template>
  <section class="space-y-6">
    <div class="flex justify-center items-center">
      <AImage
        v-motion-slide-visible-once-left
        :duration="500"
        :delay="300"
        figureClass="max-w-3/4 md:max-w-1/2 overflow-hidden rounded-md"
        imgClass="aspect-square object-cover"
        src="/profile.webp"
        alt="Portrait of Arfan"
      />
    </div>

    <!-- About heading -->
    <header v-motion-fade-visible-once :duration="300" :delay="300">
      <h2 class="font-firacode text-base md:text-lg font-semibold uppercase text-neutral-200">
        About me
      </h2>
    </header>

    <!-- Biography content -->
    <article
      v-html="fullBiography"
      v-motion-slide-visible-once-left
      :duration="500"
      :delay="300"
      class="font-firacode break-words font-light text-neutral-300 space-y-2 md:space-y-4 leading-relaxed"
    ></article>

    <!-- Resume download -->
    <!-- TODO: implement download -->
    <div>
      <a href="/path-to-resume.pdf" download="YourName_Resume.pdf">
        <AButtonIconed
          v-motion-slide-visible-once-left
          :duration="500"
          :delay="300"
          class="font-semibold bg-white text-black hover:bg-neutral-300 transition-colors"
          label="Resume.pdf"
          :icon="LuDownload"
          iconClass="text-xl"
        />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LuDownload } from '@kalimahapps/vue-icons'
import AButtonIconed from '@/components/AButtonIconed.vue'
import AImage from '@/components/AImage.vue'

import { fullBiography } from '@/constants/aboutConstants'
</script>
