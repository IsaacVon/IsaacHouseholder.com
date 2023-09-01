import chtSmall from '../assets/companyImages/cht_small.png';
import chtMedium from '../assets/companyImages/cht_medium.png';
import karmaSmall from '../assets/companyImages/karma_small.png';
import karmaMedium from '../assets/companyImages/karma_medium.png';
import bournsSmall from '../assets/companyImages/bourns_small.png';
import bournsMedium from '../assets/companyImages/bourns_medium.png';
import dougansSmall from '../assets/companyImages/dougans_small.png';
import dougansMedium from '../assets/companyImages/dougans_medium.png';
import betterMedium from '../assets/companyImages/better_medium.png';
import ownupMedium from '../assets/companyImages/ownup_medium.png';
import aiInteractionsMedium from '../assets/companyImages/aiInteractions_medium.png';

const jobs = [
  {
    companyName: 'Ai Interactions',
    image: {
      small: aiInteractionsMedium,
      medium: aiInteractionsMedium,
    }, // Add your Ai Interactions logo URL here
    titleBackgroundColor: '#acb5ac9e',
    description:
      "Production-grade ai powered customer service solutions using OpenAI's APIs. Servers that cater to custom Knowledge bases for Language models like GPT-4. Hosted on AWS.",
    title: 'Founder (Jun 2023 - Present)',
    overlayColor: 'white',
    details: [
      "Production-grade ai powered customer service solutions using OpenAI's APIs.",
      'Servers that cater to custom Knowledge bases for Language models like GPT-4. Hosted on AWS.',
    ],
  },
  {
    companyName: 'Own Up',
    image: {
      small: ownupMedium,
      medium: ownupMedium,
    }, // Add your Own Up logo URL here
    titleBackgroundColor: '#347751',
    description:
      'Worked on a full-stack team with a modern tech stack. Made over 450 contributions to various software development projects.',
    title: 'Software Engineer (Jun 2022 - May 2023)',
    overlayColor: 'black',
    details: [
      'Worked on a full-stack team with a modern tech stack.',
      'Made over 450 contributions to various software development projects.',
      'Integrated GitHub Actions and Playwright testing with AWS.',
    ],
  },
  {
    companyName: 'Better',
    image: {
      small: betterMedium,
      medium: betterMedium,
    }, // Add your Better logo URL here
    titleBackgroundColor: '#347751',
    description:
      'Acted as one of the primary engineering contacts for a 15+ member product support team.',
    title: 'Product Technical Support Engineer (Apr 2021 - May 2022)',
    overlayColor: 'black',
    details: [
      'Acted as one of the primary engineering contacts for a 15+ member product support team.',
      'Collaborated to implement new workflows for routing incoming product support tickets.',
      'Worked cross-functionally to resolve issues and improve internal efficiency.',
    ],
  },
  {
    companyName: 'California Home Team',
    image: {
      small: chtSmall,
      medium: chtMedium,
    }, // Add your California Home Team image URL here
    titleBackgroundColor: '#8A7B92',
    description:
      'California Home Team is a small real estate company that has been very successful in the real estate business for over 30 years. They specialize in orange county homes.',
    title: 'Real Estate Consultant (2019 - Current)',
    overlayColor: 'white',
    details: [
      'Work with investors to purchase investment properties.',
      'Created HawaiiLavaZones.com for online lead generation.',
      'Purchase Contract negotiation.',
      'Online Advertising.',
      'Holding open houses and advertising for the event.',
      'Staying up to date on market conditions and trends. (Interest rates, prices, supply/demand).',
      'Lead generation (In-Person, Internet, phone, and email).',
      'Working with existing customers to help them find homes.',
      'Holding open houses.',
    ],
  },
  {
    companyName: 'Karma Automotive',
    image: {
      small: karmaSmall,
      medium: karmaMedium,
    }, // Add your Karma Automotive image URL here
    titleBackgroundColor: '#bbc4c7',
    description:
      'Karma is a design and manufacturer of high-class luxury hybrid cars designed to continually challenge the market for the sustainable future of luxury cars.',
    title: 'Vehicle Integration and Validation Engineer (2019-2019)',
    overlayColor: 'white',
    details: [
      'Managed multiple projects with cross-functional design engineering teams and managers to ensure the vehicle meets critical targets.',
      'Correlated between marketing, senior management, and design studio, accessing the feasibility of producing features against customer requirements and exceeding those expectations where viable based on cost and manufacturability.',
      'Responsible for overseeing an average of 15 projects simultaneously, which resulted in an overall 90% completion rate to set targets.',
    ],
  },
  {
    companyName: 'Bourns Electronics',
    image: {
      small: bournsSmall,
      medium: bournsMedium,
    }, // Add your Bourns Electronics image URL here
    titleBackgroundColor: '#6490ac',
    description:
      'Bourns is an electronics company that develops, manufactures, and supplies electronic components to various industries, including automotive, industrial, instrumentation, medical electronics, consumer equipment, and portable electronics.',
    title: 'Electronics Engineer (Internship Summer 2015)',
    overlayColor: 'white',
    details: [
      'Programmed an Arduino to process multiple analog inputs to output a stable and consistent digital reading.',
      'Designed using Autodesk Inventor, 3D printed, and tested air actuated linear rail systems, participating in general troubleshooting during the entire design process.',
      'Assisted in the design of a CNC soldering machine, which was implemented into the production process.',
    ],
  },
  {
    companyName: 'Dougans Racing',
    image: {
      small: dougansSmall,
      medium: dougansMedium,
    }, // Add your Dougans Racing image URL here
    titleBackgroundColor: '#c7c7bb',
    description:
      'Dougans is a racing engine building business and machine shop. They primarily operate with trophy trucks that race in the Baja 1000 sector.',
    title: 'Dyno Technician (2010-2015)',
    overlayColor: 'white',
    details: [
      'Coordinate between various machinists and technicians preparing racing engines for final assembly.',
      "Trained new employees regarding technical work to be performed, covering each phase's importance for a full understanding of the process infrastructure through each stage.",
    ],
  },
  // Continue adding other jobs with the same structure
];

export default jobs;
