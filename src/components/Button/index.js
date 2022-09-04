import { ButtonContainer } from "./style";

const Button = ({ label, onClick }) => {
  console.log("🚀 ~ file: index.js ~ line 4 ~ Button ~ label", label);
  console.log("🚀 ~ file: index.js ~ line 4 ~ Button ~ onClick", onClick);
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
};

export default Button;
