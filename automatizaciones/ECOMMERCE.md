# Automatizaciones GHL — E-commerce

**15 automatizaciones + 2 extras recomendados (17 en total).**

**Qué instalar según el plan que aceptó el cliente:**
- ✅ **Starter** ($2,500/mes) → **#1, #2 y #3**
- ✅ **Growth** ($5,500/mes) → **#1 a #8**
- ✅ **Premium** ($9,500/mes) → **#1 a #15** (las 15 completas)
- ⭐ **Extras #16 y #17** → recomiéndalos a cualquier cliente como add-on, gancho o cobro aparte

Reglas y precios: `README.md` · `../MODELO-DE-NEGOCIO.md`.
*Nota: para e-commerce el punto de entrada recomendado es Growth (necesita #4–#8 desde el día uno).*

---

## 🟦 STARTER — instala #1 a #3

**1. Bienvenida instantánea + captura**
- Disparador: mensaje en WhatsApp/IG/FB/web
- Qué hace: responde dudas de talla/envío/stock al segundo y captura el contacto en el CRM
- GHL: *Trigger* Reply → Create Contact → IA responde → Add Tag

**2. Confirmación y estatus de pedido**
- Disparador: pedido realizado / cambio de estatus
- Qué hace: confirma, avisa "enviado" y "entregado". Reduce el "¿dónde está mi paquete?"
- GHL: *Trigger* Order/Tag estatus → WhatsApp por etapa

**3. Seguimiento al que preguntó y no compró**
- Disparador: consultó y no concretó en 1 día
- Qué hace: seguimiento con otro ángulo (resuelve la objeción típica)
- GHL: *Trigger* Wait 1d sin compra → WhatsApp

---

## 🟩 GROWTH — agrega #4 a #8

**4. Rescate de carrito abandonado** *(el corazón del giro)*
- Disparador: carrito abandonado
- Qué hace: 3 toques — recordatorio → objeción → incentivo con vigencia. Recupera venta ya casi hecha
- GHL: *Trigger* Cart Abandoned → WhatsApp/Email → Wait → If no compra → siguiente toque

**5. Reseña de producto con filtro**
- Disparador: pedido entregado hace X días
- Qué hace: 4–5★ → reseña pública/UGC; 1–3★ → soporte privado antes de que sea reseña mala
- GHL: *Trigger* Wait after Delivered → Survey → If rating

**6. Nutrición de la lista**
- Disparador: contacto que no ha comprado
- Qué hace: contenido de valor cada 2 semanas hasta que compra o se da de baja
- GHL: Workflow de nurture con Email/WhatsApp

**7. Campañas y cumpleaños (VIP)**
- Disparador: fecha programada + cumpleaños
- Qué hace: rebajas con acceso anticipado a la lista propia (sin pagar anuncios) + cupón de cumpleaños
- GHL: Campaign a segmento + *Trigger* birthday

**8. Recompra por ciclo**
- Disparador: días desde la compra según el producto (consumible 30–60 días)
- Qué hace: "Se te está acabando, resurte" en el momento exacto
- GHL: *Trigger* Wait post-purchase N días → WhatsApp

---

## 🟪 PREMIUM — agrega #9 a #15

**9. Cross-sell / upsell post-compra**
- Disparador: compra de un producto ancla
- Qué hace: sugiere el complemento ideal ("compraste la cafetera → llévate el filtro")
- GHL: *Trigger* Product bought → WhatsApp con oferta relacionada

**10. Rescate de cliente dormido**
- Disparador: 90 días sin comprar
- Qué hace: oferta de reactivación segmentada por lo que solía comprar
- GHL: *Trigger* Wait 90d → WhatsApp/Email

**11. Programa de lealtad / puntos**
- Disparador: compras acumuladas
- Qué hace: avisa puntos y recompensas; incentiva la siguiente compra
- GHL: contador por campo → *Trigger* umbral → WhatsApp

**12. Aviso de reabastecimiento (back in stock)**
- Disparador: producto agotado vuelve a existencia
- Qué hace: avisa a quienes lo pidieron o lo dejaron en el carrito
- GHL: Tag "espera-[SKU]" → *Trigger* stock → notifica

**13. Recuperación de pago fallido**
- Disparador: pago rechazado / no completado
- Qué hace: avisa y da liga para reintentar. Recupera ventas que ya estaban decididas
- GHL: *Trigger* Payment Failed → WhatsApp con payment link

**14. Voice AI (pedidos/soporte)** *(exclusiva Premium)*
- Disparador: llamada entrante
- Qué hace: toma pedidos por teléfono, resuelve estatus y dudas frecuentes
- GHL: Voice AI Agent → CRM

**15. Reporte semanal + alertas al dueño** *(exclusiva Premium)*
- Disparador: programado + eventos
- Qué hace: resumen (carritos recuperados $, recompras, crecimiento de lista, ROI) + alerta de pico de quejas
- GHL: Scheduled Workflow + triggers

---

## ⭐ EXTRAS RECOMENDADOS — #16 y #17

*Fuera de la cuota de los planes. Son tu guion de recomendación: ofrécelos como add-on,
gancho para cerrar o cobro aparte. Ideales para subir el ticket o sembrar la próxima venta.*

**16. Programa de afiliados / embajadores**
- Qué hace: registra quién refiere cada venta y calcula su comisión automáticamente
- Cuándo recomendarlo: marcas con comunidad, creadores o clientas que ya recomiendan
- GHL: link de referido con owner/UTM → registro de conversión → cálculo de comisión

**17. Encuesta NPS + activación de promotores**
- Qué hace: mide satisfacción y convierte a los fans (9–10) en reseñas y referidos automáticos
- Cuándo recomendarlo: tiendas que quieren crecer con boca a boca y reputación
- GHL: Survey NPS → If ≥9 → pide reseña/referido; If ≤6 → soporte

---

## Resumen

| # | Automatización | Plan |
|---|---------------|------|
| 1 | Bienvenida + captura | 🟦 |
| 2 | Estatus de pedido | 🟦 |
| 3 | Seguimiento sin compra | 🟦 |
| 4 | Carrito abandonado | 🟩 |
| 5 | Reseña de producto | 🟩 |
| 6 | Nutrición de lista | 🟩 |
| 7 | Campañas y cumpleaños | 🟩 |
| 8 | Recompra por ciclo | 🟩 |
| 9 | Cross-sell / upsell | 🟪 |
| 10 | Rescate de dormido | 🟪 |
| 11 | Lealtad / puntos | 🟪 |
| 12 | Back in stock | 🟪 |
| 13 | Pago fallido | 🟪 |
| 14 | Voice AI | 🟪 |
| 15 | Reporte + alertas | 🟪 |
| 16 | Afiliados / embajadores | ⭐ Extra |
| 17 | NPS + promotores | ⭐ Extra |
