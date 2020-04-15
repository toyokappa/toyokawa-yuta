<template lang="pug">
  .section-header
    h1.section-title
      n-link(to="/blogs") グンマー帝国ブログ
    .section-subtitle Toyokawa Yuta Official Blog
    .section-description 最新のチャレンジや動向をコンテンツとしてお届け
</template>

<style lang="sass" scoped>
.section-header
  text-align: center
  padding-top: 80px
  padding-bottom: 150px
  a
    color: inherit
    text-decoration: none
  .section-title
    font-family: $ja-accent-family
    font-size: 40px
    letter-spacing: 5px
    margin-bottom: 0
  .section-subtitle
    font-family: $en-accent-family
    font-size: 20px
    font-weight: normal
    letter-spacing: 4px
    margin-bottom: 30px
  .section-description
    color: $secondary-grey
    font-size: 16px
    font-weight: normal
    letter-spacing: 3px
</style>