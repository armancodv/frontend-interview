import {defineConfig} from 'vitepress'
import {navItems} from "../navigation/nav-items";
import {sidebar} from "../navigation/sidebar";
import {socialLinks} from "../navigation/social-links";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Frontend Interview",
    description: "List of frontend interview questions",
    srcDir: 'docs',
    themeConfig: {
        nav: navItems,
        sidebar: sidebar,
        socialLinks: socialLinks
    }
})
