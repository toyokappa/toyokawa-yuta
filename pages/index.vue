<template lang="pug">
  #wrapper
    section.section
      PageTop
    section.section
      Resume
</template>

<script>
import PageTop from '@/components/PageTop'
import Resume from '@/components/Resume'

export default {
  components: {
    PageTop,
    Resume
  }
}
</script>

<style lang="sass">
#wrapper
  .section
    margin-bottom: 180px
</style>
