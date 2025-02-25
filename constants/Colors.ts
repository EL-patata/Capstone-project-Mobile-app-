/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { useColorScheme } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const getColors = () => {
	const theme = useColorScheme();

	if (theme === 'light')
		return {
			text: '#11181C',
			background: '#fff',
			tint: tintColorLight,
			icon: '#687076',
			tabIconDefault: '#687076',
			tabIconSelected: tintColorLight,
			primary: '#1d4ed8',
		};
	else
		return {
			text: '#ECEDEE',
			background: '#151718',
			tint: tintColorDark,
			icon: '#9BA1A6',
			tabIconDefault: '#9BA1A6',
			tabIconSelected: tintColorDark,
			primary: '#1d4ed8',
		};
};

const Colors = {
	light: {
		text: '#11181C',
		background: '#fff',
		accent: '#F1F5F9',
		card: '#F8FAFC',
		tint: tintColorLight,
		icon: '#687076',
		tabIconDefault: '#687076',
		tabIconSelected: tintColorLight,
		primary: '#1d4ed8',
		border: '#e2e8f0',
	},
	dark: {
		text: '#FFF',
		background: '#020817',
		accent: '#1E293B',
		card: '#0F172A',
		tint: tintColorDark,
		icon: '#9BA1A6',
		tabIconDefault: '#9BA1A6',
		tabIconSelected: tintColorDark,
		primary: '#1d4ed8',
		border: '#475569',
	},
};

export { Colors, getColors };
