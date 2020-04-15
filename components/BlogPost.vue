<template lang="pug">
  .blog
    .blog-wrapper.container
      .blog-post.row
        .offset-1.col-10
          .blog-post-header
            .image(
              style="background-image: url(http://themes.createbrilliance.com/Slamr/theme/img/blog/blog-1.jpg)"
            )
            h1.title プロセスを見極めろ！
            .created-at
              i.far.fa-calendar-alt.mr-2
              | 2020.04.13
          .blog-post-body
            .body
              | どうもこんにちは。考えるスイッチが一度入るとなかなか抜け出せなくなってしまう豊川です。
              br
              br
              | 今回は行動も大事だけど、プロセスをしっかりと考えることも非常に重要である、といったことについて話していきたいと思います。
</template>

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
      .body
        color: $primary-grey
        font-size: 16px
        line-height: 2
</style>