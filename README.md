# Detect unused tss-react classes

This eslint plugin lets you detect unused [tss-react](https://tss-react.dev) classes:

![Example image of the rule working](./.github/preview.png)

# Usage

1. Add the dependency:
```sh
yarn add --dev eslint-plugin-tss-unused-classes
```

2. Enable it in you ESLint config

**Case 1**: You are in a [`create-react-app`](https://create-react-app.dev/) project:  
Edit your `package.json`:  

```jsonc
{
  //...
  "eslintConfig": {
    "plugins": [
      //...
      "tss-unused-classes"
    ],
    "rules": {
      "tss-unused-classes/unused-classes": "warn"
    }
  },
  //...
}
```
[Example projet](https://github.com/InseeFrLab/onyxia-web)

**Case 2**: You have installed ESLint manually:  
Edit your `.eslintrc.js` file:  
```js
module.exports = {
  // ...
  plugins: [
    // ...
    'tss-unused-classes'
  ],
  rules: {
    // ...
    'tss-unused-classes/unused-classes': 'warn'
  }
}
```
[Example project](https://github.com/InseeFrLab/onyxia-ui)



