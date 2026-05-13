import { Box, Typography } from "@mui/material";
import { AnimatedText } from "./AnimatedText";
import { SectionReveal } from "./Motion";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "center",
  light = false,
}: SectionIntroProps) {
  return (
    <SectionReveal
      sx={{
        color: light ? "background.default" : "text.primary",
        mb: { xs: 4, md: 6 },
        maxWidth: 880,
        mx: align === "center" ? "auto" : 0,
        textAlign: align,
      }}
    >
      <Typography className="eyebrow" component="p">
        {eyebrow}
      </Typography>
      <AnimatedText
        component="h2"
        text={title}
        variant="h2"
        sx={{ fontSize: { xs: "2.25rem", md: "4.25rem" } }}
      />
      {copy ? (
        <Box
          component="p"
          sx={{
            color: light ? "rgba(255,248,237,0.78)" : "text.secondary",
            fontSize: { xs: "1rem", md: "1.12rem" },
            lineHeight: 1.85,
            mt: 2.5,
          }}
        >
          {copy}
        </Box>
      ) : null}
    </SectionReveal>
  );
}
