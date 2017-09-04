import _ from 'lodash';
import mock from './mock';

function getMockTodo () {
    return mock;
}

function getImgMock () {
    let mockImg = _.map(mock, 'img');
    
    return mockImg;
}
export default { 
    getMockTodo, 
    getImgMock 
} 
