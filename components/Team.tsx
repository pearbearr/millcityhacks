// pages/team.js
const teamMembers = [
  {
    name: 'Member One',
    role: 'Role One',
    bio: 'This is a generic bio for Member One.',
    image: '/images/member1.jpg', // Placeholder image path
  },
  {
    name: 'Member Two',
    role: 'Role Two',
    bio: 'This is a generic bio for Member Two.',
    image: '/images/member2.jpg', // Placeholder image path
  },
  {
    name: 'Member Three',
    role: 'Role Three',
    bio: 'This is a generic bio for Member Three.',
    image: '/images/member3.jpg', // Placeholder image path
  },
  {
    name: 'Member Four',
    role: 'Role Four',
    bio: 'This is a generic bio for Member Four.',
    image: '/images/member4.jpg', // Placeholder image path
  },
  {
    name: 'Member Five',
    role: 'Role Five',
    bio: 'This is a generic bio for Member Five.',
    image: '/images/member5.jpg', // Placeholder image path
  },
  {
    name: 'Member Six',
    role: 'Role Six',
    bio: 'This is a generic bio for Member Six.',
    image: '/images/member6.jpg', // Placeholder image path
  },
];

const Team = () => {
  return (
    <div className="container mx-auto text-center p-5">
      <h1 className="text-3xl font-bold mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-lg p-5">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <h3 className="text-md text-gray-500">{member.role}</h3>
            <p className="text-gray-700 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
