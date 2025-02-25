import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/context/auth-provider';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	const { user } = useAuth();

	if (!user?.name!) return <Redirect href={{ pathname: '/signin' }} />;

	if (user?.name!)
		return (
			<Tabs
				screenOptions={{
					sceneStyle: {
						paddingTop: 24,
						backgroundColor: Colors[colorScheme ?? 'light'].background,
					},
					tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
					headerShown: false,
					tabBarButton: HapticTab,
					tabBarBackground: TabBarBackground,
					tabBarActiveBackgroundColor:
						Colors[colorScheme ?? 'light'].card.concat('ee'),
					tabBarInactiveBackgroundColor:
						Colors[colorScheme ?? 'light'].card.concat('ee'),
					tabBarStyle: Platform.select({
						ios: {
							// Use a transparent background on iOS to show the blur effect

							position: 'absolute',
						},

						default: {},
					}),
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Home',
						tabBarIcon: ({ color }) => (
							<IconSymbol size={28} name="house.fill" color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="me"
					options={{
						title: 'Me',
						tabBarIcon: ({ color }) => (
							<Feather size={28} name="user" color={color} />
						),
					}}
				/>
			</Tabs>
		);
}
