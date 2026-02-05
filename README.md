# Compartí un Dato (Today I Learned) 🧠

¡Bienvenido a **Compartí un Dato**! Esta es una aplicación web interactiva donde los usuarios pueden descubrir y compartir datos curiosos e interesantes sobre diversos temas como tecnología, ciencia, historia, finanzas y más.

## 🚀 Características

- **Explora Datos:** Navega por una lista de datos curiosos alimentada por la comunidad.
- **Filtra por Categoría:** Encuentra datos específicos seleccionando categorías como Tecnología, Ciencia, Finanzas, Sociedad, Entretenimiento, Salud, Historia y Noticias.
- **Comparte tu Conocimiento:** ¿Sabes algo interesante? ¡Compártelo con el mundo a través del formulario de "Nuevo Dato"!
- **Vota:** Interactúa con los datos votando con reacciones:
  - 👍 Interesante
  - 🤯 Alucinante (Mindblowing)
  - ⛔ Falso
- **Datos en Tiempo Real:** La aplicación se conecta a Supabase para leer y escribir datos al instante.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido con las siguientes tecnologías:

- **Frontend:** [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- **Backend / Base de Datos:** [Supabase](https://supabase.com/) - Una alternativa de código abierto a Firebase.
- **Estilos:** CSS3 moderno y diseño responsivo.
- **Hosting:** GitHub Pages.

## 📦 Instalación y Configuración

Sigue estos pasos para correr el proyecto localmente:

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/comparti-un-dato.git
    cd comparti-un-dato
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Configura las Variables de Entorno:**

    Crea un archivo `.env` en la raíz del proyecto y agrega tus credenciales de Supabase (puedes guiarte con `.env.example` si existe, o usar los nombres a continuación):

    ```env
    REACT_APP_SUPABASE_URL=tu_url_de_supabase
    REACT_APP_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
    ```

4.  **Inicia el servidor de desarrollo:**

    ```bash
    npm start
    ```

    La aplicación se abrirá en [http://localhost:3000](http://localhost:3000).

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación para producción en la carpeta `build`.
- `npm test`: Ejecuta los tests.
- `npm run seed`: Carga datos iniciales en tu base de datos Supabase (requiere configuración previa de la tabla `facts`).

## 📂 Estructura del Proyecto

```
comparti-un-dato/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes y recursos
│   ├── components/  # Componentes de React (Header, FactList, etc.)
│   ├── seed/        # Scripts para poblar la base de datos
│   ├── App.jsx      # Componente principal
│   ├── supabase.js  # Configuración del cliente Supabase
│   └── ...
└── ...
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si tienes alguna idea para mejorar la aplicación, siéntete libre de abrir un issue o enviar un pull request.

---

_Este proyecto es parte de un ejercicio de aprendizaje hecho en un curso de Jonas Schmedtmann para dominar React y Supabase._
