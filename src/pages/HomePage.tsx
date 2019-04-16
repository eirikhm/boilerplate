import { createElement, FunctionComponent } from 'react';
import { useOvermind } from '../overmind';

const HomePage: FunctionComponent = () => {
    const { state, actions } = useOvermind();

    if (!state.core.posts.length)
    {
        return <h4>Loading posts...</h4>
    }
    return (
        <div>
            <h1>HomePage</h1>
            {state.core.posts.map(post => <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>)}
        </div>
    );
}

export default HomePage;