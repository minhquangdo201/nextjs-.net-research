using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Services
{
    public class StaffService : IStaffService
    {
        private readonly ApplicationDbContext context;

        public StaffService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<List<Staff>> GetStaffs()
        {
            return await context.Staffs.ToListAsync();
        }

        public async Task<Staff> GetStaff(Guid id)
        {
            Staff staff = await context.Staffs.FirstOrDefaultAsync(x => x.id == id);
            if (staff == null)
            {
                return null;
            }
            return staff;
        }

        public async Task<Staff> CreateStaff(Staff staff)
        {
            staff.id = Guid.NewGuid();
            context.Staffs.Add(staff);
            await context.SaveChangesAsync();
            return staff;
        }

        public async Task<Staff> DeleteStaff(Guid id)
        {
            var staff = await context.Staffs.FirstOrDefaultAsync(x => x.id == id);
            if (staff == null)
            {
                return null;
            }
            context.Staffs.Remove(staff);
            await context.SaveChangesAsync();
            return staff;
        }

        public async Task<Staff> UpdateStaff(Guid id, UpdateStaffModel staff)
        {
            var staffToUpdate = await context.Staffs.FirstOrDefaultAsync(x => x.id == id);
            if (staffToUpdate == null)
            {
                return null;
            }
            staffToUpdate.name = staff.name;
            staffToUpdate.email = staff.email;
            staffToUpdate.dob = staff.dob;
            staffToUpdate.phone = staff.phone;
            staffToUpdate.address = staff.address;
            staffToUpdate.role = staff.role;
            await context.SaveChangesAsync();
            return staffToUpdate;
        }
    }
}