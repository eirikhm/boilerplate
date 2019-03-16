import page from 'page'

import { RouteContext } from '../../types'

export const router = {
  route(url: string, action: (payload: RouteContext) => void): void {
    page(url, ({ params, path }) => action({ params, path }));
  },
  redirect: page.redirect,
  start: () => page.start({}),
}
