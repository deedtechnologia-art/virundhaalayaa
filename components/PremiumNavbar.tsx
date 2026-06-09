"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { businessConfig, navLinks, siteConfig } from "@/lib";

/* ─────────────── drawer / overlay variants ─────────────── */
const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 34 },
  },
  exit: {
    x: "110%",
    transition: { duration: 0.24, ease: "easeIn" as const },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:   { opacity: 0, transition: { duration: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 26 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.055 + 0.06,
      type: "spring" as const,
      stiffness: 360,
      damping: 28,
    },
  }),
};

/* ─────────────── desktop nav link ─────────────── */
function DesktopLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" as const, stiffness: 500, damping: 28 }}
      style={{ position: "relative" }}
    >
      <Box
        component={Link}
        href={href}
        sx={{
          alignItems: "center",
          color: active ? "primary.main" : "text.primary",
          display: "inline-flex",
          fontFamily: "var(--font-body)",
          fontSize: "0.84rem",
          fontWeight: active ? 700 : 500,
          letterSpacing: "0.015em",
          minHeight: 44,
          px: 2,
          position: "relative",
          textDecoration: "none",
          transition: "color 200ms ease",
          /* animated underline */
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: active ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
            transformOrigin: "center",
            width: "60%",
            height: "2px",
            borderRadius: 999,
            background: "linear-gradient(90deg, #7a1f1f, #d4a017)",
            transition: "transform 260ms cubic-bezier(.34,1.56,.64,1)",
          },
          "&:hover": { color: "primary.main" },
          "&:hover::after": {
            transform: "translateX(-50%) scaleX(1)",
          },
        }}
      >
        {label}
      </Box>
    </motion.div>
  );
}

/* ─────────────── mobile nav link ─────────────── */
function MobileLink({
  href,
  label,
  active,
  index,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <Box
        component={Link}
        href={href}
        onClick={onClick}
        sx={{
          alignItems: "center",
          background: active
            ? "linear-gradient(135deg,rgba(122,31,31,0.10),rgba(212,160,23,0.08))"
            : "transparent",
          border: active
            ? "1px solid rgba(122,31,31,0.16)"
            : "1px solid transparent",
          borderRadius: "14px",
          color: active ? "primary.main" : "text.primary",
          display: "flex",
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          fontWeight: active ? 700 : 500,
          gap: 1.5,
          letterSpacing: "0.01em",
          minHeight: 52,
          px: 2.5,
          textDecoration: "none",
          transition: "background 220ms, color 180ms, border-color 220ms",
          "&:hover": {
            background: "rgba(122,31,31,0.07)",
            color: "primary.main",
          },
        }}
      >
        {active && (
          <Box
            sx={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#7a1f1f,#d4a017)",
              boxShadow: "0 0 8px rgba(122,31,31,0.55)",
              flexShrink: 0,
            }}
          />
        )}
        {label}
      </Box>
    </motion.div>
  );
}

