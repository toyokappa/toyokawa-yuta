<template lang="pug">
  #wrapper
    BlogHeader
    section.section
      BlogTitle
      BlogPost(:blogPost="blogPost")
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
import BlogHeader from "@/components/BlogHeader";
import BlogTitle from "@/components/BlogTitle";
import BlogPost from "@/components/BlogPost";
import SectionHeader from "@/components/SectionHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  components: {
    BlogHeader,
    BlogTitle,
    BlogPost,
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
    return { blogPost };
  },
  head() {
    const { title, description, eyecatch } = this.blogPost.fields;
    const pageTitle = `${title} | 豊川 雄太 Official Blog`;
    const imageUrl = eyecatch.fields.file.url;
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
        { property: "og:image", content: `https:${imageUrl}` },
        { property: "og:description", content: description }
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
