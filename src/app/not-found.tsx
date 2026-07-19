import Link from "next/link"

// Dependency-free 404. The auto-generated not-found page pulled a client-context
// dependency that threw (useContext null) under `output: export` — this explicit,
// server-rendered page replaces it. (2026-07-19)
export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Page not found</h1>
      <p style={{ color: "#9b9b9b", marginBottom: "1.5rem" }}>
        That page has wandered off. Let&apos;s get you back home.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.65rem 1.5rem",
          borderRadius: "9999px",
          background: "#e879a6",
          color: "#fff",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </div>
  )
}
