import { createElement } from 'react'
import { useOvermind } from "../overmind";
import { Helmet } from "react-helmet";

import { Page } from '../types';

import { useScrollToPosition } from '../utils';
import HomePage from '../pages/HomePage';

const App  = () => {
    const { state } = useOvermind();
    useScrollToPosition(state.core.page);

    const pages = {
        [Page.HOME]: HomePage,
    }

    if (!state.core.page) {
        return (<div>Loading</div>);
    }

    const CurrentPage = pages[state.core.page];
    if (!CurrentPage) {
        return <div>404</div>;
    }

    return [
        <Helmet key="helmet">
            <meta charSet="utf-8" />
            <title>Boilerplate</title>
            <meta name="description" content="desc" />
            <meta name="keywords" content="key, words" />
        </Helmet>,
        <CurrentPage key="page" />
    ];
}
export default App;