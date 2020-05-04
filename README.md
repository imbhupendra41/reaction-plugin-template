# reaction-plugin-template


## How to use plugin template

Copy the `src` folder into the reaction api folder at `src/plugins`

Rename the src folder to whatever plugin name you want
Inside the `src/index.js` of your plugin you will find the name of your plugin. 
Registrer the plugin at the `src/plugins/registerPlugins.js` file like so

at the top of the file import your plugin
```js
import registrerReactionPluginTemplate from "./plugins/reaction-plugin-template/index.js"
```
You can name the function anything you want in order to organize your imports accordingly. 

Inside the `registrerPlugins()` function we will define an await of our plugin.
```js
await registrerReactionPluginTemplate(app)
```
Run
`-d` flag for detached mode

```sh
ln -s docker-compose.dev.yml docker-compose.override.yml
docker-compose up [-d]
```

### Local Development

In order to work on your plugin locally follow these steps

How to link in a local NPM package for a plugin while working on it
In your API project docker-compose.dev.yml file, in the volumes list, add one line for each local package you need to link into the container:

- /absolute/file/path/to/package/root:/usr/local/src/app/node_modules/your-plugin-package-name

In registerPlugins.js, import your-plugin-package-name and register it.

Run npm install in the package directory if it has non-dev dependencies.

Then in the API project, ensure that you have symlinked docker-compose.dev.yml to docker-compose.override.yml and run docker-compose up -d to start the API.

In order to trigger a refresh just change anything inside the `src/index.js` of your reaction api.