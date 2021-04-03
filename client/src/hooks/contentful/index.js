import { createClient } from "contentful";

const contentful = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const getClient = (preview) => (preview ? previewClient : contentful);

/** TODO: Define access patterns.
 * getAllContent
 * type ContentType = "expereince" | "story" | "static"
 * type ContentKind = "car" | "yacht" | "home"
 * interface ContentParams {
 *  kind: ContentKind;
 *  category: 'home' | 'yacht' | 'car';
 * }
 * getContnetByType(type, params)
 * getContentById(id)
 */
//TODO: Replace all implementations of the getContent funtion with the new getContent function below.
export async function getContent({ skip = 0, limit, type }) {
  try {
    if (type) {
      const content = await getClient(false).getEntries({
        content_type: type,
        limit,
        skip,

        // "fields.rate[lt]": `${rate}`,
        // select: fields,
      });
      return content.items;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getContentById(id) {
  try {
    return await getClient(false).getEntry(id);
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getAllExperiences(type) {
  try {
    return await contentful.getEntries({
      content_type: type,
      // limit,
      // skip,

      // "fields.rate[lt]": `${rate}`,
      // select: fields,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getContentByType(type, params) {
  // const { limit, ...others } = params; //TODO: This is for a future implementation.
  try {
    return await getClient(false).getEntries({
      content_type: type,
      // "fields.rate[lt]": `${rate}`,
      // select: fields,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getRelatedContent(id, params) {
  const content = await getContentById(id);
  //parse the props from content and get the params to pass to getContentByType
  return getContentByType(type, params);
}

export async function getExperiences(type) {
  try {
    return await contentful.getEntries(type);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function _getExperiences(xid, type) {
  let related, entry;
  const fields =
    type === "cars"
      ? "sys.id,fields.rate,fields.passengers,fields.media"
      : "sys.id,fields.name,fields.rate,fields.cabins,fields.heads,fields.passengers,fields.media";
  try {
    entry = await getClient(false).getEntry(xid);
    related = await getClient(false).getEntries({
      content_type: "bookable",
      "fields.rate[lt]": `${entry.fields.rate}`,
      select: fields,
    });
    related = related.items.slice(0, 6);
    const experiences = { entry, related };
    return experiences;
  } catch (error) {
    console.log(error);
  }
}

/**getExperiences(type: string, filters: object, id: string)
 * get all the experiences the match the passed type and filters. if an id is passed then the first params will be ignored and only the id will be used to retrieve the experience.  */

export async function getEntriesOfType(type, filter) {
  try {
    const entries = await getClient(false).getEntries({
      content_type: type,
      order: "-sys.createdAt",
    });
    return entries.items;
  } catch (error) {
    console.log(error);
  }
}
export async function getExperiencesOfType(type, filter, id, skip, limit) {
  try {
    const entries = await getClient(false).getEntries({
      skip,
      limit,
      content_type: type,
      order: "-sys.createdAt",
    });
    return entries.items;
  } catch (error) {
    console.log(error);
  }
}

export async function getExperienceById(id) {
  try {
    const experience = await getClient(false).getEntry(id);
    return experience;
  } catch (error) {
    console.log(error);
  }
}

export async function getRelatedExperiences(type, params) {
  let { rate } = params;

  //TODO: Use this function body as a model for get related content.
  //rate should be passed into this function as a property of params.

  //if Array.isArray(params.types) === true for (type of params.types) => getContentByType
  const fields =
    type === "cars"
      ? "sys.id,fields.rate,fields.passengers,fields.media"
      : "sys.id,fields.name,fields.rate,fields.cabins,fields.heads,fields.passengers,fields.media";

  try {
    const experiences = await getClient(false).getEntries({
      content_type: type,
      "fields.rate[lt]": `${rate}`,
      select: fields,
    });
    return experiences;
  } catch (error) {
    console.log(error);
  }
}
