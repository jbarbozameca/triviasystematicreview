/* ============================================================
   TRIVIA DE REVISIONES SISTEMÁTICAS Y META-ANÁLISIS
   Clases del Dr. Joshuan J. Barboza
   Banco de preguntas + módulo de elegibilidad (cribado TIAB)
   ============================================================
   Modelo de dato de cada pregunta:
   {
     sec: "<id de sección>",
     lvl: "basico" | "intermedio" | "avanzado",
     q:   "enunciado",
     opts:["A","B","C","D"],
     correct: <índice de la opción correcta>,
     fb:  ["fundamento opción A", ...],   // uno por opción
     why: "explicación general (opcional)",
     src: "estudio/fuente de referencia (opcional)"
   }
   ============================================================ */

const SECTIONS = [
  { id: "pico",          name: "Pregunta de investigación y PICO",     icon: "❓" },
  { id: "elegibilidad",  name: "Criterios de elegibilidad",            icon: "✅" },
  { id: "busqueda",      name: "Búsqueda y estrategia",                icon: "🔎" },
  { id: "seleccion",     name: "Selección de estudios y PRISMA",       icon: "🗂️" },
  { id: "extraccion",    name: "Extracción de datos",                  icon: "📋" },
  { id: "sesgo",         name: "Riesgo de sesgo (RoB2, NOS, QUADAS…)", icon: "⚖️" },
  { id: "efecto",        name: "Medidas de efecto (RR, OR, MD, SMD)",  icon: "📐" },
  { id: "modelos",       name: "Modelos de meta-análisis",             icon: "🧮" },
  { id: "heterogeneidad",name: "Heterogeneidad (I², Q, τ²)",           icon: "🌡️" },
  { id: "publicacion",   name: "Sesgo de publicación (funnel, Egger)", icon: "🫙" },
  { id: "forest",        name: "Interpretación del forest plot",       icon: "🌲" },
  { id: "grade",         name: "GRADE y certeza de la evidencia",      icon: "🏅" },
  { id: "tipos",         name: "Tipos de revisiones",                  icon: "🧭" },
  { id: "casos",         name: "Casos basados en estudios reales",     icon: "📚" }
];

