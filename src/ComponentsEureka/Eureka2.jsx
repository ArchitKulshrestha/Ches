const eurekaB = [
  {
    team: "Corrosion Saviors",
    statement:
      "Optimisation And Enhancement Of Drying Oil(Linseed Oil ) Based Corrosion Resistant Self-Healing Coating Encapsulated By Graphene Oxide",
    solution:
      "The direct economic cost for Corrosion mitigation include the costs for labour and preparation of Coating or any traditional method of Corrosion mitigation while, there are also a large number of indirect economic costs associated with corrosion, which include plant downtime, loss of product, loss of efficiency, contamination and overdesign. These costs are harder to estimate and they may even have a larger impact than direct costs. Besides economic costs, corrosion also takes a significant toll on human life and safety. Self-healing technologies which heal either autonomously or by applying some external conditions could significantly increase material/system reliability, reduce life cycle costs, and improve operational safety. Our main goal through the project is to study and work for the commercialization of the coating, improvements in terms of Cost, increment in healing Cycles, betterment in scratch resistance and in minimizing the harmful effects on Environment and Health.",
  },

  {
    team: "SWAS",
    statement: "Solid Waste Treatment",
    solution:
      "No company or organisation is 100% efficient. it will generate waste .The key is to treat the waste as a resource. The lands on which waste is disposed off can be used for waste treatment plants. Municipal corporation is not doing its work properly. Of the total collected waste only 20% is treated and remaining 80% is dumped off either on lands rivers or lakes creating air pollution,water pollution and even death causing diseases. Using modern technologies such as pyrolysis reactor, cyclone separator, quencher we can generate fuel,heat, electricity,char and many other useful by-products. Even the volume and toxicity of waste could be reduced.",
  },

  {
    team: "Three Strings",
    statement: "Plastic to Fuel",
    solution:
      "The Problems About Plastics Are Evident And The Damage It Is Causing By Sitting In Land Fills And By Being Uncollected Doesn't Seem To Stop. We, The Students By The Help Of Our Mentor Want To Overcome This Situation To A Large Extent By Providing A Value To Non Recycled Plastic Through The Process Of Pyrolysis And Converting Them To Fuel.",
  },
  {
    team: "Power9",
    statement:
      "Graphene Oxide: A promising Nano-material for energy and Environmental applications.",
    solution:
      "Graphene is a useful nano-material for environmental applications and in recent times the pollution level is increasing which is really harmful for the environment. the surface functional groups like hydroxyl, Epoxy etc. make Graphene oxide an excellent candidate in coordinating with other materials or molecules.",
  },
  {
    team: "Novo Rudolfs",

    statement: "Innovation in Biodiesel production",
    solution:
      "Synthesis and characterization of biodiesel from waste cooking oil. We will be testing for various properties of synthesised oil And other blends. Proposal of an improved catalytic method for the production And emission reduction.",
  },
  {
    team: "Petrochemical",
    statement: "Methanol Based Fuel.",
    solution:
      "Methanol Based Economy as suggest by Niti Aayog is considered as future fuel by Eliminating some defects and Quality Control To check effects and various properties of fuel on environment and methods of producing methanol from various process is the topic to look on with a detail Research on fuels pre and post process conduct in industries.",
  },
  {
    team: "Inquisitive",
    statement: "Electric car batteries",
    solution:
      "Optimization of battery technology in electric vehicles and their Implementation in india description: the latest developments in battery technology and their Applications in EVs . the various ways this technolgy can be implemented in our country .",
  },
  {
    team: "Mindbenders",
    statement: "ElectroStatic Precipetator",
    solution:
      "Excess of pollutants released in the atmosphere from chimneys is a major cause of air pollution these days. To overcome this, we use an Electrostatic Precipitator (ESP) that filters out dust and smoke, from a flowing gas using electrostatic forces. ESP aims to achieve a high dust collection efficiency. The problem lies in fine particle collection and its re-entrainment prevention. For this, we are going to use a moving electrode ESP in which a rolling plate substitutes a fixed collection plate.",
  },
  {
    team: "SAS",
    statement: "Solid Waste Management",
    solution:
      "Rivers in India have great mythological significance and are meant to be clean and pure as it is a life source for all living being. We have not been able to maintain their purity, cleanliness and their physical well-being.An alarming 80% of India's surface water is polluted, according to the latest assessment by Water Aid. So, There are many innovative ideas; one of them is Mr. Trash Wheel. As it collects solid plastic waste from the surface of river and is eco friendly.",
  },
  {
    team: "Innovation charmers",
    statement: "Vector surveillance",
    solution: "To build a prototype for efficient vector surveillance",
  },
  {
    team: "Petro-techno",
    statement: "Analysis and stimulation",
    solution:
      "Analysis and Simulation of Chemical Reactions for Obtaining Dodecil-Benzene From N-Dodecane as an Alternative to Kerosene",
  },
];

function Eureka2() {
  return (
    <>
      <section className="bg-background-950">
        <h1 className="text-[40px] md:text-[65px] pt-[6rem] mb-5 px-3 text-center font-bold">
          Eureka 2.0 Archives
        </h1>

        <div className="grid grid-cols-1 w-[80%]  gap-7 mx-auto">
          {eurekaB.map((eureka, index) => (
            <div
              className=" h-auto p-6 hover:shadow-lg hover:shadow-text-500/60 backdrop-blur-[10px] rounded-xl bg-background-900/70 flex flex-col items-center md:w-auto "
              key={index}>
              <h1 className="text-xl font-bold">{eureka.team}</h1>
              <p className="text-center mt-3 font-semibold">
                {eureka.statement}
              </p>
              <p className="text-left text-sm mt-3">{eureka.solution}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Eureka2;
