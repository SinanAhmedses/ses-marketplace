import React from "react";
import {
  Box,
  Typography,
  Rating,
  IconButton,
} from "@mui/material";

import {
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          height: "100%",
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          overflow: "hidden",
          transition:
            "border-color 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            borderColor: "#CBD5E1",
            boxShadow:
              "0 14px 35px rgba(15, 39, 71, 0.09)",
          },
        }}
      >
        {/* Product Image */}

        <Box
          component={Link}
          to={`/product/${product.id}`}
          sx={{
            display: "block",
            position: "relative",
            aspectRatio: "1 / 0.85",
            overflow: "hidden",
            backgroundColor: "#F1F5F9",
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.04)",
              },
            }}
          />

          {/* Category Badge */}

          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              px: 1.2,
              py: 0.6,
              borderRadius: "8px",
              backgroundColor:
                "rgba(255,255,255,0.94)",
              backdropFilter: "blur(6px)",
              fontSize: "0.68rem",
              fontWeight: 600,
              color: "#0F2747",
              maxWidth: "75%",
            }}
          >
            {product.category}
          </Box>

          {/* View Button */}

          <IconButton
            component={Link}
            to={`/product/${product.id}`}
            sx={{
              position: "absolute",
              right: 12,
              bottom: 12,
              width: 38,
              height: 38,
              backgroundColor: "#FFFFFF",
              color: "#0F2747",
              boxShadow:
                "0 5px 15px rgba(15, 39, 71, 0.12)",

              "&:hover": {
                backgroundColor: "#0F2747",
                color: "#FFFFFF",
              },
            }}
          >
            <ArrowUpRight size={17} />
          </IconButton>
        </Box>

        {/* Product Information */}

        <Box sx={{ p: 2.2 }}>
          <Typography
            component={Link}
            to={`/product/${product.id}`}
            sx={{
              display: "block",
              color: "#17202A",
              fontSize: "0.98rem",
              fontWeight: 600,
              lineHeight: 1.4,
              mb: 0.8,
              transition: "color 0.2s ease",
              "&:hover": {
                color: "#159A9C",
              },
            }}
          >
            {product.name}
          </Typography>

          {/* Seller */}

          <Typography
            sx={{
              color: "#64748B",
              fontSize: "0.76rem",
              mb: 1,
            }}
          >
            By {product.seller}
          </Typography>

          {/* Rating */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              mb: 1.5,
            }}
          >
            <Rating
              value={product.rating}
              precision={0.1}
              size="small"
              readOnly
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#D97706",
                },
              }}
            />

            <Typography
              sx={{
                color: "#64748B",
                fontSize: "0.72rem",
              }}
            >
              ({product.reviews})
            </Typography>
          </Box>

          {/* Price + Cart */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pt: 1.5,
              borderTop: "1px solid #F1F5F9",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#0F2747",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                }}
              >
                Rs. {product.price.toLocaleString()}
              </Typography>
            </Box>

            <IconButton
              aria-label="Add to cart"
              sx={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                backgroundColor: "#0F2747",
                color: "#FFFFFF",

                "&:hover": {
                  backgroundColor: "#159A9C",
                },
              }}
            >
              <ShoppingCart size={17} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ProductCard;