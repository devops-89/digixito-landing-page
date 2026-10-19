"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <Box
      component="header"
      className="site-top-logo"
      sx={{
        width: "100%",
        backgroundColor: "#faf6eb",
        pt: { xs: 3, md: 3.5 },
        pb: { xs: 1, md: 1.5 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: { xl: 1440 },
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component="a"
          href="#top"
          className="brand"
          aria-label="Digixito home"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            transition: "transform 0.2s ease, opacity 0.2s ease",
            "&:hover": {
              transform: "scale(1.02)",
              opacity: 0.9,
            },
          }}
        >
          <Box
            component="img"
            src="/final_logo.svg"
            alt="Digixito"
            sx={{
              height: { xs: 46, md: 80 },
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
