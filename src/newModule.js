import _ from 'lodash';
import React from 'react'

let debounce = ()=>{
    _.debounce(() => {
        console.log('hi howdy from newModule please dont reload')
    });
}

let join = () => {
    return _.join("11", "12");
}

export { join,debounce}