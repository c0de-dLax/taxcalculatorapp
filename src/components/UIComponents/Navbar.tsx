import React, { useEffect } from "react";

import {
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowDropDown,
  Home,
  MenuOutlined,
  WarningAmber,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const breakpointValues = {
  xs: 0,
  sm: 450,
  md: 690,
  lg: 810,
  xl: 1200,
};

const viewportTheme = createTheme({
  breakpoints: { values: breakpointValues },
});

const referenceItems = [
  "SSS Table",
  "PhilHealth Table",
  "Pag-IBIG Table",
  "BIR Tax Table",
];

export default function Navbar () {
  const [anchorReference, setAnchorReference] =
    React.useState<null | HTMLElement>(null);
  const [openNavMenu, setOpenNavMenu] = React.useState<null | HTMLElement>(
    null
  );

  const betweenXSandSM = useMediaQuery(
    viewportTheme.breakpoints.between("xs", "sm")
  );

  const isBetweenXSandLG = useMediaQuery(
    viewportTheme.breakpoints.between("xs", "lg")
  );

  const anchorHorizontal = isBetweenXSandLG ? -130 : "left";

  useEffect(() => {
    const handleOnScroll = () => {
      setOpenNavMenu(null);
      setAnchorReference(null);
    };

    const handleWindowResize = () => {
      if (window.innerWidth <= 810) {
        setOpenNavMenu(null);
        setAnchorReference(null);
      }
    };

    handleOnScroll();

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleOpenReferenceMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorReference(event.currentTarget);
  };

  const handleCloseReferenceMenu = () => {
    setAnchorReference(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setOpenNavMenu(null);
  };

  const handleReferenceItems = (link: string) => {
    window.open(link, "_blank");
  };

  const getLinkForSetting = (setting: string): string => {
    switch (setting) {
      case "SSS Table":
        return "https://www.sss.gov.ph/sss/DownloadContent?fileName=2023-Schedule-of-Contributions.pdf";
      case "PhilHealth Table":
        return "https://www.philhealth.gov.ph/partners/employers/ContributionTable_v2.pdf";
      case "Pag-IBIG Table":
        return "https://www.pagibigfund.gov.ph/document/pdf/circulars/provident/HDMF%20Circular%20No.%20274%20-%20Revised%20Guidelines%20on%20Pag-IBIG%20Fund%20Membership.pdf#page=4";
      case "BIR Tax Table":
        return "https://www.bir.gov.ph/index.php/tax-information/withholding-tax.html#wt10";
      default:
        return "";
    }
  };

  return (
    <header
      id="back-to-top-anchor"
      style={{
        position: "static",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: "100vw",
        color: "white",
        backgroundColor: "rgb(25,118,210)",
      }}
    >
      <ThemeProvider theme={viewportTheme}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 1,
            maxWidth: 1060,
            width: "100%",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            fontSize="25px"
            fontWeight={700}
            columnGap={1}
          >
            {/* <Box
              component="img"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxHeight: "auto",
                maxWidth: { xs: "36px", sm: "40px" },
                width: "413",
                height: "462",
              }}
              alt="Tax Calculator Page Logo"
              src="images/taxPHIcon2nobg.webp"
            /> */}
            <Box sx={{width: "36px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <img
                alt="Tax Calculator Page Logo"
                src="images/taxPHIcon2nobg.webp"
                width="36"
                height="40"
              />
            </Box>
            {betweenXSandSM ? (
              <Typography
                sx={{
                  fontFamily: "Carter One",
                  letterSpacing: "1.5px",
                  fontSize: "0.7em",
                }}
              >
                PH Tax Calculator '24
              </Typography>
            ) : (
              <Typography
                sx={{
                  fontFamily: "Carter One",
                  letterSpacing: "1.5px",
                  fontSize: "1em",
                }}
              >
                PH Tax Calculator 2024
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/taxcalculatorapp/" style={{ textDecoration: "none" }}>
              <IconButton
                disableRipple
                sx={{
                  color: "white",
                  p: 0,
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "rgb(25,118,210)",
                    borderRadius: "4px",
                    transition: "150ms",
                    textDecoration: "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8em",
                    display: { xs: "none", lg: "block" },
                    paddingX: 1,
                    letterSpacing: "1px",
                  }}
                >
                  HOME
                </Typography>
              </IconButton>
            </Link>
            <Box width={10} />
            <Link to="/taxcalculatorapp/disclaimer" style={{ textDecoration: "none" }}>
              <IconButton
                disableRipple
                sx={{
                  color: "white",
                  p: 0,
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "rgb(25,118,210)",
                    borderRadius: "4px",
                    transition: "150ms",
                    textDecoration: "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8em",
                    display: { xs: "none", lg: "block" },
                    paddingX: 1,
                    letterSpacing: "1px",
                  }}
                >
                  DISCLAIMER
                </Typography>
              </IconButton>
            </Link>
            <Box width={10} />
            <IconButton
              onClick={handleOpenReferenceMenu}
              disableRipple
              sx={{
                color: "white",
                p: 0,
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "rgb(25,118,210)",
                  borderRadius: "4px",
                  transition: "150ms",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8em",
                  display: { xs: "none", lg: "flex" },
                  paddingLeft: 1.1,
                  letterSpacing: "1px",
                }}
              >
                REFERENCE
                <ArrowDropDown
                  sx={{
                    width: "26px",
                    height: "26px",
                    marginY: "auto",
                    color: "rgb(25,118,210",
                  }}
                />
              </Typography>
            </IconButton>
            {/* ------- HamburgerIcon ------- */}
            <IconButton
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: "flex", lg: "none" },
                color: "white",
                p: 0,
              }}
            >
              <MenuOutlined
                sx={{
                  width: "28px",
                  height: "28px",
                  marginBottom: "4px",
                }}
              />
            </IconButton>
            <Menu
              id="navigationMenu"
              aria-label="Navigation Menu"
              disableScrollLock={true}
              sx={{ mt: "36px", display: { xs: "block", lg: "none" } }}
              anchorEl={openNavMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transitionDuration={openNavMenu ? undefined : 0}
              open={Boolean(openNavMenu)}
              onClose={handleCloseNavMenu}
            >
              <Link to="/taxcalculatorapp/" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography
                    sx={{
                      display: "flex",
                      width: 140,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "start",
                      color: "black",
                    }}
                  >
                    <Home
                      sx={{
                        padding: "1px",
                        width: 22,
                        height: 22,
                        backgroundColor: "rgb(25,118,210)",
                        color: "white",
                        borderRadius: "4px",
                        marginRight: 1,
                      }}
                    />
                    HOME
                  </Typography>
                </MenuItem>
              </Link>
              <Link to="/taxcalculatorapp/disclaimer" style={{ textDecoration: "none" }}>
                <MenuItem sx={{ height: 40 }}>
                  <Typography
                    sx={{
                      display: "flex",
                      width: 140,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "start",
                      color: "black",
                    }}
                  >
                    <WarningAmber
                      sx={{
                        padding: "1px",
                        width: 22,
                        height: 22,
                        backgroundColor: "rgb(25,118,210)",
                        color: "white",
                        borderRadius: "4px",
                        marginRight: 1,
                      }}
                    />
                    DISCLAIMER
                  </Typography>
                </MenuItem>
              </Link>
              <MenuItem sx={{ height: 40 }}>
                <Typography
                  onClick={handleOpenReferenceMenu}
                  sx={{
                    display: "flex",
                    width: 140,
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <ArrowDropDown
                    sx={{
                      padding: "1px",
                      width: 22,
                      height: 22,
                      backgroundColor: "rgb(25,118,210)",
                      color: "white",
                      borderRadius: "4px",
                      marginRight: 1,
                    }}
                  />
                  REFERENCE
                </Typography>
              </MenuItem>
            </Menu>
            {/* ------- HamburgerIcon ------- */}
            <Menu
              aria-label="Reference Menu"
              disableScrollLock={true}
              sx={{ mt: "30px" }}
              anchorEl={anchorReference}
              anchorOrigin={{
                vertical: "top",
                horizontal: anchorHorizontal,
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transitionDuration={openNavMenu ? undefined : 0}
              open={Boolean(anchorReference)}
              onClose={handleCloseReferenceMenu}
            >
              {referenceItems.map((referenceItems) => (
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-end", lg: "flex-start" },
                    width: 156,
                    height: 30,
                  }}
                  key={referenceItems}
                  onClick={() =>
                    handleReferenceItems(getLinkForSetting(referenceItems))
                  }
                >
                  <Typography>{referenceItems}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </ThemeProvider>
    </header>
  );
};
