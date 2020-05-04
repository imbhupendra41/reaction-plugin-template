/**
 * @name Query/hybrit
 * @method
 * @memberof hybrit/Query
 * @summary query hybrit and return its slogan
 * @param {Object} _ - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.shopId - id of user to query
 * @param {Object} context - an object containing the per-request state
 * @param {Object} info Info about the GraphQL request
 * @returns {Promise<Object>} user account object
 */
export default async function hybrit(_, args, context, info) {
    const { language } = args;
  
    let slogan;
  
    switch (language) {
      case "nl":
        slogan = "codeer het slimmer";
        break;
      case "de":
        slogan = "codier es schlimmer";
        break;
      default:
        slogan = "code it smarter";
    }
  
    return {
      slogan,
      language,
    };
  }
  