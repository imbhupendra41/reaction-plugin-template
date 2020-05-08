/**
 * @name Query/hybrit
 * @method
 * @memberof hybrit/Query
 * @summary query hybrit and return its slogan
 * @param {Object} _ - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.language - language that needs to be selected
 * @param {Object} context - an object containing the per-request state
 * @param {Object} info Info about the GraphQL request
 * @returns {Promise<Object>} slogan and language
 */
export default async function hybrit(_, args, context, info) {
    const { language } = args;
  
    const query = await context.queries.getLanguageSlogan(context, language)

    return {
      slogan: query.translation["reaction-plugin-template"].admin.hybrit.slogan,
      language: query.i18n,
    }
  }
  