const QUESTIONS = [
/* ===================== PICO ===================== */
{
  sec:"pico", lvl:"basico",
  q:"En el acrónimo PICO para una pregunta de intervención, ¿qué representa la letra «C»?",
  opts:["Condición clínica","Comparador o control","Contexto del estudio","Cumplimiento (adherencia)"],
  correct:1,
  fb:[
    "La condición clínica suele incluirse en la «P» (población/problema), no en la «C».",
    "Correcto: «C» es el comparador o grupo control frente al cual se evalúa la intervención.",
    "El contexto puede aparecer como «S» (setting) en variantes como PICOS, pero no es la «C» clásica.",
    "La adherencia es un aspecto de la intervención o un desenlace, no la «C»."
  ],
  why:"PICO = Population/Problem, Intervention, Comparison, Outcome. El comparador define la pregunta tanto como la intervención."
},
{
  sec:"pico", lvl:"intermedio",
  q:"Para una revisión de RCTs de sacubitrilo/valsartán vs IECA o ARA-II sobre función renal en insuficiencia cardiaca, ¿cuál es el COMPARADOR (C) del PICO?",
  opts:["Sacubitrilo/valsartán","IECA o ARA-II","Duplicación de la creatinina sérica","Pacientes con insuficiencia cardiaca"],
  correct:1,
  fb:[
    "Esa es la intervención (I), no el comparador.",
    "Correcto: el comparador son los IECA o ARA-II.",
    "Eso es un desenlace (O), no el comparador.",
    "Esa es la población (P), no el comparador."
  ],
  why:"En el estudio S5, I = sacubitrilo/valsartán, C = IECA/ARA-II, O = duplicación de creatinina, eGFR, hiperkalemia.",
  src:"S5. Sacubitril/valsartán y función renal"
},
{
  sec:"pico", lvl:"intermedio",
  q:"Una revisión sistemática de exactitud diagnóstica suele estructurar su pregunta con un esquema tipo PIRT/PIRD. ¿Qué representa la «R»?",
  opts:["Riesgo basal","Estándar de referencia (reference standard)","Resultado (outcome)","Reproducibilidad"],
  correct:1,
  fb:[
    "El riesgo basal no es un componente del esquema PIRT/PIRD.",
    "Correcto: en estudios de exactitud diagnóstica la «R» es el estándar de referencia con el que se compara la prueba índice.",
    "El outcome en diagnóstico se expresa como sensibilidad/especificidad, no como la «R».",
    "La reproducibilidad es una propiedad de la prueba, no el componente «R»."
  ],
  why:"En diagnóstico: P = pacientes, I = prueba índice, R = estándar de referencia, T/D = target (diagnóstico objetivo)."
},
{
  sec:"pico", lvl:"basico",
  q:"¿Cuál es la principal función de formular una buena pregunta PICO antes de iniciar la revisión?",
  opts:["Aumentar el número de estudios incluidos","Definir y delimitar los criterios de elegibilidad y la estrategia de búsqueda","Garantizar significancia estadística","Evitar la evaluación del riesgo de sesgo"],
  correct:1,
  fb:[
    "El objetivo no es maximizar el número de estudios, sino responder con precisión la pregunta.",
    "Correcto: el PICO es la base de los criterios de elegibilidad y de la estrategia de búsqueda.",
    "El PICO no determina ni garantiza la significancia estadística de los resultados.",
    "El riesgo de sesgo se evalúa siempre, con independencia del PICO."
  ]
},
{
  sec:"pico", lvl:"avanzado",
  q:"En el estudio de detección del virus mpox según el sitio de muestra, el objetivo era estimar proporciones (p. ej., % de muestras positivas por sitio). ¿Qué variante del marco de pregunta es más apropiada?",
  opts:["PICO con comparador activo","PECO de exposición-desenlace","CoCoPop (Condición, Contexto, Población) para estudios de prevalencia/proporción","PICOTS con seguimiento temporal"],
  correct:2,
  fb:[
    "No hay un comparador activo: es una revisión de proporciones, no de efecto de una intervención.",
    "PECO se usa para asociación exposición-desenlace, no para estimar una proporción.",
    "Correcto: CoCoPop (Condición, Contexto, Población) es el marco recomendado por JBI para revisiones de prevalencia/proporción.",
    "PICOTS añade tiempo y escenario a una pregunta de intervención, no aplica a una proporción descriptiva."
  ],
  why:"Las revisiones de proporción/prevalencia (como S3, mpox) usan marcos tipo CoCoPop en lugar de PICO de intervención.",
  src:"S3. Detección de mpox"
},

/* ===================== ELEGIBILIDAD ===================== */
{
  sec:"elegibilidad", lvl:"basico",
  q:"Los criterios de elegibilidad de una revisión sistemática se derivan principalmente de:",
  opts:["Los resultados de los estudios encontrados","La pregunta PICO(S) definida a priori","El factor de impacto de las revistas","El número de revisores disponibles"],
  correct:1,
  fb:[
    "Definir la elegibilidad según los resultados introduce sesgo de selección; deben fijarse a priori.",
    "Correcto: los criterios se derivan del PICO(S) y se establecen antes de la búsqueda.",
    "El factor de impacto no debe ser un criterio de inclusión/exclusión.",
    "El número de revisores afecta la logística, no la definición de elegibilidad."
  ]
},
{
  sec:"elegibilidad", lvl:"intermedio",
  q:"En el meta-análisis de insomnio y riesgo de depresión (estudios de cohorte prospectivos), se excluyeron los estudios con diseño retrospectivo y aquellos donde no se excluyó la depresión basal. ¿Por qué excluir a participantes con depresión al inicio?",
  opts:["Para reducir el tamaño muestral","Para asegurar la temporalidad: el insomnio debe preceder a la depresión (incidencia, no prevalencia)","Porque la depresión basal mejora la homogeneidad estadística","Porque los estudios retrospectivos son más caros"],
  correct:1,
  fb:[
    "No se busca reducir el tamaño muestral; eso debilitaría el estudio.",
    "Correcto: excluir la depresión basal garantiza que se mide depresión incidente y se preserva la secuencia temporal exposición→desenlace.",
    "No es una cuestión de homogeneidad estadística sino de validez causal/temporalidad.",
    "El costo no es la razón; es un asunto de validez del diseño prospectivo."
  ],
  why:"En cohortes prospectivas la exposición debe preceder al desenlace; incluir casos prevalentes rompería esa lógica.",
  src:"EJEMPLO 1. Insomnio y depresión (cohorte)"
},
{
  sec:"elegibilidad", lvl:"intermedio",
  q:"¿Cuál de los siguientes es típicamente un criterio de exclusión (no de inclusión) en una revisión de RCTs?",
  opts:["Ensayo aleatorizado controlado","Población adulta con la condición de interés","Resumen de congreso sin reporte completo de datos","Comparación contra placebo"],
  correct:2,
  fb:[
    "El diseño RCT suele ser criterio de inclusión, no de exclusión.",
    "La población diana es un criterio de inclusión.",
    "Correcto: resúmenes de congreso, cartas o comentarios sin datos completos suelen excluirse.",
    "La comparación contra placebo suele ser parte de la inclusión (comparador)."
  ]
},
{
  sec:"elegibilidad", lvl:"avanzado",
  q:"Al definir elegibilidad, ¿cuál es la diferencia clave entre 'criterios de elegibilidad' y 'estrategia de búsqueda'?",
  opts:["Son sinónimos","La elegibilidad define QUÉ estudios califican; la búsqueda define CÓMO/DÓNDE localizarlos","La búsqueda se aplica solo después de la lectura a texto completo","La elegibilidad solo se aplica a meta-análisis"],
  correct:1,
  fb:[
    "No son sinónimos: cumplen funciones distintas.",
    "Correcto: la elegibilidad es el filtro conceptual (criterios); la búsqueda es el método operativo para recuperar candidatos.",
    "La búsqueda se ejecuta al inicio para recuperar registros, no solo tras el texto completo.",
    "La elegibilidad aplica a toda revisión sistemática, con o sin meta-análisis."
  ]
},
{
  sec:"elegibilidad", lvl:"basico",
  q:"El uso de filtros de idioma (p. ej., solo inglés) como criterio de elegibilidad puede introducir:",
  opts:["Sesgo de idioma","Mayor heterogeneidad clínica deseada","Sesgo de medición","Confusión residual"],
  correct:0,
  fb:[
    "Correcto: restringir por idioma puede generar sesgo de idioma (language bias).",
    "No incrementa la heterogeneidad deseada; restringe la evidencia disponible.",
    "El sesgo de medición se relaciona con cómo se miden las variables, no con el idioma de publicación.",
    "La confusión residual es un problema de los estudios primarios observacionales, no del filtro de idioma."
  ]
},

/* ===================== BÚSQUEDA ===================== */
{
  sec:"busqueda", lvl:"basico",
  q:"¿Cuántas bases de datos bibliográficas se recomienda buscar en una revisión sistemática rigurosa?",
  opts:["Una sola (PubMed)","Al menos dos o más bases complementarias (p. ej., PubMed, Embase, Cochrane, Scopus, Web of Science)","Exactamente diez","No importa la cantidad si se usa Google"],
  correct:1,
  fb:[
    "Buscar solo en PubMed deja fuera estudios indexados en otras bases; es insuficiente.",
    "Correcto: se recomienda combinar varias bases (p. ej., MEDLINE/PubMed, Embase, Cochrane CENTRAL, Scopus, Web of Science).",
    "No existe un número fijo de exactamente diez; depende del tema, pero deben ser múltiples bases.",
    "Google Scholar puede complementar, pero no sustituye a bases estructuradas con búsqueda reproducible."
  ],
  why:"Los estudios de la carpeta buscan en 3–6 bases (p. ej., S1 en PubMed, Embase y Cochrane; S5 en 5 bases)."
},
{
  sec:"busqueda", lvl:"intermedio",
  q:"Los términos MeSH (Medical Subject Headings) sirven para:",
  opts:["Restringir la búsqueda solo a títulos","Buscar mediante vocabulario controlado/indexado independientemente de las palabras exactas del autor","Eliminar duplicados automáticamente","Calcular el I² de heterogeneidad"],
  correct:1,
  fb:[
    "Los MeSH no se limitan al título; indexan el contenido temático del artículo.",
    "Correcto: los MeSH son vocabulario controlado que recupera artículos por concepto, complementando los términos en lenguaje libre.",
    "La eliminación de duplicados es una tarea posterior (gestores de referencias), no función del MeSH.",
    "El I² es una métrica estadística de heterogeneidad, no se relaciona con MeSH."
  ]
},
{
  sec:"busqueda", lvl:"intermedio",
  q:"En una estrategia de búsqueda, los operadores booleanos AND y OR se usan para:",
  opts:["AND amplía resultados; OR los restringe","AND combina conceptos distintos (restringe); OR reúne sinónimos (amplía)","Ambos amplían por igual","Solo sirven en Embase"],
  correct:1,
  fb:[
    "Es al revés: AND restringe (intersección) y OR amplía (unión).",
    "Correcto: AND interseca conceptos diferentes (reduce); OR une sinónimos del mismo concepto (aumenta sensibilidad).",
    "No: tienen efectos opuestos sobre el número de resultados.",
    "Los booleanos son universales, no exclusivos de Embase."
  ]
},
{
  sec:"busqueda", lvl:"avanzado",
  q:"La búsqueda manual en listas de referencias de los artículos incluidos ('snowballing' o búsqueda en bola de nieve) busca principalmente:",
  opts:["Inflar artificialmente el número de registros","Recuperar estudios relevantes no capturados por la búsqueda electrónica","Reemplazar la búsqueda en bases de datos","Reducir la sensibilidad de la búsqueda"],
  correct:1,
  fb:[
    "No se trata de inflar registros, sino de mejorar la exhaustividad.",
    "Correcto: complementa la búsqueda electrónica y recupera estudios que las bases no indexaron o que la estrategia no capturó.",
    "Es complementaria, nunca un reemplazo de la búsqueda sistemática en bases.",
    "Aumenta —no reduce— la sensibilidad/exhaustividad de la recuperación."
  ],
  src:"EJEMPLO 1 buscó también en listas de referencias de artículos recuperados"
},

/* ===================== SELECCIÓN / PRISMA ===================== */
{
  sec:"seleccion", lvl:"basico",
  q:"El diagrama de flujo PRISMA documenta cuatro fases. ¿Cuál es el orden correcto?",
  opts:["Inclusión → Cribado → Identificación → Elegibilidad","Identificación → Cribado → Elegibilidad → Inclusión","Cribado → Identificación → Inclusión → Elegibilidad","Elegibilidad → Inclusión → Cribado → Identificación"],
  correct:1,
  fb:[
    "El orden está invertido; la identificación va primero.",
    "Correcto: Identificación → Cribado (título/resumen) → Elegibilidad (texto completo) → Inclusión.",
    "La identificación de registros es el primer paso, no el segundo.",
    "El orden está completamente invertido."
  ],
  why:"PRISMA 2020 estandariza el reporte del flujo de selección de estudios."
},
{
  sec:"seleccion", lvl:"intermedio",
  q:"En el estudio de mpox se recuperaron 1022 artículos y se eliminaron 566 duplicados. ¿En qué fase del flujo PRISMA ocurre la eliminación de duplicados?",
  opts:["Inclusión final","Identificación (antes del cribado)","Evaluación del riesgo de sesgo","Síntesis cuantitativa"],
  correct:1,
  fb:[
    "Los duplicados se retiran mucho antes de la inclusión final.",
    "Correcto: la eliminación de duplicados ocurre en la fase de identificación, antes del cribado por título/resumen.",
    "El riesgo de sesgo se evalúa después de seleccionar los estudios incluidos.",
    "La síntesis es la etapa final, posterior a toda la selección."
  ],
  src:"S3. Mpox (1022 recuperados, 566 duplicados, 65 incluidos)"
},
{
  sec:"seleccion", lvl:"intermedio",
  q:"¿Por qué se recomienda que la selección de estudios (cribado) la realicen al menos dos revisores de forma independiente?",
  opts:["Para terminar más rápido","Para reducir errores y sesgo del revisor, midiendo la concordancia (p. ej., kappa)","Porque lo exige la ley","Para aumentar el número de estudios incluidos"],
  correct:1,
  fb:[
    "El objetivo no es la rapidez; de hecho suele ser más lento pero más válido.",
    "Correcto: dos revisores independientes reducen errores y sesgos de selección; la concordancia se puede cuantificar con el índice kappa.",
    "No es una exigencia legal sino una buena práctica metodológica.",
    "No busca aumentar inclusiones, sino decidir correctamente cuáles incluir."
  ]
},
{
  sec:"seleccion", lvl:"avanzado",
  q:"Durante el cribado por título y resumen (TIAB), ante la duda razonable sobre si un estudio cumple los criterios, la conducta correcta es:",
  opts:["Excluirlo de inmediato para ahorrar tiempo","Pasarlo a revisión de texto completo (ser inclusivo en el cribado)","Incluirlo directamente en el meta-análisis","Decidir según el factor de impacto de la revista"],
  correct:1,
  fb:[
    "Excluir ante la duda en el cribado puede descartar estudios elegibles (falsos negativos).",
    "Correcto: en el cribado por TIAB se es conservador; ante la duda, se avanza a texto completo donde hay más información.",
    "No se incluye directamente: primero hay que verificar el texto completo.",
    "El factor de impacto no es un criterio de elegibilidad válido."
  ],
  why:"El cribado TIAB prioriza la sensibilidad: mejor revisar de más a texto completo que perder un estudio elegible."
},

/* ===================== EXTRACCIÓN ===================== */
{
  sec:"extraccion", lvl:"basico",
  q:"¿Cuál de los siguientes datos NO suele extraerse de forma rutinaria de cada estudio primario?",
  opts:["Autor y año de publicación","Tamaño muestral y medidas de efecto","La opinión personal del revisor sobre la revista","Características de la población e intervención"],
  correct:2,
  fb:[
    "Autor y año son datos básicos de identificación que siempre se extraen.",
    "El tamaño muestral y las estimaciones de efecto son esenciales para la síntesis.",
    "Correcto: la opinión subjetiva del revisor sobre la revista no es un dato extraíble del estudio.",
    "Las características de población e intervención son centrales para describir y agrupar estudios."
  ]
},
{
  sec:"extraccion", lvl:"intermedio",
  q:"Para meta-analizar un desenlace continuo cuando los estudios reportan medianas y rangos intercuartílicos en lugar de medias y DE, lo correcto es:",
  opts:["Descartar esos estudios siempre","Estimar/convertir media y desviación estándar mediante métodos validados (p. ej., Wan, Luo)","Tratar la mediana como si fuera la media sin ajuste","Convertir todo a odds ratio"],
  correct:1,
  fb:[
    "No es necesario descartarlos: existen métodos validados de conversión.",
    "Correcto: se usan fórmulas validadas (Wan et al., Luo et al., Hozo) para estimar media y DE a partir de mediana y RIC/rango.",
    "Usar la mediana como media sin ajuste introduce error, sobre todo en distribuciones asimétricas.",
    "El OR es para datos dicotómicos; no aplica a desenlaces continuos."
  ]
},
{
  sec:"extraccion", lvl:"avanzado",
  q:"La doble extracción de datos por revisores independientes tiene como principal ventaja:",
  opts:["Acelerar el proceso","Detectar y corregir errores de transcripción y discrepancias","Eliminar la heterogeneidad estadística","Evitar el registro del protocolo"],
  correct:1,
  fb:[
    "Suele ser más lenta, no más rápida; su valor es la calidad.",
    "Correcto: la extracción duplicada reduce errores de transcripción y permite resolver discrepancias por consenso.",
    "No modifica la heterogeneidad clínica/estadística entre estudios.",
    "El registro del protocolo (p. ej., PROSPERO) es independiente y sigue siendo necesario."
  ]
},

/* ===================== RIESGO DE SESGO ===================== */
{
  sec:"sesgo", lvl:"basico",
  q:"Según las clases del Dr. Barboza, la escala de Newcastle-Ottawa (NOS) se aplica a:",
  opts:["Ensayos clínicos aleatorizados","Estudios de cohorte y de casos y controles","Revisiones sistemáticas","Estudios de exactitud diagnóstica"],
  correct:1,
  fb:[
    "Para RCTs se usa la herramienta RoB 2.0, no la NOS.",
    "Correcto: la NOS fue desarrollada para evaluar la calidad de estudios no aleatorizados: cohortes y casos y controles.",
    "Para evaluar revisiones sistemáticas se usa AMSTAR-2.",
    "Para exactitud diagnóstica se usa QUADAS-2."
  ],
  src:"NEWCASTLE OTTAWA SCALE (diapositivas del curso)"
},
{
  sec:"sesgo", lvl:"intermedio",
  q:"En la escala NOS, ¿cuál es la puntuación máxima posible y qué dominios evalúa en una cohorte?",
  opts:["10 estrellas: Aleatorización, Cegamiento, Seguimiento","9 estrellas: Selección, Comparabilidad y Desenlace (Outcome)","5 estrellas: Población, Intervención, Comparación","12 estrellas: Sesgo, Confusión, Reporte"],
  correct:1,
  fb:[
    "La NOS no evalúa aleatorización ni cegamiento (eso es de RCTs) y su máximo no es 10.",
    "Correcto: máximo 9 estrellas, repartidas en Selección, Comparabilidad y Desenlace (en casos y controles: Exposición).",
    "5 estrellas y dominios PICO no corresponden a la NOS.",
    "La NOS no llega a 12 estrellas ni usa esos dominios."
  ],
  why:"NOS: 3 categorías, máximo 9 estrellas; según el curso, >7 estrellas = bajo riesgo de sesgo.",
  src:"NEWCASTLE OTTAWA SCALE (diapositivas del curso)"
},
{
  sec:"sesgo", lvl:"intermedio",
  q:"La herramienta RoB 2.0 de Cochrane está diseñada para evaluar el riesgo de sesgo en:",
  opts:["Estudios de cohorte","Ensayos clínicos aleatorizados","Estudios de prevalencia","Revisiones narrativas"],
  correct:1,
  fb:[
    "Para cohortes/no aleatorizados de intervención se usa ROBINS-I, no RoB 2.0.",
    "Correcto: RoB 2.0 evalúa el riesgo de sesgo en ensayos aleatorizados (RCTs).",
    "Para prevalencia se usan herramientas tipo JBI, no RoB 2.0.",
    "Las revisiones narrativas no son el objeto de RoB 2.0."
  ],
  src:"S1 (videolaringoscopia) y S5 (sacubitrilo) usaron RoB 2.0 en RCTs"
},
{
  sec:"sesgo", lvl:"avanzado",
  q:"¿Cuál de los siguientes NO es uno de los 5 dominios de la herramienta RoB 2.0?",
  opts:["Proceso de aleatorización","Desviaciones de la intervención prevista","Confusión por indicación","Medición del desenlace"],
  correct:2,
  fb:[
    "Sí es un dominio: el proceso de aleatorización.",
    "Sí es un dominio: desviaciones respecto de la intervención prevista.",
    "Correcto: la 'confusión' es un dominio de ROBINS-I (no aleatorizados); en RCTs la aleatorización controla la confusión.",
    "Sí es un dominio: la medición del desenlace."
  ],
  why:"Dominios RoB 2.0: aleatorización, desviaciones de la intervención, datos de desenlace faltantes, medición del desenlace y selección del resultado reportado."
},
{
  sec:"sesgo", lvl:"intermedio",
  q:"La herramienta QUADAS-2 se utiliza específicamente para evaluar:",
  opts:["Riesgo de sesgo en estudios de exactitud diagnóstica","Calidad de meta-análisis en red","Heterogeneidad estadística","Sesgo de publicación"],
  correct:0,
  fb:[
    "Correcto: QUADAS-2 evalúa el riesgo de sesgo en estudios de exactitud diagnóstica (4 dominios: selección de pacientes, prueba índice, estándar de referencia, flujo y tiempos).",
    "Para network meta-analysis no se usa QUADAS-2.",
    "La heterogeneidad se mide con I²/Q, no con QUADAS-2.",
    "El sesgo de publicación se evalúa con funnel plot/Egger, no con QUADAS-2."
  ],
  src:"NEWCASTLE OTTAWA SCALE / QUADAS-2 (diapositivas del curso)"
},
{
  sec:"sesgo", lvl:"avanzado",
  q:"Para evaluar la calidad METODOLÓGICA de las revisiones sistemáticas incluidas en una umbrella review, la herramienta de elección es:",
  opts:["RoB 2.0","AMSTAR-2","NOS","Escala de Jadad"],
  correct:1,
  fb:[
    "RoB 2.0 evalúa RCTs individuales, no revisiones sistemáticas.",
    "Correcto: AMSTAR-2 (A MeaSurement Tool to Assess systematic Reviews) valora la calidad de revisiones sistemáticas, clave en umbrella reviews.",
    "La NOS evalúa estudios observacionales primarios.",
    "Jadad evalúa la calidad de RCTs individuales (centrado en cegamiento/aleatorización)."
  ],
  src:"S6. Umbrella review de curcumina"
},

/* ===================== MEDIDAS DE EFECTO ===================== */
{
  sec:"efecto", lvl:"basico",
  q:"¿Cuál de estas medidas de efecto tiene como valor nulo (sin efecto) el 1?",
  opts:["Diferencia de medias (MD)","Riesgo relativo (RR) y odds ratio (OR)","Diferencia de medias estandarizada (SMD)","Diferencia de riesgos (RD)"],
  correct:1,
  fb:[
    "La MD es una diferencia: su valor nulo es 0.",
    "Correcto: RR, OR y HR son razones (cocientes); el valor nulo es 1.",
    "La SMD es una diferencia estandarizada: su valor nulo es 0.",
    "La diferencia de riesgos es una resta: su valor nulo es 0."
  ],
  why:"Razones (RR, OR, HR) → nulo = 1. Diferencias (MD, SMD, RD) → nulo = 0."
},
{
  sec:"efecto", lvl:"intermedio",
  q:"¿Cuándo es preferible usar la Diferencia de Medias Estandarizada (SMD) en lugar de la Diferencia de Medias (MD)?",
  opts:["Cuando todos los estudios usan exactamente la misma escala","Cuando los estudios miden el mismo constructo con escalas/instrumentos diferentes","Cuando el desenlace es dicotómico","Cuando hay pocos estudios"],
  correct:1,
  fb:[
    "Si la escala es idéntica, la MD es directamente interpretable y preferible.",
    "Correcto: la SMD (p. ej., d de Cohen, g de Hedges) permite combinar estudios que miden el mismo concepto con distintos instrumentos.",
    "Para desenlaces dicotómicos se usan RR/OR, no SMD.",
    "El número de estudios no determina elegir SMD frente a MD."
  ],
  src:"EJEMPLO 3 (SSD) reportó SMD (depresión 1.80, ansiedad 1.55, alexitimia 1.39)"
},
{
  sec:"efecto", lvl:"intermedio",
  q:"En el meta-análisis de alopurinol y demencia, el OR combinado fue 0.91 (IC95% 0.87–0.95). ¿Cómo se interpreta?",
  opts:["La exposición a alopurinol se asoció con MAYOR probabilidad de demencia","La exposición a alopurinol se asoció con MENOR probabilidad de demencia, y es estadísticamente significativo","No hubo asociación significativa","El resultado no es interpretable por el IC"],
  correct:1,
  fb:[
    "Un OR<1 indica menor probabilidad, no mayor.",
    "Correcto: OR 0.91 (<1) indica menor odds de demencia con alopurinol, y el IC95% no cruza 1, por lo que es significativo.",
    "Sí es significativo: el intervalo 0.87–0.95 está completamente por debajo de 1.",
    "El IC es estrecho y no cruza el nulo: es perfectamente interpretable."
  ],
  src:"EJEMPLO 2. Alopurinol y demencia (casos y controles)"
},
{
  sec:"efecto", lvl:"avanzado",
  q:"Una limitación conocida del Odds Ratio (OR) frente al Riesgo Relativo (RR) es que:",
  opts:["El OR no puede calcularse en casos y controles","El OR sobreestima la magnitud del efecto cuando el desenlace es frecuente (>10%)","El OR siempre es menor que 1","El OR no tiene intervalo de confianza"],
  correct:1,
  fb:[
    "Al contrario: el OR es la medida natural en estudios de casos y controles.",
    "Correcto: cuando el desenlace es común, el OR se aleja de 1 más que el RR, exagerando la magnitud aparente del efecto.",
    "El OR puede ser mayor o menor que 1 según la dirección del efecto.",
    "El OR sí tiene intervalo de confianza, como toda estimación."
  ]
},

/* ===================== MODELOS ===================== */
{
  sec:"modelos", lvl:"basico",
  q:"¿Cuál es el supuesto central del modelo de efectos ALEATORIOS en meta-análisis?",
  opts:["Existe un único efecto verdadero común a todos los estudios","Los efectos verdaderos varían entre estudios y siguen una distribución","Todos los estudios tienen el mismo tamaño muestral","No hay error de muestreo"],
  correct:1,
  fb:[
    "Ese es el supuesto del modelo de efectos FIJOS, no aleatorios.",
    "Correcto: el modelo de efectos aleatorios asume que los efectos verdaderos difieren entre estudios y se distribuyen alrededor de un efecto medio.",
    "El modelo no asume igualdad de tamaños muestrales.",
    "Siempre existe error de muestreo; ningún modelo lo elimina."
  ]
},
{
  sec:"modelos", lvl:"intermedio",
  q:"En presencia de heterogeneidad sustancial entre estudios, ¿qué modelo es generalmente más apropiado?",
  opts:["Efectos fijos, porque ignora la heterogeneidad","Efectos aleatorios, porque incorpora la varianza entre estudios (τ²)","Ninguno: no debe hacerse meta-análisis","Siempre efectos fijos por convención"],
  correct:1,
  fb:[
    "Ignorar la heterogeneidad con efectos fijos produce IC demasiado estrechos y falsa precisión.",
    "Correcto: con heterogeneidad sustancial, el modelo de efectos aleatorios incorpora τ² y ofrece IC más realistas.",
    "Puede meta-analizarse si es clínicamente razonable; la heterogeneidad se modela, no necesariamente prohíbe la síntesis.",
    "No es una convención automática: el modelo se elige según la heterogeneidad esperada."
  ],
  why:"Varios estudios de la carpeta (S1, S4, S5) usaron modelos de efectos aleatorios por la heterogeneidad esperada."
},
{
  sec:"modelos", lvl:"avanzado",
  q:"El método de DerSimonian-Laird es un método clásico para:",
  opts:["Evaluar el riesgo de sesgo","Estimar la varianza entre estudios (τ²) en el modelo de efectos aleatorios","Calcular la sensibilidad y especificidad","Detectar duplicados"],
  correct:1,
  fb:[
    "No evalúa riesgo de sesgo; es un estimador estadístico.",
    "Correcto: DerSimonian-Laird estima τ² (varianza entre estudios) en el modelo de efectos aleatorios; existen alternativas como REML.",
    "No se relaciona con métricas de exactitud diagnóstica.",
    "No tiene que ver con la deduplicación de registros."
  ]
},
{
  sec:"modelos", lvl:"intermedio",
  q:"En el modelo de efectos fijos del estudio de alopurinol y demencia, la heterogeneidad fue I² = 0%. ¿Qué justifica razonablemente usar efectos fijos aquí?",
  opts:["La ausencia de heterogeneidad detectable entre los pocos estudios","El gran número de estudios incluidos","Que el desenlace era continuo","Que se buscó en una sola base de datos"],
  correct:0,
  fb:[
    "Correcto: con I²=0% (sin heterogeneidad detectable) el modelo de efectos fijos es defendible.",
    "Solo había 4 estudios; no es por gran número.",
    "El desenlace era dicotómico (demencia sí/no), medido con OR.",
    "El número de bases de datos no determina el modelo estadístico."
  ],
  src:"EJEMPLO 2. Alopurinol y demencia (I²=0%, efectos fijos)"
},

/* ===================== HETEROGENEIDAD ===================== */
{
  sec:"heterogeneidad", lvl:"basico",
  q:"El estadístico I² expresa:",
  opts:["El número de estudios incluidos","El porcentaje de la variabilidad total debida a heterogeneidad y no al azar","La magnitud del efecto combinado","El sesgo de publicación"],
  correct:1,
  fb:[
    "El I² no cuenta estudios.",
    "Correcto: I² es la proporción (%) de la variabilidad total atribuible a heterogeneidad entre estudios más que al error de muestreo.",
    "El efecto combinado se expresa con RR/OR/MD, no con I².",
    "El sesgo de publicación se valora con funnel plot/Egger, no con I²."
  ]
},
{
  sec:"heterogeneidad", lvl:"intermedio",
  q:"Según la guía orientativa de Cochrane, un I² de 87% (como en el meta-análisis de videolaringoscopia) se interpreta como heterogeneidad:",
  opts:["Baja (no importante)","Moderada","Considerable/alta","Nula"],
  correct:2,
  fb:[
    "Un 87% está muy por encima del rango bajo.",
    "El rango moderado suele situarse alrededor de 30–60%.",
    "Correcto: valores ~75–100% indican heterogeneidad considerable/alta; 87% es alta.",
    "Nula sería 0%; 87% es muy alta."
  ],
  why:"Guía aproximada Cochrane: 0–40% puede no ser importante; 30–60% moderada; 50–90% sustancial; 75–100% considerable.",
  src:"S1. Videolaringoscopia (RR 1.12; I²=87%)"
},
{
  sec:"heterogeneidad", lvl:"intermedio",
  q:"Para explorar las FUENTES de heterogeneidad (p. ej., por qué difieren los efectos entre estudios), ¿qué técnica se utiliza?",
  opts:["Trim-and-fill","Análisis de subgrupos y meta-regresión","Cálculo del NNT","Test de Egger"],
  correct:1,
  fb:[
    "Trim-and-fill corrige sesgo de publicación, no explica heterogeneidad clínica.",
    "Correcto: el análisis de subgrupos y la meta-regresión examinan covariables que podrían explicar la heterogeneidad.",
    "El NNT traduce el efecto a términos clínicos; no explora heterogeneidad.",
    "Egger evalúa asimetría del funnel/sesgo de publicación, no fuentes de heterogeneidad."
  ],
  src:"EJEMPLO 1 usó meta-regresión para evaluar fuentes de heterogeneidad"
},
{
  sec:"heterogeneidad", lvl:"avanzado",
  q:"Una limitación del test Q de Cochran (chi-cuadrado de heterogeneidad) es que:",
  opts:["Siempre es significativo","Tiene baja potencia cuando hay pocos estudios y excesiva potencia con muchos","No depende del número de estudios","Mide el efecto combinado"],
  correct:1,
  fb:[
    "No siempre es significativo; depende de los datos y del número de estudios.",
    "Correcto: con pocos estudios el test Q tiene baja potencia (puede no detectar heterogeneidad real); con muchos, detecta diferencias triviales.",
    "Sí depende del número de estudios, que afecta su potencia.",
    "El test Q evalúa heterogeneidad, no la magnitud del efecto."
  ]
},
{
  sec:"heterogeneidad", lvl:"avanzado",
  q:"El parámetro τ² (tau cuadrado) representa:",
  opts:["La varianza DENTRO de cada estudio","La varianza ENTRE los efectos verdaderos de los estudios","El error tipo I","El intervalo de predicción"],
  correct:1,
  fb:[
    "La varianza intraestudio corresponde al error de muestreo de cada estudio, no a τ².",
    "Correcto: τ² estima la varianza entre los efectos verdaderos de los distintos estudios (heterogeneidad real).",
    "El error tipo I (α) es la probabilidad de falso positivo, no τ².",
    "El intervalo de predicción se deriva en parte de τ², pero no es τ² en sí."
  ]
},

/* ===================== SESGO DE PUBLICACIÓN ===================== */
{
  sec:"publicacion", lvl:"basico",
  q:"El funnel plot (gráfico en embudo) representa típicamente:",
  opts:["El efecto de cada estudio frente a su precisión (o error estándar)","El I² frente al año de publicación","La sensibilidad frente a 1-especificidad","El número de citas por estudio"],
  correct:0,
  fb:[
    "Correcto: el funnel plot grafica el tamaño del efecto (eje X) frente a la precisión/error estándar (eje Y).",
    "No relaciona I² con el año; eso sería otro tipo de gráfico.",
    "Sensibilidad vs 1-especificidad es la curva ROC, no un funnel plot.",
    "El funnel plot no grafica citas."
  ]
},
{
  sec:"publicacion", lvl:"intermedio",
  q:"La ASIMETRÍA de un funnel plot puede sugerir:",
  opts:["Ausencia total de sesgo","Sesgo de publicación o efecto de estudios pequeños (small-study effects)","Que el modelo es de efectos fijos","Que el desenlace es continuo"],
  correct:1,
  fb:[
    "La asimetría sugiere problemas; la simetría es la que apunta a ausencia de sesgo evidente.",
    "Correcto: la asimetría puede indicar sesgo de publicación, aunque también heterogeneidad o efecto de estudios pequeños.",
    "La forma del funnel no determina el tipo de modelo estadístico usado.",
    "La asimetría no informa sobre si el desenlace es continuo o dicotómico."
  ],
  src:"EJEMPLO 1: la inspección visual del funnel reveló cierta asimetría"
},
{
  sec:"publicacion", lvl:"intermedio",
  q:"El test de Egger se utiliza para:",
  opts:["Evaluar cuantitativamente la asimetría del funnel plot","Estimar la sensibilidad diagnóstica","Calcular el efecto combinado","Medir la concordancia entre revisores"],
  correct:0,
  fb:[
    "Correcto: el test de Egger evalúa estadísticamente la asimetría del funnel plot (regresión sobre la precisión).",
    "No se relaciona con métricas diagnósticas.",
    "No calcula el efecto combinado, sino la asimetría.",
    "La concordancia entre revisores se mide con kappa, no con Egger."
  ],
  src:"EJEMPLO 1 detectó sesgo de publicación con el test de Egger (P<0.05)"
},
{
  sec:"publicacion", lvl:"avanzado",
  q:"El método de 'trim-and-fill' de Duval y Tweedie sirve para:",
  opts:["Eliminar estudios de baja calidad","Estimar e imputar los estudios potencialmente 'faltantes' y recalcular el efecto ajustado","Aumentar la heterogeneidad","Detectar duplicados en la búsqueda"],
  correct:1,
  fb:[
    "No elimina estudios; imputa los que podrían faltar por sesgo de publicación.",
    "Correcto: trim-and-fill estima cuántos estudios faltarían para hacer simétrico el funnel y recalcula un efecto ajustado.",
    "No busca aumentar heterogeneidad; corrige asimetría por posible sesgo.",
    "No tiene relación con la deduplicación de registros."
  ],
  src:"EJEMPLO 1: el trim-and-fill no alteró sustancialmente la estimación combinada"
},
{
  sec:"publicacion", lvl:"avanzado",
  q:"¿Cuál es el número mínimo de estudios habitualmente recomendado para evaluar de forma fiable el sesgo de publicación con funnel plot/Egger?",
  opts:["Al menos 3","Al menos 10","Al menos 50","No hay recomendación"],
  correct:1,
  fb:[
    "Con solo 3 estudios el funnel y el test de Egger carecen de potencia y son poco fiables.",
    "Correcto: Cochrane recomienda al menos 10 estudios para interpretar el funnel plot y aplicar pruebas de asimetría.",
    "No se exigen 50; el umbral práctico habitual es 10.",
    "Sí existe recomendación: ≥10 estudios."
  ]
},

/* ===================== FOREST PLOT ===================== */
{
  sec:"forest", lvl:"basico",
  q:"En un forest plot, el rombo (diamante) del final representa:",
  opts:["El estudio con mayor peso","El efecto combinado (estimación global) y su intervalo de confianza","El valor nulo","El sesgo de publicación"],
  correct:1,
  fb:[
    "El estudio con mayor peso es un cuadrado grande, no el rombo.",
    "Correcto: el rombo resume el efecto combinado; su centro es la estimación puntual y su ancho el IC95%.",
    "El valor nulo es la línea vertical de referencia, no el rombo.",
    "El sesgo de publicación se evalúa en el funnel plot, no en el rombo."
  ]
},
{
  sec:"forest", lvl:"basico",
  q:"En un forest plot, el TAMAÑO del cuadrado de cada estudio es proporcional a:",
  opts:["El valor p del estudio","El peso del estudio en el meta-análisis (generalmente inverso a su varianza)","El año de publicación","El factor de impacto de la revista"],
  correct:1,
  fb:[
    "El cuadrado no representa el valor p.",
    "Correcto: el área del cuadrado refleja el peso del estudio (estudios más precisos/grandes pesan más).",
    "El tamaño no codifica el año de publicación.",
    "El factor de impacto no interviene en el peso estadístico."
  ]
},
{
  sec:"forest", lvl:"intermedio",
  q:"En un forest plot de razones (RR/OR) con la línea vertical del nulo en 1, un estudio cuyo intervalo de confianza CRUZA el 1 indica:",
  opts:["Resultado estadísticamente significativo","Resultado NO estadísticamente significativo para ese estudio","Error en el gráfico","Heterogeneidad alta"],
  correct:1,
  fb:[
    "Si cruza el nulo, no alcanza significancia estadística.",
    "Correcto: si el IC cruza 1 (el nulo para razones), el efecto de ese estudio no es estadísticamente significativo.",
    "No es un error: es una situación frecuente y esperable.",
    "Cruzar el nulo no informa por sí mismo sobre la heterogeneidad global."
  ]
},
{
  sec:"forest", lvl:"intermedio",
  q:"En el forest plot del meta-análisis de cordón umbilical (UCM vs ICC), la reducción de transfusiones fue RR 0.5 (IC95% 0.3–0.9), pero la mortalidad RR 0.5 (IC95% 0.2–1.1). ¿Qué diferencia hay en su interpretación?",
  opts:["Ambos son significativos","La transfusión es significativa (IC no cruza 1); la mortalidad NO lo es (IC cruza 1)","La mortalidad es significativa y la transfusión no","Ninguno es interpretable"],
  correct:1,
  fb:[
    "No ambos: el de mortalidad cruza el 1.",
    "Correcto: 0.3–0.9 no incluye el 1 (significativo); 0.2–1.1 incluye el 1 (no significativo), pese a un punto estimado idéntico de 0.5.",
    "Es al revés: la transfusión sí es significativa y la mortalidad no.",
    "Ambos son interpretables a partir de su IC."
  ],
  why:"Un mismo punto estimado puede ser o no significativo según el ancho del IC (precisión).",
  src:"S4. Umbilical cord milking"
},
{
  sec:"forest", lvl:"avanzado",
  q:"Un intervalo de confianza muy ANCHO alrededor del efecto de un estudio en el forest plot suele reflejar:",
  opts:["Alta precisión y muestra grande","Baja precisión, habitualmente por muestra pequeña o pocos eventos","Ausencia de sesgo","Heterogeneidad nula"],
  correct:1,
  fb:[
    "Un IC ancho es lo contrario de alta precisión.",
    "Correcto: un IC ancho indica baja precisión, típicamente por tamaño muestral pequeño o escasos eventos.",
    "El ancho del IC no informa directamente sobre sesgo.",
    "El ancho del IC de un estudio no mide la heterogeneidad del conjunto."
  ]
},

/* ===================== GRADE ===================== */
{
  sec:"grade", lvl:"basico",
  q:"El sistema GRADE clasifica la CERTEZA (calidad) de la evidencia en cuántos niveles y cuáles?",
  opts:["2: buena y mala","4: alta, moderada, baja y muy baja","3: A, B y C","5: de 1 a 5 estrellas"],
  correct:1,
  fb:[
    "GRADE no usa una dicotomía buena/mala.",
    "Correcto: GRADE define 4 niveles de certeza: alta, moderada, baja y muy baja.",
    "No usa categorías A/B/C.",
    "No usa un sistema de 1–5 estrellas."
  ],
  src:"S5 reportó certeza moderada/baja/muy baja con GRADE"
},
{
  sec:"grade", lvl:"intermedio",
  q:"En GRADE, ¿con qué nivel de certeza PARTEN los ensayos clínicos aleatorizados (RCTs) antes de ajustar?",
  opts:["Baja","Alta","Muy baja","Moderada"],
  correct:1,
  fb:[
    "Los estudios observacionales parten en baja, no los RCTs.",
    "Correcto: los RCTs comienzan en certeza ALTA y pueden bajar por limitaciones.",
    "Muy baja es el nivel más bajo posible tras múltiples descensos, no el de partida de un RCT.",
    "Moderada no es el punto de partida de un RCT, sino un posible resultado tras un descenso."
  ]
},
{
  sec:"grade", lvl:"avanzado",
  q:"¿Cuál de los siguientes NO es uno de los cinco dominios para BAJAR la certeza en GRADE?",
  opts:["Riesgo de sesgo","Inconsistencia (heterogeneidad)","Gran magnitud del efecto","Imprecisión"],
  correct:2,
  fb:[
    "El riesgo de sesgo sí es un dominio que baja la certeza.",
    "La inconsistencia (heterogeneidad inexplicada) sí baja la certeza.",
    "Correcto: una gran magnitud del efecto es un criterio para SUBIR la certeza (en observacionales), no para bajarla.",
    "La imprecisión (IC amplios, pocos eventos) sí baja la certeza."
  ],
  why:"Bajan certeza: riesgo de sesgo, inconsistencia, evidencia indirecta, imprecisión y sesgo de publicación. Suben: gran efecto, gradiente dosis-respuesta, confusión que reforzaría el efecto."
},
{
  sec:"grade", lvl:"intermedio",
  q:"Cuando el meta-análisis de sacubitrilo/valsartán reporta 'certeza muy baja' para un desenlace, la interpretación correcta es:",
  opts:["El efecto estimado es seguramente correcto","La confianza en que el efecto estimado sea cercano al real es muy limitada","No se debe publicar el resultado","El resultado es estadísticamente significativo"],
  correct:1,
  fb:[
    "Certeza muy baja implica gran incertidumbre, no seguridad.",
    "Correcto: 'muy baja' significa que el efecto verdadero podría ser sustancialmente distinto del estimado.",
    "La baja certeza no impide publicar; se reporta con la salvedad correspondiente.",
    "Certeza y significancia estadística son conceptos distintos; baja certeza no equivale a significancia."
  ],
  src:"S5. Sacubitrilo/valsartán (certeza muy baja en eGFR e hiperkalemia)"
},

/* ===================== TIPOS DE REVISIONES ===================== */
{
  sec:"tipos", lvl:"basico",
  q:"Una 'umbrella review' (revisión paraguas) sintetiza:",
  opts:["Estudios primarios individuales","Revisiones sistemáticas y meta-análisis ya publicados","Solo ensayos clínicos","Series de casos"],
  correct:1,
  fb:[
    "Los estudios primarios son la unidad de una revisión sistemática convencional, no de una umbrella.",
    "Correcto: la umbrella review es una revisión de revisiones sistemáticas/meta-análisis existentes.",
    "No se limita a RCTs; integra revisiones que pueden incluir distintos diseños.",
    "Las series de casos no son su unidad de análisis."
  ],
  src:"S6. Umbrella review de curcumina (26 RS/MA incluidas)"
},
{
  sec:"tipos", lvl:"avanzado",
  q:"En la umbrella review de curcumina, el 'corrected covered area' (CCA) fue 9.76%, indicando solapamiento moderado. ¿Qué mide el CCA?",
  opts:["La heterogeneidad estadística","El grado de SOLAPAMIENTO de estudios primarios compartidos entre las revisiones incluidas","La certeza GRADE","El sesgo de publicación"],
  correct:1,
  fb:[
    "El CCA no es una medida de heterogeneidad estadística.",
    "Correcto: el CCA cuantifica cuánto se solapan (comparten estudios primarios) las revisiones incluidas en la umbrella review.",
    "No corresponde a la certeza GRADE.",
    "No evalúa sesgo de publicación."
  ],
  why:"CCA: <5% solapamiento leve; 5–10% moderado; 11–15% alto; >15% muy alto.",
  src:"S6. Umbrella review (CCA 9.76%, solapamiento moderado)"
},
{
  sec:"tipos", lvl:"intermedio",
  q:"¿Cuál es la diferencia clave entre una revisión sistemática y un meta-análisis?",
  opts:["Son lo mismo","La revisión sistemática es el método de síntesis estructurada; el meta-análisis es la combinación estadística de resultados","El meta-análisis no requiere búsqueda sistemática","La revisión sistemática siempre incluye meta-análisis"],
  correct:1,
  fb:[
    "No son lo mismo: una puede existir sin la otra.",
    "Correcto: toda revisión sistemática sigue un método estructurado; el meta-análisis es el paso estadístico opcional de combinar datos.",
    "El meta-análisis válido se apoya en una búsqueda sistemática previa.",
    "No siempre: si los estudios son demasiado heterogéneos, la revisión puede ser solo narrativa (p. ej., S3, mpox)."
  ],
  src:"S3 (mpox) es revisión sistemática SIN meta-análisis combinado de efecto"
},
{
  sec:"tipos", lvl:"intermedio",
  q:"Una revisión de alcance (scoping review) se diferencia de una revisión sistemática clásica porque:",
  opts:["Siempre incluye meta-análisis","Busca mapear la extensión y naturaleza de la evidencia, sin necesariamente evaluar efecto ni calidad","Solo incluye RCTs","No requiere búsqueda estructurada"],
  correct:1,
  fb:[
    "Las scoping reviews habitualmente NO realizan meta-análisis.",
    "Correcto: la scoping review mapea qué evidencia existe y sus características, sin centrarse en estimar un efecto combinado.",
    "No se limita a RCTs; suele abarcar diseños diversos.",
    "Sí requiere una búsqueda estructurada y reproducible (PRISMA-ScR)."
  ]
},

/* ===================== CASOS REALES ===================== */
{
  sec:"casos", lvl:"intermedio",
  q:"El meta-análisis de insomnio y depresión incluyó 34 cohortes (172,077 participantes) con RR combinado 2.27 (IC95% 1.89–2.71). ¿Qué se concluye?",
  opts:["El insomnio reduce el riesgo de depresión","El insomnio se asocia con un riesgo ~2.3 veces mayor de depresión, de forma significativa","No hay asociación","El IC indica no significancia"],
  correct:1,
  fb:[
    "Un RR>1 indica aumento del riesgo, no reducción.",
    "Correcto: RR 2.27 implica un riesgo ~2.3 veces mayor; el IC (1.89–2.71) no cruza 1, por lo que es significativo.",
    "Sí hay asociación: el efecto es claro y significativo.",
    "El IC está por encima de 1, lo que confirma significancia."
  ],
  src:"EJEMPLO 1. Insomnio y depresión"
},
{
  sec:"casos", lvl:"avanzado",
  q:"En el meta-análisis de insomnio-depresión, I² = 92.6% y el test de Egger fue significativo (P<0.05). ¿Qué dos problemas señalan estos hallazgos?",
  opts:["Alta heterogeneidad y posible sesgo de publicación","Bajo poder y error de tipo II","Confusión y error de medición","Ninguno relevante"],
  correct:0,
  fb:[
    "Correcto: I²=92.6% indica heterogeneidad muy alta y un Egger significativo sugiere posible sesgo de publicación (que el trim-and-fill exploró).",
    "El poder estadístico no es lo que reflejan I² y Egger.",
    "Confusión y error de medición son sesgos de los estudios primarios, no lo que miden I² ni Egger.",
    "Ambos hallazgos son muy relevantes para interpretar la robustez del resultado."
  ],
  src:"EJEMPLO 1. Insomnio y depresión"
},
{
  sec:"casos", lvl:"intermedio",
  q:"El meta-análisis de videolaringoscopia (S1) usó PRISMA-2020, RoB 2.0 y GRADE, e incluyó 15 RCTs (4582 intubaciones), con éxito al primer intento RR 1.12 (IC95% 1.04–1.21). ¿Qué muestra este resultado?",
  opts:["La videolaringoscopia no cambia el éxito al primer intento","La videolaringoscopia mejora significativamente el éxito al primer intento (IC no cruza 1)","El resultado no es significativo","La laringoscopia directa es superior"],
  correct:1,
  fb:[
    "El RR 1.12 con IC que no cruza 1 sí indica mejora.",
    "Correcto: RR 1.12 (1.04–1.21) indica mayor probabilidad de éxito al primer intento con videolaringoscopia, de forma significativa.",
    "Es significativo: el IC 1.04–1.21 excluye el 1.",
    "El resultado favorece a la videolaringoscopia, no a la directa."
  ],
  src:"S1. Videolaringoscopia vs laringoscopia directa"
},
{
  sec:"casos", lvl:"avanzado",
  q:"En el estudio de mpox (S3) no se realizó un meta-análisis combinado de efecto, sino una síntesis de proporciones (p. ej., 91.85% de muestras positivas de lesiones cutáneas). La razón más probable es:",
  opts:["Falta de tiempo de los autores","La naturaleza de la pregunta (descriptiva, de proporciones a partir de reportes de casos) no se presta a combinar un efecto comparativo","Que no había suficientes estudios","Que estaba prohibido por la revista"],
  correct:1,
  fb:[
    "No es una cuestión de tiempo, sino de diseño y tipo de pregunta.",
    "Correcto: al ser una síntesis descriptiva de proporciones a partir de reportes/series de casos sin comparador, se resume con proporciones, no con un efecto combinado tipo RR/OR.",
    "Se incluyeron 65 estudios; el número no era el limitante.",
    "No hay prohibición editorial; es una decisión metodológica acorde a la pregunta."
  ],
  src:"S3. Detección de mpox (revisión de proporciones)"
}
];

