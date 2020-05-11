/**
 * @name updateSloganByLanguage
 * @method
 * @memberof GraphQL/ExampleTemplateCollection
 * @summary Mutate the slogan based on the right langauge
 * @param {Object} context - an object containing the per-request state
 * @param {String} languageCode - Language that needs to be returned
 * @param {String} slogan - Slogan text that will be inserted
 */
export default async function updateSloganByLanguage(
    context,
    languageCode,
    slogan
) {
    // We can find our collection by looking into context
    const { ExampleTemplateCollection } = context.collections;

    return ExampleTemplateCollection.findOneAndUpdate(
        {
            i18n: languageCode,
        },
        {
            $set: {
                "translation.reaction-plugin-template.admin.hybrit.slogan": slogan,
            },
        },
        { returnOriginal: false }
    );
}
