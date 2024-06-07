namespace server.Models {
    public class Staff {
        public Guid id { get; set; }
        public string? name { get; set; }
        public string? email { get; set; }
        public DateOnly dob { get; set; }
        public string? phone { get; set; }
        public string? address { get; set; }
        public string? role { get; set; }
    }
}