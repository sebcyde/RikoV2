import { createContext } from 'react';

export const LoadingContext = createContext({
	Loading: false,
	setLoading: () => {},
});
