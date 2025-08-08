# 📘 Resolución del Challenge - Paso a Paso

Este documento detalla los pasos seguidos para resolver los problemas presentados al ejecutar la aplicación del challenge dentro de un entorno Docker.

## 🧩 Problema inicial

- Al correr `yarn build`, la aplicación arrojaba errores de tipo y dependencias incompatibles.
- El entorno esperaba que la aplicación funcionara con CRACO, React, TypeScript y `react-router-dom`.
- Al intentar construir la imagen de Docker, el proceso fallaba por errores de compilación.

---

## ✅ Solución paso a paso

### 1. Actualizar typescript y mover dependencias de desarrollo

Actualizar TypeScript a la versión 4.9.5 para mejorar la compatibilidad con las dependencias actuales del proyecto, evitar errores de tipado y asegurar soporte para características modernas de TypeScript.

Además, mover todas las dependencias utilizadas exclusivamente en tiempo de desarrollo a la sección devDependencies para mantener el entorno de producción más liviano y limpio.

### 2. Agregar dependencias faltastes y gestionar versiones

Se sumaron paquetes que faltaban y se alinearon versiones para evitar errores y que todo funcione bien entre sí.

### 3. Fijar versión de @babel/core con resolutions

Se usó resolutions para forzar una versión específica de @babel/core (^7.20.0), evitando conflictos actuales con dependencias. Esto asegura estabilidad en el corto plazo, pero a futuro conviene revisar por qué ocurre el conflicto y resolverlo de raíz para no depender de resolutions.

### 4. Configuración typeRoots y types en TypeScript

Esta configuración indica a TypeScript dónde buscar las definiciones de tipos y cuáles incluir específicamente (react, node). Limitar los tipos cargados mejora el rendimiento y evita conflictos, facilitando el mantenimiento y la escalabilidad del proyecto a futuro.

` 5. Uso de NODE_OPTIONS=--openssl-legacy-provider (No recomendado para Prod))`

El uso de NODE_OPTIONS=--openssl-legacy-provider no seria recomendado para prod, se deberia encarar una actualizacion de dependencias de draco, react-script y tailwind. Por cuestion de tiempos no se llego pero es necesario.

### 6. Mejora visual

Se mejoro el aspecto visual en algunas secciones siempre intentando respetar la formular principal, ya que se penso en una solucion rapida.
Se utilizo tamaños de fuente y grosores mas pequeños para modernizarla un poco y se aplico la paleta de colores de la empresa.
