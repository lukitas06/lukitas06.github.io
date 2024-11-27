# Enfermedad Renal Crónica

## Introducción

La Enfermedad Renal Crónica (ERC) es una condición médica caracterizada por la incapacidad de los riñones para filtrar la sangre de manera adecuada. Esta enfermedad, clasificada como crónica debido a su progresión lenta y asintomática en etapas iniciales, representa un desafío significativo para los sistemas de salud pública y para la calidad de vida de los pacientes. El objetivo de este estudio es implementar métodos de predicción temprana de la ERC utilizando técnicas de machine learning, con un enfoque en modelos eficaces y no invasivos.

---

## Análisis del Problema

La ERC afecta aproximadamente al 10% de la población mundial, con una mayor prevalencia en países de ingresos bajos y medios. Factores como diabetes mellitus, hipertensión arterial y glomerulonefritis son las principales causas de esta enfermedad. Además, la prevalencia varía según género, región y acceso a servicios médicos.

Los métodos tradicionales para diagnosticar ERC incluyen pruebas de filtración glomerular estimada (eGFR), análisis de orina y procedimientos más invasivos como biopsias renales. Sin embargo, la falta de diagnóstico temprano se traduce en tratamientos menos efectivos y mayores complicaciones.

---

## Preparación de los Datos

### Tipo de Problema
El problema se clasifica como un caso de aprendizaje supervisado, específicamente de clasificación binaria. La variable objetivo es `class`, que indica la presencia (`ckd`) o ausencia (`notckd`) de la enfermedad.

### Dataset Utilizado
Se empleó el dataset "Chronic Kidney Disease" del repositorio UCI, ampliamente utilizado en estudios similares. La elección de este dataset se basó en su mayor cantidad de datos en comparación con otras alternativas.

### Análisis de Atributos
El dataset contiene 24 atributos, que incluyen variables numéricas y categóricas relacionadas con parámetros físicos, químicos y clínicos. A continuación, se presentan algunos de los atributos principales:

## Análisis de Atributos

### Atributos del Dataset

- **age**  
  - **Nombre completo**: Edad  
  - **Descripción**: Edad del paciente en años  
  - **Tipo**: Numérico  
  - **Rango**: 2 - 90  

- **bp**  
  - **Nombre completo**: Presión arterial  
  - **Descripción**: Medición de la presión arterial en mmHg  
  - **Tipo**: Numérico  
  - **Rango**: 50 - 180  

- **sg**  
  - **Nombre completo**: Gravedad específica de la orina (Specific Gravity)  
  - **Descripción**: Indicador de la concentración de solutos en la orina, usado para evaluar la función renal  
  - **Tipo**: Nominal  
  - **Valores**: (1.005, 1.010, 1.015, 1.020, 1.025)  

- **al**  
  - **Nombre completo**: Albúmina  
  - **Descripción**: Nivel de albúmina en la orina, niveles elevados pueden indicar proteinuria, un signo de enfermedad renal  
  - **Tipo**: Nominal  
  - **Valores**: (0, 1, 2, 3, 4, 5)  

- **su**  
  - **Nombre completo**: Azúcar en la orina (Sugar)  
  - **Descripción**: Presencia de glucosa en la orina, niveles elevados están relacionados con diabetes  
  - **Tipo**: Nominal  
  - **Valores**: (0, 1, 2, 3, 4, 5)  

- **rbc**  
  - **Nombre completo**: Glóbulos rojos (Red Blood Cells)  
  - **Descripción**: Conteo de glóbulos rojos en la orina, puede indicar hematuria (sangre en la orina)  
  - **Tipo**: Nominal  
  - **Valores**: (normal, abnormal)  

- **pc**  
  - **Nombre completo**: Células del sistema inmune muertas (Pus Cells)  
  - **Descripción**: Normalidad de dichas células en el cuerpo del participante  
  - **Tipo**: Nominal  
  - **Valores**: (normal, abnormal)  

- **pcc**  
  - **Nombre completo**: Grupos de células del sistema inmune muertas  
  - **Descripción**: Presencia de grupos de dichas células en la orina. Puede indicar que hay una infección  
  - **Tipo**: Nominal  
  - **Valores**: (present, notpresent)  

- **ba**  
  - **Nombre completo**: Presencia de bacterias (Bacteria)  
  - **Descripción**: Indicador de infección bacteriana en el tracto urinario  
  - **Tipo**: Nominal  
  - **Valores**: (present, notpresent)  

