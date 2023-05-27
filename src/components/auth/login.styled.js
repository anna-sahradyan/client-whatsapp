import {Box, List, styled, Typography} from "@mui/material";

export const dialog = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'

};
export const QRCode = styled(`img`)({
    height: 264,
    width: 264,
    margin: `50px 0 0 50px`
});
export const Title = styled(Typography)`
  font-size: 28px;
  //color: #41525d;
  color: #525252;
  font-weight: 300;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif;

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
    color: #4a4a4a;

  }

`;