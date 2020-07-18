import React, { Fragment } from 'react';
import Aux from '../hoc/Aux';
const layout = (props: any) =>(
<Aux>
    <Fragment>Toolbar,SideDrawer,Backdrop</Fragment>
<main>{props.children}</main>
</Aux>
)
export default layout;
