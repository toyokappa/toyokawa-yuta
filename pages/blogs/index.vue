<template lang="pug">
  #wrapper
    BlogHeader
    section.section
      BlogTitle
      Blog(:blogPosts="blogPosts")
      Paging(
        :total="blogRes.total"
        :limit="blogRes.limit"
        :skip="blogRes.skip"
      )
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
import BlogHeader from "@/components/parts/BlogHeader";
import BlogTitle from "@/components/parts/BlogTitle";
import Blog from "@/components/sections/Blog";
import Paging from "@/components/modules/Paging";
import SectionHeader from "@/components/parts/SectionHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/global/Footer";

export default {
  components: {
    BlogHeader,
    BlogTitle,
    Blog,
    Paging,
    SectionHeader,
    Contact,
    Footer
  },
  async asyncData({ route, app, env }) {
    let pageNum = 1;
    if (typeof route.params.page !== "undefined") {
      pageNum = parseInt(route.params.page);
    }
    const limit = env.pageLimit;
    const skip = limit * pageNum - limit;
    let params = {
      content_type: "blog",
      order: "-fields.publishedAt",
      limit,
      skip
    };

    const blogRes = await app.$ctfClient.getEntries(params);
    const blogPosts = blogRes.items;

    return {
      blogRes,
      blogPosts
    };
  },
  head() {
    return {
      title: "豊川 雄太 Official Blog"
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
