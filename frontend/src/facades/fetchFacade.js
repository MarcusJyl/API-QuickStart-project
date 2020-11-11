import {handleHttpErrors, makeOptions} from './fetchUtils'

function facade() {
    const fetchData = () => {
        const options = makeOptions("GET", true);
        return fetch(URL, options).then(handleHttpErrors);
    }
}