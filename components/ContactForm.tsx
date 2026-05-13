"use client";

import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { businessConfig } from "@/lib";
import { AnimatedButton } from "./AnimatedButton";

const initialForm = {
  email: "",
  message: "",
  name: "",
  phone: "",
  type: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Vanakkam Virundhaalaya,",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Order/Event: ${form.type || "-"}`,
      `Message: ${form.message || "-"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        bgcolor: "rgba(255,252,245,0.92)",
        border: "1px solid rgba(62,39,35,0.1)",
        borderRadius: 2,
        boxShadow: "0 24px 70px rgba(62,39,35,0.08)",
        p: { xs: 3, md: 5 },
      }}
    >
      <Typography
        variant="h3"
        color="primary.main"
        sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}
      >
        Tell us what you need
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Name"
            onChange={(event) => updateField("name", event.target.value)}
            required
            value={form.name}
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Phone"
            onChange={(event) => updateField("phone", event.target.value)}
            required
            value={form.phone}
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Email"
            onChange={(event) => updateField("email", event.target.value)}
            type="email"
            value={form.email}
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Event or order type"
            onChange={(event) => updateField("type", event.target.value)}
            value={form.type}
            variant="outlined"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Message"
            minRows={5}
            multiline
            onChange={(event) => updateField("message", event.target.value)}
            required
            value={form.message}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3 }}>
        <AnimatedButton type="submit" variant="contained" glow>
          Send Inquiry
        </AnimatedButton>
        <AnimatedButton
          href={`https://wa.me/${businessConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          variant="outlined"
          whatsapp
        >
          WhatsApp Us
        </AnimatedButton>
      </Stack>
    </Box>
  );
}
