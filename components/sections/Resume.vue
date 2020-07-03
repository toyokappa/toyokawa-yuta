<template lang="pug">
  .resume
    .cv-wrapper.container
      .row.cv(v-for="(item, index) in careerItems" :key="index")
        .col-lg-3
          h3.headline-title
            span(v-if="index === 0") CAREER
        .col-lg-9.cv-entry
          h4.company {{ item.fields.companyName }}
          .profile
            i.far.fa-id-badge.mr-2
            | {{ item.fields.position }}
          .period
            i.far.fa-calendar-alt.mr-2
            | {{ parseDate(item.fields.startedAt) }} - {{ parseDate(item.fields.endedAt) }}
          .description
            | {{ item.fields.description }}
</template>

<script>
export default {
  props: {
    careerItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    parseDate(datetime) {
      if (datetime) {
        return this.$dateFormat(datetime, "yyyy.MM");
      } else {
        return "現在"
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.resume
  .cv-wrapper
    .cv
      &:last-of-type
        .cv-entry
          border-bottom: none
          margin-bottom: none
      .headline-title
        font-family: $en-accent-family
        font-size: 20px
        font-weight: normal
        letter-spacing: 3px
      .cv-entry
        padding-bottom: 30px
        border-bottom: 1px solid #eee
        margin-bottom: 30px
        .company
          font-family: $ja-accent-family
          font-size: 18px
          margin-bottom: 5px
        .profile
          color: $primary-grey
          margin-bottom: 3px
        .period
          color: $primary-grey
          font-size: 14px
          margin-bottom: 10px
        .description
          color: $primary-grey
          line-height: 2
</style>