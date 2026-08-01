import type { ServiceId } from "@/lib/services";

export const SERVICE_INTENT_EVENT = "dolphin:service-intent";

export function sendServiceToContact(service: ServiceId) {
  window.dispatchEvent(
    new CustomEvent<{ service: ServiceId }>(SERVICE_INTENT_EVENT, {
      detail: { service },
    }),
  );
  window.location.hash = "contact";
}

