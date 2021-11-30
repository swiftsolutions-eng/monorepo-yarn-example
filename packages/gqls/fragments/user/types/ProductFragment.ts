/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFragment
// ====================================================

export interface ProductFragment_tenant {
  __typename: "tenant_tenant";
  id: any;
  name: string;
  number: string;
}

export interface ProductFragment_uom_uom_standard {
  __typename: "product_uom_standard";
  number: string;
}

export interface ProductFragment_uom_identifier_list {
  __typename: "product_identifier";
  id: any;
  type: string;
  number: string;
  is_primary: boolean;
}

export interface ProductFragment_uom {
  __typename: "product_uom";
  id: any;
  uom_standard_id: any;
  conversion_uom_id: any | null;
  conversion_ratio: number | null;
  dimension: any | null;
  dimension_width: any | null;
  dimension_length: any | null;
  dimension_height: any | null;
  dimension_uom: string | null;
  weight: any | null;
  weight_uom: string | null;
  /**
   * An object relationship
   */
  uom_standard: ProductFragment_uom_uom_standard | null;
  /**
   * An array relationship
   */
  identifier_list: ProductFragment_uom_identifier_list[];
}

export interface ProductFragment {
  __typename: "product_product";
  id: any;
  name: string;
  description: string | null;
  status: string;
  sku: string;
  image_url: string | null;
  type: string | null;
  /**
   * An object relationship
   */
  tenant: ProductFragment_tenant | null;
  /**
   * An array relationship
   */
  uom: ProductFragment_uom[];
  serial_number_management: string | null;
  shelf_life_management: string | null;
  lot_management: string | null;
  uom_conversion_management: string | null;
}
