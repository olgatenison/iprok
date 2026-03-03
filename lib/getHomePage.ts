import { contentful } from "./contentful";

export async function getHomePage() {
  const res = await contentful.getEntries({
    content_type: "page",
    "fields.internal": "Home",
    include: 2,
    limit: 1,
  });

  return res.items[0] ?? null;
}