import { Card, Input, Button } from "antd";
import styled, { createGlobalStyle } from "styled-components";

interface Styledprops {
    fontSize:string,
    color:string,
}
export const DataCard = styled(Card)`
  background-color: #539bd3d6;
  color: #ffa202f6;
  border-radius: 0px;
  height: 350px;
  width: 380px;
  box-shadow: 5px 5px 20px black;
  border-radius: 10px;
  margin-left: 40%;
`;
export const Title = styled.p<Styledprops>`
    font-weight: 600;
    font-size: ${(props)=>props.fontSize};
    //133 18
    margin-top: -.5%;
    font-family: "Roboto";
  color: ${(props)=>props.color};
`;
export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;
export const MainDiv = styled.div`
  background-image: url("https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1500");
  background-repeat: no-repeat;
  height: 100vh;
`;
export const StyledDiv = styled.div`
  text-align: center;
`;
export const GlobalStyles = createGlobalStyle`
    margin: 0;
    padding: 0;
`;
export const StyledButton = styled(Button)`
  position: absolute;
  margin-left: -4.5%;
  margin-top: 15%;
  height: 46px;
  border-radius: 10px;
  background-color: #539bd3d6;
  color: white;
  border: 4px solid #539bd3d6;
  &:hover {
    color: #fffffff4;
  }
`;
export const StyledInput = styled(Input)`
  width: 380px;
  height: 50px;
  margin-left: 6%;
  border-radius: 10px;
  border: 7px solid white;
  position: relative;
  margin-top: 15%;
  &:hover {
    border: 2px solid white;
  }
  &:focus {
    border: 2px solid white;
  }
`;
export const DataDiv = styled.div``;
