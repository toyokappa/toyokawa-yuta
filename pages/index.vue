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
      Resume(:careerItems="careerItems")
    section.section
      SectionHeader#blog(
        title="最新ブログ記事"
        subtitle="Recent Blog Posts"
        description="最新のチャレンジや動向をコンテンツとしてお届け"
      )
      Blog(:blogPosts="blogPosts")
      BlogLinkButton
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
import Header from "@/components/global/Header";
import SectionHeader from "@/components/parts/SectionHeader";
import PageTop from "@/components/sections/PageTop";
import Resume from "@/components/sections/Resume";
import Blog from "@/components/sections/Blog";
import BlogLinkButton from "@/components/parts/BlogLinkButton";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/global/Footer";

export default {
  components: {
    Header,
    SectionHeader,
    PageTop,
    Resume,
    Blog,
    BlogLinkButton,
    Contact,
    Footer
  },
  async asyncData({ app }) {
    const blogRes = await app.$ctfClient.getEntries({
      content_type: "blog",
      order: "-fields.publishedAt",
      limit: 3
    });
    const blogPosts = blogRes.items;

    const careerRes = await app.$ctfClient.getEntries({
      content_type: "career",
      order: "fields.startedAt"
    })
    const careerItems = careerRes.items;
    console.log(careerItems)

    return {
      blogPosts,
      careerItems
    };
  },
  head() {
    return {
      title: "豊川 雄太 Official Site"
    };
  }
};
</script>

<style lang="sass">
#wrapper
  .section
    padding-bottom: 100px
  .section-dark
    background-color: $primary-dark
</style>
