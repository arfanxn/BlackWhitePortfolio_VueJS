<template>
  <section class="space-y-6">
    <div class="flex justify-center items-center">
      <AImage
        v-motion-slide-visible-once-left
        :duration="300"
        :delay="300"
        containerClass="max-w-3/4 md:max-w-1/2 overflow-hidden rounded-md"
        class="size-full object-cover"
        src="/profile.jpg"
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
    <!-- TODO: update biography -->
    <article class="font-firacode break-words font-light flex flex-col gap-y-4 text-neutral-300">
      <p v-motion-fade-visible-once :duration="300" :delay="300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis necessitatibus, quos
        veritatis error aspernatur.
      </p>
      <p v-motion-fade-visible-once :duration="300" :delay="300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore impedit vel
        nulla tempore eveniet doloremque, ipsum aspernatur cupiditate culpa.
      </p>
      <p v-motion-fade-visible-once :duration="300" :delay="300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aspernatur, quia
        provident dolor eaque exercitationem minus laboriosam error? Hic amet sequi qui obcaecati
        repudiandae soluta dolor pariatur corporis rerum alias?
      </p>
    </article>

    <!-- Resume download -->
    <!-- TODO: implement download -->
    <div class="mt-4">
      <a
        v-motion-slide-visible-once-left
        :duration="300"
        :delay="300"
        href="/path-to-resume.pdf"
        download="YourName_Resume.pdf"
      >
        <AButtonIconed
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
</script>
