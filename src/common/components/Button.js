import styled from "styled-components";
import Button from "@material-ui/core/Button";

const MatButton = styled(Button)`
  && {
    padding: 6px 16px ;
    font-size: 0.875rem ;
    min-width: 64px ;
    box-sizing: border-box ;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) ;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms ;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif ;
    font-weight: 500 ;
    line-height: 1.75 ;
    border-radius: 4px ;
    letter-spacing: 0.02857em ;
    text-transform: uppercase ;
    color: #fff ;
    background-color: #1976d2 ;
    width: 100% ;
    border: 0 ;
    border-radius: 50px;
    &:hover {
      background-color: rgb(17, 82, 147) ;
    }
  }
`;
export { MatButton };
