"use client";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { faqs } from "@/lib";
import { SectionIntro } from "./SectionIntro";

export function FAQSection() {
  return (
    <Box component="section" className="section">
      <SectionIntro
        eyebrow="Kitchen Notes"
        title="Questions families ask before ordering"
        copy="Clear answers for daily meals, event menus, customization, and delivery."
      />
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.question}
            disableGutters
            elevation={0}
            sx={{
              bgcolor: "rgba(255,252,245,0.86)",
              border: "1px solid rgba(62,39,35,0.1)",
              borderRadius: "8px !important",
              mb: 1.5,
              overflow: "hidden",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
              <Typography sx={{ color: "primary.main", fontWeight: 900 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
