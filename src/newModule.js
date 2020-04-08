import _ from 'lodash';

function variable() {
    _.debounce(() => {
        console.log('hi howdy from newModule')
    });
}