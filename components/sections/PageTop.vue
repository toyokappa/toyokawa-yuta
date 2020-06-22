<template lang="pug">
  .welcome
    #pageTop.page-top(v-lazy:background-image="topImage")
      .top-text
        .title I'M TOYOKAWA YUTA
        .subtitle Official Site
      .user-icon(v-lazy:background-image="userImage")
    #profile.profile
      .name 豊川 雄太
      .name-alpha Toyokawa Yuta
      .job-title Web Engineer, Career Consultant, Event Organizer.
    .facts.container
      .row
        .col-lg-6
          .row.mb-3
            .col-sm-3.label PROFILE
            .col-sm-9.value Web Engineer, Career Consultant, Event Organizer.
          .row.mb-3
            .col-sm-3.label SOCIAL PROFILES
            .col-sm-9
              ul.social-profile
                li.item
                  a.link(href="https://github.com/toyokappa" target="new")
                    i.fab.fa-github
                li.item
                  a.link(href="https://www.facebook.com/yuta.toyokawa" target="new")
                    i.fab.fa-facebook-square
                li.item
                  a.link(href="https://twitter.com/toyokappa" target="new")
                    i.fab.fa-twitter
                li.item
                  a.link(href="https://www.youtube.com/channel/UCFecawOb06qA62iYfVQmteA" target="new")
                    i.fab.fa-youtube
                li.item
                  a.link(href="https://instagram.com/yuta_toyokawa" target="new")
                    i.fab.fa-instagram
          .row.mb-3
            .col-sm-3.label SKILLS
            .col-sm-9
              .skillbar
                .skillbar-title HTML5
                .skillbar-bar(style="width: 100%;")
                .skillbar-percent 100%
              .skillbar
                .skillbar-title CSS3
                .skillbar-bar(style="width: 90%;")
                .skillbar-percent 90%
              .skillbar
                .skillbar-title JavaScript
                .skillbar-bar(style="width: 80%;")
                .skillbar-percent 80%
              .skillbar
                .skillbar-title Vue.js
                .skillbar-bar(style="width: 60%;")
                .skillbar-percent 60%
              .skillbar
                .skillbar-title React.js
                .skillbar-bar(style="width: 45%;")
                .skillbar-percent 45%
              .skillbar
                .skillbar-title Ruby(Rails)
                .skillbar-bar(style="width: 80%;")
                .skillbar-percent 80%
              .skillbar
                .skillbar-title AWS
                .skillbar-bar(style="width: 60%;")
                .skillbar-percent 60%
          //.row.mb-3
            .col-sm-3.label CONTACT
            .col-sm-9
              a.link(href="mailto:info@toyokawa-yuta.com") info@toyokawa-yuta.com
        .col-lg-6
          .introduction
            | こんにちは。豊川 雄太です。群馬県渋川市にてWebエンジニア、キャリアコンサルタント、事業コンサルタント、イベント企画など様々なことをしています。
            br
            br
            | 「一日一日を楽しく生きる」をモットーに日々を過ごしています。人生の最期は「笑顔で死ぬ」と決めています。こういった考えを原動力として、群馬県渋川市を中心に群馬を盛り上げる活動をしています。
            br
            br
            | 活動内容については、こちらのホームページに掲載しておりますので、是非いちコンテンツとして楽しんでいただけたらと思います。
</template>

<script>
import topImage from "@/assets/page_top.jpg"
import userImage from "@/assets/user_icon.jpg"

export default {
  data() {
    return {
      topImage,
      userImage
    }
  }
}
</script>

<style lang="sass" scoped>
.page-top
  position: relative
  width: 100%
  height: 100vh
  background-size: cover
  background-position: center center
  margin-bottom: 100px
  .top-text
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    color: white
    font-family: $en-accent-family
    text-align: center
    width: 100%
    margin: auto
    @include media-breakpoint-up(sm)
      .title
        font-size: 60px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 24px
        letter-spacing: 3px
    @include media-breakpoint-down(xs)
      .title
        font-size: 42px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 16px
        letter-spacing: 3px
  .user-icon
    position: absolute
    bottom: -75px
    left: 50%
    transform: translateX(-50%)
    width: 150px
    height: 150px
    border-radius: 50%
    border: 3px solid white
    background-size: cover
    background-position: center center
.profile
  font-family: $en-accent-family
  text-align: center
  max-width: 360px
  margin: 0 auto 180px
  padding-top: 80px
  .name
    font-family: $ja-accent-family
    font-size: 40px
    letter-spacing: 5px
  .name-alpha
    font-size: 20px
    letter-spacing: 4px
    margin-bottom: 20px
  .job-title
    color: $secondary-grey
    letter-spacing: 3px
.facts
  .label
    font-family: $en-accent-family
    letter-spacing: 3px
  .value
    color: $primary-grey
  .social-profile
    list-style: none
    margin: 0
    .item
      display: inline
      margin-right: 15px
      font-size: 30px
  .link
    color: $accent-color
  .skillbar
    position: relative
    width: 100%
    height: 18px
    background-color: $muted-color
    border-radius: 3px
    margin-bottom: 20px
    .skillbar-title
      position: absolute
      top: -1px
      left: 15px
      color: white
      font-family: $en-accent-family
      letter-spacing: 3px
      z-index: 100
    .skillbar-bar
      position: absolute
      top: 0
      left: 0
      height: 100%
      background-color: $primary-dark
      border-radius: 3px
      z-index: 99
    .skillbar-percent
      position: absolute
      top: 0
      right: 15px
      color: $accent-color
      font-family: $en-accent-family
      font-size: 12px
      font-weight: bold
      z-index: 100
  .introduction
    color: $primary-grey
    line-height: 1.7
</style>