"use client";

import { useEffect, useRef, useState } from "react";
import ReactWhatsapp from "react-whatsapp";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { ArrowUp, Send, Sparkles, X } from "lucide-react";

const defaultSuggestions = [
  "PPC & Google Ads Audit",
  "SEO & Organic Growth",
  "Landing Page & CRO",
  "AI Transformation & Scale",
];

export default function WhatsAppButton({
  phoneNumber = "+91 8800291352",
}: {
  phoneNumber?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sendButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentMessage =
    message.trim() ||
    "Hi Digixito team, I'd like to discuss digital growth solutions for my business.";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      triggerSend();
    }
  };

  const triggerSend = () => {
    if (message.trim()) {
      setSentMessages((prev) => [...prev, message.trim()]);
    }
    if (sendButtonRef.current) {
      sendButtonRef.current.click();
    }
    setMessage("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(`Hi Digixito, I'd like help with: ${suggestion}`);
  };

  return (
    <Box
      className="animate-load-fab"
      sx={{
        position: "fixed",
        bottom: { xs: 20, md: 24 },
        right: { xs: 20, md: 24 },
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {isOpen && (
        <Paper
          elevation={4}
          role="dialog"
          aria-label="Digixito WhatsApp Growth Assistant"
          sx={{
            width: { xs: 320, sm: 360 },
            maxHeight: 520,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            border: "1px solid #dedad0",
            borderRadius: "16px",
            overflow: "hidden",
            mb: 2,
            boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              backgroundColor: "#111111",
              color: "#ffffff",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  src="/final_logo.svg"
                  alt="Digixito"
                  sx={{
                    width: 36,
                    height: 36,
                    backgroundColor: "#ffffff",
                    p: 0.5,
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    border: "2px solid #111111",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    lineHeight: 1.2,
                  }}
                >
                  Digixito Assistant
                </Typography>
                <Typography sx={{ fontSize: "0.6875rem", color: "#9e9e9e" }}>
                  Online • Replies quickly
                </Typography>
              </Box>
            </Box>
            <IconButton
              size="small"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
              sx={{ color: "#ffffff" }}
            >
              <X size={18} />
            </IconButton>
          </Box>

          {/* Body */}
          <Box
            sx={{
              p: 2.5,
              flexGrow: 1,
              overflowY: "auto",
              backgroundColor: "#f8f6f0",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Chip
                label="TODAY"
                size="small"
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #dedad0",
                  fontSize: "0.6875rem",
                  fontFamily: "DM Mono, monospace",
                  fontWeight: 700,
                  color: "text.secondary",
                  height: 20,
                }}
              />
            </Box>

            {/* Incoming message */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                backgroundColor: "#ffffff",
                border: "1px solid #dedad0",
                borderRadius: "12px 12px 12px 2px",
                maxWidth: "90%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#111111",
                  mb: 1,
                }}
              >
                <Sparkles size={12} /> Digixito Strategist
              </Box>
              <Typography
                sx={{ fontSize: "0.8125rem", color: "text.primary", mb: 1 }}
              >
                Hi there! 👋 Welcome to Digixito.
              </Typography>
              <Typography
                sx={{ fontSize: "0.8125rem", color: "text.secondary" }}
              >
                We help growing businesses turn search visibility and traffic
                into measurable revenue. Type your message below to connect on
                WhatsApp!
              </Typography>
            </Paper>

            {/* Suggestions */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "text.secondary",
                  mb: 1,
                }}
              >
                Popular topics:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {defaultSuggestions.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    clickable
                    onClick={() => handleSuggestionClick(item)}
                    sx={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #dedad0",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#FFEF46",
                        borderColor: "#111111",
                        color: "#111111",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Outgoing messages */}
            {sentMessages.map((msg, idx) => (
              <Box key={idx} sx={{ alignSelf: "flex-end", maxWidth: "85%" }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.75,
                    backgroundColor: "#111111",
                    color: "#ffffff",
                    borderRadius: "12px 12px 2px 12px",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8125rem" }}>{msg}</Typography>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Input bar */}
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              triggerSend();
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1.5,
              backgroundColor: "#ffffff",
              borderTop: "1px solid #dedad0",
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Type message & Enter..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontSize: "0.8125rem",
                },
              }}
            />
            <IconButton
              type="button"
              onClick={triggerSend}
              sx={{
                backgroundColor: "#FFEF46",
                color: "#111111",
                "&:hover": {
                  backgroundColor: "#ffe91a",
                },
                width: 38,
                height: 38,
              }}
              aria-label="Send message"
            >
              <Send size={16} />
            </IconButton>

            <Box sx={{ display: "none" }}>
              <ReactWhatsapp
                ref={sendButtonRef}
                number={phoneNumber}
                message={currentMessage}
                element="button"
                type="button"
                aria-label="Send WhatsApp hidden"
              />
            </Box>
          </Box>
        </Paper>
      )}

      {/* Floating Action Buttons Row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        {/* WhatsApp Button */}
        <Fab
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={isOpen}
          sx={{
            backgroundColor: "#25D366",
            color: "#ffffff",
            width: { xs: 52, md: 58 },
            height: { xs: 52, md: 58 },
            boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
            transition: "all 0.25s ease",
            "&:hover": {
              backgroundColor: "#1ebe57",
              transform: "scale(1.05)",
              boxShadow: "0 10px 28px rgba(37, 211, 102, 0.5)",
            },
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Fab>

        {/* Floating Scroll-to-Top Button on the right side */}
        <Tooltip title="Back to top" placement="top" arrow>
          <Fab
            onClick={scrollToTop}
            aria-label="Scroll to top"
            sx={{
              backgroundColor: "#111111",
              color: "#FFEF46",
              width: { xs: 46, md: 50 },
              height: { xs: 46, md: 50 },
              minHeight: { xs: 46, md: 50 },
              border: "1.5px solid rgba(255, 239, 70, 0.35)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.22)",
              opacity: showScrollTop ? 1 : 0,
              transform: showScrollTop ? "scale(1)" : "scale(0.7)",
              pointerEvents: showScrollTop ? "auto" : "none",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": {
                backgroundColor: "#FFEF46",
                color: "#111111",
                borderColor: "#FFEF46",
                transform: "translateY(-3px) scale(1.06)",
                boxShadow: "0 12px 28px rgba(255, 239, 70, 0.45)",
              },
            }}
          >
            <ArrowUp size={22} strokeWidth={2.6} />
          </Fab>
        </Tooltip>
      </Box>
    </Box>
  );
}
