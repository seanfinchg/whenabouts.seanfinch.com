import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeContext";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/"/>
    <Route path="seanfinch.com/projects"/>
    <Route path="seanfinch.com/music"/>
    <Route path="seanfinch.com/contact"/>
    <Route path="seanfinch.com/about"/>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
