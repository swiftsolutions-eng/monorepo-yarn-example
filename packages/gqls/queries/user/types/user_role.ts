/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: user_role
// ====================================================

export interface user_role_user_user_role_role_role_permissions_permission {
  __typename: "user_permission";
  id: any;
  name: string;
  area: string;
}

export interface user_role_user_user_role_role_role_permissions {
  __typename: "user_role_permission";
  id: any;
  /**
   * An object relationship
   */
  permission: user_role_user_user_role_role_role_permissions_permission;
}

export interface user_role_user_user_role_role {
  __typename: "user_role";
  id: any;
  name: string;
  /**
   * An array relationship
   */
  role_permissions: user_role_user_user_role_role_role_permissions[];
}

export interface user_role_user_user_role_user_role_contexts {
  __typename: "user_user_role_context";
  id: any;
  key: string;
  value: string;
}

export interface user_role_user_user_role {
  __typename: "user_user_role";
  id: any;
  /**
   * An object relationship
   */
  role: user_role_user_user_role_role;
  /**
   * An array relationship
   */
  user_role_contexts: user_role_user_user_role_user_role_contexts[];
}

export interface user_role {
  /**
   * fetch data from the table: "user.user_role"
   */
  user_user_role: user_role_user_user_role[];
}
