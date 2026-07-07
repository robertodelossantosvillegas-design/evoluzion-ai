# Automatizaciones GHL — Renta de vans / autos

15 automatizaciones diseñadas para este giro, distribuidas por plan.
**Cuota:** Starter instala #1–#3 · Growth #1–#8 · Premium las 15.
Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida + cotización rápida**
- Disparador: solicitud (fecha, destino, pasajeros)
- Qué hace: responde en minutos con cotización por WhatsApp mientras el cliente sigue caliente
- GHL: *Trigger* Form/Reply → Create Contact → WhatsApp con cotización

**2. Recordatorio de renta**
- Disparador: renta confirmada
- Qué hace: confirmación con datos de pago + "tu van está lista" 48 h y 2 h antes
- GHL: *Trigger* Appointment/Booking → Wait → WhatsApp en cada intervalo

**3. Seguimiento a cotización sin respuesta**
- Disparador: cotización sin respuesta al día siguiente
- Qué hace: seguimiento con vigencia de tarifa para cerrar
- GHL: *Trigger* Wait 1d → WhatsApp

---

## 🟩 GROWTH — agrega #4 a #8

**4. Cobro de anticipo**
- Disparador: reserva aceptada
- Qué hace: recuerda el anticipo con liga de pago; asegura la unidad. (Pagos integrados, extra)
- GHL: *Trigger* Stage = Aceptada → payment link → follow-ups

**5. Campañas de temporada**
- Disparador: manual (Semana Santa, verano, peregrinaciones, decembrinas)
- Qué hace: abre reservas anticipadas a la base. Llena la flotilla en temporada
- GHL: Campaign a la base

**6. Rescate de cotización caída**
- Disparador: cotización marcada perdida/fría
- Qué hace: reactiva con incentivo o disponibilidad de última hora
- GHL: *Trigger* Stage = Perdida + Wait → WhatsApp

**7. Recurrencia ("¿otro viaje?")**
- Disparador: 30 días después de la renta
- Qué hace: invita a la siguiente. Convierte al cliente de una vez en recurrente
- GHL: *Trigger* Wait 30d post-renta → WhatsApp

**8. Reseña con filtro**
- Disparador: día siguiente a la renta
- Qué hace: 4–5★ → Google; 1–3★ → alerta al dueño
- GHL: Survey → If rating

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Confirmación de detalles del viaje**
- Disparador: 24 h antes de la renta
- Qué hace: envía itinerario, datos del chofer y punto de encuentro. Evita confusiones el día del viaje
- GHL: *Trigger* Wait until 1d before → WhatsApp con detalles

**10. Recordatorio de saldo pendiente**
- Disparador: saldo por cubrir antes del viaje
- Qué hace: recuerda el pago del resto con liga antes de la fecha
- GHL: *Trigger* fecha -X días → payment link → follow-ups

**11. Contratos anuales (escuelas/empresas)**
- Disparador: cliente institucional con viajes recurrentes
- Qué hace: recuerda cada año la fecha del viaje habitual (graduaciones, eventos). Ingreso recurrente
- GHL: *Trigger* fecha anual → WhatsApp/Email

**12. Post-viaje: recibo + siguiente reserva**
- Disparador: viaje terminado
- Qué hace: envía recibo/factura y siembra la siguiente reserva
- GHL: *Trigger* completado → Email recibo → WhatsApp

**13. Referidos de eventos**
- Disparador: renta de evento (boda, XV, empresa)
- Qué hace: pide referidos — esos eventos suelen necesitar más de una unidad y traen otros
- GHL: *Trigger* Tag evento → WhatsApp con link

**14. Voice AI** *(exclusiva Premium)*
- Disparador: llamada entrante/perdida
- Qué hace: contesta, cotiza datos básicos y agenda seguimiento del vendedor
- GHL: Voice AI Agent → CRM

**15. Reporte semanal + alertas al dueño** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: cotizaciones, reservas confirmadas, no-shows evitados, anticipos cobrados, ocupación + alerta de saldo sin cubrir
- GHL: Scheduled Workflow + triggers

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida + cotización | 🟦 |
| 2 | Recordatorio de renta | 🟦 |
| 3 | Seguimiento de cotización | 🟦 |
| 4 | Cobro de anticipo | 🟩 |
| 5 | Campañas de temporada | 🟩 |
| 6 | Rescate de cotización | 🟩 |
| 7 | Recurrencia | 🟩 |
| 8 | Reseña con filtro | 🟩 |
| 9 | Detalles del viaje | 🟪 |
| 10 | Saldo pendiente | 🟪 |
| 11 | Contratos anuales | 🟪 |
| 12 | Post-viaje + recibo | 🟪 |
| 13 | Referidos de eventos | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
