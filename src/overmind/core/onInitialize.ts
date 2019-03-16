import { OnInitialize } from '../index'
import { Page } from '../../types';

const onInitialize: OnInitialize = async ({ state, effects, actions }, overmind) => {

    state.appConfig = window.__APP_CONFIG__;


    const router = effects.core.router;
    router.route('/', () => {
        state.core.page = Page.HOME;
    });


    router.start()
}

export default onInitialize