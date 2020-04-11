<template lang="pug">
  .welcome
    .page-top
      .top-text
        .title I'M TOYOKAWA YUTA
        .subtitle Web Engineer
      .user-icon
    .profile
      .name 豊川 雄太
      .name-alpha Toyokawa Yuta
      .job-title Web Engineer, Career Consultant, Event Organizer.
</template>

<style lang="sass" scoped>
.page-top
  position: relative
  width: 100%
  height: 100vh
  background-image: url("~assets/page_top.jpg")
  background-size: cover
  background-position: center center
  margin-bottom: 180px
  .top-text
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    color: white
    text-align: center
    letter-spacing: 5px
    width: 100%
    margin: auto
    .title
      font-size: 80px
      font-weight: bold
    .subtitle
      font-size: 24px
  .user-icon
    position: absolute
    bottom: -75px
    left: 50%
    transform: translateX(-50%)
    width: 150px
    height: 150px
    border-radius: 50%
    border: 3px solid white
    background-image: url("~assets/user_icon.jpg")
    background-size:  cover
    background-position: center center
.profile
  text-align: center
  width: 360px
  margin: 0 auto 180px
  .name
    font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif
    font-size: 40px
    letter-spacing: 5px
  .name-alpha
    font-size: 20px
    letter-spacing: 5px
    margin-bottom: 20px
  .job-title
    color: grey
    letter-spacing: 3px
    line-height: 1.5
</style>