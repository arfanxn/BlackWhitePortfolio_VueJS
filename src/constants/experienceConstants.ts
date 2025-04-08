type Experience = {
  organization: string
  role: string
  url: string
  startedAt: Date
  finishedAt: Date
}

export const experiences: readonly Experience[] = Object.freeze([
  {
    organization: 'ExcloLab',
    role: 'Backend Developer',
    url: 'https://exclolab.com',
    startedAt: new Date('2022-06-15'),
    finishedAt: new Date('2022-12-15'),
  },
])
