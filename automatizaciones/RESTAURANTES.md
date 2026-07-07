# Automatizaciones GHL — Restaurantes

15 automatizaciones diseñadas para este giro, distribuidas por plan.
**Cuota:** Starter instala #1–#3 · Growth #1–#8 · Premium las 15.
Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida instantánea + reserva en línea**
- Disparador: comensal escribe (WhatsApp/IG) o llena el formulario de reserva
- Qué hace: responde al segundo, toma la reserva y la confirma sin ocupar al equipo en servicio
- GHL: *Trigger* Reply/Form → Create Contact → Send WhatsApp con confirmación

**2. Recordatorio de reserva**
- Disparador: reserva agendada
- Qué hace: recordatorio el mismo día ("tu mesa está lista para hoy a las 8"). Ataca el no-show
- GHL: *Trigger* Appointment Booked → Wait until day-of → WhatsApp

**3. Seguimiento a evento/mesa grande no confirmada**
- Disparador: solicitud de grupo sin confirmar en 2 días
- Qué hace: seguimiento para cerrar la reserva de grupo (las que más dejan)
- GHL: *Trigger* Opportunity sin cierre + Wait → WhatsApp → Task

---

## 🟩 GROWTH — agrega #4 a #8

**4. Lista de espera que llena cancelaciones**
- Disparador: cancelación en horario lleno
- Qué hace: avisa al primero de la lista de espera que se liberó mesa
- GHL: Tag "espera" → *Trigger* on cancellation → notifica al siguiente

**5. Reseña con filtro**
- Disparador: fin de la visita
- Qué hace: 4–5★ → Google; 1–3★ → alerta privada al gerente antes de que sea pública
- GHL: Encuesta post-visita → If rating → Google / alerta

**6. "¿Vuelves pronto?"**
- Disparador: 3 semanas sin regresar
- Qué hace: invita a reservar de nuevo; convierte al comensal de una vez en recurrente
- GHL: *Trigger* Wait since last visit 21d → WhatsApp

**7. Campañas de fechas fuertes**
- Disparador: manual programado (Madres, Padres, diciembre, San Valentín)
- Qué hace: "Ya puedes reservar para el 10 de mayo" a toda la base. Llena las mejores fechas primero
- GHL: Campaign a toda la base

**8. Cumpleaños con beneficio**
- Disparador: cumpleaños del comensal
- Qué hace: postre gratis o cortesía si reserva su festejo. Trae mesas grandes
- GHL: *Trigger* birthday → WhatsApp con cortesía

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Eventos privados / salón**
- Disparador: solicitud de evento (cumpleaños, empresa, boda chica)
- Qué hace: envía paquetes, agenda visita al salón y da seguimiento hasta cerrar
- GHL: Pipeline "Eventos" con secuencia de seguimiento + booking

**10. Cobro de anticipo/depósito de grupos**
- Disparador: reserva de grupo grande confirmada
- Qué hace: recuerda el depósito con liga de pago; reduce no-shows de grupos. (Pagos integrados, extra)
- GHL: *Trigger* Opportunity = Grupo → payment link → follow-ups

**11. Programa de lealtad**
- Disparador: cada X visitas registradas
- Qué hace: premia al recurrente ("tu 6.ª visita, postre a la casa"). Aumenta frecuencia
- GHL: contador por Tag/campo → *Trigger* al umbral → WhatsApp de premio

**12. Encuesta post-visita con alerta**
- Disparador: 2 h después de la visita
- Qué hace: mide satisfacción; queja → alerta inmediata al gerente para resolver en caliente
- GHL: Survey → If negativa → Task/alerta

**13. Menú del día / broadcast**
- Disparador: manual (comida del día, música en vivo, promo)
- Qué hace: mensaje segmentado (solo a quienes no vienen entre semana, por ejemplo)
- GHL: Campaign a segmento por etiqueta

**14. Voice AI para reservas** *(exclusiva Premium)*
- Disparador: llamada entrante
- Qué hace: toma la reserva por teléfono sin ocupar al host en hora pico; queda en el calendario
- GHL: Voice AI → Calendar booking

**15. Reporte semanal + alertas al dueño** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: resumen (reservas, no-shows evitados, recurrentes, reseñas) + alerta de reseña negativa
- GHL: Scheduled Workflow + triggers

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida + reserva | 🟦 |
| 2 | Recordatorio de reserva | 🟦 |
| 3 | Seguimiento a grupos | 🟦 |
| 4 | Lista de espera | 🟩 |
| 5 | Reseña con filtro | 🟩 |
| 6 | ¿Vuelves pronto? | 🟩 |
| 7 | Fechas fuertes | 🟩 |
| 8 | Cumpleaños | 🟩 |
| 9 | Eventos privados | 🟪 |
| 10 | Anticipo de grupos | 🟪 |
| 11 | Lealtad | 🟪 |
| 12 | Encuesta + alerta | 🟪 |
| 13 | Menú del día / broadcast | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
