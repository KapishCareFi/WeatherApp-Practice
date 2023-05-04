import { ChangeEvent, useState } from "react";
import { Form } from "antd";
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

interface Data {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  humidity?: number;
}
const Weather: React.FC<Data> = () => {
  const [city, setCity] = useState("");
  const [allData, setAllData] = useState<Data>();
  const [error, setError] = useState(false);
  //   console.log(allData);
  const getData = (value: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=6ca734e2e5a5aa69ebf93a7e48011ac9`
    )
      .then((responses) => responses.json())
      .then((data) => {
        if (data.cod === "404") setError(true);
        else setAllData(data.main);
      });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
  };
  const handleSubmit = () => {
    getData(city);
  };
  return (
    <>
      {error ? (
        <div></div>
      ) : (
        <MainDiv>
          <StyledDiv>
            <Form>
              <StyledInput placeholder="Enter City" onChange={handleChange} />
              <StyledButton onClick={handleSubmit}>Find</StyledButton>
            </Form>
            <DataCard>
              <Title fontSize="30px" color="ffa202f6;">
                Weather App
              </Title>

              {error ? (
                <div>
                  <Error />
                </div>
              ) : (
                <div>
                  <StyledImage src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80" />
                  <Title fontSize="20px" color="#ffffffed">
                    Temperature : {allData?.temp}
                  </Title>
                  <Title fontSize="20px" color="#ffffffed">
                    Humidity : {allData?.humidity}
                  </Title>
                  <Title fontSize="20px" color="#ffffffed">
                    Pressure: {allData?.pressure}
                  </Title>
                </div>
              )}
            </DataCard>
          </StyledDiv>
        </MainDiv>
      )}
    </>
  );
};

export default Weather;
