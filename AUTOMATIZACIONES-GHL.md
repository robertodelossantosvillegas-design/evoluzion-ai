# Menú de Automatizaciones GHL — Evoluzion
## Las 15 automatizaciones que se instalan por cliente, según su plan

> Documento interno. Cada plan tiene su cuota de automatizaciones
> (`MODELO-DE-NEGOCIO.md`): este menú estandariza CUÁLES se instalan
> para no diseñar desde cero con cada cliente.

---

## La regla de cuota por plan

| Plan | Cuota | Cómo se llena |
|------|-------|---------------|
| 🟦 **STARTER** — $2,500/mes | **3 automatizaciones** | A1, A2 y A3 — fijas, no se negocian. Son la base de todo. |
| 🟩 **GROWTH** — $5,500/mes | **Hasta 8** | A1–A3 fijas + **5 a elegir** entre A4–A13 según el vertical (ver matriz al final) |
| 🟪 **PREMIUM** — $9,500/mes | **Ilimitadas** | Las 15 completas, afinadas al negocio (A14 y A15 son exclusivas de Premium) |

**Regla de venta:** nunca ofrezcas automatizaciones sueltas fuera de cuota. Si el cliente
quiere una más, esa conversación se llama *upgrade de plan*.

---

## LAS 3 BÁSICAS (fijas en todo plan) 🟦

### A1 — Bienvenida instantánea (speed-to-lead)
- **Disparador:** llega un lead (formulario, WhatsApp, DM, QR).
- **Qué hace:** crea el contacto en el CRM, lo mete al pipeline en "Nuevo", y responde
  al instante por WhatsApp: "Recibimos tu mensaje, en breve te atendemos" + primera
  pregunta de la IA para arrancar la conversación.
- **En GHL:** Trigger *Form Submitted / Customer Replied* → Create Opportunity →
  Send WhatsApp → asignar etiqueta de origen.
- **Métrica que mueve:** tiempo de primera respuesta (de horas a segundos).

### A2 — Recordatorio de cita/reserva
- **Disparador:** cita agendada en el calendario.
- **Qué hace:** confirmación inmediata al agendar + recordatorio 24 h antes + toque
  final 2 h antes. Si el cliente responde "no puedo", dispara A4 (si está instalada)
  o crea tarea manual.
- **En GHL:** Trigger *Appointment Booked* → Wait → WhatsApp/SMS en cada intervalo.
- **Métrica que mueve:** tasa de no-shows.

### A3 — Seguimiento al que no respondió
- **Disparador:** lead sin respuesta después de 3 días (configurable por giro).
- **Qué hace:** mensaje de seguimiento con ángulo distinto al primero + si tampoco
  responde, segundo toque a los 7 días + tarea al dueño para decisión humana.
- **En GHL:** Trigger *No reply* (Wait con condición) → WhatsApp → If/Else → Task.
- **Métrica que mueve:** leads rescatados que ya se daban por muertos.

---

## LAS DE CRECIMIENTO (elegibles desde Growth) 🟩

### A4 — Reagendamiento automático
- **Disparador:** cita cancelada o no-show registrado.
- **Qué hace:** ofrece reagendar con liga directa al calendario; si no agenda en 48 h,
  segundo intento con horarios sugeridos. El hueco se ofrece a la lista de espera (giros
  con reservas llenas, ej. restaurantes).
- **Métrica que mueve:** % de citas canceladas que se recuperan.

### A5 — Reseñas con filtro de experiencia
- **Disparador:** servicio/visita completada.
- **Qué hace:** pregunta primero "¿cómo te fue del 1 al 5?" — 4–5 estrellas → liga a
  reseña de Google; 1–3 → alerta privada al dueño ANTES de que llegue a internet.
- **Métrica que mueve:** reseñas nuevas y calificación promedio (y crisis evitadas).

### A6 — Reactivación de clientes dormidos
- **Disparador:** X días sin cita/compra/visita (30–90 según giro).
- **Qué hace:** "¡Te extrañamos!" con incentivo suave; si responde, entra directo al
  calendario o al pipeline. Serie de máximo 2 toques — nunca spam.
