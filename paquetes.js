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
  
}                     