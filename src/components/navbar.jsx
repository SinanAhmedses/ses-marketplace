import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Container,
    Box,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Badge,
} from "@mui/material";

import {
    Search,
    ShoppingCart,
    Menu,
    X,
    Store,
} from "lucide-react";

import { motion} from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: "Shop", path: "/shop" },
        { label: "Categories", path: "/categories" },
        { label: "Sell With SES", path: "/sell" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: "#FFFFFF",
                    borderBottom: "1px solid #E2E8F0",
                    color: "#17202A",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: { xs: 68, md: 76 },
                            justifyContent: "space-between",
                        }}
                    >
                        {/* =========================
                LOGO / BRAND
            ========================== */}

                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.2,
                                textDecoration: "none",
                                color: "#0F2747",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: "12px",
                                    backgroundColor: "#0F2747",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#FFFFFF",
                                }}
                            >
                                <Store size={21} strokeWidth={2.2} />
                            </Box>

                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1rem", sm: "1.1rem" },
                                        fontWeight: 700,
                                        lineHeight: 1.1,
                                        color: "#0F2747",
                                    }}
                                >
                                    SES Marketplace
                                </Typography>

                                <Typography
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        fontSize: "0.68rem",
                                        fontWeight: 500,
                                        color: "#64748B",
                                        mt: 0.3,
                                    }}
                                >
                                    Student Ideas. Real Products.
                                </Typography>
                            </Box>
                        </Box>

                        {/* =========================
                DESKTOP NAVIGATION
            ========================== */}

                        <Box
                            sx={{
                                display: { xs: "none", lg: "flex" },
                                alignItems: "center",
                                gap: 0.5,
                                ml: 4,
                                flex: 1,
                                justifyContent: "center",
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.path}
                                    component={NavLink}
                                    to={item.path}
                                    sx={{
                                        position: "relative",
                                        minWidth: "auto",
                                        px: 1.8,
                                        py: 1,
                                        color: "#64748B",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        textTransform: "none",
                                        borderRadius: "8px",

                                        "&:hover": {
                                            backgroundColor: "rgba(21, 154, 156, 0.06)",
                                            color: "#159A9C",
                                        },

                                        "&.active": {
                                            color: "#0F2747",
                                            fontWeight: 600,
                                        },

                                        "&.active::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: 3,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            width: "18px",
                                            height: "2px",
                                            borderRadius: "10px",
                                            backgroundColor: "#159A9C",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* =========================
                DESKTOP ACTIONS
            ========================== */}

                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                alignItems: "center",
                                gap: 0.5,
                            }}
                        >
                            <IconButton
                                aria-label="Search"
                                sx={{
                                    color: "#0F2747",
                                    width: 42,
                                    height: 42,
                                    "&:hover": {
                                        backgroundColor: "rgba(21, 154, 156, 0.08)",
                                        color: "#159A9C",
                                    },
                                }}
                            >
                                <Search size={20} />
                            </IconButton>

                            <IconButton
                                aria-label="Shopping cart"
                                component={Link}
                                to="/cart"
                                sx={{
                                    color: "#0F2747",
                                    width: 42,
                                    height: 42,
                                    "&:hover": {
                                        backgroundColor: "rgba(21, 154, 156, 0.08)",
                                        color: "#159A9C",
                                    },
                                }}
                            >
                                <Badge
                                    badgeContent={0}
                                    sx={{
                                        "& .MuiBadge-badge": {
                                            fontSize: "0.6rem",
                                            minWidth: 16,
                                            height: 16,
                                            backgroundColor: "#159A9C",
                                            color: "#FFFFFF",
                                        },
                                    }}
                                >
                                    <ShoppingCart size={20} />
                                </Badge>
                            </IconButton>

                            <Button
                                component={Link}
                                to="/sell"
                                variant="contained"
                                sx={{
                                    ml: 1,
                                    px: 2.2,
                                    minHeight: 42,
                                    borderRadius: "10px",
                                    backgroundColor: "#0F2747",
                                    color: "#FFFFFF",
                                    textTransform: "none",
                                    fontSize: "0.88rem",
                                    fontWeight: 600,
                                    boxShadow: "none",

                                    "&:hover": {
                                        backgroundColor: "#183B63",
                                        boxShadow: "0 5px 14px rgba(15, 39, 71, 0.16)",
                                    },
                                }}
                            >
                                Start Selling
                            </Button>
                        </Box>

                        {/* =========================
                TABLET / MOBILE ACTIONS
            ========================== */}

                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                                alignItems: "center",
                            }}
                        >
                            <IconButton
                                aria-label="Shopping cart"
                                component={Link}
                                to="/cart"
                                sx={{ color: "#0F2747" }}
                            >
                                <ShoppingCart size={21} />
                            </IconButton>

                            <IconButton
                                aria-label="Open menu"
                                onClick={() => setMobileOpen(true)}
                                sx={{ color: "#0F2747" }}
                            >
                                <Menu size={24} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* =========================
          MOBILE DRAWER
      ========================== */}

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={closeMobileMenu}
                PaperProps={{
                    sx: {
                        width: { xs: "85%", sm: 360 },
                        maxWidth: 360,
                        backgroundColor: "#FFFFFF",
                    },
                }}
            >
                <Box sx={{ height: "100%" }}>
                    {/* Drawer Header */}

                    <Box
                        sx={{
                            height: 76,
                            px: 2.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #E2E8F0",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#0F2747",
                            }}
                        >
                            SES Marketplace
                        </Typography>

                        <IconButton
                            onClick={closeMobileMenu}
                            sx={{
                                color: "#64748B",
                                "&:hover": {
                                    color: "#0F2747",
                                    backgroundColor: "#F5F7FA",
                                },
                            }}
                        >
                            <X size={22} />
                        </IconButton>
                    </Box>

                    {/* Mobile Navigation */}

                    <List sx={{ px: 1.5, py: 2 }}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.2,
                                }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={NavLink}
                                        to={item.path}
                                        onClick={closeMobileMenu}
                                        sx={{
                                            borderRadius: "10px",
                                            mb: 0.5,
                                            py: 1.4,
                                            color: "#64748B",

                                            "&:hover": {
                                                backgroundColor: "rgba(21, 154, 156, 0.07)",
                                                color: "#159A9C",
                                            },

                                            "&.active": {
                                                backgroundColor: "rgba(21, 154, 156, 0.09)",
                                                color: "#0F2747",
                                                fontWeight: 600,
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={item.label}
                                            primaryTypographyProps={{
                                                fontSize: "0.95rem",
                                                fontWeight: "inherit",
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>

                    {/* Mobile CTA */}

                    <Box sx={{ px: 2.5, mt: 1 }}>
                        <Button
                            component={Link}
                            to="/sell"
                            onClick={closeMobileMenu}
                            fullWidth
                            variant="contained"
                            sx={{
                                minHeight: 46,
                                borderRadius: "10px",
                                backgroundColor: "#0F2747",
                                textTransform: "none",
                                fontWeight: 600,
                                boxShadow: "none",

                                "&:hover": {
                                    backgroundColor: "#183B63",
                                },
                            }}
                        >
                            Start Selling
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;