- **Métrica que mueve:** clientes reactivados al mes.

### A7 — Nutrición de leads fríos
- **Disparador:** lead calificado que no cerró (etiqueta "frío" o etapa estancada).
- **Qué hace:** secuencia quincenal de valor por email/WhatsApp (casos, tips, novedades)
  hasta que responde o se da de baja. El lead madura solo.
- **Métrica que mueve:** % de leads fríos que reabren conversación.

### A8 — Campañas de fechas y promociones
- **Disparador:** manual programado (fecha fuerte) + cumpleaños automático.
- **Qué hace:** campaña masiva segmentada (activos / dormidos / VIP) por WhatsApp, SMS
  o email + felicitación de cumpleaños con beneficio canjeable.
- **Métrica que mueve:** ingresos por campaña a base propia (sin gastar en anuncios).

### A9 — Rescate de cotización/carrito abandonado
- **Disparador:** cotización enviada sin respuesta en 24–48 h, o carrito abandonado
  (e-commerce).
- **Qué hace:** secuencia de 3 toques: recordatorio → resuelve objeción típica →
  incentivo con vigencia. Cierra el ciclo marcando ganado/perdido en el pipeline.
- **Métrica que mueve:** cotizaciones/carritos recuperados ($ directo).

### A10 — Calificación automática de leads
- **Disparador:** lead nuevo (viene de A1).
- **Qué hace:** la IA hace 3–4 preguntas clave del giro (presupuesto, zona, urgencia,
  tipo de caso) → etiqueta caliente/tibio/frío → asigna al pipeline/vendedor correcto.
  El equipo solo toca leads que valen su tiempo.
- **Métrica que mueve:** horas de equipo ahorradas + velocidad de atención a leads calientes.

### A11 — Cobros y anticipos
- **Disparador:** pago/anticipo pendiente después de la fecha acordada.
- **Qué hace:** recordatorio amable al día siguiente con liga de pago → segundo toque
  a los 3 días → alerta al dueño al quinto. Requiere pagos integrados (extra: $1,500 setup).
- **Métrica que mueve:** días de cobro y cartera vencida.

### A12 — Renovaciones y recompra por ciclo
- **Disparador:** fecha de vencimiento próxima (contrato, membresía) o ciclo de
  recompra cumplido (limpieza dental 6 meses, producto consumible 45 días).
- **Qué hace:** aviso 30/5 días antes con liga para renovar o reagendar; alerta interna
  si no hay respuesta para rescate humano.
- **Métrica que mueve:** ingreso recurrente protegido ($ que NO se cayó).

### A13 — Referidos en el momento correcto
- **Disparador:** servicio exitoso confirmado (reseña 5 estrellas, caso ganado, renovación).
- **Qué hace:** invitación a referir con incentivo doble ("tú y tu amigo ganan") + liga
  de captura que registra quién refirió a quién.
- **Métrica que mueve:** clientes nuevos a costo de adquisición casi cero.

---

## LAS EXCLUSIVAS PREMIUM 🟪

### A14 — Voice AI: el teléfono se contesta solo
- **Disparador:** llamada entrante (o llamada perdida → devolución por WhatsApp).
- **Qué hace:** el agente de voz contesta, responde preguntas frecuentes, califica y
  agenda directo en el calendario. Todo queda transcrito en el CRM.
- **Nota comercial:** incluida en Premium; fuera de Premium se cobra +$2,500/mes.
- **Métrica que mueve:** llamadas atendidas fuera de horario y citas por teléfono sin humano.

### A15 — Reporte automático + alertas al dueño
- **Disparador:** programado (resumen semanal) + eventos críticos en tiempo real.
- **Qué hace:** resumen semanal por WhatsApp al dueño (leads, citas, ingresos atribuidos)
  + alertas inmediatas: lead caliente sin atender 1 h, contrato por vencer, reseña negativa.
- **Métrica que mueve:** percepción de control — la razón #1 por la que renuevan.

---

## TABLA RESUMEN — Las 15 de un vistazo

