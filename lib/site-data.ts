export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const siteConfig = {
  name: "Leo Club of Kathmandu Myagdi Youth",
  shortName: "LCKMY",
  tagline: "Young leaders. Meaningful service. Lasting impact.",
  motto: "RISE • REACH • REDEFINE",
  established: 2023,
  affiliation: "Leo District Council 325L, Nepal",
  sponsoredClub: process.env.NEXT_PUBLIC_SPONSORED_CLUB ?? "[SPONSORING CLUB NAME]",
  joinFormUrl: process.env.NEXT_PUBLIC_JOIN_FORM_URL ?? "",
  donationDetails: {
    bankName: "",
    accountName: "",
    accountNumber: "",
    branch: "",
    qrImageUrl: "",
    esewa: "",
    khalti: "",
  },
  meta: {
    title: "Leo Club of Kathmandu Myagdi Youth",
    description:
      "Youth-led service organization focused on leadership, community impact, and meaningful action for a better Nepal.",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
  },
};

export const navigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Projects & Events", href: "/projects-events" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "News", href: "/news" },
      { label: "Gallery", href: "/gallery" },
      { label: "Documents", href: "/documents" },
    ],
  },
  { label: "Donate", href: "/donate" },
  { label: "Join Us", href: "/join" },
];

export const impactStats = [
  { value: "25+", label: "Projects Completed" },
  { value: "150+", label: "Volunteers" },
  { value: "1000+", label: "People Reached" },
  { value: "3+", label: "Years of Service" },
];

export const pillars = [
  {
    name: "RISE",
    title: "Leadership",
    description: "Developing confident, responsible and compassionate young leaders.",
  },
  {
    name: "REACH",
    title: "Service",
    description: "Connecting with communities and turning compassion into meaningful action.",
  },
  {
    name: "REDEFINE",
    title: "Impact",
    description: "Creating innovative approaches to the challenges around us.",
  },
];

export const serviceAreas = [
  "Community Service",
  "Health & Wellness",
  "Education",
  "Environment",
  "Youth Development",
  "Relief & Humanitarian Support",
  "Leadership Development",
  "Fellowship",
];

export const projects = [
  {
    slug: "blood-donation-campaign",
    title: "Blood Donation Campaign",
    category: "Health & Wellness",
    date: "2026-03-11",
    location: "Kathmandu",
    excerpt:
      "A community-led blood donation drive to support emergency medical needs and strengthen local health resilience.",
    impact: "120+ units collected",
  },
  {
    slug: "community-clean-up-drive",
    title: "Community Clean-up Drive",
    category: "Environment",
    date: "2025-11-06",
    location: "Myagdi",
    excerpt:
      "Neighborhood waste reduction and environmental awareness campaign led by youth volunteers.",
    impact: "300 households reached",
  },
  {
    slug: "youth-leadership-retreat",
    title: "Youth Leadership Retreat",
    category: "Leadership Development",
    date: "2025-08-18",
    location: "Pokhara",
    excerpt:
      "A collaborative leadership learning experience for emerging young leaders and volunteers.",
    impact: "45 participants",
  },
];

export const events = [
  {
    slug: "school-mental-health-awareness",
    title: "School Mental Health Awareness",
    status: "Upcoming",
    date: "2026-09-20",
    time: "10:00 AM",
    location: "Myagdi Community Hall",
    excerpt: "A youth-led initiative to promote mental wellbeing and peer support in schools.",
  },
  {
    slug: "winter-relief-distribution",
    title: "Winter Relief Distribution",
    status: "Ongoing",
    date: "2026-01-15",
    time: "9:00 AM",
    location: "District Coordination Office",
    excerpt: "Support distribution for families facing seasonal hardships and vulnerable conditions.",
  },
  {
    slug: "volunteer-orientation-2026",
    title: "Volunteer Orientation 2026",
    status: "Completed",
    date: "2025-12-04",
    time: "2:00 PM",
    location: "Kathmandu",
    excerpt: "A welcoming orientation for new volunteers and community partners.",
  },
];

export const newsItems = [
  {
    slug: "from-volunteer-to-leader",
    title: "From Volunteer to Leader",
    category: "Stories",
    date: "2026-08-22",
    author: "Team LCKMY",
    excerpt: "One volunteer’s journey from local service to grassroots leadership.",
  },
  {
    slug: "community-initiative-launch",
    title: "Community Initiative Launch",
    category: "Announcements",
    date: "2026-07-14",
    author: "Executive Board",
    excerpt: "The club expands support for youth-led service projects across the district.",
  },
  {
    slug: "impact-report-2025-26",
    title: "Impact Report 2025-26",
    category: "Achievements",
    date: "2026-06-02",
    author: "Impact Team",
    excerpt: "A snapshot of the projects, people reached, and stories shaped by our volunteers.",
  },
];

export const teamMembers = [
  { name: "[President Name]", position: "President", bio: "Leadership and community partnership overview pending approval." },
  { name: "[Vice President Name]", position: "Vice President", bio: "Supporting member engagement and strategic service delivery." },
  { name: "[Secretary Name]", position: "Secretary", bio: "Coordinating communication, documentation and club operations." },
];

export const galleryAlbums = [
  { title: "Service Campaigns", category: "Service", cover: "https://images.unsplash.com/..." },
  { title: "Leadership Events", category: "Leadership", cover: "https://images.unsplash.com/..." },
  { title: "Community Fellowship", category: "Fellowship", cover: "https://images.unsplash.com/..." },
];

export const documents = [
  { title: "Annual Report 2025-26", category: "Annual Reports", year: 2026 },
  { title: "Project Brief - Winter Relief", category: "Project Reports", year: 2025 },
  { title: "Volunteer Newsletter", category: "Newsletters", year: 2025 },
];

export const donationCampaigns = [
  {
    slug: "winter-relief-campaign",
    title: "Winter Relief Campaign",
    target: 100000,
    raised: 62500,
    description: "Providing essential support to families facing seasonal hardship and emergencies.",
    beneficiaries: "Local families in need",
    status: "Active",
  },
  {
    slug: "education-support-fund",
    title: "Education Support Fund",
    target: 80000,
    raised: 43000,
    description: "Supporting access to learning resources and educational opportunities for youth.",
    beneficiaries: "Students and youth participants",
    status: "Active",
  },
];

export const impactStories = [
  { title: "From Volunteer to Leader", story: "A member’s journey from volunteering to organizing service campaigns." },
  { title: "A Day With the Elders", story: "An outreach initiative that brought comfort, companionship and care to senior citizens." },
  { title: "The Story Behind Our Community Campaign", story: "How a response to local need became a movement of youth-led action." },
];

export const notices = [
  "Membership applications are now open for the next service cycle.",
  "Join us for our upcoming volunteer orientation and leadership meetup.",
];

export const legacyTimeline = [
  { year: "2023", title: "Established", description: "Leo Club of Kathmandu Myagdi Youth began with a commitment to service and leadership." },
  { year: "2024-25", title: "Leadership", description: "Expanded youth outreach and strengthened district-community partnerships." },
  { year: "2025-26", title: "Growth", description: "Continued expansion through projects, grants, volunteer mobilization and impact stories." },
];
