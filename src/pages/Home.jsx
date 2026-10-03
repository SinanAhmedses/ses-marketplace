import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Laptop,
  Palette,
  Shirt,
  Utensils,
  BookOpen,
  Boxes,
} from "lucide-react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics & Tech",
    description: "Useful tech products and student-built ideas.",
    icon: Laptop,
    count: "Coming soon",
  },
  {
    name: "Art & Crafts",
    description: "Creative handmade products made by students.",
    icon: Palette,
    count: "Coming soon",
  },
  {
    name: "Fashion & Accessories",
    description: "Personalized accessories and creative styles.",
    icon: Shirt,
    count: "Coming soon",
  },
  {
    name: "Food & Homemade",
    description: "Homemade treats and student-created food products.",
    icon: Utensils,
    count: "Coming soon",
  },
  {
    name: "Books & Stationery",
    description: "Study essentials, notebooks, planners and more.",
    icon: BookOpen,
    count: "Coming soon",
  },
  {
    name: "Other",
    description: "Unique products that don't fit one category.",
    icon: Boxes,
    count: "Coming soon",
  },
];

function Home() {
  return (
    <Box>
      {/* =========================
          HERO SECTION
      ========================== */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#FAFBFC",
          minHeight: {
            xs: "auto",
            md: "calc(100vh - 76px)",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative background */}

        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(21,154,156,0.10) 0%, rgba(21,154,156,0) 70%)",
            top: -180,
            right: -100,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(15,39,71,0.06) 0%, rgba(15,39,71,0) 70%)",
            bottom: -180,
            left: -120,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl">
          <Box
            sx={{
              py: { xs: 3, md: 3 },
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 0.9fr",
              },
              alignItems: "center",
              gap: { xs: 6, md: 8 },
            }}
          >
            {/* LEFT SIDE */}

            <Box>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Chip
                  icon={<Sparkles size={15} />}
                  label="Student-Powered Marketplace"
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(21, 154, 156, 0.09)",
                    color: "#159A9C",
                    border: "1px solid rgba(21, 154, 156, 0.18)",
                    fontWeight: 600,
                    fontSize: "0.78rem",
                    "& .MuiChip-icon": {
                      color: "#159A9C",
                    },
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <Typography
                  component="h1"
                  sx={{
                    maxWidth: 680,
                    color: "#0F2747",
                    fontSize: {
                      xs: "2.5rem",
                      sm: "3.3rem",
                      md: "4.2rem",
                    },
                    lineHeight: 1.08,
                    fontWeight: 700,
                    letterSpacing: "-0.035em",
                  }}
                >
                  Student Ideas.
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: "#159A9C",
                    }}
                  >
                    Real Products.
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    mt: 3,
                    maxWidth: 570,
                    fontSize: {
                      xs: "0.98rem",
                      md: "1.08rem",
                    },
                    lineHeight: 1.8,
                    color: "#64748B",
                  }}
                >
                  Discover products created by SES students, support young
                  creators, and find something made with creativity and
                  purpose.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    mt: 4,
                  }}
                >
                  <Button
                    component={Link}
                    to="/shop"
                    variant="contained"
                    endIcon={<ArrowRight size={18} />}
                    sx={{
                      minHeight: 48,
                      px: 2.8,
                      borderRadius: "11px",
                      backgroundColor: "#0F2747",
                      textTransform: "none",
                      fontWeight: 600,
                      boxShadow: "none",

                      "&:hover": {
                        backgroundColor: "#183B63",
                        boxShadow:
                          "0 8px 20px rgba(15, 39, 71, 0.15)",
                      },
                    }}
                  >
                    Explore Products
                  </Button>

                  <Button
                    component={Link}
                    to="/sell"
                    variant="outlined"
                    sx={{
                      minHeight: 48,
                      px: 2.8,
                      borderRadius: "11px",
                      color: "#0F2747",
                      borderColor: "#CBD5E1",
                      textTransform: "none",
                      fontWeight: 600,

                      "&:hover": {
                        borderColor: "#159A9C",
                        color: "#159A9C",
                        backgroundColor:
                          "rgba(21, 154, 156, 0.04)",
                      },
                    }}
                  >
                    Sell With SES
                  </Button>
                </Box>
              </motion.div>
            </Box>

            {/* RIGHT SIDE */}

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 340, sm: 430, md: 500 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Main visual */}

                <Box
                  sx={{
                    width: { xs: 260, sm: 330, md: 390 },
                    height: { xs: 300, sm: 380, md: 440 },
                    borderRadius: "28px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    boxShadow:
                      "0 25px 60px rgba(15, 39, 71, 0.10)",
                    p: 2,
                    position: "relative",
                    transform: "rotate(2deg)",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(145deg, #F1F8F8, #E8F2F5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <ShoppingBag
                      size={100}
                      strokeWidth={1}
                      color="#159A9C"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 25,
                        left: 25,
                        right: 25,
                        backgroundColor: "#FFFFFF",
                        borderRadius: "14px",
                        p: 2,
                        boxShadow:
                          "0 10px 30px rgba(15, 39, 71, 0.10)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#64748B",
                          mb: 0.5,
                        }}
                      >
                        Featured Creation
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#0F2747",
                        }}
                      >
                        Made by an SES Student
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Floating card */}

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: "12%",
                    right: "0%",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "14px",
                      px: 2,
                      py: 1.5,
                      boxShadow:
                        "0 12px 30px rgba(15, 39, 71, 0.10)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        color: "#64748B",
                      }}
                    >
                      Student Creators
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#0F2747",
                      }}
                    >
                      ✦ Growing Together
                    </Typography>
                  </Box>
                </motion.div>

                {/* Bottom floating card */}

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "0%",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#0F2747",
                      color: "#FFFFFF",
                      borderRadius: "14px",
                      px: 2,
                      py: 1.5,
                      boxShadow:
                        "0 12px 30px rgba(15, 39, 71, 0.18)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        color: "#AFC0D2",
                      }}
                    >
                      Marketplace
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                      }}
                    >
                      Discover Something New
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>
      {/* =========================
    CATEGORIES SECTION
========================== */}

      <Box
        component="section"
        sx={{
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E2E8F0",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              py: { xs: 7, md: 9 },
            }}
          >
            {/* Section Header */}

            <Box
              sx={{
                maxWidth: 650,
                mb: 5,
              }}
            >
              <Typography
                sx={{
                  color: "#159A9C",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Explore Marketplace
              </Typography>

              <Typography
                component="h2"
                sx={{
                  color: "#0F2747",
                  fontSize: {
                    xs: "1.8rem",
                    md: "2.35rem",
                  },
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  mb: 1.5,
                }}
              >
                Find something you'll love.
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: "1rem",
                  maxWidth: 580,
                }}
              >
                Browse products created by SES students across a growing range of
                categories.
              </Typography>
            </Box>

            {/* Category Grid */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
              }}
            >
              {categories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    whileHover={{ y: -4 }}
                  >
                    <Box
                      component={Link}
                      to="/shop"
                      sx={{
                        display: "block",
                        height: "100%",
                        p: 2.5,
                        border: "1px solid #E2E8F0",
                        borderRadius: "16px",
                        backgroundColor: "#FFFFFF",
                        transition:
                          "border-color 0.2s ease, box-shadow 0.2s ease",

                        "&:hover": {
                          borderColor: "#159A9C",
                          boxShadow:
                            "0 12px 30px rgba(15, 39, 71, 0.08)",
                        },
                      }}
                    >
                      {/* Icon */}

                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          backgroundColor:
                            "rgba(21, 154, 156, 0.08)",
                          color: "#159A9C",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2.5,
                        }}
                      >
                        <Icon size={23} strokeWidth={1.8} />
                      </Box>

                      {/* Content */}

                      <Typography
                        sx={{
                          color: "#0F2747",
                          fontSize: "1rem",
                          fontWeight: 700,
                          mb: 0.8,
                        }}
                      >
                        {category.name}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748B",
                          fontSize: "0.86rem",
                          lineHeight: 1.6,
                          minHeight: 44,
                        }}
                      >
                        {category.description}
                      </Typography>

                      {/* Bottom */}

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mt: 2.5,
                          pt: 1.8,
                          borderTop: "1px solid #F1F5F9",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#94A3B8",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        >
                          {category.count}
                        </Typography>

                        <ArrowRight
                          size={17}
                          color="#159A9C"
                        />
                      </Box>
                    </Box>
                  </motion.div>
                );
              })}
            </Box>

            {/* Browse All */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Button
                component={Link}
                to="/shop"
                endIcon={<ArrowRight size={17} />}
                sx={{
                  color: "#0F2747",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "rgba(21, 154, 156, 0.05)",
                    color: "#159A9C",
                  },
                }}
              >
                Browse all products
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>

  );
}

export default Home;