- **bgr**  
  - **Nombre completo**: Nivel de glucosa en sangre (Blood Glucose Random)  
  - **Descripción**: Nivel de glucosa en sangre en una muestra aleatoria, importante para evaluar diabetes. Medido en mgs/dl  
  - **Tipo**: Numérico  
  - **Rango**: 22 - 490  

- **bu**  
  - **Nombre completo**: Urea en sangre (Blood Urea)  
  - **Descripción**: Indicador de función renal, niveles altos pueden significar insuficiencia renal. Se mide en mgs/dl  
  - **Tipo**: Numérico  
  - **Rango**: 2 - 391  

- **sc**  
  - **Nombre completo**: Creatinina en sangre (Serum Creatinine)  
  - **Descripción**: Indicador crítico de función renal, niveles elevados indican daño renal. Medido en mgs/dl  
  - **Tipo**: Numérico  
  - **Rango**: 0.4 - 76  

- **sod**  
  - **Nombre completo**: Sodio sérico (Sodium)  
  - **Descripción**: Niveles de sodio en la sangre, desequilibrio puede estar relacionado con disfunción renal. Medido en mEq/L  
  - **Tipo**: Numérico  
  - **Rango**: 4.5 - 163  

- **pot**  
  - **Nombre completo**: Potasio sérico (Potassium)  
  - **Descripción**: Niveles de potasio en la sangre, niveles elevados pueden causar complicaciones cardíacas. Medido en mEq/L  
  - **Tipo**: Numérico  
  - **Rango**: 2.5 - 47  

- **hemo**  
  - **Nombre completo**: Hemoglobina  
  - **Descripción**: Nivel de hemoglobina en la sangre, niveles bajos pueden indicar anemia, común en pacientes con ERC. Medido en gms  
  - **Tipo**: Numérico  
  - **Rango**: 3.1 - 17.8  

- **pcv**  
  - **Nombre completo**: Volumen corpuscular (Packed Cell Volume)  
  - **Descripción**: Proporción de células sanguíneas en el volumen total de sangre  
  - **Tipo**: Numérico  
  - **Rango**: 9 - 54  

- **wbcc**  
  - **Nombre completo**: Conteo de glóbulos blancos (White Blood Cell Count)  
  - **Descripción**: Indicador de respuesta inmune, niveles altos pueden indicar infección. Medido en células/cmm  
  - **Tipo**: Numérico  
  - **Rango**: 2200 - 26400  

- **rbcc**  
  - **Nombre completo**: Conteo de glóbulos rojos (Red Blood Cell Count)  
  - **Descripción**: Número total de glóbulos rojos en la sangre, sus niveles bajos pueden indicar anemia. Medido en millones/cmm  
  - **Tipo**: Numérico  
  - **Rango**: 2.1 - 8  

- **htn**  
  - **Nombre completo**: Hipertensión (Hypertension)  
  - **Descripción**: Presencia de hipertensión arterial  
  - **Tipo**: Nominal  
  - **Valores**: (yes, no)  

- **dm**  
  - **Nombre completo**: Diabetes mellitus  
  - **Descripción**: Indica si el paciente tiene diabetes, uno de los principales factores de riesgo para ERC  
  - **Tipo**: Nominal  
  - **Valores**: (yes, no)  

- **cad**  
  - **Nombre completo**: Enfermedad coronaria (Coronary Artery Disease)  
  - **Descripción**: Indica si el paciente tiene antecedentes de enfermedad coronaria  
  - **Tipo**: Nominal  
  - **Valores**: (yes, no)  

- **appet**  
  - **Nombre completo**: Apetito (Appetite)  
  - **Descripción**: Pérdida de apetito, un síntoma común en la enfermedad renal avanzada  
  - **Tipo**: Nominal  
  - **Valores**: (good, poor)  

- **pe**  
  - **Nombre completo**: Edema periférico (Pedal Edema)  
  - **Descripción**: Indica si el paciente tiene acumulación de líquido en los pies, un signo de insuficiencia renal o cardíaca  
  - **Tipo**: Nominal  
  - **Valores**: (yes, no)  

- **ane**  
  - **Nombre completo**: Anemia  
  - **Descripción**: Indica si el paciente tiene anemia  
  - **Tipo**: Nominal  
  - **Valores**: (yes, no)  

- **class**  
  - **Nombre completo**: Diagnóstico de ERC  
  - **Descripción**: Variable objetivo que clasifica al paciente como con enfermedad renal crónica (`ckd`) o sin ella (`notckd`)  
  - **Distribución**: 250 (`ckd`), 150 (`notckd`)


