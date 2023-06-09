import {Box, Divider, InputBase, styled, Typography} from "@mui/material";

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
  width: 75%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
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
  color: #41525d;

`;
export const SubTitle = styled(Typography)`
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  color: #667781;

`;
export const DividerStyle = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;

`;
/*ChatBox component*/
export const ChatBoxComponent = styled(Box)`


`;
/*ChatHeader*/
export const ChatHeaderComponent = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px;
  display: flex;
  align-items: center;

`;
export const ChatImage = styled("img")({
    height: 30,
    width: 30,
    objectFit: `cover`,
    borderRadius: `50%`


});
export const Name = styled(Typography)`
  margin-left: 12px;

`;
export const Status = styled(Typography)`
  margin-left: 12px;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);

`;
export const ChatRight = styled(Box)`
  margin-left: auto;

  & > svg {
    padding: 8px;
    box-sizing: content-box;
    font-size: 22px;
    color: #000;
  }

`;
/*messages component*/
export const Wrapper = styled(Box)`
  background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  background-size: 50%;


`;
export const MessagesComponent = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;
/*footer component*/
export const Container = styled(Box)`
  height: 55px;
  display: flex;
  background-color: #ededed;
  width: 100%;
  align-items: center;
  padding: 0 15px;

  & > * {
    margin: 5px;
    color: #919191;

  }


`;
export const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);

`;
export const InputField = styled(InputBase)`
  height: 20px;
  width: 100%;
  padding: 20px 20px 15px 25px;
  font-size: 14px;
`;

