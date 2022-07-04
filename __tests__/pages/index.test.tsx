import Index from '~pages/index';
import testProvider from '~utils/TestHelper';

describe('Testing pages Index', () => {
	it('should print Index page', () => {
		const { container } = testProvider(<Index />);

		expect(container).toMatchSnapshot();
	});
});
