import {defineConfig} from 'vitepress'
import {navItems} from "../navigation/nav-items";
import {sidebar} from "../navigation/sidebar";
import {socialLinks} from "../navigation/social-links";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Frontend Interview Questions",
    description: "List of frontend interview questions",
    base: '/',
    srcDir: 'docs',
    outDir: 'dist',
    themeConfig: {
        nav: navItems,
        sidebar: sidebar,
        socialLinks: socialLinks,
        search: {provider: 'local'},
        editLink: {
            pattern: 'https://github.com/armancodv/frontend-interview/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
            }
        },
    },
    sitemap: {
        hostname: 'https://interview.armanko.com/',
    },
    markdown: {
        container: {
            tipLabel: 'Key Notes',
            warningLabel: 'Hint',
        }
    }
})
