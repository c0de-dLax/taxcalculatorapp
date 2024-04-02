import { useState } from "react";

import Navbar from "./Navbar";
import TaxableIncomeComputation from "../ComputationComponents/TaxableIncome";
import IncomeTaxComputation from "../ComputationComponents/IncomeTax";
import NetPayAfterTaxComputation from "../ComputationComponents/NetPayAfterTax";
import SSSComputation from "../ComputationComponents/SSS";
import PhilHealthComputation from "../ComputationComponents/PhilHealth";
import PagIBIGComputation from "../ComputationComponents/PagIBIG";
import TotalContributionsComputation from "../ComputationComponents/TotalConstributions";
import TotalDeductionsComputation from "../ComputationComponents/TotalDeductions";
import NetTakeHomePayComputation from "../ComputationComponents/NetTakeHomePay";
import ComputationExplanation from "./ComputationExplanation";

import {
  TextField,
  InputAdornment,
  Button,
  Stack,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  styled,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CalculateOutlinedIcon from "@mui/icons-material/Calculate";
import Footer from "./Footer";
import ScrollToTopFAB from "./ScrollToTopFAB";
import { Clear } from "@mui/icons-material";

const breakpointValues = {
  xs: 0,
  sm: 340,
  md: 790,
  lg: 992,
  xl: 1200,
};

const viewPortTheme = createTheme({
  breakpoints: { values: breakpointValues },
});

//component style box for computation results
const ResultBox = styled("div")(({}) => ({
  fontSize: "14px",
  fontWeight: "normal",
  lineHeight: "26px",
  maxWidth: "160px",
  width: "100%",
  height: "24px",
  border: "1px solid",
  borderColor: "dodgerblue",
  borderRadius: "2px",
  padding: "2px 5px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export default function TaxPageWrapper() {
  const [incomeValue, setIncomeValue] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isInputInvalid, setIsInputInvalid] = useState(false);

  const removeLeadingZeros = (str: string) => {
    if (str === "") {
      return ""; // Return an empty string for empty or '0' input
    }

    const parts = str.split(".");
    const integerPart = parts[0].replace(/^0+/, "") || "0";
    const decimalPart = parts[1] ? "." + parts[1] : "";
    return integerPart + decimalPart;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the entered value
    let inputValue = e.target.value;

    // condition for error prop to fire
    if (inputValue === null || /^[.0-9,]+(\.[.0-9]+)?$/.test(inputValue)) {
      setIsInputInvalid(false);
    } else if ((e.nativeEvent as any).inputType === "deleteContentBackward") {
      setIsInputInvalid(false);
    } else {
      setIsInputInvalid(true);
    }

    // Remove non-numeric characters and restrict to two decimal places
    inputValue = inputValue.replace(/[^0-9.]/g, ""); // Allow only digits and dots
    const decimalCount = (inputValue.match(/\./g) || []).length;

    if (decimalCount > 1) {
      // More than one decimal separator, remove the extra ones
      inputValue = inputValue.slice(0, inputValue.lastIndexOf("."));
    }

    if (decimalCount === 1) {
      // Limit to two decimal places
      const [integerPart, decimalPart] = inputValue.split(".");
      inputValue = `${removeLeadingZeros(integerPart)
        .split("")
        .reverse()
        .map((digit, index) =>
          index % 3 === 0 && index !== 0 ? digit + "," : digit
        )
        .reverse()
        .join("")}.${decimalPart.slice(0, 2)}`;
    } else {
      // Format the integer part with commas
      inputValue = inputValue
        .split(".")
        .map((part, index) =>
          index === 0
            ? removeLeadingZeros(part)
                .split("")
                .reverse()
                .map((digit, index) =>
                  index % 3 === 0 && index !== 0 ? digit + "," : digit
                )
                .reverse()
                .join("")
            : part
        )
        .join(".");
    }

    // Update the state with the formatted value
    setIncomeValue(inputValue);
    setShowResult(false);
  };

  const handleButtonClick = () => {
    setShowResult(true);
    setIsInputInvalid(false);
  };

  const handleClearButtonClick = () => {
    setIncomeValue(null);
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowResult(true);
      setIsInputInvalid(false);
    }
  };

  //Set the HelperText for error or valid
  const getHelperText = () => {
    if (isInputInvalid) {
      return "Invalid Input";
    } else {
      return "Please enter your Monthly Income";
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          margin: "auto",
          marginTop: 6,
          padding: 4,
          maxWidth: 660,
          width: "calc(100vw - 40px)",
          color: "black",
          fontFamily: '"Heebo", sans-serif',
          fontSize: 12,
        }}
      >
        Updated as of March 31, 2024
        <br />
      </div>
      <Stack
        spacing={{ xs: 2 }}
        direction="column"
        alignItems="center"
        marginTop="20px"
        marginLeft="3px"
      >
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "white",
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            border: "1.5px solid darkgray",
            maxWidth: "260px",
            width: "100vw",
            height: "100px",
            paddingTop: "12px",
            paddingX: 2,
          }}
        >
          <TextField
            label="Monthly Income"
            helperText={getHelperText()}
            aria-label="Input your monthly income here"
            size="small"
            placeholder="Type here"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span>&#8369;</span>
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  onClick={handleClearButtonClick}
                  sx={{
                    visibility: incomeValue ? "visible" : "hidden",
                    width: 20,
                    height: 20,
                    backgroundColor: "white",
                    border: "2px solid rgb(221,73,78)",
                    color: "rgb(221,73,78)",
                    borderRadius: 1,
                    transition: "ease-in-out 150ms",
                    ":hover": { backgroundColor: "rgb(221,73,78)", color: "white" },
                  }}
                >
                  <Clear sx={{ width: 20, height: 20 }} />
                </IconButton>
              ),
            }}
            sx={{
              input: {
                color: "black",
                "&::placeholder": {
                  opacity: 0.4,
                  fontStyle: "italic",
                },
              },
              label: { color: "black" },
            }}
            value={incomeValue !== null ? incomeValue.toLocaleString() : ""}
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            error={isInputInvalid}
          />
        </Stack>
        <Button
          variant="contained"
          aria-label="Calculate Button for Monthly Income Tax"
          size="small"
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            maxWidth: "140px",
            maxHeight: "34px",
            minWidth: "140px",
            minHeight: "34px",
          }}
          startIcon={<CalculateOutlinedIcon />}
          onClick={handleButtonClick}
        >
          Calculate
        </Button>
      </Stack>
      <ThemeProvider theme={viewPortTheme}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginX="auto"
          paddingY="4px"
          fontFamily="arial"
          marginTop="24px"
          textAlign="center"
          maxWidth={760}
          width="100%"
        >
          <Box marginBottom="16px" fontSize="24px" fontWeight="bolder">
            Computation Result
          </Box>
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            columnGap={1.5}
            width="100%"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                rowGap: 1.5,
              },
            })}
          >
            <Stack
              rowGap={1.2}
              width="100%"
              textAlign="left"
              fontSize="18px"
              height="205px"
              border="1.5px solid darkgray"
              borderRadius="6px"
              padding="12px 8px"
              fontWeight={600}
              bgcolor="white"
              marginX="auto"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  maxWidth: "360px",
                  width: "92%",
                  height: "auto",
                },
              })}
            >
              Tax Computation
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginTop={1}
                columnGap={1}
              >
                <Typography>Taxable Income</Typography>
                <ResultBox>
                  {incomeValue !== null &&
                    !isNaN(parseFloat(incomeValue)) &&
                    parseFloat(incomeValue) !== 0 &&
                    showResult && (
                      <span>
                        <span> &#8369; </span>
                        <TaxableIncomeComputation
                          incomeValue={parseFloat(
                            incomeValue.replace(/,/g, "")
                          )}
                        />
                      </span>
                    )}
                </ResultBox>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                columnGap={1}
              >
                <Typography>Income Tax</Typography>
                <ResultBox>
                  {incomeValue !== null &&
                    !isNaN(parseFloat(incomeValue)) &&
                    parseFloat(incomeValue) !== 0 &&
                    showResult && (
                      <span>
                        <span> &#8369; </span>
                        <IncomeTaxComputation
                          incomeValue={parseFloat(
                            incomeValue.replace(/,/g, "")
                          )}
                        />
                      </span>
                    )}
                </ResultBox>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                columnGap={1}
              >
                <Typography>Net Pay After Tax</Typography>
                <ResultBox>
                  {incomeValue !== null &&
                    !isNaN(parseFloat(incomeValue)) &&
                    parseFloat(incomeValue) !== 0 &&
                    showResult && (
                      <span>
                        <span> &#8369; </span>
                        <NetPayAfterTaxComputation
                          incomeValue={parseFloat(
                            incomeValue.replace(/,/g, "")
                          )}
                        />
                      </span>
                    )}
                </ResultBox>
              </Box>
            </Stack>
            <Stack
              rowGap={1.2}
              width="100%"
              textAlign="left"
              fontSize="18px"
              height="205px"
              border="1px solid darkgray"
              borderRadius="6px"
              padding="12px 8px"
              fontWeight={600}
              bgcolor="white"
              marginX="auto"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  maxWidth: "360px",
                  width: "92%",
                },
              })}
            >
              Monthly Contributions
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginTop={1}
                columnGap={1}
              >
                <Typography>SSS</Typography>
                <ResultBox>
                  {incomeValue !== null &&
                    !isNaN(parseFloat(incomeValue)) &&
                    parseFloat(incomeValue) !== 0 &&
                    showResult && (
                      <span>
                        <span> &#8369; </span>
                        <SSSComputation
                          incomeValue={parseFloat(
                            incomeValue.replace(/,/g, "")
                          )}
                        />
                      </span>
                    )}
                </ResultBox>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                columnGap={1}
              >
                <Typography>PhilHealth</Typography>
                <ResultBox>
                  {incomeValue !== null &&
                    !isNaN(parseFloat(incomeValue)) &&
                    parseFloat(incomeValue) !== 0 &&
                    showResult && (
                      <span>
                        <span> &#8369; </span>
                        <PhilHealthComputation
                          incomeValue={parseFloat(
                            incomeValue.replace(/,/g, "")
                          )}
                        />
                      </span>
                    )}
                </ResultBox>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                columnGap={1}
              >
                <Typography>Pag-IBIG</Typography>
                <ResultBox>
                  {incomeValue !== null &&
                    !isNaN(parseFloat(incomeValue)) &&
                    parseFloat(incomeValue) !== 0 &&
                    showResult && (
                      <span>
                        <span> &#8369; </span>
                        <PagIBIGComputation
                          incomeValue={parseFloat(
                            incomeValue.replace(/,/g, "")
                          )}
                        />
                      </span>
                    )}
                </ResultBox>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                columnGap={1}
              >
                <Typography>Total Contributions</Typography>
                <ResultBox>
                  {incomeValue !== null &&
                    !isNaN(parseFloat(incomeValue)) &&
                    parseFloat(incomeValue) !== 0 &&
                    showResult && (
                      <span>
                        <span> &#8369; </span>
                        <TotalContributionsComputation
                          incomeValue={parseFloat(
                            incomeValue.replace(/,/g, "")
                          )}
                        />
                      </span>
                    )}
                </ResultBox>
              </Box>
            </Stack>
          </Grid>
          <Stack
            alignItems="center"
            maxWidth={760}
            rowGap={1.2}
            width="100% "
            textAlign="left"
            border="1px solid darkgray"
            borderRadius="6px"
            paddingY="12px"
            marginTop={1.5}
            marginX="auto"
            bgcolor="white"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                maxWidth: "360px",
                paddingX: "8px",
                width: "92%",
              },
            })}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              maxWidth={360}
              width="100%"
              columnGap={1}
            >
              Total Deductions
              <ResultBox>
                {incomeValue !== null &&
                  !isNaN(parseFloat(incomeValue)) &&
                  parseFloat(incomeValue) !== 0 &&
                  showResult && (
                    <span>
                      <span> &#8369; </span>
                      <TotalDeductionsComputation
                        incomeValue={parseFloat(incomeValue.replace(/,/g, ""))}
                      />
                    </span>
                  )}
              </ResultBox>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              maxWidth={360}
              width="100%"
              columnGap={1}
            >
              Net "Take Home" Pay
              <ResultBox>
                {incomeValue !== null &&
                  !isNaN(parseFloat(incomeValue)) &&
                  parseFloat(incomeValue) !== 0 &&
                  showResult && (
                    <span>
                      <span> &#8369; </span>
                      <NetTakeHomePayComputation
                        incomeValue={parseFloat(incomeValue.replace(/,/g, ""))}
                      />
                    </span>
                  )}
              </ResultBox>
            </Box>
          </Stack>
          <Box marginTop="8px" maxWidth={760} width="92%">
            <i>
              Disclaimer: The results provided are merely estimates and may not
              accurately reflect your actual tax liability.
            </i>
          </Box>
        </Box>
      </ThemeProvider>
      <ComputationExplanation />
      <ScrollToTopFAB />
      <Footer />
    </div>
  );
}
