# Evoluzion AI — Plan de Negocio Detallado
## Versión 2: con pipelines, automatizaciones específicas, límites claros y nuevos servicios

---

## 1. PIPELINE POR PLAN (qué etapas configuras en GHL)

### Starter — Pipeline genérico (1 solo pipeline, 5 etapas)

```
Nuevo Lead → Contactado → Cotizado/Agendado → Cliente → Recurrente
```

Esto es universal, sirve para cualquier industria. No hay sub-pipelines, no hay automatización condicional compleja — un cliente entra, se mueve por las 5 etapas, y las 3 automatizaciones base disparan según en qué etapa está.

**Por qué solo 1 pipeline en Starter:** si vendes algo más complejo a un cliente que apenas va a probar el sistema, te vas a tardar más en configurarlo y soportarlo de lo que te paga. El pipeline simple es la versión "de entrada" — funciona, pero no resuelve casos especiales (ej. contratos con renovación, citas recurrentes complejas).

### Growth — Pipeline + 1 pipeline secundario opcional

Mantienes el pipeline de 5 etapas, pero agregas **un segundo pipeline** según el tipo de negocio (ej. "Pipeline de Retención" para seguimiento de clientes inactivos, o "Pipeline de Renovación" para contratos). Esto es lo que justifica el precio más alto — hay más visibilidad del negocio, no solo de ventas nuevas.

### Premium — Multi-pipeline

Pipeline de ventas + pipeline de retención + pipeline de postventa/garantía, todo conectado.

---

## 2. AUTOMATIZACIONES — GROWTH, por tipo de negocio (8 automatizaciones, no "ilimitadas")

