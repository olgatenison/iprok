import type { Document } from "@contentful/rich-text-types";

export type SectionFields = {
  sectionName?: string;

  title?: string;
  title1?: string;

  subtitle1?: string;
  subtitle2?: string;

  description?: string;
  description2?: string;

  btn?: string;

  richText?: Document;
  richText1?: Document; // ← это имя должно совпасть с Field ID!
};


export type SectionEntry = {
  sys: { id: string };
  fields: SectionFields;
};