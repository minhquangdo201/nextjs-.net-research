using server.Models;

namespace server.Services{
    public interface IStaffService{
        Task<List<Staff>> GetStaffs();
        Task<Staff> GetStaff(Guid id);
        Task<Staff> CreateStaff(Staff staff);
        Task<Staff> DeleteStaff(Guid id);
        Task<Staff> UpdateStaff(Guid id, UpdateStaffModel staff);
    }
}