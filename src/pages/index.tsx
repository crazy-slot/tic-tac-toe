import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => (
	<>
		<NextSeo description="Tic tac toe" />
		<main>tic-tac-toe</main>
	</>
);

export default Home;
