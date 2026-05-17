"use client";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import RiceBowlRoundedIcon from "@mui/icons-material/RiceBowlRounded";
import SetMealRoundedIcon from "@mui/icons-material/SetMealRounded";
import SoupKitchenRoundedIcon from "@mui/icons-material/SoupKitchenRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const menuGroups = [
  {
    title: "Breakfast / Tiffin",
    subtitle: "Soft morning classics, fresh chutneys, and tiffin comfort.",
    icon: LocalDiningRoundedIcon,
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=900&q=85",
    items: ["Idli", "Pongal", "Chapati", "Poori", "Dosa", "Kuzhi Paniyaram", "Adai Avial", "Kambu Koozh"],
  },
  {
    title: "Lunch & Dinner",
    subtitle: "Everyday meals, biriyani batches, and family dinner favourites.",
    icon: RestaurantRoundedIcon,
    image: "/images/hero/virundhaalaya-hero.webp",
    items: ["Tamil Nadu Meals", "Chicken Biriyani", "Mutton Biriyani", "Parotta Kurma", "Kothu Parotta", "Idiyappam Stew", "Appam with Kurma", "Fish Curry Meals"],
  },
  {
    title: "Variety Rice",
    subtitle: "Quick, aromatic rice varieties prepared with home-style tempering.",
    icon: RiceBowlRoundedIcon,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=85",
    items: ["Lemon Rice", "Curd Rice", "Sambar Sadam", "Kara Kuzhambu Rice", "Tomato Rice", "Coconut Rice", "Tamarind Rice", "Veg Pulao"],
  },
  {
    title: "Native Special Gravies",
    subtitle: "Deep Tamil flavours with roasted masala, pepper, and curry leaves.",
    icon: SoupKitchenRoundedIcon,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    items: ["Chettinad Chicken", "Pepper Mutton Chukka", "Kari Kuzhambu", "Fish Curry", "Nattu Kozhi Gravy", "Mutton Salna", "Veg Kurma", "Egg Curry"],
  },
  {
    title: "Sweets",
    subtitle: "Festival sweetness, made in small batches with patient care.",
    icon: StarRoundedIcon,
    image: "https://media.istockphoto.com/id/1320816819/photo/close-up-of-creamy-rice-kheer-garnished-with-saffron-and-dry-fruits-indian-delicious-dessert.jpg?s=2048x2048&w=is&k=20&c=YHOAWCn2jGOpIhlcdRyfU-0Y_sdHHBcxnl75LZQ2obY=",
    items: ["Sweet Pongal", "Kesari", "Payasam", "Laddu", "Mysore Pak", "Badusha", "Jangiri", "Halwa"],
  },
  {
    title: "Long-Time Storable Items",
    subtitle: "Traditional snacks and pantry favourites for gifting and home.",
    icon: SetMealRoundedIcon,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
    items: ["Murukku", "Mixture", "Thattai", "Seedai", "Ribbon Pakoda", "Masala Podi", "Pickle", "Appalam"],
  },
];

