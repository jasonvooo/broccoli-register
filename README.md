# Broccoli & Co. Company Registration

Web application which allows for Broccoli & Co. company to capture expressions of interest for the company. Simple landing page with light and dark mode support which allow users to submit their name and email.

## Architecture

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mantine UI](https://mantine.dev/) (CSS modules and postcss for styling as recommended by Mantine)
- [@tanstack/react-query](https://tanstack.com/query/latest)

## Testing

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
- [jsdom](https://github.com/jsdom/jsdom)
- [msw](https://mswjs.io/)

## How to run

1. Use node 22.13.0

```
nvm use
```

2. Install dependencies

```
npm install
```

3.

```
npm run dev
```

## Utilities

Unit tests

```
npm run test
```

Prettier

```
npm run prettier
npm run prettier:fix
```

Eslint

```
npm run lint
npm run lint:fix
```

TypeScript type checker

```
npm run typecheck
```

## Notes / Future improvements

- API_URL is hardcoded in this exercise but in a production like env it should be loaded via env variable
- Include additional images to the landing page to make it pop more
