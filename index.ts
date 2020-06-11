import { getMesh, findAndParseConfig } from "@graphql-mesh/runtime";
import { getSdk } from "./sdk";

async function makeSdk() {
  const meshConfig = await findAndParseConfig();
  const { sdkRequester } = await getMesh(meshConfig);
  // Get fully-typed SDK using the Mesh client and based on your GraphQL operations
  return getSdk(sdkRequester);
}

async function main() {
  const sdk = await makeSdk();

  // me query working as expected
  const me = await sdk.meQuery();
  console.log("\n=== ME_QUERY ===>\n", JSON.stringify(me, null, 4));

  // new user mutation not working because of transform fieldNames: camelCase
  // without firstName and lastName params it's working
  const newUser = await sdk.createUserMutation({
    input: {
      email: "john.doe@gmail.com",
      username: "jdoe",
      firstName: "John",
      lastName: "Doe",
    },
  });
  console.log(
    "\n=== CREATE_USER_MUTATION ===>\n",
    JSON.stringify(newUser, null, 4)
  );
}
main();
