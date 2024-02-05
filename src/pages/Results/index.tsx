import { Box } from "@chakra-ui/react";
import Storyboard from "../../Components/Storyboard";
import Images from "../../Components/Images";
import Video from "../../Components/Video";
import Script from "../../Components/Script";
import Poster from "../../Components/Poster";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import useStore from "../../Store/useStore";
// import { VIDEO } from "../../Data/Video";

const Results = () => {
  const navigate = useNavigate();
  //   const { prompt } = useStore();
  //   const video = VIDEO[prompt as keyof typeof VIDEO];
  //   const handleDownload = () => {
  //     const blob = new Blob([video], { type: "video/mp4" });
  //     const downloadlink = document.createElement("a");
  //     downloadlink.download = "video.mp4";
  //     downloadlink.href = URL.createObjectURL(blob);
  //     downloadlink.click();
  //   };
  return (
    <>
      <Box position="fixed" top="5vh" left="5vw">
        <IoIosArrowBack size={50} onClick={() => navigate("/")} />
      </Box>
      {/* <Button
        position="fixed"
        top="5vh"
        right="5vw"
        backgroundColor="palegreen"
        onClick={() => handleDownload}
      >
        Download Assets
      </Button> */}
      <Box
        width="100vw"
        height="100vh"
        overflowY="scroll"
        id="container"
        display="flex"
        flexDir="column"
        scrollSnapType="y mandatory"
      >
        <Storyboard />
        <Images />
        <Video />
        <Script />
        <Poster />
      </Box>
    </>
  );
};

export default Results;
