



function definircosto(origen, destino) {

	
		switch (origen) {
				  case 'Santa Monica':
				    		switch (destino) {
								  case 'Plaza de Toros':
								    costo = 4000
								    break;								  
								  case 'Unidad Deportiva':
								    costo = 3000
								    break;
								  default:
								    costo=2000;
								    break;
								}
				    break;
				  case 'Plaza de Toros':
				 			switch (destino) {
								  case 'Santa Monica':
								    costo = 4000
								    break;								  
								  case 'Unidad Deportiva':
								    costo = 2500
								    break;
								  default:
								    costo=2000;
								    break;
								}		
				   break;
				  
				  case 'Unidad Deportiva':
							switch (destino) {
								  case 'Plaza de Toros':
								    costo = 2500
								    break;							  
								  case 'Santa Monica':
								    costo = 3000
								    break;
								  default:
								    costo=2000;
								    break;
								}
				    break;

				  default:
				   		  costo=2000;
				  break;
				}
	


  return   costo;
}



function torno(tarjeta_ingresada,ubicacion,torno) {


	
let ahora= new Date();
let dia = ahora.getDate()
let mes = ahora.getMonth() + 1
let year = ahora.getFullYear()
let hora = ahora.getHours()
let minuto = ahora.getMinutes()

fecha= ''+year + '-' + mes+ '-'+dia+'';
hora_exacta= ''+hora + ':' + minuto+'';
tarjeta_ingresada['ultimo_acceso']=fecha;



if(!tarjeta_ingresada['En_viaje']){

	tarjeta_ingresada['En_viaje']=true;
	tarjeta_ingresada['Estacion_origen']=ubicacion;
	tarjeta_ingresada['hora_entrada']=hora_exacta;
	tarjeta_ingresada['torno']=torno;
}
else
{
	costo=definircosto(tarjeta_ingresada['Estacion_origen'],ubicacion);
	if(tarjeta_ingresada['valor']<costo)
	{
		console.log("saldo insuficiente")
	}
	else
	{
		tarjeta_ingresada['valor']=tarjeta_ingresada['valor']-costo
		tarjeta_ingresada['En_viaje']=false;
		tarjeta_ingresada['ultimo_valor_pagado']=costo;
		tarjeta_ingresada['Estacion_salida']=ubicacion;
		tarjeta_ingresada['hora_salida']=hora_exacta;
		tarjeta_ingresada['torno']=torno;
	}

}


  return   tarjeta_ingresada;
}









var tarjeta = new Object();
tarjeta.neo_tarjeta = 0001;
tarjeta.valor = 150000;
tarjeta.ultimo_acceso = "2020-08-15";
tarjeta.ultimo_valor_pagado = 1500;
tarjeta.estacion = 'Santa Monica';
tarjeta.torno = 7;

tarjeta.hora_entrada = '';
tarjeta.Estacion_origen = '';
tarjeta.hora_salida = '';
tarjeta.Estacion_salida = '';
tarjeta.En_viaje = false;


/// para el ejercicio se usaran las estacioens "Santa Monica" "Unidad Deportiva" y "Plaza de Toros"
tarjetaactual= torno(tarjeta,'Santa Monica',7);
console.log(tarjetaactual);