import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import { OktoProvider, BuildType } from "okto-sdk-react";
import Footer from "./components/ui/footer";
import HomePageLogin from "./components/pages/redirectpageafterlogin";
// import { useNavigate } from "react-router-dom";
import "./App.css";
import LoginPageCreator from "./components/pages/loginpageCreator";
import LoginPageReader from "./components/pages/loginpageReader";
import Creators from "./components/pages/topCreators";
import Trending from "./components/pages/trending";
import Header from "./components/pages/header";

export const ProfileContext = React.createContext();

const OKTO_CLIENT_API = " fdf89bfd-7097-490b-b782-9f949fa6c1aa";
function App() {
  localStorage.setItem("userProfile", null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    // Check if profile data exists in localStorage
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem("userProfile", JSON.stringify(newProfile));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      <Router>
        <OktoProvider apiKey={OKTO_CLIENT_API} buildType={BuildType.SANDBOX}>
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route element={<Home />} path="/" />
                <Route
                  path="/creator-loginpage"
                  element={<LoginPageCreator />}
                />
                <Route path="/reader-loginpage" element={<LoginPageReader />} />
                <Route path="/top-creators" element={<Creators />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/home" element={<HomePageLogin />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </OktoProvider>
      </Router>
    </ProfileContext.Provider>
  );
}

export default App;
