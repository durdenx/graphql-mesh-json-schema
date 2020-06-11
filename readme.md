# SDK: naming convention transform camelCase not working for inputTypes

## Bug description

When we use the new naming convention transform with the SDK to transform snake_case types in camelCase, renamed input fields are not well binded with their corresponding snake_case fields.

```
 transforms:
  - namingConvention:
      fieldNames: camelCase
```

## To reproduce

```sh
yarn install
yarn generate:sdk
yarn server:start
yarn client:start
```

### errors

```sh
GraphQLError: Variable "$input" got invalid value { username: "jdoe", firstName: "John", lastName: "Doe", email: "john.doe@gmail.com" }; Field "firstName" is not defined by type UserInput. Did you mean first_name or last_name?
Variable "$input" got invalid value { username: "jdoe", firstName: "John", lastName: "Doe", email: "john.doe@gmail.com" }; Field "lastName" is not defined by type UserInput. Did you mean last_name, username, or first_name?
```

```sh
(node:9900) UnhandledPromiseRejectionWarning: Error: GraphQL Mesh SDK Failed (1 errors): Variable "$input" got invalid value { username: "jdoe", firstName: "John", lastName: "Doe", email: "john.doe@gmail.com" }; Field "firstName" is not defined by type UserInput. Did you mean first_name or last_name?
Variable "$input" got invalid value { username: "jdoe", firstName: "John", lastName: "Doe", email: "john.doe@gmail.com" }; Field "lastName" is not defined by type UserInput. Did you mean last_name, username, or first_name?
```
