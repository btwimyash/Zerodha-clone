import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import React from "react";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import Awards from "./Awards";
import Hero from "./Hero";

import OpenAccount from "../OpenAccount";

const HomePage = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (cookies.token === undefined) {
        // Wait one tick for cookie hydration to avoid premature redirect
        setInitialCheckDone(true);
        return;
      }
      if (!cookies.token) {
        navigate("/login");
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3002/verify",
          {},
          { withCredentials: true }
        );
        const { success, user } = data;
        if (success) {
          if (user) {
            setUsername(user.username || user);
            toast(`Welcome ${user.username || user}`, { position: "top-right" });
          }
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  useEffect(() => {
    if (initialCheckDone && !cookies.token) {
      navigate("/login");
    }
  }, [initialCheckDone, cookies, navigate]);

  // Logout moved to global Navbar

  return (
    <>
      {/* Welcome is shown as a flash message (toast) after login */}

      {/* Landing Page Sections */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />

      <ToastContainer />
    </>
  );
};

export default HomePage;