---

### Manejo de valores faltantes en el dataset

#### Reemplazo de valores faltantes en atributos nominales

Para los atributos `rbc` (Red Blood Cells) y `pc` (Pus Cells), que son de tipo nominal, se decidió imputar los valores faltantes con el **valor predeterminado "normal"**. Este enfoque se tomó ya que el valor **"normal"** representa el estado más común en estos atributos dentro del contexto médico.

**Fundamentación**:
Este método asegura que los valores imputados no desvirtúen los resultados y mantiene consistencia dentro de la base de datos.

#### Reemplazo de valores faltantes en atributos reales

Los valores faltantes de los atributos numéricos (reales) fueron reemplazados por el **promedio** (media) de cada atributo.

**Fundamentación**:
Este método minimiza el sesgo que podría generarse al eliminar filas completas.

#### Eliminación de registros con valores faltantes significativos

Se decidió eliminar registros con valores faltantes en los atributos: `age`, `bp`, `pcc`, `ba`, `htn`, `dm`, `cad`, `appet`, `pe` y `ane`. Estos atributos, aunque importantes, tenían una proporción de valores faltantes baja en comparación con el total del dataset, lo que justificó la eliminación de las filas completas para evitar sesgos en la imputación.

**Fundamentación**:
La eliminación es preferible cuando la cantidad de registros faltantes es pequeña, ya que su impacto en el tamaño del dataset es mínimo.

---

### Identificación de Outliers
A través del análisis de boxplots, se identificaron valores atípicos en:
- **Extremos bajos**: `hemo`, `pcv`, `rbcc`. Estos valores se asocian con anemia y problemas renales.
- **Extremos altos**: `pot`, `bgr`, `sc`. Indicadores de disfunción renal avanzada.

---
### Distribuciones de las Variables y Transformaciones Aplicadas

Durante el análisis inicial de las distribuciones de las variables numéricas en el dataset, se observó que algunas presentaban sesgos significativos, lo que podría impactar negativamente en el desempeño de los modelos predictivos. Las observaciones y acciones tomadas son las siguientes:

#### Distribuciones Observadas

1. **Variables con Sesgo ("Skewed")**:
   - *age* (Edad)
   - *bgr* (Blood Glucose Random)
   - *bu* (Blood Urea)
   - *hemo* (Hemoglobina)
   - *pcv* (Packed Cell Volume)

   Estas variables mostraron un sesgo claro en sus distribuciones:
   - **Sesgo Positivo**: Valores con una cola más larga hacia la derecha (*bgr*, *bu*).
   - **Sesgo Negativo**: Valores con una cola más larga hacia la izquierda (*age*, *hemo*, *pcv*).

2. **Variables Sin Distribución Conocida**:
   Las demás variables numéricas no presentaron patrones de distribución evidentes y se mantuvieron sin transformaciones específicas para normalizarlas.

#### Técnicas de Transformación Aplicadas

Para las variables identificadas con sesgo, se aplicaron las siguientes transformaciones para aproximarlas a una distribución normal y mejorar su utilidad en los modelos predictivos:

1. **Logaritmo Neperiano**:
   - Aplicado a variables con sesgo positivo (*bgr*, *bu*).
   - Transformación: `ln(valor)`.
   - Justificación: Reducir la cola hacia la derecha y concentrar los valores hacia el centro.

2. **Elevación al Cuadrado**:
   - Aplicado a variables con sesgo negativo (*age*, *hemo*, *pcv*).
   - Transformación: `valor^2`.
   - Justificación: Reducir la cola hacia la izquierda y expandir los valores centrales.

#### Estandarización de Variables

Una vez transformadas, todas las variables numéricas fueron estandarizadas para garantizar que los modelos predictivos trabajen con datos en la misma escala. Este proceso fue necesario para evitar sesgos derivados de diferencias en las magnitudes absolutas de los valores.

## Correlaciones entre Atributos

En el análisis de correlaciones entre las variables, se observaron relaciones significativas que explican cómo ciertos atributos están interconectados dentro del dataset. A continuación, se detallan las correlaciones más destacadas:

1. **Hemoglobina (hemo) y Volumen Corpuscular (pcv):**  
   Existe una correlación alta entre ambos atributos. Esto tiene sentido biológico, ya que la hemoglobina es una proteína presente en los glóbulos rojos, y un incremento en el número de glóbulos rojos eleva proporcionalmente el volumen sanguíneo ocupado por estas células.
   - **Razón Biológica:** A mayor cantidad de glóbulos rojos, mayor será la cantidad de hemoglobina transportada en la sangre.

