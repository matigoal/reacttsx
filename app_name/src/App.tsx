import React, { Fragment, PureComponent } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';

interface IProps{

}
interface IState{

}
class App extends PureComponent<IProps, IState>{
  constructor(props: any){
    super(props);
  }

render(){
  return(
    <Fragment>
      <Layout><BurgerBuilder /></Layout>
    </Fragment>
  )
}
}
export default App;
