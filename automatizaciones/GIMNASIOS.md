# Automatizaciones GHL — Gimnasios / Fitness

15 automatizaciones diseñadas para este giro, distribuidas por plan.
**Cuota:** Starter instala #1–#3 · Growth #1–#8 · Premium las 15.
Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida "clase gratis" + agenda**
- Disparador: "quiero mi prueba" desde IG/formulario
- Qué hace: responde al segundo, captura y agenda la clase muestra
- GHL: *Trigger* Form/Reply → Create Contact → WhatsApp con booking

**2. Recordatorio de clase muestra**
- Disparador: clase muestra agendada
- Qué hace: confirma + recuerda. El prospecto sí llega
- GHL: *Trigger* Appointment Booked → recordatorios

**3. Seguimiento al que no se inscribió**
- Disparador: tomó la clase y no se inscribió en 2 días
- Qué hace: seguimiento con oferta de vigencia limitada
- GHL: *Trigger* Wait 2d post-clase → WhatsApp

---

## 🟩 GROWTH — agrega #4 a #8

**4. Detección de socio inactivo** *(retención pura)*
- Disparador: 2 semanas sin asistir
- Qué hace: "¡Te extrañamos! ¿Todo bien?" + reenganche antes de que piense en cancelar
- GHL: *Trigger* Wait since last check-in 14d → WhatsApp

**5. Aviso de renovación de membresía**
- Disparador: 5 días antes del vencimiento
- Qué hace: recuerda renovar con liga de pago. Evita bajas por olvido
- GHL: *Trigger* fecha de vencimiento -5d → WhatsApp con payment link

**6. Reseña con filtro**
- Disparador: hito del socio (1 mes, meta cumplida)
- Qué hace: 4–5★ → Google; 1–3★ → alerta al dueño
- GHL: Survey → If rating

**7. Campañas segmentadas**
- Disparador: manual (enero, operación verano)
- Qué hace: mensajes distintos para activos, inactivos y ex-socios. No un mismo mensaje para todos
- GHL: Campaign por segmento/etiqueta

**8. Referidos entre socios**
- Disparador: socio renovó o cumplió meta
- Qué hace: "Trae a un amigo, ambos ganan un mes con descuento"
- GHL: *Trigger* Tag socio-activo → WhatsApp con link

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Onboarding del socio nuevo**
- Disparador: inscripción
- Qué hace: guía las primeras 2 semanas (horarios, primera valoración, hábitos). Sube la retención temprana
- GHL: *Trigger* Won → secuencia de bienvenida 14 días

**10. Recordatorio de metas / valoración física**
- Disparador: ciclo de seguimiento (cada 4–6 semanas)
- Qué hace: invita a re-valoración y celebra avances. Da sentido de progreso
- GHL: *Trigger* Wait ciclo → WhatsApp con booking de valoración

**11. Cobro recurrente + recuperación de pago fallido**
- Disparador: cargo mensual / pago rechazado
- Qué hace: cobra y, si falla, avisa con liga para reintentar. Protege el ingreso recurrente
- GHL: *Trigger* Payment Failed → WhatsApp con payment link → dunning

**12. Cumpleaños con pase de invitado**
- Disparador: cumpleaños del socio
- Qué hace: felicita + pase de invitado gratis (posible nuevo socio)
- GHL: *Trigger* birthday → WhatsApp con pase

**13. Winback de ex-socios**
- Disparador: baja hace X meses
- Qué hace: oferta de reinscripción $0 o precio especial de regreso
- GHL: *Trigger* Tag baja + Wait → Campaign de winback

**14. Voice AI** *(exclusiva Premium)*
- Disparador: llamada entrante/perdida
- Qué hace: contesta dudas de membresías, horarios y agenda visita
- GHL: Voice AI Agent → Calendar

**15. Reporte semanal + alertas al dueño** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: altas, bajas, socios en riesgo recuperados, renovaciones cobradas + alerta de pico de bajas
- GHL: Scheduled Workflow + triggers

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida clase gratis | 🟦 |
| 2 | Recordatorio de clase | 🟦 |
| 3 | Seguimiento sin inscripción | 🟦 |
| 4 | Detección de inactivo | 🟩 |
| 5 | Renovación de membresía | 🟩 |
| 6 | Reseña con filtro | 🟩 |
| 7 | Campañas segmentadas | 🟩 |
| 8 | Referidos entre socios | 🟩 |
| 9 | Onboarding de socio | 🟪 |
| 10 | Metas / valoración | 🟪 |
| 11 | Cobro + pago fallido | 🟪 |
| 12 | Cumpleaños con pase | 🟪 |
| 13 | Winback de ex-socios | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
