import {Box, List, styled, Typography} from "@mui/material";

export const dialog = {
    height: `96%`,
    marginTop: `12%`,
    width: `66%`,
    maxWidth: `100%`,
    maxHeight: `100%`,
    boxShadow: `none`,
    overflow: `none`
};
export const QRCode = styled(`img`)({
    height: 264,
    width: 264,
    margin: `50px 0 0 50px`
});
export const Title = styled(Typography)`
  font-size: 28px;
  color: #41525d;
  font-weight: 300;

`;
export const Component = styled(Box)`
  display: flex;

`;
export const Container = styled(Box)`
  padding: 56px 0 56px 56px;

`;
export const ListStyle = styled(List)`
  & > li {
    padding: 0;
    margin-top: 18px;
    font-size: 18px;
    line-height: 28px;

  }

`;