import actionTrigger from '../../Redux/actions/fetchTodo';
import * as type from '../../Redux/constants';

export default class todoController {
    
    constructor($scope, $ngRedux) {
        this.$ngRedux = $ngRedux;
        const disconnect = $ngRedux.connect(state => ({
                todo: state.data
            })
        )(this);

        // remove the redux data binding when component is destroyed
        $scope.$on('$destroy', disconnect);
    }
    
    fetchTask() {
        this.$ngRedux.dispatch(actionTrigger(type.FETCH_TODO_SUCCESS, null))
    }

    addAct() {
        this.$ngRedux.dispatch(actionTrigger(type.ADD_TODO, this.newAct));
        this.newAct = "";
    }
}