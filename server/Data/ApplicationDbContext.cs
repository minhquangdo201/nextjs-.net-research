using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data{
    public class ApplicationDbContext : DbContext {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Staff> Staffs { get; set; }
    }
}