import type { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '~store/reducers';
import { ENVIRONMENT } from '~utils/constants';

type CombinedState = ReturnType<typeof rootReducer>;
type StoreType = ReturnType<typeof configureStore>;

const initializeStore = (preloadedState?: PreloadedState<CombinedState>): StoreType => {
	const options = {
		devTools: ENVIRONMENT !== 'production',
		reducer: rootReducer,
		preloadedState,
	};

	return configureStore(options);
};

const store = initializeStore();

export default store;
