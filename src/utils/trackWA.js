export const trackWA = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "Lead",
      event_label: "WhatsApp Lead",
      value: 1,
    });
  }
};
