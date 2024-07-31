import { defineConfig } from 'vite';
import * as glob from 'glob';
import path, { resolve } from 'node:path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';
import handlerBarsContext from './variables.js';

export default defineConfig({
    base: "/Enfermeria_UNICAH/", // Base URL para el despliegue
    appType: 'mpa', // Multi-page application (MPA) para manejar múltiples entradas HTML
    build: {
        rollupOptions: {
            input: Object.fromEntries(
                [
                    // Genera entradas para todos los archivos HTML excepto los del directorio 'dist'
                    ...glob.sync('./!(dist)/*.html').map(file => [
                        file.slice(0, file.length - path.extname(file).length), // Nombre del archivo sin extensión
                        resolve(__dirname, file) // Ruta absoluta al archivo
                    ]),
                    // Genera entradas para todos los archivos HTML en la raíz del proyecto
                    ...glob.sync('./*.html').map(file => [
                        file.slice(0, file.length - path.extname(file).length), // Nombre del archivo sin extensión
                        resolve(__dirname, file) // Ruta absoluta al archivo
                    ])
                ]
            ),
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'), // Directorio de plantillas parciales de Handlebars
            context: handlerBarsContext, // Contexto para las plantillas de Handlebars
            order: 'pre', // Define el orden de ejecución de los plugins
            handler: (content) => { // Personalización del contenido, si es necesario
                // Código de transformación, actualmente no modifica el contenido
                return content;
            },
            helpers: {
                // Helper personalizado para filtrar archivos por tipo
                filtrarPorTipo: function (archivos, tipo, options) {
                    var result = '';
                    archivos.forEach(function (archivo) {
                        if (archivo.tipo === tipo) {
                            result += options.fn(archivo);
                        }
                    });
                    return result;
                }
            }
        }),

        htmlPurge({
            content: ['./src/**/*.html'], // Archivos HTML a analizar para purga de CSS
            safelist: ['safe-class'], // Clases CSS que deben mantenerse
        }),
        ViteMinifyPlugin({}),
    ]
});
