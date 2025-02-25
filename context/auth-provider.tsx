import { router } from 'expo-router';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type TContext = {
	signIn: () => void;
	signUp: () => void;
	signOut: () => void;
	user: any;
};

const AuthContext = createContext({} as TContext);

function AuthProvider({ children }: PropsWithChildren) {
	const signIn = () => {
		setUser({ name: 'youssif' });
		router.push('/(tabs)');
	};

	const signUp = () => {};

	const signOut = () => {
		setUser({});
	};

	const [user, setUser] = useState<any>();

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signUp,
				signOut,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
