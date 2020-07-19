<template lang="pug">
  #wrapper
    BlogHeader
    section.section
      BlogTitle
      BlogPost(
        :blogPost="blogPost"
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
import BlogPost from "@/components/sections/BlogPost";
import NextPrev from "@/components/modules/NextPrev";
import SectionHeader from "@/components/parts/SectionHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/global/Footer";

export default {
  components: {
    BlogHeader,
    BlogTitle,
    BlogPost,
    NextPrev,
    SectionHeader,
    Contact,
    Footer
  },
  async asyncData({ app, params, payload }) {
    if (payload) return { blogPost: payload };

    const blogRes = await app.$ctfClient.getEntries({
      content_type: "blog",
      "fields.slug": params.slug
    });
    const blogPost = blogRes.items[0];

    const prevRes = await app.$ctfClient.getEntries({
      content_type: "blog",
      "sys.createdAt[lt]": blogPost.sys.createdAt,
      order: "-sys.createdAt",
      limit: 1
    });
    const prevPost = prevRes.items[0];

    const nextRes = await app.$ctfClient.getEntries({
      content_type: "blog",
      "sys.createdAt[gt]": blogPost.sys.createdAt,
      order: "sys.createdAt",
      limit: 1
    });
    const nextPost = nextRes.items[0];

    return {
      blogPost,
      prevPost,
      nextPost
    };
  },
  head() {
    const { title, description, eyecatch } = this.blogPost.fields;
    const pageTitle = `${title} | 豊川 雄太 Official Blog`;
    const imageUrl = `https:${eyecatch.fields.file.url}`;
    const pageUrl = `https://toyokawa-yuta.com/${this.$route.path}`;
    return {
      title: pageTitle,
      meta: [
        { name: "description", content: this.blogPost.fields.description },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: description },
        { property: "og:title", content: pageTitle },
        { property: "og:type", content: "article" },
        { property: "og:image", content: imageUrl },
        { property: "og:description", content: description },
        { property: "og:url", content: pageUrl }
      ]
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
