import React from 'react';
import '../Css/Main.css'
import Amination from './Amination';
function Main(props) {
    return (
        <div className='Main1' style={{display:'flex'}}>

            <div className='write' >

                <h1 className='h1'>
                    {props.name}
                </h1>
                <div className='varification'>

                    <div>

                        <h3>  {props.name2} </h3>

                    </div>
                </div>


            </div>

            <div className='image'>
                <Amination image={props.image}></Amination>
            </div>

        </div>

    )
};
export default Main;
