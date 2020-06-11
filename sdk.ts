import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** POST /users */
  createUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  /** GET /me */
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  /** Unique identifier for the user. */
  id?: Maybe<Scalars['Int']>;
  /** Login name for the user. */
  username?: Maybe<Scalars['String']>;
  /** Display name for the user. */
  name?: Maybe<Scalars['String']>;
  /** First name for the user. */
  firstName?: Maybe<Scalars['String']>;
  /** Last name for the user. */
  lastName?: Maybe<Scalars['String']>;
  /** The email address for the user. */
  email?: Maybe<Scalars['String']>;
  /** Registration date for the user. */
  registeredDate?: Maybe<Scalars['String']>;
};

export type UserInput = {
  /** Login name for the user. */
  username?: Maybe<Scalars['String']>;
  /** First name for the user. */
  firstName?: Maybe<Scalars['String']>;
  /** Last name for the user. */
  lastName?: Maybe<Scalars['String']>;
  /** The email address for the user. */
  email?: Maybe<Scalars['String']>;
};

export type MeQueryQueryVariables = {};


export type MeQueryQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'name' | 'firstName' | 'lastName' | 'email' | 'registeredDate'>
  )> }
);

export type CreateUserMutationMutationVariables = Exact<{
  input?: Maybe<UserInput>;
}>;


export type CreateUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'name' | 'firstName' | 'lastName' | 'email' | 'registeredDate'>
  )> }
);


export const MeQueryDocument = gql`
    query meQuery {
  me {
    id
    username
    name
    firstName
    lastName
    email
    registeredDate
  }
}
    `;
export const CreateUserMutationDocument = gql`
    mutation createUserMutation($input: UserInput) {
  createUser(input: $input) {
    id
    username
    name
    firstName
    lastName
    email
    registeredDate
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    meQuery(variables?: MeQueryQueryVariables, options?: C): Promise<MeQueryQuery> {
      return requester<MeQueryQuery, MeQueryQueryVariables>(MeQueryDocument, variables, options);
    },
    createUserMutation(variables?: CreateUserMutationMutationVariables, options?: C): Promise<CreateUserMutationMutation> {
      return requester<CreateUserMutationMutation, CreateUserMutationMutationVariables>(CreateUserMutationDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;