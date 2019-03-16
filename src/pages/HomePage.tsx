import {createElement, FunctionComponent} from 'react';
import {useOvermind} from '../overmind';

const HomePage: FunctionComponent = () => {
    const {state, actions} = useOvermind();

    return (
        <div>
            HomePage
        </div>
    );
}

export default HomePage;