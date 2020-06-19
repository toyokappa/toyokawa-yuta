<template lang="pug">
  header.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top.header-nav
    nav.container
      n-link.navbar-brand.logo(v-scroll-to="'#pageTop'" to) TOYOKAWA
      .toggle-button
        client-only
          tasty-burger-button(
            type="spin"
            color="black"
            size="s"
            @toggle="toggleNavMenu"
            ref="burgerButton"
          )
      .collapse-menu
        ul.navbar-nav.ml-auto
          li.nav-item
            n-link.nav-link(v-scroll-to="'#profile'" to) PROFILE
          li.nav-item
            n-link.nav-link(v-scroll-to="'#carriculum'" to) CARRICULUM
          li.nav-item
            n-link.nav-link(v-scroll-to="'#blog'" to) BLOG
          li.nav-item
            n-link.nav-link(v-scroll-to="'#contact'" to) CONTACT
    #navbarMenu.container
      ul.navbar-nav(@click="toggleActive")
        li.nav-item.active
          n-link.nav-link(v-scroll-to="'#profile'" to) PROFILE
        li.nav-item
          n-link.nav-link(v-scroll-to="'#carriculum'" to) CARRICULUM
        li.nav-item
          n-link.nav-link(v-scroll-to="'#blog'" to) BLOG
        li.nav-item
          n-link.nav-link(v-scroll-to="'#contact'" to) CONTACT
</template>

<script>
export default {
  data () {
    return {
      activeLink: ''
    }
  },
  methods: {
    toggleNavMenu (active) {
      const nav = document.querySelector('#navbarMenu')
      active ? nav.classList.add('visible') : nav.classList.remove('visible')
    },
    toggleActive () {
      this.$refs.burgerButton.toggle()
    }
  }
}
</script>

<style lang="sass" scoped>
.header-nav
  font-family: $en-accent-family
  .logo
    font-weight: bold
    padding: 0 10px
    border: 3px solid black
  .toggle-button
    display: none
    margin-top: 5px
    button
      outline: none
  #navbarMenu
    display: none
  .nav-item
    margin-left: 20px
    &.active
      font-weight: bold
@include media-breakpoint-down(md)
  .toggle-button
    display: block !important
  .collapse-menu
    display: none
  #navbarMenu
    display: block !important
    position: fixed
    top: 50px
    left: 50%
    transform: translateX(-50%)
    width: 100%
    background-color: #f8f9fa
    visibility: hidden
    opacity: 0
    transition: 0.3s
    &.visible
      visibility: visible
      opacity: 1
    .navbar-nav
      width: 100%
      padding: 0 20px
      .nav-item
        padding: 20px 0
        border-bottom: 1px solid $secondary-grey
        margin-left: 0 !important
        &:last-child
          border-bottom: none
</style>