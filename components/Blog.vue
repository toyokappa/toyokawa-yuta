<template lang="pug">
  .blog
    .blog-wrapper.container
      .row.blog-post
        .col-md-6
          a.image(
            href="#"
            style="background-image: url(http://themes.createbrilliance.com/Slamr/theme/img/blog/blog-1.jpg)"
          )
        .col-md-6
          .header
            a.title(href="#") プロセスを見極めろ！
            .created-at
              i.far.fa-calendar-alt.mr-2
              | 2020.04.13
          .body
            | どうもこんにちは。考えるスイッチが一度入るとなかなか抜け出せなくなってしまう豊川です。
            br
            br
            | 今回は行動も大事だけど、プロセスをしっかりと考えることも非常に重要である、といったことについて話していきたいと思います。
      .row.blog-post
        .col-md-6.order-md-2
          a.image(
            href="#"
            style="background-image: url(http://themes.createbrilliance.com/Slamr/theme/img/blog/blog-3.jpg)"
          )
        .col-md-6.order-md-1
          .header
            a.title(href="#") 人脈の上手な使い方
            .created-at
              i.far.fa-calendar-alt.mr-2
              | 2020.04.11
          .body
            | どうもこんにちは。群馬に来て以来ここ最近おもしろい友達が増えてきたなぁと感じる豊川です。
            br
            br
            | 突然ですが、皆さんは「人脈」と聞いたときに、パッと何人くらい思いつきますか？
      .row.blog-post
        .col-md-6
          a.image(
            href="#"
            style="background-image: url(http://themes.createbrilliance.com/Slamr/theme/img/portfolio/port-6.jpg)"
          )
        .col-md-6
          .header
            a.title(href="#") 地方で未経験からエンジニアになるための考え方
            .created-at
              i.far.fa-calendar-alt.mr-2
              | 2020.04.9
          .body
            | どうもこんにちは。群馬県という片田舎でなんとか食らいついてWebエンジニアをやっている豊川です。
            br
            br
            | 前職がキャリアコンサルタントだったこともあり、現在は未経験からエンジニアになりたい人たちの無料相談をやっているのですが...
</template>

<style lang="sass" scoped>
.blog
  .blog-wrapper
    .blog-post
      margin-bottom: 80px
      .image
        display: block
        width: 100%
        height: 300px
        background-size: cover
        background-position: center center
        transition: 0.3s
        &:hover
          opacity: 0.7
      .header
        margin-bottom: 20px
        .title
          display: block
          color: black
          font-family: $ja-accent-family
          font-size: 20px
          text-decoration: none
          transition: 0.3s
          &:hover
            opacity: 0.7
        .created-at
          color: $secondary-grey
          font-size: 14px
      .body
        color: $primary-grey
        line-height: 2
</style>