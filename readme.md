## Bug description

I can't use twice a requestSchema in the .meshrc.

## To reproduce

```
yarn install
yarn generate:sdk
```

error:

```
Error: Schema must contain uniquely named types but contains multiple types named "UserInputInput".
```
