# Actualización del sitio — IV Coloquio Internacional de Espacio y Sostenibilidad 2027

> **Documento de implementación para Claude Code**
>
> Objetivo: actualizar `espacioysostenibilidad.com` para que deje de estar centrado en Hermosillo 2025 y anuncie correctamente la cuarta edición:
>
> **IV Coloquio Internacional de Espacio y Sostenibilidad**  
> **Salud ambiental y territorio**  
> **10, 11 y 12 de febrero de 2027**  
> **Ciudad de México**
>
> Estado actual de la edición: **anuncio inicial / save the date**.  
> Mensaje operativo: **Próximamente más información. Primera Circular, Convocatoria de Carteles, programa, sede específica y registro se publicarán próximamente.**

---

## 0. Instrucción general para Claude Code

Actualiza el sitio existente **sin inventar información no confirmada**.

Antes de editar:

1. Inspecciona el repositorio, estructura, framework, componentes, rutas, SEO, assets y estilos actuales.
2. Conserva la identidad visual existente siempre que sea funcional; el cambio principal es editorial, narrativo y de jerarquía.
3. Sustituye el contenido de 2025 que todavía se muestre como vigente por el contenido de 2027.
4. Mueve la información específica de Hermosillo 2025 al archivo de ediciones anteriores.
5. No elimines evidencia histórica útil; reorganízala.
6. Actualiza metadatos, Open Graph, sitemap/SEO si el proyecto ya los maneja.
7. Revisa responsive, accesibilidad, enlaces, estados hover/focus y contraste.
8. No publiques un botón funcional de registro, Primera Circular o Convocatoria de Carteles hasta que existan sus destinos reales.

### No afirmar todavía

No inventar ni inferir:

- sede/recinto específico dentro de CDMX;
- instituciones anfitrionas de 2027;
- ponentes;
- programa u horarios;
- precio;
- aforo;
- categorías definitivas de carteles;
- fechas límite de carteles;
- participación de NASA en 2027;
- patrocinio, organización o aval de NASA;
- participación oficial del U.S. Greenhouse Gas Center;
- aliados que no hayan sido confirmados para 2027.

**Black Marble, NASA Earthdata y el U.S. Greenhouse Gas Center deben presentarse como referentes científicos y tecnológicos de la temática 2027, no como instituciones confirmadas del evento.**

---

# 1. Dirección editorial 2027

La cuarta edición debe ser más específica que un evento genérico de “salud + ambiente”.

La tesis editorial es:

> **¿Cómo usamos observaciones de la Tierra, datos geoespaciales y sistemas de monitoreo de emisiones para entender cómo el territorio afecta la salud de las personas y convertir esa evidencia en decisiones?**

La edición 2027 debe conservar el ADN del Coloquio:

**ESPACIO → DATOS → TERRITORIO → DECISIONES → IMPACTO**

Y evolucionarlo hacia:

**DEL ESPACIO AL TERRITORIO. DEL TERRITORIO A LA SALUD.**

No convertir la página en un congreso médico. El centro es **salud ambiental observada territorialmente**, con aplicaciones de sensores remotos, datos satelitales, observaciones terrestres, modelos, ciencia abierta e inteligencia territorial.

---

# 2. Hero / portada

## Contenido principal

**Eyebrow**  
`IV Coloquio Internacional de Espacio y Sostenibilidad`

**H1**  
`Salud ambiental y territorio`

**Fecha**  
`10, 11 y 12 de febrero de 2027`

**Lugar**  
`Ciudad de México`

**Texto corto**
> Observación de la Tierra, datos geoespaciales y ciencia aplicada para comprender cómo el ambiente y el territorio influyen en la salud de las personas.

**Estado**  
`Próximamente más información`

## CTA

Mostrar tres acciones, todas claramente en estado próximo:

- `Primera Circular · Próximamente`
- `Convocatoria de Carteles · Próximamente`
- `Registro · Próximamente`

No usar links falsos como `#`, `javascript:void(0)` o rutas vacías.

Si son botones visuales sin destino:

- usar `<button disabled>` o equivalente accesible;
- indicar visualmente `Próximamente`;
- no engañar al usuario con affordance de enlace activo.

## Imagen

Usar la nueva portada 2027 si ya fue agregada al repositorio.

Si todavía no existe como asset dentro del repo:

- crear un placeholder limpio;
- no reciclar como hero principal la portada de Hermosillo 2025;
- mantener espacio preparado para `cover-2027`.

La imagen debe comunicar CDMX + territorio + observación terrestre + salud ambiental, evitando estética médica genérica de estetoscopios, cruces, ADN o stock hospitalario.

---

# 3. Introducción principal

## Título

### El territorio también determina nuestra salud

## Copy

La salud de una población no depende únicamente de lo que ocurre dentro de un hospital. También se construye en el territorio: en la calidad del aire, las emisiones, la infraestructura, el acceso a servicios, el clima, la energía, el agua, la movilidad y la forma en que las ciudades crecen y responden ante eventos extremos.

El **IV Coloquio Internacional de Espacio y Sostenibilidad** llegará a **Ciudad de México los días 10, 11 y 12 de febrero de 2027** con la temática **“Salud ambiental y territorio”**.

La cuarta edición explorará aplicaciones de **observación de la Tierra, datos satelitales, sistemas geoespaciales, ciencia abierta e inteligencia artificial** para observar patrones territoriales, identificar riesgos ambientales y convertir datos en mejores decisiones para ciudades y comunidades.

