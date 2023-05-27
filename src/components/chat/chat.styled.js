import {Box, Divider, styled, Typography} from "@mui/material";

export const dialog = {
    height: '95%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    margin: `20px`,
    borderRadius: `0`
};
export const Component = styled(Box)`
  display: flex;

`;
export const Left = styled(Box)`
  flex: 3;
  min-width: 410px;

`;

export const Right = styled(Box)`
  flex: 9;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0, 14);
`;
/*empty component*/
export const EmptyComponent = styled(Box)`
  background-color: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;

`;
export const EmptyContainer = styled(Box)`
  padding: 0 200px;

`;
export const Image = styled(`img`)({
    width: 400,
    marginTop: 100

});
export const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color:#41525d;
  
`;
export const SubTitle = styled(Typography)`
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  color:#667781;

`;
export const  DividerStyle= styled(Divider)`
  margin:40px 0;
  opacity: 0.4;

`;
