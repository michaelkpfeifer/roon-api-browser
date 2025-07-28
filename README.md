# roon-api-browser

Use the Roon API to browse your Roon Core.

## Overview

This package provides a convenience wrapper around Roon's `browse`
API. And it can schedule tracks to be played by the Roon core. It also
helps clarify what the Roon API can and cannot do.

## Setup

This package is under development and is not yet published to npm.

To use it in your local project, clone it from:

https://github.com/michaelkpfeifer/roon-api-browser

Then:

- Run `yarn dev` from the `backend` directory.
- Run `yarn dev` from the `frontend` directory.
- Open your browser and navigate to the URL shown when running `yarn
  dev` from the `frontend` directory.

Before running the extension, make sure `roon-api-browser` is
**accepted as an extension** in the Roon Core’s **Settings →
Extensions** panel.

If the backend cannot automatically determine the URL of the Roon
Core, add it manually in a `.env` file.  A typical `.env` file looks
like:

```env
CORE_URL=http://192.168.2.103:9330
```
