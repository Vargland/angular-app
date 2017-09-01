import actionTrigger from '../../Redux/actions/actions';
import * as type from '../../Redux/constants';

export default class sliderController {
    
    constructor($scope, $ngRedux) {
        this.$ngRedux = $ngRedux;

        const disconnect = $ngRedux.connect(state => ({
                img: state.slider
            })
        )(this);

    // remove the redux data binding when component is destroyed
    $scope.$on('$destroy', disconnect);
    };

    fetchImg () {
        this.$ngRedux.dispatch(actionTrigger(type.FETCH_IMG, null));
    };

    fetchImgSuccess () {
        this.$ngRedux.dispatch(actionTrigger(type.FETCH_IMG_SUCCESS, null));
    };


}