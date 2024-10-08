# **Sonar: Rock VS Mines**

## **Descripción**

Este proyecto utiliza el conjunto de datos UCI Sonar, que contiene mediciones de señales acústicas generadas por un sonar para detectar la presencia de objetos sumergidos, como minas submarinas o rocas. El objetivo principal es desarrollar un modelo de machine learning que sea capaz de diferenciar entre estos dos tipos de objetos, mejorando así la precisión en la detección de minas y contribuyendo a aplicaciones tanto civiles como militares para la seguridad en aguas profundas.

## **Contexto**

Los sistemas de sonar son ampliamente utilizados para la exploración y monitoreo de entornos submarinos. En el campo de la detección de minas, la capacidad de distinguir entre una mina submarina y otros objetos inofensivos, como rocas, es crucial para prevenir falsos positivos o fallos en las misiones de desminado. El conjunto de datos UCI Sonar proporciona información acústica de 208 observaciones, donde cada observación contiene 60 atributos que corresponden a la fuerza de las señales rebotadas a diferentes frecuencias. Las etiquetas de las observaciones indican si el objeto detectado es una mina submarina o una roca.

Este proyecto tiene como base el estudio y la aplicación de algoritmos de machine learning para clasificar estos objetos, basándose en las características obtenidas a partir de las señales acústicas. Los modelos desarrollados permitirán una mayor automatización y precisión en la identificación de objetos submarinos, apoyando tareas de minería y seguridad en áreas marinas.

## **Objetivos**

- Análisis exploratorio de datos: Realizar un análisis detallado del conjunto de datos UCI Sonar, comprendiendo la distribución de las características, su relación con las etiquetas de clase (mina o roca) y evaluando posibles patrones en los datos.

- Preprocesamiento de datos:

  - Utilizar técnicas de feature engineering para lograr identificar qué atributos son más idóneos para trabajar, reduciendo la complejidad y aumentando la precisión del modelo.s
  - Aplicar técnicas de normalización, detección y manejo de valores atípicos, y particionamiento de datos para asegurar que el modelo de machine learning pueda generalizar bien en nuevos datos.

- Desarrollo de modelos de machine learning: Implementar y comparar diferentes algoritmos de clasificación, como K-Nearest Neighbors (KNN), Support Vector Machines (SVM), y Random Forests, evaluando su precisión y capacidad para detectar minas submarinas de manera efectiva.

- Evaluación y validación: Utilizar métricas de rendimiento como precisión, sensibilidad y especificidad para validar los modelos desarrollados, asegurando que el sistema tenga un bajo índice de falsos positivos (clasificar una roca como una mina) y un alto índice de detección de minas.

# Fase de análisis de datos

## Variable a predecir: class

Se debe identificar si una determinada entrada corresponde a la clases mina o roca.

## Visualización de gráfico _"deviation"_

![](/blog_cards_imgs/sonar/deviation_sonar.png)

Se pueden observar 4 zonas en donde las lineas correspondientes a _rock_ y _mine_ logran una separación importante. Esto sucede porque las clases son más diferentes, o sea se logra una mejor distinción entre las clases.
En estas áreas se encuentran los atributos 9, 10, 11, 12, 13, 14, 19, 20, 21, 22, 23, 34, 35, 36, 37, 43, 44, 45, 46, 47 y 48. En total 21 de los 60 atributos.

Se realizó feature engineering para seleccionar los atributos que tienen mas relación con la variable de salida, para esto se aplicaron diferentes técnicas:

## Forward Selection

El proceso comienza con un modelo vacío (sin características). Luego, de forma iterativa, se agregan las características de una en una, evaluando en cada paso el rendimiento del modelo. El objetivo es identificar qué características mejoran el desempeño del modelo y deben ser incluidas.

## Backward Elimination

Este método funciona al revés que la selección hacia adelante. Comienza con todas las características incluidas en el modelo y elimina características una por una, evaluando el impacto de cada eliminación en el rendimiento del modelo.

## Optimize Selection (Evolutionary)

Este método utiliza un algoritmo evolutivo (inspirado en la selección natural) para encontrar el conjunto óptimo de características. Es una búsqueda basada en poblaciones donde diferentes subconjuntos de características "compiten" entre sí, y las combinaciones de características más exitosas se "recombinan" y "mutan" en la siguiente generación.

![](/blog_cards_imgs/sonar/tabla.png)

Se utilizó Naive Bayes en un cross validation para visualizar los resultados de cada método explicado anteriormente:

## Performance Forward Selection

![](/blog_cards_imgs/sonar/forward.png)
Este método se quedó con 4 atributos (12, 15, 17 y 18) de los 60

## Performance Backward Elimination

![](/blog_cards_imgs/sonar/backward.png)

- Este método se quedó con 32 atribtuos de los 60
- Se seteó el parámetro _"speculative rounds"_ en 15, para evitar quedar en el mejor local.

## Performance Optimize Selection

![](/blog_cards_imgs/sonar/optimize.png)
Este método se quedó con 9 atributos (10, 12, 16, 20, 21, 28, 31, 36 y 47) de los 60

## Comparación performance sin feature

Si comparamos cada rendimiento del modelo, con el modelo sin realizar feature engineering, se obtiene una gran diferencia:
![](/blog_cards_imgs/sonar/sin_feature.png)

- Esto es debido a la gran cantidad de atributos que contiene el dataset, lo cual vuelve muy complejo el proceso de entrenamiento y validacion, introduciendo errores.
- También se observa que todos los atributos elegidos por los métodos de feature engineering se encuentran dentro de los atributos mencionados en la visualización del grafico deviation.
