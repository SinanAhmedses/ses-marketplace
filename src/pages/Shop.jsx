import React, { useMemo, useState } from "react";

import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Button,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

import products from "../data/Products";
import ProductCard from "../components/productCard";

const categories = [
  "All Categories",
  "Electronics & Tech",
  "Art & Crafts",
  "Fashion & Accessories",
  "Food & Homemade",
  "Books & Stationery",
  "Other",
];

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search

    if (search.trim()) {
      const searchValue = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue) ||
          product.category.toLowerCase().includes(searchValue) ||
          product.seller.toLowerCase().includes(searchValue)
      );
    }

    // Category

    if (category !== "All Categories") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Sorting

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setSort("featured");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FAFBFC",
        minHeight: "calc(100vh - 76px)",
      }}
    >
      {/* =========================
          SHOP HEADER
      ========================== */}

      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              py: { xs: 5, md: 7 },
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
              SES Marketplace
            </Typography>

            <Typography
              component="h1"
              sx={{
                color: "#0F2747",
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
                },
                fontWeight: 700,
                letterSpacing: "-0.03em",
                mb: 1.5,
              }}
            >
              Explore Products
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                maxWidth: 620,
                fontSize: "1rem",
              }}
            >
              Discover creative products made by students and
              creators from the SES community.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =========================
          FILTER AREA
      ========================== */}

      <Container maxWidth="xl">
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 2,
            alignItems: {
              xs: "stretch",
              md: "center",
            },
          }}
        >
          {/* Search */}

          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            fullWidth
            sx={{
              maxWidth: {
                md: 430,
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    size={19}
                    color="#64748B"
                  />
                </InputAdornment>
              ),
            }}
          />

          {/* Category */}

          <FormControl
            sx={{
              minWidth: {
                xs: "100%",
                md: 210,
              },
            }}
          >
            <Select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              displayEmpty
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
              }}
            >
              {categories.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                >
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Sort */}

          <FormControl
            sx={{
              minWidth: {
                xs: "100%",
                md: 180,
              },
            }}
          >
            <Select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
              }}
            >
              <MenuItem value="featured">
                Featured
              </MenuItem>

              <MenuItem value="rating">
                Highest Rated
              </MenuItem>

              <MenuItem value="price-low">
                Price: Low to High
              </MenuItem>

              <MenuItem value="price-high">
                Price: High to Low
              </MenuItem>
            </Select>
          </FormControl>

          {/* Clear */}

          {(search ||
            category !== "All Categories" ||
            sort !== "featured") && (
            <Button
              onClick={clearFilters}
              startIcon={<X size={17} />}
              sx={{
                color: "#64748B",
                textTransform: "none",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Clear
            </Button>
          )}
        </Box>

        {/* =========================
            RESULTS HEADER
        ========================== */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              color: "#17202A",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </Typography>

          <SlidersHorizontal
            size={18}
            color="#94A3B8"
          />
        </Box>

        {/* =========================
            PRODUCT GRID
        ========================== */}

        {filteredProducts.length > 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 2.5,
              pb: 10,
            }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </Box>
        ) : (
          /* =========================
             EMPTY STATE
          ========================== */

          <Box
            sx={{
              textAlign: "center",
              py: 12,
              px: 2,
              mb: 8,
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#0F2747",
                mb: 1,
              }}
            >
              No products found
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                mb: 3,
              }}
            >
              Try changing your search or category
              filters.
            </Typography>

            <Button
              onClick={clearFilters}
              variant="contained"
              sx={{
                backgroundColor: "#0F2747",
                textTransform: "none",
                borderRadius: "10px",
                px: 3,

                "&:hover": {
                  backgroundColor: "#183B63",
                },
              }}
            >
              Clear Filters
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Shop;