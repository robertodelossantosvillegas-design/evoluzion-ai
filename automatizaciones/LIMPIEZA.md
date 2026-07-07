# Automatizaciones GHL — Empresas de limpieza (B2B)

15 automatizaciones diseñadas para este giro, distribuidas por plan.
**Cuota:** Starter instala #1–#3 · Growth #1–#8 · Premium las 15.
Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida + captura de solicitud**
- Disparador: formulario (empresa, m², tipo de servicio)
- Qué hace: entra al CRM y el prospecto recibe "en menos de 2 h te contactamos" + alerta al vendedor
- GHL: *Trigger* Form Submitted → Create Contact/Opportunity → WhatsApp + Task

**2. Recordatorio de visita de valoración**
- Disparador: visita al sitio agendada
- Qué hace: confirma y recuerda la visita para cotizar en sitio
- GHL: *Trigger* Appointment Booked → recordatorios

**3. Seguimiento a cotización sin respuesta**
- Disparador: cotización enviada sin respuesta 3 días
- Qué hace: seguimiento + alerta al vendedor. El contrato se lo lleva quien insiste
- GHL: *Trigger* Stage = Cotizado + Wait 3d → WhatsApp/Email → Task

---

## 🟩 GROWTH — agrega #4 a #8

**4. Alerta de renovación de contrato** *(la joya del giro)*
- Disparador: 30 días antes del vencimiento
- Qué hace: avisa al cliente y al vendedor para renovar a tiempo. Protege el ingreso recurrente
- GHL: *Trigger* fecha de vencimiento -30d → WhatsApp/Email + Task

**5. Secuencia formal por correo (corporativos)**
- Disparador: prospecto corporativo capturado
- Qué hace: presentación, casos y propuesta por email — el canal en que cotizan las empresas
- GHL: Workflow Email B2B

**6. Calificación de prospecto**
- Disparador: solicitud nueva
- Qué hace: tamaño, frecuencia y tipo de inmueble → prioriza los contratos que valen la pena
- GHL: IA/form → set fields → Tag prioridad

**7. Nutrición de los que no cerraron**
- Disparador: cotización perdida/estancada
- Qué hace: contenido y casos por industria cada 2–3 semanas hasta reactivar
- GHL: Workflow nurture

**8. Reseña con filtro**
- Disparador: primer mes de servicio cumplido
- Qué hace: 4–5★ → Google/testimonio B2B; 1–3★ → alerta al dueño
- GHL: Survey → If rating

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Programación recurrente + aviso a cuadrillas**
- Disparador: servicio recurrente calendarizado
- Qué hace: recuerda al cliente el servicio del día y notifica a la cuadrilla asignada
- GHL: Recurring Appointments → WhatsApp a cliente + a equipo

**10. Check de calidad post-servicio**
- Disparador: servicio completado
- Qué hace: mini encuesta al contacto del cliente; queja → alerta inmediata al supervisor
- GHL: Survey → If negativa → Task/alerta

**11. Cobro de facturas (net 30)**
- Disparador: factura por vencer / vencida
- Qué hace: recordatorio de pago escalonado con liga. Baja la cartera vencida
- GHL: *Trigger* fecha de factura → Email/WhatsApp → follow-ups

**12. Reporte de servicio por sitio**
- Disparador: servicio terminado
- Qué hace: envía checklist/foto de evidencia al cliente. Justifica el contrato mes a mes
- GHL: *Trigger* completado → Email con evidencia

**13. Referidos B2B**
- Disparador: cliente satisfecho / renovación
- Qué hace: pide referir otra empresa del mismo parque o edificio con incentivo
- GHL: *Trigger* Tag satisfecho → WhatsApp/Email

**14. Voice AI** *(exclusiva Premium)*
- Disparador: llamada entrante
- Qué hace: contesta, toma datos de solicitud y agenda la visita de valoración
- GHL: Voice AI Agent → Calendar

**15. Reporte semanal + alertas al dueño** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: solicitudes, cotizaciones activas, contratos por renovar (valor $), cartera + alerta de renovación en riesgo
- GHL: Scheduled Workflow + triggers

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida + solicitud | 🟦 |
| 2 | Recordatorio de valoración | 🟦 |
| 3 | Seguimiento de cotización | 🟦 |
| 4 | Renovación de contrato | 🟩 |
| 5 | Secuencia B2B por correo | 🟩 |
| 6 | Calificación de prospecto | 🟩 |
| 7 | Nutrición de no cerrados | 🟩 |
| 8 | Reseña con filtro | 🟩 |
| 9 | Programación + cuadrillas | 🟪 |
| 10 | Check de calidad | 🟪 |
| 11 | Cobro de facturas | 🟪 |
| 12 | Reporte por sitio | 🟪 |
| 13 | Referidos B2B | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
