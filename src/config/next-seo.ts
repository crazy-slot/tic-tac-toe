import { BUILD_DATE, BUILD_ID, BUILD_SHA } from '~utils/constants';

const additionalMetaTags = [
	{ property: 'BUILD_ID', content: BUILD_ID },
	{ property: 'BUILD_DATE', content: BUILD_DATE },
	{ property: 'BUILD_SHA', content: BUILD_SHA },
	{ name: 'keywords', content: 'tic,tac,toe' },
	{ name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
];

const additionalLinkTags = [{ rel: 'icon', href: '/favicon.ico' }];

const openGraph = {
	title: 'Tic tac toe',
	description: 'Tic tac toe',
};

const SEO = {
	additionalMetaTags,
	additionalLinkTags,
	openGraph,
	titleTemplate: '%s | Tic tac toe',
	defaultTitle: 'Tic tac toe',
};

export default SEO;
