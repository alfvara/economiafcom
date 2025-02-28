// script.js para el juego de Economía y Finanzas
const preguntas = [
    {
        pregunta: "¿Qué estudia la macroeconomía en comparación con la microeconomía?",
        opciones: [
            "La economía en su conjunto, considerando agregados como el PIB y la inflación",
            "Las decisiones individuales de consumidores y empresas en mercados específicos",
            "Exclusivamente los mercados financieros internacionales",
            "Solamente la gestión de empresas a nivel interno"
        ],
        respuesta: 0,
        explicacion: "La macroeconomía analiza la economía de un país como un todo, sumando todas las ofertas y demandas, a diferencia de la microeconomía, que se enfoca en decisiones y mercados particulares."
    },
explicacion: "El PIB es la medida del valor de mercado de todos los bienes y servicios finales producidos en el interior de un país durante un período (normalmente un año). Es un indicador clave del tamaño de la economía."
    },
    {
      pregunta: "¿Cuál de las siguientes actividades NO se incluye normalmente en el cálculo del PIB?",
      opciones: [
        "El trabajo doméstico no remunerado realizado dentro del hogar",
        "La producción manufacturera vendida en mercados formales",
        "La prestación de servicios profesionales declarados",
        "La inversión pública en infraestructura"
      ],
      respuesta: 0,
      explicacion: "El PIB solo contabiliza bienes y servicios producidos y vendidos legalmente en mercados. Las tareas domésticas que no pasan por el mercado (autoconsumo) no se contabilizan. Por otro lado, la producción ilegal (economía sumergida) en España no se incluía antes de 2014, pero tras ese año se estima y añade según normativa europea."
    },
    {
      pregunta: "¿Por qué no se deben sumar los bienes intermedios al calcular el PIB de un país?",
      opciones: [
        "Para evitar la doble contabilización del valor, ya que sus valores están incluidos en los bienes finales",
        "Porque los bienes intermedios no tienen valor de mercado por sí mismos",
        "Porque los bienes intermedios se producen en el extranjero",
        "Para mantener el PIB lo más bajo posible deliberadamente"
      ],
      respuesta: 0,
      explicacion: "El PIB contabiliza solo bienes y servicios finales. Si se sumaran también los bienes intermedios (insumos), se contaría dos veces su valor. Por ejemplo, el valor de la harina ya está incluido en el precio del pan, por lo que contar ambos inflaría el PIB artificialmente."
    },
    {
      pregunta: "¿En qué se diferencia el PIB nominal del PIB real?",
      opciones: [
        "El PIB nominal valora la producción a precios del año en curso, mientras el PIB real la valora a precios constantes de un año base",
        "El PIB nominal descuenta la inflación y el PIB real no",
        "El PIB nominal solo incluye bienes de consumo y el PIB real incluye todos los sectores",
        "El PIB nominal corresponde al país de origen y el PIB real al extranjero"
      ],
      respuesta: 0,
      explicacion: "El PIB nominal calcula el valor de la producción usando los precios actuales del año correspondiente, mientras que el PIB real utiliza los precios de un año base fijo. De esta manera, el PIB real elimina el efecto de cambios en precios (inflación o deflación), reflejando cambios en la producción."
    },
    {
      pregunta: "Si el deflactor del PIB de un año es 111, ¿qué indica esto en términos de precios?",
      opciones: [
        "Que los precios han aumentado un 11% respecto al año base tomado para calcular el PIB real",
        "Que el PIB real es un 111% del PIB nominal",
        "Que los precios han disminuido un 11% desde el año base",
        "Que la inflación es del 111% anual en ese año"
      ],
      respuesta: 0,
      explicacion: "El deflactor del PIB se calcula como (PIB nominal / PIB real) * 100. Un deflactor de 111 (respecto a un año base de 100) significa que, en promedio, los precios han subido un 11% desde el año base. Es decir, ha habido inflación acumulada del 11% en ese periodo."
    },
    {
      pregunta: "¿Cómo se calcula el PIB per cápita de un país?",
      opciones: [
        "Dividiendo el valor total del PIB de ese país entre el número de habitantes",
        "Sumando el PIB nominal y el PIB real y dividiéndolo por dos",
        "Midiendo solo la producción de bienes por persona, excluyendo servicios",
        "Dividiendo el PIB del país entre la población activa (personas que trabajan o buscan empleo)"
      ],
      respuesta: 0,
      explicacion: "El PIB per cápita se obtiene dividiendo el PIB total de un país entre su población. Representa el ingreso o producción promedio por persona y se utiliza para aproximar el nivel de vida medio, aunque no refleja cómo se distribuye la riqueza."
    },
    {
      pregunta: "¿Por qué el PIB per cápita no es un indicador perfecto del bienestar de una población?",
      opciones: [
        "Porque no muestra la distribución de la renta ni considera aspectos como salud, educación o medio ambiente",
        "Porque incluye la economía sumergida en su cálculo",
        "Porque solo mide la producción agrícola y industrial",
        "Porque varía demasiado con la inflación y no se puede comparar entre países"
      ],
      respuesta: 0,
      explicacion: "Aunque el PIB per cápita es una medida común del nivel de riqueza promedio, tiene limitaciones. No indica cómo se reparte la riqueza (podría haber gran desigualdad) ni refleja factores de calidad de vida como la educación, la salud, la seguridad o el medio ambiente. Por eso debe complementarse con otros indicadores para medir el bienestar."
    },
    {
      pregunta: "¿Es posible lograr simultáneamente un alto crecimiento económico, pleno empleo y baja inflación?",
      opciones: [
        "Es difícil, porque a veces promover el crecimiento y el empleo puede generar presiones inflacionarias",
        "Sí, siempre se pueden cumplir los tres con las políticas económicas adecuadas sin compromisos",
        "No, los tres objetivos son completamente incompatibles en cualquier circunstancia",
        "Solo es posible en economías muy pequeñas y abiertas"
      ],
      respuesta: 0,
      explicacion: "En la práctica, los objetivos macroeconómicos pueden entrar en conflicto. Por ejemplo, estimular fuertemente la producción para reducir el paro puede provocar inflación si la demanda supera la oferta. Las autoridades deben equilibrar crecimiento, empleo e inflación, ya que maximizar uno puede requerir sacrificar parcialmente otro (dilema conocido como la curva de Phillips)."
    },
    {
      pregunta: "¿Qué organismo se encarga oficialmente de medir el PIB y otras estadísticas económicas en España?",
      opciones: [
        "El Instituto Nacional de Estadística (INE)",
        "El Banco de España",
        "El Ministerio de Economía y Hacienda",
        "La Bolsa de Madrid"
      ],
      respuesta: 0,
      explicacion: "En España, el Instituto Nacional de Estadística (INE) es el organismo público responsable de recopilar y publicar las principales estadísticas económicas, incluyendo el cálculo del PIB. Generalmente, cada país cuenta con un instituto oficial de estadística para esta labor."
    },
    {
      pregunta: "¿Desde qué año se comenzaron a incluir estimaciones de actividades ilegales (economía sumergida) en el PIB español por exigencia europea?",
      opciones: [
        "Desde 2014, tras una normativa de la Unión Europea",
        "Desde siempre se han incluido de forma estimada",
        "Desde 2008, a raíz de la crisis financiera",
        "No se incluyen ni antes ni ahora en el PIB"
      ],
      respuesta: 0,
      explicacion: "A partir de 2014, siguiendo normas europeas, España y otros países de la UE incorporan en el PIB una estimación de actividades económicas ilegales como la prostitución, el contrabando o el narcotráfico. Antes de esa fecha, dichas actividades no se contabilizaban en el PIB oficial."
    },
    {
      pregunta: "¿Cómo podemos saber si una economía ha crecido de un año a otro en términos reales?",
      opciones: [
        "Comparando el PIB real de ambos años, para ver si aumentó ajustando la inflación",
        "Comprobando únicamente si el PIB nominal aumentó",
        "Mirando si aumentó la tasa de inflación en ese periodo",
        "Verificando si el déficit público se redujo respecto al año anterior"
      ],
      respuesta: 0,
      explicacion: "El crecimiento económico real se determina comparando el PIB real de un año con el de otro. Si el PIB real (ajustado por inflación) es mayor en el año actual que en el anterior, significa que la producción de bienes y servicios ha crecido en términos constantes."
    },
    {
      pregunta: "¿Cuál es la fórmula de cálculo del PIB desde el enfoque del gasto?",
      opciones: [
        "Consumo + Inversión + Gasto Público + (Exportaciones - Importaciones)",
        "Consumo + Inversión + Ahorro + Impuestos",
        "Remuneraciones + Rentas del capital + Impuestos netos de subsidios",
        "Oferta monetaria x Velocidad del dinero"
      ],
      respuesta: 0,
      explicacion: "El PIB por el enfoque del gasto se obtiene sumando el consumo privado, la inversión privada, el gasto público y las exportaciones netas (exportaciones menos importaciones). Esta identidad (PIB = C + I + G + X - M) refleja la demanda total de bienes y servicios producidos internamente."
    },
    {
      pregunta: "Si el gobierno incrementa significativamente el gasto público manteniendo todo lo demás constante, ¿cómo impactaría directamente en el PIB?",
      opciones: [
        "El PIB aumentaría, pues el gasto público es un componente directo de la demanda agregada",
        "El PIB disminuiría automáticamente en la misma proporción",
        "No habría ningún efecto en el PIB",
        "El PIB nominal bajaría pero el real subiría"
      ],
      respuesta: 0,
      explicacion: "El gasto público forma parte del PIB (en el enfoque de gasto, es la 'G'). Por tanto, un aumento del gasto público, ceteris paribus, eleva la demanda agregada y contribuye a incrementar el PIB. Sin embargo, a largo plazo podría generar déficit si no se acompaña de ingresos, pero directamente sumará al PIB en el corto plazo."
    },
    {
      pregunta: "¿Qué efecto inmediato tendría una fuerte caída del consumo privado (manteniendo todo lo demás constante) sobre el PIB de un país?",
      opciones: [
        "El PIB disminuiría, dado que el consumo privado es generalmente el componente más grande del PIB",
        "El PIB aumentaría para compensar la caída del consumo",
        "No tendría efecto en el PIB, ya que el consumo no está incluido en el PIB",
        "Provocaría automáticamente un aumento de la inversión que dejaría el PIB igual"
      ],
      respuesta: 0,
      explicacion: "El consumo privado suele representar una porción muy significativa del PIB. Si las familias reducen drásticamente su consumo y no hay otros cambios, la demanda agregada cae y el PIB disminuye. Para mantener el PIB, esa caída tendría que compensarse con aumentos en inversión, gasto público o exportaciones, lo cual no ocurre automáticamente."
    },
    {
      pregunta: "¿Cuál de los siguientes indicadores es de naturaleza microeconómica y no macroeconómica?",
      opciones: [
        "El precio de un producto específico en un mercado local",
        "El PIB nacional de un país",
        "La tasa de inflación anual de la economía",
        "La tasa de desempleo de la población activa"
      ],
      respuesta: 0,
      explicacion: "La microeconomía analiza mercados individuales y precios de bienes específicos. El precio de, por ejemplo, una fruta en un mercado local es un dato microeconómico. En cambio, el PIB, la inflación o el desempleo se refieren a la economía en su conjunto y son magnitudes macroeconómicas."
    },
    {
      pregunta: "¿Por qué es importante que una economía registre crecimiento económico a lo largo del tiempo?",
      opciones: [
        "Porque el crecimiento suele generar más empleo y mejora el nivel de vida promedio de la población",
        "Porque con crecimiento los precios bajan automáticamente",
        "Porque impide que entren productos importados al país",
        "Porque elimina cualquier necesidad de inversión extranjera"
      ],
      respuesta: 0,
      explicacion: "El crecimiento económico sostenido suele traducirse en creación de empleo y aumento de ingresos, lo que mejora la calidad de vida promedio. Si la economía no crece, es difícil generar nuevos puestos de trabajo y aumentar salarios, afectando negativamente el bienestar de los ciudadanos."
    },
    {
      pregunta: "¿Por qué se dice que muchas elecciones generales se deciden en función de la situación económica?",
      opciones: [
        "Porque el desempeño económico (crecimiento, empleo, inflación) influye en la percepción y voto de los ciudadanos",
        "Porque a los votantes solo les importan los impuestos que pagan",
        "Porque los partidos políticos solo hacen campaña sobre temas económicos",
        "Porque los medios solo informan sobre economía durante las elecciones"
      ],
      respuesta: 0,
      explicacion: "La economía influye fuertemente en la vida cotidiana de las personas. Si un gobierno logra crecimiento y empleo, suele ganar apoyo, mientras que una mala situación económica (recesión, alto paro, alta inflación) tiende a generar descontento. Por ello, el estado de la economía suele ser un factor clave en el voto durante las elecciones."
    },
    {
      pregunta: "¿Qué efecto puede tener la entrada masiva de productos importados muy baratos en la economía nacional?",
      opciones: [
        "Puede perjudicar a productores locales (que enfrentan competencia) pero beneficiar a consumidores con precios más bajos",
        "Perjudica por igual a productores y consumidores nacionales",
        "No tiene ningún efecto apreciable en la economía",
        "Siempre provoca una reducción general de la calidad de los productos nacionales"
      ],
      respuesta: 0,
      explicacion: "La importación de productos baratos beneficia a los consumidores, que pueden comprar a menor precio, pero puede afectar negativamente a las industrias locales que compiten con esas importaciones. Un ejemplo fue la entrada de productos textiles chinos, que causó dificultades a fabricantes locales mientras los compradores se beneficiaban de precios más bajos."
    },
    {
      pregunta: "¿Qué es el dinero en términos económicos?",
      opciones: [
        "Cualquier activo generalmente aceptado como medio de pago para intercambios",
        "Solo las monedas y billetes emitidos por el Estado",
        "La suma de toda la riqueza (bienes y propiedades) de una persona",
        "Únicamente el oro y la plata, por su valor intrínseco"
      ],
      respuesta: 0,
      explicacion: "En economía, dinero es todo aquello que los miembros de una sociedad aceptan generalmente como medio de pago. No se limita al efectivo físico, puede incluir depósitos bancarios u otros activos si son aceptados para transacciones."
    },
    {
      pregunta: "¿Por qué un billete de 20 euros es aceptado como forma de pago mientras que uno de Monopoly no lo es?",
      opciones: [
        "Porque tenemos confianza en que el billete oficial tendrá valor y será aceptado por otros en el futuro",
        "Porque el billete de 20 euros tiene oro físico respaldándolo y el de Monopoly no",
        "Porque el papel del billete de Monopoly es de peor calidad",
        "Porque legalmente el Monopoly está prohibido"
      ],
      respuesta: 0,
      explicacion: "El valor del dinero moderno, como el euro, radica en la confianza. Aceptamos un billete de 20€ porque confiamos en que otros también lo aceptarán en el futuro (y porque está garantizado por una autoridad). En cambio, el dinero de juego carece de esa confianza y respaldo, por lo que nadie lo toma en transacciones reales."
    },
    {
      pregunta: "Antes de la existencia del dinero, ¿qué dificultad presentaba el trueque directo de bienes?",
      opciones: [
        "Requería una doble coincidencia de necesidades: encontrar a alguien que quisiera justo lo que uno ofrecía y viceversa",
        "No permitía asignar ningún valor a los bienes intercambiados",
        "Funcionaba solo en sociedades muy avanzadas",
        "Impedía a las personas ahorrar o conservar valor en el tiempo"
      ],
      respuesta: 0,
      explicacion: "En una economía de trueque, para que un intercambio suceda cada parte debe desear lo que la otra ofrece al mismo tiempo (doble coincidencia de deseos). Esto dificulta enormemente el comercio. El dinero surgió para solventar este problema, actuando como medio de cambio aceptado por todos."
    },
    {
      pregunta: "¿Qué es el dinero mercancía?",
      opciones: [
        "Un bien que, además de tener valor propio, se usa como medio de pago generalmente aceptado (por ejemplo, sal, ganado, oro)",
        "Dinero falso que imita mercancías",
        "La moneda emitida exclusivamente durante guerras",
        "Billetes respaldados por reservas de mercancías en bancos"
      ],
      respuesta: 0,
      explicacion: "Se denomina dinero mercancía a aquel bien que es aceptado como medio de pago y que tiene valor intrínseco. Históricamente se usaron como dinero mercancías como la sal, el ganado o el oro, bienes útiles o escasos que la gente valoraba por sí mismos y como medio de cambio."
    },
    {
      pregunta: "¿Cuál de las siguientes NO es una característica deseable del dinero mercancía?",
      opciones: [
        "Que exista en cantidad ilimitada (oferta ilimitada)",
        "Que sea duradero y no se deteriore rápidamente",
        "Que sea divisible para facilitar intercambios de diverso tamaño",
        "Que sea homogéneo, es decir, uniforme en calidad"
      ],
      respuesta: 0,
      explicacion: "Para que algo funcione bien como dinero mercancía debe ser escaso (oferta limitada), durable, transportable, divisible y homogéneo. Si hubiera una cantidad ilimitada disponible, no tendría valor económico. Por ejemplo, la sal fue usada como dinero porque era valiosa y limitada en ciertas épocas."
    },
    {
      pregunta: "¿Qué es el dinero fiduciario o dinero signo?",
      opciones: [
        "Dinero que no tiene valor intrínseco pero es aceptado por la confianza en la autoridad que lo emite",
        "Dinero respaldado por metales preciosos equivalentes en valor",
        "Monedas antiguas hechas de materiales valiosos",
        "Billetes falsos de confianza dudosa"
      ],
      respuesta: 0,
      explicacion: "El dinero fiduciario es aquel cuyo valor se basa en la confianza (fe) en que será aceptado, y no en su valor como objeto físico. Los billetes modernos son dinero fiduciario: por sí mismos son trozos de papel de escaso valor, pero el público los acepta porque confía en la institución que los emite (banco central) y en su uso generalizado."
    },
    {
      pregunta: "¿Cómo surgió históricamente el papel moneda en Europa?",
      opciones: [
        "Como recibos o pagarés emitidos por bancos a depositantes de oro u otras mercancías de valor, que luego circulaban como medio de pago",
        "Por decreto de los reyes, que imprimieron billetes para sustituir al oro",
        "A partir del juego del Monopoly adaptado a la vida real",
        "De la costumbre de usar mapas y papeles para intercambiar bienes"
      ],
      respuesta: 0,
      explicacion: "El papel moneda surgió cuando la gente depositaba oro u objetos de valor en bancos o con orfebres, y estos emitían recibos o notas de depósito. Esos recibos, al ser más cómodos que llevar el oro físicamente, empezaron a ser usados en intercambios como si fuesen dinero. Así nacieron los primeros billetes, respaldados por reservas de mercancías."
    },
    {
      pregunta: "¿Por qué se crearon los bancos centrales en las economías modernas?",
      opciones: [
        "Para regular la cantidad de dinero en circulación y asegurar la estabilidad monetaria de un país",
        "Para ofrecer préstamos baratos a la población",
        "Para almacenar el oro de todos los ciudadanos",
        "Para reemplazar a los bancos comerciales en todas sus funciones"
      ],
      respuesta: 0,
      explicacion: "Una de las principales razones de la creación de bancos centrales fue controlar la oferta monetaria y evitar excesos. Los bancos centrales emiten moneda, gestionan reservas y actúan como autoridad monetaria para garantizar la estabilidad de precios y la confianza en la moneda, algo que no podían lograr los bancos comerciales por sí solos."
    },
    {
      pregunta: "¿Qué es el \"dinero bancario\" creado por los bancos comerciales?",
      opciones: [
        "El dinero generado a través de depósitos y préstamos bancarios, que se mueve mediante cheques, transferencias, etc.",
        "El efectivo guardado en las bóvedas de los bancos",
        "Cualquier moneda extranjera que tienen los bancos",
        "El dinero electrónico de curso legal emitido por el banco central"
      ],
      respuesta: 0,
      explicacion: "Además del dinero legal (monedas y billetes emitidos por el banco central), existe el dinero bancario o dinero-depósito: el que se crea cuando los bancos comerciales reciben depósitos y otorgan préstamos. Este dinero no es físico, sino apuntes en cuentas (depósitos) que la gente usa para pagar mediante transferencias, cheques, tarjetas, etc."
    },
    {
      pregunta: "¿Cómo logran los bancos comerciales \"crear\" dinero en un sistema de reserva fraccionaria?",
      opciones: [
        "Prestando una parte de los depósitos que reciben, lo que multiplica la cantidad de dinero circulante más allá del efectivo original",
        "Imprimiendo billetes por su cuenta cuando necesitan liquidez",
        "Convirtiendo todos los depósitos en oro para luego venderlo",
        "A través de la emisión de acciones en el mercado bursátil"
      ],
      respuesta: 0,
      explicacion: "En un sistema de reserva fraccionaria, los bancos guardan solo una fracción de los depósitos como reserva y prestan el resto. Así, si alguien deposita 100 y el banco guarda 10 y presta 90, esos 90 pueden circular y llegar a otras personas que a su vez los depositan. Este proceso repetido multiplica el dinero en la economía (aunque no crea riqueza por sí mismo)."
    },
    {
      pregunta: "¿Qué ocurriría si todos los depositantes de un banco quisieran retirar su dinero al mismo tiempo?",
      opciones: [
        "El banco no tendría efectivo suficiente para devolver todos los depósitos y podría quebrar (situación de pánico bancario)",
        "El banco podría devolver todo el dinero sin problema gracias al encaje fraccionario",
        "La cantidad de dinero en circulación aumentaría drásticamente",
        "El banco central se negaría a ayudar en esa situación"
      ],
      respuesta: 0,
      explicacion: "Los bancos operan con reserva fraccionaria, por lo que solo mantienen disponible una parte de los depósitos. Si todos los clientes exigen su dinero simultáneamente (una corrida bancaria), el banco no puede cubrir esa demanda con sus reservas limitadas, lo que puede llevar a su insolvencia. Por eso existe la figura del prestamista de última instancia (banco central) y los seguros de depósitos para prevenir y manejar estas situaciones."
    },
    {
      pregunta: "¿Cuál de las siguientes afirmaciones describe mejor a las criptomonedas como el Bitcoin?",
      opciones: [
        "Son monedas digitales descentralizadas, no respaldadas por un banco central, basadas en tecnología criptográfica",
        "Es dinero electrónico emitido y respaldado por el Banco Central Europeo",
        "Son monedas sin ningún valor que están prohibidas en la mayoría de países",
        "Es un tipo de dinero bancario tradicional"
      ],
      respuesta: 0,
      explicacion: "Las criptomonedas, con Bitcoin como ejemplo más famoso, son activos digitales que funcionan como medio de intercambio pero no son emitidas por ninguna autoridad central. Operan en redes descentralizadas (como blockchain) y su valor depende de la confianza de los usuarios y la escasez programada, no de un respaldo físico."
    },
    {
      pregunta: "¿Por qué las personas aceptan pagos en dinero bancario (como transferencias o cheques) si no es dinero en efectivo?",
      opciones: [
        "Porque confían en que pueden convertir sus depósitos bancarios en dinero legal (efectivo) cuando lo deseen",
        "Porque están obligadas legalmente a aceptarlo",
        "Porque los depósitos bancarios tienen valor intrínseco en oro",
        "Porque no existe ninguna diferencia entre el dinero bancario y los billetes físicamente"
      ],
      respuesta: 0,
      explicacion: "La gente utiliza y acepta el dinero bancario (depósitos en cuenta, transferencias, cheques) porque confía en el sistema financiero: sabe que en cualquier momento puede retirar ese saldo en forma de efectivo legal. En esencia, confían en que el banco cumplirá su promesa de entregar dinero físico por los depósitos, por lo que tratan a los saldos bancarios como dinero equivalente."
    },
    {
      pregunta: "¿Cuál de las siguientes NO es una función clásica del dinero?",
      opciones: [
        "Aumentar automáticamente la riqueza total de la sociedad",
        "Servir como medio de cambio en las transacciones",
        "Funcionar como unidad de cuenta para medir valores",
        "Actuar como depósito de valor a lo largo del tiempo"
      ],
      respuesta: 0,
      explicacion: "El dinero cumple tres funciones básicas: medio de cambio, unidad de cuenta y depósito de valor. No genera riqueza por sí mismo de manera automática; es un facilitador de transacciones y ahorro. La riqueza se crea produciendo bienes y servicios, no simplemente teniendo dinero."
    },
    {
      pregunta: "¿Qué significa que el dinero actúe como unidad de cuenta?",
      opciones: [
        "Que sirve de medida común para valorar y comparar bienes y servicios, expresando precios en una misma unidad",
        "Que todas las monedas físicas tienen el mismo tamaño y forma",
        "Que solo el Estado puede contar y emitir dinero",
        "Que el valor del dinero se cuenta en función del oro disponible"
      ],
      respuesta: 0,
      explicacion: "Como unidad de cuenta, el dinero proporciona la escala en la que se expresan los precios y deudas. Es decir, permite asignar un valor numérico a los bienes y servicios de forma consistente, facilitando la comparación. Por ejemplo, en euros se fija el precio de una barra de pan, un coche o un servicio, lo que permite compararlos en términos de euros."
    },
    {
      pregunta: "¿Qué es el Euribor?",
      opciones: [
        "El tipo de interés al que los principales bancos de la zona euro se prestan dinero entre sí",
        "La tasa de inflación promedio de la Unión Europea",
        "El precio al que el Banco Central Europeo vende euros a los bancos",
        "Una moneda digital oficial europea"
      ],
      respuesta: 0,
      explicacion: "El Euribor (Euro Interbank Offered Rate) es el tipo de interés interbancario del mercado europeo. Representa, aproximadamente, la tasa de interés a la cual los bancos de la zona euro están dispuestos a prestarse dinero entre sí a corto plazo. Se utiliza como referencia para muchos préstamos, como las hipotecas, en Europa."
    },
    {
      pregunta: "¿En qué consiste el sistema bancario de \"reserva fraccionaria\"?",
      opciones: [
        "En que los bancos mantienen solo una fracción de los depósitos en reserva y pueden prestar el resto",
        "En que los bancos deben respaldar el 100% de los depósitos con reservas de efectivo o oro",
        "En que cada banco se especializa en una fracción o sector de la economía",
        "En que las reservas de oro de un país se fraccionan entre sus bancos"
      ],
      respuesta: 0,
      explicacion: "El sistema de reserva fraccionaria es aquel en el que los bancos guardan solo una parte de los depósitos (por ejemplo, un 10%) como reservas líquidas y utilizan el resto para conceder préstamos. Esto les permite intermediar entre ahorradores y prestatarios, pero también significa que no podrían devolver simultáneamente todos los depósitos si todos los clientes lo exigiesen a la vez."
    },
    {
      pregunta: "¿Cuál es la diferencia entre el dinero legal (efectivo) y el dinero bancario?",
      opciones: [
        "El dinero legal son billetes y monedas emitidos por el banco central, mientras que el dinero bancario son los depósitos creados por bancos comerciales",
        "No hay diferencia: ambos son exactamente lo mismo",
        "El dinero bancario tiene respaldo en oro y el legal no",
        "El dinero legal solo se usa dentro de los bancos y el bancario en la calle"
      ],
      respuesta: 0,
      explicacion: "El dinero legal lo emite la autoridad monetaria (billetes y monedas de curso legal), y es de aceptación obligatoria para pagos. El dinero bancario, en cambio, son los depósitos en cuentas bancarias creados por los bancos comerciales al prestar dinero. Aunque funcionalmente ambos se usan para pagar, el primero existe físicamente y el segundo es principalmente electrónico."
    },
    {
      pregunta: "Durante el Imperio Romano, ¿cuál de estos bienes se utilizó comúnmente como dinero mercancía debido a su valor y utilidad?",
      opciones: [
        "La sal",
        "El agua",
        "La madera",
        "El trigo"
      ],
      respuesta: 0,
      explicacion: "La sal fue un ejemplo histórico de dinero mercancía: era escasa, esencial para conservar alimentos y muy valorada, lo que la hizo funcionar como medio de pago. De hecho, la palabra salario proviene de la sal, por su uso en pagos a soldados romanos."
    },
    {
      pregunta: "¿Cuál de estos servicios NO es típico de un banco comercial?",
      opciones: [
        "Emitir billetes y monedas de curso legal",
        "Recibir depósitos de clientes",
        "Conceder préstamos y créditos a particulares o empresas",
        "Realizar transferencias y pagos en nombre de sus clientes"
      ],
      respuesta: 0,
      explicacion: "Los bancos comerciales manejan depósitos, otorgan préstamos, facilitan pagos, entre otros servicios financieros. Sin embargo, la emisión de billetes y monedas es una función exclusiva de los bancos centrales. Un banco comercial no imprime dinero legal, aunque sí crea dinero bancario a través del crédito."
    },
    {
      pregunta: "¿Qué entendemos por inflación en economía?",
      opciones: [
        "Un aumento generalizado y sostenido de los precios de bienes y servicios en la economía",
        "Un incremento del precio de un solo bien o servicio",
        "Una disminución general del nivel de precios durante un periodo",
        "El crecimiento de la economía medido en términos reales"
      ],
      respuesta: 0,
      explicacion: "La inflación es el crecimiento continuo y generalizado de los precios en una economía a lo largo del tiempo. Esto significa que, en promedio, las cosas cuestan más con el paso del tiempo, disminuyendo el poder adquisitivo del dinero. Un alza puntual en el precio de un producto no es inflación, la inflación implica que la mayoría de precios suben de forma persistente."
    },
    {
      pregunta: "¿Qué factor desencadenó la hiperinflación alemana de la década de 1920?",
      opciones: [
        "La emisión masiva de dinero para pagar las reparaciones de guerra tras la Primera Guerra Mundial",
        "Un aumento excesivo de la producción industrial sin demanda suficiente",
        "La sobreabundancia de oro en el banco central alemán",
        "Una caída drástica de los precios internacionales de alimentos"
      ],
      respuesta: 0,
      explicacion: "Alemania experimentó una hiperinflación en los años 20 en gran parte porque el gobierno imprimió enormes cantidades de dinero para enfrentar las obligaciones de reparaciones de guerra del Tratado de Versalles. Esta expansión descontrolada de la oferta monetaria hizo que el valor del marco se desplomara y los precios subieran exponencialmente."
    },
    {
      pregunta: "La hiperinflación de Zimbabwe en la década de 2000 se debió principalmente a:",
      opciones: [
        "La emisión descontrolada de moneda por parte del gobierno, reduciendo el valor de la moneda local a prácticamente cero",
        "Un bloqueo económico internacional que encareció todos los productos",
        "Un gran aumento de la producción agrícola que elevó los precios",
        "La dolarización completa de su economía"
      ],
      respuesta: 0,
      explicacion: "En Zimbabwe a mediados de los 2000, el gobierno imprimió dinero de forma extrema para financiar el gasto, lo que llevó a tasas de inflación astronómicas. El dólar zimbabuense se devaluó tanto que hubo billetes de trillones y, aun así, no valían casi nada. Los ciudadanos necesitaban fajos enormes de billetes para comprar bienes básicos."
    },
    {
      pregunta: "¿Cuál fue una consecuencia directa de la hiperinflación en Zimbabwe?",
      opciones: [
        "El dinero prácticamente perdió todo su valor, obligando a la población a usar grandes cantidades de billetes para compras básicas",
        "Los precios se congelaron y dejaron de subir",
        "La moneda local se hizo más fuerte frente a divisas extranjeras",
        "Aumentó dramáticamente el poder adquisitivo de los salarios"
      ],
      respuesta: 0,
      explicacion: "Durante la hiperinflación de Zimbabwe, el valor del dólar zimbabuense se desplomó a tal punto que la gente necesitaba maletas llenas de billetes para comprar alimentos. Los precios subían a diario, lo que destruyó el poder de compra y llevó a la economía a un colapso monetario, con la gente recurriendo al trueque o monedas extranjeras."
    },
    {
      pregunta: "¿Por qué es importante mantener la inflación controlada en una economía?",
      opciones: [
        "Porque una inflación alta y persistente reduce el poder adquisitivo y puede generar incertidumbre, frenando el crecimiento económico",
        "Porque cualquier nivel de inflación impide que la economía crezca",
        "Porque con inflación los precios de todos los bienes bajan",
        "Porque una inflación alta siempre aumenta automáticamente el empleo"
      ],
      respuesta: 0,
      explicacion: "Una inflación elevada sostenida implica que los salarios y ahorros de la gente rinden menos en términos de bienes, perjudicando su poder de compra. Además, la alta inflación crea incertidumbre, dificulta la planificación empresarial e inversora, y puede distorsionar la economía. Por eso, los bancos centrales y gobiernos tratan de mantener la inflación baja y estable."
    },
    {
      pregunta: "¿Cómo puede afectar una inflación alta a los distintos grupos de la sociedad?",
      opciones: [
        "Suele perjudicar más a los grupos vulnerables (como quienes viven de un salario fijo) al encarecer bienes básicos, mientras que algunos deudores pueden beneficiarse",
        "Afecta a todos por igual, sin importar ingresos",
        "Beneficia principalmente a quienes ahorran dinero en efectivo",
        "Solo perjudica a los empresarios, pero no a los trabajadores"
      ],
      respuesta: 0,
      explicacion: "Una inflación elevada tiende a golpear más a quienes tienen ingresos fijos o bajos, porque ven encarecerse bienes esenciales (comida, alquiler) sin que sus ingresos suban al mismo ritmo. Por otro lado, deudores con préstamos a tipo fijo pueden beneficiarse, ya que devuelven dinero que vale menos que cuando lo pidieron prestado. En general, la inflación descontrolada tiende a aumentar la desigualdad y la incertidumbre."
    },
    {
      pregunta: "¿Qué es la inflación subyacente?",
      opciones: [
        "La tasa de inflación que excluye los precios de elementos volátiles como alimentos y energía, mostrando la tendencia de fondo",
        "La inflación mínima necesaria para el crecimiento económico",
        "La inflación que se registra solo en el sector financiero",
        "Otra forma de llamar a la deflación"
      ],
      respuesta: 0,
      explicacion: "La inflación subyacente es un indicador que mide la variación de precios excluyendo aquellos más volátiles, típicamente los alimentos frescos y la energía. Al eliminar esos componentes, se obtiene una visión más clara de la tendencia básica de los precios, útil para entender presiones inflacionarias de largo plazo."
    },
    {
      pregunta: "¿Qué mide el Índice de Precios de Consumo (IPC)?",
      opciones: [
        "El costo de una canasta representativa de bienes y servicios consumidos por los hogares a lo largo del tiempo",
        "El valor total de los bienes producidos en la economía",
        "El nivel general de los salarios en la economía",
        "La cantidad de dinero en circulación en un país"
      ],
      respuesta: 0,
      explicacion: "El IPC refleja la evolución del costo de una \"cesta de la compra\" formada por bienes y servicios representativos del consumo de los hogares. Al comparar el precio de esa canasta en distintos momentos, el IPC nos indica cómo varía el costo de la vida para un consumidor promedio."
    },
    {
      pregunta: "¿Cuál es una diferencia clave entre el IPC y el deflactor del PIB?",
      opciones: [
        "El IPC se basa en una cesta fija de consumo doméstico, mientras el deflactor del PIB abarca todos los bienes y servicios producidos internamente",
        "El IPC incluye precios de bienes importados, mientras el deflactor del PIB no considera importaciones",
        "El IPC lo calcula el Banco Central y el deflactor el INE",
        "El IPC refleja solo inflación minorista y el deflactor solo inflación mayorista"
      ],
      respuesta: 0,
      explicacion: "El IPC mide la variación de precios de una canasta fija de bienes y servicios representativos del consumo familiar. El deflactor del PIB, en cambio, mide la variación de precios de todo el conjunto de bienes y servicios producidos en la economía. Así, el IPC excluye bienes de inversión y exportaciones, y pondera según consumo, mientras el deflactor refleja todos los precios de la producción nacional."
    },
    {
      pregunta: "¿Qué dos características debe tener un buen IPC para ser útil?",
      opciones: [
        "Representatividad (que refleje bien el consumo real) y comparabilidad en el tiempo",
        "Volatilidad alta y actualización constante de la canasta",
        "Incluir todos los bienes existentes y mantener la misma canasta para siempre",
        "Calcularse únicamente en años base seleccionados"
      ],
      respuesta: 0,
      explicacion: "Para que el IPC sea un indicador fiable debe ser representativo (la canasta debe reflejar los hábitos de consumo típicos de la población) y debe permitir comparaciones en el tiempo (manteniendo constante la canasta durante un periodo o ajustándola adecuadamente para reflejar cambios estructurales). Sin estas cualidades, el IPC no serviría para medir correctamente la inflación."
    },
    {
      pregunta: "¿Cuál es uno de los primeros pasos para calcular el IPC de un país?",
      opciones: [
        "Definir una canasta de bienes y servicios representativa y asignarles ponderaciones basadas en el gasto de los hogares en un año base",
        "Recopilar los precios de absolutamente todos los bienes y servicios del país a diario",
        "Decidir qué tasa de inflación objetivo se desea y ajustar los precios a esa meta",
        "Tomar el IPC del año anterior y sumarle un 2% automáticamente"
      ],
      respuesta: 0,
      explicacion: "El cálculo del IPC comienza seleccionando un año base y, mediante encuestas de presupuestos familiares, definiendo una canasta de bienes y servicios que representen el consumo típico. A cada componente se le asigna una ponderación según su importancia en el gasto total. Luego se recogen los precios de esos bienes periódicamente para calcular cómo cambia el costo total de la canasta."
    },
    {
      pregunta: "Si el IPC de un año pasa de 100 a 103, ¿qué significa?",
      opciones: [
        "Que ha habido una inflación aproximada del 3%, es decir, los precios promedio subieron ese porcentaje desde la base",
        "Que los precios se han multiplicado por 1,03 en ese año en términos reales",
        "Que la economía ha crecido un 3% en términos reales",
        "Que hubo deflación del 3%"
      ],
      respuesta: 0,
      explicacion: "El IPC es un índice base 100. Si aumenta de 100 a 103, indica que el costo de la canasta representativa es 3% más alto que en el año base (o periodo base) tomado como 100. En otras palabras, hubo una inflación del 3% en ese intervalo."
    },
    {
      pregunta: "¿Qué término describe una caída generalizada de los precios en la economía?",
      opciones: [
        "Deflación",
        "Devaluación",
        "Desinflación",
        "Recesión"
      ],
      respuesta: 0,
      explicacion: "La deflación es el fenómeno opuesto a la inflación: una disminución general y sostenida de los precios de bienes y servicios. En deflación, el IPC bajaría de un periodo a otro (por ejemplo, de 100 a 98). Es peligrosa porque puede desincentivar el consumo y la inversión (si se espera que los precios sigan bajando, la gente retrasa compras) y puede aumentar el peso real de las deudas."
    },
    {
      pregunta: "¿Cómo se suele calcular la tasa de inflación a partir de los datos del IPC?",
      opciones: [
        "Como el porcentaje de variación del IPC de un periodo a otro (por ejemplo, de un año al siguiente)",
        "Dividiendo el IPC actual por 100",
        "Restando 100 al valor del IPC actual",
        "Multiplicando la diferencia de IPC entre años por 100"
      ],
      respuesta: 0,
      explicacion: "La tasa de inflación se obtiene típicamente calculando la variación porcentual del IPC entre dos periodos. Por ejemplo, si el IPC pasa de 100 a 103 en un año, la inflación anual fue (103-100)/100 = 0,03, es decir, 3%. Esta tasa refleja cuánto subieron en promedio los precios en ese intervalo."
    },
    {
      pregunta: "Según la explicacion monetarista, ¿cuál es una de las principales causas de la inflación?",
      opciones: [
        "Un crecimiento excesivo de la cantidad de dinero en circulación en la economía",
        "Un aumento de la productividad por encima de la demanda",
        "Una bajada de impuestos que estimula la producción",
        "Los controles gubernamentales de precios"
      ],
      respuesta: 0,
      explicacion: "La visión monetarista sostiene que la inflación es principalmente un fenómeno monetario: si la oferta de dinero crece mucho más rápido que la producción de bienes y servicios, habrá más dinero persiguiendo la misma cantidad de bienes, empujando los precios al alza. En términos sencillos: imprimir dinero en exceso suele generar inflación."
    },
    {
      pregunta: "¿Qué entendemos por inflación de demanda?",
      opciones: [
        "La subida general de precios provocada porque la demanda agregada excede la capacidad productiva de la economía",
        "El aumento de precios debido a un incremento de costos de producción",
        "La inflación que se produce cuando cae la demanda agregada",
        "La disminución del nivel de precios por falta de demanda"
      ],
      respuesta: 0,
      explicacion: "Hablamos de inflación de demanda (inflación por tirón de demanda) cuando el gasto total en la economía (demanda agregada) crece más rápido que la oferta de bienes y servicios. Este exceso de demanda ejerce presión al alza sobre los precios. Suele ocurrir en economías recalentadas donde consumidores, empresas y gobierno demandan más de lo que se puede producir a plena capacidad."
    },
    {
      pregunta: "¿Cuál de estos eventos podría causar inflación por el lado de los costos?",
      opciones: [
        "Un aumento significativo en el precio de materias primas clave, encareciendo la producción",
        "Un descenso abrupto en la demanda de bienes y servicios",
        "Una reducción de la oferta monetaria por parte del banco central",
        "Un avance tecnológico que mejora la eficiencia productiva"
      ],
      respuesta: 0,
      explicacion: "La inflación de costos ocurre cuando suben los precios debido a incrementos en los costos de producción, por ejemplo, si el petróleo, la electricidad u otras materias primas se encarecen, las empresas trasladan esos mayores costos a los precios finales. Esto puede originar inflación incluso si la demanda no ha aumentado."
    },
    {
      pregunta: "¿Quién tiende a beneficiarse de una inflación inesperadamente alta?",
      opciones: [
        "Los deudores, ya que devolverán sus préstamos con un dinero que vale menos que cuando lo tomaron prestado",
        "Los acreedores, que recibirán un dinero con mayor poder adquisitivo",
        "Los trabajadores con salario fijo, que ven incrementado su poder de compra",
        "Los ahorradores en efectivo, cuyo dinero gana valor"
      ],
      respuesta: 0,
      explicacion: "La inflación inesperada redistribuye riqueza de acreedores a deudores. Por ejemplo, si alguien tiene una deuda a tipo fijo, una mayor inflación reduce el valor real de las cuotas que devuelve. En cambio, el acreedor (quien prestó el dinero) recupera un dinero con menos poder adquisitivo del esperado. Los ahorradores en efectivo y trabajadores con sueldos fijos también pierden porque sus ingresos valen menos en términos reales."
    },
    {
      pregunta: "¿Qué política monetaria podría aplicar un banco central para frenar una inflación alta?",
      opciones: [
        "Aumentar las tasas de interés, encareciendo el crédito y desincentivando el consumo y la inversión",
        "Bajar los tipos de interés para estimular el ahorro",
        "Comprar masivamente deuda pública para inyectar liquidez",
        "Reducir los impuestos sobre el consumo"
      ],
      respuesta: 0,
      explicacion: "Ante una inflación elevada, los bancos centrales suelen aplicar políticas monetarias restrictivas. Un instrumento típico es subir los tipos de interés: al encarecer préstamos e hipotecas, se reduce la demanda de crédito y el gasto en la economía, aliviando presiones inflacionarias. En cambio, bajar tipos o inyectar dinero son medidas expansivas que podrían empeorar la inflación."
    },
    {
      pregunta: "¿Qué implica que la tasa de inflación de un país sea del 0% en un año determinado?",
      opciones: [
        "Que, en promedio, los precios de la economía se mantuvieron estables ese año (no hubo ni alza ni baja general de precios)",
        "Que ningún precio individual cambió durante ese año",
        "Que la economía no creció en términos reales durante ese año",
        "Que los salarios nominales no cambiaron en ese año"
      ],
      respuesta: 0,
      explicacion: "Una inflación del 0% significa que el nivel general de precios se mantuvo, en promedio, igual al del periodo anterior. No implica que absolutamente todos los precios estuvieran congelados (algunos pudieron subir y otros bajar), sino que, ponderados, no hubo variación neta. Es una situación de estabilidad de precios."
    },
    {
      pregunta: "¿Por qué es el trabajo un factor económico fundamental para la mayoría de las personas?",
      opciones: [
        "Porque proporciona el ingreso principal para vivir y puede brindar realización personal y sentido de contribución a la sociedad",
        "Porque es la única forma de generar riqueza en un país",
        "Porque garantiza que nunca habrá inflación",
        "Porque a mayor trabajo siempre corresponde mayor felicidad"
      ],
      respuesta: 0,
      explicacion: "El trabajo es la principal fuente de ingresos para la mayoría de las familias; perderlo suele significar dificultades económicas. Además, el trabajo tiene un componente personal y social: a través de él las personas pueden desarrollarse profesionalmente y aportar valor a la sociedad. Por eso el desempleo (falta de trabajo) es una de las mayores preocupaciones económicas y sociales."
    },
    {
      pregunta: "¿Qué se considera técnicamente como \"desempleado\" o \"en paro\"?",
      opciones: [
        "Una persona que no tiene trabajo pero está disponible y buscando activamente empleo",
        "Cualquiera que no tenga empleo, independientemente de si busca o no",
        "Solo quien lleva más de seis meses sin empleo",
        "Aquellos trabajadores que están insatisfechos con su trabajo actual"
      ],
      respuesta: 0,
      explicacion: "Se define como desempleado a quien carece de trabajo, está disponible para trabajar y efectivamente busca empleo de forma activa. Personas que no tienen empleo pero tampoco buscan (por ejemplo, estudiantes, jubilados o desanimados que han dejado de buscar) no se cuentan como desempleados en las estadísticas, sino como inactivos."
    },
    {
      pregunta: "¿Qué es el desempleo friccional o transitorio?",
      opciones: [
        "El paro que incluye a personas que están entre trabajos o buscando su primer empleo por un corto periodo",
        "El desempleo causado por crisis económicas de larga duración",
        "El paro voluntario de quienes rechazan trabajar",
        "El desempleo oculto de personas con baja productividad en sus puestos"
      ],
      respuesta: 0,
      explicacion: "El desempleo friccional es parte del movimiento normal del mercado laboral: personas que dejan un empleo para buscar otro, recién graduados buscando su primer trabajo, etc. Suelen ser periodos cortos de paro mientras se hace la transición entre empleos, y siempre existirá cierto nivel de desempleo friccional incluso en economías saludables."
    },
    {
      pregunta: "¿Cuál de las siguientes situaciones describe el desempleo voluntario?",
      opciones: [
        "Personas que deciden no trabajar (o dejar su empleo) porque no están dispuestas a aceptar los trabajos o salarios disponibles",
        "Trabajadores que voluntariamente reducen sus horas de trabajo",
        "Desempleados que hacen voluntariado en ONG",
        "Jóvenes que aún no han buscado empleo porque están estudiando"
      ],
      respuesta: 0,
      explicacion: "El desempleo voluntario se refiere a quienes, existiendo empleos disponibles, optan por no trabajar o dejar su empleo por razones personales (por ejemplo, porque el salario ofrecido no les satisface, o prefieren no trabajar durante un tiempo). No están forzados por la falta de oferta laboral, sino que es una decisión propia."
    },
    {
      pregunta: "¿Qué entendemos por desempleo \"encubierto\"?",
      opciones: [
        "Personas que oficialmente tienen un trabajo pero cuya productividad es tan baja que, de hecho, sobra mano de obra",
        "Personas desempleadas que no figuran en las estadísticas oficiales",
        "Trabajadores que realizan su labor desde casa en la economía sumergida",
        "Parados de larga duración que ya no reciben ayudas"
      ],
      respuesta: 0,
      explicacion: "El paro encubierto ocurre cuando hay más trabajadores empleados de los realmente necesarios para producir lo que se produce, a menudo debido a baja eficiencia o puestos innecesarios. Es típico de economías poco desarrolladas o de administraciones muy burocratizadas donde se mantiene a gente en empleos improductivos. Si esas estructuras se modernizaran, esas personas quedarían desempleadas, de ahí que su situación actual se llame desempleo oculto o encubierto."
    },
    {
      pregunta: "¿Cuál de los siguientes NO es un método habitual para medir el desempleo?",
      opciones: [
        "La cantidad de dinero en circulación en la economía",
        "Encuestas de población activa que preguntan por situación laboral",
        "El número de personas registradas como paradas en oficinas de empleo",
        "El recuento de cotizantes a la seguridad social (empleados registrados)"
      ],
      respuesta: 0,
      explicacion: "Para medir el desempleo se usan, por ejemplo, encuestas (como la Encuesta de Población Activa en España), registros administrativos de demandantes de empleo (paro registrado en el SEPE) o datos de afiliación a la seguridad social. La masa monetaria (dinero en circulación) no es un indicador de desempleo."
    },
    {
      pregunta: "¿Por qué la tasa de desempleo puede no reflejar completamente la salud del mercado laboral?",
      opciones: [
        "Porque no incluye a quienes han dejado de buscar trabajo (desanimados) y no indica si los empleos creados son precarios o de calidad",
        "Porque solo se calcula cada diez años",
        "Porque cuenta a los estudiantes como desempleados",
        "Porque no considera a los trabajadores autónomos"
      ],
      respuesta: 0,
      explicacion: "La tasa de desempleo tiene limitaciones. Por ejemplo, si personas desempleadas dejan de buscar trabajo (se desaniman) pasan a ser consideradas inactivas, haciendo que la tasa de paro baje sin que realmente mejore el empleo. Además, la tasa de paro no muestra la calidad de los empleos (horas, salarios, estabilidad). Por eso, se analiza conjuntamente con la tasa de actividad, tasa de temporalidad, salarios, etc."
    },
    {
      pregunta: "¿Qué mide la tasa de actividad de una economía?",
      opciones: [
        "El porcentaje de la población en edad de trabajar que está ocupada o buscando empleo",
        "El porcentaje de la población total que está empleada",
        "La proporción de personas desempleadas respecto a la población total",
        "La productividad promedio de la mano de obra"
      ],
      respuesta: 0,
      explicacion: "La tasa de actividad indica qué fracción de la población en edad laboral (habitualmente de 16 a 64/65 años) participa en el mercado de trabajo, ya sea trabajando o buscando empleo activamente. Es la suma de ocupados y parados, dividido por la población en edad de trabajar, en porcentaje."
    },
    {
      pregunta: "¿Qué suele indicar una tasa de desempleo elevada en un país?",
      opciones: [
        "Que hay escasez de oportunidades laborales y una demanda de trabajo débil en relación a la oferta de trabajadores",
        "Que la mayoría de la población no quiere trabajar",
        "Que los salarios en ese país son demasiado altos para todos",
        "Que la inflación en ese país también es alta"
      ],
      respuesta: 0,
      explicacion: "Una tasa de paro alta significa que muchas personas que quieren trabajar no encuentran empleo. Esto suele reflejar problemas económicos: bajo crecimiento o recesión, sectores poco dinámicos, desajustes entre formación y empleo, etc. En general, indica que la economía no está generando suficientes puestos de trabajo para absorber a la población activa."
    },
    {
      pregunta: "¿Cómo puede afectar un desempleo elevado a la economía en su conjunto?",
      opciones: [
        "Puede reducir el consumo y la producción, aumentando el gasto social del Estado y frenando el crecimiento económico",
        "Suele bajar los precios inmediatamente, estimulando la economía",
        "No tiene efectos significativos más allá de los individuos desempleados",
        "Mejora la productividad, ya que solo trabajan los más eficientes"
      ],
      respuesta: 0,
      explicacion: "El paro alto tiene múltiples efectos negativos: las familias con miembros desempleados reducen su consumo, lo que a su vez deprime la demanda de bienes y servicios. La producción nacional se mantiene por debajo de su potencial (recursos ociosos). Además, el Estado gasta más en subsidios de desempleo y recauda menos impuestos, empeorando sus cuentas. Todo ello tiende a frenar el crecimiento económico y puede crear círculos viciosos en la economía."
    },
    {
      pregunta: "¿Qué organismo proporciona en España la cifra del paro registrado (personas inscritas como desempleadas)?",
      opciones: [
        "El Servicio Público de Empleo Estatal (SEPE, antiguo INEM)",
        "El Instituto Nacional de Estadística a través de la EPA",
        "El Banco de España mediante informes trimestrales",
        "El Ministerio de Economía mediante el IPC"
      ],
      respuesta: 0,
      explicacion: "En España, el desempleo se mide de dos formas principales: la Encuesta de Población Activa (EPA) realizada por el INE, y el paro registrado que publica el Servicio Público de Empleo Estatal (SEPE, antes INEM). El SEPE cuenta las personas inscritas en sus oficinas como demandantes de empleo."
    },
    {
      pregunta: "¿Cuál de los siguientes podría considerarse un factor estructural que influya en el desempleo?",
      opciones: [
        "Cambios demográficos, como un rápido aumento de la población activa sin una creación equivalente de empleos",
        "Fluctuaciones temporales en el turismo durante el verano",
        "La decisión de algunas personas de no trabajar por un tiempo",
        "Errores en la recopilación de datos de desempleo"
      ],
      respuesta: 0,
      explicacion: "Entre las causas estructurales del paro se encuentran factores como el crecimiento de la población activa (por ejemplo, por aumento de la natalidad, inmigración o incorporación de más mujeres al trabajo) que no va acompañado de suficiente creación de empleo. Otros factores estructurales pueden ser desajustes formativos, rigideces del mercado laboral, etc. Estos no dependen de ciclos económicos temporales, sino de características de fondo de la economía."
    },
    {
      pregunta: "Si aumenta la población activa (más gente buscando trabajo) pero el número de empleos disponibles no crece al mismo ritmo, ¿qué ocurrirá con la tasa de desempleo?",
      opciones: [
        "Aumentará, porque habrá más personas compitiendo por cada puesto de trabajo",
        "Disminuirá automáticamente al haber más gente buscando",
        "Permanecerá igual, ya que la tasa de paro no depende del número de personas",
        "La tasa de actividad disminuirá en lugar de la de desempleo"
      ],
      respuesta: 0,
      explicacion: "La tasa de desempleo es el porcentaje de la población activa que está parada. Si la población activa crece (más gente entra al mercado laboral) y la creación de empleo no acompaña, habrá más personas sin trabajo, subiendo el porcentaje de desempleados. Esto sucedió en ocasiones en España con la incorporación masiva de jóvenes y mujeres al mercado laboral sin suficiente oferta de puestos."
    },
    {
      pregunta: "¿Qué es el desempleo cíclico?",
      opciones: [
        "El paro vinculado a las fases bajas del ciclo económico, como las recesiones, cuando la demanda agregada cae",
        "El paro que se repite cada cierto ciclo de años por tradición",
        "El desempleo causado por factores tecnológicos a largo plazo",
        "El paro que surge únicamente en determinadas estaciones del año"
      ],
      respuesta: 0,
      explicacion: "El desempleo cíclico es el que resulta de la caída de la actividad económica durante las recesiones o periodos de bajo crecimiento. Cuando las empresas venden menos, producen menos y por tanto contratan a menos trabajadores o despiden a parte de su plantilla, generando desempleo. En expansiones económicas sucede lo contrario y el desempleo cíclico desaparece."
    },
    {
      pregunta: "¿Qué llamamos desempleo estacional?",
      opciones: [
        "El paro asociado a determinados periodos del año en ciertas industrias (por ejemplo, menos empleo en turismo tras el verano o en agricultura tras la cosecha)",
        "El desempleo que ocurre cuando cambia la estación meteorológica",
        "El paro que afecta solo a los trabajadores jóvenes",
        "Otra forma de referirse al desempleo cíclico"
      ],
      respuesta: 0,
      explicacion: "Algunas actividades económicas tienen picos y valles según la estación: por ejemplo, el turismo genera muchos empleos en verano, que desaparecen al terminar la temporada. Lo mismo ocurre con campañas agrícolas o ventas navideñas. Ese vaivén produce desempleo estacional en la época baja. Aunque es recurrente cada año, se considera aparte del desempleo cíclico (que depende del ciclo económico general)."
    },
    {
      pregunta: "¿Cómo podrían ayudar las políticas de formación y capacitación laboral a reducir el desempleo estructural?",
      opciones: [
        "Mejorando las habilidades de los trabajadores para adaptarse a las demandas de los puestos vacantes, reduciendo desajustes entre oferta y demanda de trabajo",
        "Retrasando la edad de jubilación para que la gente trabaje más años",
        "Aumentando el salario mínimo independientemente de la productividad",
        "Impidiendo la entrada de trabajadores extranjeros"
      ],
      respuesta: 0,
      explicacion: "El desempleo estructural a menudo se debe a que las habilidades de los trabajadores no coinciden con lo que necesitan las empresas (por cambios tecnológicos, sectores en declive, etc.). Programas de formación, recualificación profesional, orientación laboral y similares pueden reducir estos desajustes, haciendo que más personas adquieran las competencias demandadas y puedan ocupar puestos vacantes."
    },
    {
      pregunta: "¿Qué sucede con el beneficio de una empresa si el salario que paga a un trabajador es menor que la productividad marginal de ese trabajador?",
      opciones: [
        "El beneficio aumenta, ya que el trabajador genera más valor para la empresa del coste que supone su salario",
        "El beneficio disminuye, porque la empresa está pagando por debajo de la contribución del trabajador",
        "El beneficio permanece igual, ya que salario y productividad no están relacionados",
        "La empresa incurrirá en pérdidas con ese trabajador"
      ],
      respuesta: 0,
      explicacion: "Si un trabajador aporta a la empresa (en ingresos o producción) más de lo que cuesta su salario, está generando un margen positivo. En tal caso, contratarlo o mantenerlo empleado aumenta los beneficios de la empresa. Por eso, las empresas tienden a contratar mientras la productividad marginal de un empleado supere a su salario, y detienen contrataciones cuando ambos se igualan."
    },
    {
      pregunta: "¿Cómo se calcula la tasa de desempleo de un país?",
      opciones: [
        "Dividiendo el número de desempleados entre la población activa (personas que trabajan o buscan trabajo) y multiplicando por 100",
        "Dividiendo el número de desempleados entre la población total del país y multiplicando por 100",
        "Restando la tasa de empleo al 100%",
        "Dividiendo el número de empleados entre la población activa y multiplicando por 100"
      ],
      respuesta: 0,
      explicacion: "La tasa de desempleo se expresa como porcentaje de la fuerza laboral que está parada. Se calcula tomando el total de personas desempleadas (que buscan trabajo sin encontrar) y dividiéndolo entre la población activa total (que incluye tanto ocupados como desempleados). Así se obtiene la proporción de la fuerza laboral que está sin empleo."
    },
    {
      pregunta: "¿Cómo podría disminuir la tasa de desempleo incluso si no se crean empleos nuevos?",
      opciones: [
        "Si parte de los desempleados dejan de buscar trabajo y salen de la población activa (efecto desánimo)",
        "Si el gobierno cambia la definición de desempleo",
        "Si más personas emigran al extranjero",
        "No es posible que baje sin crearse empleos"
      ],
      respuesta: 0,
      explicacion: "La tasa de paro puede bajar estadísticamente si, por ejemplo, algunos desempleados se cansan de buscar y abandonan la búsqueda. Al hacerlo, dejan de contarse como parados (pasan a inactivos), reduciendo la tasa de paro aunque no haya más gente trabajando. Este fenómeno, llamado efecto desánimo, puede hacer que una mejora en la tasa de desempleo no refleje una mejora real del mercado laboral."
    },
    {
      pregunta: "¿Qué tipo de políticas ayudarían a reducir el desempleo de origen cíclico?",
      opciones: [
        "Políticas de estímulo económico (fiscal o monetario) que aumenten la demanda agregada durante periodos de recesión",
        "Políticas estrictas para controlar la inflación elevando los tipos de interés",
        "Medidas para reducir la población activa",
        "No se puede hacer nada, hay que esperar a que pase la recesión"
      ],
      respuesta: 0,
      explicacion: "El desempleo cíclico se combate reactivando la economía. Por ejemplo, mediante políticas fiscales expansivas (más gasto público o menores impuestos para estimular el consumo y la inversión) o políticas monetarias expansivas (bajar tipos de interés para incentivar el crédito). Estas medidas buscan elevar la demanda agregada y que las empresas necesiten contratar más trabajadores, reduciendo el paro asociado a la caída del ciclo económico."
    },
    {
      pregunta: "¿Cuál de las siguientes actividades NO se incluye normalmente en el cálculo del PIB?",
      opciones: [
        "El trabajo doméstico no remunerado realizado dentro del hogar",
        "La producción manufacturera vendida en mercados formales",
        "La prestación de servicios profesionales declarados",
        "La inversión pública en infraestructura"
      ],
      respuesta: 0,
      explicacion: "El PIB solo contabiliza bienes y servicios producidos y vendidos legalmente en mercados. Las tareas domésticas que no pasan por el mercado (autoconsumo) no se contabilizan. Por otro lado, la producción ilegal (economía sumergida) en España no se incluía antes de 2014, pero tras ese año se estima y añade según normativa europea."
    }, 
    {
        pregunta: "¿Cuál de los siguientes NO es un objetivo macroeconómico principal de un país?",
        opciones: [
            "Mantener una baja tasa de inflación",
            "Alcanzar un alto nivel de crecimiento económico",
            "Lograr un elevado nivel de desempleo",
            "Conseguir equilibrio en el comercio exterior"
        ],
        respuesta: 2,
        explicacion: "Un elevado desempleo no es un objetivo, sino algo que se busca evitar."
    },
    {
        pregunta: "¿Qué es el Producto Interior Bruto (PIB)?",
        opciones: [
            "El valor de mercado de todos los bienes y servicios finales producidos dentro de un país en un período",
            "El total de ingresos personales de todos los ciudadanos de un país durante un año",
            "El valor de todos los bienes producidos por los ciudadanos de un país sin importar dónde se encuentren",
            "La suma del valor de mercado de todos los bienes, incluyendo intermedios, producidos dentro de un país"
        ],
        respuesta: 0,
        explicacion: "El PIB es la medida del valor de mercado de todos los bienes y servicios finales producidos en el interior de un país durante un período."
    }
];

let currentRound = 1;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
const timeLimit = 15; // 15 segundos por pregunta

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    currentRound = 1;
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionObj = preguntas[currentQuestionIndex];
    document.getElementById("questionText").innerText = questionObj.pregunta;
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";
    questionObj.opciones.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "optionBtn";
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
    startTimer();
}

function startTimer() {
    let timeLeft = timeLimit;
    document.getElementById("time").innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const questionObj = preguntas[currentQuestionIndex];
    if (selectedIndex === questionObj.respuesta) {
        score += 10;
    }
    document.getElementById("score").innerText = score;
    showExplanation(questionObj.explicacion);
}

function showExplanation(explicacion) {
    const explanationElement = document.getElementById("explanation");
    explanationElement.innerText = explicacion;
    explanationElement.classList.add("show");
    setTimeout(nextQuestion, 3000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < preguntas.length) {
        loadQuestion();
    } else {
        finishGame();
    }
}

function finishGame() {
    document.getElementById("finalScore").innerText = score;
    document.getElementById("gameContainer").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
}

document.getElementById("startBtn").addEventListener("click", startGame);
