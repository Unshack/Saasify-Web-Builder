"use client";

import {
  AgencySidebarOption,
  SubAccount,
  SubAccountSidebarOption,
} from "@prisma/client";
import React from "react";

type Props = {
  defaultOpen?: boolean;
  subAccount: SubAccount[];
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[];
  sidebarLogo: string;
  details: any;
  user: any;
  id: string;
};

const MenuOptions = ({
  details,
  id,
  sidebarLogo,
  sidebarOpt,
  subAccount,
  user,
  defaultOpen,
}: Props) => {
  return <div>MenuOptions</div>;
};

export default MenuOptions;
