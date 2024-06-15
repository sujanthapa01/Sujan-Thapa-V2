import '@testing-library/jest-dom/extend-expect';

// Mock Service Worker setup (optional, if you need to mock API calls)
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/api/endpoint', (req, res, ctx) => {
    return res(ctx.json({ data: 'sample data' }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
