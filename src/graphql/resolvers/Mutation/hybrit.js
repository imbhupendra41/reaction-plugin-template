/**
 * @name Mutation/hybrit
 * @method
 * @memberof hybrit/Mutation
 * @summary change an existing slogan or add a new one
 * @param {Object} _ - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.language - language that needs to be selected
 * @param {Object} context - an object containing the per-request state
 * @param {Object} info Info about the GraphQL request
 * @returns {Promise<Object>} slogan and language
 */
export default async function hybrit(_, args, context, info) {
  const { language, slogan } = args;

  const query = await context.mutations.updateSloganByLanguage(context, language, slogan)

  return {
    slogan: query.value.translation["reaction-plugin-template"].admin.hybrit.slogan,
    language: query.value.i18n,
  }
}