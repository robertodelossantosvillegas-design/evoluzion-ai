# Automatizaciones GHL — Despachos / Abogados

**15 automatizaciones + 2 extras recomendados (17 en total).**

**Qué instalar según el plan que aceptó el cliente:**
- ✅ **Starter** ($2,500/mes) → **#1, #2 y #3**
- ✅ **Growth** ($5,500/mes) → **#1 a #8**
- ✅ **Premium** ($9,500/mes) → **#1 a #15** (las 15 completas)
- ⭐ **Extras #16 y #17** → recomiéndalos a cualquier cliente como add-on, gancho o cobro aparte

Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.
*Nota: punto de entrada recomendado Growth (el correo formal es parte de cómo vende un despacho).*

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida instantánea**
- Disparador: consulta por web/WhatsApp
- Qué hace: "Recibimos su caso, un abogado le contacta en menos de 2 horas", al segundo. Gana al que responde primero
- GHL: *Trigger* Form/Reply → Create Contact → WhatsApp

**2. Recordatorio de citas**
- Disparador: junta agendada (presencial o videollamada)
- Qué hace: confirma y recuerda la reunión con el cliente
- GHL: *Trigger* Appointment Booked → recordatorios + liga de videollamada

**3. Seguimiento a consulta sin respuesta**
- Disparador: consulta sin avanzar 2 días
- Qué hace: seguimiento + tarea al responsable
- GHL: *Trigger* Wait 2d → WhatsApp → Task

---

## 🟩 GROWTH — agrega #4 a #8

**4. Calificación automática de casos**
- Disparador: consulta nueva
- Qué hace: la IA pregunta tipo de caso, urgencia y presupuesto → solo llegan al socio los asuntos reales
- GHL: IA → set fields → If/Else → Tag + owner

**5. Seguimiento de propuesta**
- Disparador: propuesta/cotización enviada
- Qué hace: recordatorio automático a los 2 y 5 días. Ninguna propuesta se queda en el aire
- GHL: *Trigger* Stage = Propuesta → Wait 2d/5d → WhatsApp/Email

**6. Checklist de documentos**
- Disparador: caso aceptado
- Qué hace: envía la lista de documentos según el tipo de asunto y la recuerda hasta completarse
- GHL: *Trigger* Stage = Cliente → Email checklist + recordatorios

**7. Reseña con filtro**
- Disparador: caso resuelto
- Qué hace: 4–5★ → Google; 1–3★ → alerta privada al socio
- GHL: Survey → If rating

**8. Nutrición de consultas frías**
- Disparador: consulta que no contrató
- Qué hace: contenido de autoridad cada 2 semanas ("5 errores al firmar un arrendamiento"). Cuando el problema crezca, lo llaman a él
- GHL: Workflow nurture Email/WhatsApp

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Recordatorio de plazos y audiencias**
- Disparador: fecha clave del caso (audiencia, vencimiento de término)
- Qué hace: recuerda al cliente y al abogado con anticipación. Evita omisiones costosas
- GHL: Tasks/Appointments con recordatorios escalonados

**10. Renovaciones anuales**
- Disparador: vencimiento próximo (contrato, marca, poder)
- Qué hace: aviso 30 días antes → ingreso recurrente sin perseguir
- GHL: *Trigger* fecha de vencimiento -30d → WhatsApp/Email

**11. Cobro de honorarios / iguala**
- Disparador: honorario o mensualidad de iguala por vencer
- Qué hace: recordatorio con liga de pago y seguimiento si no se cubre. (Pagos integrados, extra)
- GHL: *Trigger* fecha de cobro → payment link → follow-ups

**12. Onboarding de cliente nuevo**
- Disparador: cliente firma
- Qué hace: envía contrato, da de alta expediente y explica los siguientes pasos. Da imagen de orden
- GHL: *Trigger* Stage = Cliente → secuencia de bienvenida + documentos

**13. Referidos post-caso ganado**
- Disparador: caso ganado / cerrado con éxito
- Qué hace: pide referidos en el momento de máxima satisfacción
- GHL: *Trigger* Won → WhatsApp con link de referido

**14. Voice AI recepcionista** *(exclusiva Premium)*
- Disparador: llamada entrante/perdida
- Qué hace: contesta, precalifica el asunto y agenda con el abogado correcto
- GHL: Voice AI Agent → Calendar + Tag área

**15. Reporte semanal + alertas al socio** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: consultas, casos nuevos, propuestas en seguimiento, pipeline + alerta de consulta caliente sin atender
- GHL: Scheduled Workflow + triggers

---

## ⭐ EXTRAS RECOMENDADOS — #16 y #17

*Fuera de la cuota de los planes. Son tu guion de recomendación: ofrécelos como add-on,
gancho para cerrar o cobro aparte. Ideales para subir el ticket o sembrar la próxima venta.*

**16. Portal de estatus del caso**
- Qué hace: envía actualizaciones automáticas del avance al cliente en cada etapa del proceso
- Cuándo recomendarlo: reduce las llamadas de "¿cómo va lo mío?" y eleva la confianza percibida
- GHL: *Trigger* Opportunity Stage Changed → WhatsApp/Email de actualización

**17. Webinars / eventos de captación**
- Qué hace: convoca, registra y da seguimiento a asistentes de charlas legales (autoridad = leads)
- Cuándo recomendarlo: despachos que quieren posicionarse y llenar el embudo de forma constante
- GHL: Landing de registro → recordatorios de evento → nurture post-evento

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida instantánea | 🟦 |
| 2 | Recordatorio de citas | 🟦 |
| 3 | Seguimiento a consulta | 🟦 |
| 4 | Calificación de casos | 🟩 |
| 5 | Seguimiento de propuesta | 🟩 |
| 6 | Checklist de documentos | 🟩 |
| 7 | Reseña con filtro | 🟩 |
| 8 | Nutrición de frías | 🟩 |
| 9 | Plazos y audiencias | 🟪 |
| 10 | Renovaciones anuales | 🟪 |
| 11 | Cobro de honorarios | 🟪 |
| 12 | Onboarding de cliente | 🟪 |
| 13 | Referidos | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
| 16 | Portal de estatus del caso | ⭐ Extra |
| 17 | Webinars de captación | ⭐ Extra |
