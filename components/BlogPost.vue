<template lang="pug">
  .blog
    .blog-wrapper.container
      .blog-post.row
        .offset-1.col-10
          .blog-post-header
            .image(
              :style="`background-image: url(${blogPost.fields.eyecatch.fields.file.url})`"
            )
            h1.title {{ blogPost.fields.title }}
            .created-at
              i.far.fa-calendar-alt.mr-2
              span {{ parseCreatedAt(blogPost.sys.createdAt) }}
          .blog-post-body
            .markdown-body(v-html="$md.render(blogPost.fields.body)")
</template>

<script>
export default {
  props: {
    blogPost: {
      type: Object,
      required: true
    }
  },
  methods: {
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
      .blog-post-header
        margin-bottom: 20px
        .image
          display: block
          width: 100%
          padding-bottom: 60%
          background-size: cover
          background-position: center center
          margin-bottom: 20px
        .title
          display: block
          color: black
          font-family: $ja-accent-family
          font-size: 28px
          text-decoration: none
          margin-bottom: 3px
        .created-at
          color: $secondary-grey
          font-size: 14px
      .markdown-body
        color: $primary-grey
        font-size: 16px
        line-height: 2
</style>