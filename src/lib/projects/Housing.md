# **Housing Prices**

## **Descripción**

En este proyecto se utilizó un dataset que contiene información sobre precios de casas en Boston. A lo largo del mismo, se realizaron tareas de análisis de los atributos, preparación de los datos y construcción de un modelo de regresión lineal múltiple para predecir la mediana de precios de una casa.

## **Objetivos**

- Identificar cuáles atributos, entre los varios disponibles, son necesarios para predecir con exactitud la mediana de precios de una casa.
- Construir un modelo de regresión lineal múltiple para predecir la mediana de los precios utilizando los atributos más importantes.
- Evaluar la exactitud del modelo para predecir nuevos ejemplos.

## **Contexto**

- Debido a la naturaleza del enfoque de ajuste de funciones, una limitación importante que encontramos tiene que ver con la dimensionalidad. A medida que la cantidad de atributos o predictores crece, se reduce nuestra capacidad para obtener un buen modelo, pero además se agrega complejidad computacional y también se hace más difícil la interpretación del modelo.

- Revisaremos aquí algunos métodos de selección de características – “feature selection” – que permitan reducir el número de predictores al mínimo posible sujeto a obtener un buen modelo.
- Utilizando RapidMiner, veremos cómo realizar la preparación de los datos, la construcción del modelo y la validación. Finalmente revisaremos que se cumplan algunos requerimientos para asegurar que la regresión lineal se utiliza correctamente.

# Fase de análisis de datos

Se analizaron los atributos disponibles en el dataset para identificar cuáles son los más importantes para predecir la mediana de precios de una casa

## Variable a predecir: MEDV

Representa el precio de una casa dada, en miles de dolares.

- CRIM
  - Descripción: Tasa de criminalidad per cápita por ciudad
  - Rango: 0-88.98
- ZN
  - Proporción de terreno residencial dividido en zonas para lotes de más de 25,000 pies cuadrados
  - Rango: 0-100
- INDUS
  - Proporción de acres de negocios no minoristas por ciudad
  - Rango: 0-27.74
- CHAS

  - Descripción: Variable ficticia Charles River (= 1 si el tramo limita con el río; 0 en caso contrario).
  - Rango: 0-1

- NOX
  - Descripción: Concentración de óxidos nítricos (partes por 10 millones).
  - Rango: 0.385-0.871
- RM
  - Descripción: Número promedio de habitaciones por vivienda.
  - Rango: 3.561-8.78
- AGE

  - Descripción: Proporción de unidades ocupadas por sus propietarios construidas antes de 1940.
  - Rango: 2.9-100

- DIS
  - Descripción: Distancias ponderadas a cinco centros de empleo de Boston.
  - Rango: 1.1296-12.1265
- RAD
  - Descripción: Índice de accesibilidad a carreteras radiales.
  - Rango: 1-24
- TAX

  - Descripción: Tasa de impuesto a la propiedad de valor total por $10,000.
  - Rango: 187-711

- PTRATIO

  - Descripción: Proporción alumno-profesor por ciudad.
  - Rango: 12.6-22

- B
  - Descripción: 1000(Bk - 0.63)^2 donde Bk es la proporción de personas de ascendencia afroamericana por ciudad.
  - Rango: 0.32-396.9
- LSTAT

  - Descripción: % menor estado de la población.
  - Rango: 1.73-37.97

- MEDV
  - Descripción: Valor medio de las viviendas ocupadas por sus propietarios en miles de dólares.
  - Rango: 5-50

## **Tipos de distribuciones**

- ### Normal

Los atributos RM y MEDV siguen una distribución normal.

- ### Skew

Los atributos AGE, DIS y LSTAT siguen una distribución skew hacia alguno de los lados. Posteriormente se deberían normalizar para poder utilizarlas en la creación del modelo.

- ### Binomial

El atributo CHAS sigue una distribución binomial

- ### No identificable

Los demás atributos no siguen una distribución identificable a simple vista.

## **Valores faltantes**

No se encontraron valores faltantes en el dataset.

## **Correlaciones**

- Positiva entre RM y MEDV: Se decidió no eliminar el atributo RM debido a que es uno de los atributos más importantes para predecir la mediana de precios de una casa.
- Negativa entre LSTAT y MEDV: Se decidió no eliminar el atributo LSTAT debido a que es uno de los atributos más importantes para predecir la mediana de precios de una casa.

## **Outliers (Valores extremos)**

A partir del uso de RapidMiner, con el fin de identificar los outliers, se utilizó el operador “Detect Outliers” y se encontraron 10 outliers en el dataset. Se decidió eliminar los mismos ya que podrían llevar a una desviación en el analisis de los datos por parte del modelo.

# Fase de preparación de datos

## Se realizaron las siguientes tareas para preparar los datos para la creación del modelo:

- Normalización de todos los atributos debido a que son todos numéricos y se encuentran en diferentes escalas.
- Selección de los atributos más importantes para predecir la mediana de precios de una casa.
- Eliminación de outliers en los datos

# Fase de construcción del modelo

### Se construyó un modelo de regresión lineal múltiple para predecir la mediana de precios de una casa utilizando los atributos más importantes

## Pasos

- Se aplicó un "shuffle" al dataset para randomizar los datos y evitar sesgos en el modelo.
- Se dividió el dataset en dos conjuntos: uno de entrenamiento y otro de prueba.
- Al dataset de entrenamiento se lo dividió en dos conjuntos: uno para entrenamiento y otro para validación.
- Se construyó el modelo de regresión lineal múltiple en el subconjunto de entrenamiento.
- Se evaluó la performance del modelo en el subconjunto de validación, utilizando error cuadrático medio, correlación y correlación cuadrática.
- Se evaluó la performance del modelo en el conjunto de prueba (datos nuevos), para visualizar el comportamiento del modelo.

# Performance del modelo

![Parámetros de validez de un modelo de regresión lineal](/blog_cards_imgs/housing/performance.png)

- Root Mean Squared Error (RMSE): Indica cuán grande es el error promedio entre las predicciones y los valores reales. Cuanto más bajo sea el RMSE, mejor será el modelo.',
- Correlation: Indica cuán bien se ajustan las predicciones a los valores reales. Cuanto más cercano a 1 sea el valor de correlación, mejor será el modelo.',
- Squared Correlation: Representa la proporción de la variación en los valores reales que es explicada por el modelo de regresión. Cuanto más cercano a 1 sea el valor de correlación cuadrática, mejor será el modelo.',
- Squared Error: Es el error cuadrático total.Es una medida que penaliza los errores grandes de manera más severa que los errores pequeños, cuanto menor sea este valor, mejor se ajusta el modelo a los datos.'