export function PremiumMenuExperience() {
  const [open, setOpen] = useState(0);

  return (
    <Box
      component="section"
      className="section"
      sx={{
        background:
          "radial-gradient(circle at 12% 8%, rgba(212,160,23,0.16), transparent 28%), linear-gradient(180deg, rgba(255,248,237,0.98), rgba(245,230,204,0.5))",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: "center" }}>
          <Typography className="eyebrow">From Amma&apos;s Kitchen</Typography>
          <Typography
            variant="h2"
            sx={{
              color: "text.primary",
              fontSize: { xs: "2.35rem", md: "4.5rem" },
              mx: "auto",
              maxWidth: 880,
            }}
          >
            Crafted Tamil meals, browsed beautifully
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mt: 2, mx: "auto", maxWidth: 720 }}>
            Explore tiffin, meals, native gravies, sweets, and storable favourites in a warm premium menu experience.
          </Typography>
          <Box sx={{ background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.95), transparent)", height: 2, mt: 3, mx: "auto", width: 130 }} />
        </Box>

        <Stack spacing={2}>
          {menuGroups.map((group, index) => {
            const Icon = group.icon;
            const active = open === index;

            return (
              <Box
                key={group.title}
                component={motion.article}
                whileHover={{ y: -3 }}
                sx={{
                  backdropFilter: "blur(18px)",
                  background: active
                    ? "linear-gradient(145deg, rgba(255,252,245,0.95), rgba(255,248,237,0.78))"
                    : "linear-gradient(145deg, rgba(255,252,245,0.78), rgba(245,230,204,0.54))",
                  border: active ? "1px solid rgba(212,160,23,0.34)" : "1px solid rgba(122,53,36,0.1)",
                  borderRadius: { xs: "22px", md: "28px" },
                  boxShadow: active ? "0 28px 80px rgba(122,31,31,0.14)" : "0 18px 50px rgba(62,39,35,0.07)",
                  overflow: "hidden",
                }}
              >
                <Button
                  fullWidth
                  onClick={() => setOpen(active ? -1 : index)}
                  sx={{
                    alignItems: "center",
                    borderRadius: 0,
                    color: "inherit",
                    display: "grid",
                    gap: { xs: 1.6, md: 2.4 },
                    gridTemplateColumns: { xs: "72px 1fr auto", md: "110px 1fr auto" },
                    justifyContent: "initial",
                    p: { xs: 1.3, md: 2 },
                    textAlign: "left",
                    "&:hover": { bgcolor: "rgba(255,248,237,0.28)" },
                  }}
                >
                  <Box sx={{ borderRadius: "18px", height: { xs: 66, md: 92 }, overflow: "hidden", position: "relative" }}>
                    <Box component="img" alt="" src={group.image} sx={{ height: "100%", objectFit: "cover", width: "100%" }} />
                    <Box sx={{ background: "linear-gradient(180deg, transparent, rgba(42,23,20,0.4))", inset: 0, position: "absolute" }} />
                  </Box>
                  <Stack spacing={0.6} sx={{ minWidth: 0 }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                      <Box sx={{ alignItems: "center", bgcolor: "rgba(212,160,23,0.14)", borderRadius: "50%", color: "primary.main", display: "flex", height: 34, justifyContent: "center", width: 34 }}>
                        <Icon sx={{ fontSize: 19 }} />
                      </Box>
                      <Typography variant="h4" sx={{ color: "primary.main", fontSize: { xs: "1.25rem", md: "2rem" }, lineHeight: 1.1 }}>
                        {group.title}
                      </Typography>
                    </Stack>
                    <Typography sx={{ color: "text.secondary", display: { xs: "none", sm: "block" }, fontSize: { sm: "0.9rem", md: "1rem" }, lineHeight: 1.6 }}>
                      {group.subtitle}
                    </Typography>
                  </Stack>
                  <Box component={motion.span} animate={{ rotate: active ? 180 : 0 }} sx={{ color: "primary.main", display: "flex" }}>
                    <ExpandMoreRoundedIcon />
                  </Box>
                </Button>

                <AnimatePresence initial={false}>
                  {active ? (
                    <Box
                      component={motion.div}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                      sx={{ overflow: "hidden" }}
                    >
                      <Box sx={{ borderTop: "1px solid rgba(122,53,36,0.1)", p: { xs: 1.6, md: 2.4 }, pt: { xs: 1.8, md: 2.6 } }}>
                        <Grid container spacing={{ xs: 1, sm: 1.3 }}>
                          {group.items.map((item, itemIndex) => (
                            <Grid key={item} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                              <Chip
                                component={motion.div}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: itemIndex * 0.025 }}
                                icon={<RestaurantRoundedIcon />}
                                label={item}
                                sx={{
                                  bgcolor: "rgba(255,252,245,0.84)",
                                  border: "1px solid rgba(122,53,36,0.1)",
                                  boxShadow: "0 10px 28px rgba(62,39,35,0.06)",
                                  color: "text.primary",
                                  fontWeight: 750,
                                  height: { xs: 40, md: 44 },
                                  justifyContent: "flex-start",
                                  maxWidth: "100%",
                                  width: "100%",
                                  "& .MuiChip-icon": { color: "warning.main" },
                                  "& .MuiChip-label": { overflow: "hidden", textOverflow: "ellipsis" },
                                  "&:hover": { bgcolor: "rgba(212,160,23,0.13)", transform: "translateY(-2px)" },
                                }}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  ) : null}
                </AnimatePresence>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
