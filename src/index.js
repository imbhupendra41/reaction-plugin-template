import queries from "./graphql/queries/index.js"
import resolvers from "./graphql/resolvers/index.js"
import mutations from "./graphql/mutations/index.js"
import schemas from "./graphql/mutations/index.js"
import pkg from "../../package.json";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
    /**
     * Simple Ping Pong example plugin
     * Allows the user to query HybrIT and return the slogan with desired language
     */
    await app.registerPlugin({
      label: "HybrIT Plugin Template",
      name: "hybrit-plugin-template",
      version: pkg.version, // Plugin Version
      i18n, 
      graphQL: {
        resolvers,
        schemas
      },
      mutations,
      queries
    });
  }