Aquí está el problema que detectaste: decir "automatizaciones ilimitadas" no significa nada para el cliente y te genera scope creep contigo mismo (el cliente puede pedir automatización #20 y tú técnicamente "se la debes"). La solución: **vendes un número fijo de automatizaciones (8 en Growth), pero le dices al cliente EXACTAMENTE cuáles son**, adaptadas a su industria. Así el valor se siente específico, no genérico.

Estas son las 8 automatizaciones estándar de Growth — la estructura (el "motor") es la misma siempre, solo cambia el texto/disparador por industria:

| # | Automatización (genérica) | Nail Salon/Spa | Clínica/Dentista | Restaurante | Gimnasio |
|---|---|---|---|---|---|
| 1 | Bienvenida inmediata | "Recibimos tu solicitud, en breve te confirmamos tu cita" | "Gracias por contactarnos, en breve un asistente te atiende" | "Recibimos tu reservación, te confirmamos en minutos" | "¡Bienvenido! Aquí tu info de la prueba gratis" |
| 2 | Confirmación de cita/cotización | Confirma hora de la cita | Confirma cita con doctor | Confirma mesa/hora | Confirma día/hora de clase |
| 3 | Recordatorio 24h antes | "Tu cita es mañana 💅" | "Tu consulta es mañana" | "Tu mesa está lista para mañana" | "Tu clase es mañana 💪" |
| 4 | Recordatorio 2h antes (anti no-show) | Mensaje corto de confirmación | Mensaje corto de confirmación | Mensaje corto de confirmación | Mensaje corto de confirmación |
| 5 | Seguimiento si no responde (3 días) | Reintento de contacto | Reintento de contacto | Reintento de contacto | Reintento de contacto |
| 6 | Reactivación de inactivos | 30 días sin visitar → "Te extrañamos" | 6 meses → recordatorio de limpieza/chequeo | 3 semanas → "¿Vuelves pronto?" | 2 semanas sin asistir → "¿Todo bien?" |
| 7 | Solicitud de reseña post-servicio | 1 día después | 3 días después | Post-visita | Post-inscripción |
| 8 | Aviso de renovación/promoción | Promo mensual masiva | Recordatorio de seguimiento anual | Promo en fechas especiales | Aviso 5 días antes de vencer membresía |

**Regla para ti:** el "motor" (la lógica: disparador → espera → mensaje → siguiente paso) es idéntico siempre. Solo el texto cambia. Por eso puedes prometer "8 automatizaciones" con confianza total — ya las tienes pre-diseñadas, solo las clonas y les cambias el texto. No estás inventando nada nuevo por cliente.

Si un cliente en Growth pide una automatización #9, tu respuesta estándar: *"Con gusto, esa entra como automatización adicional — $300-500 MXN única vez, o puedes subir a Premium donde el límite es más alto."* Esto te protege de que la cuenta de "ilimitado" se vuelva trabajo gratis infinito.

---

## 3. DASHBOARD: BÁSICO vs AVANZADO (qué mostrar exactamente)

### Dashboard Básico (Starter y Growth)

4 métricas simples, visibles en un solo panel dentro de GHL (no necesitas construir nada externo, GHL ya trae reportes):

1. **Leads nuevos este mes** (cuántos formularios/mensajes entraron)
2. **Tasa de respuesta** (% de leads que la IA/automatización contactó en menos de 5 min)
3. **Citas agendadas vs citas asistidas** (para ver no-shows)
4. **Reseñas obtenidas este mes**

Esto se lo enseñas en una llamada de 15 min al mes, o se lo mandas como captura de pantalla + 2-3 líneas de texto (ver sección de valor agregado).

### Dashboard Avanzado (Premium)

Todo lo anterior, más:

5. **Valor estimado recuperado** (ej. "12 clientes que no habían respondido, si cada uno vale en promedio $500, recuperaste ~$6,000 este mes")
6. **Comparativo mes contra mes** (gráfica simple de tendencia)
7. **Embudo de conversión completo** (Lead → Contactado → Cotizado → Cliente, con % de caída en cada etapa, para detectar dónde se pierden ventas)
8. **Origen de leads** (WhatsApp vs Instagram vs Web vs Facebook — para saber qué canal funciona mejor)

**Importante:** todo esto ya existe dentro de los reportes nativos de GHL — tu trabajo no es "construir" un dashboard desde cero, es configurar qué widgets mostrar y after eso, simplemente enseñárselo bien al cliente. No necesitas desarrollo extra ni gastar tiempo en herramientas externas.

---

## 4. AJUSTES AL MODELO DE 3 PLANES (con tus correcciones)

### 🟦 STARTER — $2,500 MXN/mes + $4,000 MXN setup
- 1 pipeline (5 etapas)
- IA conversacional en WhatsApp
- Calendario de citas
- 1 formulario
- 3 automatizaciones (bienvenida, recordatorio, seguimiento)
- Reseñas
- Dashboard básico
- Soporte por correo (respuesta 48h)

### 🟩 GROWTH ⭐ — $5,500 MXN/mes + $6,000 MXN setup
- Todo Starter
- WhatsApp + Instagram + Facebook + Web, todo centralizado
- Email + SMS
- **8 automatizaciones específicas por industria** (tabla arriba — nunca "ilimitadas")
- 1 landing page de captura
- Dashboard básico + reporte mensual con resumen humano
- **Revisión bimestral** (cada 2 meses, no trimestral — tienes razón, trimestral se siente lejano para un cliente nuevo que quiere ver que le estás dando seguimiento)
- Soporte prioritario (24h)

### 🟪 PREMIUM — $9,500 MXN/mes + $9,000 MXN setup
- Todo Growth
- Hasta **15 automatizaciones** (sigue siendo un número fijo, no ilimitado — solo más alto)
- Voice AI
- Funnel de ventas multi-página (ver sección 6)
- Dashboard avanzado
- Revisión **mensual** (no "account manager dedicado" — ver punto siguiente)
- Soporte mismo día

**Sobre "account manager dedicado":** tienes razón, quítalo. Suena a que tienes un equipo de gente asignada por cliente, y apenas vas iniciando. Cámbialo por: **"Revisión mensual 1 a 1 contigo"** — es honesto, simple, y en la práctica es lo mismo que necesitas hacer de cualquier forma para que el cliente no cancele.

---

## 5. TU VALOR AGREGADO REAL (vs. otras agencias/freelancers de automatización)

Esto es lo que dices en una llamada de ventas cuando el cliente pregunta "¿por qué contigo y no con otro?":

1. **No vendes una herramienta, vendes un sistema ya probado por industria.** Otros freelancers configuran desde cero cada vez (lento, caro, propenso a errores). Tú ya tienes el "snapshot" de su industria armado — implementas en horas, no semanas.

2. **Reportes que un humano entiende, no solo números.** La mayoría de agencias de automatización mandan un dashboard y ya. Tú mandas 3 líneas explicando qué significa ese número en dinero real.

3. **Revisión periódica incluida, no solo "instalo y me voy".** Esto es raro en agencias chicas — la mayoría desaparece después de configurar. Tú te quedas, optimizas, ajustas.

4. **Precio fijo y transparente, sin sorpresas.** Le dices exactamente qué incluye cada plan y qué se cobra aparte — no hay "te va a costar más cuando lo necesites".

5. **Eres local/accesible.** Puedes ir presencial si hace falta (cosa que una agencia grande de EE.UU. o una "fábrica" de automatizaciones no puede ofrecer a una pyme mexicana).

---

## 6. FUNNEL DE VENTAS MULTI-PÁGINA — qué es y cómo lo construyes

Un "funnel" en GHL es una secuencia de 2 o más páginas diseñadas para llevar al visitante paso a paso hacia una acción (agendar, comprar, dejar sus datos), en vez de una sola landing page estática.

**Estructura típica de 3 páginas (lo que ofreces en Premium):**

1. **Página 1 — Captura de interés:** anuncio o link → llega aquí, ve una oferta clara (ej. "Diagnóstico gratis de tu sonrisa" para un dentista) + 1 formulario corto (nombre, teléfono).
2. **Página 2 — Calificación/Agendado:** después de llenar el formulario, lo rediriges aquí automáticamente. Aquí elige fecha/hora en el calendario, o responde 2-3 preguntas para calificar si es buen prospecto.
3. **Página 3 — Confirmación + siguiente paso:** "¡Listo! Tu cita está agendada para el [fecha]" + video corto o testimonios + botón de WhatsApp directo.

**Por qué vale más que 1 landing simple:** cada página tiene un solo objetivo, así que la persona no se distrae ni se va sin completar la acción. Mide mejor en qué paso se pierden los prospectos (embudo de conversión, sección 3 del dashboard avanzado).

**Tu trabajo real construyéndolo:** clonas una plantilla base de funnel (la construyes UNA vez, genérica), le cambias texto/colores/logo, y conectas el calendario y el CRM. Tiempo real: 2-4 horas, no días.

---

## 7. FUNNELS ADICIONALES — cómo cobrarlos y qué construyes exactamente

Si un cliente de Growth (que solo tiene 1 landing simple) quiere un funnel completo extra, o un cliente de cualquier plan quiere un SEGUNDO funnel para otra campaña (ej. una clínica quiere uno para "blanqueamiento dental" y otro para "ortodoncia"):

- **Qué es un "funnel adicional":** una secuencia de páginas igual a la de la sección 6, pero para una oferta o servicio específico distinto al principal.
- **Cuánto cobrar:** $1,500 MXN por funnel adicional (ya lo tenías bien definido). Esto cubre: clonar tu plantilla base, adaptar 2-3 páginas, conectar a un calendario/formulario nuevo si aplica.
- **Tiempo real invertido:** 2-3 horas si usas tu plantilla base. Por eso $1,500 MXN es buen margen — no estás cobrando por hora, cobras por el resultado ya probado.
- **Cuándo SÍ cobrar más:** si el cliente pide diseño 100% custom (no tu plantilla), o más de 3 páginas — ahí cotizas aparte ($500-800 MXN por página extra).

---

## 8. INTEGRACIONES API — cómo cotizarlas paso a paso

Esto es para cuando un cliente ya usa un sistema propio (ej. un software de punto de venta, un ERP, un sistema de citas que ya tenía) y quiere que se conecte con GHL.

**Paso 1 — Entender qué pide el cliente.** Pregúntale: "¿Qué sistema usas hoy?" y "¿Qué quieres que pase automáticamente entre ese sistema y GHL?" (ej. "cuando alguien compra en mi POS, que se cree el contacto en el CRM").

**Paso 2 — Verificar si el sistema tiene API o Zapier/Make.** La mayoría de software conocido (Shopify, Square, Calendly, QuickBooks, etc.) ya tiene integraciones documentadas o conectores en Zapier/Make. Si existe, tu trabajo es mucho más simple y rápido (conectar, no programar desde cero).

**Paso 3 — Clasificar la complejidad:**
- **Simple** (ya existe conector Zapier/Make, solo configuras): 1 día de trabajo → cotiza $3,000-5,000 MXN
- **Media** (hay API documentada pero no hay conector listo, necesitas programar el "puente"): 3-5 días → cotiza $6,000-10,000 MXN
- **Compleja** (sistema viejo, sin documentación clara, requiere mucha prueba y error): cotiza por proyecto, mínimo $12,000-15,000 MXN, y siempre con 50% por adelantado.

**Paso 4 — Cobra siempre 50% antes de empezar, 50% al entregar funcionando.** Las integraciones API son el único servicio donde el tiempo real puede salirse de control — el anticipo te protege.

**Paso 5 — Nunca prometas fecha exacta en la primera llamada.** Di: "Necesito 1-2 días para evaluar la integración exacta y te doy cotización y tiempo final." Así no te comprometes en frío.

**Tu regla de oro aquí:** si no tienes experiencia técnica programando integraciones custom, no aceptes el caso "complejo" todavía — refiere a alguien o dile al cliente que por ahora solo manejas integraciones con conectores existentes (Zapier/Make). Es mejor decir que no a un proyecto que vas a tardar semanas resolviendo sin saber, que comprometerte y quedar mal.

---

## 9. SNAPSHOT MAESTRO POR INDUSTRIA — con preguntas de descubrimiento

Esto es tu activo más valioso: una plantilla de GHL ya armada por industria que clonas y personalizas en horas. Aquí tienes, por cada industria, las preguntas exactas que debes hacerle al cliente en la primera llamada/reunión para llenar la plantilla rápido.

### 💆 Nail Salon / Spa / Estética
1. ¿Qué servicios principales ofreces? (lista de 5-8 máximo)
2. ¿Cuánto dura en promedio cada servicio? (para el calendario)
3. ¿Cada cuánto regresa normalmente una clienta? (para la automatización de reactivación)
4. ¿Tienes horario fijo o varía por día?
5. ¿Cómo agendas hoy? (WhatsApp, llamada, Instagram)

### 🦷 Clínica / Dentista
1. ¿Qué tipo de consultas/servicios principales atiendes?
2. ¿Cada cuánto debe regresar un paciente para revisión? (6 meses, 1 año)
3. ¿Manejas seguros o solo pago directo?
4. ¿Cuántas citas pierdes al mes por no-show aproximadamente?
5. ¿Quién confirma las citas hoy?

### 🏋️ Gimnasio
1. ¿Qué tipos de membresía manejas?
2. ¿Cada cuánto se renuevan las membresías?
3. ¿Cuál es tu mayor problema: nuevos clientes o retener los que ya tienes?
4. ¿Manejas clases con horario fijo?

### 🍽️ Restaurante
1. ¿Reciben reservaciones o es solo llegada libre?
2. ¿Cuántas mesas/capacidad tienen?
3. ¿Tienen horas pico donde se llena?
4. ¿Hacen promociones o eventos especiales seguido?

### 🧹 Empresa de limpieza (B2B)
1. ¿Cómo llega hoy un nuevo prospecto? (licitación, referido, llamada en frío)
2. ¿Cuánto tarda normalmente desde "piden cotización" hasta "firman contrato"?
3. ¿Los contratos son recurrentes con fecha de renovación?
4. ¿Cuántas visitas/cotizaciones hacen al mes aproximadamente?

### 🚐 Renta de vans/autos
1. ¿Cómo reciben hoy las solicitudes de renta? (WhatsApp, llamada, redes)
2. ¿Cobran anticipo o todo al final?
3. ¿Qué tan seguido tienen clientes que rentan más de una vez?
4. ¿Cuántas unidades tienen disponibles?

### ⚖️ Despacho de abogados
1. ¿Qué tipos de caso manejan principalmente? (máximo 3-4 categorías)
2. ¿Cuánto tardan en dar una primera respuesta a un prospecto hoy?
3. ¿Cobran consulta inicial o es gratis?
4. ¿Qué documentos piden normalmente según tipo de caso?

### 🏠 Inmobiliaria
1. ¿Manejan venta, renta, o ambos?
2. ¿Qué zonas/tipos de propiedad manejan?
3. ¿Cuánto tiempo en promedio tarda un prospecto en decidir?
4. ¿Cómo agendan visitas hoy?

**Con estas respuestas (15-20 min de llamada) tienes todo lo necesario para clonar el snapshot de esa industria y personalizarlo en 2-3 horas**, tal como ya estaba definido en el documento anterior.

---

## 10. PÁGINAS WEB — servicio completo, costos, tiempos y SEO

Este es un servicio aparte de la automatización (aunque puedes venderlo combinado). Aquí el desglose completo:

### Estructura de precios

| Tipo de página | Setup (único pago) | Mantenimiento mensual | Días de trabajo (límite) |
|---|---|---|---|
| Landing de 1 página | $3,500 MXN | $400 MXN/mes | 3 días hábiles |
| Sitio de 3-5 páginas | $6,500 MXN | $600 MXN/mes | 5 días hábiles |
| Sitio con tienda/reservas integradas | $10,000-14,000 MXN | $900 MXN/mes | 8-10 días hábiles |

**Por qué poner un límite de días:** sin límite, el cliente pide cambios infinitos ("muévele el botón", "cambia el color", "agrega una sección más") y tu margen desaparece. Tu contrato debe decir: *"El setup incluye hasta 2 rondas de revisión. Cambios adicionales después de la entrega se cotizan aparte a $300-500 MXN por ronda."*

### ¿Qué cubre el mantenimiento mensual?
- Hosting (el servidor donde vive la página)
- Actualizaciones de seguridad
- Hasta 1 cambio de texto/imagen pequeño al mes (sin rediseño)
- Soporte si la página se cae o tiene un error técnico

### SEO — cómo explicarlo y qué nivel ofrecer

**Lo que SÍ puedes incluir sin costo extra real para ti (SEO básico/técnico):**
- Título y descripción optimizados en cada página (esto lo haces al construir la página, no es trabajo extra)
- Velocidad de carga rápida (Next.js ya lo da de base)
- Versión correcta para celular (responsive)
- Conexión a Google Business Profile (perfil de Google Maps/negocio — gratis, solo lo configuras)
- Sitemap básico (archivo técnico que ayuda a Google a indexar el sitio)

Esto lo puedes decir así al cliente: *"Tu página nace optimizada para que Google la encuentre — eso va incluido en el setup, sin costo extra."*

**Lo que es SEO avanzado/continuo (cóbralo aparte, es trabajo recurrente real):**
- Escribir contenido/blog regularmente para rankear por palabras clave
- Construir enlaces externos (link building)
- Optimización continua basada en analítica mensual

Esto cotízalo como un servicio adicional: $1,500-2,500 MXN/mes, solo si el cliente realmente lo pide y entiende que es un proceso de meses, no resultado inmediato. **No lo incluyas por default** — la mayoría de tus clientes (negocios locales) se benefician más de Google Business Profile bien configurado que de SEO de contenido caro.

### Tu costo real (para que sepas tu margen)
- Hosting: si usas Vercel, el plan gratuito cubre la mayoría de sitios pequeños — tu costo real es casi $0 hasta que tengas muchos clientes con tráfico alto.
- Dominio: ~$200-300 MXN/año (lo paga el cliente o lo incluyes en el setup).
- Tu tiempo: con plantillas reutilizables (como ya tienes con Next.js/Tailwind), un sitio de 3-5 páginas te toma realisticamente 1-2 días de trabajo real, no los 5 días que le cotizas al cliente — el resto es margen de seguridad y revisión.

---

## 11. NUEVO SERVICIO: STAMPS DIGITALES DE LEALTAD (plan separado, corto plazo)

Esto se vende como **add-on independiente**, no como parte de los planes de automatización — porque el cliente lo puede querer aunque no tenga el sistema completo de GHL.

### Qué es
Una tarjeta de lealtad digital (como Loyalz que mencionaste) — el cliente acumula sellos/puntos por visita y los puede ver en su celular sin necesidad de tarjeta física. Se conecta a Apple Wallet / Google Wallet o se maneja desde un link/QR simple.

### Cómo lo ofreces

**Plan único — "Tarjeta de Lealtad Digital"**
- Setup: $2,000 MXN (diseño de la tarjeta con marca del cliente + configuración de reglas: ej. "10 sellos = 1 servicio gratis")
- Mensualidad: $300-500 MXN/mes (hosting de la tarjeta + soporte)
- Tiempo de entrega: 2-3 días

### Por qué es buen "plan a corto plazo" como dijiste
- Es rápido de vender (el cliente entiende el concepto en 30 segundos — "tarjeta de sellos pero en el celular")
- Es rápido de implementar (no requiere todo el setup de CRM/workflows)
- Es un excelente "pie en la puerta": una vez el cliente confía en ti con algo simple y barato, es más fácil que después compre Starter/Growth completo.

### Combo recomendado
Si el cliente ya tiene Starter/Growth, ofrécelo como upsell: *"Por $300 MXN extra al mes, le agregamos tarjeta de lealtad digital a tus clientes — sin que tengas que hacer nada más."* Aquí tu costo real de soporte es mínimo porque ya tienes al cliente dentro del mismo sistema GHL (GHL ya tiene función nativa de wallet pass en planes altos, revisa si tu plan lo incluye antes de cotizarlo como externo).

---

## 12. NFC — ¿agrega valor? sí, y es barato

NFC (las tarjetitas/stickers que el cliente solo "toca" con el celular para activar algo) es un complemento físico perfecto para lo digital que ya vendes.

### Casos de uso reales y baratos
1. **NFC para reseñas de Google:** una tarjeta pequeña en el mostrador — el cliente la toca con su celular y se abre directo la página para dejar reseña en Google. Elimina friction (nadie busca tu negocio en Google manualmente).
2. **NFC para la tarjeta de lealtad digital:** en lugar de un QR, el cliente toca la tarjeta NFC y se activa/suma su sello automáticamente.
3. **NFC para agendar cita:** toca la tarjeta → abre tu calendario de citas directo.

### Costo real para ti
- Tarjetas/stickers NFC en blanco: $15-40 MXN por unidad si las compras en cantidad (Amazon/AliExpress, mínimo 10-50 unidades).
- Programarlas (escribir el link/acción): se hace con una app gratuita en tu celular (ej. NFC Tools) — no necesitas comprar nada para programarlas, solo tiempo (5 min por tarjeta).
- Diseño/impresión de la tarjeta física (si quieres que tenga el logo del cliente): $20-50 MXN extra por unidad si la mandas a imprimir con diseño.

### Cómo cobrarlo
- **Como add-on dentro de la tarjeta de lealtad:** $150-250 MXN por la tarjeta NFC física con diseño (tu costo real ~$40-60 MXN, buen margen).
- **Solo para reseñas (sin lealtad):** $100-150 MXN por tarjeta NFC de "déjanos tu reseña" — para negocios que no quieren todo el sistema de lealtad pero sí quieren más reseñas rápido (esto conecta directo con tu pitch de "gestión de reseñas" que ya vendes).

**Por qué vale la pena agregarlo:** es de los pocos elementos físicos que puedes vender con margen alto (300-400%) y que el cliente percibe como "tecnología premium" aunque tu costo real sea mínimo. Es un buen complemento a la tarjeta de lealtad, no un producto que necesites vender solo.

---

## RESUMEN DE CAMBIOS RESPECTO AL DOCUMENTO ANTERIOR

| Cambio | Antes | Ahora |
|---|---|---|
| Revisión periódica Growth | Trimestral | Bimestral |
| Automatizaciones Growth | "Hasta 8" sin detalle | 8 automatizaciones específicas, listadas por industria |
| Automatizaciones Premium | "Ilimitadas" | 15 automatizaciones (límite fijo, no ilimitado) |
| Account manager dedicado (Premium) | Sí | Reemplazado por "revisión mensual 1 a 1" |
| Dashboard | Mencionado sin detalle | Básico (4 métricas) vs Avanzado (8 métricas) detallado |
| Funnel multi-página | Mencionado sin explicar | Explicado paso a paso (3 páginas, plantilla reutilizable) |
| Integraciones API | Solo precio | Proceso de cotización de 5 pasos con niveles de complejidad |
| Páginas web | No estaba en el modelo de negocio | Sección completa: precios, días límite, SEO básico vs avanzado |
| Stamps de lealtad | No existía | Nuevo add-on de corto plazo, plan independiente |
| NFC | No existía | Nuevo complemento de bajo costo / alto margen |

---

*Documento estratégico Evoluzion AI — Plan de Negocio Detallado v2*
