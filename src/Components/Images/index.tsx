import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IMAGES_DATA } from "../../Data/Images";
const endIndex = IMAGES_DATA.length - 1;
const Images = () => {
  const [curIndex, setCurIndex] = useState(0);
  const handleIncrease = () => {
    if (curIndex < endIndex) setCurIndex(curIndex + 1);
    else setCurIndex(0);
  };
  const handleDecrease = () => {
    if (curIndex > 0) setCurIndex(curIndex - 1);
    else setCurIndex(endIndex);
  };
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        textColor="gray.700"
        cursor="pointer"
        fontWeight="semibold"
        fontSize="1.8rem"
        height="10vh"
        paddingTop="2vh"
      >
        Images
      </Heading>

      {IMAGES_DATA.map((image, index) => {
        if (index === curIndex)
          return (
            <Box display="flex" alignItems="center" height="90vh" gap="2rem">
              <FaLongArrowAltLeft size={70} onClick={handleDecrease} />
              <Box
                display="flex"
                flexDir="row"
                alignItems="center"
                justifyContent="center"
                gap="1rem"
              >
                <Box>
                  <Image
                    src={image.original}
                    width="400px"
                    height="400px"
                    alt="original image"
                    marginBottom="1rem"
                  />
                  <Text
                    textColor="gray.700"
                    cursor="pointer"
                    fontWeight="semibold"
                    fontSize="1rem"
                  >
                    Image
                  </Text>
                </Box>
                <Box>
                  <Image
                    src={image.enhanced}
                    alt="enhanced image"
                    width="400px"
                    height="400px"
                    marginBottom="1rem"
                  />
                  <Text
                    textColor="gray.700"
                    cursor="pointer"
                    fontWeight="semibold"
                    fontSize="1rem"
                  >
                    Detailed Image
                  </Text>
                </Box>
              </Box>
              <FaLongArrowAltRight size={70} onClick={handleIncrease} />
            </Box>
          );
      })}
    </Box>
  );
};

export default Images;
