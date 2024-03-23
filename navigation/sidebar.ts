import { DefaultTheme } from 'vitepress/types/default-theme'

export const sidebar: DefaultTheme.Sidebar = [
	{
		text: 'React',
		base: '/react',
		items: [
			{ text: 'Introduction', link: '/' },
			{ text: 'Components', link: '/components' },
			{ text: 'Hooks', link: '/hooks' },
			{ text: 'Router', link: '/router' },
			{ text: 'State Management', link: '/state-management' },
			{ text: 'Component Composition', link: '/component-composition' },
			{ text: 'Performance', link: '/performance' },
			{ text: 'Debugging', link: '/debugging' },
		],
	},
	{
		text: 'Javascript',
		base: '/javascript',
		items: [{ text: 'Introduction', link: '/' }],
	},
	{
		text: 'Typescript',
		base: '/typescript',
		items: [{ text: 'Introduction', link: '/' }],
	},
]
