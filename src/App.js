import React from "react";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
      <Header />

      <main className="theMain">
        <AppRoutes />
      </main>
      <p>{!data ? "Loading..." : data}</p>
      <Footer />
    </>
  );
};

export default App;
