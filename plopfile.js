const configGeneratorComponent = {
	description: 'this is boilerplate component generator',
	prompts: [
		{
			type: 'list',
			name: 'type',
			choices: ['atoms', 'molecules', 'organisms', 'templates'],
			message: 'component type please',
		},
		{
			type: 'input',
			name: 'name',
			message: 'component name please',
		},
	],
	actions: [
		{
			type: 'add',
			path: 'src/components/{{lowerCase type}}/{{camelCase name}}/{{pascalCase name}}.tsx',
			templateFile: '__plop__/ComponentReact.hbs',
		},
		{
			type: 'add',
			path: 'src/components/{{lowerCase type}}/{{camelCase name}}/__tests__/{{pascalCase name}}.test.tsx',
			templateFile: '__plop__/ComponentTest.hbs',
		},
		{
			type: 'add',
			path: 'src/components/{{lowerCase type}}/{{camelCase name}}/index.ts',
			templateFile: '__plop__/index.hbs',
		},
	],
};

const configGeneratorPage = {
	description: 'this is boilerplate page generator',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'page name please',
		},
	],
	actions: [
		{
			type: 'add',
			path: 'src/pages/{{camelCase name}}.tsx',
			templateFile: '__plop__/Page.hbs',
		},
	],
};

module.exports = function configure(plop) {
	plop.setGenerator('component', configGeneratorComponent);
	plop.setGenerator('page', configGeneratorPage);
};
