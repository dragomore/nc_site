export interface DProperties {
  properties: Record<string, PropertyWrapper>
}

export type PropertyWrapper =
  | Checkbox
  | CreatedBy
  | CreatedTime
  | DateProp
  | Email
  | Files
  | Formula
  | LastEditedTime
  | NumberProp
  | People
  | PhoneNumber
  | Relation
  | RichText
  | Rollup
  | Select
  | Status
  | Title
  | Url

export interface BaseProperty {
  id?: string
  type: PropertyTypes
  name?: string
}

// Enum-like type for all property types
export type PropertyTypes =
  | 'checkbox'
  | 'created_by'
  | 'created_time'
  | 'date'
  | 'email'
  | 'files'
  | 'formula'
  | 'last_edited_time'
  | 'number'
  | 'people'
  | 'phone_number'
  | 'relation'
  | 'rich_text'
  | 'rollup'
  | 'select'
  | 'status'
  | 'title'
  | 'url'

export interface Checkbox extends BaseProperty {
  type: 'checkbox'
  checkbox?: boolean
}

export interface CreatedBy extends BaseProperty {
  type: 'created_by'
  created_by?: Record<string, unknown>
}

export interface CreatedTime extends BaseProperty {
  type: 'created_time'
  created_time?: Record<string, unknown>
}

export interface DateProp extends BaseProperty {
  type: 'date'
  date?: DateType
}

export interface DateType {
  start?: string
  end?: string
  time_zone?: string
}

export interface Email extends BaseProperty {
  type: 'email'
  email?: Record<string, unknown>
}

export interface Files extends BaseProperty {
  type: 'files'
  files?: Record<string, unknown>
}

export interface Formula extends BaseProperty {
  type: 'formula'
  formula?: Expression
}

export interface Expression {
  expression?: string
}

export interface LastEditedTime extends BaseProperty {
  type: 'last_edited_time'
  last_edited_time?: Record<string, unknown>
}

export interface NumberProp extends BaseProperty {
  type: 'number'
  number?: NumberFormat
}

export interface NumberFormat {
  format?: string
}

export interface People extends BaseProperty {
  type: 'people'
  people?: Record<string, unknown>
}

export interface PhoneNumber extends BaseProperty {
  type: 'phone_number'
  phone_number?: Record<string, unknown>
}

export interface Relation extends BaseProperty {
  type: 'relation'
  relation?: RelationData
}

export interface RelationData {
  database_id?: string
  dual_property?: DualProperty
}

export interface DualProperty {
  synced_property_name?: string
  synced_property_id?: string
}

export interface RichText extends BaseProperty {
  type: 'rich_text'
  rich_text: RichTextObject[]
}

export interface RichTextObject {
  type: string
  plain_text: string
  href?: string
  annotations?: unknown
  text?: unknown
}

export interface Rollup extends BaseProperty {
  type: 'rollup'
  rollup?: RollupData
}

export interface RollupData {
  rollup_property_name?: string
  relation_property_name?: string
  rollup_property_id?: string
  relation_property_id?: string
  function?: string
}

export interface Select extends BaseProperty {
  type: 'select'
  select?: Options
}

export interface Status extends BaseProperty {
  type: 'status'
  status?: StatusData
}

export interface StatusData {
  options?: Options
  groups?: Groups
}

export interface Title extends BaseProperty {
  type: 'title'
  title: RichTextObject[]
}

export interface Url extends BaseProperty {
  type: 'url'
  url?: Record<string, unknown>
}

export interface Options {
  id?: string
  name?: string
  color?: string
}

export interface Groups {
  id?: string
  name?: string
  color?: string
  option_ids?: string
}
