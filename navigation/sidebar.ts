import { DefaultTheme } from 'vitepress/types/default-theme'

export const sidebar: DefaultTheme.Sidebar = [
	{
		text: 'React',
		base: '/react',
		items: [
			{ text: 'Basis', link: '/' },
			{ text: 'Components', link: '/components' },
			{ text: 'Hooks', link: '/hooks' },
			{ text: 'Advanced', link: '/advanced' },
		],
	},
	{
		text: 'Javascript',
		base: '/javascript',
		items: [{ text: 'Coming Soon', link: '/' }],
	},
	{
		text: 'Typescript',
		base: '/typescript',
		items: [{ text: 'Coming Soon', link: '/' }],
	},
]
