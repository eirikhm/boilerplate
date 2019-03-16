
import { Settings } from "../../services/FacebookAPI/types";
export type State = {
    apiHost: String
    facebookSettings: Settings
}

const state: State = {
    apiHost: null,
    facebookSettings: null,
};

export default state;
