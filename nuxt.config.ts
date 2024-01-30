// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Turbo Noodle 🐈 One of the few noodles that is turbo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Turbo Noodle is a noodle that is turbo.'
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
        }
      ]
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  image: {
    provider: 'netlify',
  }
})
