import React, { Component,createRef } from 'react';
import '../css/style.css';
import covid from  '../img/covid.png';
import noticias from  '../img/noticias.png';
import theskinpower from  '../img/theskinpower.png';
import portafolio from  '../img/portafolio.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
interface Props{}

const data=[

{
	id:1,
	name:'Sistema indicador estadistico - ONCTI',
	photo:covid,
	description:`Sistema encargado de manipular los datos veraces sobre el COVID-19 a nivel mundial, para poder difundir informacion
	veraz, eficaz y oportuna, cuenta con inicio un inicio de sesion y un sistema de roles y permisos basico. Este sistema fue desarollado para el Observatorio Nacional de Ciencia y Tecnologia e innovacion adscrito
	al Minisitero popular de Ciencia y Tecnologia`,
},
{
	id:2,
	name:'Panel de control de Noticas',
	photo:noticias,
	description:`Panel de control para la gestion de noticias en la pagina actual del ONCTI "oncti.gob.ve". 
	desarrollado con la finalidad de automatizar el proceso para subir dichas noticas a la pagina web, cuenta con un CRUD
	funcional para la gestion de los registros, roles y permisos intermedio. Cabe destacar que este sistema fue desarrollado para 
	que el FRONTEND se conecte a este sistema via AXIOS para obtener las cinco(5) noticias mas recientes.`,
},
{
	id:3,
	name:'Pagina + carrito de pedidos + panel de control',
	photo:theskinpower,
	description:`Pagina informativa sobre productos faciales, carrito de pedidos con inicio de sesion, envio de correos electronicos
	para la verificacion de usuarios y la recuperacion de contraseñas. CRUD incorporado para todos los modulos y un sistema de roles 
	basico.`,
},
{
	id:4,
	name:'Portafolio personal',
	photo:portafolio,
	description:`Portafolio de evidencias y personal realizado para la 
	evaluacion y observacion de reclutadores, desarrollado en React.js y librerias a fin.`,
}

];
class Projects extends Component<Props> {
	private myRef = React.createRef<HTMLDivElement>()
	constructor(props:Props) {
		super(props);
		/*console.log(this.myRef.current)*/
	}
	
	componentDidMount = () =>{
		Aos.init({
			duration:2000
		})
	}
	render() {
		return (

			<>
			
			<div className=' projects row ' id='projects'>
			{
				data.map((e)=>{
					return(
						<div
						key={e.id}
					data-aos='fade-up'
						className='card col-md-5 shadow-lg mb-5 ml-5'>
						<div className='card-body'>
						<div className='card-img '>
						<img src={e.photo} width='500' height='300' className='
						rounded-top 
						rounded-left
						rounded-bottom 
						rounder-right
						img-fluid
						' alt=""/>
						</div>
						<div className='card-title font-weight-bold text-center mt-2'>
						{e.name}
						</div>
						<div className='card-text text-justify'>
						{e.description}		
						</div>

						</div>
						</div>
						)
				})
			}
			</div>
			</>
			);
	}
}

export default Projects;