Esta edición tendrá una orientación especialmente aplicada, tomando como referentes capacidades como **NASA Black Marble**, que permite estudiar cambios en la actividad y luminosidad nocturna de los territorios, y los enfoques del **U.S. Greenhouse Gas Center**, que integran observaciones y modelos para analizar gases de efecto invernadero, emisiones urbanas y grandes eventos de metano.

> **Importante para el sitio:** nombrarlos como referentes tecnológicos y científicos. No presentar su presencia en el evento como confirmada.

---

# 4. Tres aplicaciones prioritarias para 2027

En lugar de una lista larga de 8–10 temas, construir **tres grandes bloques de aplicación**.

---

## 4.1 La ciudad después del anochecer

### Black Marble, actividad humana y resiliencia territorial

Las luces nocturnas observadas desde el espacio permiten analizar otra dimensión de las ciudades: cambios en patrones de actividad, electrificación, crecimiento urbano, interrupciones de energía y recuperación después de desastres.

**NASA Black Marble**, basado en observaciones VIIRS Day/Night Band, ofrece una serie global de productos de luces nocturnas que puede utilizarse como una capa de inteligencia territorial para estudiar cómo cambia la presencia humana sobre el territorio.

### Aplicaciones a destacar

- cambios en actividad y expansión urbana;
- continuidad o interrupción de infraestructura eléctrica;
- respuesta y recuperación ante eventos extremos;
- desigualdades territoriales visibles mediante acceso y actividad nocturna;
- iluminación artificial como variable ambiental;
- combinación de luces nocturnas con otras capas de clima, población, infraestructura y exposición.

### Ejemplo narrativo

Black Marble fue utilizado para observar la pérdida y recuperación de electricidad en Puerto Rico después del huracán María. Ese tipo de aplicación muestra cómo un dato satelital puede pasar de ser una imagen del planeta de noche a una herramienta para comprender vulnerabilidad, infraestructura y recuperación comunitaria.

### Precisión técnica

No afirmar que Black Marble “mide salud”.  
Black Marble mide radiancia/luz nocturna y puede utilizarse como **indicador o variable territorial** dentro de análisis más amplios.

No presentar Black Marble High Definition de 30 m como medición cuantitativa directa: NASA señala que BMHD es un producto modelado/downscaled orientado a visualización. Para análisis cuantitativo, referir a los productos científicos VNP46 y su documentación.

---

## 4.2 Emisiones que también tienen geografía

### Gases de efecto invernadero, aire y salud urbana

Las emisiones no son únicamente cifras nacionales. Tienen fuentes, corredores, industrias, zonas urbanas y patrones espaciales.

El **U.S. Greenhouse Gas Center** es un referente de cómo integrar observaciones satelitales, mediciones terrestres, inventarios y modelos para estudiar **CO₂, CH₄, fuentes antropogénicas, emisiones urbanas y eventos de gran emisión**.

### Aplicaciones a destacar

- detección y seguimiento de grandes emisiones de metano;
- análisis espacial de CO₂ y CH₄ en territorios urbanos;
- integración de observaciones satelitales con redes terrestres;
- relación metodológica entre emisiones climáticas y contaminantes atmosféricos;
- evaluación territorial de estrategias de reducción de emisiones;
- localización de fuentes y apoyo a decisiones ambientales.

### Referentes especialmente relevantes

**OCO-3 y ciudades**  
El U.S. GHG Center documenta el uso de observaciones OCO-3 para estudiar concentraciones de CO₂ sobre grandes ciudades y evaluar patrones asociados a transporte, industria y actividad urbana.

**GRA²PES**  
El sistema GRA²PES integra gases de efecto invernadero y especies relacionadas con calidad del aire —incluyendo CO₂, CO, NOₓ, SO₂ y PM2.5— y es un buen **referente metodológico** para conectar cambio climático con soluciones de salud pública.

**Metano / EMIT / AVIRIS**  
La detección de grandes plumas de metano desde plataformas espaciales y aerotransportadas muestra cómo la observación remota puede localizar eventos de emisión que requieren investigación y mitigación.

### Precisión territorial

Muchos datasets específicos del U.S. GHG Center son de Estados Unidos. Presentarlos como **referentes de metodología, interoperabilidad y aplicación**, no como cobertura garantizada para México.

Cuando se mencione OCO-3, sí puede explicarse que es un instrumento con observaciones de ciudades a escala global, pero no prometer una cobertura o campaña específica sobre CDMX para el Coloquio.

---

## 4.3 De observar a decidir

### Inteligencia territorial para salud ambiental

La observación satelital adquiere valor cuando se combina con información local y conduce a decisiones.

Este bloque debe conectar:

- observaciones de la Tierra;
- sensores terrestres;
- inventarios;
- información de población;
- infraestructura urbana;
- modelos ambientales;
- inteligencia artificial;
- ciencia abierta;
- política pública.

El énfasis del Coloquio debe estar en **casos de uso**, no en presentar tecnologías como fines en sí mismas.

### Preguntas guía

- ¿Qué puede observarse desde el espacio que sea útil para la salud ambiental?
- ¿Qué variables necesitan complementarse con sensores o datos terrestres?
- ¿Cómo se traducen emisiones y cambios territoriales en exposición y vulnerabilidad?
- ¿Cómo identificamos desigualdades entre colonias, municipios o regiones?
- ¿Cómo pasamos de un mapa a una decisión pública?
- ¿Qué productos pueden construir estudiantes, investigadores, gobiernos y organizaciones con datos abiertos?

---

# 5. Frase conceptual

Usar una de estas como línea editorial principal:

> **Del espacio al territorio. Del territorio a la salud.**

Alternativa secundaria:

> **Observar el territorio para construir entornos más saludables.**

