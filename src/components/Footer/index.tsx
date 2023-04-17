import { useEffect, useState } from "react";
import { Rodape } from "./styles";

import AOS from "aos";
import { Link } from "react-router-dom";
AOS.init();

export function Footer(){
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3600);
  }, []);
  
  if (!isLoaded) {
    return null;
  }

  return (
    <div >
    <Rodape >
      <Link to="/ClimateCuriosity">Leia uma Curiosidade Climática.</Link>
    </Rodape>
    </div>
  );
}
