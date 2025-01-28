# InfoDex

Este proyecto es una aplicación web interactiva de Pokémon que utiliza la [PokéAPI](https://pokeapi.co/) para mostrar información sobre los Pokémon. Es una herramienta pensada para fans de Pokémon que deseen explorar y aprender más sobre sus Pokémon favoritos, con características de búsqueda y visualización detallada. Proyecto basado en el proyecto final del curso de OpenWebinars "Fundamentos de React" (https://openwebinars.net/academia/portada/react/)

---

## Características Actuales

1. **Lista de Pokémon:**
   - Se genera dinámicamente una lista de Pokémon basada en un rango proporcionado por el usuario (por ejemplo, del Pokémon 1 al 10).
   - Cada Pokémon se muestra como una tarjeta que incluye su nombre, imagen y estadísticas básicas.

2. **Formulario de Rango:**
   - Los usuarios pueden especificar un rango de Pokémon (por ejemplo, del 1 al 151) y generar la lista correspondiente.

3. **Detalles del Pokémon:**
   - Al hacer clic en un Pokémon, se muestra una entrada detallada que incluye:
     - Imagen del Pokémon.
     - Nombre.
     - Tipos (en mayúsculas).
     - Puntos de salud (HP).
   - La visualización de los detalles tiene un diseño inspirado en el Pokédex, con una animación de apertura.

---

## Próximas Funcionalidades

El proyecto tiene planeado expandirse con las siguientes características:

1. **Búsqueda por Tipo:**
   - Los usuarios podrán buscar Pokémon filtrando por tipo (por ejemplo, "Agua", "Fuego").
   - Los resultados mostrarán una lista de Pokémon que coincidan con el tipo seleccionado.

2. **Búsqueda por Habilidades:**
   - Los usuarios podrán buscar Pokémon según sus habilidades específicas (por ejemplo, "Intimidar", "Agallas"...).
   - Los resultados incluirán descripciones de las habilidades y los Pokémon que las poseen.

3. **Más Información en las Entradas Detalladas:**
   - Se incluirá información adicional en la vista de detalles de cada Pokémon, como:
     - Movimientos que puede aprender.
     - Peso y altura.
     - Información específica sobre las evoluciones (línea evolutiva).

4. **Favoritos:**
   - Los usuarios podrán marcar Pokémon como favoritos y acceder a una lista personalizada.

5. **Búsqueda por Nombre o ID:**
   - Los usuarios podrán buscar directamente un Pokémon escribiendo su nombre o ID.

6. **Interfaz Adaptativa:**
   - Diseño completamente responsive para adaptarse a diferentes tamaños de pantalla (móviles, tablets, desktop).

---

## Tecnologías Utilizadas

- **React:** Biblioteca principal para la construcción de la interfaz.
- **CSS:** Estilos personalizados para darle un diseño atractivo y una experiencia visual similar a la de un Pokédex.
- **PokéAPI:** API utilizada para obtener datos sobre Pokémon, tipos, habilidades, estadísticas, etc.

---

