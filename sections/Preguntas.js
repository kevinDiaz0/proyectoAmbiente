export function Preguntas() {
	const objetoDOM = document;
	const pagina = `
	<div class="centro">
				<div class="lateral">
					<div class="cafe"> <br>
						<h3>¿Qué es el análisis de datos?</h3>
						<br>
						<p>
							El análisis de datos es la ciencia que se encarga de examinar un
							conjunto de datos con el propósito de sacar conclusiones sobre la
							información para poder tomar decisiones, o simplemente ampliar los
							conocimientos sobre diversos temas.
							El análisis de datos consiste en someter los datos a la
							realización de
							operaciones, esto se hace con la finalidad de obtener conclusiones
							precisas que nos ayudarán a alcanzar nuestros objetivos, dichas
							operaciones no pueden definirse previamente ya que la recolección
							de
							datos puede revelar ciertas dificultades. <br>
							Actualmente, muchas industrias usan el análisis de datos para
							sacar
							conclusiones y decidir acciones a implementar.Cabe mencionar que
							la
							ciencia también usa el análisis de datos para comprobar o
							descartar
							teorías o modelos existentes.
						</p>
					</div>

					<div class="rojo"> <br>
						<h3>Usos del análisis de datos</h3>
						<br>
						<p>
							El análisis de datos se utiliza en muchas industrias,
							independientemente
							del ramo, nos da las bases para tomar o no una decisión o
							cerciorarnos
							si una hipótesis es cierta o no.
							Mercadotecnia: el análisis de datos se ha usado principalmente
							para
							predecir el comportamiento de los consumidores, incluso para poder
							calificarlo.

							Recursos Humanos: el análisis de datos también es muy útil dentro
							de las
							empresas para mantener un buen clima laboral , y fuera de ella,
							calificando empleados potenciales
							Académicos: Al igual que las empresas el análisis de datos también
							está
							presente en la educación, sirve para seleccionar a los alumnos de
							nuevo
							ingreso y para medir el rendimiento de los estudiantes.
						</p>
					</div>
					<div class="verde"> <br>
						<h3>Pasos para hacer un análisis de datos</h3>
						<br>
						<p>
							uando hablamos del análisis de datos es importante conocer el
							orden que
							debemos seguir para extraer los insights más valiosos de nuestra
							investigación.
							Este proceso consta de 5 pasos principales, los cuales te
							detallaremos a
							continuación:
							<br> <br>
							Paso 1: Define tus preguntas <br>
							Paso 2: Establece prioridades de medición <br>
							Paso 3: Recolecta datos <br>
							Paso 4: Analiza los datos <br>
							Paso 5: Interpretar los resultados <br>
						</p>
					</div>
				</div>

				<h1 class="subtitulo">TIPOS DE ANALISIS DE DATOS</h1> <br>
				<p class="parrafo2">Existen diferentes 2 tipos de análisis de datos
					dependiendo del enfoque de tu investigación:</p> <br>

				<TABLE border="" class="tabla1">
					<td>
					<td>Tipos de datos</td>
					<td>Analisis</td>
					<td>Eventos</td>
					</td>

					<tr>
						<td>CUALITATIVO</td>
						<td>Se centra en las opiniones, actitudes y creencias.</td>
						<td>Preguntas y respuestas a preguntas como: ¿Por qué?¿Cómo?</td>
						<td>Paneles en donde se da una discusión y se entrevista a
							consumidores
							sobre lo que les agrada o no del lugar.</td>

					</tr>
					<tr>
						<td>CUANTITAVIVO</td>
						<td>Se centra en los datos duros e información que pueda
							contabilizarse.
						</td>
						<td>Se obtiene mediante preguntas similares a: ¿Cuántos?¿Quién?¿Con
							qué
							frecuencia?¿Dónde?</td>
						<td>Encuestas enfocadas a medir las ventas, tendencias, reportes o
							percepciones.</td>
					</tr>

				</TABLE>
			</div>
	`;
	objetoDOM.getElementById("preguntasMariana").innerHTML = `${pagina}`;
}