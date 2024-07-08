'use client';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { RxAvatar } from 'react-icons/rx';
import { Table } from 'flowbite-react';

type Props = {};

const Users = (props: Props) => {
  return (
    <>
      <section className="bg-[#F4F7FE] flex w-full top-[49px] left-[290px]">
        <Sidebar />
        <div className="py-6 px-10 w-full">
          <div className="flex justify-between items-center">
            {/* ini dikiri */}
            <div>
              <div className="font-dm-sans text-base font-medium leading-6 text-left text-[#707EAE]">
                Dashboard/users
              </div>
              <div className="font-dm-sans text-display-small font-bold text-left">
                Users
              </div>
            </div>
            {/* ini dikanan */}
            <div className="flex items-center gap-10 bg-white px-10 py-2 rounded-full">
              <div className="flex gap-5 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#F4F7FE] rounded-full pl-5 py-1 font-dm-sans text-14px"
                />
                <button className="bg-[#F4F7FE] px-3 text-[#2B3674] font-dm-sans text-14px font-bold rounded-full">
                  +User
                </button>
              </div>
              <div>
                <RxAvatar className="h-7 w-7" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto pt-5">
            <Table>
              <Table.Head>
                <Table.HeadCell>no</Table.HeadCell>
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>email</Table.HeadCell>
                <Table.HeadCell>store loc</Table.HeadCell>
                <Table.HeadCell className="sr-only">
                  <span>delete</span>
                </Table.HeadCell>
                <Table.HeadCell className="sr-only">
                  <span>edit</span>
                </Table.HeadCell>
              </Table.Head>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
