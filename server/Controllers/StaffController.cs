using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers {

    [ApiController]
    [Route("api/[controller]")]
    public class StaffController : ControllerBase {
        private readonly IStaffService staffService;

        public StaffController(IStaffService staffService){
            this.staffService = staffService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Staff>>> GetStaffs(){
            return await staffService.GetStaffs();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Staff>> GetStaff(Guid id){
            return await staffService.GetStaff(id);
        }

        [HttpPost]
        public async Task<ActionResult<Staff>> CreateStaff(Staff staff){
            return await staffService.CreateStaff(staff);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Staff>> DeleteStaff(Guid id){
            return await staffService.DeleteStaff(id);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Staff>> UpdateStaff(Guid id, UpdateStaffModel staff){
            return await staffService.UpdateStaff(id, staff);
        }
    }
}