import {Box, InputBase, styled} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
/*component Header*/
export const Component = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;

`;
export const Image = styled(`img`)({
    height: 30,
    width: 30,
    borderRadius: `50%`

});
export const Wrapper = styled(Box)`
  margin-left: auto;

  & > *:not(:first-child) {
    margin-left: 2px;
    color: #000;
  }

  & > *:first-child {
    font-size: 23px;
    margin-right: 8px;
    margin-top: 3px;

  }

`;
/*Search component*/
export const SearchComponent = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f3f2f2;
  display: flex;
  align-items: center;
`;
export const SearchWrapper = styled(Box)`
  position: relative;
  border-radius: 10px;
  background-color: #f0f2f5;
  margin: 0 13px;
  width: 100%;

`;
export const Icon = styled(Box)`
  position: absolute;
  height: 100%;
  padding: 6px 8px;
  color: #919191;
`;
export const InputFiled = styled(InputBase)`
  width: 100%;
  padding: 16px;
  padding-left: 65px;
  font-size: 14px;
  height: 15px;

`;
/*component HeaderMenu*/

 export const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4A4A4A;
 
`