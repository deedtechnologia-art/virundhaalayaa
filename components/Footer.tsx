"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { businessConfig, navLinks, siteConfig } from "@/lib";

const directionsUrl = "https://maps.app.goo.gl/67Vxn9Fe3723NCFX6?g_st=awb";

export function Footer() {
  return (
    <Box component="footer" sx={footerSx}>
      <Box aria-hidden="true" sx={textureSx} />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* <Box component={motion.div} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} sx={topCtaSx}>
          <Box>
            <Typography sx={ctaEyebrowSx}>Virundhaalaya Kitchen</Typography>
            <Typography sx={ctaTitleSx}>Plan meals, catering, or a family virundhu with warmth.</Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
            <Button component={Link} href="/menu" variant="contained" sx={goldButtonSx}>
              View Menu
            </Button>
            <Button component={Link} href="/contact" variant="outlined" sx={outlineButtonSx}>
              Start Inquiry
            </Button>
          </Stack>
        </Box> */}

        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ py: { xs: 5, md: 6 } }}>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2.2} sx={{ maxWidth: 430 }}>
              <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
                <Box sx={logoSx}>
                  <RestaurantMenuRoundedIcon />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: "#FFF8ED", fontSize: { xs: "1.8rem", md: "2.15rem" } }}>
                    {siteConfig.name}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,248,237,0.68)", fontWeight: 600 }}>
                    {siteConfig.tagline}
                  </Typography>
                </Box>
              </Stack>
              <Box sx={goldRuleSx} />
              <Typography sx={bodyTextSx}>
                Handcrafted Village meals prepared with tradition, hygiene, and
                the comfort of home from our Coimbatore kitchen.
              </Typography>
              <Stack direction="row" spacing={1}>
                <SocialButton label="Instagram" href={businessConfig.socialLinks.instagram} icon={<InstagramIcon />} />
                <SocialButton label="WhatsApp" href={`https://wa.me/${businessConfig.whatsapp}`} icon={<WhatsAppIcon />} />
                <SocialButton label="Facebook" href={businessConfig.socialLinks.facebook} icon={<FacebookRoundedIcon />} />
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, lg: 2 }}>
            <FooterColumn title="Explore">
              {navLinks.map((link) => (
                <Typography key={link.href} component={Link} href={link.href} sx={footerLinkSx}>
                  {link.label}
                </Typography>
              ))}
            </FooterColumn>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <FooterColumn title="Contact">
              <ContactLink icon={<PhoneRoundedIcon />} href={`tel:${businessConfig.phone}`} label={businessConfig.phone} />
              <ContactLink icon={<EmailRoundedIcon />} href={`mailto:${businessConfig.email}`} label={businessConfig.email} />
              <ContactLink icon={<LocationOnRoundedIcon />} href={directionsUrl} label="Peelamedu, Coimbatore" external />
            </FooterColumn>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Box sx={locationSx}>
              <Typography sx={columnTitleSx}>Location</Typography>
              <Typography variant="h5" sx={{ color: "#FFF8ED", fontSize: "1.35rem" }}>
                Peelamedu Kitchen
              </Typography>
              <Typography sx={{ ...bodyTextSx, mt: 1 }}>
                Get directions for pickup, catering discussion, or kitchen visit.
              </Typography>
              <Button endIcon={<ArrowForwardRoundedIcon />} href={directionsUrl} rel="noreferrer" target="_blank" variant="contained" sx={{ ...goldButtonSx, mt: 2, width: "100%" }}>
                Get Directions
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} sx={bottomBarSx}>
          <Typography sx={{ color: "rgba(255,248,237,0.56)", fontSize: "0.84rem" }}>
            © {new Date().getFullYear()} {siteConfig.name}. Crafted with warmth in Coimbatore.
          </Typography>
          <Typography sx={{ color: "rgba(255,248,237,0.5)", fontSize: "0.84rem" }}>
            Homemade Tamil food • Catering • Daily meals
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

function FooterColumn({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Stack spacing={1.25}>
      <Typography sx={columnTitleSx}>{title}</Typography>
      {children}
    </Stack>
  );
}

function ContactLink({ external = false, href, icon, label }: { external?: boolean; href: string; icon: ReactNode; label: string }) {
  return (
    <Stack component="a" href={href} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined} direction="row" spacing={1.1} sx={contactLinkSx}>
      <Box className="footer-contact-icon" sx={contactIconSx}>{icon}</Box>
      <Typography sx={{ color: "rgba(255,248,237,0.74)", fontSize: "0.92rem", lineHeight: 1.45 }}>{label}</Typography>
    </Stack>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <IconButton aria-label={label} href={href} rel="noreferrer" target="_blank" sx={socialSx}>
      {icon}
    </IconButton>
  );
}

