import { ImageResponse } from "next/og";

export const alt = "Waleed Tahir — Senior FullStack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070708",
          color: "#f4f1ea",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#e4ff47",
            fontFamily: "sans-serif",
          }}
        >
          SENIOR FULLSTACK ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ display: "flex", fontSize: 108, lineHeight: 0.9, fontFamily: "Georgia, serif" }}>
            Waleed
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              lineHeight: 0.9,
              fontStyle: "italic",
              color: "#e4ff47",
              fontFamily: "Georgia, serif",
            }}
          >
            Tahir
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#a7a297",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>Islamabad, Pakistan</div>
          <div style={{ display: "flex" }}>Next.js · React · TypeScript · Node.js</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
