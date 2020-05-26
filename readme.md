## Bug description

I can't put twice a response schema in the .meshrc. For example if I create or update a user it return me the same json response.

## To reproduce

```
yarn install
yarn generate:sdk
```

stack:
```
TypeError: filePath.split(...).map(...).flat is not a function
    at getFileName (/Users/vincentbathellier/Documents/Cobeia/Project/analyze-bundles/node_modules/@graphql-mesh/json-schema/index.cjs.js:202:10)
    at Promise.all._a.map (/Users/vincentbathellier/Documents/Cobeia/Project/analyze-bundles/node_modules/@graphql-mesh/json-schema/index.cjs.js:226:38)
```