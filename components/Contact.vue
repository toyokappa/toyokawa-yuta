<template lang="pug">
  .contact
    .contact-wrapper.container
      .row
        .offset-lg-3.offset-md-2.col-lg-6.col-md-8
          form.contact-form
            .form-group
              label.sr-only(for="inputName") Name
              input.form-control(
                type="text"
                placeholder="Name"
                name="inputName"
                id="inputName"
                required
              )
            .form-group
              label.sr-only(for="inputEmail") E-mail
              input.form-control(
                type="email"
                placeholder="E-mail"
                name="inputEmail"
                id="inputEmail"
                required
              )
            .form-group
              label.sr-only(for="inputMessage") Message
              textarea.form-control(
                placeholder="Message"
                name="inputMessage"
                id="inputMessage"
                rows="5"
              )
            .button-area
              button.btn.btn-default.btn-submit(
                type="submit"
                id="submitButton"
              )
                i.fas.fa-check.mr-2
                | SUBMIT
      ul.social-links
        li.item
          a.link(href="#")
            i.fab.fa-github
        li.item
          a.link(href="#")
            i.fab.fa-facebook-square
        li.item
          a.link(href="#")
            i.fab.fa-twitter
        li.item
          a.link(href="#")
            i.fab.fa-youtube
        li.item
          a.link(href="#")
            i.fab.fa-instagram
</template>

<style lang="sass" scoped>
.contact
  .form-group
    margin-bottom: 5px
  input, textarea
    height: auto
    background-color: $secondary-dark
    border-radius: 0
    border: none
    padding: 15px
    margin: 0
    box-shadow: none
    resize: none
    outline: none
    &:focus
      outline: none
  .btn-submit
    display: block
    background-color: #fa4f3e
    color: white
    font-size: 15px
    letter-spacing: 3px
    border: none
    padding: 15px 25px
    margin-left: auto
  .social-links
    list-style: none
    text-align: center
    margin-top: 60px
    .item
      display: inline
      font-size: 36px
      margin: 0 15px
      .link
        color: $primary-grey
</style>