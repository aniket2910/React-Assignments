import "./App.css";
import { MobileManufacture } from "./Day 1/Problem 1/MobileManufacture";
import { MobileOs } from "./Day 1/Problem 1/MobileOS";
import { ContactUs } from "./Day 1/Problem 2/ContactUs";
import { Download } from "./Day 1/Problem 2/Download";
import { Help } from "./Day 1/Problem 2/Help";
import { Home } from "./Day 1/Problem 2/Home";
import { JoinUs } from "./Day 1/Problem 2/JoinUs";
import { Login } from "./Day 1/Problem 2/Login";
import { Search } from "./Day 1/Problem 2/Search";
import { Settings } from "./Day 1/Problem 2/Settings";
import { Common } from "./Day 1/Problem 2 Part 2/Common";

function App() {
  return (
    <>
      <MobileOs heading="Moblie Operating System" />
      <MobileManufacture heading="Mobile Manufactures" />
      <div className="container">
        <JoinUs bg="#1B9CC7" heading="Join US" />
        <Settings bg="#7AB5C3" heading="Settings" />
        <Login bg="#F78421" heading="Login" />
        <ContactUs bg="#C52B33" heading="Contact Us" />
        <Search bg="#81B23D" heading="Search" />
        <Help bg="#615D9A" heading="Help" />
        <Home bg="#DB4483" heading="Home" />
        <Download bg="#9B773B" heading="Download" />
      </div>
      <div className="container">
        <Common bg="#1B9CC7" heading="Join US" />
        <Common bg="#7AB5C3" heading="Settings" />
        <Common bg="#F78421" heading="Login" />
        <Common bg="#C52B33" heading="Contact Us" />
        <Common bg="#81B23D" heading="Search" />
        <Common bg="#615D9A" heading="Help" />
        <Common bg="#DB4483" heading="Home" />
        <Common bg="#9B773B" heading="Download" />
      </div>
    </>
  );
}

export default App;
