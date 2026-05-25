"use client";

import { useState } from "react";
import { Box, Typography, ClickAwayListener } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export function SecretIngredientBadge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          mt: { xs: 2, md: 3 },
          zIndex: 50,
        }}
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              background: "linear-gradient(135deg, #7A1F1F 0%, #5a1515 100%)", // Rich maroon
              border: "1px solid rgba(212,160,23,0.4)", // Gold border
              borderRadius: "100px",
              pl: 1.2,
              pr: 2,
              py: 0.8,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(62,39,35,0.4), inset 0 1px 1px rgba(255,255,255,0.15)",
              "&:hover": {
                background: "linear-gradient(135deg, #8A2525 0%, #6a1a1a 100%)",
                borderColor: "rgba(212,160,23,0.6)",
                boxShadow: "0 12px 32px rgba(62,39,35,0.5), inset 0 1px 1px rgba(255,255,255,0.2)",
              },
              transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Box
              component={motion.div}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(255, 248, 237, 0.15)", // Subtle cream bg for the heart icon
                borderRadius: "50%",
                p: 0.6,
              }}
            >
              <Heart size={16} color="#D4A017" fill="#D4A017" /> {/* Gold heart */}
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.85rem" },
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "background.default", // Cream text
              }}
            >
              Crafted with Devotion
            </Typography>
          </Box>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <Box
              sx={{
                position: "absolute",
                // Position to sit directly beside/below the button
                top: { xs: "100%", md: "50%" },
                left: { xs: 0, md: "100%" },
                transform: { xs: "none", md: "translateY(-50%)" },
                mt: { xs: 1.5, md: 0 },
                ml: { xs: 0, md: 2 },
                zIndex: 60,
                "& > div": {
                  transformOrigin: { xs: "top left", md: "left center" },
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(42,23,20,0.95) 0%, rgba(122,31,31,0.9) 100%)",
                    backdropFilter: "blur(24px)",
                    border: "1px solid rgba(212,160,23,0.25)",
                    borderRadius: "16px",
                    boxShadow:
                      "0 20px 48px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.15)",
                    p: { xs: 2, sm: 2.5 },
                    width: { xs: 260, sm: 280 },
                    position: "relative",
                    // Adding the premium glassmorphism tooltip tail
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: 14,
                      height: 14,
                      // Solid background approximating the gradient to prevent opacity stacking artifacts
                      background: "rgba(42,23,20,0.98)", 
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(212,160,23,0.25)",
                      
                      // Responsive border colors based on arrow direction
                      borderTopColor: { xs: "rgba(212,160,23,0.25)", md: "transparent" },
                      borderLeftColor: "rgba(212,160,23,0.25)", // Always gold
                      borderBottomColor: { xs: "transparent", md: "rgba(212,160,23,0.25)" },
                      borderRightColor: "transparent", // Always transparent
                      
                      // Responsive positioning and rotation
                      top: { xs: -7, md: "50%" },
                      left: { xs: 32, md: -7 },
                      transform: { xs: "rotate(45deg)", md: "translateY(-50%) rotate(45deg)" },
                      zIndex: -1,
                      borderRadius: "2px", // subtle soft speech-bubble edge
                    }
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "var(--font-heading)",
                      fontSize: { xs: "1.05rem", sm: "1.1rem" },
                      fontWeight: 800,
                      color: "warning.main", // Gold text for dark bg
                      lineHeight: 1.3,
                      mb: 1.2,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    “Our secret ingredient is Love”
                  </Typography>
                  
                  <Box
                    sx={{
                      width: 28,
                      height: 2,
                      background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.8), transparent)",
                      mx: "auto",
                      mb: 1.2,
                      borderRadius: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "var(--font-tamil-serif)", // Beautiful Tamil serif font
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      fontWeight: 600,
                      color: "rgba(255,248,237,0.85)", // Cream text for dark bg
                      lineHeight: 1.7,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    அன்புடன் சமைத்து,
                    <br />
                    ஆர்வத்துடன் பரிமாறுகிறோம்.
                    <br />
                    ஒவ்வொரு சுவையிலும் அன்பின் வெளிப்பாடு.
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </ClickAwayListener>
  );
}
