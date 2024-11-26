# Algoritmos de Machine Learning: Supervisados y No Supervisados

El machine learning se divide en dos categorías principales según el tipo de datos y el objetivo del modelo: **supervisados** y **no supervisados**. Cada uno de ellos aborda problemas específicos y emplea técnicas particulares para resolverlos.

---

## Algoritmos Supervisados

### ¿Qué son?

Los algoritmos supervisados se entrenan con un conjunto de datos etiquetados, donde cada entrada (datos de entrada) tiene una salida conocida (etiqueta). El objetivo es que el modelo aprenda la relación entre las características de entrada y las etiquetas para predecir correctamente la salida de nuevos datos.

### Aplicaciones Típicas

1. **Clasificación**:

   - Determinar la categoría a la que pertenece un dato.
   - Ejemplos: Detección de spam, diagnóstico médico, clasificación de imágenes.

2. **Regresión**:
   - Predecir un valor continuo.
   - Ejemplos: Predicción de precios de viviendas, estimación de la demanda energética.

### Algoritmos Populares

1. **Regresión Lineal**:

   - Se utiliza para problemas de regresión.
   - Relaciona variables de entrada con la salida mediante una ecuación lineal.

2. **Regresión Logística**:

   - Aplicada en problemas de clasificación binaria.
   - Modela la probabilidad de que una entrada pertenezca a una clase.

3. **Árboles de Decisión y Random Forest**:

   - Ideales para clasificación y regresión.
   - Dividen los datos en subconjuntos basados en características.

4. **Support Vector Machines (SVM)**:

   - Usadas para clasificación.
   - Encuentran un hiperplano óptimo que separa las clases.

5. **Redes Neuronales Artificiales**:
   - Simulan la estructura del cerebro humano para problemas complejos.
   - Aplicadas en tareas como reconocimiento de voz e imágenes.

---

## Algoritmos No Supervisados

### ¿Qué son?

Los algoritmos no supervisados trabajan con datos no etiquetados, es decir, no se les proporciona un objetivo explícito. El modelo busca patrones, estructuras o relaciones dentro de los datos de forma autónoma.

### Aplicaciones Típicas

1. **Clustering (Agrupamiento)**:

   - Agrupar datos similares.
   - Ejemplos: Segmentación de clientes, análisis de ADN, detección de comunidades.

2. **Reducción de Dimensionalidad**:
   - Simplificar los datos manteniendo la mayor cantidad posible de información relevante.
   - Ejemplos: Visualización de datos, compresión de imágenes.

### Algoritmos Populares

1. **K-Means**:

   - Algoritmo de clustering que agrupa datos en `k` clusters definidos por el usuario.

2. **Jerárquico**:

   - Construye un árbol de clusters basados en la similitud entre los datos.

3. **DBSCAN (Density-Based Spatial Clustering of Applications with Noise)**:

   - Agrupa puntos densos y detecta ruido (outliers).

4. **PCA (Análisis de Componentes Principales)**:

   - Técnica de reducción de dimensionalidad que transforma los datos en componentes principales.

5. **Autoencoders**:
   - Redes neuronales usadas para aprender representaciones compactas de datos.

---

## Herramientas para Implementar Algoritmos

1. **Python + Bibliotecas**:

   - [Scikit-learn](https://scikit-learn.org/): Implementa una amplia gama de algoritmos supervisados y no supervisados.
   - [TensorFlow](https://www.tensorflow.org/) y [PyTorch](https://pytorch.org/): Potentes para modelos neuronales.
   - [Statsmodels](https://www.statsmodels.org/): Ideal para modelos estadísticos supervisados.

2. **R**:

   - Librerías como `caret` y `mlr` para diversos algoritmos.

3. **RapidMiner**:

   - Plataforma que simplifica el uso de algoritmos supervisados y no supervisados mediante una interfaz gráfica.

4. **Weka**:
   - Software gratuito para la experimentación con modelos de machine learning.

---

## Recursos y Links Útiles

- **Introducción al machine learning supervisado y no supervisado**:  
  [https://www.ibm.com/think/topics/supervised-vs-unsupervised-learning](https://www.ibm.com/think/topics/supervised-vs-unsupervised-learning)

- **Curso gratuito de Machine Learning de Google**:  
  [https://developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)

- **Libro "Introduction to Machine Learning with Python"**:  
  Disponible en tiendas y bibliotecas.

---

Conocer los algoritmos supervisados y no supervisados, así como sus aplicaciones, es fundamental para resolver problemas en diversas áreas como finanzas, salud y marketing. Elegir el enfoque adecuado depende del tipo de datos y el objetivo del proyecto.
