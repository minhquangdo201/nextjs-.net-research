using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            AddStaff(serviceProvider);
        }

        public static void AddStaff(IServiceProvider serviceProvider)
        {
            using var context = new ApplicationDbContext(serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>());
            if (context.Staffs.Any())
            {
                return;
            }

            context.Staffs.AddRange(
     new Staff
     {
         name = "John Doe",
         email = "johndoe@gmail.com",
         phone = "1234567890",
         address = "123 Main St",
         role = "Manager",
         dob = DateOnly.Parse("1990-01-01")
     },
     new Staff
     {
         name = "Jane Smith",
         email = "janesmith@gmail.com",
         phone = "2345678901",
         address = "234 Elm St",
         role = "Developer",
         dob = DateOnly.Parse("1991-02-02")
     },
     new Staff
     {
         name = "Mike Johnson",
         email = "mikejohnson@gmail.com",
         phone = "3456789012",
         address = "345 Oak St",
         role = "Tester",
         dob = DateOnly.Parse("1992-03-03")
     },
     new Staff
     {
         name = "Emily Davis",
         email = "emilydavis@gmail.com",
         phone = "4567890123",
         address = "456 Pine St",
         role = "HR",
         dob = DateOnly.Parse("1993-04-04")
     },
     new Staff
     {
         name = "David Wilson",
         email = "davidwilson@gmail.com",
         phone = "5678901234",
         address = "567 Maple St",
         role = "Designer",
         dob = DateOnly.Parse("1994-05-05")
     },
     new Staff
     {
         name = "Sarah Brown",
         email = "sarahbrown@gmail.com",
         phone = "6789012345",
         address = "678 Birch St",
         role = "Manager",
         dob = DateOnly.Parse("1995-06-06")
     },
     new Staff
     {
         name = "Chris Taylor",
         email = "christaylor@gmail.com",
         phone = "7890123456",
         address = "789 Cedar St",
         role = "Developer",
         dob = DateOnly.Parse("1996-07-07")
     },
     new Staff
     {
         name = "Amanda Martinez",
         email = "amandamartinez@gmail.com",
         phone = "8901234567",
         address = "890 Redwood St",
         role = "Tester",
         dob = DateOnly.Parse("1997-08-08")
     },
     new Staff
     {
         name = "Matthew White",
         email = "matthewwhite@gmail.com",
         phone = "9012345678",
         address = "901 Spruce St",
         role = "HR",
         dob = DateOnly.Parse("1998-09-09")
     },
     new Staff
     {
         name = "Jessica Anderson",
         email = "jessicaanderson@gmail.com",
         phone = "0123456789",
         address = "012 Willow St",
         role = "Designer",
         dob = DateOnly.Parse("1999-10-10")
     },
     new Staff
     {
         name = "Daniel Thomas",
         email = "danielthomas@gmail.com",
         phone = "1234567891",
         address = "123 Palm St",
         role = "Manager",
         dob = DateOnly.Parse("1990-11-11")
     },
     new Staff
     {
         name = "Laura Jackson",
         email = "laurajackson@gmail.com",
         phone = "2345678912",
         address = "234 Cypress St",
         role = "Developer",
         dob = DateOnly.Parse("1991-12-12")
     },
     new Staff
     {
         name = "Kevin Harris",
         email = "kevinharris@gmail.com",
         phone = "3456789123",
         address = "345 Poplar St",
         role = "Tester",
         dob = DateOnly.Parse("1992-01-13")
     },
     new Staff
     {
         name = "Karen Clark",
         email = "karenclark@gmail.com",
         phone = "4567891234",
         address = "456 Fir St",
         role = "HR",
         dob = DateOnly.Parse("1993-02-14")
     },
     new Staff
     {
         name = "Joshua Lewis",
         email = "joshualewis@gmail.com",
         phone = "5678912345",
         address = "567 Ash St",
         role = "Designer",
         dob = DateOnly.Parse("1994-03-15")
     },
     new Staff
     {
         name = "Stephanie Robinson",
         email = "stephanierobinson@gmail.com",
         phone = "6789123456",
         address = "678 Beech St",
         role = "Manager",
         dob = DateOnly.Parse("1995-04-16")
     },
     new Staff
     {
         name = "Ryan Walker",
         email = "ryanwalker@gmail.com",
         phone = "7891234567",
         address = "789 Sycamore St",
         role = "Developer",
         dob = DateOnly.Parse("1996-05-17")
     },
     new Staff
     {
         name = "Brittany King",
         email = "brittanyking@gmail.com",
         phone = "8901345678",
         address = "890 Chestnut St",
         role = "Tester",
         dob = DateOnly.Parse("1997-06-18")
     },
     new Staff
     {
         name = "Tyler Wright",
         email = "tylerwright@gmail.com",
         phone = "9013456789",
         address = "901 Linden St",
         role = "HR",
         dob = DateOnly.Parse("1998-07-19")
     },
     new Staff
     {
         name = "Megan Hill",
         email = "meganhill@gmail.com",
         phone = "0123567890",
         address = "012 Magnolia St",
         role = "Designer",
         dob = DateOnly.Parse("1999-08-20")
     }

 );
            context.SaveChanges();
        }
    }
}