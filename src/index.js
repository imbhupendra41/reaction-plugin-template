import resolvers from "./graphql/resolvers/index.js"
import schemas from "./graphql/mutations/index.js"
import pkg from "../../package.json";

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
      version: pkg.version, // Plugin Version
      i18n, 
      graphQL: {
        resolvers,
        schemas
      },
    });
  }