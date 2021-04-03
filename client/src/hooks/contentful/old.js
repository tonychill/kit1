export async function getPreviewItemBySlug(slug, type) {
  const entries = await getClient(true).getEntries({
    content_type: type,
    limit: 1,
    "fields.slug[in]": slug,
  });
  return parseItemEntries(entries)[0];
}

export async function getAllItemsWithSlug(type) {
  const entries = await contentful.getEntries({
    content_type: type,
    select: "fields.slug",
  });
  return parseItemEntries(entries, (post) => post.fields);
}

function parseItem({ fields }) {
  return {
    // title: fields.title,
    // slug: fields.slug,
    // date: fields.date,
    // content: fields.content,
    // excerpt: fields.excerpt,
    // coverImage: fields.coverImage.fields.file,
    // author: parseTraveler(fields.author),
  };
}

function parseItemEntries(entries, cb = parseItem) {
  return entries.items.map(cb);
}
function parseTraveler({ fields }) {
  return {
    // name: fields.name,
    // picture: fields.picture.fields.file,
  };
}
export async function getOtherItems(slug, preview, type) {
  const entry = await getClient(preview).getEntries({
    content_type: type,
    limit: 1,
    "fields.slug[in]": slug,
  });
  const entries = await getClient(preview, type).getEntries({
    content_type: type,
    limit: 2,
    order: "-fields.date",
    "fields.slug[nin]": slug,
  });

  return {
    post: parseItemEntries(entry)[0],
    morePosts: parseItemEntries(entries),
  };
}
// const previewClient = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
//   host: "preview.contentful.com",
// });

// async function fetchEntriesForContentType() {
//   const entries = await contentful.getEntries({
//     order: "-sys.createdAt",
//     content_type: "story",
//   });
//   if (entries.items) return entries.items;
//   console.log(`Error getting Entries for ${contentType.name}.`);
// }
// export async function getContentx(id, type) {
//   try {
//     if (type) {
//       return await getClient(false).getEntries({
//         /**TODO: Build algo that will take the passed in params object and build the req
//          * object that will be send to Contentful. It should loop through all the properties
//          * within the parmas object and create a property in the Contentful request object
//          * along with it's value.
//          * ex: for ('label' in params) => fields[label]: params.label
//          * remeber to send the correct fields to Contentful
//          */
//         content_type: type,
//         // "fields.rate[lt]": `${rate}`,
//         // select: fields,
//       });
//     } else if (id) {
//       return await getClient(false).getEntry(id);
//     }
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }