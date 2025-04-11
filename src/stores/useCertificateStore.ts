import {
  certificates as origin_certificates,
  type Certificate,
} from '@/constants/certificateConstants'
import type { Skill } from '@/constants/skillConstants'
import { like } from '@/utils/stringUtils'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCertificateStore = defineStore('certificate', () => {
  // ==========================================================================
  //                            Internal functions
  // ==========================================================================
  //

  // ==========================================================================
  //                                State
  // ==========================================================================
  const certificates = ref<Certificate[]>(origin_certificates.slice())
  const keyword = ref<string | undefined>(undefined)
  const skillFilter = ref<Skill | undefined>(undefined)
  const organizationFilter = ref<string | undefined>(undefined)

  // ==========================================================================
  //                                Getters
  // ==========================================================================
  //

  // ==========================================================================
  //                                Actions
  // ==========================================================================

  const filter = () => {
    certificates.value = origin_certificates
      .slice()
      .filter((certificate) =>
        keyword.value ? like(`%${keyword.value}%`, certificate.name) : true,
      )
      .filter((certificate) =>
        skillFilter.value
          ? certificate.skills.some((skill) => skill.name === skillFilter.value!.name)
          : true,
      )
      .filter((certificate) =>
        organizationFilter.value ? certificate.organization === organizationFilter.value : true,
      )
  }

  const reset = () => {
    certificates.value = origin_certificates.slice()
    keyword.value = undefined
    skillFilter.value = undefined
    organizationFilter.value = undefined
  }

  // ==========================================================================
  //                              Initializations
  // ==========================================================================
  //

  return {
    // ============================== State variables ==============================
    certificates,
    keyword,
    skillFilter,
    organizationFilter,
    // ================================= Getters ===================================
    //
    // ================================= Methods ===================================
    filter,
    reset,
  }
})
