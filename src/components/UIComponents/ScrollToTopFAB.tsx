import { useState, useEffect } from "react";
import { Zoom, Fab, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import PropTypes from "prop-types";

interface ScrollTopProps {
  children: React.ReactElement;
}

// Adds a return-to-top-anchor when certain scroll has been done
function ScrollTop(props: ScrollTopProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });
  const [showBtnOnHomePage, setShowBtnOnHomePage] = useState(false);
  const [showBtnOnDisclaimerPage, setShowBtnOnDisclaimerPage] = useState(false);

  useEffect(() => {
    const handleScrollOnHomePage = () => {
      const endOfExplanationBtn = document.getElementById(
        "endOfExplanationBtn"
      );
      if (endOfExplanationBtn) {
        const endOfExplanationBtnPosition =
          endOfExplanationBtn.getBoundingClientRect().top;
        if (endOfExplanationBtnPosition < window.innerHeight) {
          setShowBtnOnHomePage(false);
        } else {
          setShowBtnOnHomePage(true);
        }
      }
    };

    const handleScrollOnDisclaimerPage = () => {
      const inDisclaimerPage = document.getElementById(
        "disclaimerCard"
      );
      if (inDisclaimerPage) {
        const disclaimerCardPosition = inDisclaimerPage.getBoundingClientRect().top;
        if (disclaimerCardPosition < window.innerHeight) {
          setShowBtnOnDisclaimerPage(true);
        } else {
          setShowBtnOnDisclaimerPage(false);
        }
      };
    };

    window.addEventListener("scroll", handleScrollOnHomePage);
    window.addEventListener("scroll", handleScrollOnDisclaimerPage);
    return () => {
      window.removeEventListener("scroll", handleScrollOnHomePage);
      window.removeEventListener("scroll", handleScrollOnDisclaimerPage);
    };
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const anchor = (target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={(trigger && showBtnOnHomePage) || (trigger && showBtnOnDisclaimerPage)}>
      <div onClick={handleClick} role="presentation" style={{position: "fixed", bottom: 0, marginBottom: "10px", right: 0, marginRight: "10px"}}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ScrollToTopFAB() {
  return (
    <ScrollTop>
      <Fab
        aria-label="Scroll to the top of the page"
        variant="extended"
        size="small"
        color="primary"
      >
        <KeyboardArrowUp />
        TOP
      </Fab>
    </ScrollTop>
  );
}
