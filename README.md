# ==============================================================================Why create this app ====================================

## Functional Requirements

-   The blog should have Latest Posts page (/ route)
-   The blog should have Post page (/posts/:postId route)
-   The blog should have Create Post page (/posts/new route)
-   User should be able to create a new post

## Technical Requirements

-   Code should be written with TypeScript
-   [ESLint and Prettier](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb) setup for code linting
-   We want to support SSR in our application. As the most simple solution, use [Next.js](https://nextjs.org/) because it supports SSR out of the box
-   User interface should be built with [styled-components](https://www.styled-components.com/)
-   Make sure to use React hooks everywhere instead of class-based components
-   Redux as data layer with any middlewares set you to prefer
-   The project should have clear README with steps to run it
-   Network request handled with [axios](https://github.com/axios/axios)
-   Use functional programming if you are know-how. [Ramda.js](http://ramdajs.com/) or [lodash/fp]a(https://github.com/lodash/lodash/wiki/FP-Guide) is plus to your score
-   Deploy the app to any free hosting for review. This item is optional, but nice to have :)

## API

To persist data and work with real API, we're going to use simple Node.js API created in a few minutes. API hosted in the cloud and you can query it from anywhere. API endpoints documentation: [https://documenter.getpostman.com/view/1917440/RzteTChV](https://documenter.getpostman.com/view/1917440/RzteTChV)

## Design

The design is up to you. Simple, minimalistic and clean would be nice. As a general example check [Ghost standard UI](https://blog.ghost.org/).

# ==============================================================================How to use this app ====================================

## TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/zeit/next.js/tree/canary/examples/with-typescript)

## How to use it?

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npm init next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-typescript
cd with-typescript
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
