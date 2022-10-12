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
  Image,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";

import Card from "components/card/Card.js";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import HistoryItem from "views/admin/doctors/components/HistoryItem";

import Nft6 from "views/admin/doctors/variables/doc.jpg";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [angle, setName] = React.useState(null);
  const [doct, setDoc] = React.useState([
    "Dr Jeremy Kellerstein Toronto ON ",
    "Dr STEPHEN C. SORENSON Elgin IL ",
    "Dr PAVAN K. PAMADURTHI SHERMAN TX ",
    "Dr Mark Reichman Vancouver BC ",
    "Dr Sarah Davidson Dartmouth NS ",
  ]);
  const [respo, setRespo] = React.useState({
    Doctors: [
      "Dr Jeremy Kellerstein Toronto ON ",
      "Dr STEPHEN C. SORENSON Elgin IL ",
      "Dr PAVAN K. PAMADURTHI SHERMAN TX ",
      "Dr Mark Reichman Vancouver BC ",
      "Dr Sarah Davidson Dartmouth NS ",
    ],
    ImageUrl:
      "https://www.verywellhealth.com/thmb/oncFMv1SO2ffNipXRRUPA8HIt1E=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/scoliosis-lateral-curve-of-the-spine-2548780-color-V1-c044832970b94ee1ac37556aa3e3e8f9.png",
    Treatment: "Observation",
    Description:
      "The advantage of watching and waiting is that many cases of scoliosis may not need treatment with a�brace, or�surgery. Many experts believe that mild cases of scoliosis do not have a large impact upon a person�s health. But is this really true? Some scientists have found that, actually, mild cases of scoliosis can�limit the body�s ability to exercise effectively. Sometimes, too, even a small scoliosis can cause pain or other problems. Even if the scoliosis isn�t getting worse, wouldn�t it be nice to have an option that could help your loved one achieve their full athletic potential, or take away some of the pain or sleeplessness they may be experiencing as a result of their scoliosis? In most cases for young people with small curves, CLEAR Scoliosis Treatment does not require as large of a commitment as it does with more severe cases. Some people with small curves have achieved the results they wanted after only a few weeks of care. Also, CLEAR Certified Doctors of Chiropractic can teach your loved one some important exercises for their spine that may be helpful in the future.",
  });
  const scoTypes = [
    "idiopathic",
    "juvenile",
    "kyphosis",
    "levoscoliosis",
    "dextroscoliosis",
  ];
  useEffect(() => {}, []);

  const handleSubmit = async (name) => {
    var data = { ScoliosisType: name, SpineAngle: angle };
    axios
      .post("http://localhost:5000/scoliosis", {
        ScoliosisType: name,
        SpineAngle: angle,
      })
      .then((response) => {
        console.log(response.data)
        setRespo(response.data);
        const doctData = response.data.Doctors.replace(/"/g, "");
        console.log('doc',doct)
        // setDoc(doctData);
      });
    // try {
    //   const response = await axios({
    //     method: "post",
    //     url: " http://localhost:5000/scoliosis",
    //     data: data,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });

    //   setRespo({
    //     Doctors:
    //       "['Dr Jeremy Kellerstein Toronto ON ', 'Dr STEPHEN C. SORENSON Elgin IL ', 'Dr PAVAN K. PAMADURTHI SHERMAN TX ', 'Dr Mark Reichman Vancouver BC ', 'Dr Sarah Davidson Dartmouth NS ']",
    //     ImageUrl:
    //       "https://www.verywellhealth.com/thmb/oncFMv1SO2ffNipXRRUPA8HIt1E=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/scoliosis-lateral-curve-of-the-spine-2548780-color-V1-c044832970b94ee1ac37556aa3e3e8f9.png",
    //     Treatment: "Observation",
    //     Description:
    //       "The advantage of watching and waiting is that many cases of scoliosis may not need treatment with a�brace, or�surgery. Many experts believe that mild cases of scoliosis do not have a large impact upon a person�s health. But is this really true? Some scientists have found that, actually, mild cases of scoliosis can�limit the body�s ability to exercise effectively. Sometimes, too, even a small scoliosis can cause pain or other problems. Even if the scoliosis isn�t getting worse, wouldn�t it be nice to have an option that could help your loved one achieve their full athletic potential, or take away some of the pain or sleeplessness they may be experiencing as a result of their scoliosis? In most cases for young people with small curves, CLEAR Scoliosis Treatment does not require as large of a commitment as it does with more severe cases. Some people with small curves have achieved the results they wanted after only a few weeks of care. Also, CLEAR Certified Doctors of Chiropractic can teach your loved one some important exercises for their spine that may be helpful in the future.",
    //   });
    //   const doct = response.Doctors.replace(/"/g, "");
    //   setDoc(doct);
    // } catch (error) {
    //   console.log(error);
    // }
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
              justifyContent="space-around"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Input
                type="text"
                fontWeight="500"
                variant="main"
                placeholder={"Angle"}
                _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
                h="44px"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                maxh="44px"
                mr="20px"
              ></Input>
              {scoTypes.map((name, index) => (
                <Button
                  ml="30px"
                  mr="30px"
                  onClick={() => {
                    handleSubmit(name);
                  }}
                >
                  {name}
                </Button>
              ))}
            </Flex>
          </Flex>
          <Card p="0px">
            <div>
              <Image
                src={respo.ImageUrl}
                w={{ base: "100%", "3xl": "100%" }}
                h={{ base: "50%", "3xl": "100%" }}
                borderRadius="10px"
              />
              <p> {respo.Treatment}</p>
              <p> {respo.Description}</p>
            </div>
          </Card>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card p="0px">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                Doctors
              </Text>
              
            </Flex>
            {doct.map((text) => (
              <HistoryItem name={text} author="dextroscoliosis" image={Nft6} />
            ))}
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
