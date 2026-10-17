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
      className="site-header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 3,
        px: { xs: 3, md: 6, lg: 10 },
        maxWidth: 1440,
        mx: "auto",
        position: "relative",
        zIndex: 10,
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
          gap: 1.25,
          fontWeight: 800,
          fontSize: "1.3125rem",
          letterSpacing: "-0.06em",
          color: "text.primary",
          textDecoration: "none",
        }}
      >
        <Box
          component="img"
          src="/final_logo.svg"
          alt="Digixito"
          sx={{
            width: { xs: 70, md: 84 },
            height: { xs: 70, md: 84 },
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
          gap: 4,
          fontSize: "0.8125rem",
          fontWeight: 600,
        }}
      >
        <Box
          component="a"
          href="#solutions"
          sx={{
            color: "text.secondary",
            textDecoration: "none",
            transition: "color 0.2s",
            "&:hover": { color: "text.primary" },
          }}
        >
          Solutions
        </Box>
        <Box
          component="a"
          href="#capabilities"
          sx={{
            color: "text.secondary",
            textDecoration: "none",
            transition: "color 0.2s",
            "&:hover": { color: "text.primary" },
          }}
        >
          Capabilities
        </Box>
        <Box
          component="a"
          href="#how-we-work"
          sx={{
            color: "text.secondary",
            textDecoration: "none",
            transition: "color 0.2s",
            "&:hover": { color: "text.primary" },
          }}
        >
          How We Work
        </Box>
        <Box
          component="a"
          href="#proof"
          sx={{
            color: "text.secondary",
            textDecoration: "none",
            transition: "color 0.2s",
            "&:hover": { color: "text.primary" },
          }}
        >
          Client Proof
        </Box>
        <Button
          component="a"
          href="#contact"
          variant="contained"
          color="primary"
          endIcon={<ArrowRight size={16} />}
          sx={{
            py: 1.25,
            px: 2.5,
            fontSize: "0.8125rem",
            border: "1px solid rgba(0,0,0,0.08)",
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
          color: "text.primary",
          p: 1,
        }}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              p: 4,
              backgroundColor: "#ffffff",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <IconButton
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </IconButton>
        </Box>
        <Stack spacing={3}>
          <Box
            component="a"
            href="#solutions"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            Solutions
          </Box>
          <Box
            component="a"
            href="#capabilities"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            Capabilities
          </Box>
          <Box
            component="a"
            href="#how-we-work"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            How We Work
          </Box>
          <Box
            component="a"
            href="#proof"
            onClick={() => setMenuOpen(false)}
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            Client Proof
          </Box>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setMenuOpen(false)}
            endIcon={<ArrowRight size={16} />}
            sx={{ mt: 2 }}
          >
            Talk with a strategist
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
