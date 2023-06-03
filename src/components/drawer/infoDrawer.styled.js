import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";

export const drawerStyle = {
    left: 20,
    top: 17,
    height: `95%`,
    width: `30%`,
    boxShadow: `none`

}
export const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #fff;
  display: flex;

  & > svg,
  & > p {
    margin-top: auto;
    font-weight: 500;
    margin-left: 5px;

  }
`;
export const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
export const Text = styled(Typography)`
  font-size: 18px;

`;
export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;

`;
export const Image = styled(`img`)({
    width: 200,
    height: 200,
    borderRadius: `50%`,
    padding: `25px 0`,
    objectFit: `cover`,
    boxSizing: `content-box`

});
export const BoxWrapper = styled(Box)`
  background-color: #fff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0, 0.08);

  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }

`;
export const Desc = styled(Box)`
    padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color:#8696a0;
  }
    
`