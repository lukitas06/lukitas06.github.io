# **Heart Disease**

## **Información del dataset**

El dataset original contiene 76 atributos, pero todos los experimentos realizados utilizan solo 14, los cuales van a ser explicados mas adelante.
En este caso se utilizó el dataset de Cleveland ya que es el mas estudiado y utilizado. Cabe destacar que se eligió el que ya está procesado, para enforcarnos mas en lo que sería la creación del modelo.

**Link al repositorio UCI:** [Dataset Heart Disease](https://archive.ics.uci.edu/dataset/45/heart+disease)

## **Descripción**

Este proyecto tiene como objetivo predecir la probabilidad de que un paciente padezca una enfermedad cardíaca, utilizando un conjunto de datos clínicos. Implementé técnicas de machine learning para entrenar modelos que identifiquen patrones clave en variables como la presión arterial, nivel de colesterol, edad, y otros factores de riesgo. A lo largo del proceso, se realizaron tareas de limpieza de datos, análisis exploratorio, y se emplearon diferentes algoritmos de clasificación como Logistic Regression, Random Forest y Support Vector Machine para obtener predicciones precisas. Finalmente, se evaluaron los modelos mediante métricas como precisión, recall y AUC para determinar el rendimiento óptimo.

## **Objetivos**

- **Desarrollar un modelo predictivo:** Crear un modelo de Machine Learning que pueda identificar si un paciente padece de una enfermedad cardíaca basandose en datos clínicos.
- **Optimizar el modelo creado:** Evaluar los distintos algoritmos de clasificación usados, para crear y elegir el modelo que mejor se adapte a los datos, y por ende lograr una predicción mas certera.
- **Realizar análisis exploratorio de datos:** Identificar patrones, relaciones y tendencias clave entre los factores de riesgo y la presencia de la enfermedad mediante técnicas de visualización de datos y análisis estadístico.
- **Evaluar la importancia de las variables:** Determinar qué características clínicas tienen mayor impacto en la predicción de enfermedades cardíacas para brindar insights útiles en el contexto médico.

# **Fase de análisis de datos**

Se analizaron los datos del dataset para lograr una mayor comprensión del contexto del problema, entender las distribuciones de las variables e identificar la variable de salida (variable a predecir).
La variable a predecir es _num_, la cual es el diagnóstico de cardiopatía. En el dataset original toma valores de 0 a 4, indicando la ausencia de cardiopatía (cero) y presencia (demás valores). Para simplificarlo, se modificó la variable para que sea binomial, 0 para ausencia y 1 para presencia.

- age: Edad en años
- sex
  - Valor 1: Masculino
  - Valor 0: Femenino
- cp\*
  - 1: Asintomático (la menos grave)
  - 2: Dolor no-anginoso
  - 3: Angina atípica
  - 4: Angina típica (la mas grave)
- trestbps: Presión arterial en reposo (en mmHg al entrar al hospital)
- chol: Colesteról sérico (en mg/dl)
- fbs: Azúcar en sangre en ayunas > 120 mg/dl
  - 0: Verdadero
  - 1: Falso
- restecg: Resultados electrocardiográficos en reposo
  - 0: Normal
  - 1: Tener anomalía de la onda ST-T\*
  - 2: Mostrando una hipertrófia ventricular izquierda probable o definida, por el criterio de Estes
- talach: Valor máximo de ritmo cardíaco alcanzado
- exang: Angina inducida por ejercicio
  - 1: Si
  - 2: No
- oldpeak: Depresión del ST inducido por el ejercicio, relativo al reposo
- slope (la pendiente del segmento ST del ejercicio máximo):
  - 1: Pendiente positiva
  - 2: Sin pendiente
  - 3: Pendiente negativa
- ca: Número de vasos principales (0-3) coloreados por fluoroscopía\*
- thal:
  - 3: Normal
  - 6: Defecto solucionado
  - 7: Defecto reversible
- num (target)
  - Diagnosis de cardiopatía
  - Valor 0: < 50% de estrechamiento del diámetro de la arteria coronaria
  - Valor 1: > 50% de estrechamiento del diámetro de la arteria coronaria

\*Una angina es una molestia o dolor torácico debido al flujo insuficiente de sangre por los vasos coronarios.

\*El segmento ST representa la despolarización completa del músculo ventricular. En condiciones normales es horizontal.
La elevación de este segmento puede deberse a hipertrófia del ventrículo izquierdo, infarto del miocardio, hipotermia o embolia pulmonar entre otros.

\*La fluoroscopía en este caso se utiliza en el cateterismo cardíaco. En dicho proceso se usa un tinte para ver la sangre fluir por las arterias.
La cantidad de vasos coloreados nos indica cuantos de ellos sufren de alguna anormalidad.
Un número mayor de vasos afectados implica una severidad mayor de la cardiopatía, ademas de un mayor riesgo de ataque al corazón.

## **Tipos de distribuciones**

Se intentan visualizar los distintos tipos de distribuciones que siguen los atributos, para lograr una comprensión mas detallada de los mismos y asi poder aplicar métodos de normalizacion o escalerización si es necesario.

- Los atributos _trestbps_, _chol_ y _talach_ parecen seguir una distribución Gaussiana, aunque un poco desplazadas hacia uno de los lados en el eje de las x.

- Los atributos _cp_, _oldpeak_, _ca_ y _thal_ parecen seguir una distribución tipo skew, hacia el lado izquierdo del eje x.

- Los demás atributos son de tipo nominal y binomiales.

## **Valores faltantes**

No se encontraron valores faltantes en el dataset.

## **Correlaciones**

Se realizó una matríz de correlación con los atributos de tipo real del dataset: _oldpeak_, _talach_, _trestbps_,_chol_ y _age_
![Matríz de correlación](/blog_cards_imgs/heart_disease/correlation.png)

- Se puede observar que existe una correlación negativa entre la edad y talach (valor máximo de pulsaciones) lo cual puede ser debido a que cuanto mayor edad tenga una persona su salud física empeora y el ritmo cardíaco disminuye.
- Los demás atributos parecen no tener una relación directa entre ellos.

## **Relaciones más importantes**

**Posibilidad de cardiopatía relativo a ca**
![Relación de ca y num](/blog_cards_imgs/heart_disease/ca_num.png)

Se puede observar que a medida que el número de _ca_ aumenta, mayor probabilidad de tener una cardiopatía.
Sin embargo, cuando se tiene un número alto de vasos principales (en este caso 4), la probabilidad de tener una cardiopatía disminuye sustancialmente, llegando a un valor casi idéntico al de un número igual a 4.

**Posibilidad de cardiopatía relativo a cp**
![Relación de ca y num](/blog_cards_imgs/heart_disease/cp_num.png)

Se observa que en las formas leves de dolores torácicos (0 a 3), hay menor probabilidad de padecer una cardiopatía. Por el otro lado, en el tipo 4 de angina (el mas grave) el 75% de los pacientes aproximadamente desarrollan una cardiopatía.

**Posibilidad de cardiopatía relativo a restecg**
![Relación de ca y num](/blog_cards_imgs/heart_disease/restecg_num.png)

El estudio de la electrocardiografía aporta un valor importante a la hora de determinar una cardiopatía.
Se observa que cuando hay una anomalía en la onda ST-T del electrocardiograma (valor 1 de restecg), hay una posibilidad del 75% de poseer una cardiopatía, un valor sustancialmente mas grande al comparararlo con valores 0 y 2, 37% y 54% respectivamente.

**Posibilidad de cardiopatía relativo a slope**
![Relación de ca y num](/blog_cards_imgs/heart_disease/slope_num.png)

Una pendiente positiva en el segmento ST es el tipo menos preocuoante de pendiente, ya que es normal a la hora de hacer ejercicio o realizar algun test de estrés. El hecho de que haya una posibilidad del 25% de poseer una cardiopatía puede deberse a que a veces es observada en etapas tempranas de cardiopatías de la arteria coronaria.

## **Outliers (Valores extremos)**

A partir del uso de RapidMiner, con el fin de identificar los outliers, se utilizó el operador “Detect Outliers” y se encontraron 10 outliers en el dataset. Se decidió eliminar los mismos ya que podrían llevar a una desviación en el analisis de los datos por parte del modelo.

# Fase de preparación de datos

## Se realizaron las siguientes tareas para preparar los datos para la creación del modelo:

- Normalización de todos los atributos numéricos debido a que se encuentran en diferentes escalas.
- Eliminación de outliers en los datos

# Fase de construcción del modelo

Se construyó un modelo de clasificación de Naive Bayes para predecir si un paciente tiene un estrechamiento menor a 50% o mayor a 50%.

## Pasos

- Se aplicó un "shuffle" al dataset para randomizar los datos y evitar sesgos en el modelo.
- Se dividió el dataset en dos conjuntos: uno de entrenamiento (80%) y otro de prueba (20%).
- Al dataset de entrenamiento se le aplicó cross validation con Naive Bayes, y se creó el modelo.
- Se evaluó la performance del modelo en el subconjunto de validación, utilizando error cuadrático medio, correlación y correlación cuadrática.
- Se evaluó la performance del modelo en el conjunto de prueba (datos nuevos), para visualizar el comportamiento del modelo.

**Performance en cross validation**
![Performance en cross validation](/blog_cards_imgs/heart_disease/performance_validation.png)

**Performance en conjunto de prueba**
![Performance en conjunto de prueba](/blog_cards_imgs/heart_disease/performance_test.png)
