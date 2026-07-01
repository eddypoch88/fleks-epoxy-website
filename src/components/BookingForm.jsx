"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { trackWA } from "@/utils/trackWA";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function BookingForm() {
  const { locale, t } = useLanguage();
  const services = t("booking.services");
  const issues = t("booking.issues");
  const [form, setForm] = useState({ name: "", location: "", service: services[0], size: "", issue: issues[0], date: "" });

  useEffect(() => {
    setForm((current) => ({ ...current, service: services[0], issue: issues[0] }));
  }, [locale, services, issues]);

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) return alert(t("booking.alertName"));
    if (!form.location.trim()) return alert(t("booking.alertLocation"));
    const copy = t("booking.message");
    const message = [
      copy.intro, "", `${copy.name}: ${form.name}`, `${copy.location}: ${form.location}`,
      `${copy.space}: ${form.service}`, `${copy.size}: ${form.size || "-"}`,
      `${copy.issue}: ${form.issue}`, `${copy.date}: ${form.date || t("booking.flexible")}`,
      "", copy.photos
    ].join("\n");
    window.open(`https://wa.me/60146211263?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    trackWA();
  };

  return (
    <section id="contact" className="booking-section">
      <div className="wrap booking-layout">
        <div className="booking-copy reveal"><div className="eyebrow">{t("booking.eyebrow")}</div><h2>{t("booking.title")}</h2><p>{t("booking.subtitle")}</p><div className="booking-line" /></div>
        <form className="booking-form reveal" onSubmit={submit}>
          <div className="form-grid">
            <label><span>{t("booking.nameLabel")}</span><input type="text" value={form.name} onChange={update("name")} placeholder={t("booking.namePh")} autoComplete="name" /></label>
            <label><span>{t("booking.locationLabel")}</span><input type="text" value={form.location} onChange={update("location")} placeholder={t("booking.locationPh")} autoComplete="street-address" /></label>
            <label><span>{t("booking.serviceLabel")}</span><select value={form.service} onChange={update("service")}>{services.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>{t("booking.sizeLabel")}</span><input type="text" value={form.size} onChange={update("size")} placeholder={t("booking.sizePh")} inputMode="numeric" /></label>
            <label><span>{t("booking.issueLabel")}</span><select value={form.issue} onChange={update("issue")}>{issues.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span>{t("booking.dateLabel")}</span><input type="date" value={form.date} min={new Date().toISOString().slice(0, 10)} onChange={update("date")} /></label>
          </div>
          <button className="btn btn-primary form-submit" type="submit"><WhatsAppIcon /> {t("booking.btnSubmit")}</button>
          <p className="form-helper">{t("booking.helper")}</p>
        </form>
      </div>
    </section>
  );
}
