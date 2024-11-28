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

    navbar: ['/', { text: 'Legacy', link: '/legacy/roadmap' }, '/contribute'],

    sidebar: {
      '/': 'heading',
      '/legacy/': [
        {
          text: 'Legacy - AP',
          children: [
            '/legacy/roadmap.md',
            '/legacy/objectives.md',
            {
              text: 'Modules',
              link: '/legacy/modules/index.md',
              children: [
                {
                  text: 'Enablers',
                  children: ['/legacy/modules/enablers/create-kata-repo.md'],
                },
                {
                  text: 'Katas',
                  children: [
                    '/legacy/modules/katas/java-8-streams.md',
                    '/legacy/modules/katas/mars-rover.md',
                  ],
                },
                {
                  text: 'Essentials',
                  children: [
                    '/legacy/modules/essentials/command-line-basics.md',
                    '/legacy/modules/essentials/learn-git-branching.md',
                    '/legacy/modules/essentials/introduction-to-docker.md',
                  ],
                },
                {
                  text: 'Todo App',
                  link: '/legacy/modules/todo-app/index.md',
                  children: [
                    '/legacy/modules/todo-app/create-github-repo.md',
                    '/legacy/modules/todo-app/create-initial-vue3-frontend.md',
                    '/legacy/modules/todo-app/implement-ui-design.md',
                    '/legacy/modules/todo-app/frontend-testing-with-cypress.md',
                    '/legacy/modules/todo-app/ensure-green-tests-and-code-quality.md',
                    '/legacy/modules/todo-app/add-json-mock-server-for-frontend.md',
                    '/legacy/modules/todo-app/initial-spring-boot-backend.md',
                    '/legacy/modules/todo-app/connect-frontend-with-backend.md',
                    '/legacy/modules/todo-app/persist-data-with-in-memory-database.md',
                    '/legacy/modules/todo-app/database-management-with-liquibase.md',
                    '/legacy/modules/todo-app/dockerize-the-app.md',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
