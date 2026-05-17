"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Check,
  Clock3,
  Egg,
  Leaf,
  Phone,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";
import { useMemo, useState } from "react";
import { businessConfig } from "@/lib";
import { SectionReveal } from "./Motion";

type MealPreference = "veg" | "egg" | "nonveg";

type MealTab = {
  id: MealPreference;
  label: string;
  note: string;
  icon: typeof Leaf;
};

type PlanPrice = {
  price: string;
  duration: string;
  saving: string;
};

type SubscriptionPlan = {
  id: string;
  title: string;
  description: string;
  cadence: string;
  icon: typeof CalendarDays;
  featured?: boolean;
  prices: Record<MealPreference, PlanPrice>;
  features: string[];
};

const mealTabs: MealTab[] = [
  {
    id: "veg",
    label: "Vegetarian",
    note: "Seasonal vegetables, dal, kuzhambu, poriyal, and home-style rice.",
    icon: Leaf,
  },
  {
    id: "egg",
    label: "With Egg",
    note: "Comforting veg meals paired with egg curries, omelette, or egg roast.",
    icon: Egg,
  },
  {
    id: "nonveg",
    label: "Non-Veg",
    note: "Tamil chicken, fish, or mutton specials balanced with daily staples.",
    icon: Utensils,
  },
];

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "daily",
    title: "Daily Plan",
    description: "A warm trial for one full day of handmade food.",
    cadence: "Breakfast + lunch + dinner",
    icon: Clock3,
    prices: {
      veg: { price: "₹240", duration: "per day", saving: "Perfect for trying us out" },
      egg: { price: "₹270", duration: "per day", saving: "A homely egg add-on" },
      nonveg: { price: "₹320", duration: "per day", saving: "Chef's non-veg special" },
    },
    features: [
      "Fresh homemade meals",
      "Authentic Tamil recipes",
      "Hygienic kitchen preparation",
      "No preservatives",
    ],
  },
  {
    id: "weekly",
    title: "Weekly Plan",
    description: "A steady family rhythm for busy weekdays.",
    cadence: "6 consecutive days",
    icon: CalendarDays,
    prices: {
      veg: { price: "₹1,419", duration: "6 days", saving: "Save ₹21 on your week" },
      egg: { price: "₹1,599", duration: "6 days", saving: "Save ₹21 on your week" },
      nonveg: { price: "₹1,899", duration: "6 days", saving: "Save ₹21 on your week" },
    },
    features: [
      "All daily benefits",
      "Flexible delivery slots",
      "Consistent meal schedule",
      "Family portion guidance",
    ],
  },
  {
    id: "monthly",
    title: "Monthly Plan",
    description: "The most seamless way to keep your table cared for.",
    cadence: "26 meal days",
    featured: true,
    icon: Sparkles,
    prices: {
      veg: { price: "₹5,999", duration: "26 days", saving: "Best value - save ₹241" },
      egg: { price: "₹6,799", duration: "26 days", saving: "Best value - save ₹221" },
      nonveg: { price: "₹7,999", duration: "26 days", saving: "Best value - save ₹321" },
    },
    features: [
      "All weekly benefits",
      "Priority customer support",
      "Menu customization",
      "Flexible pause option",
      "Corporate lunch planning",
    ],
  },
];

const preferenceFeature: Record<MealPreference, string> = {
  veg: "Pure vegetarian comfort menu",
  egg: "Egg menu rotation included",
  nonveg: "Non-veg specials by schedule",
};

