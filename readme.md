## Bug description

I can't use twice a requestSchema in the .meshrc.

## To reproduce

```sh
yarn install
yarn generate:sdk
```

error:

```sh
Error: Schema must contain uniquely named types but contains multiple types named "UserInputInput".
```
