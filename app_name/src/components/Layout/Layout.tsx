import React, { Fragment } from 'react';
import './Layout.css';

import Aux from '../hoc/Aux';
const layout = (props: any) =>(
<Aux>
    <Fragment>Toolbar,SideDrawer,Backdrop</Fragment>
<main className='Content'>{props.children}</main>
</Aux>
)
export default layout;
