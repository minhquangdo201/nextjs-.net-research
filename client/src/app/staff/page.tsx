"use client";

import Modal from "@/common/Modal/ModalContainer";
import {
  Staff,
  deleteStaff,
  getStaffs,
  getStaffById,
  updateStaff,
  createStaff,
} from "@/service/staffService";
import { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

export default function StaffPage() {

  const [staffId, setStaffId] = useState<string>("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [staffs, setStaffs] = useState<Staff[]>([]);
  const [staff, setStaff] = useState<Staff>({} as Staff);

  useEffect(() => {
    const fetchData = async () => {
      const staffs = await getStaffs();
      setStaffs(staffs);
    };
    fetchData();
  }, []);
  const createStaffInfo = async () => {
    try {
      await createStaff(staff);
      setIsOpenAddModal(false);
      setStaffs(await getStaffs());
      setStaff({} as Staff);
    } catch (error) {
      console.error("Failed to create staff", error);
    }
  };

  const getDeteleId = (id: string) => {
    setStaffId(id);
    setIsOpenDeleteModal(true);
  };

  const handleOnCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
    setStaff({} as Staff);
  };

  const handleOnCloseUpdateModal = () => {
    setIsOpenUpdateModal(false);
    setStaff({} as Staff);
  };

  const handleOnCloseCreateModal = () => {
    setIsOpenAddModal(false);
    setStaff({} as Staff);
  };

  const getUpdateId = async (id: string) => {
    setStaffId(id);
    const staff = await getStaffById(id);
    setStaff(staff);
    setIsOpenUpdateModal(true);
  };

  const handleUpdateStaff = async () => {
    try {
      await updateStaff(staffId, staff);
      setStaffs(await getStaffs());
      setIsOpenUpdateModal(false);
    } catch (error) {
      console.error("Failed to update staff", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteStaff(staffId);
      const updatedStaffs = await getStaffs();
      setStaffs(updatedStaffs);
      const totalPages = Math.ceil(updatedStaffs.length / itemsPerPage);
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
      setIsOpenDeleteModal(false);
    } catch (error) {
      console.error("Failed to delete staff", error);
    }
  };

  const dobTransform = (dob: string) => {
    const date = new Date(dob);
    return date.toLocaleDateString();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = staffs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(staffs.length / itemsPerPage);
  console.log(staffId);
  return (
    <div className="flex h-full w-full">
      <main className="w-full my-10 ">
        <div className="flex justify-center ">
          <div className="w-full max-w-6xl">
            <div className="flex justify-end">
              <button
                className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3 "
                onClick={() => setIsOpenAddModal(true)}
              >
                Add new
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-3 w-1/12">Id</th>
                    <th className="px-6 py-3 w-1/12">Name</th>
                    <th className="px-6 py-3 w-4/12">Email</th>
                    <th className="px-6 py-3 w-1/12">DOB</th>
                    <th className="px-6 py-3 w-1/12">Phone</th>
                    <th className="px-6 py-3 w-1/12">Address</th>
                    <th className="px-6 py-3 w-1/12">Role</th>
                    <th className="px-6 py-3 w-3/12">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((staff, index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <td className="px-6 py-3">
                        {indexOfFirstItem + index + 1}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {staff.name}
                      </td>
                      <td className="px-6 py-3 w-4/12">{staff.email}</td>
                      <td className="px-6 py-3 w-1/12">
                        {dobTransform(staff.dob)}
                      </td>
                      <td className="px-6 py-3 w-1/12">{staff.phone}</td>
                      <td className="px-6 py-3 w-1/12">{staff.address}</td>
                      <td className="px-6 py-3 w-1/12">{staff.role}</td>
                      <td className="px-6 py-3 w-3/12 flex">
                        <button
                          className="text-xl mx-1 text-green-700"
                          onClick={() => getUpdateId(staff.id)}
                        >
                          <BsPencilSquare />
                        </button>
                        <button
                          className="text-xl mx-1 text-red-800"
                          onClick={() => getDeteleId(staff.id)}
                        >
                          <BsTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center">
                <div className="w-72 flex justify-between mt-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="self-center">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal
        title="Delete Item"
        isOpen={isOpenDeleteModal}
        onClose={() => handleOnCloseDeleteModal()}
        saveText={"Delete"}
        onSave={() => handleDelete()}
      >
        <span>Are you sure want to delete ?</span>
      </Modal>

      <Modal
        title="Update Info"
        isOpen={isOpenUpdateModal}
        onClose={() => handleOnCloseUpdateModal()}
        saveText={"Save"}
        onSave={() => handleUpdateStaff()}
      >
        <div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.name}
              onChange={(e) => setStaff({ ...staff, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.email}
              onChange={(e) => setStaff({ ...staff, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              DOB
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              value={staff?.dob}
              onChange={(e) => setStaff({ ...staff, dob: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.phone}
              onChange={(e) => setStaff({ ...staff, phone: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.address}
              onChange={(e) => setStaff({ ...staff, address: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Role
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.role}
              onChange={(e) => setStaff({ ...staff, role: e.target.value })}
            />
          </div>
        </div>
      </Modal>

      <Modal
        title="Add Staff's Info"
        isOpen={isOpenAddModal}
        onClose={() => handleOnCloseCreateModal()}
        saveText={"Save"}
        onSave={() => createStaffInfo()}
      >
        <div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.name}
              onChange={(e) => setStaff({ ...staff, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.email}
              onChange={(e) => setStaff({ ...staff, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              DOB
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              value={staff?.dob}
              onChange={(e) => setStaff({ ...staff, dob: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.phone}
              onChange={(e) => setStaff({ ...staff, phone: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.address}
              onChange={(e) => setStaff({ ...staff, address: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Role
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={staff?.role}
              onChange={(e) => setStaff({ ...staff, role: e.target.value })}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
