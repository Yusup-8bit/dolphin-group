import { ImageResponse } from "next/og";

export const alt = "Dolphin Group — connected digital systems for business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b1531",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,.4) 1px, transparent 1px), linear-gradient(90deg,rgba(148,163,184,.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: 18, height: "100%", background: "#2563eb" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "68px 78px 62px 94px", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: "0.05em" }}>
            <strong>Dolphin Group.</strong>
            <span style={{ color: "#22d3ee" }}>DIGITAL SYSTEMS / 2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ fontSize: 74, lineHeight: 0.98, letterSpacing: "-0.055em", fontWeight: 800, maxWidth: 850 }}>
              We connect business with technology that works.
            </div>
            <div style={{ width: 94, height: 94, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 800 }}>
              DG
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
