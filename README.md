# Integrate react with express app and pug template

- Each page will be served the express app (route + view with pug template)
- Each page includes its own javascript from `dist` folder, which is served as static of the app.
- Scripts in the `dist` folder are compiled from the `public` folder by `webpack`

## Available scripts

### `npm run webpack:watch`
Tell webpack to watch any change and recompile the `dist`

### `npm run build`
Use webpack to build the `dist`

### `npm run dev`
Start the express server with nodemon. Any change will trigger a restart of the app