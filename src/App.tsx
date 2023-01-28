import { useState } from "react";
import styled from "styled-components";
import { RouterProvider } from "react-router";
import { router } from "./providers/router";

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>BIG SPINNER</div>} />
  );
}

export default App;
