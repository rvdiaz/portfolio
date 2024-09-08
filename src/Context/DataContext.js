import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [data, setData] = useState({
    loading: true,
    menu: [
      {
        icon: "https://rvdiaz-images.s3.amazonaws.com/icons8_devops_60_09d7d38789.png",
        label: "Biography",
        alt: "Robe Valdes biography",
      },
      {
        icon: "https://rvdiaz-images.s3.amazonaws.com/icons8_devops_60_09d7d38789.png",
        label: "Services",
        alt: "Robe Valdes biography",
      },
      {
        icon: "https://rvdiaz-images.s3.amazonaws.com/icons8_devops_60_09d7d38789.png",
        label: "Works",
        alt: "Robe Valdes biography",
      },
      {
        icon: "https://rvdiaz-images.s3.amazonaws.com/icons8_devops_60_09d7d38789.png",
        label: "Contact",
        alt: "Robe Valdes biography",
      },
    ],
    theme: {
      perfilPicture:
        "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_logo_8b59d153ad.png",
      backgroundPage:
        "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_portfolio_9b343a9741.jpg",
      info: {
        primaryColor: "#a770439e",
        copyright: "© 2023 Roberto Valdes Diaz. All Rights Reserved.",
      },
    },
    dataPages: {},
  });

  useEffect(() => {
    //fetch to backend here
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
