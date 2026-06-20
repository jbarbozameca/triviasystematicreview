/* ============================================================
   PREGUNTAS COMPLEMENTARIAS (se añaden al banco principal)
   ============================================================ */
(function(){
  const EXTRA = [
  /* ---- PICO ---- */
  {
    sec:"pico", lvl:"basico",
    q:"En una pregunta de tipo PECO (estudios observacionales), la «E» representa:",
    opts:["Efecto","Exposición","Especificidad","Error estándar"],
    correct:1,
    fb:[
      "El efecto es el resultado de la asociación, no la «E» del marco.",
      "Correcto: en PECO, la «E» es la Exposición (sustituye a la Intervención de PICO).",
      "La especificidad es una métrica diagnóstica, no un componente de PECO.",
      "El error estándar es una medida de precisión, no parte del marco PECO."
    ],
    why:"Para estudios observacionales se usa PECO: Población, Exposición, Comparador, Outcome."
  },
  {
    sec:"pico", lvl:"avanzado",
    q:"Para el meta-análisis de factores psicológicos en el trastorno de síntomas somáticos (EJEMPLO 3), la pregunta comparaba pacientes con SSD frente a controles sanos. ¿Qué componente PICO representa 'controles sanos'?",
    opts:["Población (P)","Intervención (I)","Comparador (C)","Desenlace (O)"],
    correct:2,
    fb:[
      "La población son los pacientes con SSD; los sanos son el grupo de comparación.",
      "No hay una intervención: es un estudio de asociación, no experimental.",
      "Correcto: los controles sanos son el comparador frente al cual se contrastan los factores psicológicos.",
      "El desenlace es la diferencia en factores psicológicos (p. ej., SMD de depresión), no el grupo control."
    ],
    src:"EJEMPLO 3. Factores psicológicos en SSD"
  },
  /* ---- ELEGIBILIDAD ---- */
  {
    sec:"elegibilidad", lvl:"intermedio",
    q:"En la revisión de cordón umbilical (UCM), se incluyeron RCTs que comparaban UCM frente a pinzamiento inmediato (ICC), pinzamiento tardío (DCC) o ninguna intervención. Esto ilustra que el COMPARADOR puede:",
    opts:["Ser solo placebo","Incluir varios comparadores definidos a priori","No definirse nunca","Ser siempre el mismo fármaco"],
    correct:1,
    fb:[
      "El comparador no tiene que ser placebo; aquí son técnicas de pinzamiento.",
      "Correcto: se pueden definir varios comparadores a priori (ICC, DCC, ninguno), y analizarlos estratificadamente.",
      "El comparador siempre se define en los criterios de elegibilidad.",
      "El comparador puede variar; aquí son intervenciones obstétricas, no un fármaco."
    ],
    src:"S4. Umbilical cord milking (UCM vs ICC/DCC)"
  },
  {
    sec:"elegibilidad", lvl:"avanzado",
    q:"Definir la 'ventana temporal' de búsqueda (p. ej., estudios publicados después de 2009) como criterio de elegibilidad es válido cuando:",
    opts:["Nunca, siempre sesga","Hay una justificación conceptual (p. ej., un cambio de definición diagnóstica o de criterios)","Solo si reduce el número de estudios","Solo en meta-análisis en red"],
    correct:1,
    fb:[
      "No siempre sesga: puede estar justificado metodológicamente.",
      "Correcto: en EJEMPLO 3 se incluyeron estudios posteriores a 2009 por el cambio de criterios diagnósticos (DSM-5/ICD-11). La restricción temporal justificada es válida.",
      "Reducir el número de estudios no es una justificación válida por sí misma.",
      "No es exclusivo del network meta-analysis."
    ],
    src:"EJEMPLO 3 (estudios después de 2009 por cambio de criterios diagnósticos)"
  },
  /* ---- BÚSQUEDA ---- */
  {
    sec:"busqueda", lvl:"avanzado",
    q:"El registro prospectivo del protocolo de una revisión sistemática (p. ej., en PROSPERO) sirve principalmente para:",
    opts:["Acelerar la publicación","Reducir el sesgo de reporte y la duplicación de revisiones, aumentando la transparencia","Garantizar significancia","Evitar la evaluación por pares"],
    correct:1,
    fb:[
      "No acelera necesariamente la publicación.",
      "Correcto: el registro a priori reduce el sesgo de reporte de resultados, evita duplicaciones y aumenta la transparencia.",
      "No tiene relación con la significancia estadística.",
      "No reemplaza ni evita la revisión por pares."
    ]
  },
  {
    sec:"busqueda", lvl:"basico",
    q:"La literatura gris (gray literature) incluye:",
    opts:["Solo artículos retractados","Tesis, informes, actas de congresos y registros de ensayos no publicados convencionalmente","Únicamente artículos en inglés","Editoriales de revistas de alto impacto"],
    correct:1,
    fb:[
      "La literatura gris no se refiere a retractaciones.",
      "Correcto: abarca tesis, informes técnicos, actas, registros de ensayos y otros documentos no publicados por las vías editoriales habituales.",
      "No se define por idioma.",
      "Las editoriales publicadas no son literatura gris."
    ],
    why:"Buscar literatura gris ayuda a mitigar el sesgo de publicación."
  },
  /* ---- SELECCIÓN ---- */
  {
    sec:"seleccion", lvl:"avanzado",
    q:"El índice kappa de Cohen, usado en el cribado, mide:",
    opts:["La magnitud del efecto","La concordancia entre revisores más allá del azar","La heterogeneidad estadística","El sesgo de publicación"],
    correct:1,
    fb:[
      "No mide la magnitud del efecto del meta-análisis.",
      "Correcto: kappa cuantifica el acuerdo entre dos revisores corrigiendo por el acuerdo esperado por azar.",
      "La heterogeneidad se mide con I²/Q, no con kappa.",
      "El sesgo de publicación se evalúa con funnel/Egger."
    ]
  },
  {
    sec:"seleccion", lvl:"basico",
    q:"Cuando se identifican publicaciones DUPLICADAS del mismo estudio con distintos tamaños muestrales, la recomendación habitual es:",
    opts:["Incluir todas como estudios independientes","Conservar el reporte con el mayor número de participantes/datos más completos","Eliminar el estudio por completo","Promediar los resultados"],
    correct:1,
    fb:[
      "Incluirlas todas duplicaría datos y daría peso excesivo a un mismo estudio.",
      "Correcto: se conserva la publicación con la muestra más grande o los datos más completos, evitando doble conteo.",
      "No se elimina el estudio válido; solo se evita la duplicación.",
      "No se promedian publicaciones del mismo estudio."
    ],
    src:"EJEMPLO 1 conservó el resultado con mayor número de individuos ante duplicados"
  },
  /* ---- EXTRACCIÓN ---- */
  {
    sec:"extraccion", lvl:"intermedio",
    q:"Para combinar resultados de un mismo estudio que reporta varios subgrupos como si fueran estudios separados, hay que tener cuidado con:",
    opts:["Nada, siempre es correcto","El problema de la doble inclusión / unidad de análisis (dar peso excesivo a un mismo estudio)","La conversión de medianas","El idioma de publicación"],
    correct:1,
    fb:[
      "No siempre es correcto; puede violar la independencia de los datos.",
      "Correcto: tratar subgrupos del mismo estudio como independientes infla su peso (problema de unidad de análisis).",
      "No es un problema de conversión de medianas.",
      "El idioma no es la cuestión aquí."
    ]
  },
  /* ---- RIESGO DE SESGO ---- */
  {
    sec:"sesgo", lvl:"intermedio",
    q:"La herramienta ROBINS-I está diseñada para evaluar el riesgo de sesgo en:",
    opts:["RCTs","Estudios no aleatorizados de intervenciones","Revisiones sistemáticas","Estudios de prevalencia"],
    correct:1,
    fb:[
      "Para RCTs se usa RoB 2.0.",
      "Correcto: ROBINS-I (Risk Of Bias In Non-randomized Studies of Interventions) evalúa estudios no aleatorizados de intervención.",
      "Para revisiones se usa AMSTAR-2.",
      "Para prevalencia se usan herramientas JBI específicas."
    ],
    why:"ROBINS-I incluye un dominio de confusión, ausente en RoB 2.0."
  },
  {
    sec:"sesgo", lvl:"avanzado",
    q:"En la escala NOS, el dominio de 'Comparabilidad' se relaciona principalmente con:",
    opts:["El cegamiento del paciente","El control de factores de confusión (ajuste por covariables)","La aleatorización","El tamaño del efecto"],
    correct:1,
    fb:[
      "El cegamiento es propio de los RCTs, no del dominio de comparabilidad de la NOS.",
      "Correcto: la 'Comparabilidad' premia el control de confusión (p. ej., ajuste o emparejamiento por factores relevantes).",
      "La NOS evalúa estudios observacionales; no hay aleatorización que valorar.",
      "El tamaño del efecto no es lo que evalúa este dominio de calidad."
    ],
    src:"NEWCASTLE OTTAWA SCALE (Selección, Comparabilidad, Desenlace/Exposición)"
  },
  {
    sec:"sesgo", lvl:"basico",
    q:"El cegamiento (blinding) de pacientes y evaluadores en un RCT busca reducir principalmente:",
    opts:["El sesgo de confusión","El sesgo de desempeño y de detección","El sesgo de publicación","La heterogeneidad"],
    correct:1,
    fb:[
      "La confusión se controla con la aleatorización, no con el cegamiento.",
      "Correcto: el cegamiento reduce el sesgo de desempeño (comportamiento diferencial) y de detección (medición diferencial del desenlace).",
      "El sesgo de publicación es un fenómeno a nivel de la literatura, no del cegamiento dentro de un estudio.",
      "El cegamiento no modifica la heterogeneidad entre estudios."
    ]
  },
  /* ---- MEDIDAS DE EFECTO ---- */
  {
    sec:"efecto", lvl:"intermedio",
    q:"Un Hazard Ratio (HR) se utiliza típicamente cuando el desenlace es:",
    opts:["Una proporción única","El TIEMPO hasta que ocurre un evento (análisis de supervivencia)","Una media continua","Una correlación"],
    correct:1,
    fb:[
      "Una proporción simple se analiza con RR/OR, no con HR.",
      "Correcto: el HR proviene de modelos de supervivencia (p. ej., Cox) y compara la tasa instantánea del evento a lo largo del tiempo.",
      "Una media continua se compara con MD/SMD.",
      "La correlación se mide con r, no con HR."
    ]
  },
  {
    sec:"efecto", lvl:"avanzado",
    q:"El Número Necesario a Tratar (NNT) se interpreta como:",
    opts:["El número de estudios necesarios para el meta-análisis","El número de pacientes que deben tratarse para evitar un evento adverso adicional","El error estándar del efecto","La heterogeneidad residual"],
    correct:1,
    fb:[
      "No se refiere al número de estudios.",
      "Correcto: el NNT es el inverso de la reducción absoluta del riesgo; indica cuántos pacientes tratar para prevenir un evento.",
      "No es una medida de precisión como el error estándar.",
      "No mide heterogeneidad."
    ]
  },
  {
    sec:"efecto", lvl:"basico",
    q:"En el estudio de sacubitrilo/valsartán, la duplicación de creatinina sérica fue RR 0.77 (IC95% 0.72–0.83). Esto significa que el riesgo de duplicar la creatinina:",
    opts:["Aumentó un 77%","Se redujo aproximadamente un 23% frente al comparador","No cambió","Se redujo un 77%"],
    correct:1,
    fb:[
      "Un RR de 0.77 no implica aumento.",
      "Correcto: RR 0.77 ≈ reducción relativa del 23% (1 − 0.77) del riesgo de duplicar la creatinina.",
      "Sí cambió: el IC no cruza 1, es significativo.",
      "La reducción es del 23%, no del 77%; el RR no es la reducción directa."
    ],
    src:"S5. Sacubitrilo/valsartán (RR 0.77, certeza moderada)"
  },
  /* ---- MODELOS ---- */
  {
    sec:"modelos", lvl:"avanzado",
    q:"El método de Mantel-Haenszel se emplea frecuentemente en meta-análisis de:",
    opts:["Datos continuos con SMD","Datos dicotómicos (RR/OR), especialmente con eventos poco frecuentes","Análisis de supervivencia exclusivamente","Estudios de prevalencia"],
    correct:1,
    fb:[
      "Para datos continuos se usan métodos de varianza inversa, no Mantel-Haenszel.",
      "Correcto: Mantel-Haenszel es robusto para combinar datos dicotómicos (RR/OR), útil con eventos escasos.",
      "No es exclusivo de supervivencia.",
      "No es el método estándar para prevalencias."
    ]
  },
  {
    sec:"modelos", lvl:"intermedio",
    q:"En meta-análisis, ponderar cada estudio por el inverso de su varianza implica que:",
    opts:["Todos los estudios pesan igual","Los estudios más precisos (mayor n, menor varianza) reciben mayor peso","Los estudios más antiguos pesan más","El peso depende del factor de impacto"],
    correct:1,
    fb:[
      "No pesan igual: ese sería un promedio simple, que no se usa.",
      "Correcto: la ponderación por varianza inversa da más peso a los estudios más precisos.",
      "La antigüedad no determina el peso estadístico.",
      "El factor de impacto no interviene en el peso."
    ]
  },
  /* ---- HETEROGENEIDAD ---- */
  {
    sec:"heterogeneidad", lvl:"avanzado",
    q:"El INTERVALO DE PREDICCIÓN en un meta-análisis de efectos aleatorios informa sobre:",
    opts:["El rango donde probablemente caerá el efecto verdadero de un nuevo estudio futuro","El número de estudios","El sesgo de publicación","La sensibilidad diagnóstica"],
    correct:0,
    fb:[
      "Correcto: el intervalo de predicción estima el rango plausible del efecto en un escenario/estudio futuro, incorporando la heterogeneidad (τ²).",
      "No cuenta estudios.",
      "No evalúa sesgo de publicación.",
      "No se relaciona con métricas diagnósticas."
    ],
    why:"A diferencia del IC del efecto medio, el intervalo de predicción refleja la dispersión de los efectos verdaderos."
  },
  {
    sec:"heterogeneidad", lvl:"basico",
    q:"La heterogeneidad CLÍNICA se refiere a diferencias entre estudios en:",
    opts:["El método estadístico usado","Población, intervención, comparador o desenlaces (variabilidad real entre estudios)","El tipo de gráfico","El número de bases de datos"],
    correct:1,
    fb:[
      "El método estadístico es una decisión analítica, no heterogeneidad clínica.",
      "Correcto: la heterogeneidad clínica surge de diferencias en participantes, intervenciones, comparadores, desenlaces o contextos.",
      "El tipo de gráfico no genera heterogeneidad.",
      "El número de bases de datos no es una fuente de heterogeneidad clínica."
    ]
  },
  /* ---- PUBLICACIÓN ---- */
  {
    sec:"publicacion", lvl:"basico",
    q:"El sesgo de publicación ocurre porque:",
    opts:["Los estudios con resultados positivos/significativos tienden a publicarse más que los negativos","Las revistas publican al azar","Los meta-análisis inventan estudios","Los autores nunca registran protocolos"],
    correct:0,
    fb:[
      "Correcto: los estudios con resultados estadísticamente significativos o 'positivos' se publican más, distorsionando la evidencia disponible.",
      "La publicación no es aleatoria; precisamente está sesgada hacia lo positivo.",
      "Los meta-análisis no inventan estudios.",
      "El registro de protocolos es una buena práctica, no la causa del sesgo."
    ]
  },
  {
    sec:"publicacion", lvl:"avanzado",
    q:"Una asimetría del funnel plot NO siempre se debe a sesgo de publicación. Otra causa posible es:",
    opts:["Heterogeneidad real o efecto de estudios pequeños de baja calidad","Que el efecto es exactamente nulo","Que se usó efectos aleatorios","Que hay demasiados estudios grandes"],
    correct:0,
    fb:[
      "Correcto: la asimetría puede reflejar heterogeneidad genuina, diferencias de calidad o 'small-study effects', no solo sesgo de publicación.",
      "Un efecto nulo no explica por sí mismo la asimetría.",
      "El modelo estadístico elegido no causa la asimetría del gráfico.",
      "El exceso de estudios grandes tendería a simetría, no asimetría."
    ]
  },
  /* ---- FOREST ---- */
  {
    sec:"forest", lvl:"intermedio",
    q:"En un forest plot de diferencias de medias (MD/SMD), la línea vertical del nulo se ubica en:",
    opts:["1","0","0.5","Depende del número de estudios"],
    correct:1,
    fb:[
      "El 1 es el nulo para razones (RR/OR/HR), no para diferencias.",
      "Correcto: para diferencias (MD/SMD/RD) el valor nulo es 0.",
      "No es 0.5.",
      "El nulo no depende del número de estudios."
    ]
  },
  {
    sec:"forest", lvl:"avanzado",
    q:"Si en un forest plot el rombo (efecto combinado) queda completamente a la izquierda de la línea del nulo y NO la toca, se concluye que:",
    opts:["El efecto combinado no es significativo","Hay un efecto combinado estadísticamente significativo en esa dirección","El meta-análisis está mal hecho","Hay sesgo de publicación seguro"],
    correct:1,
    fb:[
      "Si no toca el nulo, sí es significativo.",
      "Correcto: un rombo que no cruza la línea del nulo indica un efecto combinado estadísticamente significativo en la dirección donde se ubica.",
      "No implica error de método.",
      "La posición del rombo no demuestra sesgo de publicación."
    ]
  },
  /* ---- GRADE ---- */
  {
    sec:"grade", lvl:"avanzado",
    q:"En GRADE, los estudios OBSERVACIONALES (p. ej., cohortes) parten en certeza baja, pero pueden SUBIR de nivel por:",
    opts:["Tener muchos autores","Una magnitud de efecto grande, gradiente dosis-respuesta o confusión que reforzaría el efecto","Estar en inglés","Usar efectos fijos"],
    correct:1,
    fb:[
      "El número de autores no influye en la certeza.",
      "Correcto: GRADE permite subir la certeza de observacionales ante efecto grande, gradiente dosis-respuesta o confusión plausible que iría en contra del efecto observado.",
      "El idioma no afecta la certeza GRADE.",
      "El modelo estadístico no es un criterio para subir certeza."
    ]
  },
  {
    sec:"grade", lvl:"basico",
    q:"La 'imprecisión' como motivo para bajar la certeza en GRADE se relaciona típicamente con:",
    opts:["Intervalos de confianza amplios y/o pocos eventos","Demasiados estudios","Alta calidad metodológica","Resultados muy consistentes"],
    correct:0,
    fb:[
      "Correcto: IC amplios, tamaño muestral pequeño o escasos eventos generan imprecisión.",
      "Muchos estudios suelen aumentar la precisión, no disminuirla.",
      "La alta calidad no es motivo para bajar la certeza.",
      "La consistencia es lo opuesto a la inconsistencia; no baja la certeza."
    ]
  },
  /* ---- TIPOS ---- */
  {
    sec:"tipos", lvl:"avanzado",
    q:"Un meta-análisis en RED (network meta-analysis) permite:",
    opts:["Solo comparaciones directas","Comparar múltiples intervenciones combinando evidencia directa e indirecta","Evitar la evaluación del riesgo de sesgo","Prescindir de la búsqueda sistemática"],
    correct:1,
    fb:[
      "No se limita a comparaciones directas; esa es su principal ventaja.",
      "Correcto: el NMA integra evidencia directa e indirecta para comparar y jerarquizar varias intervenciones simultáneamente.",
      "Sigue requiriendo evaluación del riesgo de sesgo.",
      "Requiere una búsqueda sistemática rigurosa, como toda revisión."
    ],
    why:"El supuesto clave del NMA es la transitividad/coherencia entre comparaciones."
  },
  {
    sec:"tipos", lvl:"intermedio",
    q:"Una revisión de exactitud diagnóstica (como la lógica detrás de QUADAS-2) combina típicamente:",
    opts:["Riesgos relativos","Sensibilidad y especificidad (a menudo mediante modelos bivariados/HSROC)","Diferencias de medias","Hazard ratios"],
    correct:1,
    fb:[
      "Los RR son para estudios de intervención/asociación, no de exactitud diagnóstica.",
      "Correcto: las revisiones diagnósticas sintetizan sensibilidad y especificidad, frecuentemente con modelos bivariados o curvas HSROC.",
      "Las MD son para desenlaces continuos.",
      "Los HR son para tiempo-a-evento."
    ]
  },
  {
    sec:"tipos", lvl:"basico",
    q:"Una revisión NARRATIVA tradicional se diferencia de una revisión sistemática en que:",
    opts:["La narrativa sigue métodos explícitos y reproducibles","La narrativa no necesariamente usa una búsqueda exhaustiva ni criterios explícitos y reproducibles","Ambas son idénticas","La sistemática nunca evalúa sesgos"],
    correct:1,
    fb:[
      "La narrativa suele carecer de métodos explícitos; eso caracteriza a la sistemática.",
      "Correcto: la revisión narrativa puede ser selectiva y no reproducible; la sistemática define métodos explícitos a priori.",
      "No son idénticas.",
      "La sistemática sí evalúa el riesgo de sesgo."
    ]
  },
  /* ---- CASOS ---- */
  {
    sec:"casos", lvl:"intermedio",
    q:"En la umbrella review de curcumina (S6), la curcumina redujo LDL-c y triglicéridos alcanzando la 'diferencia mínima clínicamente importante' (MCID), pero la reducción de colesterol total NO. ¿Qué enseña esto?",
    opts:["Significancia estadística = relevancia clínica siempre","Un efecto puede ser estadísticamente significativo sin alcanzar relevancia clínica (MCID)","El MCID es lo mismo que el valor p","La curcumina no tuvo ningún efecto"],
    correct:1,
    fb:[
      "No siempre coinciden: ese es justamente el punto.",
      "Correcto: un resultado puede ser estadísticamente significativo y aun así no alcanzar el umbral de importancia clínica (MCID).",
      "El MCID es un umbral clínico, distinto del valor p estadístico.",
      "Sí tuvo efectos significativos en varios lípidos; el matiz es la relevancia clínica."
    ],
    src:"S6. Umbrella review de curcumina (MCID en LDL-c y TG)"
  },
  {
    sec:"casos", lvl:"avanzado",
    q:"El estudio de alopurinol y demencia (EJEMPLO 2) concluyó cautelosamente pese a un OR significativo (0.91; IC 0.87–0.95). El principal motivo de cautela fue:",
    opts:["El I² era altísimo","Solo se incluyeron 4 estudios de casos y controles y el análisis de sensibilidad perdió significancia","El OR era mayor que 1","No se evaluó el riesgo de sesgo"],
    correct:1,
    fb:[
      "El I² fue 0%, no alto.",
      "Correcto: con solo 4 estudios y un análisis de sensibilidad que perdió significancia, no se podían sacar conclusiones firmes pese al OR significativo.",
      "El OR era menor que 1 (protector aparente).",
      "Sí se evaluó el riesgo de sesgo con la NOS."
    ],
    src:"EJEMPLO 2. Alopurinol y demencia"
  },
  {
    sec:"casos", lvl:"intermedio",
    q:"En el meta-análisis de cordón umbilical (S4), la UCM mejoró desenlaces INTERMEDIOS (hemoglobina, presión arterial) pero no los desenlaces clínicos duros (mortalidad, IVH). La conclusión razonable es:",
    opts:["La UCM debe ser el estándar de cuidado","Los beneficios en marcadores intermedios no se tradujeron en mejoría de desenlaces clínicos importantes","La UCM es perjudicial","No se puede concluir nada"],
    correct:1,
    fb:[
      "Los autores precisamente NO la recomiendan como estándar.",
      "Correcto: mejoraron variables intermedias, pero sin impacto demostrado en mortalidad o IVH; por eso no se recomienda como estándar.",
      "No se demostró daño.",
      "Sí se concluye: distinción entre desenlaces intermedios y clínicos."
    ],
    src:"S4. Umbilical cord milking"
  }
  ];
  window.TRIVIA_DATA.QUESTIONS.push.apply(window.TRIVIA_DATA.QUESTIONS, EXTRA);
})();
