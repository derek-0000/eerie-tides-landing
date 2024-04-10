const teamMembersTop = [
  {
    name: "Ivan Lua",
    position: "Game Developer",
    image: "https://avatars.githubusercontent.com/u/71847983?v=4",
  },
  {
    name: "Derek Alvarado",
    position: "Music Producer",
    image:
      "https://media-dfw5-2.cdn.whatsapp.net/v/t61.24694-24/417065052_399587009533028_5320411093734619725_n.jpg?ccb=11-4&oh=01_ASAPk1TdywG-cMMH-syXDJbozJYnUA3vOLAV_Dbn0Lm0_A&oe=66231D23&_nc_sid=e6ed6c&_nc_cat=106",
  },
  {
    name: "Salvador Perez",
    position: "Game Developer",
    image: "https://avatars.githubusercontent.com/u/134955611?v=4",
  },
  {
    name: "Jonatan Caleb",
    position: "Game Developer",
    image: "https://avatars.githubusercontent.com/u/71664858?v=4",
  },
  {
    name: "Carlos Salazar",
    position: "Game Developer",
    image: "https://avatars.githubusercontent.com/u/80538989?v=4",
  },
];
const teamMembersBottom = [
  {
    name: "Carlos Acosta",
    position: "Game Developer",
    image: "https://avatars.githubusercontent.com/u/71846585?v=4",
  },
  {
    name: "Mauricio Ruiz",
    position: "Graphic Designer",
    image:
      "https://media-dfw5-2.cdn.whatsapp.net/v/t61.24694-24/425016303_1363126774369231_137642594200464304_n.jpg?ccb=11-4&oh=01_ASBJi73_1c4DzfvJRig4WhPBW4WivTFSGpMAAZPPrh7dOQ&oe=661B0366&_nc_sid=e6ed6c&_nc_cat=106",
  },
  {
    name: "Omar Ramos",
    position: "Story Designer",
    image:
      "https://media-dfw5-2.cdn.whatsapp.net/v/t61.24694-24/426180734_751318329965227_476812138117648195_n.jpg?ccb=11-4&oh=01_ASC7-rKkAkmhEISsd0eyQUqRv70iBiyswE-m2HfaSKY9Vg&oe=6620350A&_nc_sid=e6ed6c&_nc_cat=101",
  },
  {
    name: "Andres Villa",
    position: "Graphic Designer",
    image: "https://avatars.githubusercontent.com/u/134955611?v=4",
  },
];

export default function TeamMembers() {
  return (
    <div className="w-[100%]">
      <div className="mb-4 mt-4 flex gap-2 team-member-row justify-center">
        {teamMembersTop.map((member) => (
          <div key={member.name} className="teammember-card w-48 shrink-0">
            <img
              src={member.image}
              className="grayscale saturate-100 contrast-125"
            />
            <div className="flex flex-col text-black bg-white ">
              <div className="text-4xl">{member.name}</div>
              <div className="text-2xl">{member.position}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-4 flex gap-2 team-member-row justify-center">
        {teamMembersBottom.map((member) => (
          <div key={member.name} className="teammember-card w-48 shrink-0">
            <img
              src={member.image}
              className="grayscale saturate-100 contrast-125"
            />
            <div className="flex flex-col text-black bg-white ">
              <div className="text-4xl">{member.name}</div>
              <div className="text-2xl">{member.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
