import { skillsMap, type Skill } from './skillConstants'

export type Certificate = {
  name: string
  organization: string
  url: string
  imageUrl: string | null
  skills: Skill[]
  issuedAt: Date
  expiredAt: Date | null
}

export const organizationsMap = Object.freeze({
  codepolitan: 'CODEPOLITAN',
  cyfrinUpdraft: 'Cyfrin Updraft',
  dicoding: 'Dicoding',
  duolingo: 'Duolingo',
  freeCodeCamp: 'freeCodeCamp',
  huawei: 'Huawei',
  udemy: 'Udemy',
})

export const organizations: readonly string[] = Object.values(organizationsMap)

export const certificates: readonly Certificate[] = Object.freeze([
  {
    name: 'DET - Duolingo English Test',
    organization: organizationsMap.duolingo,
    url: 'https://certs.duolingo.com/ab85c76bd71c500194e309fbaf742c5c',
    imageUrl: '/images/certificates/duolingo/duolingo-english-test.png',
    skills: [skillsMap.english],
    issuedAt: new Date('2024-01-27'),
    expiredAt: new Date('2026-01-27'),
  },
  {
    name: 'Cyfrin - Advanced Foundry',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/advanced-foundry',
    imageUrl: '/images/certificates/cyfrin-updraft/advanced-foundry.png',
    skills: [skillsMap.solidity, skillsMap.foundry],
    issuedAt: new Date('2025-01-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Assembly and Formal Verification',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/formal-verification',
    imageUrl: '/images/certificates/cyfrin-updraft/assembly-and-formal-verification.png',
    skills: [skillsMap.solidity, skillsMap.foundry],
    issuedAt: new Date('2025-01-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Curve Stableswap',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/curve-v1',
    imageUrl: '/images/certificates/cyfrin-updraft/curve-stableswap.png',
    skills: [skillsMap.solidity, skillsMap.foundry],
    issuedAt: new Date('2025-01-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Smart Contract Devops (Wallets & Post Deployments)',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/wallets',
    imageUrl: '/images/certificates/cyfrin-updraft/smart-contract-devops.png',
    skills: [skillsMap.solidity, skillsMap.foundry],
    issuedAt: new Date('2025-01-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Smart Contract Security',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/security',
    imageUrl: '/images/certificates/cyfrin-updraft/smart-contract-security.png',
    skills: [skillsMap.solidity, skillsMap.foundry],
    issuedAt: new Date('2025-01-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Uniswap V2',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/uniswap-v2',
    imageUrl: '/images/certificates/cyfrin-updraft/uniswap-v2.png',
    skills: [skillsMap.solidity, skillsMap.foundry],
    issuedAt: new Date('2025-01-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Solidity Foundry Fundamentals',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/foundry',
    imageUrl: '/images/certificates/cyfrin-updraft/foundry-101.png',
    skills: [skillsMap.solidity, skillsMap.foundry],
    issuedAt: new Date('2024-12-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Blockchain Basics',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/blockchain-basics',
    imageUrl: '/images/certificates/cyfrin-updraft/blockchain-basics.png',
    skills: [skillsMap.solidity],
    issuedAt: new Date('2024-11-15'),
    expiredAt: null,
  },
  {
    name: 'Cyfrin - Solidity Smart Contract Development',
    organization: organizationsMap.cyfrinUpdraft,
    url: 'https://updraft.cyfrin.io/courses/blockchain-basics',
    imageUrl: '/images/certificates/cyfrin-updraft/solidity-101.png',
    skills: [skillsMap.solidity],
    issuedAt: new Date('2024-11-15'),
    expiredAt: null,
  },
  {
    name: 'Imran Teli - DevOps Beginners to Advanced with Projects',
    organization: organizationsMap.udemy,
    url: 'https://www.udemy.com/certificate/UC-031f238b-cbc6-42b1-8fc6-f1ecc1b7b681/',
    imageUrl: '/images/certificates/udemy/devops-beginners-to-advanced-with-projects.png',
    skills: [skillsMap.docker],
    issuedAt: new Date('2024-09-15'),
    expiredAt: null,
  },
  {
    name: 'Huawei - Python Programming Basics',
    organization: organizationsMap.huawei,
    url: 'https://kltstaticcontent.shixizhi.huawei.com/1365189427395223554/certificate/20240718/1813853779921068034_ICTCRA202407180006381a1588b16fcd448d9df16287a8c11bee.png',
    imageUrl: '/images/certificates/huawei/python-programming-basics.png',
    skills: [skillsMap.python],
    issuedAt: new Date('2023-10-19'),
    expiredAt: null,
  },
  {
    name: 'Dicoding - Devops Basics',
    organization: organizationsMap.dicoding,
    url: 'https://www.dicoding.com/certificates/NVP7OQ17WPR0',
    imageUrl: '/images/certificates/dicoding/belajar-dasar-dasar-devops.png',
    skills: [], // TODO: add devops skills
    issuedAt: new Date('2023-05-25'),
    expiredAt: new Date('2026-05-25'),
  },
  {
    name: 'Dicoding - Computer Networking for Beginners',
    organization: organizationsMap.dicoding,
    url: 'https://www.dicoding.com/certificates/N9ZO6M128XG5',
    imageUrl: '/images/certificates/dicoding/belajar-jaringan-komputer-untuk-pemula.png',
    skills: [], // TODO: add networking skills
    issuedAt: new Date('2023-05-28'),
    expiredAt: new Date('2026-05-28'),
  },
  {
    name: 'PZN - Golang: Beginners to Expert',
    organization: organizationsMap.udemy,
    url: 'https://www.udemy.com/certificate/UC-01606029-f213-4cd1-bfbc-5eddaceaddec',
    imageUrl: '/images/certificates/udemy/pemrograman-golang-pemula-sampai-mahir.png',
    skills: [skillsMap.go],
    issuedAt: new Date('2023-01-31'),
    expiredAt: null,
  },
  {
    name: 'Swift Arcade - The Swift Arcade Professional iOS Development Course - UIKit',
    organization: organizationsMap.udemy,
    url: 'https://www.udemy.com/certificate/UC-1aaa16a0-03ac-49b8-bc31-0487eb3eb8dc',
    imageUrl:
      '/images/certificates/udemy/the-swift-arcade-professional-ios-development-course-uikit.png',
    skills: [skillsMap.swift],
    issuedAt: new Date('2023-01-08'),
    expiredAt: null,
  },
  {
    name: 'Dimmaryanto - Devops Docker: Beginner to Expert',
    organization: organizationsMap.udemy,
    url: 'https://www.udemy.com/certificate/UC-26734f12-7e55-4a3d-bfa7-44e4940f5265/',
    imageUrl: '/images/certificates/udemy/devops-docker-pemula-sampai-mahir.png',
    skills: [skillsMap.docker],
    issuedAt: new Date('2023-01-06'),
    expiredAt: null,
  },
  {
    name: 'Angela Yu - iOS & Swift - The Complete iOS App Development Bootcamp',
    organization: organizationsMap.udemy,
    url: 'https://www.udemy.com/certificate/UC-2e8fc0ec-49fb-40a1-9df6-e627acc9697b',
    imageUrl:
      '/images/certificates/udemy/ios-and-swift-the-complete-ios-app-development-bootcamp.png',
    skills: [skillsMap.swift],
    issuedAt: new Date('2022-10-12'),
    expiredAt: null,
  },
  {
    name: 'fCC - Javascript Algorithms and Data Structures',
    organization: organizationsMap.freeCodeCamp,
    url: 'https://www.freecodecamp.org/certification/arfanxn/javascript-algorithms-and-data-structures',
    imageUrl: '/images/certificates/freeCodeCamp/javascript-algorithms-and-data-structures.png',
    skills: [skillsMap.javascript],
    issuedAt: new Date('2021-07-28'),
    expiredAt: null,
  },
  {
    name: 'PZN - Git Basics',
    organization: organizationsMap.codepolitan,
    url: 'https://www.codepolitan.com/c/C8MURSC',
    imageUrl: '/images/certificates/codepolitan/git-dasar.png',
    skills: [skillsMap.git, skillsMap.github],
    issuedAt: new Date('2021-07-16'),
    expiredAt: new Date('2024-07-15'),
  },
  {
    name: 'PZN - HTTP, Client and Server',
    organization: organizationsMap.codepolitan,
    url: 'https://www.codepolitan.com/c/BHAKY3P',
    imageUrl: '/images/certificates/codepolitan/belajar-http.png',
    skills: [], // TODO: add http icon
    issuedAt: new Date('2021-07-15'),
    expiredAt: new Date('2024-07-14'),
  },
  {
    name: 'PZN - Javascript Basics',
    organization: organizationsMap.codepolitan,
    url: 'https://www.codepolitan.com/c/QSYOY5X',
    imageUrl: '/images/certificates/codepolitan/javascript-dasar.png',
    skills: [skillsMap.javascript],
    issuedAt: new Date('2021-06-25'),
    expiredAt: new Date('2024-06-24'),
  },
  {
    name: 'PZN - Javascript Object Oriented Programming',
    organization: organizationsMap.codepolitan,
    url: 'https://www.codepolitan.com/c/TSC5BMY',
    imageUrl: '/images/certificates/codepolitan/javascript-oop.png',
    skills: [skillsMap.javascript],
    issuedAt: new Date('2021-07-15'),
    expiredAt: new Date('2024-07-14'),
  },
  {
    name: 'PZN - Javascript Standard Library',
    organization: organizationsMap.codepolitan,
    url: 'https://www.codepolitan.com/c/1QOHKZM',
    imageUrl: '/images/certificates/codepolitan/javascript-standard-library.png',
    skills: [skillsMap.javascript],
    issuedAt: new Date('2021-06-25'),
    expiredAt: new Date('2024-06-24'),
  },
])
