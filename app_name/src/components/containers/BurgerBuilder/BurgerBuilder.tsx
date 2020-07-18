import React, { Fragment } from 'react';
import Aux from '../../hoc/Aux';

interface IProps{

}
interface IState{

}

class BurgerBuild extends React.Component<IProps, IState>{
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Aux>
                    <div>Burger</div>
                    <div>Burger Controls</div>
                </Aux>
            </Fragment>
        )
     
    }
}

export default BurgerBuild;