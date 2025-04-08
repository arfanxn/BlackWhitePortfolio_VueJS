import { SiGithub, SiInstagram, SiLinkedin, SiGmail } from '@kalimahapps/vue-icons'
import type { Component } from 'vue'

type Social = {
  name: string
  icon: Component
  uri: string
}

export const socials: readonly Social[] = Object.freeze([
  {
    name: 'Email',
    icon: SiGmail,
    uri: 'mailto:arfanforproject@gmail.com',
  },
  {
    name: 'Github',
    icon: SiGithub,
    uri: 'https://github.com/arfanxn',
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
    uri: 'https://www.instagram.com/arfanxn',
  },
  {
    name: 'Linkedin',
    icon: SiLinkedin,
    uri: 'https://www.linkedin.com/in/arfanxn/',
  },
])
