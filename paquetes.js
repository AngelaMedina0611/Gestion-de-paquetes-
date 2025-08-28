class nodo {                                // Define una clase para representar cada elemento (nodo) de la lista
    constructor(paquete) {                 // Constructor del nodo; recibe el contenido que guardará
    this.paquete = paquete;               // Guarda la información del paquete en el nodo
    this.siguiente = null;               // Puntero al siguiente nodo; inicia en null porque aún no enlaza con nadie
  }
}