/* ─────────────── main navbar ─────────────── */
export function PremiumNavbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  return (
    <>
      {/* ═══════════════ NAVBAR ═══════════════ */}
      {/*
        KEY ANTI-GLITCH RULE:
        Never animate backdropFilter with framer-motion — it triggers full
        compositor repaint on every frame tick, which causes the "flicker"
        when children have hover transforms.
        Solution: keep blur constant via CSS; only animate opacity/shadow.
      */}
      <Box
        component="header"
        className={scrolled ? "navbar scrolled" : "navbar"}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1200,
          width: "100%",
          /* Glass is ALWAYS on — no toggling, no glitch */
          backdropFilter: "blur(22px) saturate(1.7)",
          WebkitBackdropFilter: "blur(22px) saturate(1.7)",
          /* Use transform to promote to its own compositor layer */
          transform: "translateZ(0)",
          willChange: "box-shadow, background-color",
          /* Smooth scroll-state transitions via CSS (not JS) */
          transition: "background-color 350ms ease, box-shadow 350ms ease, border-color 350ms ease",
          backgroundColor: scrolled
            ? "rgba(255,248,237,0.78)"
            : "rgba(255,248,237,0.30)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.55)"
            : "1px solid rgba(255,255,255,0.18)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(62,39,35,0.09), 0 1px 0 rgba(255,255,255,0.45) inset"
            : "none",
        }}
      >
        {/* Animated top shimmer bar (visible on scroll) */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.75) 35%,rgba(212,160,23,0.5) 65%,transparent 100%)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 400ms ease",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mx: "auto",
            maxWidth: "1440px",
            minHeight: { xs: 68, md: 76 },
            px: { xs: 2, sm: 3, lg: 7 },
          }}
        >
          {/* ── Logo ── */}
          <Stack
            component={Link}
            href="/"
            direction="row"
            spacing={1.25}
            sx={{
              alignItems: "center",
              color: "inherit",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <motion.div
              whileHover={{ rotate: -6, scale: 1.07 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring" as const, stiffness: 420, damping: 20 }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  background:
                    "linear-gradient(145deg,#7A1F1F 0%,#9C2F23 55%,#C8890F 120%)",
                  border: "1px solid rgba(212,160,23,0.4)",
                  borderRadius: "50%",
                  boxShadow:
                    "0 10px 28px rgba(122,31,31,0.28), 0 1px 0 rgba(255,200,100,0.2) inset",
                  color: "#FFF8ED",
                  display: "flex",
                  height: { xs: 44, md: 50 },
                  justifyContent: "center",
                  width: { xs: 44, md: 50 },
                }}
              >
                <RestaurantMenuRoundedIcon fontSize="small" />
              </Box>
            </motion.div>

            <Box>
              <Typography
                component="span"
                sx={{
                  display: "block",
                  color: "primary.main",
                  fontFamily: "var(--font-heading)",
                  fontSize: { xs: "1.08rem", sm: "1.28rem" },
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {siteConfig.name}
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "text.secondary",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  mt: 0.3,
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.tagline}
              </Typography>
            </Box>
          </Stack>

          {/* ── Desktop nav links (no pill container) ── */}
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0,
            }}
          >
            {navLinks.map((link) => (
              <DesktopLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
              />
            ))}
          </Box>

          {/* ── Right: Order CTA + Hamburger ── */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "center", flexShrink: 0 }}
          >
            {/* WhatsApp CTA — desktop */}
            <Box
              component="a"
              href={`https://wa.me/${businessConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
              className="nav-wa-btn"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                alignItems: "center",
                gap: "7px",
                background: "linear-gradient(135deg,#1f9f55 0%,#168a47 100%)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: 999,
                boxShadow:
                  "0 6px 22px rgba(22,138,71,0.26), 0 1px 0 rgba(255,255,255,0.28) inset",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "0.01em",
                minHeight: 40,
                overflow: "hidden",
                paddingInline: "18px",
                position: "relative",
                textDecoration: "none",
                transition: "transform 200ms ease, box-shadow 200ms ease",
                "&:hover": {
                  transform: "translateY(-2px) scale(1.03)",
                  boxShadow: "0 10px 30px rgba(22,138,71,0.34)",
                },
                "&:active": { transform: "scale(0.97)" },
                /* Shimmer via CSS — no JS = no re-render trigger */
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.28) 50%,transparent 70%)",
                  transform: "translateX(-100%)",
                  animation: "navWaShine 2.8s ease-in-out infinite",
                },
              }}
            >
              <WhatsAppIcon style={{ width: 17, height: 17 }} />
              Order Now
            </Box>

            {/* Hamburger — mobile only */}
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.92 }}
            >
              <IconButton
                aria-label="Open navigation menu"
                onClick={() => setOpen(true)}
                sx={{
                  background: "rgba(122,31,31,0.09)",
                  border: "1px solid rgba(122,31,31,0.14)",
                  borderRadius: "50%",
                  boxShadow: "0 2px 10px rgba(122,31,31,0.10)",
                  color: "primary.main",
                  display: { md: "none" },
                  height: 44,
                  width: 44,
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            </motion.div>
          </Stack>
        </Box>
      </Box>

      {/* ═══════════════ MOBILE DRAWER ═══════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(20,10,6,0.42)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                zIndex: 1300,
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(88vw, 360px)",
                zIndex: 1400,
                display: "flex",
                flexDirection: "column",
                /* Same anti-glitch rule: CSS blur, never animated */
                backdropFilter: "blur(32px) saturate(1.9)",
                WebkitBackdropFilter: "blur(32px) saturate(1.9)",
                background: "rgba(255,248,237,0.84)",
                borderLeft: "1px solid rgba(255,255,255,0.52)",
                boxShadow: "-20px 0 72px rgba(62,39,35,0.16)",
              }}
            >
              {/* Top shimmer line */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.85),rgba(212,160,23,0.45),transparent)",
                  pointerEvents: "none",
                }}
              />

              {/* Drawer header */}
              <Box
                sx={{
                  alignItems: "center",
                  borderBottom: "1px solid rgba(62,39,35,0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  px: 3,
                  py: 2.5,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.25}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      background:
                        "linear-gradient(145deg,#7A1F1F 0%,#9C2F23 55%,#C8890F 120%)",
                      border: "1px solid rgba(212,160,23,0.38)",
                      borderRadius: "50%",
                      boxShadow: "0 6px 18px rgba(122,31,31,0.22)",
                      color: "#FFF8ED",
                      display: "flex",
                      height: 40,
                      justifyContent: "center",
                      width: 40,
                    }}
                  >
                    <RestaurantMenuRoundedIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      {siteConfig.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.64rem",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        mt: 0.3,
                      }}
                    >
                      {siteConfig.tagline}
                    </Typography>
                  </Box>
                </Stack>

                <motion.div
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.18 }}
                >
                  <IconButton
                    aria-label="Close navigation menu"
                    onClick={() => setOpen(false)}
                    sx={{
                      background: "rgba(122,31,31,0.08)",
                      border: "1px solid rgba(122,31,31,0.13)",
                      borderRadius: "50%",
                      color: "primary.main",
                      height: 38,
                      width: 38,
                    }}
                  >
                    <CloseRoundedIcon fontSize="small" />
                  </IconButton>
                </motion.div>
              </Box>

              {/* Nav links */}
              <Box sx={{ flex: 1, overflowY: "auto", px: 2.5, py: 2 }}>
                <Stack spacing={0.75}>
                  {navLinks.map((link, i) => (
                    <MobileLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      active={pathname === link.href}
                      index={i}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </Stack>
              </Box>

              {/* WhatsApp CTA */}
              <Box sx={{ borderTop: "1px solid rgba(62,39,35,0.08)", p: 2.5 }}>
                <Box
                  component="a"
                  href={`https://wa.me/${businessConfig.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  sx={{
                    alignItems: "center",
                    background: "linear-gradient(135deg,#1f9f55 0%,#168a47 100%)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: 999,
                    boxShadow:
                      "0 8px 28px rgba(22,138,71,0.26), 0 1px 0 rgba(255,255,255,0.28) inset",
                    color: "#fff",
                    display: "flex",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    gap: "8px",
                    justifyContent: "center",
                    minHeight: 50,
                    overflow: "hidden",
                    position: "relative",
                    textDecoration: "none",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    width: "100%",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 34px rgba(22,138,71,0.34)",
                    },
                    "&:active": { transform: "scale(0.97)" },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.26) 50%,transparent 70%)",
                      transform: "translateX(-100%)",
                      animation: "drawerWaShine 2.6s ease-in-out infinite",
                    },
                  }}
                >
                  <WhatsAppIcon style={{ width: 20, height: 20 }} />
                  WhatsApp Order
                </Box>
              </Box>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══════════════ GLOBAL KEYFRAMES ═══════════════ */}
      <style>{`
        @keyframes navWaShine {
          0%        { transform: translateX(-100%); }
          55%, 100% { transform: translateX(220%);  }
        }
        @keyframes drawerWaShine {
          0%        { transform: translateX(-100%); }
          55%, 100% { transform: translateX(220%);  }
        }
      `}</style>
    </>
  );
}