const footerSx = {
  background: "linear-gradient(180deg, #351914 0%, #24110f 46%, #160b0a 100%)",
  borderTop: "1px solid rgba(122,31,31,0.22)",
  color: "background.default",
  overflow: "hidden",
  position: "relative",
};

const textureSx = {
  background:
    "radial-gradient(circle at 12% 10%, rgba(212,160,23,0.14), transparent 30%), radial-gradient(circle at 86% 22%, rgba(122,31,31,0.28), transparent 28%)",
  inset: 0,
  position: "absolute",
};

const topCtaSx = {
  alignItems: { xs: "stretch", md: "center" },
  background: "linear-gradient(135deg, rgba(255,248,237,0.1), rgba(255,248,237,0.045))",
  border: "1px solid rgba(255,248,237,0.12)",
  borderRadius: { xs: "22px", md: "28px" },
  boxShadow: "0 24px 70px rgba(0,0,0,0.18)",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: 2,
  justifyContent: "space-between",
  mt: { xs: 4, md: 5 },
  p: { xs: 2.2, md: 3 },
};

const ctaEyebrowSx = {
  color: "warning.main",
  fontSize: "0.76rem",
  fontWeight: 900,
  textTransform: "uppercase",
};

const ctaTitleSx = {
  color: "#FFF8ED",
  fontFamily: "var(--font-heading)",
  fontSize: { xs: "1.45rem", md: "2rem" },
  fontWeight: 800,
  lineHeight: 1.15,
  mt: 0.5,
};

const logoSx = {
  alignItems: "center",
  background: "linear-gradient(135deg, #9b2d22, #b46c18)",
  border: "1px solid rgba(212,160,23,0.72)",
  borderRadius: "50%",
  color: "background.default",
  display: "flex",
  flex: "0 0 auto",
  height: 58,
  justifyContent: "center",
  width: 58,
};

const goldRuleSx = {
  background: "linear-gradient(90deg, rgba(212,160,23,0.9), transparent)",
  height: 2,
  width: 118,
};

const bodyTextSx = {
  color: "rgba(255,248,237,0.7)",
  fontSize: "0.95rem",
  lineHeight: 1.75,
};

const columnTitleSx = {
  color: "warning.main",
  fontSize: "0.78rem",
  fontWeight: 900,
  mb: 0.8,
  textTransform: "uppercase",
};

const footerLinkSx = {
  color: "rgba(255,248,237,0.72)",
  fontSize: "0.95rem",
  textDecoration: "none",
  width: "fit-content",
  "&:hover": { color: "warning.main", transform: "translateX(3px)" },
  transition: "color 180ms ease, transform 180ms ease",
};

const contactLinkSx = {
  alignItems: "center",
  color: "inherit",
  textDecoration: "none",
  width: "fit-content",
  "&:hover .footer-contact-icon": { bgcolor: "warning.main", color: "primary.main" },
};

const contactIconSx = {
  alignItems: "center",
  bgcolor: "rgba(255,248,237,0.08)",
  border: "1px solid rgba(255,248,237,0.1)",
  borderRadius: "50%",
  color: "warning.main",
  display: "flex",
  flex: "0 0 auto",
  height: 36,
  justifyContent: "center",
  width: 36,
  "& svg": { fontSize: 18 },
};

const locationSx = {
  background: "linear-gradient(145deg, rgba(122,31,31,0.46), rgba(255,248,237,0.06))",
  border: "1px solid rgba(212,160,23,0.14)",
  borderRadius: "22px",
  p: 2.2,
};

const goldButtonSx = {
  bgcolor: "warning.main",
  color: "primary.main",
  fontWeight: 900,
  minHeight: 42,
  px: 2.4,
  "&:hover": { bgcolor: "#e5b23a", transform: "translateY(-2px)" },
};

const outlineButtonSx = {
  borderColor: "rgba(255,248,237,0.25)",
  color: "background.default",
  minHeight: 42,
  px: 2.4,
  "&:hover": {
    bgcolor: "rgba(255,248,237,0.08)",
    borderColor: "warning.main",
    color: "warning.main",
    transform: "translateY(-2px)",
  },
};

const socialSx = {
  bgcolor: "rgba(255,248,237,0.08)",
  border: "1px solid rgba(255,248,237,0.1)",
  color: "background.default",
  height: 40,
  width: 40,
  "&:hover": {
    bgcolor: "warning.main",
    color: "primary.main",
    transform: "translateY(-2px)",
  },
};

const bottomBarSx = {
  alignItems: { xs: "flex-start", md: "center" },
  borderTop: "1px solid rgba(255,248,237,0.1)",
  justifyContent: "space-between",
  py: 2.5,
};
