# Automatizaciones GHL — Barberías / Salones / Nail salons

**15 automatizaciones + 2 extras recomendados (17 en total).**

**Qué instalar según el plan que aceptó el cliente:**
- ✅ **Starter** ($2,500/mes) → **#1, #2 y #3**
- ✅ **Growth** ($5,500/mes) → **#1 a #8**
- ✅ **Premium** ($9,500/mes) → **#1 a #15** (las 15 completas)
- ⭐ **Extras #16 y #17** → recomiéndalos a cualquier cliente como add-on, gancho o cobro aparte

Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida instantánea**
- Disparador: una clienta escribe (WhatsApp/IG/formulario/QR en el espejo)
- Qué hace: crea el contacto, lo etiqueta por origen y responde al segundo con opción de agendar. Baja el tiempo de respuesta de horas a segundos
- GHL: *Trigger* Customer Replied / Form Submitted → Create Contact → Send WhatsApp → Add Tag origen

**2. Recordatorio de cita**
- Disparador: cita agendada en el calendario
- Qué hace: confirma al agendar + recuerda 24 h antes + toque 2 h antes. Ataca directo el no-show
- GHL: *Trigger* Appointment Booked → Confirmación → Wait → WhatsApp 24 h → Wait → WhatsApp 2 h

**3. Seguimiento al que preguntó y no agendó**
- Disparador: contacto sin cita 3 días después del primer mensaje
- Qué hace: mensaje con otro ángulo (disponibilidad de la semana); si no responde, 2.º toque a los 7 días
- GHL: *Trigger* no Appointment + Wait 3d → If/Else → WhatsApp → Task al dueño

---

## 🟩 GROWTH — agrega #4 a #8

**4. Reagendamiento de cancelaciones**
- Disparador: cita cancelada o marcada no-show
- Qué hace: ofrece nueva fecha con liga al calendario; el hueco se anuncia a la lista de espera
- GHL: *Trigger* Appointment Status = Cancelled/No-show → WhatsApp con liga de booking

**5. Reseña con filtro de experiencia**
- Disparador: servicio completado
- Qué hace: pregunta 1–5; 4–5★ → liga a Google, 1–3★ → alerta privada al dueño antes de que llegue a internet
- GHL: *Trigger* Appointment Status = Showed → Encuesta → If rating ≥4 → Google, else Task/alerta

**6. Reactivación de clienta dormida**
- Disparador: 35 días sin cita
- Qué hace: "¡Te extrañamos!" con incentivo suave; si responde, directo al calendario. Máximo 2 toques
- GHL: *Trigger* Wait since last appointment 35d → WhatsApp → If reply → booking link

**7. Cumpleaños con beneficio**
- Disparador: fecha de cumpleaños de la clienta
- Qué hace: felicitación + beneficio canjeable ese mes. Genera visita en mes muerto
- GHL: *Trigger* Contact Date (birthday) → Send WhatsApp con cupón/etiqueta

**8. Promo de horas muertas**
- Disparador: manual programado (días/horas de baja ocupación)
- Qué hace: "Martes de silla vacía" solo a clientas de la zona; llena huecos que hoy quedan vacíos
- GHL: Bulk Action / Campaign a segmento por etiqueta

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Programa de referidas**
- Disparador: reseña 5★ o clienta frecuente detectada
- Qué hace: "Trae a una amiga, las dos con descuento" + liga que registra quién refirió
- GHL: *Trigger* Tag "promotora" → WhatsApp con link de referido (campo UTM/owner)

**10. Recompra de paquete / mantenimiento por servicio**
- Disparador: ciclo típico del servicio (tinte 4 sem, uñas 3 sem, corte 4 sem)
- Qué hace: "Ya te toca tu retoque" en el momento exacto según lo último que se hizo
- GHL: *Trigger* Appointment Type → Wait N días → WhatsApp de recompra

**11. Upsell pre-cita**
- Disparador: 1 día antes de la cita
- Qué hace: ofrece agregar un tratamiento ("suma hidratación por $X") a la cita ya agendada
- GHL: *Trigger* Wait until 1d before Appointment → WhatsApp con opción de add-on

**12. Lista de espera por estilista**
- Disparador: clienta pide a un estilista/manicurista con agenda llena
- Qué hace: la anota y le avisa en cuanto se libere un espacio con esa persona
- GHL: Tag "espera-[estilista]" → *Trigger* on cancellation de ese calendario → notifica

**13. Seguimiento post-servicio + recompra guiada**
- Disparador: 2 días después del servicio
- Qué hace: "¿Cómo va tu look?" + tip de cuidado + botón para reagendar el siguiente
- GHL: *Trigger* Wait 2d after Showed → WhatsApp → booking link

**14. Voice AI — el teléfono se contesta solo** *(exclusiva Premium)*
- Disparador: llamada entrante o llamada perdida
- Qué hace: contesta, responde precios/horarios y agenda directo en el calendario; todo queda transcrito
- GHL: Voice AI Agent → Calendar booking → Nota en el contacto

**15. Reporte semanal + alertas al dueño** *(exclusiva Premium)*
- Disparador: programado (semanal) + eventos críticos
- Qué hace: resumen por WhatsApp (citas, no-shows evitados, reactivadas, ingresos estimados) + alerta si una reseña negativa entra
- GHL: Scheduled Workflow → WhatsApp resumen; *Trigger* rating <4 → alerta inmediata

---

## ⭐ EXTRAS RECOMENDADOS — #16 y #17

*Fuera de la cuota de los planes. Son tu guion de recomendación: ofrécelos como add-on,
gancho para cerrar o cobro aparte. Ideales para subir el ticket o sembrar la próxima venta.*

**16. Suscripción de cortes (membresía)**
- Qué hace: cobra una mensualidad y agenda solo el mismo servicio cada mes, con recordatorios incluidos
- Cuándo recomendarlo: a la clienta que viene siempre — la conviertes en ingreso fijo y predecible
- GHL: Membership/Recurring payment + Recurring Appointment + recordatorios

**17. Venta de producto post-servicio**
- Qué hace: 1 día después del servicio recomienda el producto que se usó (pomada, shampoo, kit) con liga de compra o apartado
- Cuándo recomendarlo: barberías y salones que venden producto en mostrador
- GHL: *Trigger* Wait 1d after Showed → WhatsApp con link de producto

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida instantánea | 🟦 |
| 2 | Recordatorio de cita | 🟦 |
| 3 | Seguimiento sin cita | 🟦 |
| 4 | Reagendamiento | 🟩 |
| 5 | Reseña con filtro | 🟩 |
| 6 | Reactivación de dormidas | 🟩 |
| 7 | Cumpleaños | 🟩 |
| 8 | Promo horas muertas | 🟩 |
| 9 | Referidas | 🟪 |
| 10 | Recompra por servicio | 🟪 |
| 11 | Upsell pre-cita | 🟪 |
| 12 | Lista de espera por estilista | 🟪 |
| 13 | Post-servicio + recompra | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
| 16 | Suscripción de cortes | ⭐ Extra |
| 17 | Venta de producto post-servicio | ⭐ Extra |
