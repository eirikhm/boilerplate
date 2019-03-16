import { Operator } from "../index";
import { Page, RouteContext } from "../../types"
import { action } from 'overmind';

export const setPage: Operator<Page> = action(({ state }, value) => {
    state.core.page = value;
})
