<template>
  <section class="space-y-6">
    <!-- Profile image section -->
    <!-- <figure class="flex justify-center items-center">
      <div class="relative max-w-3/4 md:max-w-1/2 overflow-hidden rounded-lg group">
        <img
          class="size-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          src="/profile.jpg"
          alt="Portrait of Arfan"
        />
        <div
          class="absolute inset-0 bg-neutral-800 opacity-50 transition-opacity duration-300 hover:opacity-0"
          aria-hidden="true"
          role="presentation"
        ></div>
      </div>
    </figure> -->

    <!-- Profile image section -->
    <figure class="flex justify-center items-center">
      <div class="max-w-3/4 md:max-w-1/2 overflow-hidden rounded-lg">
        <img
          class="size-full object-cover transform hover:scale-200 hover:translate-y-30 md:hover:translate-y-40 hover:-translate-x-10 transition-transform duration-500"
          src="/profile.jpg"
          alt="Portrait of Arfan"
        />
      </div>
    </figure>

    <!-- About heading -->
    <h2
      id="about-heading"
      class="font-firacode text-base md:text-lg font-semibold uppercase text-neutral-200"
    >
      About me
    </h2>

    <!-- Biography content -->
    <!-- TODO: update biography -->
    <article class="font-firacode break-words font-light flex flex-col gap-y-4 text-neutral-300">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis necessitatibus, quos
        veritatis error aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore impedit vel
        nulla tempore eveniet doloremque, ipsum aspernatur cupiditate culpa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aspernatur, quia
        provident dolor eaque exercitationem minus laboriosam error? Hic amet sequi qui obcaecati
        repudiandae soluta dolor pariatur corporis rerum alias?
      </p>
    </article>

    <!-- Resume download -->
    <!-- TODO: implement download -->
    <div class="mt-4">
      <a
        href="/path-to-resume.pdf"
        download="YourName_Resume.pdf"
        class="font-firacode font-semibold bg-white text-black rounded-md px-4 py-2 shadow-md hover:bg-neutral-300 transition-colors duration-200 inline-flex items-center gap-x-2"
        role="button"
        aria-label="Download resume (PDF)"
      >
        <span>Resume.pdf</span>
        <FaDownload />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FaDownload } from '@kalimahapps/vue-icons'
</script>
