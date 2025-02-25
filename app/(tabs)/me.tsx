import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/context/auth-provider';

export default function TabTwoScreen() {
	const { user } = useAuth();
	return (
		<ThemedView style={{ padding: 20 }}>
			<ThemedText>{JSON.stringify(user)}</ThemedText>
		</ThemedView>
	);
}