No saturar el sitio con demasiados slogans.

---

# 6. Primera Circular

Crear una tarjeta/sección prominente.

## Primera Circular 2027

**Estado: PRÓXIMAMENTE**

Texto:

> La Primera Circular del IV Coloquio Internacional de Espacio y Sostenibilidad presentará la información inicial de la edición 2027: objetivos, ejes de aplicación, modalidades de participación, sede, actividades, información de registro y Convocatoria de Carteles.
>
> **Ciudad de México · 10–12 de febrero de 2027 · Salud ambiental y territorio**
>
> Disponible próximamente.

Cuando el PDF exista:

- reemplazar el estado por `Descargar Primera Circular`;
- abrir en nueva pestaña;
- mostrar tipo `PDF` y tamaño si puede obtenerse;
- mantener URL estable.

---

# 7. Convocatoria de Carteles

Crear una segunda tarjeta/sección equivalente.

## Convocatoria de Carteles 2027

**Estado: PRÓXIMAMENTE**

Texto:

> El IV Coloquio Internacional de Espacio y Sostenibilidad abrirá una Convocatoria de Carteles para presentar proyectos, investigaciones, prototipos y aplicaciones relacionados con **salud ambiental, territorio, observación de la Tierra y datos geoespaciales**.
>
> Se dará prioridad a trabajos que transformen datos en aplicaciones, análisis territoriales o herramientas útiles para comunidades e instituciones.
>
> Bases, fechas, formato y criterios de participación serán publicados próximamente.

No inventar:

- dimensiones;
- plantilla;
- número de autores;
- fecha límite;
- categorías;
- costo;
- premios.

---

# 8. Cronología: cuatro ediciones, cuatro territorios

La historia debe funcionar como evidencia de continuidad, no competir visualmente con 2027.

## 2023 · Guadalajara, Jalisco

### I Coloquio Internacional de Espacio y Sostenibilidad

**Idea:** Observación de la Tierra para la sostenibilidad.

La primera edición reunió a academia, gobierno, empresas, organizaciones y especialistas vinculados con NASA para discutir aplicaciones de observación de la Tierra en México. NASA Science reportó más de 120 participantes y documentó el uso y divulgación de misiones y herramientas como ICESat-2, GEDI, Landsat y GLOBE.

**Concepto resumido:**  
`OBSERVAR`

---

## 2024 · Morelia, Michoacán

### II Coloquio Internacional — Espacio y Justicia Ambiental

**Idea:** Usar tecnología espacial para proteger territorios.

La segunda edición llevó la conversación hacia justicia ambiental, comunidades y protección de ecosistemas. El caso de **Guardián Forestal** mostró cómo información satelital puede apoyar la detección de deforestación y fortalecer acciones de protección ambiental.

**Concepto resumido:**  
`PROTEGER`

---

## 2025 · Hermosillo, Sonora

### III Coloquio Internacional — Ciencia y cooperación internacional para la gestión sostenible del agua

**Idea:** Territorializar soluciones para recursos críticos.

Celebrado el 3 de octubre de 2025 en Tecnológico de Monterrey Campus Sonora Norte, abordó agua, sequía, precipitación, océanos, gobernanza, sistemas agroalimentarios y análisis con datos satelitales.

NASA Openscapes documentó un taller asociado sobre uso de datos satelitales para gestión del agua y análisis climático. El registro en Luma alcanzó 200 asistentes y se agotó.

**Concepto resumido:**  
`GESTIONAR`

---

## 2027 · Ciudad de México

### IV Coloquio Internacional — Salud ambiental y territorio

**Idea:** Entender cómo el territorio se relaciona con la salud de las personas.

La cuarta edición pondrá el énfasis en aplicaciones de observación terrestre, luces nocturnas, emisiones, datos geoespaciales e inteligencia territorial.

**10, 11 y 12 de febrero de 2027**

**Concepto resumido:**  
`CUIDAR`

---

## Visual de evolución

Puede construirse una línea sencilla:

`2023 OBSERVAR → 2024 PROTEGER → 2025 GESTIONAR → 2027 CUIDAR`

Subtexto:

`Datos → territorio → decisiones → personas`

---

# 9. Referentes técnicos 2027

Crear una sección visual llamada:

## Referentes para la conversación 2027

Subtítulo:

> Plataformas, productos y casos de uso que muestran cómo la observación de la Tierra puede convertirse en inteligencia territorial.

Mostrar **máximo 4–6 tarjetas en home**. No convertir la portada en un directorio de enlaces.

### Tarjetas recomendadas en home

1. **NASA Black Marble — Stories from the Night Sky**
   - Visualmente potente.
   - Explica ciudades, desastres, apagones, actividad humana y cambios en luces nocturnas.
   - URL: https://svs.gsfc.nasa.gov/14872/

2. **NASA Black Marble — VNP46 product suite**
   - Referencia técnica.
   - URL: https://blackmarble.gsfc.nasa.gov/VNP46A1.html

3. **U.S. Greenhouse Gas Center — Urban data**
   - Emisiones urbanas, CO₂, CH₄, inventarios y redes.
   - URL: https://earth.gov/ghgcenter/data-catalog?taxonomy=%7B%22Topics%22%3A%5B%22urban%22%5D%7D

4. **U.S. Greenhouse Gas Center — OCO-3 / Los Angeles**
   - Caso de observaciones de CO₂ sobre una megaciudad.
   - URL: https://earth.gov/ghgcenter/stories/losangeles

5. **U.S. Greenhouse Gas Center — Methane / EMIT**
   - Grandes eventos de emisión y observación remota.
   - URL: https://earth.gov/ghgcenter/stories/emit-extension-aviris-flights

