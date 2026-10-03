import React from "react";
import {
    Box,
    Container,
    Typography,
    IconButton,
    Divider,
} from "@mui/material";

import {
  Store,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#0F2747",
                color: "#FFFFFF",
                mt: "auto",
            }}
        >
            <Container maxWidth="xl">
                {/* =========================
            MAIN FOOTER
        ========================== */}

                <Box
                    sx={{
                        py: { xs: 6, md: 8 },
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "1.5fr 1fr 1fr",
                            md: "2fr 1fr 1fr 1fr",
                        },
                        gap: { xs: 5, md: 7 },
                    }}
                >
                    {/* BRAND */}

                    <Box>
                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1.2,
                                textDecoration: "none",
                                color: "#FFFFFF",
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: "12px",
                                    backgroundColor: "#159A9C",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Store size={22} strokeWidth={2.2} />
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: "1.15rem",
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                }}
                            >
                                SES Marketplace
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                maxWidth: 350,
                                color: "#DCE7F3",
                                fontSize: "0.92rem",
                                lineHeight: 1.7,
                                mb: 3,
                            }}
                        >
                            A marketplace where student ideas become real products,
                            connecting young creators with customers through SES.
                        </Typography>

                        {/* SOCIAL ICONS */}

                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                component="a"
                                href="mailto:info@seerat.education"
                                sx={{
                                    width: 38,
                                    height: 38,
                                    color: "#DCE7F3",
                                    border: "1px solid rgba(220, 231, 243, 0.18)",
                                    borderRadius: "9px",
                                    "&:hover": {
                                        color: "#FFFFFF",
                                        backgroundColor: "#159A9C",
                                        borderColor: "#159A9C",
                                    },
                                }}
                            >
                                <Mail size={18} />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* SHOP */}

                    <Box>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                mb: 2.2,
                            }}
                        >
                            Marketplace
                        </Typography>

                        <FooterLink to="/shop">Shop Products</FooterLink>
                        <FooterLink to="/categories">Categories</FooterLink>
                        <FooterLink to="/sell">Sell With SES</FooterLink>
                    </Box>

                    {/* COMPANY */}

                    <Box>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                mb: 2.2,
                            }}
                        >
                            Company
                        </Typography>

                        <FooterLink to="/about">About SES Marketplace</FooterLink>
                        <FooterLink to="/contact">Contact Us</FooterLink>
                    </Box>

                    {/* SUPPORT */}

                    <Box>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                mb: 2.2,
                            }}
                        >
                            Support
                        </Typography>

                        <FooterText>Help Center</FooterText>
                        <FooterText>Shipping Information</FooterText>
                        <FooterText>Returns & Refunds</FooterText>
                    </Box>
                </Box>

                <Divider
                    sx={{
                        borderColor: "rgba(220, 231, 243, 0.14)",
                    }}
                />

                {/* =========================
            DEVELOPER CREDIT
        ========================== */}

                <Box
                    sx={{
                        py: 3,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2.5,
                            py: 1.1,
                            borderRadius: "10px",
                            backgroundColor: "rgba(21, 154, 156, 0.12)",
                            border: "1px solid rgba(21, 154, 156, 0.35)",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#DCE7F3",
                                fontSize: { xs: "0.78rem", sm: "0.85rem" },
                                fontWeight: 500,
                            }}
                        >
                            Maintained & Developed by
                        </Typography>

                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontSize: { xs: "0.82rem", sm: "0.9rem" },
                                fontWeight: 700,
                            }}
                        >
                            Sinan Ahmed
                        </Typography>

                        <ArrowUpRight
                            size={16}
                            color="#159A9C"
                            strokeWidth={2.5}
                        />
                    </Box>
                </Box>

                <Divider
                    sx={{
                        borderColor: "rgba(220, 231, 243, 0.14)",
                    }}
                />

                {/* =========================
            COPYRIGHT
        ========================== */}

                <Box
                    sx={{
                        py: 2.5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <Typography
                        sx={{
                            color: "#94A9BF",
                            fontSize: "0.78rem",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        © {currentYear} SES Marketplace. All rights reserved.
                    </Typography>

                    <Typography
                        sx={{
                            color: "#94A9BF",
                            fontSize: "0.78rem",
                            textAlign: { xs: "center", sm: "right" },
                        }}
                    >
                        Seerat Educational System
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

/* =========================
   FOOTER LINK
========================= */

function FooterLink({ to, children }) {
    return (
        <Typography
            component={Link}
            to={to}
            sx={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                mb: 1.3,
                color: "#DCE7F3",
                fontSize: "0.85rem",
                textDecoration: "none",
                transition: "all 0.2s ease",

                "&:hover": {
                    color: "#159A9C",
                    transform: "translateX(3px)",
                },
            }}
        >
            {children}
        </Typography>
    );
}

/* =========================
   FOOTER TEXT
========================= */

function FooterText({ children }) {
    return (
        <Typography
            sx={{
                mb: 1.3,
                color: "#94A9BF",
                fontSize: "0.85rem",
            }}
        >
            {children}
        </Typography>
    );
}

export default Footer;