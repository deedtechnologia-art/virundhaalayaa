"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { businessConfig, navLinks, siteConfig } from "@/lib";
import { AnimatedButton } from "./AnimatedButton";

export function PremiumNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 1, md: 0.75 }}
      sx={{ alignItems: { xs: "stretch", md: "center" } }}
    >
      {navLinks.map((link) => {
        const active = pathname === link.href;

        return (
          <Button
            key={link.href}
            component={Link}
            href={link.href}
            onClick={() => setOpen(false)}
            sx={{
              color: active ? "primary.main" : "text.primary",
              fontSize: 14,
              justifyContent: { xs: "flex-start", md: "center" },
              minHeight: 42,
              px: { xs: 2, md: 1.5 },
              position: "relative",
              "&:after": {
                bgcolor: "warning.main",
                borderRadius: 999,
                bottom: 5,
                content: '""',
                height: 2,
                left: 16,
                opacity: active ? 1 : 0,
                position: "absolute",
                right: 16,
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "180ms ease",
              },
              "&:hover:after": {
                opacity: 1,
                transform: "scaleX(1)",
              },
            }}
          >
            {link.label}
          </Button>
        );
      })}
    </Stack>
  );

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        backdropFilter: "blur(24px)",
        bgcolor: "rgba(255, 248, 237, 0.86)",
        borderBottom: "1px solid rgba(62,39,35,0.1)",
        color: "text.primary",
      }}
    >
      <Toolbar
        sx={{
          gap: 2,
          justifyContent: "space-between",
          minHeight: { xs: 72, md: 84 },
          px: { xs: 2, sm: 3, lg: 7 },
        }}
      >
        <Stack
          component={Link}
          href="/"
          direction="row"
          spacing={1.25}
          sx={{ alignItems: "center", color: "inherit", textDecoration: "none" }}
        >
          <Box
            component={motion.div}
            whileHover={{ rotate: -4, scale: 1.04 }}
            sx={{
              alignItems: "center",
              background:
                "linear-gradient(145deg, #7A1F1F 0%, #9C2F23 55%, #D4A017 160%)",
              border: "1px solid rgba(212,160,23,0.55)",
              borderRadius: "50%",
              boxShadow: "0 14px 30px rgba(122,31,31,0.24)",
              color: "background.default",
              display: "flex",
              height: 52,
              justifyContent: "center",
              width: 52,
            }}
          >
            <RestaurantMenuRoundedIcon />
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontSize: { xs: "1.18rem", sm: "1.35rem" },
                lineHeight: 1,
              }}
            >
              {siteConfig.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", display: { xs: "none", sm: "block" }, fontSize: 12 }}>
              {siteConfig.tagline}
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ display: { xs: "none", md: "block" } }}>{nav}</Box>

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <AnimatedButton
            component={Link}
            href={`https://wa.me/${businessConfig.whatsapp}`}
            target="_blank"
            variant="contained"
            whatsapp
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          >
            Order Now
          </AnimatedButton>
          <IconButton
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
            sx={{
              bgcolor: "rgba(122,31,31,0.08)",
              color: "primary.main",
              display: { md: "none" },
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Stack>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "background.default",
              p: 3,
              width: "min(86vw, 360px)",
            },
          },
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h4" color="primary.main">
            {siteConfig.name}
          </Typography>
          {nav}
          <AnimatedButton
            component={Link}
            href={`https://wa.me/${businessConfig.whatsapp}`}
            target="_blank"
            variant="contained"
            whatsapp
          >
            WhatsApp Order
          </AnimatedButton>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
