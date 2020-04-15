<template lang="pug">
  .blog
    .blog-wrapper.container
      .row.blog-post(v-for="(post, index) in blogPosts")
        .col-lg-6(:class="index % 2 == 0 ? 'order-lg-1' : 'order-lg-2'")
          n-link.image(
            :to="`/blogs/${post.fields.slug}`"
            :style="`background-image: url(${post.fields.eyecatch.fields.file.url})`"
          )
        .col-lg-6(:class="index % 2 == 0 ? 'order-lg-2' : 'order-lg-1'")
          .header
            n-link.title(:to="`/blogs/${post.fields.slug}`") {{ post.fields.title }}
            .created-at
              i.far.fa-calendar-alt.mr-2
              span {{ parseCreatedAt(post.sys.createdAt) }}
          .body(v-html="parseDescription(post.fields.description)")
</template>

<script>
export default {
  props: {
    blogPosts: {
      type: Array,
      required: true
    }
  },
  methods: {
    parseDescription (text) {
      return text.replace(/\n/g, '<br>')
    },
    parseCreatedAt (datetime) {
      return this.$dateFormat(datetime, 'yyyy.MM.dd')
    }
  }
}
</script>

<style lang="sass" scoped>
.blog
  .blog-wrapper
    .blog-post
      margin-bottom: 80px
      .image
        display: block
        width: 100%
        padding-bottom: 60%
        background-size: cover
        background-position: center center
      .header
        margin-bottom: 20px
        .title
          display: block
          color: black
          font-family: $ja-accent-family
          font-size: 20px
          text-decoration: none
        .created-at
          color: $secondary-grey
          font-size: 14px
      .body
        color: $primary-grey
        line-height: 2
</style>