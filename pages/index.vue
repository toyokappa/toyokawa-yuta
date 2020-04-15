<template lang="pug">
  #wrapper
    Header
    section.section
      PageTop
    section.section
      SectionHeader#carriculum(
        title="キャリアシート"
        subtitle="Carriculum Vitae"
        description="私のこれまでの歩み"
      )
      Resume
    section.section
      SectionHeader#blog(
        title="最新ブログ記事"
        subtitle="Recent Blog Posts"
        description="最新のチャレンジや動向をコンテンツとしてお届け"
      )
      Blog(:blogPosts="blogPosts")
    section.section.section-dark
      SectionHeader#contact(
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
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import PageTop from '@/components/PageTop'
import Resume from '@/components/Resume'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    SectionHeader,
    PageTop,
    Resume,
    Blog,
    Contact,
    Footer
  },
  async asyncData ({ app }) {
    const blogRes = await app.$ctfClient.getEntries({
      content_type: 'blog',
      order: '-sys.createdAt',
      limit: 3
    })
    const blogPosts = blogRes.items

    return {
      blogPosts
    }
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
