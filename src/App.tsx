import { useEffect} from "react";
import Weather from "./Components/Weather";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";

const App:React.FC = () => {
  const queryClient = new QueryClient();
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto","PlayFair Display"],
      },
    });
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Weather />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