6. **NASA Black Marble — Puerto Rico after Hurricane Maria**
   - Caso concreto de infraestructura, apagones y recuperación.
   - URL: https://svs.gsfc.nasa.gov/12616

---

# 10. Sección de fuentes / referentes con thumbnails

Crear una sección reutilizable de tarjetas de fuentes.

Nombre sugerido:

## Referencias y trayectoria

o dividirla en:

- `Referentes científicos 2027`
- `Archivo y cobertura del Coloquio`

Cada tarjeta debe tener:

- thumbnail;
- nombre de la fuente;
- título;
- año;
- etiqueta (`NASA`, `Gobierno`, `Universidad`, `Medio`, `Archivo`, `Datos`);
- una descripción de 1–2 líneas;
- enlace externo;
- icono de enlace externo;
- `rel="noopener noreferrer"`.

No mostrar 25 tarjetas simultáneamente en home.  
En home: 6–9 destacadas.  
Crear una vista/ruta o acordeón `Ver todas las fuentes` para el resto.

---

# 11. Extracción de thumbnails

Claude Code debe intentar obtener thumbnail real desde cada URL.

## Orden de extracción

1. `meta[property="og:image"]`
2. `meta[name="twitter:image"]`
3. `meta[property="twitter:image"]`
4. `<link rel="image_src">`
5. primera imagen editorial significativa de la página;
6. favicon/logo del dominio como fallback;
7. placeholder local con nombre de la institución.

Normalizar URLs relativas a absolutas usando el origen de la fuente.

## Reglas

- No usar capturas arbitrarias si existe `og:image`.
- No extraer banners de cookies, anuncios o trackers.
- No usar imágenes de perfil de autores como thumbnail de un artículo cuando exista imagen editorial.
- En NASA SVS aprovechar sus thumbnails explícitos cuando estén disponibles.
- Para páginas de medios, no rehostear/cropear material protegido sin necesidad. Preferir URL externa de `og:image` si es estable y permitido; si falla, usar favicon/branding editorial.
- Para NASA y otras fuentes públicas que permitan reutilización, se puede cachear una copia optimizada si la arquitectura actual del sitio lo requiere.
- Agregar `alt` descriptivo.
- Lazy-load en tarjetas fuera del viewport.
- Mantener ratio uniforme, sugerido `16:9`, con `object-fit: cover`.
- Si el dominio bloquea hotlinking, usar fallback, no romper la tarjeta.

## Cache opcional

Si el stack permite server/build-time fetching:

- resolver metadatos al build;
- guardar un JSON local de metadata para no pedir todas las páginas en cada render;
- establecer timeout;
- manejar `403`, `429`, `5xx`;
- no fallar build por una imagen externa.

Ejemplo de objeto:

```ts
type ReferenceCard = {
  id: string
  title: string
  publisher: string
  year?: number
  url: string
  category: 'technical' | 'history' | 'media' | 'government' | 'academic'
  description: string
  image?: string
  imageSource?: 'og' | 'twitter' | 'page' | 'favicon' | 'fallback'
  featured?: boolean
}
```

---

# 12. FUENTES TÉCNICAS 2027 — Black Marble

Estas URLs deben quedar disponibles para que Claude extraiga metadata, thumbnail y contexto.

## BM-01 — NASA Black Marble Product Suite

**Título:** VNP46A1 Daily At-sensor TOA Nighttime Radiance Product  
**Institución:** NASA Black Marble / Goddard  
**URL:** https://blackmarble.gsfc.nasa.gov/VNP46A1.html  
**Uso:** referencia técnica del producto VNP46 y luces nocturnas diarias.  
**Featured:** sí.

## BM-02 — NASA Scientific Visualization Studio

**Título:** NASA's Black Marble: Stories from the Night Sky  
**Institución:** NASA SVS  
**URL:** https://svs.gsfc.nasa.gov/14872/  
**Uso:** visual principal para explicar aplicaciones de luces nocturnas en ciudades, desastres, actividad humana y recuperación.  
**Featured:** sí.

## BM-03 — NASA Earth Observatory

**Título:** Night Light Maps Open Up New Applications  
**Institución:** NASA Earth Observatory  
**URL:** https://earthobservatory.nasa.gov/IOTD/view.php?id=90008  
**Uso:** contexto sobre aplicaciones en urbanización, actividad humana, electrificación y respuesta a desastres.  
**Featured:** sí.

## BM-04 — NASA Scientific Visualization Studio

**Título:** Black Marble View of Puerto Rico After Hurricane Maria  
**Institución:** NASA SVS  
**URL:** https://svs.gsfc.nasa.gov/12616  
**Uso:** caso aplicado de interrupción/restauración de electricidad y recuperación territorial.  
**Featured:** sí.

## BM-05 — NASA Scientific Visualization Studio

**Título:** Change in Night Lights between 2012 and 2023  
**Institución:** NASA SVS  
**URL:** https://svs.gsfc.nasa.gov/5276  
**Uso:** cambio temporal de luces nocturnas a escala global.  
**Featured:** opcional.

## BM-06 — NASA Scientific Visualization Studio

**Título:** Change in Night Lights between 2012 and 2023 — EIC Version  
**Institución:** NASA SVS  
**URL:** https://svs.gsfc.nasa.gov/5313/  
**Uso:** visualización amplia orientada a Earth Information Center.  
**Featured:** opcional.

## BM-07 — NASA Scientific Visualization Studio

