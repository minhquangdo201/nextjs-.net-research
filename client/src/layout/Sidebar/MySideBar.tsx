"use client";

import React, { useState } from 'react';
import { SideBar, SideBarItem } from './SideBar';
import Link from 'next/link'; // For Next.js routing
import { BsFillPeopleFill } from 'react-icons/bs'; // Assuming Bootstrap icons
import { useActiveContext } from './ActiveContext';

const MySideBar = () => {

  const { active, handleItemClick } = useActiveContext();
  return (
    <SideBar>
      <Link href="/staff">
        <SideBarItem
          text="Staff"
          icon={<BsFillPeopleFill size={20} />}
          active={active[0]} // Set active based on path or state
          onClick={() => handleItemClick(0)}
        />
      </Link>
    </SideBar>
  );
}

export default MySideBar;