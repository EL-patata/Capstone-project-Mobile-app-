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

export default function signin() {
	const { signIn, user } = useAuth();

	const colorScheme = useColorScheme();

	const colors = Colors[colorScheme ?? 'light'];

	const handleSubmit = () => signIn();

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
				<ThemedText style={styles.title}>Log in</ThemedText>
				<ThemedText>User name</ThemedText>

				<TextInput style={styles.input} placeholder="Hello" />
				<ThemedText>Password</ThemedText>
				<TextInput style={styles.input} secureTextEntry />

				<Pressable
					onPress={handleSubmit}
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
						Sign in
					</Text>
				</Pressable>
				<Pressable
					onPress={() => router.push('/signup')}
					style={{
						backgroundColor: colors.card,
						paddingHorizontal: 16,
						paddingVertical: 12,
						borderRadius: 8,
						alignItems: 'center',
					}}
				>
					<ThemedText>Don't have an account? Sign up</ThemedText>
				</Pressable>
			</KeyboardAvoidingView>
		</View>
	);
}