2. **Volumen Corpuscular (pcv) y Conteo de Glóbulos Rojos (rbcc):**  
   Estos atributos están estrechamente relacionados, ya que ambos miden características específicas de los glóbulos rojos. Un mayor conteo de glóbulos rojos conduce a un incremento proporcional del porcentaje del volumen sanguíneo ocupado por estas células.

3. **Hemoglobina (hemo) y Conteo de Glóbulos Rojos (rbcc):**  
   De forma similar, estos atributos presentan una correlación significativa, ya que el nivel de hemoglobina es dependiente del conteo total de glóbulos rojos, los cuales son portadores de esta proteína en la sangre.

4. **Volumen Corpuscular (pcv) y Clase (class):**  
   Existe una relación moderada-alta entre el volumen corpuscular y la clase de salida. Esto se debe a que el nivel del volumen corpuscular es un indicador común de disfunción renal en pacientes con ERC.

5. **Hemoglobina (hemo) y Clase (class):**  
   La correlación entre los niveles de hemoglobina y la clase es también relevante. Pacientes con ERC suelen presentar niveles bajos de hemoglobina debido a las complicaciones renales que afectan la producción de glóbulos rojos.

![Matriz de Correlación](/blog_cards_imgs/erc/matriz_correlacion.PNG)

### Tabla de Correlaciones Observadas
Para mayor claridad, se presenta una tabla con las correlaciones más significativas:

![Tabla de Correlaciones](/blog_cards_imgs/erc/tabla_correlacion.PNG)

---

## Feature Selection

El procedimiento de selección de atributos (Feature Selection) fue aplicado para identificar los atributos que mejor predicen la clase de salida. Este proceso permite reducir la dimensionalidad del problema, optimizando el desempeño del modelo y eliminando variables redundantes.

### Justificación del Procedimiento
A partir de las visualizaciones y análisis previos, se observó que algunos atributos estaban altamente correlacionados entre sí. Por lo tanto, se decidió realizar un proceso de selección para quedarnos únicamente con aquellos atributos que aportan mayor valor predictivo. Este paso es esencial para evitar redundancia, reducir el ruido y mejorar la eficiencia del modelo.

Se utilizó el operador `Optimize Selection (Evolutionary)` en RapidMiner, combinándolo con validación cruzada (Cross-Validation) utilizando el algoritmo KNN. Este enfoque permite evaluar diferentes combinaciones de atributos para determinar el subconjunto óptimo.

#### Parámetros Configurados:
- **Usar número exacto de atributos:** Desactivado para permitir mayor flexibilidad en las combinaciones.
- **Restringir máximo de atributos:** Desactivado para permitir más posibilidades en las combinaciones.
- **Population Size:** Utilizado con valores por defecto, ya que valores más altos no generaron mejoras significativas.

#### Resultado de la Selección
Los atributos seleccionados por el algoritmo fueron los siguientes, debido a su alto peso predictivo en la clase objetivo:

![Pesos de Atributos](/blog_cards_imgs/erc/tabla_pesos.PNG)

---

## Resultados de Desempeño

Tras realizar el procedimiento de selección de atributos y aplicar el modelo Random Forest, se obtuvieron métricas altamente satisfactorias. Los resultados se resumen a continuación:

![Performance](/blog_cards_imgs/erc/performance_feature_selection.PNG)

Con estos resultados, el modelo demuestra ser robusto y confiable para la predicción de la Enfermedad Renal Crónica (ERC) en este dataset.

## Proceso en RapidMiner de transformación de datos

![Proceso](/blog_cards_imgs/erc/proceso_preparacion_datos.PNG)


## Elección y Creación de Modelos

### Modelos Seleccionados
Se eligieron tres modelos principales:
1. **Random Forest**:
   - Robustez ante datos ruidosos y capacidad de manejar valores faltantes.

2. **Naive Bayes**:
   - Adecuado para datos categóricos y continuos.
   - Manejo eficiente de probabilidades condicionales.

3. **SVM**:
   - Eficaz para problemas binarios.
   - Kernel RBF utilizado para capturar relaciones no lineales.

---

## Proceso completo
![Proceso de aplicacion de modelos](/blog_cards_imgs/erc/proceso_completo.PNG)

## Resultados obtenidos

## Random Forest:

### Validation:

![Validation](/blog_cards_imgs/erc/cr_validation_rf.PNG)

