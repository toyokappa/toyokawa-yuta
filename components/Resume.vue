<template lang="pug">
  .resume
    .cv-wrapper.container
      .row.cv
        .col-lg-3
          h3.headline-title CARRER
        .col-lg-9.cv-entry
          h4.company バリューコマース株式会社
          .profile
            i.far.fa-id-badge.mr-2
            | Marketing Consultant, Bussiness Developer, Corporate Planning
          .period
            i.far.fa-calendar-alt.mr-2
            | 2013.4 - 2015.3
          .description
            | 広告営業、マーケティング、新規事業立ち上げ、経営企画など幅広い分野を経験し実績を残す。
      .row.cv
        .offset-lg-3
        .col-lg-9.cv-entry
          h4.company 株式会社JAC Rectuitment
          .profile
            i.far.fa-id-badge.mr-2
            | Carrer Consultant, Recruiting Consultant
          .period
            i.far.fa-calendar-alt.mr-2
            | 2015.4 - 2017.9
          .description
            | Web・IT業界のキャリアコンサルタントとしてミドル層の転職支援を行う。また、企業側の採用コンサルタントとして、採用活動の活性化、優秀な人材との結びつける提案を実施。
      .row.cv
        .offset-lg-3
        .col-lg-9.cv-entry
          h4.company しくみ製作所株式会社
          .profile
            i.far.fa-id-badge.mr-2
            | Web Enginner, Recruiting Innovator
          .period
            i.far.fa-calendar-alt.mr-2
            | 2017.10 - 現在
          .description
            | 未経験からフルリモートのRailsエンジニアとして経験を積む。業務内での実績を評価され1年後には年収150万アップ。また2019年1月から人事部部長を兼務し、人事制度、採用活動の改善にも貢献。
</template>

<style lang="sass" scoped>
.resume
  .cv-wrapper
    .cv
      &:last-of-type
        .cv-entry
          border-bottom: none
          margin-bottom: none
      .headline-title
        font-size: 20px
        font-weight: normal
        letter-spacing: 3px
      .cv-entry
        padding-bottom: 30px
        border-bottom: 1px solid #eee
        margin-bottom: 30px
        .company
          font-family: $ja-accent-family
          font-size: 18px
          margin-bottom: 5px
        .profile
          color: $primary-grey
          margin-bottom: 3px
        .period
          color: $primary-grey
          font-size: 14px
          margin-bottom: 10px
        .description
          color: $primary-grey
          line-height: 2
</style>