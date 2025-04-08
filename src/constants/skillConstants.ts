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
} from '@kalimahapps/vue-icons'

type SkillItem = {
  name: string
  icon: Component
  iconClass?: string
}

type SkillCategory = {
  name: string
  skills: SkillItem[]
}

export const skillCategories: readonly SkillCategory[] = Object.freeze([
  {
    name: 'Linguistics',
    skills: [
      { name: 'Indonesian', icon: CoFlagId },
      { name: 'English', icon: CoFlagGb },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Swift', icon: SiSwift },
      { name: 'Go', icon: SiGo },
      { name: 'PHP', icon: SiPhp },
      { name: 'Python', icon: SiPython },
      { name: 'Solidity', icon: SiSolidity },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'Ethers', icon: SiEthers },
      { name: 'GoFiber', icon: LuBarChart2, iconClass: '-rotate-90' },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Foundry', icon: SiCurseforge },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Notion', icon: SiNotion },
      { name: 'Git', icon: SiGit },
      { name: 'Github', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Mysql', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
    ],
  },
])
