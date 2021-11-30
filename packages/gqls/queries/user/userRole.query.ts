import { gql } from "@apollo/client";

export default gql`
  query user_role {
    user_user_role {
      id
      role {
        id
        name
        role_permissions {
          id
          permission {
            id
            name
            area
          }
        }
      }
      user_role_contexts {
        id
        key
        value
      }
    }
  }
`;
