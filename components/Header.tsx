"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      component="header"
      className="site-header animate-load-header"
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1100,
        backgroundColor: "rgba(255, 255, 255, 0.82)",
        backdropFilter: "blur(18px) saturate(180%)",
        WebkitBackdropFilter: "blur(18px) saturate(180%)",
        borderBottom: "1px solid rgba(17, 17, 17, 0.08)",
        boxShadow:
          "0 4px 24px -2px rgba(17, 17, 17, 0.04), 0 2px 6px -1px rgba(17, 17, 17, 0.02)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Box
        className="site-header-inner"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: { xs: 1.25, md: 1.5 },
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          maxWidth: 1440,
          mx: "auto",
          width: "100%",
        }}
      >
        <Box
          component="a"
          href="#top"
          className="brand"
          aria-label="Digixito home"
          sx={{
            display: "flex",
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
              height: { xs: 46, md: 54 },
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>

        {/* Desktop Navigation */}
        <Box
          component="nav"
          aria-label="Main navigation"
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          <Box
            component="a"
            href="#solutions"
            sx={{
              color: "#333333",
              textDecoration: "none",
              px: 2,
              py: 0.9,
              borderRadius: 999,
              transition: "all 0.2s ease",
              "&:hover": {
                color: "#111111",
                backgroundColor: "rgba(17, 17, 17, 0.06)",
              },
            }}
          >
            Solutions
          </Box>
          <Box
            component="a"
            href="#how-we-work"
            sx={{
              color: "#333333",
              textDecoration: "none",
              px: 2,
              py: 0.9,
              borderRadius: 999,
              transition: "all 0.2s ease",
              "&:hover": {
                color: "#111111",
                backgroundColor: "rgba(17, 17, 17, 0.06)",
              },
            }}
          >
            How We Work
          </Box>
          <Box
            component="a"
            href="#proof"
            sx={{
              color: "#333333",
              textDecoration: "none",
              px: 2,
              py: 0.9,
              borderRadius: 999,
              transition: "all 0.2s ease",
              "&:hover": {
                color: "#111111",
                backgroundColor: "rgba(17, 17, 17, 0.06)",
              },
            }}
          >
            Client Proof
          </Box>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            endIcon={<ArrowRight size={15} />}
            sx={{
              ml: 1.5,
              py: 1.15,
              px: 2.75,
              fontSize: "0.8125rem",
              fontWeight: 800,
              backgroundColor: "#111111",
              color: "#ffffff",
              borderRadius: 999,
              border: "1px solid rgba(17, 17, 17, 0.12)",
              boxShadow: "0 2px 10px rgba(17, 17, 17, 0.12)",
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": {
                backgroundColor: "#262626",
                transform: "translateY(-1px)",
                boxShadow: "0 6px 18px rgba(17, 17, 17, 0.2)",
              },
            }}
          >
            Talk with a growth strategist
          </Button>
        </Box>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#111111",
            p: 1.1,
            borderRadius: "12px",
            backgroundColor: "rgba(17, 17, 17, 0.04)",
            border: "1px solid rgba(17, 17, 17, 0.06)",
            "&:hover": {
              backgroundColor: "rgba(17, 17, 17, 0.08)",
            },
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 300,
              p: 3.5,
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
              borderLeft: "1px solid rgba(17, 17, 17, 0.08)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="/final_logo.svg"
            alt="Digixito"
            sx={{ height: 42, width: "auto" }}
          />
          <IconButton
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            sx={{
              color: "#111111",
              p: 0.75,
              borderRadius: "8px",
              backgroundColor: "rgba(17, 17, 17, 0.04)",
            }}
          >
            <X size={20} />
          </IconButton>
        </Box>
        <Stack spacing={2.5}>
          <Box
            component="a"
            href="#solutions"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "#111111",
              textDecoration: "none",
              py: 0.75,
              px: 1.5,
              borderRadius: "8px",
              transition: "background 0.2s",
              "&:hover": { backgroundColor: "rgba(17, 17, 17, 0.05)" },
            }}
          >
            Solutions
          </Box>
          <Box
            component="a"
            href="#how-we-work"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "#111111",
              textDecoration: "none",
              py: 0.75,
              px: 1.5,
              borderRadius: "8px",
              transition: "background 0.2s",
              "&:hover": { backgroundColor: "rgba(17, 17, 17, 0.05)" },
            }}
          >
            How We Work
          </Box>
          <Box
            component="a"
            href="#proof"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "#111111",
              textDecoration: "none",
              py: 0.75,
              px: 1.5,
              borderRadius: "8px",
              transition: "background 0.2s",
              "&:hover": { backgroundColor: "rgba(17, 17, 17, 0.05)" },
            }}
          >
            Client Proof
          </Box>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            fullWidth
            onClick={() => setMenuOpen(false)}
            endIcon={<ArrowRight size={16} />}
            sx={{
              mt: 2,
              py: 1.4,
              borderRadius: 999,
              backgroundColor: "#111111",
              color: "#ffffff",
              fontWeight: 800,
              boxShadow: "0 4px 14px rgba(17, 17, 17, 0.16)",
              "&:hover": { backgroundColor: "#262626" },
            }}
          >
            Talk with a strategist
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
