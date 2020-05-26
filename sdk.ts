import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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

export type Query = {
  __typename?: 'Query';
  /** GET /wp/v2/user/me */
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
  first_name?: Maybe<Scalars['String']>;
  /** Last name for the user. */
  last_name?: Maybe<Scalars['String']>;
  /** The email address for the user. */
  email?: Maybe<Scalars['String']>;
  /** URL of the user. */
  url?: Maybe<Scalars['String']>;
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Author URL of the user. */
  link?: Maybe<Scalars['String']>;
  /** Locale for the user. */
  locale?: Maybe<UserLocale>;
  /** The nickname for the user. */
  nickname?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the user. */
  slug?: Maybe<Scalars['String']>;
  /** Registration date for the user. */
  registered_date?: Maybe<Scalars['String']>;
  /** Roles assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Password for the user (never included). */
  password?: Maybe<Scalars['String']>;
};

export enum UserLocale {
  EnUs = 'en_US'
}

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'name' | 'first_name' | 'last_name' | 'email' | 'url' | 'description' | 'link' | 'locale' | 'nickname' | 'slug' | 'registered_date' | 'roles' | 'password'>
  )> }
);


export const MeDocument = gql`
    query me {
  me {
    id
    username
    name
    first_name
    last_name
    email
    url
    description
    link
    locale
    nickname
    slug
    registered_date
    roles
    password
  }
}
    `;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    me(variables?: MeQueryVariables, options?: C): Promise<MeQuery> {
      return requester<MeQuery, MeQueryVariables>(MeDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;