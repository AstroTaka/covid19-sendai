<template>
  <data-view
    :title="$t('仙台市の検査陽性者の状況')"
    :title-id="'details-of-confirmed-cases'"
    :date="Data.patients.date"
  >
    <template v-slot:button>

    </template>
    <confirmed-cases-details-table
      :aria-label="$t('仙台市の検査陽性者の状況')"
      v-bind="confirmedCases"
    />
  </data-view>
</template>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script>
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)
    const data = {
      Data,
      confirmedCases
    }
    return data
  }
}
</script>
