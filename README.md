# Test GrowProExperience

Esta aplicación se hizo especialmente para el test de GrowProExperience

## Paquetes utilizados

- **json-server**: para el mock de las bicicletas
- **react-overlays**: para el modal del formulario
- **react-datepicker**: para sumar un datepicker en la fecha del alquiler
- **react-router-dom**: para tener separadas las páginas de la aplicación

## Para levantar la aplicación

### `npm install`

### Correr este comando `npm run json-server` para levantar el json de bicicletas

### Correr este comando `npm start` en paralelo con el anterior

## Consideraciones importantes

- Se dejaron de lado test unitarios/e2e
- Se dejó de lado el correcto maquetado y manejo de archivos css, scss
- Se pasó por alto el manejo de errores y validaciones del formulario
- Se dejaron algunos comentarios dentro del código para especificar algunas consideraciones
- Se entiende que para el cálculo de Bicicletas normales se cobra un mínimo de 3 días
- Se entiende que para el cálculo de Bicicletas antiguas se cobra un mínimo de 5 días