**Título:** Worldview: Black Marble nighttime imagery from Suomi NPP  
**Institución:** NASA SVS / Worldview  
**URL:** https://svs.gsfc.nasa.gov/5261  
**Uso:** visualización de datos Black Marble en Worldview.  
**Featured:** no.

## BM-08 — NASA Earth Observatory

**Título:** Earth at Night  
**Institución:** NASA Earth Observatory  
**URL:** https://earthobservatory.nasa.gov/features/NightLights  
**Uso:** archivo visual y contexto de Black Marble.  
**Featured:** opcional.

## BM-09 — NASA Worldview

**Título:** NASA Worldview — Nighttime Lights / Black Marble  
**Institución:** NASA Earthdata  
**URL:** https://worldview.earthdata.nasa.gov/  
**Uso:** exploración interactiva de capas.  
**Featured:** no.

---

# 13. FUENTES TÉCNICAS 2027 — U.S. Greenhouse Gas Center

## GHG-01 — U.S. Greenhouse Gas Center

**Título:** U.S. Greenhouse Gas Center  
**Institución:** Earth.gov / U.S. GHG Center  
**URL:** https://earth.gov/ghgcenter/  
**Uso:** portal principal.  
**Featured:** sí.

## GHG-02 — About

**Título:** The U.S. Greenhouse Gas Center  
**URL:** https://earth.gov/ghgcenter/about  
**Uso:** descripción institucional.  
**Featured:** no.

## GHG-03 — Data Catalog

**Título:** Data Catalog  
**URL:** https://earth.gov/ghgcenter/data-catalog  
**Uso:** fuentes, sumideros, emisiones, flujos y eventos.  
**Featured:** sí.

## GHG-04 — Urban datasets

**Título:** Data Catalog — Urban  
**URL:** https://earth.gov/ghgcenter/data-catalog?taxonomy=%7B%22Topics%22%3A%5B%22urban%22%5D%7D  
**Uso:** conjuntos de datos urbanos CO₂/CH₄, redes, inventarios y mediciones.  
**Featured:** sí.

## GHG-05 — Los Angeles / OCO-3

**Título:** Satellite Data to Help Measure Impact of Los Angeles Climate Solutions  
**URL:** https://earth.gov/ghgcenter/stories/losangeles  
**Uso:** aplicación de OCO-3 y datos complementarios para emisiones urbanas.  
**Featured:** sí.

## GHG-06 — Urban Testbeds

**Título:** Innovative Urban Testbeds to Advance Emissions Estimates  
**URL:** https://earth.gov/ghgcenter/stories/urban-testbed  
**Uso:** combinación de redes terrestres, aeronaves y satélites.  
**Featured:** sí.

## GHG-07 — Urban stories

**Título:** Topic: Urban Emissions  
**URL:** https://earth.gov/ghgcenter/stories/urban  
**Uso:** colección de aplicaciones urbanas.  
**Featured:** opcional.

## GHG-08 — Methane stories

**Título:** Topic: Methane Emissions  
**URL:** https://earth.gov/ghgcenter/stories/methane  
**Uso:** aplicaciones de detección y análisis de metano.  
**Featured:** opcional.

## GHG-09 — EMIT / AVIRIS

**Título:** NASA Expands Capabilities in Methane Detection from Air and Space  
**URL:** https://earth.gov/ghgcenter/stories/emit-extension-aviris-flights  
**Uso:** detección de grandes eventos de metano.  
**Featured:** sí.

## GHG-10 — EMIT Methane Plume Viewer

**Título:** EMIT Methane Plume Viewer  
**URL:** https://earth.gov/ghgcenter/data-tools/view/emit-plume-viewer  
**Uso:** herramienta visual / demostración.  
**Featured:** opcional.

## GHG-11 — Stories index

**Título:** U.S. GHG Center Stories  
**URL:** https://earth.gov/ghgcenter/stories  
**Uso:** incluye casos de ciudades, metano, GRA²PES, Vulcan y redes urbanas.  
**Featured:** sí.

## GHG-12 — GOSAT methane

**Título:** GOSAT-based Top-down Total and Natural Methane Emissions  
**URL:** https://earth.gov/ghgcenter/data-catalog/gosat-based-ch4budget-yeargrid-v1  
**Uso:** ejemplo de integración modelo + observaciones satelitales.  
**Featured:** no.

## GHG-13 — Los Angeles Megacity Carbon Project data

**Título:** Carbon Dioxide and Methane Concentrations from the Los Angeles Megacity Carbon Project  
**URL:** https://earth.gov/ghgcenter/data-catalog/lam-testbed-ghg-concentrations  
**Uso:** medición terrestre urbana complementaria a satélites.  
**Featured:** opcional.

## GHG-14 — Greenhouse gases on Earth.gov

**Título:** Greenhouse Gases  
**URL:** https://earth.gov/themes/greenhouse-gases  
**Uso:** contexto general y vínculo al GHG Center.  
**Featured:** no.

## GHG-15 — OCO-3

**Título:** Orbiting Carbon Observatory-3  
**Institución:** NASA JPL  
**URL:** https://ocov3.jpl.nasa.gov/  
**Uso:** contexto de observación de CO₂ y ciudades.  
**Featured:** sí.

## GHG-16 — NASA Carbon Monitoring System

**Título:** NASA Carbon Monitoring System  
**URL:** https://carbon.nasa.gov/cms/  
**Uso:** antecedente técnico y relación con productos operacionales que alimentan esfuerzos como el U.S. GHG Center.  
**Featured:** opcional.

---

# 14. FUENTES HISTÓRICAS — I Coloquio Guadalajara 2023

## GDL-01 — NASA Science

