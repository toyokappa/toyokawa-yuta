<template lang="pug">
  .section-header
    .section-title {{ title }}
    .section-subtitle {{ subtitle }}
    .section-description {{ description }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="sass" scoped>
.section-header
  text-align: center
  margin: 150px
  .section-title
    font-family: $ja-accent-family
    font-size: 40px
    letter-spacing: 5px
    margin-bottom: 0
  .section-subtitle
    font-size: 20px
    font-weight: normal
    letter-spacing: 5px
    margin-bottom: 30px
  .section-description
    color: $secondary-grey
    font-size: 18px
    font-weight: normal
    letter-spacing: 3px
</style>