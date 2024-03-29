import { AUTH_STATUS, IS_EDIT, MY_GROUPS, SYSTEM_LANG, USER_DATA } from './actions';
import { AuthStatus, ReduxAction, ReduxState } from 'interface';
import { VshareeLanguage } from '../komeil/komeil.lang';

export const initial_state: ReduxState = {
    userData: null,
    language: VshareeLanguage,
    authStatus: AuthStatus.isPending,
    isEdit: false,
    myGroups: undefined,
};

function reducer(state: ReduxState = initial_state, action: ReduxAction<any>): ReduxState {
    switch (action.type) {
        case USER_DATA:
            return { ...state, userData: action.payload };
        case SYSTEM_LANG:
            return { ...state, language: action.payload };
        case AUTH_STATUS:
            return { ...state, authStatus: action.payload };
        case IS_EDIT:
            return { ...state, isEdit: action.payload };
        case MY_GROUPS:
            return { ...state, myGroups: action.payload };
        default:
            return state;
    }
}

export default reducer;
