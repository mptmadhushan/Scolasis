import React, { useEffect } from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Input,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";

import HistoryItem from "views/admin/scoliosis/components/HistoryItem";
import Card from "components/card/Card.js";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [respo, setRespo] = React.useState({
    incident: true,
    top_3_predictions: ["doc1", "doc1", "doc3"],
    detail: {
      id: 7,
      type: "Risky Behaviour",
      media_file: "/media/uploads/1243dcv_Td0RdMp.PNG",
      date_time: "2022-10-09",
      camera_id: 1,
    },
  });
  const MINUTE_MS = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "Filename", { type: "image/png" });
        console.log("🚀 ~ file: index.js ~ line 84 ~ .then ~ file", file);
        setSelectedFile(file);
        handleSubmit(file);
      });
  }, [webcamRef]);
  const handleSubmit = async () => {
    const formData = new FormData();
   ;
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/v1.0/fraud-prediction/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      setRespo(response);
    } catch (error) {
      console.log(error);
    }
  };
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const data = [];
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Input
                type="text"
                fontWeight="500"
                variant="main"
                placeholder={"Type"}
                _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
                h="44px"
                maxh="44px"
              ></Input>
              <Input
                type="text"
                fontWeight="500"
                variant="main"
                placeholder={"Angle"}
                _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
                h="44px"
                maxh="44px"
              ></Input>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                variant="action"
              >
              submit
              </Button>
            </Flex>
          </Flex>
          <Card p="0px">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
              abc
              </Text>
              <Button variant="action">Submit</Button>
            </Flex>
            {respo.top_3_predictions.map((text) => (
              <HistoryItem name={text} date="30s ago" />
            ))}
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
