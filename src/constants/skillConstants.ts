import type { Component } from 'vue'
import {
  CoFlagGb,
  CoFlagId,
  LuBarChart2,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiEthers,
  SiCurseforge,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNginx,
  SiNotion,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSolidity,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiLumen,
  SiInertia,
} from '@kalimahapps/vue-icons'

export type Skill = {
  name: string
  icon: Component
  iconClass?: string
}

export type SkillCategory = {
  name: string
  skills: Skill[]
}

export const indonesian = { name: 'Indonesian', icon: CoFlagId }
export const english = { name: 'English', icon: CoFlagGb }
export const html = { name: 'HTML', icon: SiHtml5 }
export const css = { name: 'CSS', icon: SiCss3 }
export const javascript = { name: 'JavaScript', icon: SiJavascript }
export const typescript = { name: 'TypeScript', icon: SiTypescript }
export const swift = { name: 'Swift', icon: SiSwift }
export const go = { name: 'Go', icon: SiGo }
export const php = { name: 'PHP', icon: SiPhp }
export const python = { name: 'Python', icon: SiPython }
export const solidity = { name: 'Solidity', icon: SiSolidity }
export const bootstrap = { name: 'Bootstrap', icon: SiBootstrap }
export const tailwind = { name: 'Tailwind', icon: SiTailwindcss }
export const vue = { name: 'Vue', icon: SiVuedotjs }
export const ethers = { name: 'Ethers', icon: SiEthers }
export const gofiber = { name: 'GoFiber', icon: LuBarChart2, iconClass: '-rotate-90' }
export const laravel = { name: 'Laravel', icon: SiLaravel }
export const lumen = { name: 'Lumen', icon: SiLumen }
export const inertia = { name: 'Inertia', icon: SiInertia }
export const foundry = { name: 'Foundry', icon: SiCurseforge }
export const notion = { name: 'Notion', icon: SiNotion }
export const git = { name: 'Git', icon: SiGit }
export const github = { name: 'Github', icon: SiGithub }
export const docker = { name: 'Docker', icon: SiDocker }
export const nginx = { name: 'Nginx', icon: SiNginx }
export const mysql = { name: 'MySQL', icon: SiMysql }
export const postgresql = { name: 'PostgreSQL', icon: SiPostgresql }
export const redis = { name: 'Redis', icon: SiRedis }

export const skillsMap = Object.freeze({
  indonesian,
  english,
  html,
  css,
  javascript,
  typescript,
  swift,
  go,
  php,
  python,
  solidity,
  bootstrap,
  tailwind,
  vue,
  ethers,
  gofiber,
  laravel,
  lumen,
  inertia,
  foundry,
  notion,
  git,
  github,
  docker,
  nginx,
  mysql,
  postgresql,
  redis,
})

export const skills: readonly Skill[] = Object.freeze(Object.values(skillsMap))

export const skillCategories: readonly SkillCategory[] = Object.freeze([
  {
    name: 'Linguistics',
    skills: [skillsMap.indonesian, skillsMap.english],
  },
  {
    name: 'Languages',
    skills: [
      skillsMap.html,
      skillsMap.css,
      skillsMap.javascript,
      skillsMap.typescript,
      skillsMap.swift,
      skillsMap.go,
      skillsMap.php,
      skillsMap.python,
      skillsMap.solidity,
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      skillsMap.bootstrap,
      skillsMap.tailwind,
      skillsMap.vue,
      skillsMap.ethers,
      skillsMap.gofiber,
      skillsMap.laravel,
      skillsMap.lumen,
      skillsMap.inertia,
      skillsMap.foundry,
    ],
  },
  {
    name: 'Tools',
    skills: [
      skillsMap.notion,
      skillsMap.git,
      skillsMap.github,
      skillsMap.docker,
      skillsMap.nginx,
      skillsMap.mysql,
      skillsMap.postgresql,
      skillsMap.redis,
    ],
  },
])
