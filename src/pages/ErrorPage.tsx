import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function ErrorPage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Box margin="auto" fontSize="1.5em">
        <h1>Oops!</h1>
        <h1>404 Error</h1>
        <h2>Page Not Found</h2>
        <h3 style={{marginTop: 1}}>
          <Link to="/">Click here to go back to the Home Page</Link>
        </h3>
      </Box>
    </main>
  );
}
