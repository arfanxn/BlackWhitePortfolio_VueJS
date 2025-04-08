type Education = {
  school: string
  field: string
  url: string
  startedAt: Date
  finishedAt: Date
}

export const educations: readonly Education[] = Object.freeze([
  {
    school: 'Politeknik Harapan Bersama',
    field: 'Information Technology',
    url: 'https://poltekharber.ac.id',
    startedAt: new Date('2022-09-15'),
    finishedAt: new Date('2026-10-15'),
  },
  {
    school: 'SMK Harapan Bersama',
    url: 'https://www.instagram.com/smkharber.tegal',
    field: 'Computer Network Engineering',
    startedAt: new Date('2019-08-15'),
    finishedAt: new Date('2022-06-15'),
  },
])
