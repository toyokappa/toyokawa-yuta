<template lang="pug">
  #wrapper
    BlogHeader
    section.section
      BlogTitle
      Blog
    section.section.section-dark
      SectionHeader(
        title="お問い合わせ"
        subtitle="Get In Touch"
        description="気兼ねなく お気軽に ご連絡ください"
        titleColor="#CC9933"
        subtitleColor="white"
      )
      Contact
    Footer
</template>

<script>
import BlogHeader from '@/components/BlogHeader'
import BlogTitle from '@/components/BlogTitle'
import Blog from '@/components/Blog'
import SectionHeader from '@/components/SectionHeader'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    BlogHeader,
    BlogTitle,
    Blog,
    SectionHeader,
    Contact,
    Footer
  }
}
</script>

<style lang="sass">
#wrapper
  .section
    padding-bottom: 100px
  .section-dark
    background-color: $primary-dark
</style>
