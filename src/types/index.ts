export type RouteContext<T = object> = {
    params: T
    path: string
}
export type ThreadParams = {
    slug: string
}

export enum Page {
    HOME = 'HOME',
}