/* ============================================================
   MÓDULO DE ELEGIBILIDAD (CRIBADO TIAB)
   Cada escenario:
   - Paso 1: el usuario CONSTRUYE los criterios (multi-selección)
   - Paso 2: el usuario CRIBA artículos en formato TIAB (Título + Abstract)
   ============================================================ */

const SCREENING = [
  {
    id:"insomnio",
    title:"Insomnio y riesgo de depresión (meta-análisis de cohortes prospectivas)",
    based:"Basado en EJEMPLO 1 (Li et al., BMC Psychiatry 2016)",
    objective:"Evaluar la asociación entre el insomnio (exposición) y el riesgo de depresión incidente (desenlace) en adultos sin depresión al inicio.",
    picos:{
      P:"Adultos sin depresión al inicio del estudio",
      E:"Insomnio (dificultad para iniciar/mantener el sueño)",
      C:"Sin insomnio",
      O:"Depresión incidente (nueva)",
      S:"Estudios de cohorte PROSPECTIVOS"
    },
    criteria:{
      prompt:"Marca TODOS los criterios que deberían ser de INCLUSIÓN para esta revisión (los no marcados se tratarán como exclusión).",
      options:[
        { text:"Estudios de cohorte prospectivos", include:true,
          fb:"INCLUSIÓN correcta: el diseño prospectivo permite establecer temporalidad (el insomnio precede a la depresión)." },
        { text:"Participantes SIN depresión al inicio (basal)", include:true,
          fb:"INCLUSIÓN correcta: garantiza medir depresión incidente y preservar la secuencia exposición→desenlace." },
        { text:"El insomnio se evalúa como exposición y la depresión como desenlace", include:true,
          fb:"INCLUSIÓN correcta: es la dirección causal de interés de la pregunta PECO." },
        { text:"Estudios con diseño retrospectivo", include:false,
          fb:"EXCLUSIÓN correcta: los retrospectivos no garantizan adecuadamente la temporalidad; se excluyeron en el estudio original." },
        { text:"Resúmenes de congreso, cartas o comentarios sin datos completos", include:false,
          fb:"EXCLUSIÓN correcta: no aportan datos suficientes para la extracción ni la síntesis." },
        { text:"Estudios donde insomnio y depresión actúan ambos como exposición (p. ej., predecir ansiedad)", include:false,
          fb:"EXCLUSIÓN correcta: no responde a la pregunta insomnio→depresión." }
      ]
    },
    articles:[
      {
        title:"Insomnia symptoms and incident depression: a 10-year prospective cohort of 12,000 depression-free adults",
        abstract:"En una cohorte prospectiva de 12,000 adultos sin antecedente de depresión al inicio, se evaluó si los síntomas de insomnio basal predecían depresión incidente tras 10 años de seguimiento. Se reportó un hazard ratio ajustado.",
        decision:"include",
        reason:"Cohorte PROSPECTIVA, participantes SIN depresión basal, insomnio como exposición y depresión incidente como desenlace. Cumple todos los criterios."
      },
      {
        title:"Depression at baseline and subsequent risk of insomnia: a longitudinal analysis",
        abstract:"Estudio que parte de pacientes CON depresión al inicio y evalúa cómo la depresión basal predice la aparición posterior de insomnio.",
        decision:"exclude",
        reason:"Dirección invertida: aquí la depresión es la exposición y el insomnio el desenlace; además los participantes tienen depresión basal. No cumple."
      },
      {
        title:"Cross-sectional association between poor sleep and depressive symptoms in a national survey",
        abstract:"Encuesta TRANSVERSAL que mide simultáneamente sueño y síntomas depresivos en un mismo punto temporal.",
        decision:"exclude",
        reason:"Diseño transversal (no prospectivo): no permite establecer temporalidad. Se excluye según el criterio de diseño."
      },
      {
        title:"Insomnia and risk of depression: a retrospective case-control study using medical records",
        abstract:"Estudio RETROSPECTIVO de casos y controles que compara antecedentes de insomnio entre personas con y sin depresión a partir de historias clínicas.",
        decision:"exclude",
        reason:"Diseño retrospectivo de casos y controles; el protocolo excluye los retrospectivos por riesgo de sesgo de temporalidad/recuerdo."
      },
      {
        title:"Prospective cohort of older adults: baseline insomnia predicts incident major depression over 5 years",
        abstract:"Cohorte prospectiva de adultos mayores sin depresión al inicio; el insomnio basal se asoció con depresión mayor incidente a 5 años (riesgo relativo ajustado reportado).",
        decision:"include",
        reason:"Cohorte prospectiva, sin depresión basal, insomnio→depresión incidente. Cumple todos los criterios."
      },
      {
        title:"Conference abstract: insomnia and mood disorders (poster, sin datos completos)",
        abstract:"Resumen de congreso que menciona una asociación entre insomnio y trastornos del ánimo, sin reportar tamaños de efecto, IC ni metodología completa.",
        decision:"exclude",
        reason:"Resumen de congreso sin datos completos: criterio de exclusión por falta de información para extracción."
      }
    ]
  },

  {
    id:"videolaringo",
    title:"Videolaringoscopia vs laringoscopia directa en adultos críticos (meta-análisis de RCTs)",
    based:"Basado en S1 (Polo, Barboza et al., J Clin Med 2025)",
    objective:"Comparar la eficacia y seguridad de la videolaringoscopia (VL) frente a la laringoscopia directa (DL) para intubación traqueal en adultos en estado crítico.",
    picos:{
      P:"Adultos en estado crítico que requieren intubación traqueal",
      I:"Videolaringoscopia (VL)",
      C:"Laringoscopia directa (DL)",
      O:"Éxito al primer intento (primario); tiempo, visualización glótica, complicaciones",
      S:"Ensayos clínicos aleatorizados (RCTs)"
    },
    criteria:{
      prompt:"Marca TODOS los criterios que deberían ser de INCLUSIÓN para esta revisión de RCTs.",
      options:[
        { text:"Ensayos clínicos aleatorizados (RCTs)", include:true,
          fb:"INCLUSIÓN correcta: la pregunta de eficacia comparada de intervenciones se responde mejor con RCTs." },
        { text:"Población de adultos en estado crítico", include:true,
          fb:"INCLUSIÓN correcta: es la población diana definida en el PICO." },
        { text:"Comparación directa de VL frente a DL", include:true,
          fb:"INCLUSIÓN correcta: la intervención frente al comparador definido." },
        { text:"Estudios observacionales (cohortes, casos y controles)", include:false,
          fb:"EXCLUSIÓN correcta: el diseño elegido fueron RCTs; los observacionales quedan fuera de esta pregunta." },
        { text:"Estudios en población exclusivamente pediátrica", include:false,
          fb:"EXCLUSIÓN correcta: la población diana son adultos críticos, no niños." },
        { text:"Estudios en quirófano electivo de pacientes no críticos", include:false,
          fb:"EXCLUSIÓN correcta: el escenario es el paciente crítico, no la cirugía electiva en pacientes estables." }
      ]
    },
    articles:[
      {
        title:"Randomized controlled trial of videolaryngoscopy versus direct laryngoscopy for emergency intubation in critically ill adults",
        abstract:"RCT multicéntrico en adultos críticos que requerían intubación urgente. Se aleatorizó a VL o DL y se midió el éxito al primer intento, el tiempo de intubación y las complicaciones.",
        decision:"include",
        reason:"RCT, adultos críticos, VL vs DL, desenlace éxito al primer intento. Cumple todos los criterios."
      },
      {
        title:"Observational cohort comparing videolaryngoscopy and direct laryngoscopy in the ICU",
        abstract:"Estudio de COHORTE observacional (no aleatorizado) que compara ambas técnicas en pacientes de UCI según la elección del clínico.",
        decision:"exclude",
        reason:"Diseño observacional, no RCT. Se excluye por el criterio de diseño."
      },
      {
        title:"Videolaryngoscopy vs direct laryngoscopy in elective surgery in healthy adults: a randomized trial",
        abstract:"RCT en pacientes adultos SANOS sometidos a cirugía ELECTIVA programada, sin criterios de enfermedad crítica.",
        decision:"exclude",
        reason:"Aunque es un RCT y compara VL vs DL, la población NO es de pacientes críticos. Se excluye por población."
      },
      {
        title:"Pediatric RCT: videolaryngoscopy versus direct laryngoscopy in children under 5 years",
        abstract:"RCT en NIÑOS menores de 5 años que comparó VL y DL para intubación.",
        decision:"exclude",
        reason:"Población pediátrica; la revisión se centra en adultos críticos. Se excluye por población."
      },
      {
        title:"Multicenter randomized trial of first-attempt intubation success with videolaryngoscopy in critically ill adults in the emergency department",
        abstract:"RCT en servicios de urgencias con adultos en estado crítico; desenlace primario éxito al primer intento comparando VL y DL.",
        decision:"include",
        reason:"RCT, adultos críticos, VL vs DL, desenlace primario relevante. Cumple todos los criterios."
      },
      {
        title:"Narrative review of airway management devices in critical care",
        abstract:"Revisión NARRATIVA (no un estudio primario) que discute distintos dispositivos de manejo de vía aérea sin datos aleatorizados propios.",
        decision:"exclude",
        reason:"Es una revisión narrativa, no un estudio primario aleatorizado. Se excluye por tipo de publicación/diseño."
      }
    ]
  }
];

/* Exponer datos globalmente para app.js */
window.TRIVIA_DATA = { SECTIONS, QUESTIONS, SCREENING };