**Título:** International Colloquium on Space and Sustainability in Guadalajara, Jalisco, Mexico  
**URL:** https://science.nasa.gov/learning-resources/science-activation/international-colloquium-on-space-and-sustainability-in-guadalajara-jalisco-mexico/  
**Uso:** fuente primaria NASA; noviembre 2023; más de 120 participantes; observación de la Tierra, GLOBE, ICESat-2, GEDI, Landsat.  
**Featured:** sí.

## GDL-02 — El Ciudadano Jalisco

**Título:** El Coloquio Internacional de Espacio y Sostenibilidad impulsa la colaboración para el desarrollo sostenible en Jalisco  
**URL:** https://elciudadanojalisco.mx/el-coloquio-internacional-de-espacio-y-sostenibilidad-impulsa-la-colaboracion-para-el-desarrollo-sostenible-en-jalisco/  
**Uso:** cobertura local; Ciudad Creativa Digital; NASA, UNESCO, SELPER; ICESat-2, GEDI y CMS.  
**Featured:** sí.

## GDL-03 — Quadratín Jalisco

**Título:** Realizan Coloquio Internacional de Espacio y Sostenibilidad  
**URL:** https://jalisco.quadratin.com.mx/?p=836082  
**Uso:** cobertura del 15–16 de noviembre de 2023 y enfoque de cuádruple hélice.  
**Featured:** sí.

## GDL-04 — Universidad Autónoma de Guadalajara

**Título:** Promueve investigaciones sobre sustentabilidad en eventos nacionales e internacionales  
**URL:** https://www.uag.mx/es/mediahub/promueve-investigaciones-sobre-sustentabilidad-en-eventos-nacionales-e-internacionales/2024-01  
**Uso:** evidencia académica externa de participación en el I Coloquio.  
**Featured:** opcional.

## GDL-05 — Tecnológico de Monterrey

**Título:** La NASA: alumnos Tec van a mundial con app vs incendios forestales  
**URL:** https://conecta.tec.mx/es/noticias/sonora-norte/educacion/la-nasa-alumnos-tec-van-mundial-con-app-vs-incendios-forestales  
**Uso:** participación estudiantil y vínculo con Space Apps / Coloquio.  
**Featured:** opcional.

## GDL-06 — NASA Carbon Monitoring System

**Título:** First International Colloquium on Space and Sustainability — announcement  
**URL:** https://cce-datasharing.gsfc.nasa.gov/programs/announcements/10/html/1/  
**Uso:** anuncio NASA CMS del encuentro en Guadalajara.  
**Featured:** no.

## GDL-07 — NASA Carbon Monitoring System

**Título:** Meetings — First International Colloquium on Space and Sustainability  
**URL:** https://cce-datasharing.gsfc.nasa.gov/programs/meetings/6/h/0/  
**Uso:** registro histórico de fechas/sede.  
**Featured:** no.

## GDL-08 — CONAFOR

**Título:** Informe de Autoevaluación enero–diciembre 2023  
**URL:** https://www.conafor.gob.mx/transparencia/docs/2023/Informe_de_autoevaluacion_enero_diciembre_2023.pdf  
**Uso:** documento federal que registra participación de CONAFOR en el Coloquio.  
**Featured:** no.

## GDL-09 — El Informador

**Título:** Inauguran coloquio sobre el espacio y sostenibilidad en Jalisco  
**URL:** https://www.informador.mx/jalisco/NASA-Inauguran-coloquio-sobre-el-espacio-y-sostenibilidad-en-Jalisco-20231115-0085.html  
**Uso:** cobertura periodística de inauguración.  
**Featured:** opcional.

### Referencia histórica no activa — EO4SDG

La página:

`https://eo4sdg.org/space-and-sustainability-colloquium/`

publicó una reseña extensa de la primera edición, pero **actualmente el sitio/página se encuentra caído y devuelve error del servidor**.

Reglas:

- NO mostrarla como tarjeta activa.
- NO usarla como CTA.
- NO intentar extraer thumbnail.
- Puede mencionarse únicamente en archivo/notas como `Referencia histórica — sitio actualmente fuera de servicio`.

Si se conserva como referencia interna, marcar `status: offline`.

---

# 15. FUENTES HISTÓRICAS — II Coloquio Morelia 2024

## MLM-01 — Gobierno de Michoacán

**Título:** Con participación de especialistas de la NASA, inaugura Bedolla coloquio internacional Espacio y Justicia Ambiental  
**URL:** https://michoacan.gob.mx/noticias/con-participacion-de-especialistas-de-la-nasa-inaugura-bedolla-coloquio-internacional-espacio-y-justicia-ambiental/  
**Uso:** fuente gubernamental principal; justicia ambiental, Guardián Forestal, participación de especialistas.  
**Featured:** sí.

## MLM-02 — NASA Carbon Monitoring System

**Título:** Forest Guardian: Saving Mexico's Forests Using EO, Coding, and a Pinch of Legal Insights  
**URL:** https://carbon.nasa.gov/policy_speaker_05032024.html  
**Uso:** contexto técnico de Guardián Forestal y vínculo con observación de la Tierra.  
**Featured:** sí.

## MLM-03 — Quadratín Michoacán

**Título:** Fortalecen protección de recursos naturales con Guardián Forestal  
**URL:** https://www.quadratin.com.mx/sucesos/fortalecen-proteccion-de-recursos-naturales-con-guardian-forestal/  
**Uso:** cobertura adicional.  
**Featured:** opcional.

## MLM-04 — Reporte Índigo / Energía & Industria

