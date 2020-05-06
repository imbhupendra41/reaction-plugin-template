import resolvers from "./graphql/resolvers/index.js"
import schemas from "./graphql/schemas/index.js"
import i18n from "./i18n/index.js";
import startup from "./startup.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
    /**
     * Simple Ping Pong like example plugin
     * Allows the user to query HybrIT and return the slogan with desired language
     */
    await app.registerPlugin({
      label: "HybrIT Plugin Template",
      name: "reaction-plugin-template",
      i18n, 
      graphQL: {
        resolvers,
        schemas
      },
      functionsByType: {
          startup: [startup]
      },
      collections: {
        ExampleTemplateCollection: {
              name: "ExampleTemplateCollection"
          }
      }
    });
  }