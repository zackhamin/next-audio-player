import { Box } from "@chakra-ui/layout";
import SideBar from "./SideBar";

const PlayBar = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <SideBar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}main page
      </Box>
      <Box position="absolute" left="0" bottom="0">
        Playbar
      </Box>
    </Box>
  );
};

export default PlayBar;