En **validation**, el modelo está prediciendo de manera casi-perfecta e igual tanto para casos positivos como negativos, sin tener una mejor precisión de clase en ninguno de los dos.

---

### Test:

![Test](/blog_cards_imgs/erc/performance_random_forest.PNG)

El test muestra un desempeño impecable, con una **accuracy** del 100.00%, lo que significa que el modelo clasifica correctamente tanto los casos positivos (CKD) como negativos (Not CKD), sin errores.

![ROC](/blog_cards_imgs/erc/grafica_ROC_rf.PNG)

En test, la curva ROC y la matriz de confusión nos muestran una distribución de datos tal vez aún más parecida a la de train, lo que resulta en mejores métricas, sin ningún caso errado, teniendo así una precision, recall y accuracy del 100%.

---

## Naive Bayes:

### Validation:
![Validation Naive Bayes](/blog_cards_imgs/erc/validation_bayes.PNG)

Aplicando el modelo de Bayes, nos encontramos con una **accuracy** un poco menor pero aún así muy buena. El modelo no es tan fiable prediciendo para gente positiva en **ckd** como lo es para predecir gente que efectivamente no padece la enfermedad, lo cual podemos ver de la comparación de **recall** entre ambas clases. 

Así mismo, la **precisión** de cuando predice que una persona es negativa se ve reducida, complementando lo que se dijo antes, ya que si no es tan fiable para las personas que tienen la enfermedad, es porque está prediciendo más personas que no tienen la enfermedad de las que verdaderamente no la tienen.

### Test:
![Test Naive Bayes](/blog_cards_imgs/erc/performance_bayes.PNG)

![ROC](/blog_cards_imgs/erc/grafica_ROC_bayes.PNG)

Como ya vimos en random forest, la distribución del dataset de test es probablemente más parecida a train que validation, lo que puede ser que haga resultar en mejores resultados.
De igual forma, vemos la misma tendencia, aunque mucho más reducida, respecto a como predice para gente que pertenezcan al grupo de positivos. 

---

## SVM:

### Validation:
![Validation SVM](/blog_cards_imgs/erc/validation_svm.PNG)

En **validation**, el modelo de SVM logró también una gran performance y muy balanceada respecto a ambas clases. Según esto, el modelo sería casi igual de confiable para predecir tanto casos positivos como negativos, con un gran porcentaje de acierto.

### Test:
![Test SVM - Tabla](/blog_cards_imgs/erc/performance_svm.PNG)

![Test SVM - ROC](/blog_cards_imgs/erc/ROC_svm.PNG)

Para el caso de **test**, es el único modelo que no presenta una mejora en su precisión respecto a **validation**.

Por otro lado, incurre en el caso inverso a lo que pasaba con Bayes, donde predice más negativos de los que verdaderamente hay. Entonces, si nos guiaremos por su matriz de confusión, podríamos entender que el modelo no es tan performante cuando predice que alguien no tiene la enfermedad, siendo que incurre en un mayor margen de error que cuando predice que alguien sí tiene la enfermedad.


## Conclusión de la Performance de los Modelos:

Todos los modelos utilizados presentaron un desempeño notablemente alto, como se evidencia en las métricas de evaluación (precision, recall, accuracy) y en las curvas ROC generadas. Estas curvas muestran una línea que se encuentra casi pegada o completamente pegada al límite superior, lo que indica una capacidad predictiva excepcional para el conjunto de datos proporcionado. Este comportamiento resalta la efectividad de los modelos al realizar predicciones precisas y confiables, tanto para identificar casos positivos como negativos de la enfermedad. En general, la performance lograda demuestra que las técnicas aplicadas fueron adecuadas para abordar el problema de clasificación en este contexto.

---

## Referencias
1. Filtración glomerular estimada (FGe). (s/f). National Kidney Foundation. [https://www.kidney.org/es/kidney-topics/filtracion-glomerular-estimada-fge](https://www.kidney.org/es/kidney-topics/filtracion-glomerular-estimada-fge)
2. Islam, M. A., Majumder, M. Z. H., & Hussein, M. A. (2023). Chronic kidney disease prediction based on machine learning algorithms. Journal of Pathology Informatics, 14, 100189. [https://doi.org/10.1016/j.jpi.2023.100189](https://doi.org/10.1016/j.jpi.2023.100189)
3. Chronic kidney disease dataset - UCI Repository. [https://archive.ics.uci.edu](https://archive.ics.uci.edu)

