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
    };

    addAct() {
        this.$ngRedux.dispatch(actionTrigger(type.ADD_TODO, this.newAct));
        this.newAct = "";
    };

    editAct(id) {
        this.$ngRedux.dispatch(actionTrigger(type.EDIT_TODO, id));
    };

    saveAct(id, description) {
        this.$ngRedux.dispatch(actionTrigger(type.SAVE_TODO, id, description));
    };

    doneAct(id) {
        this.$ngRedux.dispatch(actionTrigger(type.DONE_TODO, id));
    };

    importantAct(id) {
        this.$ngRedux.dispatch(actionTrigger(type.IMPORTANT_TODO, id));
    };

    deleteAct(id) {
        this.$ngRedux.dispatch(actionTrigger(type.DELETE_TODO, id))
    };
}