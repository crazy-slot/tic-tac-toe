module.exports = {
	root: true,
	extends: 'next',
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
		'import/order': [
			'error',
			{
				groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
				pathGroups: [
					{
						pattern: '~**/**',
						group: 'internal',
						position: 'after',
					},
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx'],
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off',
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array-simple',
			},
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': true,
				'ts-nocheck': true,
				'ts-check': false,
				minimumDescriptionLength: 5,
			},
		],
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/brace-style': 'off',
		'@typescript-eslint/class-literal-property-style': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/comma-spacing': 'off',
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true,
			},
		],
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/dot-notation': [
			'error',
			{
				allowKeywords: false,
				allowPrivateClassPropertyAccess: false,
				allowProtectedClassPropertyAccess: false,
				allowIndexSignaturePropertyAccess: false,
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'explicit',
				ignoredMethodNames: [],
				overrides: {},
			},
		],
		'@typescript-eslint/explicit-module-boundary-types': [
			'error',
			{
				allowArgumentsExplicitlyTypedAsAny: false,
				allowDirectConstAssertionInArrowFunctions: true,
				allowedNames: [],
				allowHigherOrderFunctions: true,
				allowTypedFunctionExpressions: true,
			},
		],
		'@typescript-eslint/func-call-spacing': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/init-declarations': 'off',
		'@typescript-eslint/keyword-spacing': 'off',
		'@typescript-eslint/lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
				exceptAfterOverload: true,
			},
		],
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-base-to-string': [
			'error',
			{
				ignoredTypeNames: [],
			},
		],
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': [
			'error',
			{
				ignoreArrowShorthand: false,
				ignoreVoidOperator: false,
			},
		],
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-duplicate-imports': [
			'error',
			{
				includeExports: true,
			},
		],
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-function': [
			'error',
			{
				allow: ['private-constructors', 'protected-constructors', 'decoratedFunctions'],
			},
		],
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: false,
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				fixToUnknown: false,
				ignoreRestArgs: false,
			},
		],
		'@typescript-eslint/no-extraneous-class': [
			'error',
			{
				allowConstructorOnly: false,
				allowEmpty: false,
				allowStaticOnly: false,
				allowWithDecorator: true,
			},
		],
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extra-parens': 'off',
		'@typescript-eslint/no-extra-semi': 'off',
		'@typescript-eslint/no-floating-promises': [
			'error',
			{
				ignoreVoid: false,
				ignoreIIFE: false,
			},
		],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implicit-any-catch': [
			'error',
			{
				allowExplicitAny: false,
			},
		],
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-invalid-this': [
			'error',
			{
				capIsConstructor: true,
			},
		],
		'@typescript-eslint/no-invalid-void-type': [
			'error',
			{
				allowInGenericTypeArguments: true,
				allowAsThisParameter: true,
			},
		],
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-loss-of-precision': 'error',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: true,
				checksConditionals: true,
			},
		],
		'@typescript-eslint/no-namespace': [
			'error',
			{
				allowDeclarations: false,
				allowDefinitionFiles: true,
			},
		],
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-redeclare': [
			'error',
			{
				builtinGlobals: true,
				ignoreDeclarationMerge: false,
			},
		],
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-shadow': [
			'error',
			{
				builtinGlobals: false,
				hoist: 'all',
				ignoreTypeValueShadow: false,
				ignoreFunctionTypeParameterNameValueShadow: false,
			},
		],
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true,
				allowedNames: [],
			},
		],
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
			'error',
			{
				allowComparingNullableBooleansToTrue: true,
				allowComparingNullableBooleansToFalse: true,
			},
		],
		'@typescript-eslint/no-unnecessary-condition': [
			'error',
			{
				allowConstantLoopConditions: false,
				allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
			},
		],
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': [
			'error',
			{
				typesToIgnore: [],
			},
		],
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unsafe-argument': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
				enforceForJSX: true,
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				ignoreRestSiblings: false,
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-unused-vars-experimental': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
				enums: true,
				typedefs: true,
				ignoreTypeReferences: false,
			},
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/object-curly-spacing': 'off',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': [
			'error',
			{
				allowBitwiseExpressions: true,
			},
		],
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': [
			'error',
			{
				onlyInlineLambdas: false,
			},
		],
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'error',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/promise-function-async': [
			'error',
			{
				allowedPromiseNames: [],
				checkArrowFunctions: true,
				checkFunctionDeclarations: true,
				checkFunctionExpressions: true,
				checkMethodDeclarations: true,
			},
		],
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: false,
			},
		],
		'@typescript-eslint/require-array-sort-compare': [
			'error',
			{
				ignoreStringArrays: true,
			},
		],
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/restrict-plus-operands': [
			'error',
			{
				checkCompoundAssignments: true,
			},
		],
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
				allowBoolean: false,
				allowAny: false,
				allowNullish: false,
			},
		],
		'@typescript-eslint/return-await': ['error', 'in-try-catch'],
		'@typescript-eslint/semi': 'off',
		'@typescript-eslint/sort-type-union-intersection-members': [
			'error',
			{
				checkIntersections: true,
				checkUnions: true,
			},
		],
		'@typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/space-infix-ops': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/type-annotation-spacing': 'off',
		'@typescript-eslint/unbound-method': [
			'error',
			{
				ignoreStatic: true,
			},
		],
		'@typescript-eslint/unified-signatures': 'off',
		'accessor-pairs': [
			'error',
			{
				getWithoutSet: false,
				setWithoutGet: true,
				enforceForClassMembers: true,
			},
		],
		'array-bracket-newline': 'off',
		'array-bracket-spacing': 'off',
		'array-callback-return': [
			'error',
			{
				allowImplicit: false,
				checkForEach: true,
			},
		],
		'array-element-newline': 'off',
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: false,
			},
		],
		'arrow-parens': 'off',
		'arrow-spacing': 'off',
		'block-scoped-var': 'error',
		'block-spacing': 'off',
		'brace-style': 'off',
		'callback-return': 'off',
		camelcase: [
			'error',
			{
				properties: 'always',
				ignoreDestructuring: true,
				ignoreImports: false,
				ignoreGlobals: true,
				allow: [],
			},
		],
		'capitalized-comments': 'off',
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [],
			},
		],
		'comma-dangle': 'off',
		'comma-spacing': 'off',
		'comma-style': 'off',
		complexity: [
			'error',
			{
				max: 10,
			},
		],
		'computed-property-spacing': 'off',
		'consistent-return': [
			'error',
			{
				treatUndefinedAsUnspecified: true,
			},
		],
		'consistent-this': 'off',
		'constructor-super': 'error',
		curly: ['error', 'all'],
		'default-case': 'off',
		'default-case-last': 'error',
		'default-param-last': 'off',
		'dot-location': 'off',
		'dot-notation': 'off',
		'eol-last': 'off',
		eqeqeq: ['error', 'smart'],
		'for-direction': 'error',
		'func-call-spacing': 'off',
		'func-name-matching': [
			'error',
			'always',
			{
				considerPropertyDescriptor: true,
				includeCommonJSModuleExports: false,
			},
		],
		'func-names': [
			'error',
			'as-needed',
			{
				generators: 'as-needed',
			},
		],
		'func-style': 'off',
		'function-call-argument-newline': 'off',
		'function-paren-newline': 'off',
		'generator-star-spacing': 'off',
		'getter-return': [
			'error',
			{
				allowImplicit: false,
			},
		],
		'global-require': 'off',
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'error',
		'handle-callback-err': 'off',
		'id-blacklist': 'off',
		'id-denylist': 'off',
		'id-length': [
			'error',
			{
				min: 2,
				properties: 'always',
				exceptions: ['e'],
			},
		],
		'id-match': 'off',
		'implicit-arrow-linebreak': 'off',
		indent: 'off',
		'indent-legacy': 'off',
		'init-declarations': 'off',
		'jsx-quotes': 'off',
		'key-spacing': 'off',
		'keyword-spacing': 'off',
		'linebreak-style': 'off',
		'line-comment-position': 'off',
		'lines-around-comment': 'off',
		'lines-around-directive': 'off',
		'lines-between-class-members': 'off',
		'max-classes-per-file': ['error', 3],
		'max-depth': [
			'error',
			{
				max: 3,
			},
		],
		'max-len': 'off',
		'max-lines': [
			'error',
			{
				max: 300,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-lines-per-function': [
			'error',
			{
				max: 25,
				skipBlankLines: false,
				skipComments: false,
				IIFEs: true,
			},
		],
		'max-nested-callbacks': [
			'error',
			{
				max: 2,
			},
		],
		'max-params': [
			'error',
			{
				max: 4,
			},
		],
		'max-statements': [
			'error',
			{
				max: 25,
			},
			{
				ignoreTopLevelFunctions: false,
			},
		],
		'max-statements-per-line': [
			'error',
			{
				max: 1,
			},
		],
		'multiline-comment-style': 'off',
		'multiline-ternary': 'off',
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: true,
				newIsCapExceptions: [],
				capIsNewExceptions: [],
				properties: true,
			},
		],
		'newline-after-var': 'off',
		'newline-before-return': 'off',
		'newline-per-chained-call': 'off',
		'new-parens': 'off',
		'no-alert': 'error',
		'no-array-constructor': 'off',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': [
			'error',
			{
				allow: [],
				int32Hint: false,
			},
		],
		'no-buffer-constructor': 'off',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-catch-shadow': 'off',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'except-parens'],
		'no-confusing-arrow': 'off',
		'no-console': 'error',
		'no-constant-condition': 'off',
		'no-const-assign': 'error',
		'no-constructor-return': 'error',
		'no-continue': 'off',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'off',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'off',
		'no-else-return': [
			'error',
			{
				allowElseIf: false,
			},
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-empty-character-class': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': [
			'error',
			{
				allowIndirect: false,
			},
		],
		'no-ex-assign': 'error',
		'no-extend-native': [
			'error',
			{
				exceptions: [],
			},
		],
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [
			'error',
			{
				enforceForLogicalOperands: true,
			},
		],
		'no-extra-label': 'off',
		'no-extra-parens': 'off',
		'no-extra-semi': 'off',
		'no-fallthrough': [
			'error',
			{
				commentPattern: 'falls through',
			},
		],
		'no-floating-decimal': 'off',
		'no-func-assign': 'error',
		'no-global-assign': [
			'error',
			{
				exceptions: [],
			},
		],
		'no-implicit-coercion': [
			'error',
			{
				boolean: true,
				number: true,
				string: true,
				disallowTemplateShorthand: true,
				allow: [],
			},
		],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'off',
		'no-import-assign': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': ['error', 'both'],
		'no-invalid-regexp': [
			'error',
			{
				allowConstructorFlags: [],
			},
		],
		'no-invalid-this': 'off',
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: false,
				skipComments: false,
				skipRegExps: false,
				skipTemplates: false,
			},
		],
		'no-iterator': 'error',
		'no-labels': [
			'error',
			{
				allowLoop: false,
				allowSwitch: false,
			},
		],
		'no-label-var': 'off',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'off',
		'no-magic-numbers': 'off',
		'no-misleading-character-class': 'error',
		'no-mixed-operators': 'off',
		'no-mixed-requires': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-multi-assign': [
			'error',
			{
				ignoreNonDeclaration: false,
			},
		],
		'no-multiple-empty-lines': 'off',
		'no-multi-spaces': 'off',
		'no-multi-str': 'error',
		'no-native-reassign': 'off',
		'nonblock-statement-body-position': 'off',
		'no-negated-condition': 'error',
		'no-negated-in-lhs': 'off',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'off',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [
			'error',
			{
				props: true,
			},
		],
		'no-path-concat': 'off',
		'no-plusplus': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'off',
		'no-regex-spaces': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-modules': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': ['error', 'always'],
		'no-return-await': 'off',
		'no-script-url': 'error',
		'no-self-assign': [
			'error',
			{
				props: true,
			},
		],
		'no-self-compare': 'error',
		'no-sequences': [
			'error',
			{
				allowInParentheses: false,
			},
		],
		'no-setter-return': 'error',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		'no-spaced-func': 'off',
		'no-sparse-arrays': 'error',
		'no-sync': 'off',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'off',
		'no-trailing-spaces': 'off',
		'no-undef': 'off',
		'no-undefined': 'off',
		'no-undef-init': 'error',
		'no-underscore-dangle': [
			'error',
			{
				allowAfterThis: false,
				allowAfterSuper: false,
				allowAfterThisConstructor: false,
				enforceInMethodNames: false,
				allowFunctionParams: true,
			},
		],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'no-unreachable': 'error',
		'no-unreachable-loop': [
			'error',
			{
				ignore: [],
			},
		],
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': [
			'error',
			{
				enforceForOrderingRelations: true,
			},
		],
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		],
		'no-unused-expressions': 'off',
		'no-unused-labels': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': [
			'error',
			{
				enforceForClassMembers: true,
			},
		],
		'no-useless-concat': 'error',
		'no-useless-constructor': 'off',
		'no-useless-escape': 'error',
		'no-useless-rename': [
			'error',
			{
				ignoreImport: false,
				ignoreExport: false,
				ignoreDestructuring: false,
			},
		],
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': [
			'error',
			{
				allowAsStatement: false,
			},
		],
		'no-warning-comments': [
			'warn',
			{
				terms: ['todo', 'fixme', 'tofix', 'fix'],
				location: 'start',
			},
		],
		'no-whitespace-before-property': 'off',
		'no-with': 'error',
		'object-curly-newline': 'off',
		'object-curly-spacing': 'off',
		'object-property-newline': 'off',
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true,
				ignoreConstructors: false,
				avoidExplicitReturnArrows: false,
			},
		],
		'one-var': 'off',
		'one-var-declaration-per-line': 'off',
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': 'off',
		'padded-blocks': 'off',
		'padding-line-between-statements': 'off',
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true,
				allowUnboundThis: false,
			},
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: false,
			},
		],
		'prefer-destructuring': [
			'error',
			{
				object: true,
				array: false,
			},
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: false,
			},
		],
		'prefer-reflect': 'off',
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': 'off',
		quotes: 'off',
		radix: ['error', 'always'],
		'require-atomic-updates': 'error',
		'require-await': 'off',
		'require-jsdoc': 'off',
		'require-unicode-regexp': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'off',
		semi: 'off',
		'semi-spacing': 'off',
		'semi-style': 'off',
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'off',
		'space-before-function-paren': 'off',
		'spaced-comment': 'off',
		'space-infix-ops': 'off',
		'space-in-parens': 'off',
		'space-unary-ops': 'off',
		strict: ['error', 'global'],
		'switch-colon-spacing': 'off',
		'symbol-description': 'error',
		'template-curly-spacing': 'off',
		'template-tag-spacing': 'off',
		'unicode-bom': 'off',
		'use-isnan': [
			'error',
			{
				enforceForSwitchCase: true,
				enforceForIndexOf: true,
			},
		],
		'valid-jsdoc': 'off',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
		'vars-on-top': 'off',
		'wrap-iife': 'off',
		'wrap-regex': 'off',
		'yield-star-spacing': 'off',
		yoda: [
			'error',
			'never',
			{
				exceptRange: true,
			},
		],
	},
	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				'max-lines-per-function': [
					'error',
					{
						max: 80,
						skipBlankLines: false,
						skipComments: false,
						IIFEs: true,
					},
				],
			},
		},
		{
			files: ['*.test.ts', '*.test.tsx'],
			env: {
				browser: false,
				node: true,
				jest: true,
			},
			rules: {
				'max-nested-callbacks': [
					'error',
					{
						max: 3,
					},
				],
			},
		},
	],
};
