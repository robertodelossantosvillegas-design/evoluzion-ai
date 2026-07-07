# Automatizaciones GHL — Clínicas / Médicos / Dentistas

**15 automatizaciones + 2 extras recomendados (17 en total).**

**Qué instalar según el plan que aceptó el cliente:**
- ✅ **Starter** ($2,500/mes) → **#1, #2 y #3**
- ✅ **Growth** ($5,500/mes) → **#1 a #8**
- ✅ **Premium** ($9,500/mes) → **#1 a #15** (las 15 completas)
- ⭐ **Extras #16 y #17** → recomiéndalos a cualquier cliente como add-on, gancho o cobro aparte

Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida instantánea + agenda en línea**
- Disparador: paciente escribe o llena el formulario
- Qué hace: responde al segundo con liga para agendar 24/7, aun fuera de horario de recepción
- GHL: *Trigger* Form/Reply → Create Contact → Send WhatsApp con calendar link

**2. Recordatorio de consulta**
- Disparador: cita agendada
- Qué hace: confirmación + recordatorio 24 h + toque el mismo día. Ataca la inasistencia
- GHL: *Trigger* Appointment Booked → Wait → WhatsApp/SMS en cada intervalo

**3. Seguimiento al que preguntó y no agendó**
- Disparador: contacto sin cita 3 días después
- Qué hace: seguimiento sin ocupar a recepción; 2.º toque a los 7 días
- GHL: *Trigger* no Appointment + Wait → WhatsApp → Task

---

## 🟩 GROWTH — agrega #4 a #8

**4. Reagendamiento de cancelaciones**
- Disparador: cita cancelada
- Qué hace: ofrece nueva fecha automáticamente para no perder el espacio
- GHL: *Trigger* Appointment Cancelled → WhatsApp con booking link

**5. Reseña con filtro**
- Disparador: consulta terminada
- Qué hace: 4–5★ → Google; 1–3★ → alerta privada al doctor. Cuida la reputación
- GHL: Encuesta → If rating ≥4 → Google, else alerta

**6. Reactivación de pacientes inactivos**
- Disparador: sin visita en X meses (según especialidad)
- Qué hace: invita a chequeo con mensaje del giro (dental, dermatología, etc.)
- GHL: *Trigger* Wait since last visit → WhatsApp

**7. Recall por ciclo** *(la mina de oro)*
- Disparador: tiempo desde el último tratamiento (limpieza 6 meses, revisión anual)
- Qué hace: "Te toca tu limpieza" en el momento correcto. Llena agenda que hoy no existe
- GHL: *Trigger* Appointment Type + Wait 6m → WhatsApp de recall

**8. Seguimiento post-consulta**
- Disparador: 3 días después de la consulta
- Qué hace: "¿Cómo se ha sentido? Cualquier duda estamos aquí". Fideliza y detecta complicaciones
- GHL: *Trigger* Wait 3d after Showed → WhatsApp

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Recordatorio de tratamiento multi-sesión**
- Disparador: plan de varias citas (ortodoncia, fisioterapia, endodoncia)
- Qué hace: agenda y recuerda cada sesión de la serie para que el paciente no abandone a medias
- GHL: Workflow con secuencia de Appointments encadenados + recordatorios

**10. Indicaciones de preparación pre-estudio**
- Disparador: cita que requiere preparación (ayuno, suspender medicamento, estudios previos)
- Qué hace: envía las instrucciones el día previo. Evita citas perdidas por mala preparación
- GHL: *Trigger* Appointment Type = requiere prep → Wait until 1d before → WhatsApp

**11. Apartado / anticipo de tratamiento**
- Disparador: tratamiento o cirugía cotizada
- Qué hace: recuerda el anticipo con liga de pago; alerta si no se cubre. (Pagos integrados, extra)
- GHL: *Trigger* Opportunity Stage = Cotizado → WhatsApp con payment link → follow-ups

**12. Campaña de temporada**
- Disparador: manual programado
- Qué hace: chequeos de regreso a clases, paquetes de fin de año, blanqueamiento pre-boda a la base
- GHL: Campaign a segmento

**13. Referidos de pacientes**
- Disparador: paciente satisfecho (reseña 5★)
- Qué hace: invita a referir con beneficio para ambos
- GHL: *Trigger* Tag satisfecho → WhatsApp con link de referido

**14. Voice AI recepcionista** *(exclusiva Premium)*
- Disparador: llamada entrante / perdida
- Qué hace: contesta, resuelve dudas frecuentes, agenda y transcribe. Descarga a la recepción
- GHL: Voice AI Agent → Calendar → nota en contacto

**15. Reporte semanal + alertas al doctor** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: resumen (citas, inasistencias, recall recuperado, ingresos) + alerta de reseña negativa o lead caliente sin atender
- GHL: Scheduled Workflow + triggers de alerta

---

## ⭐ EXTRAS RECOMENDADOS — #16 y #17

*Fuera de la cuota de los planes. Son tu guion de recomendación: ofrécelos como add-on,
gancho para cerrar o cobro aparte. Ideales para subir el ticket o sembrar la próxima venta.*

**16. Membresía de chequeo anual**
- Qué hace: paquete prepagado de revisiones con recordatorios automáticos de cada estudio del año
- Cuándo recomendarlo: pacientes recurrentes o clínicas con enfoque de medicina preventiva
- GHL: Membership/Recurring payment + recordatorios de recall programados

**17. Convenios con empresas (medicina laboral)**
- Qué hace: landing + secuencia B2B para captar consultas de colaboradores de empresas cercanas
- Cuándo recomendarlo: clínicas que buscan volumen constante de pacientes nuevos
- GHL: Landing B2B → Workflow de seguimiento corporativo

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida + agenda | 🟦 |
| 2 | Recordatorio de consulta | 🟦 |
| 3 | Seguimiento sin cita | 🟦 |
| 4 | Reagendamiento | 🟩 |
| 5 | Reseña con filtro | 🟩 |
| 6 | Reactivación de inactivos | 🟩 |
| 7 | Recall por ciclo | 🟩 |
| 8 | Post-consulta | 🟩 |
| 9 | Tratamiento multi-sesión | 🟪 |
| 10 | Preparación pre-estudio | 🟪 |
| 11 | Anticipo de tratamiento | 🟪 |
| 12 | Campaña de temporada | 🟪 |
| 13 | Referidos | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
| 16 | Membresía de chequeo anual | ⭐ Extra |
| 17 | Convenios con empresas | ⭐ Extra |
