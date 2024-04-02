import Navbar from "../components/UIComponents/Navbar";
import ScrollToTopFAB from "../components/UIComponents/ScrollToTopFAB";
import {
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { EmojiEmotions, WavingHand } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";


const colorTheme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
  },
});

export default function DisclaimerPage() {
  return (
    <main>
      <Navbar />
      <ThemeProvider theme={colorTheme}>
        <Stack
          id="disclaimerCard"
          sx={{
            rowGap: 2,
            maxWidth: 860,
            width: "76%",
            marginX: "auto",
            marginY: "calc(24px + 2vh)",
            backgroundColor: "white",
            borderRadius: 2,
            textAlign: "start",
            paddingX: 4,
            paddingTop: 3,
            paddingBottom: 4,
            boxShadow:
            "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Typography fontSize={30} fontWeight={600} letterSpacing={2}>
            Disclaimer:
          </Typography>
          <Typography>
            Hello there,{" "}
            <WavingHand
              color="primary"
              sx={{ width: "20px", height: "20px" }}
            />
          </Typography>
          <Typography textAlign="justify">
            I'm excited to provide you with this tax calculator tool! Before you
            get started, I want to ensure that you are well-informed about this tool.
          </Typography>
          <Typography textAlign="justify">
            This tax calculator is designed to give you an estimate of your
            possible tax liabilities, using calculations based on the official
            agencies' regulations. While I've put a lot of care into making sure
            it's accurate, it's important to know that{" "}
            <b>I'm not a certified accountant</b>.
          </Typography>
          <Typography textAlign="justify">
            Tax laws can be complex and vary depending on your location and
            unique financial situation. That's why{" "}
            <b>
              I strongly recommend reaching out to a qualified tax professional
              or accountant
            </b>{" "}
            for personalized advice that fits your needs.
          </Typography>
          <Typography textAlign="justify">
            Please remember that the information provided by this tax calculator
            is meant for general informational purposes only. While I strive for
            accuracy, I can't guarantee that it will cover every aspect of your
            tax situation.
          </Typography>
          <Typography textAlign="justify">
            Ultimately, your financial decisions should be made with care and
            guidance from trusted experts. This tool is here to offer insights,
            but
            <b>
              {" "}
              I encourage you to seek professional advice when it comes to taxes
            </b>
            . Thank you for considering this tax calculator.
          </Typography>
          <Typography
            id="bottomButtonScrollToTop"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              columnGap: 1,
              paddingTop: 2,
            }}
          >
            <EmojiEmotions color="primary" sx={{ width: 24, height: 24 }} />
            Have a good one and happy computing!{" "}
            <EmojiEmotions color="primary" sx={{ width: 24, height: 24 }} />
          </Typography>
        </Stack>
      </ThemeProvider>
      <ScrollToTopFAB />
    </main>
  );
}
