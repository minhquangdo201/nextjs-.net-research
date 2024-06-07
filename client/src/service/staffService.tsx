import axios from "axios";

export interface Staff {
    id: string,
    name: string,
    email: string,
    dob: string,
    phone: string,
    address: string,
    role: string
}

export const createStaff = async (staff: Staff): Promise<void> => {
    try {
        await axios.post("http://localhost:5212/api/staff", staff);
    }
    catch (error) {
        console.error(error);
    }

}

export const getStaffs = async (): Promise<Staff[]> => {
    try {
        const response = await axios.get("http://localhost:5212/api/staff");
        return response.data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export const getStaffById = async (id: string): Promise<Staff> => {
    try {
        const response = await axios.get(`http://localhost:5212/api/staff/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
        return {} as Staff;
    }
}

export const updateStaff = async (id: string, staff: Staff): Promise<void> => {
    try {
        await axios.put(`http://localhost:5212/api/staff/${id}`, staff);
    }
    catch (error) {
        console.error(error);
    }
}

export const deleteStaff = async (id: string): Promise<void> => {
    try {
        await axios.delete(`http://localhost:5212/api/staff/${id}`);
    }
    catch (error) {
        console.error(error);
    }
}