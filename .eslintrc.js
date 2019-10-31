module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": false,
        "es6": true
    },

    "extends": [
        "plugin:vue/recommended"
    ],

    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },

    "rules": {
        // This is bugged
        "require-atomic-updates": "off",

        "no-unused-vars": ["error", { "args": "none", "ignoreRestSiblings": true }],

        "comma-dangle": ["error", "always-multiline"],
        "arrow-parens": ["error", "as-needed"],

        "indent": ["error", "tab", { SwitchCase: 1 }],
        "object-curly-spacing": ["error", "always"],
        "space-infix-ops": ["error"],

        "max-len": ["error", {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }],

        "eqeqeq": ["error", "always"],

        "linebreak-style": [
            "error",
            "unix"
        ],

        "quotes": [
            "error",
            "single"
        ],

        "semi": [
            "error",
            "always"
        ],

        "indent": "off",

        "vue/script-indent": [
            "error",
            "tab",
            {"baseIndent": 1}
        ],
        "vue/html-indent": [
            "error",
            "tab",
        ],
        "vue/max-attributes-per-line": [2, {
            "singleline": 4,
            "multiline": {
                "max": 4,
                "allowFirstLine": true,
            }
        }],

        "vue/order-in-components": "off"
    }
};