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
		items: [
			{ text: 'Basis', link: '/' },
			{ text: 'Variables and Scope', link: '/variables' },
			{ text: 'Objects', link: '/objects' },
			{ text: 'Classes', link: '/classes' },
			{ text: 'Maps and Sets', link: '/maps-and-sets' },
			{ text: 'Arrays', link: '/arrays' },
			{ text: 'Loops', link: '/loops' },
			{ text: 'Functions', link: '/functions' },
			{ text: 'Asynchronous', link: '/soon' },
			{ text: 'Events', link: '/soon' },
			{ text: 'Modules', link: '/soon' },
			{ text: 'ES6+ Features', link: '/soon' },
			{ text: 'DOM Manipulation', link: '/soon' },
			{ text: 'Error Handling', link: '/soon' },
			{ text: 'Debugging', link: '/soon' },
			{ text: 'Workers', link: '/soon' },
			{ text: 'Web APIs', link: '/soon' },
			{ text: 'Security', link: '/soon' },
			{ text: 'Advanced', link: '/soon' },
		],
	},
	{
		text: 'Typescript',
		base: '/typescript',
		items: [{ text: 'Coming Soon', link: '/' }],
	},
	{
		text: 'About',
		base: '/about',
		items: [
			{ text: 'About', link: '/' },
			{ text: 'Contributing', link: '/contributing' },
			{ text: 'Changelog', link: '/changelog' },
		],
	},
]
