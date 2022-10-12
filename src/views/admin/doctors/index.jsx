import React, { useEffect } from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";

import { columnsDataColumns } from "views/admin/dataTables/variables/columnsData";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";

import Card from "components/card/Card.js";
import HistoryItem from "views/admin/doctors/components/HistoryItem";

import Nft6 from "views/admin/doctors/variables/doc.jpg";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [parsedCsvData, setParsedCsvData] = React.useState([]);
  // const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  useEffect(() => {}, []);
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
              <ColumnsTable
                columnsData={columnsDataColumns}
                tableData={tableDataColumns}
              />
            </Flex>
          </Flex>
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
                History
              </Text>
              <Button variant="action">See all</Button>
            </Flex>
            <HistoryItem
              name="dr michelle hagel calgary ab ca"
              author="dextroscoliosis"
              image={Nft6}
            />{" "}
            <HistoryItem
              name="Dr Neal G. Ranen York PA"
              author="idiopathic"
              image={Nft6}
            />{" "}
            <HistoryItem
              name="Dr K. Todd Foreman Huntsville AL "
              author="levoscoliosis"
              image={Nft6}
            />{" "}
            <HistoryItem
              name="dr michelle hagel calgary ab ca"
              author="idiopathic"
              image={Nft6}
            />{" "}
            <HistoryItem
              name="dr michelle hagel calgary ab ca"
              author="idiopathic"
              image={Nft6}
            />
          </Card>
        </Flex>
      </Grid>
    </Box>
  );
}
