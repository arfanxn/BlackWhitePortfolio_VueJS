import {
  certificates as origin_certificates,
  type Certificate,
} from '@/constants/certificateConstants'
import type { Skill } from '@/constants/skillConstants'
import { like } from '@/utils/stringUtils'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useCertificateStore = defineStore('certificate', () => {
  // ==========================================================================
  //                                Internals
  // ==========================================================================
  type Sort = {
    by: 'issuedAt' | 'expiredAt'
    order: 'asc' | 'desc'
  }
  type CertificateQuery = {
    filters: {
      skill?: Skill
      organization?: string
    }
    sorts: Sort[]
    keyword?: string
  }

  // ==========================================================================
  //                            Internal functions
  // ==========================================================================
  //

  // ==========================================================================
  //                                State
  // ==========================================================================
  const certificates = ref<Certificate[]>(origin_certificates.slice())
  const certificateQuery = reactive<CertificateQuery>({
    filters: {
      skill: undefined,
      organization: undefined,
    },
    sorts: [],
    keyword: undefined,
  })

  // ==========================================================================
  //                                Getters
  // ==========================================================================
  //

  // ==========================================================================
  //                                Actions
  // ==========================================================================

  const queryCertificates = () => {
    const query = certificateQuery

    certificates.value = origin_certificates
      .slice()
      .filter((certificate) =>
        query.keyword ? like(`%${query.keyword}%`, certificate.name) : true,
      )
      .filter((certificate) =>
        query.filters.skill
          ? certificate.skills.some((skill) => skill.name === query.filters.skill!.name)
          : true,
      )
      .filter((certificate) =>
        query.filters.organization ? certificate.organization === query.filters.organization : true,
      )
      .sort((a, b) => {
        for (const sort of query.sorts) {
          if (sort.by === 'issuedAt') {
            return sort.order === 'asc'
              ? a.issuedAt.getTime() - b.issuedAt.getTime()
              : b.issuedAt.getTime() - a.issuedAt.getTime()
          } else if (sort.by === 'expiredAt') {
            return sort.order === 'asc'
              ? a.expiredAt!.getTime() - b.expiredAt!.getTime()
              : b.expiredAt!.getTime() - a.expiredAt!.getTime()
          }
        }
        return 0
      })
  }

  // ==========================================================================
  //                              Initializations
  // ==========================================================================
  //

  return {
    // ============================== State variables ==============================
    certificates,
    certificateQuery,
    // ================================= Getters ===================================
    //
    // ================================= Methods ===================================
    queryCertificates,
  }
})
