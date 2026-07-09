# Procedimiento — Publicaciones para redes sociales

> **Estado:** documento vivo · **Dueña:** Julia · Se irá **refinando con el tiempo**
> a medida que perfeccionamos la estrategia. Si cambias el proceso, edita este archivo.
> **Idioma:** en español (es el documento de trabajo de Julia). Se puede espejar a
> EN/RU si el equipo lo necesita.

## Para qué sirve

Un flujo repetible para producir publicaciones de Instagram / Facebook de JK
Accounting Group que sean: **exactas** (datos verificados), **educativas**, **100%
en la marca**, y al **tamaño correcto** de cada red — combinando lo mejor de cada
herramienta.

## Quién hace qué

- **Claude (aquí):** estrategia de temas, el texto/copy (EN/RU), el material
  fuente, el "brief de imagen" o prompt, y **el acabado final on-brand** al tamaño
  de cada red (PNG listo para publicar). Verifica los datos.
- **Nano Banana / Gemini o NotebookLM** (apps de Google, en el navegador):
  generan la **ilustración o infografía** cuando el post necesita una imagen
  creada por IA. Es lo que Julia ya paga.
- **Julia:** decide temas y aprueba; genera las imágenes en las apps de Google;
  publica.

## El flujo, paso a paso

1. **Tema.** Con Claude decidimos el tema, el ángulo y a qué duda/necesidad del
   cliente responde.
2. **Paquete de contenido (Claude).** Claude entrega:
   - **Copy del post** — título, cuerpo, hashtags, CTA (EN/RU).
   - **Material fuente** — el contenido educativo, con datos verificados.
   - **Brief visual** — descripción exacta del visual que queremos + un **prompt**
     (para Gemini) o un **paquete de fuentes + instrucción de infografía** (para
     NotebookLM).
3. **Ruta visual (decidir).** Ver la guía de decisión abajo. Tres rutas: Claude
   directo · Gemini (prompt) · NotebookLM (grounded).
4. **Generar el visual.** Julia lo genera en la app elegida (o Claude lo hace
   directo si es un diagrama).
5. **Acabado de marca (Claude).** Julia trae el visual; Claude produce la versión
   final: marca (colores/tipos/logo del brand guide), **texto y números exactos y
   legibles**, y **tamaño exacto** de la red → PNG.
6. **Revisión y publicar.** Checklist: ¿on-brand? ¿datos verificados? ¿bilingüe
   correcto? ¿tamaño correcto? → publicar.

## Guía de decisión: ¿Gemini, NotebookLM o Claude directo?

Tu instinto es correcto: para **temas de taxes complejos y educativos**,
**NotebookLM suele ser mejor** que un prompt suelto en Gemini. Aquí el porqué y la
regla:

| Si el visual es… | Mejor herramienta | Por qué |
|---|---|---|
| **Infografía educativa densa** de un tema complejo (con contenido real, profesional) | **NotebookLM** — dale materiales de estudio (tus explicaciones, docs del IRS) | Está "anclado a fuentes": crea el visual a partir de material real, así sale con **más contenido, más preciso y más educativo**. Inventa menos. |
| **Ilustración, escena, metáfora o imagen "hero"** estilizada (sin texto crítico) | **Gemini (prompt)** | Rápido, iterativo, control del estilo. Ideal cuando el texto exacto no es el punto. |
| **Diagrama limpio con etiquetas/números exactos**, o el **asset final** | **Claude (yo)** — directo | Texto perfecto, legible, bilingüe y 100% en la marca. Muchas veces ni necesitas IA de imagen. |

### Regla de oro (crítica para una firma de taxes)

> **Nunca publiques números, cifras ni términos leídos de lo que la IA escribió
> *dentro* de una imagen.** Las IA de imagen escriben mal el texto e inventan
> datos. Los datos correctos los pone Claude/Julia en **texto verificado**, en el
> acabado final. (Coincide con el brand guide: *"real facts only — if a number
> or quote can't be verified, omit it."*)

**En la práctica casi siempre es una combinación:** NotebookLM/Gemini aporta la
riqueza visual o la ilustración → **Claude** pone la capa de marca + el texto
exacto + el tamaño. La IA da el "cómo se ve"; Claude asegura el "qué dice" y "que
sea nuestra marca".

## Tamaños por red (referencia)

- **Instagram feed:** 1080×1080 (cuadrado) · **1080×1350 (vertical 4:5 — el mejor
  para infografías)**
- **Instagram Stories / Reels:** 1080×1920
- **Facebook feed:** 1080×1080 o 1080×1350 · enlace 1200×630
- **Carrusel:** varias tarjetas a 1080×1350

## Marca

No repetimos aquí colores ni tipografías (para no desincronizar). La fuente única
es **[`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md)** — paleta,
tipografías, logo y voz. Claude aplica ese guide en cada acabado.

## Mejora continua

Este proceso va a evolucionar. Anotamos aquí lo que aprendamos:

- **Ejemplos de Nano Banana de Julia:** *(pendiente)* — Julia compartirá imágenes
  que ya creó, para que Claude entienda su estilo/uso y afine los briefs.
- **Aprendizajes / ajustes:** *(ir agregando)*
