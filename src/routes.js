import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdAccessibilityNew, MdOutlineToday } from "react-icons/md";

// Admin Imports
import Doctors from "views/admin/doctors";
import Scoliosis from "views/admin/scoliosis";
import Treatments from "views/admin/treatments";
import Chat from "views/admin/ChatBot";
import Precautions from "views/admin/precautions";

const routes = [
  {
    name: "Doctors",
    layout: "/admin",
    path: "/doctors",
    icon: (
      <Icon
        as={MdAccessibilityNew}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Doctors,
    secondary: true,
  },
  {
    name: "Scoliosis",
    layout: "/admin",
    path: "/scoliosis",
    icon: (
      <Icon
        as={MdAccessibilityNew}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Scoliosis,
    secondary: true,
  },
  {
    name: "Treatments",
    layout: "/admin",
    path: "/treatments",
    icon: (
      <Icon as={MdOutlineToday} width="20px" height="20px" color="inherit" />
    ),
    component: Treatments,
    secondary: true,
  },
  {
    name: "ChatBot",
    layout: "/admin",
    path: "/chatbot",
    icon: (
      <Icon as={MdOutlineToday} width="20px" height="20px" color="inherit" />
    ),
    component: Chat,
    secondary: true,
  },
  {
    name: "Precautions",
    layout: "/admin",
    path: "/precautions",
    icon: (
      <Icon as={MdOutlineToday} width="20px" height="20px" color="inherit" />
    ),
    component: Precautions,
    secondary: true,
  },
];

export default routes;