**Título:** NASA impulsa desarrollo de tecnologías para el cuidado ambiental en Michoacán  
**URL:** https://energia.reporteindigo.com/renovable/NASA-impulsa-desarrollo-de-tecnologias-para-el-cuidado-ambiental-en-Michoacan-20241120-0008.html  
**Uso:** cobertura independiente adicional.  
**Featured:** sí.

## MLM-05 — EcoAmericas

**Título:** Mexican monitoring group gets NASA’s attention  
**URL:** https://www.ecoamericas.com/issues/article/2024/11/37DFD6BD-11D1-4E9C-8049-03DFAD016C55  
**Uso:** cobertura internacional; puede tener paywall.  
**Featured:** opcional.

---

# 16. FUENTES HISTÓRICAS — III Coloquio Hermosillo 2025

## HMO-01 — Sitio oficial

**Título:** III Coloquio Internacional de Espacio y Sostenibilidad 2025  
**URL:** https://espacioysostenibilidad.com/  
**Uso:** sitio actual que será actualizado; conservar contenido 2025 en archivo.  
**Featured:** no como referente externo.

## HMO-02 — Ediciones anteriores

**Título:** Ediciones Anteriores  
**URL:** https://espacioysostenibilidad.com/ediciones  
**Uso:** ruta que debe actualizarse para incorporar formalmente 2025.  
**Featured:** no.

## HMO-03 — NASA Openscapes

**Título:** Workshop on use of NASA satellite data for water management and climate analysis, and NASA International Space Apps Challenge, in Hermosillo, Sonora, Mexico  
**URL:** https://nasa-openscapes.github.io/news/2025-10-02-mexico-workshop/index.html  
**URL alterna/cross-post:** https://openscapes.org/events/2025-10-02-mexico-workshop/  
**Uso:** referencia técnica/institucional del III Coloquio y taller.  
**Featured:** sí.

## HMO-04 — Proyecto Puente

**Título:** Tec de Monterrey impulsa el cuidado ambiental con el III Coloquio Internacional de Espacio y Sostenibilidad en Hermosillo  
**URL:** https://proyectopuente.com.mx/2025/10/03/tec-de-monterrey-impulsa-el-cuidado-ambiental-con-el-lll-coloquio-internacional-de-espacio-y-sostenibilidad-en-hermosillo/  
**Uso:** cobertura periodística local; más de 120 estudiantes.  
**Featured:** sí.

## HMO-05 — Luma

**Título:** III Coloquio Internacional de Espacio y Sostenibilidad  
**URL:** https://luma.com/qhkq8lji  
**Uso:** página histórica de registro; 200 asistentes y sold out.  
**Featured:** sí.

## HMO-06 — Charlas Espaciales / Luma

**Título:** Charlas Espaciales  
**URL:** https://luma.com/h9g3qrtt  
**Uso:** actividad periférica previa al III Coloquio.  
**Featured:** opcional.

---

# 17. Qué debe retirarse del home actual

Todo lo siguiente debe desaparecer como información vigente y moverse al archivo 2025 cuando aplique:

- `III Coloquio 2025`;
- `3 de octubre de 2025`;
- `Hermosillo, Sonora`;
- `Tecnológico de Monterrey Campus Sonora Norte` como sede actual;
- programa horario 08:00–13:00;
- “evento gratuito” como condición vigente;
- “cupos limitados”;
- speakers 2025;
- ejes exclusivos de agua 2025;
- Congreso Nacional de Oceanografía como CTA actual;
- Space Apps Hermosillo como CTA principal actual;
- registro Luma 2025 como botón de registro vigente;
- frases tipo “la tercera edición promete ser...”;
- cualquier texto que presente 2025 como futuro.

Mantener esos datos únicamente en una página/entrada histórica de la edición 2025.

---

# 18. FAQ 2027

Sustituir FAQ vieja por una muy breve.

### ¿Cuándo se realizará el IV Coloquio?
Los días **10, 11 y 12 de febrero de 2027**.

### ¿Dónde se realizará?
En **Ciudad de México**. La sede específica se anunciará próximamente.

### ¿Cuál es la temática de 2027?
**Salud ambiental y territorio**, con énfasis en aplicaciones de observación de la Tierra, datos geoespaciales, emisiones e inteligencia territorial.

### ¿Ya está abierto el registro?
No. **El registro se anunciará próximamente.**

### ¿Habrá Convocatoria de Carteles?
Sí. **Las bases serán publicadas próximamente.**

### ¿Dónde podré consultar la Primera Circular?
Se publicará en este sitio. **Próximamente estará disponible para descarga.**

### ¿NASA participará en 2027?
No publicar una respuesta afirmativa ni negativa hasta contar con confirmación institucional.  
Si se necesita mostrar FAQ desde ahora, omitir esta pregunta.

---

# 19. SEO

Actualizar, según soporte del proyecto:

## `<title>`

`IV Coloquio Internacional de Espacio y Sostenibilidad 2027 | CDMX`

## Meta description

`El IV Coloquio Internacional de Espacio y Sostenibilidad se realizará el 10, 11 y 12 de febrero de 2027 en Ciudad de México. Tema: Salud ambiental y territorio. Próximamente: Primera Circular, Convocatoria de Carteles, programa y registro.`

## OG title

`IV Coloquio Internacional de Espacio y Sostenibilidad 2027`

## OG description

`Salud ambiental y territorio · 10–12 febrero 2027 · Ciudad de México`

## OG image

Usar la nueva portada oficial 2027 cuando esté disponible en el repositorio.

## Canonical

Mantener el canonical actual del dominio, salvo que la arquitectura existente utilice ruta por edición.

---

# 20. Structured data / JSON-LD

