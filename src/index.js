import _ from 'lodash'
import './css/myStyle.css'

function variable() {
    _.debounce(() => {
        console.log('hi howdy')
    });
}