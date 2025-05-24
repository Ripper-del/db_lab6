import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FlexForm",
  description: "none",
  base: '/db_lab6/',

  themeConfig: {
    nav: [
      { text: "Головна", link: "/" },
      { text: "Зміст", link: "/zmist" },
      { text: "Автори", link: "/autors" },
    ],

    sidebar: [
      { text: 'Головна', link: '/' },
      { text: 'Зміст', link: '/zmist' },
      { text: 'Аналіз предметної області', link: '/analysis' },
      { text: 'Призначення розроблюваної системи', link: '/appointment' },
      { text: 'Аналіз зацікавлених осіб для системи організації та управління опитуваннями експертів', link: '/interested_parties' },
      { text: 'Розробка загальної діаграми прецедентів', link: '/prētsedentiv'},
      { text: 'Реляційна схема', link: '/relational_schema'},  
      { text: 'UseCase', link: '/useCase'},
      { text: 'Бізнес модель та діаграма системи опитування', link: '/business_models'},
      { text: 'Реалізація інформаційного та програмного забезпечення', link: '/SQL' },
      { text: 'Реалізація об’єктно-реляційного відображення', link: '/implementation' }, 
      { text: 'Тестування працездатності системи', link: '/Test' },
      { text: 'Висновки', link: '/vusnovki' },
      { text: 'Автори', link: '/autors' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/varshavskiy05/db_lab.git' }
    ]
  }
})
