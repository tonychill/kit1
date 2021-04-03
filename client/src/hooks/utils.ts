export function parseMediaToObjectArray(media: any) {
  /**TODO:
   * Add logic that will return a single string array for media that only has
   * one image from the server (i.e. Contentful)
   */
  if (Array.isArray(media)) {
    return media.map((imageLink) => ({ src: imageLink.fields.file.url, link: imageLink.fields.file.url }));
  } else return [];
}
