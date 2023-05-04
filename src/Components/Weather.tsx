import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import Error from "../Error";
import {
  StyledDiv,
  StyledImage,
  StyledInput,
  Title,
  MainDiv,
  StyledButton,
} from "./styles";
import { DataCard } from "./styles";
const Weather: React.FC = () => {
  const [values, setValues] = useState("");
  const [city, setCity] = useState("");

  const getWeatherData = async (city: string) => {
    if (city !== "") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ca734e2e5a5aa69ebf93a7e48011ac9`
      );
      return response.json();
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues(value);
  };

  const { data, error } = useQuery(["fetching", city], () =>
    getWeatherData(city)
  );

  if (error) return <div>Error...</div>;
  const handleSubmit = () => {
    setCity(values);
    getWeatherData(city);
  };
  return (
    <>
      {data && data.cod != "200" ? (
        <Error/>
      ) : (
        <MainDiv>
          <StyledDiv>
            <StyledInput
              placeholder="Enter City"
              onChange={handleChange}
              value={values}
            />
            <StyledButton onClick={handleSubmit}>Find</StyledButton>
            <DataCard>
              <Title fontSize="30px" color="ffa202f6;">
                Weather App
              </Title>

              <div>
                <StyledImage src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80" />
                <Title fontSize="20px" color="#ffffffed">
                  Temperature : {data?.main?.temp}
                </Title>
                <Title fontSize="20px" color="#ffffffed">
                  Humidity : {data?.main?.humidity}
                </Title>
                <Title fontSize="20px" color="#ffffffed">
                  Pressure: {data?.main?.pressure}
                </Title>
              </div>
            </DataCard>
          </StyledDiv>
        </MainDiv>
      )}
    </>
  );
};

export default Weather;
