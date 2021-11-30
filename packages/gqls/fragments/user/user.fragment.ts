import { gql } from "@apollo/client";

export default gql`
  fragment ProductFragment on product_product {
    id
    name
    description
    status
    sku
    image_url
    type
    tenant {
      id
      name
      number
    }
    uom {
      id
      uom_standard_id
      conversion_uom_id
      conversion_ratio
      dimension
      dimension_width
      dimension_length
      dimension_height
      dimension_uom
      weight
      weight_uom
      uom_standard {
        number
      }
      identifier_list {
        id
        type
        number
        is_primary
      }
    }
    serial_number_management
    shelf_life_management
    lot_management
    uom_conversion_management
  }
`;
