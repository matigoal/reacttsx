import React, { Component } from 'react';
import './../BurgerIngredient/BurgerIngredient.css';
import * as PropTypes from 'prop-types';


// class BurgerIngredient extends Component{
//     render(){
//         let ingredient = null;

// switch(this.props.type){
//     case('bread-bootom'):
// ingredient =  <div className='BreadBottom '></div>;
// break;
//  case ('bread-top'):
//      ingredient = (
//         <div className='Bread-Top'>
//         <div className='Seeds1'></div>
//         <div className='Seeds2'></div>
//         </div>
//      );
//      break;
//      case('meat'):
//      ingredient= <div className='Meat'></div>;
//      break;
//      case('cheese'):
//      ingredient= <div className='Cheese'></div>;
//      break;
//      case('bacon'):
//      ingredient= <div className='Bacon'></div>;
//      break;
//      case('salad'):
//      ingredient= <div className='Salad'></div>;
//      break;
//      default:
//          ingredient = null;
// }
// return ingredient;

//     }
// } 
// BurgerIngredient.propTypes = {
//     callback: PropTypes.string.isRequired;
// }
// export default BurgerIngredient;


 interface IProps {
   
  type: string;
}

 interface IState {}

 class BurgerIngredient extends React.Component<IProps, IState> {
    render() {

        let ingredient = null;

        switch(this.props.type){
            case('bread-bootom'):
        ingredient =  <div className='BreadBottom '></div>;
        break;
         case ('bread-top'):
             ingredient = (
                <div className='Bread-Top'>
                <div className='Seeds1'></div>
                <div className='Seeds2'></div>
                </div>
             );
             break;
             case('meat'):
             ingredient= <div className='Meat'></div>;
             break;
             case('cheese'):
             ingredient= <div className='Cheese'></div>;
             break;
             case('bacon'):
             ingredient= <div className='Bacon'></div>;
             break;
             case('salad'):
             ingredient= <div className='Salad'></div>;
             break;
             default:
                 ingredient = null;
        }
        return ingredient;
           
    }

}

export default BurgerIngredient;