import _ from 'lodash';
import mock from '../mock';
import type from '../constants'

const initialState = {
    fetching: false,
    error: null,
    img: mock.getImgMock()
};

export default (state = initialState, action) => {
    let actionType = action.type;
    let newState = angular.extend({}, state);

    switch (actionType) {
        
        case 'FETCH_IMG': 
            
            newState = Object.assign({}, state, {
                fetching: true,
            });

            return newState
        
        case 'FETCH_IMG_SUCCESS': 
            
            setTimeout(() => {
                newState = Object.assign({}, state, {
                    fetching: false,
                });
    
                return newState;
            }, 2000);
        
        default: 
            return state;
    }
}