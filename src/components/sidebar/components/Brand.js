import React from "react";

// Chakra imports
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
import { ScoliosisLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import logoWhite from "assets/img/layout/logoWhite.jpeg";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      {/* <ScoliosisLogo h="26px" w="175px" my="32px" color={logoColor} /> */}
      <Image src={logoWhite} w="140px" h="140px" />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
