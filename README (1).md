
# GESTION DE PAQUETES EN TRANSITO  

Este proyecto tiene como objetivo 
Diseñar y desarrollar un sistema ligero para la gestión de paquetes en tránsito. El 
proyecto se enfocará en la implementación de un algoritmo que permita agregar 
paquetes al final y eliminarlos del inicio de manera eficiente, con un análisis de su 
complejidad en notación Big O. 

**📋 Descripción General**

Este sistema fue diseñado para una empresa 
de logística emergente necesita una solución tecnológica simple para 
manejar la llegada y el despacho de paquetes en un centro de distribución. El flujo 
de trabajo exige que los paquetes se procesen en el mismo orden en que fueron 
recibidos. Se requiere un sistema de seguimiento que sea flexible, permitiendo un 
número variable de paquetes sin necesidad de un tamaño predefinido, y que 
garantice un procesamiento rápido del primer paquete en espera. 



## DOCUMENTACIÓN 

[GESTIÓN DE PAQUETES EN TRANSITO](https://1drv.ms/w/c/2efc5ec94d1a9ce9/EYfXc_Jn5WBEjprkDgUgh1oBdvJXRivU6fnEVRly1bQm0g?e=2jlygt)


## ANALISIS DEL SISTEMA
En este taller trabajamos con la gestión de colas, un tema fundamental en sistemas donde el 
orden de llegada define el orden de atención. Ya sea en logística, atención al cliente o 
procesamiento de tareas, mantener ese orden es clave para evitar retrasos, confusiones o 
injusticias. 
El principio FIFO (First-In, First-Out) garantiza que el primer elemento en entrar sea también el 
primero en salir. Este comportamiento es especialmente importante cuando se manejan recursos 
limitados o procesos secuenciales, como en el despacho de paquetes. Si no se respeta este orden, 
se pueden generar cuellos de botella o incluso pérdida de información. 
Por eso, el reto principal del proyecto fue diseñar una estructura que permitiera agregar 
elementos al final de la cola y eliminarlos desde el inicio, de forma eficiente y sin alterar el flujo 
natural de los datos. 

## DISEÑO DEL SISTEMA
Para implementar la cola decidimos usar una lista simplemente enlazada, ya que es una 
estructura dinámica que se adapta muy bien a este tipo de problemas. A diferencia de los 
arreglos, no requiere un tamaño fijo y permite insertar o eliminar elementos sin necesidad de 
reorganizar toda la estructura. 
Cada nodo representa un paquete, y contiene tanto la información del paquete como la referencia 
al siguiente. Esta organización facilita: 
- Agregar al final: aunque requiere recorrer la lista (O(n)), es sencillo y no depende de 
índices. 
- Eliminar al inicio: se hace en tiempo constante (O(1)), lo que es ideal para despachar el 
primer paquete. 
- Consultar el primer elemento: también en O(1), lo que permite verificar el estado de la 
  cola sin recorrerla.
Elegimos esta estructura porque respeta el principio FIFO y permite validar cada operación con 
claridad. Además, me pareció una buena oportunidad para reforzar el manejo de referencias, 
nodos y análisis de complejidad, que son temas clave en estructuras de datos.
## EXPLICACIÓN DE CADA TEMA IMPLEMENTADO
1. agregarPaquete: Este método sirve para encolar un nuevo paquete al final de la cola. 
Esto siempre en tiempo constante con una complejidad O1 gracias al puntero final - - - - - 
Primero se crea un nuevo nodo con el paquete que se quiere agregar. 
Si ya hay elementos en la cola (this.final no es null), el nuevo nodo se enlaza al final 
usando this.final.siguiente. 
Si la cola está vacía, el nuevo nodo se convierte en el primero (this.inicio). 
Luego se actualiza el puntero final para que apunte al nuevo nodo. 
Finalmente, se incrementa el contador tamaño.

2. DespacharPaquete: Este método elimina el primer paquete de la cola. También tiene 
una complejidad O1 gracias al puntero inicio. - - - - 
Primero se verifica si la cola está vacía (this.inicio es null). Si lo está, se muestra un 
mensaje y se retorna null. 
Luego se mueve el puntero inicio al siguiente nodo (this.inicio.siguiente). 
Si después de mover el puntero la cola queda vacía (this.inicio es null), también se 
actualiza final a null. 
Se reduce el contador tamaño y se retorna el paquete que se despachó.

3. ConsultarPrimerPaquete: Este método permite ver cuál es el siguiente paquete en 
salir, sin eliminarlo. 
 
- Solo revisa si this.inicio existe. 
- Si sí, devuelve el paquete que está en ese nodo. 
- Si no, devuelve null.
4. Consultar el siguiente paquete en salir 
- El sitema permite visualizar el contenido del primer paquete sin eliminarlo 
 verSiguiente() {                       
 return this.inicio ? this.inicio.paquete :    null;  }

5. Consultar el tamaño de la cola
- permite conocer cuantos paquetes hay en la cola.
- retorna un numero entero que representa el total de elementos 
contar() {                             
return this.tamaño;                    
  }
6. Verificar si la cola está vacia 
- verifica si hay paquetes en transito
- retorna true si no hay elemnetos y false si hay almenos 1
estaVacia() {            
return this.tamaño === 0;              
  }
## EJEMPLOS DE USO
- El usuario puede crear una instancia de la cola.
- Puede agregar múltiples paquetes.
- Puede consultar cuál será el siguiente en salir.
- Puede despachar paquetes y ver cómo cambia el estado de la cola.

## FUNCIONALIDAD DEL PROYECTO  

La funcionalidad principal de este código es implementar una estructura de datos tipo cola (Queue) 
utilizando una lista enlazada, para gestionar elementos en este caso, “paquetes” de forma ordenada 
y eficiente.
## AUTORIA  
Proyecto desarrollado como parte de la materia algoritmos 2 – Proyectos Final los integrantes son: Angela Medina , Michelle Caicedo, Sebastian Casañas, Ivan Gonzalez




## License

[MIT](https://choosealicense.com/licenses/mit/)


## TECNOLOGIAS USADAS

**BAKEND** : JAVASCRIPT

**PRUEBAS** :  Node.JS

**CONTROL DE VERSIONES**  : GIT + GITHUBO


## INSTALACIÓN

```bash
 git clone https://github.com/AngelaMedina0611/Gestion-de-paquetes-
Gestion-de-paquetes-.git 
 cd Gestion-de-paquetes-


    