Si el sitio ya utiliza JSON-LD de eventos, actualizarlo.

Usar únicamente datos confirmados:

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "IV Coloquio Internacional de Espacio y Sostenibilidad 2027",
  "description": "Salud ambiental y territorio",
  "startDate": "2027-02-10",
  "endDate": "2027-02-12",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Ciudad de México",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ciudad de México",
      "addressCountry": "MX"
    }
  }
}
```

No añadir `offers`, venue, precio o disponibilidad hasta confirmar registro y sede.

No usar NASA como `organizer`, `sponsor` o `performer` sin confirmación explícita.

---

# 21. Navegación recomendada

Menú principal compacto:

- `Inicio`
- `2027`
- `Ediciones`
- `Referencias`
- `FAQ`

En la sección 2027, anchors:

- `Salud ambiental y territorio`
- `Aplicaciones`
- `Carteles`
- `Primera Circular`

No crear secciones vacías de “Ponentes” o “Programa” solo para mostrar espacios enormes sin información. Se pueden añadir cuando exista contenido.

---

# 22. Jerarquía recomendada del home

1. **Hero 2027**
2. **Salud ambiental y territorio**
3. **Tres aplicaciones prioritarias**
4. **Primera Circular + Convocatoria de Carteles**
5. **Referentes para la conversación 2027**
6. **Cuatro ediciones, cuatro territorios**
7. **Cobertura / fuentes**
8. **FAQ**
9. **CTA final: Próximamente más información**

---

# 23. CTA final

## Ciudad de México · febrero de 2027

### El territorio también determina nuestra salud.

> El IV Coloquio Internacional de Espacio y Sostenibilidad reunirá nuevas conversaciones sobre observación de la Tierra, emisiones, datos e inteligencia territorial.

**10, 11 y 12 de febrero de 2027**

`Próximamente más información`

Debajo:

- `Primera Circular · Próximamente`
- `Convocatoria de Carteles · Próximamente`
- iconos/redes oficiales ya existentes.

---

# 24. Criterios de aceptación para Claude Code

Antes de terminar:

- [ ] El home dice `IV Coloquio`, no `III`.
- [ ] La temática principal es `Salud ambiental y territorio`.
- [ ] Fechas correctas: `10, 11 y 12 de febrero de 2027`.
- [ ] Lugar: `Ciudad de México`.
- [ ] No se inventó recinto.
- [ ] No se inventaron ponentes.
- [ ] No se afirmó participación de NASA/GHG Center para 2027.
- [ ] Se muestran Primera Circular y Carteles como `Próximamente`.
- [ ] No quedan botones activos hacia registro 2025 desde el home.
- [ ] Hermosillo 2025 está en el archivo histórico.
- [ ] Ediciones anteriores incluye 2023, 2024 y 2025.
- [ ] Se conservan las fuentes históricas.
- [ ] EO4SDG no aparece como fuente activa; solo como referencia histórica caída.
- [ ] Black Marble y U.S. GHG Center aparecen como referentes, no como organizadores.
- [ ] Hay máximo tres aplicaciones prioritarias.
- [ ] Los textos evitan convertir el evento en un congreso médico genérico.
- [ ] Cards de referencias tienen thumbnails o fallback sin romper layout.
- [ ] Enlaces externos abren correctamente y son accesibles.
- [ ] SEO y OG fueron actualizados.
- [ ] JSON-LD no contiene información no confirmada.
- [ ] Mobile y desktop revisados.
- [ ] No hay errores de consola, rutas rotas ni imágenes 404.

---

# 25. Resumen conceptual para no perder el rumbo

La edición 2027 no debe comunicarse como:

> “Un congreso sobre muchos problemas de salud ambiental.”

Debe comunicarse como:

> **Una conversación aplicada sobre cómo observar el territorio para comprender riesgos ambientales y construir entornos más saludables.**

Los dos referentes tecnológicos más claros son:

### NASA Black Marble

**Qué aporta:** observar actividad humana nocturna, urbanización, electrificación, interrupciones y recuperación del territorio mediante luces nocturnas.

### U.S. Greenhouse Gas Center

**Qué aporta:** integrar observaciones, inventarios y modelos para entender dónde se originan gases de efecto invernadero, cómo cambian y cómo pueden convertirse en información útil para decisiones.

La conexión editorial es:

> **La ciudad deja señales observables desde el espacio. Algunas son luz. Otras son emisiones. Ambas pueden convertirse, junto con datos locales, en información territorial para tomar mejores decisiones sobre ambiente y salud.**

---

# 26. Nota de verificación y cautelas científicas

Estas reglas deben mantenerse aunque se simplifique el copy:

1. **Black Marble no mide salud directamente.**
2. Las luces nocturnas pueden funcionar como variable/indicador de actividad, infraestructura o cambio territorial, siempre en combinación con otras fuentes.
3. **BMHD 30 m es un producto modelado/downscaled para visualización**, no debe venderse como medición física cuantitativa a 30 m.
4. El U.S. Greenhouse Gas Center es un **referente** y muchos de sus datasets específicos son de Estados Unidos.
5. Gases de efecto invernadero y contaminantes del aire no son sinónimos. Existen productos como GRA²PES que permiten estudiarlos conjuntamente, pero mantener la distinción.
6. No afirmar causalidad de salud a partir de una sola capa satelital.
7. Priorizar formulaciones como `analizar`, `observar`, `integrar`, `identificar patrones`, `apoyar decisiones` y evitar `diagnosticar` o `predecir enfermedades` salvo que exista un caso y evidencia específica.

---

**Fin del documento de implementación.**
