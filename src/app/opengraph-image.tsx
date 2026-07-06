import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zaeem Durani - SDE, Red Teamer & Security Engineer";
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
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#030303",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,102,255,0.22), transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,102,255,0.12), transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#0066ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Z
          </div>
          <span
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#a1a1aa",
            }}
          >
            zaeem.dev
          </span>
        </div>

        <h1
          style={{
            fontSize: 84,
            fontWeight: 600,
            lineHeight: 1.05,
            color: "#f4f4f5",
            letterSpacing: -2,
            marginBottom: 24,
          }}
        >
          Zaeem Durani
        </h1>
        <p
          style={{
            fontSize: 34,
            color: "#0066ff",
            fontWeight: 500,
            marginBottom: 32,
          }}
        >
          SDE, Red Teamer & Security Engineer
        </p>
        <p
          style={{
            fontSize: 24,
            color: "#a1a1aa",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Building secure, intelligent systems at the intersection of software engineering and offensive security.
        </p>
      </div>
    ),
    { ...size }
  );
}
