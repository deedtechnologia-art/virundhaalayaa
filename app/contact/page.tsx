import type { Metadata } from "next";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/Motion";
import { businessConfig } from "@/lib";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact | Order Tamil Homemade Food in Coimbatore",
  description:
    "Contact Virundhaalaya for homemade Tamil food orders, WhatsApp ordering, catering inquiries, phone, email, address, and Coimbatore cloud kitchen details.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Order meals or plan your next family feast"
        copy="Send a message for daily meals, biriyani batches, traditional sweets, event menus, or catering availability."
        image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1800&q=85"
      />
      <Box component="section" className="section">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionReveal>
              <ContactForm />
            </SectionReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              {[
                { mark: "P", title: "Phone", value: businessConfig.phone, href: `tel:${businessConfig.phone}` },
                { mark: "W", title: "WhatsApp", value: "Quick orders and catering inquiries", href: `https://wa.me/${businessConfig.whatsapp}` },
                { mark: "E", title: "Email", value: businessConfig.email, href: `mailto:${businessConfig.email}` },
                { mark: "A", title: "Address", value: `${businessConfig.address.street}, ${businessConfig.address.city}, ${businessConfig.address.region}`, href: "#" },
              ].map((item, index) => {
                return (
                  <SectionReveal key={item.title} delay={index * 0.04}>
                    <Stack
                      component={item.href === "#" ? "div" : "a"}
                      href={item.href === "#" ? undefined : item.href}
                      direction="row"
                      spacing={2}
                      sx={{
                        bgcolor: "rgba(255,252,245,0.9)",
                        border: "1px solid rgba(62,39,35,0.1)",
                        borderRadius: 2,
                        boxShadow: "0 20px 60px rgba(62,39,35,0.07)",
                        color: "inherit",
                        p: 3,
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        sx={{
                          alignItems: "center",
                          bgcolor: "rgba(212,160,23,0.16)",
                          borderRadius: "50%",
                          color: "warning.main",
                          display: "flex",
                          flex: "0 0 auto",
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.1rem",
                          fontWeight: 900,
                          height: 42,
                          justifyContent: "center",
                          width: 42,
                        }}
                      >
                        {item.mark}
                      </Box>
                      <Box>
                        <Typography variant="h5" color="primary.main">
                          {item.title}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>{item.value}</Typography>
                      </Box>
                    </Stack>
                  </SectionReveal>
                );
              })}
              <SectionReveal delay={0.2}>
                <Box
                  sx={{
                    alignItems: "center",
                    background:
                      "linear-gradient(135deg, rgba(79,119,45,0.86), rgba(42,23,20,0.76)), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=85)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: 2,
                    color: "background.default",
                    display: "flex",
                    minHeight: 260,
                    p: 3,
                  }}
                >
                  <Box>
                    <Typography className="eyebrow" sx={{ color: "warning.main" }}>
                      Map
                    </Typography>
                    <Typography variant="h4">Coimbatore kitchen location</Typography>
                    <Typography sx={{ color: "rgba(255,248,237,0.78)", lineHeight: 1.75, mt: 1 }}>
                      Embedded map placeholder for the live business address.
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }}>
                      Open Directions
                    </Button>
                  </Box>
                </Box>
              </SectionReveal>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
