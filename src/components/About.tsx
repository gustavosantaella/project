import React, { Component } from 'react';
import '../css/style.css';
import image from '../img/image.jpg'
import Button from '@material-ui/core/Button';


interface Props{}
interface State{
     activeBotton:boolean
}

export default class About extends Component<Props,State> {
    constructor(props:Props){

     super(props)
     this.state = {
          activeBotton:false
     }
}

handleStateTextButton = (state: any) =>{

     this.setState({
          activeBotton:state
     })
}
render() {

    return (
     <>
   

     <div className='row mt-3' id='about'>
     <div className='col-md-3 mb-3 '>

     <img src={image}  className='imgyo '/>
     </div>
     <div className="card text-center col-md-9 shadow-lg">

     <div className="card-body text-justify">
     <h4 className="card-title text-left ">Sobre mi</h4>
     <p className="card-text text-justify">
     Soy un joven de 20 años y vivo en la Capital de Venezuela.<br/><br/>


     Desde muy joven siempre quise estudiar esta carrera y ser programador. 
     Hoy tengo el lujo de decir que estudio una carrera que me fascina y 
     me llama la atención todos los días. Soy un amante del aprendizaje, me gusta 
     trabajar en equipo ya que puedo aprender de otras personas tanto personalmente como en el trabajo.
     <br/><br/>

     Me considero una persona entusiasta y a la que le gusta transmitir buen rollo 
     en su entorno laboral y en grupos de amigos, soy una persona tímida pero a la vez sociable.


     </p>
     {
       (this.state.activeBotton)?
       <p >
       <b> Los valores y principios de mi familia son insustituibles.
 </b>
       <br/><br/>
       Dentro de este mundo de la programación, me considero un desarrollador backend, sin embargo cubro
        temas de fontend como algunos frameworks de diseño<br/><br/>

  Me encanta usar la metodología scrum ya que te permite trabajar de manera eficiente y ordenada con tu equipo.
       </p>
       :
       null



  }


  <Button variant="contained" size='small' className='ml-3 font-weight-bold'
  onClick={() => this.handleStateTextButton(this.state.activeBotton?false:true)}>
  {this.state.activeBotton?'Mostrar menos':'Mostar mas'}
  </Button>

  </div>
  </div>

  </div>


  </>
  );
}
}


