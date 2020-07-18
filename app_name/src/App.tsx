import React, { Fragment } from 'react';

import Layout from './components/Layout/Layout';


interface IProps{

}
interface IState{

}
class App extends React.Component<IProps, IState>{
  constructor(props: any){
    super(props);
  }

render(){
  return(
    <Fragment>
      <Layout><p>Test</p></Layout>
    </Fragment>
  )
}
}
export default App;
