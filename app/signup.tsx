import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/context/auth-provider';
import { Redirect, router } from 'expo-router';
import {
	KeyboardAvoidingView,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	useColorScheme,
	View,
} from 'react-native';

export default function signup() {
	const { user } = useAuth();

	const colorScheme = useColorScheme();

	const colors = Colors[colorScheme ?? 'light'];

	const styles = StyleSheet.create({
		container: {
			backgroundColor: colors.background,
			paddingVertical: 110,
			paddingHorizontal: 20,
			gap: 8,
			flex: 1,
		},

		title: {
			color: colors.text,
			fontSize: 24,
			fontWeight: 'semibold',
		},

		input: {
			borderWidth: 1,
			borderRadius: 10,
			paddingVertical: 12,
			paddingHorizontal: 16,
			color: colors.text,
			borderColor: colors.border,
		},
	});

	if (user?.name!) return <Redirect href={{ pathname: '/' }} />;

	return (
		<View style={{ flex: 1 }}>
			<KeyboardAvoidingView
				behavior="padding"
				keyboardVerticalOffset={100}
				style={styles.container}
			>
				<ThemedText style={styles.title}>Sign up</ThemedText>
				<ThemedText>User name</ThemedText>
				<TextInput style={styles.input} placeholder="Hello" />
				<ThemedText>Phone number</ThemedText>
				<TextInput style={styles.input} placeholder="Hello" />
				<ThemedText>Password</ThemedText>
				<TextInput style={styles.input} secureTextEntry />
				<ThemedText>Confirm password</ThemedText>
				<TextInput style={styles.input} secureTextEntry />
				<Pressable
					onPress={() => {}}
					style={{
						backgroundColor: colors.primary,
						paddingHorizontal: 16,
						paddingVertical: 12,
						borderRadius: 8,
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: 'white',
						}}
					>
						Sign up
					</Text>
				</Pressable>
				<Pressable
					onPress={() => router.push('/signin')}
					style={{
						backgroundColor: colors.card,
						paddingHorizontal: 16,
						paddingVertical: 12,
						borderRadius: 8,
						alignItems: 'center',
					}}
				>
					<ThemedText>Already have an account? Sign in</ThemedText>
				</Pressable>
			</KeyboardAvoidingView>
		</View>
	);
}
