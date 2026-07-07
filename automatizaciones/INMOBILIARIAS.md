# Automatizaciones GHL — Inmobiliarias

**15 automatizaciones + 2 extras recomendados (17 en total).**

**Qué instalar según el plan que aceptó el cliente:**
- ✅ **Starter** ($2,500/mes) → **#1, #2 y #3**
- ✅ **Growth** ($5,500/mes) → **#1 a #8**
- ✅ **Premium** ($9,500/mes) → **#1 a #15** (las 15 completas)
- ⭐ **Extras #16 y #17** → recomiéndalos a cualquier cliente como add-on, gancho o cobro aparte

Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.
*Nota: punto de entrada recomendado Growth (la nutrición #6 es clave en este giro).*

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida instantánea con match**
- Disparador: lead de portal/Facebook/formulario
- Qué hace: responde en segundos con propiedades según zona y presupuesto. Gana al que contesta primero
- GHL: *Trigger* Form/Lead Ad → Create Contact → WhatsApp con opciones

**2. Recordatorio de visita**
- Disparador: visita a propiedad agendada
- Qué hace: confirma y recuerda; reduce visitas plantadas del comprador y del asesor
- GHL: *Trigger* Appointment Booked → recordatorios

**3. Seguimiento a lead sin respuesta**
- Disparador: lead sin contestar 3 días
- Qué hace: nuevo toque + tarea al asesor para que ninguno se enfríe en silencio
- GHL: *Trigger* Wait 3d → WhatsApp → Task

---

## 🟩 GROWTH — agrega #4 a #8

**4. Reagendamiento de visita**
- Disparador: visita cancelada
- Qué hace: propone nueva fecha sola para no perder al interesado
- GHL: *Trigger* Cancelled → WhatsApp con booking

**5. Calificación automática de leads**
- Disparador: lead nuevo
- Qué hace: la IA pregunta zona, presupuesto y forma de pago/crédito → etiqueta y asigna. El asesor solo ve leads reales
- GHL: IA → set fields → If/Else → asigna owner + Tag caliente/tibio/frío

**6. Nutrición de compradores lentos** *(el diferenciador)*
- Disparador: lead calificado que no cerró
- Qué hace: cada 2 semanas, propiedades nuevas según su perfil hasta que madura (compra de 6–12 meses)
- GHL: Workflow nurture segmentado por zona/presupuesto

**7. Rescate post-visita**
- Disparador: visita realizada
- Qué hace: "¿Qué le pareció?" + resuelve objeción + alerta al asesor si hay interés
- GHL: *Trigger* Appointment Showed → WhatsApp → If reply → Task

**8. Reseña con filtro**
- Disparador: operación cerrada
- Qué hace: 4–5★ → Google; 1–3★ → alerta privada. Reputación en un giro de confianza
- GHL: Survey → If rating

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Alerta de match inteligente**
- Disparador: se carga una propiedad nueva
- Qué hace: avisa automáticamente a los leads guardados cuyo perfil coincide. Inventario nuevo = mensajes calientes
- GHL: *Trigger* new listing Tag → Campaign a segmento que coincide

**10. Asignación con SLA a asesores**
- Disparador: lead nuevo asignado
- Qué hace: round-robin entre asesores + alerta al gerente si no se atiende en 1 h. Ningún lead caro se enfría
- GHL: Round-robin → Wait 1h → If sin contacto → alerta

**11. Seguimiento de trámite/crédito**
- Disparador: apartado hecho (etapa post-venta)
- Qué hace: acompaña las etapas de crédito/escrituración con recordatorios de documentos
- GHL: Pipeline post-venta con secuencia por etapa

**12. Reactivación por baja de precio**
- Disparador: baja el precio de una propiedad
- Qué hace: avisa a los leads fríos que la vieron o encajan. Reabre conversaciones muertas
- GHL: *Trigger* price change Tag → Campaign a interesados

**13. Post-venta y referidos**
- Disparador: operación cerrada (y aniversario de compra)
- Qué hace: pide referidos en el punto de máxima satisfacción y felicita el aniversario
- GHL: *Trigger* Won → WhatsApp referido; +365d → felicitación

**14. Voice AI** *(exclusiva Premium)*
- Disparador: llamada entrante/perdida
- Qué hace: contesta, califica y agenda visita; transcribe al CRM
- GHL: Voice AI Agent → Calendar

**15. Reporte semanal + alertas** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: leads por asesor, visitas, pipeline valorizado + alerta de lead caliente sin atender
- GHL: Scheduled Workflow + triggers

---

## ⭐ EXTRAS RECOMENDADOS — #16 y #17

*Fuera de la cuota de los planes. Son tu guion de recomendación: ofrécelos como add-on,
gancho para cerrar o cobro aparte. Ideales para subir el ticket o sembrar la próxima venta.*

**16. Ficha técnica + tour virtual automático**
- Qué hace: al pedir información, envía al instante un PDF con fotos, ubicación y video/tour de la propiedad
- Cuándo recomendarlo: como sello de atención premium que diferencia a la inmobiliaria
- GHL: *Trigger* interés en propiedad → Email/WhatsApp con ficha + link de tour

**17. Red de aliados / referidos entre brokers**
- Qué hace: capta y da seguimiento a leads compartidos con aliados, con reparto claro registrado
- Cuándo recomendarlo: inmobiliarias que trabajan en red o con otros asesores
- GHL: pipeline de leads compartidos + Tag de origen/aliado + seguimiento

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida con match | 🟦 |
| 2 | Recordatorio de visita | 🟦 |
| 3 | Seguimiento a lead | 🟦 |
| 4 | Reagendamiento | 🟩 |
| 5 | Calificación de leads | 🟩 |
| 6 | Nutrición de compradores | 🟩 |
| 7 | Rescate post-visita | 🟩 |
| 8 | Reseña con filtro | 🟩 |
| 9 | Match inteligente | 🟪 |
| 10 | Asignación con SLA | 🟪 |
| 11 | Seguimiento de crédito | 🟪 |
| 12 | Reactivación por precio | 🟪 |
| 13 | Post-venta y referidos | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
| 16 | Ficha + tour virtual | ⭐ Extra |
| 17 | Red de aliados / referidos | ⭐ Extra |
