import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Car = {
  __typename?: 'Car';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  alias: Scalars['String'];
};

export type CarInput = {
  name: Scalars['String'];
  alias?: Maybe<Scalars['String']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  userCreate: User;
  userUpdate: User;
  userDelete: Scalars['Boolean'];
  userRegister: User;
  carCreate: Car;
  carUpdate: Car;
  carDelete: Scalars['Boolean'];
  roleCreate: Role;
  roleUpdate: Role;
  roleDelete: Scalars['Boolean'];
  placeCreate: Place;
  placeUpdate: Place;
  placeDelete: Scalars['Boolean'];
  addQuantity: Place;
  removeQuantity: Place;
};


export type MutationUserCreateArgs = {
  data: UserInput;
};


export type MutationUserUpdateArgs = {
  data: UserInput;
  id: Scalars['String'];
};


export type MutationUserDeleteArgs = {
  isSoftDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUserRegisterArgs = {
  data: UserInput;
};


export type MutationCarCreateArgs = {
  data: CarInput;
};


export type MutationCarUpdateArgs = {
  data: CarInput;
  id: Scalars['String'];
};


export type MutationCarDeleteArgs = {
  isSoftDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationRoleCreateArgs = {
  data: RoleInput;
};


export type MutationRoleUpdateArgs = {
  data: RoleInput;
  id: Scalars['String'];
};


export type MutationRoleDeleteArgs = {
  isSoftDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationPlaceCreateArgs = {
  data: PlaceInput;
};


export type MutationPlaceUpdateArgs = {
  data: PlaceInput;
  id: Scalars['String'];
};


export type MutationPlaceDeleteArgs = {
  isSoftDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationAddQuantityArgs = {
  id: Scalars['String'];
};


export type MutationRemoveQuantityArgs = {
  id: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  maxQuantity: Scalars['Float'];
  quantity: Scalars['Float'];
  long: Scalars['String'];
  lat: Scalars['String'];
  userId: Scalars['String'];
  user?: Maybe<User>;
};

export type PlaceInput = {
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  maxQuantity: Scalars['Float'];
  quantity: Scalars['Float'];
  long: Scalars['String'];
  lat: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  userList: Array<User>;
  userById: User;
  carList: Array<Car>;
  carById: Car;
  roleList: Array<Role>;
  roleById: Role;
  placeList: Array<Place>;
  placeById: Place;
};


export type QueryUserListArgs = {
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryCarListArgs = {
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryCarByIdArgs = {
  id: Scalars['String'];
};


export type QueryRoleListArgs = {
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryRoleByIdArgs = {
  id: Scalars['String'];
};


export type QueryPlaceListArgs = {
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryPlaceByIdArgs = {
  id: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  display: Scalars['String'];
  userRoles?: Maybe<Array<UserRole>>;
};

export type RoleInput = {
  name: Scalars['String'];
  display: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  userName: Scalars['String'];
  userRoles?: Maybe<Array<UserRole>>;
  places?: Maybe<Array<Place>>;
};

export type UserInput = {
  userName: Scalars['String'];
  password: Scalars['String'];
};

export type UserRole = {
  __typename?: 'UserRole';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  roleId: Scalars['String'];
  user?: Maybe<User>;
  role?: Maybe<Role>;
};

export type UserRegisterMutationVariables = Exact<{
  data: UserInput;
}>;


export type UserRegisterMutation = (
  { __typename?: 'Mutation' }
  & { userRegister: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userName' | 'createdAt'>
  ) }
);


export const UserRegisterDocument = gql`
    mutation userRegister($data: UserInput!) {
  userRegister(data: $data) {
    id
    userName
    createdAt
  }
}
    `;
export type UserRegisterMutationFn = Apollo.MutationFunction<UserRegisterMutation, UserRegisterMutationVariables>;

/**
 * __useUserRegisterMutation__
 *
 * To run a mutation, you first call `useUserRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegisterMutation, { data, loading, error }] = useUserRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUserRegisterMutation(baseOptions?: Apollo.MutationHookOptions<UserRegisterMutation, UserRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserRegisterMutation, UserRegisterMutationVariables>(UserRegisterDocument, options);
      }
export type UserRegisterMutationHookResult = ReturnType<typeof useUserRegisterMutation>;
export type UserRegisterMutationResult = Apollo.MutationResult<UserRegisterMutation>;
export type UserRegisterMutationOptions = Apollo.BaseMutationOptions<UserRegisterMutation, UserRegisterMutationVariables>;