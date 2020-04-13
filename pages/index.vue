<template lang="pug">
  #wrapper
    section.section
      PageTop
    section.section
      Resume
    section.section
      Blog
</template>

<script>
import PageTop from '@/components/PageTop'
import Resume from '@/components/Resume'
import Blog from '@/components/Blog'

export default {
  components: {
    PageTop,
    Resume,
    Blog
  }
}
</script>

<style lang="sass">
#wrapper
  .section
    margin-bottom: 180px
</style>
