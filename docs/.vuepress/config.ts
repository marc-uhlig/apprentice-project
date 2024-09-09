import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: 'en-US',
  base: '/apprentice-program/',
  title: 'Apprentice Program',
  description: 'Get project-ready in three months.',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/ap/getting-started', '/contribute'],

    sidebar: {
      '/': 'heading',
      '/ap/': [
        {
          text: 'Apprentice Program',
          children: ['/ap/getting-started.md', '/ap/todo-app.md'],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
