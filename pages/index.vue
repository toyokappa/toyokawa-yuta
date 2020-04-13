<template lang="pug">
  #wrapper
    section.section
      PageTop
    section.section
      SectionHeader(
        title="キャリアシート"
        subtitle="Carriculum Vitae"
        description="私のこれまでの歩み"
      )
      Resume
    section.section
      SectionHeader(
        title="最新ブログ記事"
        subtitle="Recent Blog Posts"
        description="最新のチャレンジや動向をコンテンツとしてお届け"
      )
      Blog
    section.section
      SectionHeader(
        title="お問い合わせ"
        subtitle="Get In Touch"
        description="気兼ねなく お気軽に ご連絡ください"
      )
      Contact
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import PageTop from '@/components/PageTop'
import Resume from '@/components/Resume'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default {
  components: {
    SectionHeader,
    PageTop,
    Resume,
    Blog,
    Contact
  }
}
</script>

<style lang="sass">
#wrapper
  .section
    margin-bottom: 180px
</style>
