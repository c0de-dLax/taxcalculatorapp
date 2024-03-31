import {
  Box,
  Typography,
  Stack,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const viewPortTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 680,
      lg: 810,
      xl: 1200,
    },
  },
});

export default function Footer () {
  return (
    <footer
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        width: "100%",
        backgroundColor: "rgb(25,118,210)",
      }}
    >
      <ThemeProvider theme={viewPortTheme}>
        <Stack
          maxWidth={1060}
          width="100%"
          height="100%"
          margin="auto"
          color="white"
          display="flex"
        >
          <Typography sx={{ fontSize: 14, letterSpacing: 3 }}>
            REFERENCE:
          </Typography>
          <Box
            sx={{
              display: "flex",
              columnGap: 2,
              margin: "auto",
              paddingY: 1.5,
              flexDirection: {xs: "column", sm: "row"},
              rowGap: {xs: 1, sm: 0}
            }}
          >
            <Link
              href="https://www.sss.gov.ph/sss/DownloadContent?fileName=2023-Schedule-of-Contributions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ fontSize: 22, letterSpacing: 1 }}>
                SSS
              </Typography>
            </Link>
            <Box sx={{border: "1px solid white", width: {xs: "100%", sm: 0}}} />
            <Link
              href="https://www.philhealth.gov.ph/partners/employers/ContributionTable_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ fontSize: 22, letterSpacing: 1 }}>
                PhiHealth
              </Typography>
            </Link>
            <Box sx={{border: "1px solid white", width: {xs: "100%", sm: 0}}} />
            <Link
              href="https://www.pagibigfund.gov.ph/document/pdf/circulars/provident/HDMF%20Circular%20No.%20274%20-%20Revised%20Guidelines%20on%20Pag-IBIG%20Fund%20Membership.pdf#page=4"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ fontSize: 22, letterSpacing: 1 }}>
                Pag-IBIG
              </Typography>
            </Link>
            <Box sx={{border: "1px solid white", width: {xs: "100%", sm: 0}}} />
            <Link
              href="https://www.bir.gov.ph/index.php/tax-information/withholding-tax.html#wt10"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ fontSize: 22, letterSpacing: 1 }}>
                BIR
              </Typography>
            </Link>
          </Box>
          <Typography sx={{ fontSize: {xs: 12, sm:13}, letterSpacing: 1 }}>
            © 2024 designed and created by O.J. Catanaoan
          </Typography>
        </Stack>
      </ThemeProvider>
    </footer>
  );
};