| # | Automatización | Disparador | Plan mínimo | Métrica que mueve |
|---|---------------|-----------|-------------|-------------------|
| A1 | Bienvenida instantánea | Lead nuevo | 🟦 Starter (fija) | Tiempo de respuesta |
| A2 | Recordatorio de cita | Cita agendada | 🟦 Starter (fija) | No-shows |
| A3 | Seguimiento sin respuesta | 3 días sin respuesta | 🟦 Starter (fija) | Leads rescatados |
| A4 | Reagendamiento automático | Cancelación/no-show | 🟩 Growth | Citas recuperadas |
| A5 | Reseñas con filtro | Servicio completado | 🟩 Growth | Reputación Google |
| A6 | Reactivación de dormidos | 30–90 días inactivo | 🟩 Growth | Clientes reactivados |
| A7 | Nutrición de leads fríos | Lead estancado | 🟩 Growth | Leads que maduran |
| A8 | Campañas y cumpleaños | Fecha programada | 🟩 Growth | Ingresos por campaña |
| A9 | Rescate de cotización/carrito | Sin respuesta 24–48 h | 🟩 Growth | $ recuperado directo |
| A10 | Calificación automática | Lead nuevo | 🟩 Growth | Tiempo de equipo |
| A11 | Cobros y anticipos | Pago vencido | 🟩 Growth | Cartera vencida |
| A12 | Renovaciones y recompra | Vencimiento/ciclo | 🟩 Growth | Ingreso protegido |
| A13 | Referidos | Éxito confirmado | 🟩 Growth | Clientes a costo ~$0 |
| A14 | Voice AI | Llamada entrante | 🟪 Premium | Llamadas sin humano |
| A15 | Reporte + alertas al dueño | Semanal + eventos | 🟪 Premium | Retención del cliente |

---

## MATRIZ POR VERTICAL — Qué instalar según plan

En **Starter** todos llevan A1+A2+A3. En **Growth**, esas 3 + las 5 marcadas.
En **Premium**, las 15. (Las plantillas de `propuestas/` ya traen esto precargado.)

| Vertical | Las 5 de Growth (además de A1–A3) | Por qué esas |
|---|---|---|
| 💈 Barberías / Salones | A4 · A5 · A6 · A8 · A13 | Silla llena: reagenda, reputación, clientas que vuelven y traen amigas |
| 🦷 Clínicas / Médicos | A4 · A5 · A6 · A8 · A12 | Agenda protegida + recall por ciclo (la mina de oro de las clínicas) |
| 🍽️ Restaurantes | A4 · A5 · A6 · A8 · A13 | Mesas llenas: lista de espera, fechas fuertes, comensal que regresa |
| 🛒 E-commerce | A5 · A7 · A8 · A9 · A12 | Carritos, recompra y campañas: el dinero está en el tráfico ya pagado |
| 🏠 Inmobiliarias | A4 · A5 · A7 · A9 · A10 | Leads calificados, visitas que sí pasan y maduración de 6–12 meses |
| ⚖️ Despachos / Abogados | A5 · A7 · A9 · A10 · A12 | Filtro de casos + propuestas perseguidas + renovaciones anuales |
| 🎯 Coaches / Consultores | A7 · A8 · A9 · A10 · A12 | El embudo completo: captar, madurar, cerrar y re-enrolar |
| 🏋️ Gimnasios | A5 · A6 · A8 · A12 · A13 | Retención: inactivos, renovaciones y referidos entre socios |
| 🧹 Limpieza (B2B) | A5 · A7 · A9 · A10 · A12 | Cotizaciones perseguidas + renovación de contratos corporativos |
| 🚐 Renta de Vans | A5 · A8 · A9 · A11 · A12 | Cotización rápida, anticipos cobrados y temporadas llenas |

**Camino de upgrade natural por vertical:** cuando el cliente Growth pida una automatización
fuera de sus 8 (típicamente A11 cobros, A13 referidos o A14 Voice AI), la respuesta es
Premium — no una excepción.

---

*Documento interno Evoluzion — Julio 2026. Plantillas de propuesta por vertical: carpeta `propuestas/`.*