function buildWhatsAppHref(plan: SubscriptionPlan, preference: MealTab) {
  const selectedPrice = plan.prices[preference.id];
  const message = `Hi Virundhaalaya, I would like to subscribe to the ${plan.title} (${preference.label}) at ${selectedPrice.price}/${selectedPrice.duration}.`;

  return `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

function PlanCard({
  index,
  plan,
  selectedMeal,
}: {
  index: number;
  plan: SubscriptionPlan;
  selectedMeal: MealTab;
}) {
  const Icon = plan.icon;
  const price = plan.prices[selectedMeal.id];
  const ctaHref = buildWhatsAppHref(plan, selectedMeal);

  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Box
        component={motion.article}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: plan.featured ? -10 : -7 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        sx={{
          background: plan.featured
            ? "linear-gradient(155deg, rgba(122,31,31,0.98) 0%, rgba(90,28,21,0.98) 58%, rgba(68,42,28,0.96) 100%)"
            : "linear-gradient(145deg, rgba(255,252,245,0.94) 0%, rgba(250,244,232,0.92) 100%)",
          border: plan.featured
            ? "1px solid rgba(212,160,23,0.56)"
            : "1px solid rgba(122,53,36,0.1)",
          borderRadius: "24px",
          boxShadow: plan.featured
            ? "0 32px 90px rgba(122,31,31,0.2), 0 0 0 6px rgba(212,160,23,0.08)"
            : "0 22px 64px rgba(62,39,35,0.08)",
          color: plan.featured ? "background.default" : "text.primary",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: { xs: "auto", md: 650 },
          overflow: "hidden",
          p: { xs: 2.4, sm: 3, lg: 3.4 },
          position: "relative",
          transition: "box-shadow 260ms ease, border-color 260ms ease",
          "&:hover": {
            boxShadow: plan.featured
              ? "0 38px 100px rgba(122,31,31,0.28), 0 0 0 7px rgba(212,160,23,0.12)"
              : "0 30px 82px rgba(122,31,31,0.13)",
          },
          "&::before": {
            background: plan.featured
              ? "radial-gradient(circle at 20% 0%, rgba(212,160,23,0.24), transparent 34%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.54), rgba(255,255,255,0))",
            content: '""',
            inset: 0,
            pointerEvents: "none",
            position: "absolute",
          },
        }}
      >
        {plan.featured ? (
          <Box
            sx={{
              alignItems: "center",
              bgcolor: "rgba(255,248,237,0.92)",
              border: "1px solid rgba(212,160,23,0.42)",
              borderRadius: 999,
              boxShadow: "0 14px 34px rgba(42,23,20,0.16)",
              color: "primary.main",
              display: "inline-flex",
              fontSize: 13,
              fontWeight: 900,
              gap: 0.8,
              px: 1.6,
              py: 0.65,
              position: "absolute",
              right: { xs: 18, md: 22 },
              top: { xs: 18, md: 22 },
              zIndex: 2,
            }}
          >
            <Star size={15} strokeWidth={2.3} />
            Best Value
          </Box>
        ) : null}

        <Stack spacing={2.2} sx={{ flex: 1, position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              alignItems: "center",
              bgcolor: plan.featured ? "rgba(255,248,237,0.1)" : "rgba(212,160,23,0.14)",
              border: plan.featured
                ? "1px solid rgba(255,248,237,0.16)"
                : "1px solid rgba(212,160,23,0.2)",
              borderRadius: "50%",
              color: plan.featured ? "warning.main" : "primary.main",
              display: "flex",
              height: 50,
              justifyContent: "center",
              width: 50,
            }}
          >
            <Icon size={23} strokeWidth={1.9} />
          </Box>

          <Box>
            <Typography
              component="h3"
              variant="h4"
              sx={{
                color: plan.featured ? "background.default" : "primary.main",
                fontSize: { xs: "2rem", lg: "2.28rem" },
                lineHeight: 1.08,
              }}
            >
              {plan.title}
            </Typography>
            <Typography
              sx={{
                color: plan.featured ? "rgba(255,248,237,0.72)" : "text.secondary",
                fontSize: "0.95rem",
                fontWeight: 700,
                lineHeight: 1.65,
                mt: 1.2,
              }}
            >
              {plan.description}
            </Typography>
          </Box>

          <Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
              <Typography
                sx={{
                  color: plan.featured ? "background.default" : "text.primary",
                  fontFamily: "var(--font-heading)",
                  fontSize: { xs: "2.65rem", lg: "3.2rem" },
                  fontWeight: 800,
                  letterSpacing: 0,
                  lineHeight: 0.96,
                }}
              >
                {price.price}
              </Typography>
              <Typography
                sx={{
                  color: plan.featured ? "rgba(255,248,237,0.68)" : "text.secondary",
                  fontSize: "0.98rem",
                  fontWeight: 800,
                }}
              >
                / {price.duration}
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: plan.featured ? "rgba(255,248,237,0.82)" : "primary.main",
                fontSize: "0.95rem",
                fontWeight: 800,
                mt: 1.5,
              }}
            >
              {price.saving}
            </Typography>
            <Typography
              sx={{
                color: plan.featured ? "rgba(255,248,237,0.64)" : "text.secondary",
                fontSize: "0.88rem",
                fontWeight: 700,
                mt: 0.6,
              }}
            >
              {plan.cadence}
            </Typography>
          </Box>

          <Box
            component="ul"
            sx={{
              display: "grid",
              gap: 1.35,
              listStyle: "none",
              m: 0,
              p: 0,
              pt: 0.5,
            }}
          >
            {[preferenceFeature[selectedMeal.id], ...plan.features].map((feature) => (
              <Box
                key={feature}
                component="li"
                sx={{
                  alignItems: "flex-start",
                  color: plan.featured ? "rgba(255,248,237,0.82)" : "text.secondary",
                  display: "flex",
                  fontSize: "0.96rem",
                  fontWeight: 650,
                  gap: 1.2,
                  lineHeight: 1.55,
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    alignItems: "center",
                    bgcolor: plan.featured ? "rgba(212,160,23,0.16)" : "rgba(79,119,45,0.1)",
                    borderRadius: "50%",
                    color: plan.featured ? "warning.main" : "secondary.main",
                    display: "flex",
                    flexShrink: 0,
                    height: 22,
                    justifyContent: "center",
                    mt: "1px",
                    width: 22,
                  }}
                >
                  <Check size={14} strokeWidth={2.6} />
                </Box>
                {feature}
              </Box>
            ))}
          </Box>
        </Stack>

        <Button
          aria-label={`Subscribe to ${plan.title} ${selectedMeal.label}`}
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          startIcon={<Phone size={18} strokeWidth={2.4} />}
          sx={{
            bgcolor: plan.featured ? "rgba(255,248,237,0.94)" : "primary.main",
            boxShadow: plan.featured
              ? "0 16px 42px rgba(0,0,0,0.18)"
              : "0 18px 42px rgba(122,31,31,0.2)",
            color: plan.featured ? "primary.main" : "background.default",
            fontSize: "0.96rem",
            mt: { xs: 3.5, md: 4 },
            position: "relative",
            width: "100%",
            zIndex: 1,
            "&:hover": {
              bgcolor: plan.featured ? "warning.main" : "#68201a",
              boxShadow: plan.featured
                ? "0 20px 52px rgba(0,0,0,0.22)"
                : "0 22px 52px rgba(122,31,31,0.27)",
              color: plan.featured ? "primary.main" : "background.default",
              transform: "translateY(-2px)",
            },
          }}
        >
          Subscribe Now
        </Button>
      </Box>
    </Grid>
  );
}

export function SubscriptionPlans() {
  const [selectedMealId, setSelectedMealId] = useState<MealPreference>("veg");

  const selectedMeal = useMemo(
    () => mealTabs.find((tab) => tab.id === selectedMealId) ?? mealTabs[0],
    [selectedMealId],
  );

  const SelectedIcon = selectedMeal.icon;

  return (
    <Box
      component="section"
      className="section"
      sx={{
        background:
          "radial-gradient(circle at 12% 8%, rgba(212,160,23,0.16), transparent 30%), linear-gradient(180deg, rgba(255,248,237,0.98), rgba(245,230,204,0.44))",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <SectionReveal
          sx={{
            mb: { xs: 3.5, md: 5.5 },
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography className="eyebrow" component="p">
            Meal Subscriptions
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: "text.primary",
              fontSize: { xs: "2.3rem", md: "4.35rem" },
              mx: "auto",
              maxWidth: 900,
            }}
          >
            Homemade subscriptions crafted for your everyday table
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.12rem" },
              lineHeight: 1.85,
              mt: 2.5,
              mx: "auto",
              maxWidth: 750,
            }}
          >
            Daily comfort meals, weekly family rhythm, monthly value, and office lunch care prepared with the warmth of a Tamil home kitchen.
          </Typography>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <Box
            role="tablist"
            aria-label="Choose meal preference"
            sx={{
              backdropFilter: "blur(18px) saturate(1.15)",
              background:
                "linear-gradient(135deg, rgba(255,252,245,0.5), rgba(245,230,204,0.46) 48%, rgba(255,248,237,0.38))",
              border: "1px solid rgba(255,252,245,0.5)",
              borderRadius: { xs: "38px", sm: 999 },
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.58), inset 0 -16px 34px rgba(122,53,36,0.06), 0 18px 54px rgba(62,39,35,0.12)",
              boxSizing: "border-box",
              display: "grid",
              gap: { xs: 0.75, sm: 0.8 },
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              mb: { xs: 2.2, md: 3 },
              mx: "auto",
              overflow: "hidden",
              p: { xs: 0.85, sm: 0.65 },
              position: "relative",
              width: { xs: "min(100%, 430px)", sm: "min(760px, 100%)" },
              "&::before": {
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.46), rgba(255,255,255,0.08) 42%, transparent 72%)",
                content: '""',
                inset: 0,
                pointerEvents: "none",
                position: "absolute",
              },
            }}
          >
            {mealTabs.map((tab) => {
              const Icon = tab.icon;
              const active = tab.id === selectedMealId;

              return (
                <Button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedMealId(tab.id)}
                  startIcon={<Icon size={18} strokeWidth={2.2} />}
                  sx={{
                    backdropFilter: active ? "blur(10px)" : "none",
                    bgcolor: active ? "rgba(255,252,245,0.88)" : "transparent",
                    border: active ? "1px solid rgba(212,160,23,0.36)" : "1px solid transparent",
                    borderRadius: 999,
                    boxShadow: active
                      ? "inset 0 1px 0 rgba(255,255,255,0.9), 0 12px 30px rgba(62,39,35,0.12)"
                      : "none",
                    boxSizing: "border-box",
                    color: active ? "primary.main" : "rgba(62,39,35,0.66)",
                    justifySelf: "stretch",
                    minHeight: { xs: 46, sm: 54 },
                    minWidth: 0,
                    position: "relative",
                    px: { xs: 2, sm: 2.4 },
                    transition: "all 220ms ease",
                    width: "100%",
                    zIndex: 1,
                    "& .MuiButton-startIcon": {
                      flexShrink: 0,
                      mr: 1,
                    },
                    "&:hover": {
                      bgcolor: active ? "rgba(255,252,245,0.94)" : "rgba(255,252,245,0.34)",
                      color: "primary.main",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  {tab.label}
                </Button>
              );
            })}
          </Box>

          <Stack
            direction="row"
            spacing={1.2}
            sx={{
              alignItems: "center",
              color: "text.secondary",
              justifyContent: "center",
              mb: { xs: 4, md: 5 },
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                bgcolor: "rgba(212,160,23,0.13)",
                borderRadius: "50%",
                color: "primary.main",
                display: "flex",
                flexShrink: 0,
                height: 34,
                justifyContent: "center",
                width: 34,
              }}
            >
              <SelectedIcon size={17} strokeWidth={2.2} />
            </Box>
            <Typography sx={{ fontSize: { xs: "0.92rem", md: "1rem" }, fontWeight: 700, lineHeight: 1.55 }}>
              {selectedMeal.note}
            </Typography>
          </Stack>
        </SectionReveal>

        <Grid container spacing={{ xs: 2.4, md: 3 }}>
          {subscriptionPlans.map((plan, index) => (
            <PlanCard key={plan.id} index={index} plan={plan} selectedMeal={selectedMeal} />
          ))}
        </Grid>

        <SectionReveal delay={0.14}>
          <Box
            sx={{
              alignItems: { xs: "flex-start", md: "center" },
              background:
                "linear-gradient(135deg, rgba(255,252,245,0.86), rgba(255,248,237,0.58))",
              border: "1px solid rgba(122,53,36,0.1)",
              borderRadius: "24px",
              boxShadow: "0 18px 58px rgba(62,39,35,0.08)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 4 },
              justifyContent: "space-between",
              mt: { xs: 2.6, md: 3.5 },
              p: { xs: 2.5, md: 3 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "primary.main",
                  fontFamily: "var(--font-heading)",
                  fontSize: { xs: "1.45rem", md: "1.8rem" },
                  fontWeight: 800,
                  lineHeight: 1.15,
                }}
              >
                Need recurring lunch for your team?
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.75, mt: 0.8 }}>
                Corporate meal subscriptions can be arranged with fixed delivery windows, custom headcount, and rotating Tamil menus.
              </Typography>
            </Box>
            <Button
              href={`https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent(
                "Hi Virundhaalaya, I would like to discuss a corporate lunch subscription.",
              )}`}
              target="_blank"
              rel="noreferrer"
              startIcon={<Phone size={18} strokeWidth={2.4} />}
              variant="outlined"
              sx={{
                borderColor: "rgba(122,31,31,0.28)",
                color: "primary.main",
                flexShrink: 0,
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  bgcolor: "primary.main",
                  borderColor: "primary.main",
                  color: "background.default",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Plan Office Lunch
            </Button>
          </Box>
        </SectionReveal>
      </Container>
    </Box>
  );
}
