import { useState } from "react";

const useLocalStorage = () => {
 
    
  const item=localStorage.getItem("favoritos") !==null ? JSON.parse(localStorage.getItem("favoritos")): [];


  return item;
}

export default useLocalStorage;

