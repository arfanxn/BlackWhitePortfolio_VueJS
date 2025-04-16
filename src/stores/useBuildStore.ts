import { builds as origin_builds, type Build } from '@/constants/buildConstants'
import { type Stack } from '@/constants/stackConstants'
import { like } from '@/utils/booleanUtils'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useBuildStore = defineStore('build', () => {
  // ==========================================================================
  //                                Internals
  // ==========================================================================
  type Sort = {
    by: 'startedAt' | 'completedAt'
    order: 'asc' | 'desc'
  }
  type BuildQuery = {
    filters: {
      stacks: Stack[]
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
  const builds = ref<Build[]>(origin_builds.slice())
  const buildQuery = reactive<BuildQuery>({
    filters: {
      stacks: [],
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

  const queryBuilds = () => {
    const query = buildQuery

    builds.value = origin_builds
      .slice()
      .filter((build) =>
        query.keyword
          ? like(`%${query.keyword}%`, build.title) || like(`%${query.keyword}%`, build.description)
          : true,
      )
      .filter((build) =>
        query.filters.stacks.length > 0
          ? query.filters.stacks!.every((s) => build.stacks.some((stack) => stack.name === s.name))
          : true,
      )
      .sort((a, b) => {
        if (query.sorts) {
          for (const sort of query.sorts) {
            if (sort.by === 'startedAt') {
              return sort.order === 'asc'
                ? a.startedAt.getTime() - b.startedAt.getTime()
                : b.startedAt.getTime() - a.startedAt.getTime()
            } else if (sort.by === 'completedAt') {
              return sort.order === 'asc'
                ? a.completedAt!.getTime() - b.completedAt!.getTime()
                : b.completedAt!.getTime() - a.completedAt!.getTime()
            }
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
    builds,
    buildQuery,
    // ================================= Getters ===================================
    //
    // ================================= Methods ===================================
    queryBuilds,
  }
})
