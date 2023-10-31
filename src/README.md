# TSOA & OpenAPI Generator Demo Backend

This demo project was built for teaching Capgemini colleagues how to use TSOA and OpenAPI Generator to generate a frontend API client from a backend OpenAPI specification.

## Folder & File structure

### Folders

- `./app` - Contains the nextjs frontend routing and pages.
- `./components` - Contains the react components.
- `./hooks` - Contains the react hooks.
- `./providers` - Contains the react context providers (ie. redux, react-query, etc.)
- `./public` - Contains the static assets.
- `./redux` - Contains the redux store, slices and application hooks.
- `./utils` - Contains the utility functions.

### Files

- `.openapi-generator` - Contains generator specific configuration options for OpenAPI Generator.
- `.openapitools.json` - Contains config options for OpenAPI Generator.

## Setup & Run

```bash
  # Install dependencies
  yarn install

  # Generate the routes and swagger spec
  # You will need to point the `gen` npm script to the `swagger.json` in the backend for this to work.
  yarn gen

  # Run the dev server
  yarn dev
```

After running `yarn dev`, the server will start and be listening for changes.
