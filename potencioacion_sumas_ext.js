
function Potenciacion_sumas_ext(base, exp) {

inicial=base;
intermedio=0;

	for (i=1;i<exp;i++)
	{
			for (j=1;j<=base;j++)
			{
				if(j==1&&intermedio>0){

				}
				else
				{
				intermedio=inicial + intermedio;
				}
			
			}

			inicial=intermedio

	}
	

  return   inicial;
}


potencia= Potenciacion_sumas_ext(20,12);
console.log(potencia);