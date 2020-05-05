import './css/myStyle.css'
import React from 'react'
import {debounce} from './newModule'

(function () {

    import(/* webpackChunkName: "lodash" ,webpackPrefetch: true*/ 'lodash').then(({ default: _ }) => {
        debounce(() => {
            console.log('hi howdy hi')
        }, 2000);
    }).catch((error) => {
        console.log('error ', error)
    })
})();

debounce();