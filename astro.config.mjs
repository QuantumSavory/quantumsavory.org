import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://quantumsavory.org',
  integrations: [
    starlight({
      title: 'QuantumSavory',
      logo: {
        src: './src/assets/quantumsavory-logo.png',
        alt: 'QuantumSavory',
      },
      favicon: '/quantumsavory-logo.png',
      social: [
        {
          icon: 'github',
          label: 'QuantumSavory on GitHub',
          href: 'https://github.com/QuantumSavory',
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { slug: 'start/overview' },
            { slug: 'start/projects' },
            { slug: 'start/demos' },
          ],
        },
        {
          label: 'Ecosystem',
          items: [
            { slug: 'ecosystem/flagship' },
            { slug: 'ecosystem/related' },
            { slug: 'ecosystem/small-packages' },
          ],
        },
        {
          label: 'Community',
          items: [
            { slug: 'community/bounties' },
            { slug: 'community/office-hours' },
            { slug: 'community/summer-school' },
            { slug: 'community/funding' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
