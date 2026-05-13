"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { businessConfig, navLinks, siteConfig } from "@/lib";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#2A1714",
        color: "background.default",
        overflow: "hidden",
        position: "relative",
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(212,160,23,0.18), transparent 34%), repeating-linear-gradient(90deg, rgba(255,248,237,0.06) 0 1px, transparent 1px 30px)",
          inset: 0,
          position: "absolute",
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          sx={{ justifyContent: "space-between" }}
        >
          <Box sx={{ maxWidth: 460 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  alignItems: "center",
                  bgcolor: "primary.main",
                  border: "1px solid rgba(212,160,23,0.65)",
                  borderRadius: "50%",
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
                <Typography variant="h4">{siteConfig.name}</Typography>
                <Typography sx={{ color: "rgba(255,248,237,0.68)" }}>
                  {siteConfig.tagline}
                </Typography>
              </Box>
            </Stack>
            <Typography sx={{ color: "rgba(255,248,237,0.74)", lineHeight: 1.85 }}>
              Authentic homemade Tamil food made with love, tradition, hygiene,
              and the quiet confidence of family recipes.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 4, sm: 8 }}>
            <Box>
              <Typography sx={{ color: "warning.main", fontWeight: 800, mb: 1.5 }}>
                Explore
              </Typography>
              <Stack spacing={1}>
                {navLinks.map((link) => (
                  <Typography
                    key={link.href}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: "rgba(255,248,237,0.76)",
                      textDecoration: "none",
                      "&:hover": { color: "warning.main" },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography sx={{ color: "warning.main", fontWeight: 800, mb: 1.5 }}>
                Contact
              </Typography>
              <Stack spacing={1}>
                <Typography component="a" href={`tel:${businessConfig.phone}`} sx={footerLinkSx}>
                  {businessConfig.phone}
                </Typography>
                <Typography component="a" href={`mailto:${businessConfig.email}`} sx={footerLinkSx}>
                  {businessConfig.email}
                </Typography>
                <Typography sx={{ color: "rgba(255,248,237,0.76)" }}>
                  {businessConfig.address.street}, {businessConfig.address.city}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <IconButton
                  aria-label="Instagram"
                  href={businessConfig.socialLinks.instagram}
                  sx={socialSx}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  aria-label="Facebook"
                  href={businessConfig.socialLinks.facebook}
                  sx={socialSx}
                >
                  <FacebookRoundedIcon />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const footerLinkSx = {
  color: "rgba(255,248,237,0.76)",
  textDecoration: "none",
  "&:hover": { color: "warning.main" },
};

const socialSx = {
  bgcolor: "rgba(255,248,237,0.08)",
  color: "background.default",
  "&:hover": {
    bgcolor: "warning.main",
    color: "primary.main",
  },
};
