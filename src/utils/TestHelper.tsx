import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from '~config/store';

const testProvider = (ui: ReactElement): RenderResult => render(<StoreProvider store={store}>{ui}</StoreProvider>);

export default testProvider;
