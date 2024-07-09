'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { RxAvatar } from 'react-icons/rx';
import { Table } from 'flowbite-react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useDebounce } from 'use-debounce';
import { fetchUser } from '@/helpers/fetchUser';
import { TUser } from '@/models/user';
import Link from 'next/link';
type Props = {};

const Users = (props: Props) => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<TUser[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [value] = useDebounce(search, 1000);

  useEffect(() => {
    async function getUsers() {
      try {
        const user = await fetchUser(page, limit, value);
        setUsers(user.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [page, limit, value]);

  const isLastPage = users.length < limit;

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
                  value={search}
                  className="bg-[#F4F7FE] rounded-full pl-5 py-1 font-dm-sans text-14px"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Link
                  href={'/dashboard/admin/addAdmin'}
                  className="bg-[#F4F7FE] px-3 text-[#2B3674] font-dm-sans text-14px font-bold rounded-full flex items-center "
                >
                  +Store Admin
                </Link>
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
              <Table.Body className="divide-y">
                {Array.isArray(users) && users.length > 0 ? (
                  users.map((user, index) => {
                    return (
                      <Table.Row key={user.id} className="bg-white">
                        <Table.Cell>{index + 1}</Table.Cell>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>-</Table.Cell>
                        <Table.Cell className="font-medium text-red-600">
                          Delete
                        </Table.Cell>
                        <Table.Cell className="font-medium text-green-600">
                          Edit
                        </Table.Cell>
                      </Table.Row>
                    );
                  })
                ) : (
                  <Table.Row className="bg-white">
                    <Table.Cell colSpan={6} className="text-center">
                      No users found.
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
          <div className="flex justify-center items-center gap-5 pt-10">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className={`flex items-center font-bold gap-1  px-5 py-1 rounded-full ${page === 1 ? 'bg-gray-400 text-gray-200' : 'bg-[#11047A] text-white'}`}
            >
              <MdNavigateBefore /> Prev
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={isLastPage}
              className={`flex items-center font-bold gap-1 px-5 py-1 rounded-full ${isLastPage ? 'bg-gray-400 text-gray-200' : 'bg-[#11047A] text-white'}`}
            >
              Next <MdNavigateNext />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
