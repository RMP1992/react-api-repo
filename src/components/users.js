import React from 'react'
import Spinner from './spinner';

function users(props) {
    if(props.loading){
        return <Spinner />
    }else{
        return (
            <div>
                {props.data}
            </div>
        )
    }
    
}
export default users