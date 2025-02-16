/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { saveToIndexedDB, loadFromIndexedDB } from "../utils/indexeddb";

const TheContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [numPeople, setNumpeople] = useState(1);
  const [image, setImage] = useState("");
  const [currentStep, setCurrentStep] = useState("ticketSelection");

  // Load data from IndexedDB on mount
  useEffect(() => {
    const loadData = async () => {
      const storedData = await loadFromIndexedDB();
      setName(storedData.name || "");
      setEmail(storedData.email || "");
      setText(storedData.text || "");
      setTicketType(storedData.ticketType || null);
      setNumpeople(storedData.numPeople || 1);
      setImage(storedData.image || "");
    };
    loadData();
  }, []);

  // Save data to IndexedDB when state changes
  useEffect(() => {
    saveToIndexedDB({ name, email, text, ticketType, numPeople, image });
  }, [name, email, text, ticketType, numPeople, image]);

  // Save current step to local storage
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  // Load current step from local storage
  useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) setCurrentStep(savedStep);
  }, []);

  return (
    <TheContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        text,
        setText,
        ticketType,
        setTicketType,
        numPeople,
        setNumpeople,
        image,
        setImage,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGlobal = () => {
  return useContext(TheContext);
};
