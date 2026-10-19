import { Suspense } from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You — Digixito",
  description:
    "Thank you for reaching out to Digixito. We have received your inquiry and our senior engineering leadership will connect with you shortly.",
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#faf6eb",
          }}
        >
          <CircularProgress sx={{ color: "#111111" }} />
        </Box>
      }
    >
      <ThankYouClient />
    </Suspense>
  );
}
