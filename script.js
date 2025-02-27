// script.js para el juego de Economía y Finanzas
 // Preguntas del juego (80 en total, 20 por cada tema indicado). 
// Todas las preguntas están unificadas en un solo conjunto (sin niveles de dificultad).
const questions = [
    {
        question: "¿Qué estudia la macroeconomía en contraste con la microeconomía?",
        options: [
            "La economía de un país en su conjunto, agregando las decisiones de todos los agentes",
            "Únicamente el comportamiento de una empresa",
            "La gestión financiera de una familia",
            "La toma de decisiones individual de consumidores y productores"
        ],
        answer: 0,
        explanation: "La macroeconomía analiza el funcionamiento de la economía como un todo, considerando agregados como la producción nacional, el empleo total o la inflación general. En cambio, la microeconomía se enfoca en decisiones individuales de hogares y empresas."
    },
    {
        question: "¿Cuál de los siguientes NO es uno de los seis principales objetivos macroeconómicos?",
        options: [
            "Mantener un bajo nivel de inflación",
            "Alcanzar el pleno empleo",
            "Lograr un tipo de cambio inestable",
            "Conseguir crecimiento económico sostenido"
        ],
        answer: 2,
        explanation: "Los objetivos macroeconómicos habituales incluyen el crecimiento económico, el pleno empleo, la estabilidad de precios (baja inflación), el equilibrio de las cuentas públicas, un saldo exterior positivo y la estabilidad en el tipo de cambio. Un tipo de cambio **inestable** no es deseable; por el contrario, se busca estabilidad cambiaria."
    },
    {
        question: "¿Qué mide el Producto Interior Bruto (PIB) de un país?",
        options: [
            "El valor de mercado de todos los bienes y servicios finales producidos dentro del país en un período",
            "La suma de todos los ingresos personales de los ciudadanos en un año",
            "El valor de todos los activos financieros generados por la economía",
            "La riqueza total acumulada por el país a lo largo de su historia"
        ],
        answer: 0,
        explanation: "El PIB es el valor monetario de la producción final de bienes y servicios dentro de las fronteras de un país durante un período (normalmente un año). Es un indicador de la actividad económica y la riqueza generada en ese periodo. No incluye simplemente ingresos personales ni activos financieros, sino el valor de la producción corriente."
    },
    {
        question: "¿Cuál es la diferencia principal entre el PIB (Producto Interior Bruto) y el PNB (Producto Nacional Bruto)?",
        options: [
            "El PIB mide la producción dentro del territorio del país, mientras el PNB mide la producción de los nacionales del país sin importar dónde",
            "No hay diferencia, son términos equivalentes",
            "El PIB incluye la producción informal y el PNB no",
            "El PNB se calcula solo en años de crecimiento económico"
        ],
        answer: 0,
        explanation: "El Producto Interior Bruto contabiliza la producción generada **dentro del territorio nacional**, sea por residentes o extranjeros. El Producto Nacional Bruto, en cambio, mide la producción de los **residentes nacionales** (o ciudadanos) sin importar si ocurre en el país o en el extranjero. En otras palabras, el PNB suma lo producido por los nacionales del país (dentro o fuera) y excluye lo producido por extranjeros dentro del país."
    },
    {
        question: "La producción de una empresa española ubicada en Brasil, ¿a qué indicador contribuye?",
        options: [
            "Al PNB de España pero no al PIB de España",
            "Al PIB de España pero no al PNB de España",
            "A ambos: PIB y PNB de España",
            "No se contabiliza en ningún agregado macroeconómico"
        ],
        answer: 0,
        explanation: "El PIB de España incluye solo la producción dentro de España. Una empresa española en Brasil genera producción fuera del territorio español, por lo que **no cuenta para el PIB de España**, pero al ser producción de una empresa española (propiedad de nacionales españoles) sí se incluye en el PNB de España. De forma análoga, esa producción formaría parte del PIB de Brasil."
    },
    {
        question: "¿Cuál de las siguientes expresiones corresponde al PIB calculado por el enfoque del gasto?",
        options: [
            "Consumo privado + Inversión + Gasto público + (Exportaciones – Importaciones)",
            "Salarios + Alquileres + Intereses + Beneficios empresariales",
            "Masa monetaria × Velocidad del dinero",
            "Consumo privado + Ahorro familiar + Déficit público"
        ],
        answer: 0,
        explanation: "El enfoque del gasto para calcular el PIB suma el gasto en consumo privado, la inversión privada, el gasto público y las exportaciones netas (exportaciones menos importaciones). Esta suma representa la demanda total de bienes y servicios finales producidos en la economía. La segunda opción corresponde al enfoque del ingreso (suma de rentas), no al del gasto."
    },
    {
        question: "¿Por qué las transferencias públicas (como pensiones o subsidios) NO se incluyen en el cálculo del PIB?",
        options: [
            "Porque no corresponden a la compra de un bien o servicio nuevo, sino a una redistribución de ingresos",
            "Porque representan gastos del gobierno",
            "Porque son pagos realizados al extranjero",
            "Porque el PIB solo considera la producción del sector privado"
        ],
        answer: 0,
        explanation: "El PIB solo contabiliza el valor de bienes y servicios producidos. Las transferencias (como pensiones, subsidios o ayudas) son pagos unilaterales del Estado a personas, **sin que medie la producción de un bien o servicio a cambio**. Por ello, no se cuentan dentro del PIB (ya que no reflejan nueva producción, solo redistribución de renta)."
    },
    {
        question: "¿En qué se diferencia el PIB nominal del PIB real?",
        options: [
            "El PIB nominal valora la producción a precios corrientes del año, mientras el PIB real la valora a precios constantes de un año base",
            "El PIB nominal excluye las importaciones, el PIB real las incluye",
            "El PIB nominal considera solo bienes de consumo, el real incluye inversión",
            "El PIB nominal se mide en moneda local y el PIB real en una moneda extranjera"
        ],
        answer: 0,
        explanation: "El PIB nominal se calcula con los precios vigentes en el mismo año de la producción, por lo que refleja tanto cambios en cantidades producidas como cambios en precios. El PIB real usa precios de un año base fijo, eliminando el efecto de la inflación, de modo que refleja únicamente cambios en la cantidad producida. Así, la diferencia radica en la corrección por precios constantes en el PIB real."
    },
    {
        question: "¿Para qué sirve el deflactor del PIB?",
        options: [
            "Para determinar cuánto del crecimiento del PIB se debe a aumentos de precios (inflación) y no a mayor producción real",
            "Para deflactar (reducir) el gasto público en términos reales",
            "Para medir la variación de precios solo de la canasta familiar básica",
            "Para conocer la relación entre exportaciones e importaciones"
        ],
        answer: 0,
        explanation: "El deflactor del PIB es un índice de precios que se obtiene como (PIB nominal / PIB real) × 100. Indica el aumento acumulado de precios desde el año base para el conjunto de bienes y servicios del PIB. Permite saber qué parte de la variación del PIB nominal se debe a cambios en los precios en lugar de cambios en la cantidad producida. Por ejemplo, un deflactor de 111 implica un 11% de inflación acumulada desde el año base en el ámbito del PIB."
    },
    {
        question: "¿Por qué es útil analizar el PIB per cápita de un país?",
        options: [
            "Porque indica la producción económica promedio por habitante, aproximando el nivel de riqueza o bienestar medio",
            "Porque mide exactamente cómo se distribuye la riqueza entre los ciudadanos",
            "Porque refleja la inflación ajustada por habitante",
            "Porque incluye la economía sumergida en el cálculo"
        ],
        answer: 0,
        explanation: "El PIB per cápita se calcula dividiendo el PIB total de un país entre su población. Este indicador da una idea de la **riqueza promedio por persona**, útil para comparar el nivel de vida aproximado entre países o periodos. Sin embargo, no muestra la distribución de la renta (dos países con igual PIB per cápita pueden tener distribuciones muy diferentes)."
    },
    {
        question: "¿Qué es el déficit público?",
        options: [
            "La situación en que los gastos del gobierno superan a sus ingresos en un período, generando una necesidad de financiamiento",
            "La deuda total que tiene acumulada un Estado a lo largo de su historia",
            "La diferencia positiva entre ingresos y gastos públicos",
            "El exceso de ingresos públicos sobre los gastos en un año"
        ],
        answer: 0,
        explanation: "El déficit público ocurre cuando, en un ejercicio presupuestario, el Estado gasta más dinero del que ingresa. Es decir, sus gastos exceden sus ingresos, obligándolo a financiar esa diferencia (por ejemplo, emitiendo deuda). Lo opuesto, cuando los ingresos superan a los gastos, se denomina superávit público."
    },
    {
        question: "¿Qué indica que un país tenga un saldo exterior (balanza comercial) positivo?",
        options: [
            "Que sus exportaciones de bienes y servicios superan a sus importaciones, reflejando ingresos netos del extranjero",
            "Que importa más de lo que exporta, cubriendo la diferencia con deuda",
            "Que no comercia con el exterior para nada",
            "Que su tipo de cambio es fijo respecto al dólar"
        ],
        answer: 0,
        explanation: "Un saldo exterior o balanza comercial positivo significa que el valor de lo que el país vende al exterior (exportaciones) es mayor que el valor de lo que compra (importaciones). Esto suele considerarse favorable, pues implica un aporte neto de demanda externa a la economía y entrada de divisas. Lo contrario (déficit comercial) indica dependencia de productos extranjeros y salida neta de capitales para pagarlos."
    },
    {
        question: "¿Por qué se suele buscar la estabilidad en el tipo de cambio de una moneda?",
        options: [
            "Porque fluctuaciones bruscas del tipo de cambio generan incertidumbre y pueden perjudicar tanto a exportadores como a importadores",
            "Porque un tipo de cambio volátil reduce automáticamente la inflación",
            "Porque un tipo de cambio fijo es la garantía de pleno empleo",
            "Porque impide cualquier déficit comercial"
        ],
        answer: 0,
        explanation: "Un tipo de cambio estable (no sujeto a variaciones abruptas) da previsibilidad al comercio internacional y a las inversiones. Una moneda **demasiado volátil** dificulta la planificación: una apreciación fuerte puede dañar a los exportadores (encareciendo sus productos en el exterior), mientras que una depreciación rápida encarece las importaciones y puede desestabilizar precios internos. Por eso, se valora la estabilidad cambiaria, aunque mantenerla no garantiza por sí sola pleno empleo ni equilibrios automáticos."
    },
    {
        question: "¿Es posible alcanzar simultáneamente todos los objetivos macroeconómicos (crecimiento, pleno empleo, baja inflación, etc.)?",
        options: [
            "En la práctica no es posible lograrlos todos a la vez; suelen existir disyuntivas que obligan a priorizar entre ellos",
            "Sí, siempre que se apliquen las políticas económicas correctas simultáneamente",
            "Solo en economías pequeñas y muy abiertas es viable",
            "Únicamente si se mantiene el tipo de cambio fijo con monedas fuertes"
        ],
        answer: 0,
        explanation: "Los responsables de política económica se enfrentan a **trade-offs**: impulsar un objetivo puede dificultar otro. Por ejemplo, un fuerte estímulo al crecimiento y al empleo puede generar presiones inflacionarias. Por ello, es necesario priorizar. No existe una situación real en la que se maximice plenamente y de forma sostenida el crecimiento, el empleo, la estabilidad de precios, el equilibrio fiscal, el superávit externo y la estabilidad cambiaria al mismo tiempo."
    },
    {
        question: "Si un gobierno impulsa fuertemente la producción nacional para reducir el desempleo, ¿qué efecto puede tener esto sobre los precios?",
        options: [
            "Que aumenten las presiones inflacionistas, subiendo los precios por mayor demanda",
            "Que se produzca una deflación inmediata",
            "Ninguno, el crecimiento del empleo no afecta a los precios",
            "Que los precios bajen al haber más oferta de productos"
        ],
        answer: 0,
        explanation: "Al estimular la producción y reducir el paro, más personas trabajan y reciben ingresos, lo que suele aumentar la demanda de bienes y servicios. Si la demanda crece más rápidamente que la oferta, **los precios tienden a subir**, generando inflación. Este es un ejemplo típico de la disyuntiva entre reducir el desempleo y contener la inflación."
    },
    {
        question: "¿En qué se diferencian las prioridades del Banco Central Europeo (BCE) y la Reserva Federal (FED) de EE.UU. según el texto?",
        options: [
            "El BCE tiene como objetivo prioritario el control de la inflación, mientras la FED prioriza además promover el crecimiento económico y el empleo",
            "No se diferencian: ambos bancos centrales solo se enfocan en la estabilidad de precios",
            "El BCE busca el pleno empleo a toda costa y la FED no",
            "La FED se encarga de la política fiscal y monetaria, el BCE solo de la monetaria"
        ],
        answer: 0,
        explanation: "Según sus mandatos, el Banco Central Europeo se concentra principalmente en **mantener la inflación baja** (estabilidad de precios) en la eurozona. La Reserva Federal de Estados Unidos, en cambio, tiene un mandato dual: además de la estabilidad de precios, busca fomentar el **pleno empleo y el crecimiento económico**. Por eso, en situaciones equivalentes, la FED puede tomar medidas más agresivas para estimular la economía, mientras el BCE tiende a ser más cauteloso para no avivar la inflación."
    },
    {
        question: "¿Cuál de las siguientes medidas es un instrumento de política monetaria (y NO de política fiscal)?",
        options: [
            "Variar los tipos de interés para influir en el crédito y la masa monetaria",
            "Aumentar el gasto público en infraestructura",
            "Subir los impuestos sobre la renta de las familias",
            "Reducir los aranceles a la importación de bienes"
        ],
        answer: 0,
        explanation: "La política monetaria, gestionada por el banco central, actúa sobre la cantidad de dinero y el crédito en la economía. **Modificar los tipos de interés** (tasas de interés) es una herramienta típica: por ejemplo, bajar la tasa para estimular préstamos y consumo, o subirla para contener la inflación. En cambio, el gasto en obras públicas y los impuestos son instrumentos de política fiscal (decisiones del gobierno sobre gasto e ingresos)."
    },
    {
        question: "Para aumentar el consumo privado nacional, ¿qué política podría aplicar un gobierno?",
        options: [
            "Reducir los impuestos a las familias, aumentando su renta disponible",
            "Incrementar la tasa de interés para incentivar el ahorro",
            "Disminuir el salario mínimo interprofesional",
            "Aumentar las reservas obligatorias de los bancos"
        ],
        answer: 0,
        explanation: "Si se busca estimular el consumo de las familias, una medida eficaz es bajar los impuestos directos (por ejemplo, el IRPF). Esto deja más ingreso disponible en manos de los consumidores, que podrán gastar más en bienes y servicios. Elevar el tipo de interés o las reservas bancarias tendría el efecto contrario (enfriar la demanda). La reducción del salario mínimo no incrementa el consumo agregado; de hecho podría reducir la renta de algunos trabajadores."
    },
    {
        question: "Si se desea incentivar la inversión de las empresas, ¿qué medida sería apropiada?",
        options: [
            "Reducir los impuestos o cargas a las empresas, para abaratar costos e impulsar proyectos de inversión",
            "Incrementar el coeficiente de reserva bancaria para que haya más fondos disponibles",
            "Elevar significativamente los tipos de interés",
            "Aumentar el salario de todos los trabajadores por ley"
        ],
        answer: 0,
        explanation: "Una reducción de impuestos empresariales (por ejemplo, del Impuesto de Sociedades) o de las cotizaciones sociales abarata los costos de las empresas y mejora sus incentivos para invertir. También puede aumentarse la inversión pública en complementos (infraestructuras, tecnología). Por el contrario, subir los tipos de interés encarece el crédito y desincentiva la inversión privada. Incrementar el coeficiente de caja contrae la capacidad de préstamo de los bancos."
    },
    {
        question: "¿Para qué se utiliza el índice o coeficiente de Gini en economía?",
        options: [
            "Para medir el grado de desigualdad en la distribución de la renta de un país",
            "Para calcular la tasa de crecimiento del PIB",
            "Para conocer la inflación subyacente",
            "Para evaluar el nivel de desempleo estructural"
        ],
        answer: 0,
        explanation: "El coeficiente de Gini es un indicador que cuantifica la **desigualdad de ingresos** en una sociedad. Su valor oscila generalmente entre 0 (completa igualdad, todos reciben la misma renta) y 1 (desigualdad total, una persona acapara toda la renta). Un Gini alto indica mucha disparidad en la distribución de la renta; un Gini bajo refleja una distribución más equitativa."
    },
    {
        question: "¿En qué se basa principalmente el valor del dinero actual, como por ejemplo el de un billete de 20 euros?",
        options: [
            "En la confianza y aceptación general de que podrá usarse para pagos futuros",
            "En el contenido de oro o plata que tiene el billete",
            "En el alto costo de producción de cada billete",
            "En que su valor está garantizado por ser inalterable físicamente"
        ],
        answer: 0,
        explanation: "El dinero fiduciario moderno (billetes y monedas actuales) **no tiene un valor intrínseco significativo**; su valor radica en la confianza de las personas en que otros lo aceptarán a cambio de bienes o servicios. Un billete de 20 euros vale porque todos confían en él como medio de pago general, no porque el papel en sí tenga valor ni porque esté respaldado por metales preciosos."
    },
    {
        question: "¿Cuál es la definición económica correcta de \"dinero\"?",
        options: [
            "Todo activo que es generalmente aceptado como medio de pago por los agentes económicos",
            "Cualquier objeto con valor intrínseco utilizado en intercambios",
            "Únicamente las monedas y billetes emitidos por el Estado",
            "Los depósitos bancarios que generan intereses"
        ],
        answer: 0,
        explanation: "En economía, llamamos dinero a cualquier medio de intercambio generalmente aceptado. No se limita al efectivo (monedas y billetes), sino que incluye depósitos u otros instrumentos siempre que sean aceptados para pagar. Lo esencial es la aceptación general para saldar deudas y transacciones, no necesariamente el valor material del objeto."
    },
    {
        question: "¿Por qué el trueque resultaba poco eficiente como sistema de intercambio?",
        options: [
            "Porque requiere una doble coincidencia de necesidades entre las partes, lo cual dificulta enormemente los intercambios",
            "Porque no existía manera de asignar valor a los bienes sin dinero",
            "Porque las personas no valoraban los bienes de los demás",
            "Porque el gobierno no podía cobrar impuestos en especie"
        ],
        answer: 0,
        explanation: "En una economía de trueque, para que ocurra un intercambio directo, cada parte debe tener exactamente lo que la otra desea y querer exactamente lo que la otra ofrece (**doble coincidencia de necesidades**). Esto hace muy complicado el comercio, especialmente en sociedades complejas con muchos bienes. El dinero surgió para solucionar este problema, actuando como medio de cambio universalmente aceptado."
    },
    {
        question: "¿Qué distingue al dinero mercancía (por ejemplo, oro, sal) del dinero fiduciario o \"dinero signo\"?",
        options: [
            "Que el dinero mercancía tiene valor intrínseco propio, aparte de su uso como medio de cambio",
            "Que el dinero mercancía no es generalmente aceptado",
            "Que el dinero fiduciario tiene un valor intrínseco mayor que su valor nominal",
            "Que el dinero mercancía lo emite y garantiza exclusivamente el banco central"
        ],
        answer: 0,
        explanation: "Se llama dinero mercancía al que consiste en un bien con valor propio (intrínseco) que a la vez se usa como medio de pago. Por ejemplo, el oro o la sal eran valiosos por sí mismos y también servían para comerciar. En cambio, el dinero fiduciario (como los billetes actuales) **no tiene valor intrínseco apreciable**, su valor es nominal y depende de la confianza en quien lo emite. El dinero fiduciario es emitido por la autoridad (banco central) y no está respaldado por un valor físico equivalente."
    },
    {
        question: "¿Cuál de las siguientes NO es una característica deseable en un bien para que funcione como dinero mercancía?",
        options: [
            "Que sea perecedero (se degrade o arruine con facilidad)",
            "Que tenga un valor en sí mismo (valor intrínseco)",
            "Que sea divisible en unidades más pequeñas",
            "Que su oferta sea limitada o escasa"
        ],
        answer: 0,
        explanation: "Para que algo funcione bien como dinero mercancía debe cumplir varias cualidades: ser durable (no perecedero), portable, divisible, homogéneo, de oferta limitada y tener valor en sí mismo. Si el bien fuera perecedero (por ejemplo, alimentos muy delicados) perdería valor con el tiempo y no serviría como reserva de valor ni medio de cambio confiable."
    },
    {
        question: "¿Cuál de las siguientes es una de las funciones básicas que desempeña el dinero en una economía?",
        options: [
            "Servir como unidad de cuenta para expresar y comparar el valor de bienes y servicios",
            "Generar automáticamente intereses con solo mantenerlo en efectivo",
            "Producir bienes de consumo al ser acumulado",
            "Redistribuir la riqueza entre los ciudadanos"
        ],
        answer: 0,
        explanation: "El dinero cumple principalmente tres funciones: **medio de cambio** (lo usamos para comprar/vender bienes), **unidad de cuenta** (denominamos los precios en dinero, facilitando comparaciones) y **depósito de valor** (podemos conservar riqueza en forma de dinero para usarla después). No genera intereses por sí mismo (a menos que se invierta o deposite en instrumentos financieros) ni crea bienes por acumularlo, y por sí solo no redistribuye riqueza."
    },
    {
        question: "¿Qué significa que el dinero en efectivo (billetes y monedas) es el activo más líquido?",
        options: [
            "Que puede convertirse de inmediato en bienes o en otros activos sin pérdida de valor",
            "Que su valor nunca se ve erosionado por la inflación",
            "Que siempre genera algún rendimiento por tenerlo en mano",
            "Que está respaldado por reservas de oro equivalentes"
        ],
        answer: 0,
        explanation: "La liquidez de un activo se refiere a la facilidad con que puede transformarse en dinero efectivo o usarse directamente para pagos. El efectivo **ya es dinero**, por lo que es perfectamente líquido: se acepta al instante para cualquier compra sin pérdida de valor. Otros activos, como una casa o un bono, requieren venderse primero (lo cual puede tomar tiempo y conllevar costos) para obtener dinero líquido."
    },
    {
        question: "¿Qué ventaja tiene el dinero depositado en un banco (dinero bancario) frente al efectivo guardado \"bajo el colchón\"?",
        options: [
            "Que los depósitos bancarios pueden generar intereses para quien ahorra, mientras el efectivo no produce rentabilidad",
            "Que el dinero en efectivo puede perder valor y el bancario no",
            "Que el dinero bancario no depende de la confianza en el sistema financiero",
            "Que el efectivo no es de aceptación general pero el depósito bancario sí"
        ],
        answer: 0,
        explanation: "El dinero bancario (los depósitos en cuentas bancarias) suele ofrecer alguna remuneración: el banco paga un interés (aunque bajo, en cuentas a la vista normalmente cercano a cero) al depositante. En cambio, el efectivo no genera rendimiento alguno. Cabe aclarar que ambos tipos de dinero pierden poder adquisitivo con la inflación y ambos dependen de la confianza (los depósitos valen porque el banco promete convertirlos en efectivo cuando se requiera)."
    },
    {
        question: "¿Cómo \"crean\" dinero los bancos en un sistema de banca de reserva fraccionaria?",
        options: [
            "Prestando parte del dinero que los depositantes han colocado, en lugar de mantenerlo todo inmovilizado en reserva",
            "Imprimiendo billetes cuando lo necesitan para prestar",
            "Emitiendo acciones en la bolsa y usándolas como dinero",
            "Aumentando los impuestos sobre sus clientes"
        ],
        answer: 0,
        explanation: "En la banca de reserva fraccionaria, los bancos guardan solo una fracción de los depósitos como reserva y **prestan el resto**. Al conceder préstamos, en la práctica ponen en circulación dinero adicional (generalmente en forma de depósitos en las cuentas de los prestatarios). Así, aunque físicamente no haya más efectivo, hay más \"dinero\" en la economía (como depósitos que la gente considera dinero disponible). Los bancos no emiten billetes —eso es competencia del banco central— pero mediante el crédito expanden la oferta monetaria."
    },
    {
        question: "¿Qué es el coeficiente de caja o coeficiente de reserva bancaria?",
        options: [
            "El porcentaje de los depósitos que el banco debe mantener inmovilizado como reserva de liquidez",
            "La fracción de sus beneficios que el banco destina a provisiones",
            "El interés que cobra el banco central a los bancos comerciales",
            "La proporción de créditos morosos que puede tolerar un banco"
        ],
        answer: 0,
        explanation: "El coeficiente de caja (o de reserva) es el **porcentaje obligatorio de los depósitos que los bancos deben conservar en sus reservas**, ya sea en caja o en cuentas en el banco central. Por ejemplo, si el coeficiente es 5%, de cada 100 euros depositados el banco debe guardar 5 y puede prestar 95. Es una herramienta regulatoria con la que el banco central controla la expansión crediticia."
    },
    {
        question: "Si el coeficiente de reserva obligatoria es del 20%, ¿cuál es el multiplicador teórico de creación de dinero en la economía?",
        options: [
            "5 veces el depósito inicial",
            "20 veces el depósito inicial",
            "0,2 veces el depósito inicial",
            "Depende únicamente del banco central, no del coeficiente"
        ],
        answer: 0,
        explanation: "El multiplicador monetario teórico es la inversa del coeficiente de reserva. Si los bancos han de guardar un 20% (0,2) de los depósitos, el multiplicador es 1/0,2 = **5**. Esto significa que, en el mejor de los casos, un depósito inicial podría expandirse hasta generar un monto de dinero cinco veces mayor en toda la economía a través de sucesivos préstamos y re-depósitos (suponiendo que todo el dinero prestado vuelva al sistema bancario y que los bancos presten todo lo que pueden)."
    },
    {
        question: "¿Cuál de los siguientes factores podría frenar el proceso de creación de dinero por parte del sistema bancario?",
        options: [
            "Que la gente prefiera guardar más efectivo en lugar de depositarlo en el banco",
            "Que todos los préstamos que conceden los bancos se depositen nuevamente en el sistema bancario",
            "Que el banco central baje el coeficiente de reserva",
            "Que los bancos presten la mayor cantidad posible de dinero"
        ],
        answer: 0,
        explanation: "Dos factores principales limitan la expansión máxima del dinero: **el comportamiento del público y el de los bancos**. Si los individuos conservan más dinero en efectivo (fuera del banco), habrá menos depósitos que sirvan de base para nuevos créditos, reduciendo la multiplicación. Asimismo, si los bancos, por cautela, deciden no prestar todo lo que podrían y guardan reservas en exceso, también se frena la creación de dinero. Las otras opciones en realidad ampliarían o mantendrían la expansión (más re-depósito y menor coeficiente permiten más préstamos)."
    },
    {
        question: "¿Quién es el responsable de emitir el dinero legal (efectivo) y controlar la cantidad de dinero en circulación en un país?",
        options: [
            "El banco central, por ejemplo el Banco de España o la Reserva Federal",
            "El Ministerio de Hacienda o Economía del gobierno",
            "La asociación de bancos privados del país",
            "Cada gobierno regional o local"
        ],
        answer: 0,
        explanation: "La emisión de moneda y el control de la oferta monetaria son funciones del **banco central** de cada país o zona monetaria. En España, el Banco de España (dentro del Eurosistema del BCE) emite el efectivo y junto con el Banco Central Europeo regula la cantidad de dinero (a través de políticas monetarias como tipos de interés, coeficiente de reservas, operaciones de mercado abierto, etc.). Los ministerios de gobierno manejan política fiscal, pero no crean dinero directamente."
    },
    {
        question: "¿Cuál de estas funciones es propia de un banco central?",
        options: [
            "Actuar como prestamista de última instancia para dar liquidez a bancos comerciales en problemas",
            "Ofrecer cuentas corrientes y préstamos directamente al público general",
            "Fijar los impuestos nacionales",
            "Construir infraestructura pública en caso de recesión"
        ],
        answer: 0,
        explanation: "Entre las funciones de un banco central están: emitir dinero, **prestar a los bancos comerciales en situaciones de emergencia (prestamista de última instancia)**, regular y supervisar el sistema financiero, controlar la inflación mediante la política monetaria y custodiar las reservas internacionales del país. Las otras tareas listadas corresponden a otras entidades (bancos comerciales atienden al público, impuestos e infraestructura son atribuciones del gobierno)."
    },
    {
        question: "¿En qué consisten las operaciones de mercado abierto realizadas por los bancos centrales?",
        options: [
            "En la compra o venta de activos financieros (como bonos del Estado) para influir en la cantidad de dinero y las tasas de interés",
            "En abrir la economía nacional al comercio exterior",
            "En regular los horarios de apertura de los mercados bursátiles",
            "En prestar directamente dinero a las familias y empresas"
        ],
        answer: 0,
        explanation: "Las operaciones de mercado abierto son una herramienta clave de la política monetaria. Consisten en que el banco central **compra o vende títulos (típicamente bonos gubernamentales)** en el mercado financiero. Si compra bonos, inyecta dinero en la economía (aumenta la oferta monetaria); si vende bonos, retira dinero (contrae la oferta monetaria). Con estas operaciones controla la liquidez y puede influir en las tasas de interés de corto plazo."
    },
    {
        question: "¿Por qué el banco central regula la cantidad de dinero en circulación?",
        options: [
            "Para mantener la estabilidad de precios y evitar una inflación excesiva",
            "Para asegurar que los bancos tengan siempre beneficios",
            "Para financiar automáticamente el gasto público",
            "Para controlar directamente la producción de bienes y servicios"
        ],
        answer: 0,
        explanation: "Al controlar la oferta monetaria, el banco central busca principalmente **estabilidad económica**, especialmente mantener la inflación en niveles bajos y estables. Un exceso de dinero en circulación puede generar inflación alta; muy poco dinero puede frenar la economía. Si bien la política monetaria puede influir en la actividad económica, las otras opciones no son objetivos directos: no garantiza las ganancias bancarias ni financia el gasto público (de hecho, la emisión descontrolada para financiar al Estado suele generar inflación)."
    },
    {
        question: "¿Qué es el \"dinero bancario\"?",
        options: [
            "El conjunto de depósitos y cuentas bancarias que los agentes económicos pueden usar como medio de pago",
            "El efectivo (billetes y monedas) en manos del público",
            "Las reservas internacionales que poseen los bancos centrales",
            "El dinero electrónico como las criptomonedas emitidas por bancos"
        ],
        answer: 0,
        explanation: "Dinero bancario se refiere al **dinero depositado en bancos comerciales** que puede movilizarse mediante cheques, transferencias, tarjetas, etc. y es generalmente aceptado para pagar. Aunque físicamente no es efectivo, los depósitos a la vista funcionan como dinero porque pueden transformarse en efectivo a pedido y son usados en transacciones cotidianas. No debe confundirse con el dinero legal (efectivo) ni con dinero electrónico privado como criptomonedas."
    },
    {
        question: "¿Qué compone la base monetaria de una economía?",
        options: [
            "El efectivo en circulación más las reservas que los bancos comerciales mantienen en el banco central",
            "Todo el dinero en manos del público, incluyendo efectivo y depósitos",
            "Los fondos propios de los bancos y las cajas de ahorro",
            "El conjunto de créditos otorgados al sector privado"
        ],
        answer: 0,
        explanation: "La base monetaria (a veces llamada dinero de alta potencia) está formada por: 1) **el efectivo en manos del público** (billetes y monedas circulando fuera del banco central) y 2) **las reservas de los bancos comerciales depositadas en el banco central** (incluyendo el efectivo en sus cajas fuertes). Es el dinero de emisión primaria creado por el banco central. La oferta monetaria total (M1, M2...) incluye también el dinero bancario; la base monetaria es solo la parte emitida directamente por la autoridad monetaria."
    },
    {
        question: "¿Qué agentes intervienen en el proceso de creación de dinero de una economía?",
        options: [
            "El banco central, el sistema bancario (bancos comerciales) y el público (familias y empresas)",
            "El banco central, el gobierno y las empresas exportadoras",
            "Los bancos privados, las casas de cambio y los fondos de inversión",
            "Las familias ricas, los bancos centrales extranjeros y el Ministerio de Economía"
        ],
        answer: 0,
        explanation: "En la creación de dinero participan: **la autoridad monetaria** (banco central), que emite la base monetaria; **los bancos comerciales**, que a partir de esa base expanden el crédito y el dinero bancario; y **el público**, cuyos comportamientos (depositar dinero o guardarlo en efectivo, pedir préstamos o no) influyen en cuánto dinero se acaba creando en circulación. Gobierno, exportadores u otros agentes pueden influir indirectamente, pero los principales del mecanismo monetario son los mencionados."
    },
    {
        question: "¿Cómo influye en la economía que el banco central incremente los tipos de interés oficiales?",
        options: [
            "Encarece el crédito y desalienta la demanda, reduciendo la cantidad de dinero en circulación y ayudando a frenar la inflación",
            "Facilita el crédito y estimula la inversión, aumentando la masa monetaria",
            "No tiene efectos sobre la cantidad de dinero ni sobre la inflación",
            "Obliga al gobierno a reducir sus gastos inmediatamente"
        ],
        answer: 0,
        explanation: "Cuando el banco central sube los tipos de interés, los préstamos se vuelven más caros. Esto suele traducirse en **menos demanda de crédito** por parte de familias y empresas, enfriando el gasto en consumo e inversión. Como consecuencia, el crecimiento económico se modera y las presiones inflacionarias tienden a ceder. Es una medida clásica para combatir la inflación. A la inversa, bajar los tipos de interés abarata el crédito y puede estimular la economía, pero con el riesgo de mayor inflación."
    },
    {
        question: "¿Qué es la inflación?",
        options: [
            "El aumento generalizado y sostenido de los precios de bienes y servicios en la economía",
            "Un aumento temporal del precio de algunos bienes específicos",
            "La pérdida de valor de la moneda frente a monedas extranjeras",
            "El crecimiento acelerado de la producción de un país"
        ],
        answer: 0,
        explanation: "En términos económicos, la inflación es un **incremento continuo y amplio en el nivel general de precios**. No se refiere a subidas puntuales de unos pocos productos, sino a una tendencia al alza en la mayoría de precios a lo largo del tiempo, lo cual equivale a una disminución del poder adquisitivo del dinero. La devaluación de la moneda frente a otras (tipo de cambio) puede ser consecuencia o causa, pero la inflación se define en función de los precios internos."
    },
    {
        question: "Si hoy llenar el depósito de gasolina cuesta 40 euros y dentro de un año ese mismo llenado cuesta más de 40 euros, ¿qué ha ocurrido con el valor del dinero?",
        options: [
            "Ha habido inflación, el dinero ha perdido poder adquisitivo",
            "Ha habido deflación, el nivel general de precios ha bajado",
            "El salario real ha aumentado más que los precios",
            "El valor de la moneda ha subido, por eso se necesitan más euros"
        ],
        answer: 0,
        explanation: "Si con una cantidad fija de dinero (40 euros) después de un tiempo ya no podemos comprar lo mismo que antes (menos litros de gasolina, por ejemplo), significa que los precios han subido y **el dinero vale menos en términos de bienes**. Eso es la inflación: una reducción del poder adquisitivo de cada euro. Lo opuesto (deflación) sería que con el tiempo el dinero comprara más cosas por caída general de precios."
    },
    {
        question: "¿Cuál de estos países vivió una hiperinflación histórica que sirve como ejemplo de los efectos devastadores de la inflación descontrolada?",
        options: [
            "Alemania en la década de 1920 (República de Weimar)",
            "Estados Unidos en la década de 1930",
            "Japón en la década de 1990",
            "España en la década de 2010"
        ],
        answer: 0,
        explanation: "La Alemania de los años 1920 experimentó una famosa hiperinflación: tras la Primera Guerra Mundial, la emisión masiva de dinero para hacer frente a obligaciones (como las reparaciones de guerra) llevó a aumentos de precios descomunales. El marco alemán se devaluó tanto que los precios podían duplicarse en cuestión de días, arruinando ahorros y salarios. Este episodio es un ejemplo extremo de cómo la inflación descontrolada puede colapsar una economía y el sistema social."
    },
    {
        question: "¿Cómo puede afectar la inflación a la economía en el corto y en el largo plazo?",
        options: [
            "En el corto plazo erosiona el poder de compra de las personas; en el largo plazo puede generar incertidumbre, menor inversión y menor crecimiento económico",
            "En el corto plazo mejora los ingresos empresariales; en el largo plazo no tiene efectos negativos",
            "No tiene efectos en el corto plazo, solo en el largo plazo si es muy alta",
            "Beneficia a todos los agentes económicos al principio, aunque luego se estabiliza"
        ],
        answer: 0,
        explanation: "La inflación tiene **efectos negativos a distintos plazos**. En el corto plazo, si los precios suben más rápido que los salarios, las familias pueden comprar menos con sus ingresos (pierden poder adquisitivo). En el largo plazo, una inflación alta y persistente distorsiona la economía: introduce incertidumbre que desalienta la inversión productiva y el ahorro, perjudica el crecimiento sostenido y puede incrementar la desigualdad. Además, los agentes dedican esfuerzos a protegerse de la inflación (por ejemplo, ajustando precios o buscando refugios de valor) en lugar de actividades más productivas."
    },
    {
        question: "¿Por qué no es sencillo saber a simple vista cuánto han subido en promedio los precios en un país?",
        options: [
            "Porque mientras algunos precios suben, otros pueden bajar, y se necesita un índice que combine todos para obtener el nivel general",
            "Porque los gobiernos manipulan los datos de precios",
            "Porque los precios cambian diariamente y es imposible seguir tantos productos",
            "Porque la inflación es subjetiva y cada persona la percibe distinto"
        ],
        answer: 0,
        explanation: "El nivel general de precios debe resumir el comportamiento de miles de precios distintos. En una economía, algunos bienes pueden encarecerse mientras otros se abaratan. Por eso, para medir la inflación se utilizan índices de precios (como el IPC), que combinan la información de diversos productos representativos. Sin una medida estadística, es difícil apreciar la inflación general solo observando casos aislados."
    },
    {
        question: "¿Qué condiciones deben darse para hablar de inflación y no solo de variaciones puntuales de algunos precios?",
        options: [
            "Que el aumento de precios sea amplio (afectando a la mayoría de bienes y servicios) y sostenido durante un período significativo",
            "Que los precios de la energía suban mucho en un solo mes",
            "Que los salarios suban al mismo ritmo que los precios",
            "Que la bolsa de valores caiga mientras los precios suben"
        ],
        answer: 0,
        explanation: "Para considerar que existe un fenómeno de inflación, debe tratarse de **un incremento generalizado** de los precios (no solo unos pocos rubros aislados) y que persista en el tiempo (no una subida puntual de corta duración). Por ejemplo, un shock en el precio del petróleo de un mes puede subir la gasolina transitoriamente, pero si no se extiende al resto de precios ni continúa en el tiempo, no se considera inflación generalizada."
    },
    {
        question: "¿Qué índices se utilizan habitualmente en España para medir la inflación?",
        options: [
            "El IPC (Índice de Precios de Consumo) y el deflactor del PIB",
            "El índice bursátil IBEX 35",
            "La tasa de paro y el salario mínimo",
            "El índice de precios industriales únicamente"
        ],
        answer: 0,
        explanation: "España, como muchos países, utiliza principalmente dos indicadores: el Índice de Precios de Consumo (**IPC**), que refleja la evolución del costo de una canasta de bienes y servicios típica de las familias; y el **deflactor del PIB**, que mide la variación de precios de todo el conjunto de bienes y servicios incluidos en el PIB. El IPC es más concreto al consumo cotidiano; el deflactor es más amplio. Otros índices (como el de precios industriales) existen, pero el IPC es la referencia habitual para inflación."
    },
    {
        question: "¿Qué informa el deflactor del PIB?",
        options: [
            "En qué medida el aumento del PIB se debe a subidas de precios y no a un mayor volumen de producción",
            "La variación de los precios solo de los bienes de consumo importados",
            "La inflación percibida por los consumidores en sus compras habituales",
            "La evolución de la productividad por trabajador"
        ],
        answer: 0,
        explanation: "El deflactor del PIB es un índice que relaciona el PIB nominal con el PIB real. Indica la variación general de precios de la economía (no solo de los bienes de consumo, sino de todos los bienes finales producidos) entre el año base y el año actual. Si el PIB nominal crece más que el real, el deflactor recoge esa diferencia como inflación. En resumen, muestra qué parte del crecimiento del PIB nominal es por precios más altos en lugar de mayor producción."
    },
    {
        question: "¿Qué caracteriza al Índice de Precios de Consumo (IPC)?",
        options: [
            "Mide el costo de una cesta representativa de bienes y servicios de consumo para una familia promedio",
            "Incluye los precios de todos los bienes de capital y bienes intermedios de la economía",
            "Solo se calcula cada diez años",
            "Es igual al deflactor del PIB pero con distinto nombre"
        ],
        answer: 0,
        explanation: "El IPC es un índice que refleja la evolución de los precios de un conjunto de bienes y servicios típicos en el consumo de los hogares. Esta \"cesta de la compra\" representativa se actualiza periódicamente y se recopilan precios mes a mes para calcular cuánto varía su costo. No incluye bienes de inversión ni insumos intermedios de las empresas, enfocándose en el consumo final. Se calcula mensualmente (no cada década). El IPC y el deflactor del PIB suelen mostrar tendencias similares, pero no son idénticos: cubren conjuntos de bienes distintos."
    },
    {
        question: "¿Qué es la inflación subyacente?",
        options: [
            "La tasa de inflación que excluye elementos volátiles como alimentos y energía, para ver la tendencia de fondo",
            "La inflación que perciben los consumidores en su vida diaria",
            "La inflación objetivo fijada por el banco central",
            "La inflación de un sector específico de la economía"
        ],
        answer: 0,
        explanation: "La inflación subyacente es un indicador que **excluye del cálculo aquellos precios más volátiles**, típicamente alimentos frescos y energía, que pueden fluctuar por factores estacionales o externos (clima, precios internacionales del petróleo, etc.). Al eliminar estos componentes, la inflación subyacente muestra una tendencia más estable y estructural del comportamiento de los precios, útil para detectar presiones inflacionarias de fondo."
    },
    {
        question: "¿Qué es la deflación y por qué puede ser perjudicial?",
        options: [
            "La deflación es una caída general y prolongada de los precios; puede ser dañina porque desalienta el consumo e inversión, aumenta el peso real de las deudas y suele acompañarse de recesión",
            "La deflación es simplemente lo contrario de la inflación y no tiene mayores consecuencias",
            "Es una bajada de precios concentrada solo en alimentos, beneficiosa para todos los consumidores",
            "Es un descenso de los precios que siempre se traduce en más empleo"
        ],
        answer: 0,
        explanation: "Deflación significa que los precios, en promedio, bajan de forma sostenida (lo opuesto a inflación). Aunque pueda parecer bueno que los bienes sean más baratos, en la práctica una deflación prolongada puede **paralizar la economía**: los consumidores podrían posponer compras esperando precios aún más bajos, las empresas ven reducirse sus ingresos y pueden recortar producción y empleos, y las deudas se vuelven más costosas en términos reales. Todo ello tiende a agravar la caída de la actividad económica."
    },
    {
        question: "Según la explicación monetarista, ¿cuál es la principal causa de la inflación?",
        options: [
            "Un crecimiento demasiado rápido de la cantidad de dinero en circulación, por encima del crecimiento de la producción",
            "Un incremento general de la productividad en la economía",
            "Un control estricto del gasto público",
            "Un exceso de oferta de bienes y servicios"
        ],
        answer: 0,
        explanation: "La visión monetarista, resumida en la frase \"la inflación es siempre y en todo lugar un fenómeno monetario\" (Milton Friedman), sostiene que **si la cantidad de dinero crece más rápido que la producción**, habrá más dinero persiguiendo la misma cantidad de bienes, empujando los precios al alza. En otras palabras, la inflación ocurre porque la oferta monetaria se expande en exceso. Por eso, los monetaristas abogan por controlar la emisión de dinero para mantener la estabilidad de precios."
    },
    {
        question: "¿Cuál de las siguientes situaciones podría provocar inflación de demanda?",
        options: [
            "Que la demanda agregada (consumo + inversión + gasto público + exportaciones) crezca por encima de la capacidad productiva de la economía",
            "Que bajen los impuestos y los precios de coste para las empresas",
            "Que un avance tecnológico reduzca los costos de producción",
            "Que disminuya la cantidad de dinero en circulación"
        ],
        answer: 0,
        explanation: "La inflación de demanda ocurre cuando **el gasto total en la economía excede la oferta disponible de bienes y servicios**, empujando los precios al alza. Esto puede suceder, por ejemplo, en una expansión económica donde consumo e inversión suban mucho, o cuando el Estado incrementa fuertemente el gasto, o por un boom de exportaciones. Las otras opciones (reducción de costos o de dinero en circulación) tenderían más bien a frenar la inflación."
    },
    {
        question: "¿Cuál de los siguientes es un factor que puede generar inflación de costes?",
        options: [
            "Un fuerte aumento en el precio de las materias primas fundamentales (por ejemplo, el petróleo)",
            "Un descenso general de los salarios en varios sectores",
            "Mejoras tecnológicas que incrementan la productividad",
            "Un superávit presupuestario del gobierno"
        ],
        answer: 0,
        explanation: "La inflación de costes se da cuando los precios suben debido al encarecimiento de los insumos o costes de producción. Un caso típico es un shock petrolero: si la energía o materias primas se vuelven mucho más caras, las empresas trasladan esos mayores costos a los precios finales. De igual forma, aumentos salariales generalizados no acompañados de mayor productividad elevan costos y pueden causar inflación. Las otras situaciones tienden a reducir costos o enfriar la demanda, no a elevar precios."
    },
    {
        question: "¿Quiénes suelen salir perjudicados con la inflación, especialmente si es imprevista?",
        options: [
            "Las personas con ingresos fijos (ej. pensionistas) y los ahorradores o prestamistas",
            "Los deudores con préstamos a tipo fijo",
            "El Estado, si tiene deudas emitidas en su propia moneda",
            "Los empresarios, ya que no pueden subir los precios de sus productos"
        ],
        answer: 0,
        explanation: "La inflación, especialmente si no se esperaba, **erosiona a quienes dependen de rentas fijas** (como jubilaciones, alquileres congelados, salarios no indexados), pues sus ingresos no suben al ritmo de los precios. También perjudica a los ahorradores y prestamistas: el dinero que ahorraron o prestaron pierde valor real, de modo que al recuperarlo pueden comprar menos bienes. En cambio, los deudores (quienes pidieron préstamos) resultan beneficiados, porque devuelven dinero que vale menos que cuando lo recibieron."
    },
    {
        question: "¿A quién podría beneficiar una inflación inesperadamente alta?",
        options: [
            "A quienes tienen deudas a tipo fijo, ya que devolverán en términos reales menos de lo que pidieron prestado",
            "A los trabajadores con salario fijo, que ven aumentado su poder adquisitivo",
            "A los ahorradores conservadores que guardan dinero en efectivo",
            "A nadie, perjudica por igual a todos los agentes"
        ],
        answer: 0,
        explanation: "Cuando la inflación supera lo previsto, **los deudores con préstamos a tipo de interés fijo salen ganando**: el dinero que devuelven vale menos que el que recibieron, reduciéndose el valor real de su deuda. Por el contrario, los acreedores (quienes prestaron) reciben dinero devaluado. Los salarios fijos pierden poder de compra si no se ajustan, y tener ahorros en efectivo significa verlos perder valor. La inflación inesperada redistribuye riqueza de acreedores a deudores."
    },
    {
        question: "¿Qué pueden hacer los agentes económicos si anticipan que habrá inflación (inflación esperada)?",
        options: [
            "Pueden tomar medidas de ajuste: por ejemplo, indexar contratos (salarios, alquileres) a la inflación esperada o negociar tasas de interés más altas para préstamos",
            "Nada, sus efectos serán iguales a los de una inflación sorpresiva",
            "Dejar de realizar transacciones monetarias completamente",
            "Pagar menos impuestos ese año"
        ],
        answer: 0,
        explanation: "Si la inflación es anticipada, muchos contratos y comportamientos pueden ajustarse para mitigar su impacto. Por ejemplo, los trabajadores pueden negociar aumentos salariales acordes a la inflación esperada, los prestamistas exigirán intereses más altos para compensarla, y se pueden incluir cláusulas de indexación en alquileres o pensiones. Estas acciones no evitan la inflación, pero reparten mejor sus efectos, evitando en parte la pérdida de poder adquisitivo."
    },
    {
        question: "¿Qué política monetaria podría aplicar un banco central para frenar una alta inflación?",
        options: [
            "Elevar las tasas de interés, encareciendo el crédito y enfriando la demanda",
            "Bajar los tipos de interés para estimular la producción",
            "Aumentar la cantidad de dinero en circulación",
            "Comprar masivamente deuda del gobierno para financiar gasto público"
        ],
        answer: 0,
        explanation: "La herramienta clásica para combatir una inflación alta es una **política monetaria restrictiva**. En la práctica, esto suele implicar subir los tipos de interés: los préstamos se encarecen, lo que reduce el consumo y la inversión financiada con crédito, enfriando la economía y aliviando la presión sobre los precios. Las otras medidas enumeradas serían expansivas (bajar tipos, imprimir dinero, financiar gasto público) y agravarían la inflación en lugar de reducirla."
    },
    {
        question: "¿En qué consiste una política de control de precios por parte del gobierno?",
        options: [
            "En fijar un precio máximo legal para ciertos productos básicos, impidiendo que el mercado los encarezca por encima de ese límite",
            "En eliminar el IVA y otros impuestos para abaratar los precios",
            "En subsidiar todos los productos para que sus precios no suban",
            "En congelar los salarios de los empleados públicos"
        ],
        answer: 0,
        explanation: "Un **control de precios** significa que la autoridad establece un tope (precio máximo) para determinados bienes o servicios. Por ejemplo, podría decidir que el pan o la gasolina no superen cierto precio. Aunque a corto plazo frena esa subida de precios, estas medidas pueden provocar desabastecimiento o mercados negros, ya que si el precio máximo es muy bajo, los oferentes pueden tener menos incentivo para vender. No se trata de eliminar impuestos (eso es otra política) ni de subsidiar en sí (aunque a veces se combinan controles con subsidios)."
    },
    {
        question: "¿Qué implica una política de control de salarios para combatir la inflación?",
        options: [
            "Limitar o pactar el aumento de los salarios de los trabajadores para evitar que suban por encima de cierto porcentaje",
            "Reducir todos los salarios nominales un 10% por ley",
            "Congelar los precios de todos los bienes y servicios",
            "Vincular los salarios solo a la productividad individual"
        ],
        answer: 0,
        explanation: "El control (o moderación pactada) de salarios es una medida que busca contener la llamada \"espiral precios-salarios\". Consiste en establecer topes a las subidas salariales (por ejemplo, a través de acuerdos entre gobierno, empresas y sindicatos) para que los incrementos de sueldos no alimenten nuevos aumentos de costes y precios. No se trata de recortar salarios existentes, sino de frenar su crecimiento. Esto suele formar parte de políticas de ingresos para estabilizar la economía."
    },
    {
        question: "En el mercado de trabajo, ¿quiénes son la oferta y la demanda?",
        options: [
            "Las familias ofrecen trabajo y las empresas demandan trabajadores",
            "Las empresas ofrecen puestos laborales y los trabajadores demandan salarios",
            "El gobierno oferta la mayoría de los empleos y los ciudadanos los ocupan",
            "Los sindicatos ofrecen empleo y las universidades demandan egresados"
        ],
        answer: 0,
        explanation: "En el mercado laboral, **los trabajadores (personas) constituyen la oferta de trabajo** porque ofrecen su tiempo y habilidades, mientras que **las empresas representan la demanda de trabajo**, pues requieren contratar personal. Así, a diferencia del mercado de bienes, en el de trabajo los roles se invierten: las familias son oferentes (de mano de obra) y las empresas demandantes."
    },
    {
        question: "¿Cuándo se considera que una persona está desempleada según la definición estándar?",
        options: [
            "Cuando no tiene empleo pero busca trabajo activamente y está disponible para trabajar",
            "Cuando no tiene empleo y ha dejado de buscar porque se desanimó",
            "Cuando trabaja menos horas de las que quisiera",
            "Cuando está jubilada o estudiando y no tiene trabajo"
        ],
        answer: 0,
        explanation: "La definición típica de desempleado (utilizada en la Encuesta de Población Activa y otros indicadores) es alguien que **no tiene trabajo, está disponible para trabajar y ha buscado empleo de forma activa en un periodo reciente**. Quienes no buscan activamente (desanimados, estudiantes, retirados) se consideran fuera de la población activa, no cuentan como desempleados."
    },
    {
        question: "¿Cómo se calcula la tasa de desempleo?",
        options: [
            "Dividiendo el número de desempleados entre la población activa (empleados + desempleados), y multiplicando por 100",
            "Dividiendo el número de desempleados entre la población total del país, y multiplicando por 100",
            "Dividiendo la población activa entre la población total, y multiplicando por 100",
            "Dividiendo el número de parados registrados entre el número de empresas"
        ],
        answer: 0,
        explanation: "La tasa de desempleo se obtiene como: (Desempleados / Población Activa) × 100. La población activa incluye a todas las personas que están trabajando (ocupadas) o buscando trabajo activamente (desocupadas). Por ejemplo, si de una población activa de 1000 personas, 100 están sin empleo buscando trabajo, la tasa de paro es 10%. Usar la población total en el denominador daría una cifra diferente (menor, al incluir a inactivos)."
    },
    {
        question: "¿Cuál es el principal instrumento para medir el desempleo en España?",
        options: [
            "La Encuesta de Población Activa (EPA), que se realiza trimestralmente mediante sondeos a hogares",
            "El número de parados registrados en las oficinas del Servicio Público de Empleo (SEPE)",
            "El censo de población que se levanta cada década",
            "El conteo de solicitantes de subsidio de desempleo"
        ],
        answer: 0,
        explanation: "La EPA es la fuente estadística oficial más amplia y confiable para medir el empleo y desempleo en España. Es una encuesta a hogares que se hace cada trimestre, siguiendo estándares internacionales, e investiga si las personas trabajan, cuántas horas, si buscan empleo, etc. El paro registrado (SEPE) sólo cuenta a quienes se inscriben en las oficinas de empleo, por lo que suele infravalorar el total de desempleados. La EPA, al basarse en encuestas, incluye también a desempleados que no estén apuntados en el paro registrado."
    },
    {
        question: "¿Qué diferencia hay entre las cifras de paro que da la EPA y las del paro registrado en oficinas de empleo?",
        options: [
            "La EPA incluye a todas las personas que buscan empleo activamente, mientras el paro registrado solo cuenta a quienes se inscriben formalmente como desempleados",
            "No hay diferencia, ambas fuentes arrojan siempre la misma cifra de desempleo",
            "El paro registrado suele ser mayor porque incluye a quienes no buscan trabajo",
            "La EPA solo considera a los desempleados de larga duración y el registro a los de corta duración"
        ],
        answer: 0,
        explanation: "El **paro registrado** se refiere a las personas apuntadas en las oficinas públicas de empleo como demandantes de trabajo. Sin embargo, no todas las personas sin trabajo se inscriben (algunos no lo hacen porque no perciben prestación o no confían en ese servicio). La EPA, al basarse en encuestas, captura a todos los que están en paro según la definición (buscando activamente), estén o no inscritos. Por eso, normalmente la EPA arroja un número de parados mayor que el registro, e incluye también a colectivos que no se registran."
    },
    {
        question: "¿Por qué la tasa de desempleo puede no reflejar completamente la \"salud\" del mercado laboral?",
        options: [
            "Porque no cuenta a los desanimados que han dejado de buscar trabajo, ni refleja si los empleos son precarios o de tiempo parcial no deseado",
            "Porque incluye a personas que realmente no quieren trabajar",
            "Porque considera a los autónomos como desempleados",
            "Porque está manipulada directamente por las empresas"
        ],
        answer: 0,
        explanation: "La tasa de paro tiene limitaciones: por ejemplo, si muchas personas se desaniman y dejan de buscar empleo (dejando de ser población activa), la tasa de desempleo baja aunque la situación no haya mejorado. Además, la tasa no revela la calidad del empleo: puede haber baja desocupación pero muchos trabajadores en empleos precarios, a tiempo parcial involuntario o con salarios muy bajos. Por tanto, conviene complementarla con otros datos (tasa de actividad, subempleo, calidad del empleo) para evaluar bien el mercado laboral."
    },
    {
        question: "¿Qué es el desempleo (paro) friccional?",
        options: [
            "Desempleo de corta duración que corresponde a transiciones laborales (personas entre un trabajo y otro o recién incorporadas que tardan un tiempo en encontrar empleo)",
            "Desempleo causado por crisis económicas prolongadas",
            "Desempleo provocado por la obsolescencia de habilidades y cambios estructurales profundos",
            "Desempleo debido a la falta voluntaria de ganas de trabajar"
        ],
        answer: 0,
        explanation: "El paro friccional es el que se genera naturalmente por el tiempo que toma buscar un nuevo empleo. Incluye a personas que han dejado un trabajo (o se graduaron, etc.) y están en proceso de encontrar otro. Siempre existe algo de desempleo friccional incluso en economías saludables, ya que siempre hay gente cambiando de empleo o entrando al mercado laboral. Suele ser de corta duración y no es considerado problemático."
    },
    {
        question: "¿Qué se entiende por desempleo voluntario?",
        options: [
            "Personas que, pudiendo trabajar, deciden no hacerlo ni buscar empleo por las razones que sean",
            "Personas que hacen voluntariado en lugar de empleo remunerado",
            "Personas desempleadas de larga duración",
            "Personas que rechazan trabajos solo porque son temporales"
        ],
        answer: 0,
        explanation: "El paro voluntario se refiere a individuos que **no están trabajando porque así lo han decidido**, aunque hay puestos disponibles que podrían ocupar. Esto puede ocurrir por motivos personales (p. ej., alguien prefiere dedicarse a otra actividad, o las condiciones salariales ofrecidas no le resultan suficientes, etc.). No confundir con voluntariado social, que es distinto. Estas personas están fuera de la población activa si no buscan empleo."
    },
    {
        question: "¿Qué es el paro encubierto?",
        options: [
            "Situaciones en las que alguien tiene empleo pero su productividad es tan baja o el puesto está tan redundante que, en la práctica, esa persona no sería necesaria si la organización fuese más eficiente",
            "Personas desempleadas que no aparecen en las estadísticas oficiales",
            "Empleo informal o \"en negro\" no declarado",
            "Desempleo que se oculta por razones políticas"
        ],
        answer: 0,
        explanation: "Se habla de desempleo encubierto cuando, aunque formalmente la persona está empleada, su trabajo aporta muy poco o nada. Es frecuente mencionarlo en economías poco eficientes o con exceso de burocracia, donde hay **puestos de trabajo redundantes**. Si esas empresas o administraciones se modernizaran, esos trabajadores sobrarían (quedarían desempleados). En ese sentido, su empleo actual \"encubre\" un auténtico desempleo."
    },
    {
        question: "¿Por qué se produce el desempleo estacional?",
        options: [
            "Porque ciertos sectores (como la agricultura o el turismo) solo demandan gran cantidad de mano de obra en determinadas épocas o temporadas del año",
            "Porque las estaciones climáticas afectan el ánimo de los trabajadores",
            "Porque las empresas despiden empleados cada fin de año para reducir costos",
            "Porque los gobiernos restringen contrataciones según la temporada"
        ],
        answer: 0,
        explanation: "El paro estacional ocurre en actividades cuya necesidad de trabajadores fluctúa con la época del año. Por ejemplo, la agricultura demanda más braceros en época de cosecha y menos el resto del año; en turismo se contrata más durante vacaciones de verano o navidad. Fuera de esas temporadas, quienes trabajaban temporalmente pueden quedar desempleados hasta la siguiente campaña. Es un tipo de desempleo recurrente y predecible."
    },
    {
        question: "¿Cuál de los siguientes es un factor que puede causar desempleo estructural?",
        options: [
            "Cambios profundos en la economía que vuelven obsoletas ciertas industrias o profesiones, dejando trabajadores con habilidades no adaptadas a la nueva demanda",
            "La rotación normal de personas entre empleos",
            "Recesiones breves o contracciones de la demanda en el ciclo económico",
            "Decisiones individuales de no trabajar por un tiempo"
        ],
        answer: 0,
        explanation: "El paro estructural es aquel que resulta de desajustes entre las habilidades de la fuerza laboral y las necesidades del mercado, a menudo debido a **cambios económicos de largo plazo**: por ejemplo, la automatización elimina ciertos trabajos, o industrias enteras declinan (minería, manufactura tradicional) mientras surgen otras. Los trabajadores desplazados pueden tardar mucho en recolocarse si no adquieren nuevas habilidades o se trasladan donde haya empleo. Este desempleo persiste incluso en épocas de bonanza si no se resuelven esos desajustes."
    },
    {
        question: "¿Qué suele causar el desempleo cíclico (o coyuntural)?",
        options: [
            "Una caída de la actividad económica general (recesión) que reduce la demanda de trabajo durante el bajón del ciclo económico",
            "La entrada masiva de nuevos trabajadores jóvenes cada año",
            "Las fricciones normales de búsqueda de empleo",
            "La incapacidad de ciertos trabajadores para desempeñar cualquier trabajo"
        ],
        answer: 0,
        explanation: "El paro cíclico es el asociado a los **altibajos de la economía**. En una recesión o crisis, muchas empresas producen menos y pueden despedir parte de su plantilla, aumentando el desempleo. Este tipo de paro disminuye cuando la economía se recupera (fase expansiva del ciclo). Es distinto del estructural: el cíclico es temporal y debido a la falta de demanda en general, no a falta de encaje entre habilidades y puestos."
    },
    {
        question: "¿Qué es la tasa de actividad en el mercado laboral?",
        options: [
            "El porcentaje de la población en edad de trabajar que participa en el mercado laboral (ya sea trabajando o buscando empleo)",
            "El porcentaje de la población total que está empleada",
            "La proporción de la población activa que está desempleada",
            "El ritmo al que crece la fuerza laboral cada año"
        ],
        answer: 0,
        explanation: "La tasa de actividad mide la **participación de la población en edad laboral** en el mercado de trabajo. Se calcula como (población activa / población en edad de trabajar) × 100. La población activa son los ocupados más los parados. Por ejemplo, si de 100 personas en edad de trabajar, 60 están ocupadas o buscando empleo, la tasa de actividad es 60%. Este indicador refleja qué parte de la gente en edad de trabajar está disponible para la producción (por ejemplo, puede aumentar si más mujeres ingresan al mercado laboral)."
    },
    {
        question: "Según la teoría económica, ¿a qué tiende a ser igual el salario de equilibrio en un mercado de trabajo competitivo?",
        options: [
            "Al valor de la productividad marginal del trabajo, es decir, al aporte del trabajador adicional a los ingresos de la empresa",
            "Siempre es inferior al valor que genera el trabajador, para que la empresa obtenga ganancia",
            "No guarda relación con la productividad, se determina solo por negociación",
            "Es independiente de la oferta y demanda de trabajo"
        ],
        answer: 0,
        explanation: "En un mercado de trabajo competitivo, las empresas contratarán trabajadores hasta el punto en que el salario se iguala con la productividad marginal del trabajador (el valor de lo que produce el último empleado contratado). Si un trabajador genera más valor que el salario que se le paga, es rentable contratarlo (y la competencia entre empresas podría subir salarios). Si genera menos, la empresa no querrá mantener ese empleo. Por ello, en equilibrio, salario = productividad marginal. Esto en la práctica puede estar influido también por instituciones y negociaciones, pero la productividad es un determinante fundamental del nivel salarial."
    },
    {
        question: "¿Qué pasa si un trabajador tiene un salario por encima de su productividad marginal?",
        options: [
            "Que la empresa pierde dinero con ese empleo y a largo plazo tenderá a eliminarlo o no renovarlo",
            "Que la empresa gana más al tener al trabajador mejor pagado",
            "Que el trabajador automáticamente se vuelve más productivo para justificar el salario",
            "Nada, puede mantenerse indefinidamente sin afectar a la empresa"
        ],
        answer: 0,
        explanation: "Si una empresa paga a un trabajador más de lo que éste aporta en valor, esa diferencia reduce sus beneficios. En una situación así, la empresa buscará corregirlo: podría intentar reducir el salario (algo a menudo limitado por contratos o por la reacción del trabajador) o, más comúnmente, llegado el caso, prescindir del empleado, especialmente si hay presión competitiva. Por eso los salarios tienden a ajustarse a la productividad: pagar mucho más no es sostenible para el empleador."
    },
    {
        question: "¿Y si el salario está por debajo de la productividad marginal del trabajador?",
        options: [
            "Que contratar a ese trabajador es rentable para la empresa, por lo que habrá incentivos a aumentar la contratación hasta que el salario suba hacia la productividad marginal",
            "Que el trabajador renunciará inmediatamente al sentirse infravalorado",
            "Que el desempleo aumentará indefinidamente",
            "Que la empresa está perdiendo dinero con ese trabajador"
        ],
        answer: 0,
        explanation: "Si un trabajador genera más valor de lo que cuesta contratarlo (su salario), la empresa obtiene un beneficio extra por emplearlo. Esto crea incentivos para contratar más trabajadores similares, lo que aumenta la demanda de trabajo en ese sector. Con mayor demanda, los salarios tienden a subir. En equilibrio, este proceso continúa hasta que el salario se equipara a la productividad marginal, eliminando la \"ganancia fácil\" de contratar mano de obra barata altamente productiva."
    },
    {
        question: "¿Qué medida ayudaría a reducir el desempleo estructural?",
        options: [
            "Programas de formación y recualificación profesional que mejoren la adaptación de los trabajadores a los nuevos puestos demandados",
            "Aumentar el gasto de los consumidores mediante cheques regalo",
            "Una rebaja puntual de los tipos de interés",
            "Esperar a que pase el tiempo, ya que el mercado laboral se corrige solo siempre"
        ],
        answer: 0,
        explanation: "El desempleo estructural se combate atacando la desadaptación entre oferta y demanda de trabajo. Esto implica **mejorar la formación**, facilitar la movilidad geográfica y sectorial, fomentar la creación de empleo en sectores emergentes y, en general, dotar a los trabajadores de habilidades que se requieren en el mercado actual. Medidas macroeconómicas de estímulo (como bajar tipos de interés) pueden reducir paro cíclico, pero no solucionan la falta de cualificación o los desajustes de fondo."
    },
    {
        question: "¿Cómo podría un gobierno atenuar el desempleo cíclico durante una recesión?",
        options: [
            "Aplicando políticas de estímulo (como aumentar el gasto público o bajar impuestos, o que el banco central baje los tipos de interés) para reactivar la demanda y la producción",
            "Recortando el gasto y aumentando impuestos para mantener el presupuesto equilibrado",
            "Interviniendo directamente en fijar todos los precios y salarios",
            "No haciendo nada, ya que la economía se autorregula rápidamente"
        ],
        answer: 0,
        explanation: "El paro cíclico surge por falta de demanda en una recesión. Las medidas clásicas para contrarrestarlo son las políticas fiscales y monetarias expansivas: el gobierno puede **aumentar el gasto público o reducir impuestos** para estimular el consumo y la inversión, mientras que el banco central puede **bajar los tipos de interés** para facilitar el crédito. Ambas acciones buscan reactivar la economía y, con ello, la contratación de trabajadores. Estas políticas deben ser temporales y calibradas para no generar inflación a futuro, pero son las herramientas básicas contra el desempleo asociado al ciclo."
    },
    {
        question: "¿Qué efecto puede tener el progreso tecnológico sobre el empleo?",
        options: [
            "Puede eliminar ciertos empleos (haciendo algunas habilidades obsoletas) pero también crear otros nuevos; a corto plazo puede generar desempleo estructural si la fuerza laboral no se adapta",
            "Siempre destruye puestos de trabajo netos y aumenta el paro permanentemente",
            "No afecta al volumen de empleo, solo a la forma de trabajar",
            "Únicamente reduce empleos poco cualificados y no genera ninguno nuevo"
        ],
        answer: 0,
        explanation: "Los avances tecnológicos suelen **cambiar la composición del empleo**: automatizan tareas y aumentan la productividad, con lo que algunos trabajos desaparecen. Sin embargo, al abaratar costos y crear nuevas posibilidades, también surgen industrias y puestos nuevos (por ejemplo, la informática creó empleos que antes no existían). El desafío está en la transición: a corto y mediano plazo, los trabajadores desplazados pueden enfrentar paro estructural si no se recalifican o relocalizan. Históricamente, el empleo total a largo plazo no se ve reducido por la tecnología, pero sí hay ganadores y perdedores en el proceso."
    },
    {
        question: "¿Implica \"pleno empleo\" una tasa de paro del 0%?",
        options: [
            "No, pleno empleo se considera cuando el desempleo está solo en su nivel \"natural\" (friccional y estructural mínimo), incluso si no es exactamente cero",
            "Sí, pleno empleo significa erradicar totalmente el desempleo",
            "Sí, pero solo si la inflación también es cero simultáneamente",
            "Depende del país, en algunos pleno empleo es 5% y en otros 0%"
        ],
        answer: 0,
        explanation: "El pleno empleo no significa ausencia total de desempleo, sino que el desempleo existente es solo el \"normal\" o friccional (gente cambiando de trabajo, etc.) y quizás algo de estructural inevitable, pero no hay desempleo cíclico por falta de demanda. En otras palabras, la economía está en su nivel de empleo sostenible de largo plazo (a veces llamado tasa natural de desempleo). Esta tasa puede ser, por ejemplo, alrededor de un 3-6% dependiendo del país y momento. Intentar bajarla a 0% suele provocar inflación sin reducir más el paro."
    }
];


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
    nextQuestion();
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
