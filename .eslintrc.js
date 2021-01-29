module.exports = {
    extends: [
        "react-app",
        "plugin:react/recommended"
    ],
    plugins: ["react"],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",

        "array-bracket-spacing": ["error", "always", { "singleValue": true }],
        "arrow-parens": ["error", "always"],
        "camelcase": "off",
        "capitalized-comments": "off",
        "comma-dangle": ["error", "always-multiline"],
        "eol-last": ["error", "always"],
        "eqeqeq": ["error", "smart"],
        "max-len": ["error", { "code": 120 }],
        "no-alert": "warn",
        "no-console": "warn",
        "no-multi-spaces": "error",
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-shadow": "error",
        "no-trailing-spaces": ["error", { "ignoreComments": true }],
        "object-curly-spacing": ["error", "always"],
        "space-in-parens": ["error", "always"],
        "quotes": ["error", "single"],

        // disable conflicting rules with @typescript-eslint
        "comma-spacing": "off",
        "indent": "off",
        "semi": "off",

        // ts specific
        "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],
        "@typescript-eslint/indent": ["error", 2],
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": { "delimiter": "semi", "requireLast": true },
            "singleline": { "delimiter": "semi", "requireLast": false }
        }],
        // "@typescript-eslint/no-unnecessary-condition": "error", Removed because ESLint crashing
        // "@typescript-eslint/no-unused-vars-experimental": "error", Removed because ESLint crashing
        // "@typescript-eslint/no-unsafe-call": "error",
        // "@typescript-eslint/no-unsafe-member-access": "error",
        // "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/semi": ["error", "always"],

        // jsx specific
        "react/jsx-closing-bracket-location": [1, 'tag-aligned'],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-spacing": [2, { "when": "always", "children": true }],
        "react/jsx-tag-spacing": "error",

        // react specific
        "react/prop-types": "off",

        /*
        The rest of possible options

        "react/jsx-child-element-spacing": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-curly-spacing": "off",
        "react/jsx-equals-spacing": "off",
        "react/jsx-first-prop-new-line": "off",
        "react/jsx-indent": []],
        "react/jsx-indent-props": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-multi-spaces": "off",
        "react/jsx-tag-spacing": "off",
        "react/jsx-wrap-multilines": "off"
        */
    },
};