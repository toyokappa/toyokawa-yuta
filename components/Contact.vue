<template lang="pug">
  .contact
    .contact-wrapper.container
      .row
        .offset-lg-3.offset-md-2.col-lg-6.col-md-8
          form.contact-form(@submit="sendMail")
            .form-group
              label.sr-only(for="inputName") Name
              input.form-control(
                type="text"
                placeholder="Name"
                name="inputName"
                id="inputName"
                v-model="contactForm.name"
                required
              )
            .form-group
              label.sr-only(for="inputEmail") E-mail
              input.form-control(
                type="email"
                placeholder="E-mail"
                name="inputEmail"
                id="inputEmail"
                v-model="contactForm.email"
                required
              )
            .form-group
              label.sr-only(for="inputMessage") Message
              textarea.form-control(
                placeholder="Message"
                name="inputMessage"
                id="inputMessage"
                rows="5"
                v-model="contactForm.message"
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
          a.link(href="instagram.com/yuta_toyokawa" target="new")
            i.fab.fa-instagram
</template>

<script>
export default {
  data () {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async sendMail (e) {
      e.preventDefault()
      const mailer = this.$firebaseFunctions.httpsCallable('sendMail')
      try {
        await mailer(this.contactForm)
        // this.$toast.success('お問い合わせを受け付けました。ありがとうございました。', { duration: 5000 })
        this.resetForm()
      } catch (err) {
        // this.$toast.error('お問い合わせに失敗しました。時間をおいて再度お試しください。', { duration: 5000 })
        console.log(err)
        throw err
      }
    },
    resetForm () {
      this.contactForm = { name: '', email: '', message: '' }
    }
  }
}
</script>

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
      background-color: $secondary-dark
      box-shadow: none
      outline: none
  .btn-submit
    display: block
    background-color: #fa4f3e
    color: white
    font-family: $en-accent-family
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