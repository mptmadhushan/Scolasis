import React, { useEffect } from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import Card from "components/card/Card.js";
import HistoryItem from "views/admin/scoliosis/components/HistoryItem";
import { columnsDataColumns } from "views/admin/dataTables/variables/columnsData";
import tableDataColumns from "views/admin/treatments/variables/tableDataColumns.json";

export default function Marketplace() {
  useEffect(() => {}, []);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [respo, setRespo] = React.useState(tableDataColumns);
  console.log(
    "🚀 ~ file: index.jsx ~ line 26 ~ Marketplace ~ tableDataColumns",
    tableDataColumns
  );
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
          flexDirection="row"
          gridArea={{ xl: "1 / 1 / 1 / 4", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Card p="0px">
                <Flex
                  align={{ sm: "flex-start", lg: "center" }}
                  justify="space-between"
                  w="100%"
                  px="22px"
                  py="18px"
                ></Flex>
                {respo.map(({ Treatment, Description, ImageUrl }) => (
                  <div>
                    <Image
                      src={ImageUrl}
                      w={{ base: "100%", "3xl": "100%" }}
                      h={{ base: "30%", "3xl": "100%" }}
                      borderRadius="10px"
                    />
                    <p key={Treatment}> {Treatment}</p>
                    <p key={Description}> {Description}</p>
                  </div>
                ))}
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
