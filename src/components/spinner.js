import React from 'react';
import loadingGif from '../img/spinner.gif';

function spinner() {
    return (
        <div>
            <img src={loadingGif} alt= "loading" />
        </div>
    )
}
export default spinner;