class nodo {                                // Define una clase para representar cada elemento (nodo) de la lista
    constructor(paquete) {                 // Constructor del nodo; recibe el contenido que guardará
    this.paquete = paquete;               // Guarda la información del paquete en el nodo
    this.siguiente = null;               // Puntero al siguiente nodo; inicia en null porque aún no enlaza con nadie
  }
}
// Clase Cola (Queue) basada en lista enlazada
class ColaPaquetes {                         // Define la estructura de la cola que gestionará los paquetes
    constructor() {                         // Constructor de la cola
    this.inicio = null;                   // Referencia al primer nodo (cabeza de la cola); null indica cola vacía
    this.final = null;                    // Referencia al último nodo (cola/tail); null indica cola vacía
    this.tamaño = 0;                      // Contador de elementos en la cola para consultas O(1)
  }
   // Agregar paquete al final (enqueue) - O(1)
  agregar(paquete) {                      // Método público para encolar un nuevo paquete
    const nuevo = new nodo(paquete);      // Crea un nodo con el paquete recibido

    if (this.final) {                     // Si existe un último nodo (la cola NO está vacía)
      this.final.siguiente = nuevo;       // Enlaza el último nodo actual con el nuevo nodo
    } else {                              // Si la cola está vacía (no hay final ni inicio)
      this.inicio = nuevo;                // El nuevo nodo también es el primero (inicio) de la cola
    }

    this.final = nuevo;                   // Actualiza el puntero 'final' para que apunte al nuevo último nodo
    this.tamaño++;                        // Incrementa el tamaño porque agregamos un elemento
  }
  // Eliminar paquete del inicio (dequeue) - O(1)
  despachar() {                           // Método público para desencolar (sacar) el primer paquete
    if (!this.inicio) {                   // Si no hay elementos (inicio es null)
      console.log("No hay paquetes en tránsito."); // Mensaje informativo cuando la cola está vacía
      return null;                        // Devuelve null para indicar que no se pudo despachar
    }

    const paquete = this.inicio.paquete;  // Guarda el valor del paquete del primer nodo para retornarlo
    this.inicio = this.inicio.siguiente;  // Mueve el puntero 'inicio' al siguiente nodo (el antiguo segundo)

    if (!this.inicio) {                   // Si después de mover, 'inicio' es null, la cola quedó vacía
      this.final = null;                  // También ponemos 'final' en null para mantener el estado coherente
    }

    this.tamaño--;                        // Decrementa el tamaño porque eliminamos un elemento
    return paquete;                       // Devuelve el paquete que estaba primero en la cola
  }
    // Ver el siguiente paquete en salir (peek) - O(1)
  verSiguiente() {                        // Método para consultar sin eliminar
    return this.inicio ? this.inicio.paquete : null; // Si hay inicio, devuelve su paquete; si no, null
  }

  // Consultar tamaño actual - O(1)
  contar() {                              // Método para obtener cuántos elementos hay en la cola
    return this.tamaño;                   // Devuelve el contador mantenido por la estructura
  }

  // (Opcional) ¿Está vacía? - O(1)
  estaVacia() {                           // Método de ayuda para verificar si hay elementos
    return this.tamaño === 0;             // Devuelve true si no hay elementos
  }
}  
const sistema = new ColaPaquetes();       // Crea una nueva cola de paquetes vacía

sistema.agregar("Paquete 1");             // Encola "Paquete 1" al final (cola pasa de 0 -> 1 elemento)
sistema.agregar("Paquete 2");             // Encola "Paquete 2" (cola ahora tiene 2 elementos)
sistema.agregar("Paquete 3");             // Encola "Paquete 3" (cola ahora tiene 3 elementos)

console.log("Siguiente en salir:",        // Imprime texto descriptivo
  sistema.verSiguiente());                // Consulta el primer elemento sin eliminarlo -> "Paquete 1"

console.log("Despachado:",                // Imprime texto descriptivo
  sistema.despachar());                   // Desencola el primer elemento -> elimina y devuelve "Paquete 1"

console.log("Siguiente en salir:",        // Imprime texto descriptivo
  sistema.verSiguiente());                // Ahora el primero debería ser "Paquete 2"

console.log("Tamaño actual:",             // Imprime texto descriptivo

  sistema.contar());                            
