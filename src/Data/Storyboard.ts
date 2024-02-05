type Story = { scene: string; content: string };
const CPF_STORYBOARD_DATA: Story[] = [
  {
    scene: "A working-class Singaporean family having dinner at home.",
    content: "Inflation is affecting people's cost of living in Singapore.",
  },
  {
    scene:
      "A mother struggling with groceries in a supermarket, looking concerned.",
    content: "The government's Budget 2023 aims to alleviate these concerns.",
  },
  {
    scene:
      "Mayumi Soh of Pinsent Masons MPillay explaining the measures in the Budget announcement",
    content: "New workplace family supportive policies are introduced",
  },

  {
    scene: "A father holding a newborn baby in their home.",
    content:
      "Paternity leave will be doubled from 2 weeks to 4 weeks starting 1 January 2024.",
  },
  {
    scene: "A mother caring for her baby at home.",
    content:
      "Unpaid infant care leave increased from 6 days to 12 days per year for each parent in a child's first two years.",
  },
  {
    scene: "A young family receiving a check in celebration of their new baby.",
    content: "Baby bonus cash gift increased by S$3,000 per eligible child.",
  },
  {
    scene: " A child standing in front of a CDA First Step Grant banner.",
    content: "CDA First Step Grant increased from S$3,000 to S$5,000.",
  },
  {
    scene: "A middle-aged couple discussing finances at their kitchen table.",
    content:
      "CPF monthly salary ceiling increased in stages to S$8,000 by 2026.",
  },
  {
    scene: "A senior couple holding hands, smiling at the camera.",
    content:
      "Minimum CPF monthly payout for seniors raised from S$250 to S$350, effective 1 June.",
  },
  {
    scene: "A young adult receiving a letter in the mail.",
    content:
      "One-time cost-of-living special payment distributed to eligible Singaporeans in June 2023.",
  },
  {
    scene: "A young couple visiting an open house for resale flats.",
    content:
      "Increased home grant of up to S$30,000 for first-time buyers of resale flats.",
  },
  {
    scene: "A family looking at a property with a real estate agent.",
    content:
      "Higher marginal buyer's stamp duty applied to properties purchased from 15 February, targeting higher-value properties.",
  },
  {
    scene:
      "A working-class family celebrating together at home, smiling at the camera.",
    content:
      " Singapore's government working to make life more affordable for families.",
  },
];

const HEALTHIER_SG_STORYBOARD_DATA: Story[] = [
  {
    scene: "Residents at a park exercising",
    content:
      "Regular exercise is important for maintaining health. Healthier SG encourages residents to lead an active lifestyle",
  },
  {
    scene: "Residents eating healthy meals at home",
    content:
      "Under Healthier SG, residents are encouraged to make healthier food choices.",
  },
  {
    scene: "Residents visiting a family doctor's clinic",
    content:
      " Residents will enroll with a family doctor for holistic health management.",
  },
  {
    scene:
      "Residents receiving nationally recommended screenings and vaccinations",
    content:
      "Healthier SG fully subsidizes these services for Singapore Citizens.",
  },
  {
    scene: "Residents discussing health plans with their family doctor",
    content:
      "The family doctor serves as the first point-of-contact for residents' health needs.",
  },
  {
    scene:
      "Residents using MediSave for chronic care management without co-payments",
    content:
      "Healthier SG waives part of residents' cash payments when using MediSave.",
  },
  {
    scene: "Residents at a community health event",
    content:
      "Healthier SG helps residents connect to various activities provided by community partners.",
  },
  {
    scene: "Residents participating in National Steps Challenge",
    content:
      "The challenge offers rewards for following health plans and leading active lifestyles.",
  },
  {
    scene: "Residents attending an Eldercare Centre workshop",
    content:
      "Additional support is provided for seniors through Healthier SG's enhanced Eldercare Centres.",
  },
  {
    scene: "Residents receiving social prescriptions from their family doctor",
    content:
      "Family doctors can recommend health-boosting community activities",
  },
  {
    scene: "Residents at a health workshop led by Health Promotion Board",
    content:
      "Healthier SG makes it easier for residents to access health information and resources.",
  },

  {
    scene:
      "Residents using Community Health Assist Scheme drug subsidy at a private GP clinic",
    content: " Subsidies make chronic disease management drugs more affordable",
  },
  {
    scene:
      "Residents celebrating improved health and quality of life under Healthier SG",
    content:
      "Healthier SG aims to prevent illness, delay health deterioration, and extend healthy life years.",
  },
  {
    scene: "Residents attending a community sports event",
    content:
      " Healthier SG supports residents in adopting healthier lifestyles through sports and activities.",
  },
  {
    scene: "Residents discussing their health plans with family members",
    content: "Healthier SG promotes family support for healthier lifestyles.",
  },
  {
    scene: " Residents receiving assistance at an Eldercare Centre",
    content:
      " Enhanced services at Eldercare Centres support seniors under Healthier SG.",
  },
  {
    scene:
      "Residents at a polyclinic receiving nationally recommended screenings and vaccinations",
    content: "Healthier SG makes essential health services more accessible.",
  },
  {
    scene:
      "Residents discussing their health plans and goals with their family doctor at annual check-ups",
    content:
      "Regular check-ups help residents stay on track with their health plans.",
  },
  {
    scene: "Residents shopping for healthier food options at a supermarket",
    content:
      "Healthier SG encourages residents to make healthier food choices at the grocery store",
  },
  {
    scene:
      "Residents at a community health fair learning about healthy lifestyle choices",
    content:
      "Healthier SG promotes awareness of healthy living through community events.",
  },
  {
    scene: "Residents engaging in group exercise classes at community centers",
    content:
      "Healthier SG supports residents in finding social support for healthy activities.",
  },
  {
    scene:
      "Residents celebrating their health achievements together in community settings",
    content: "Healthier SG fosters community support for healthier lifestyles.",
  },
];
export const STORYBOARD = {
  cpf: CPF_STORYBOARD_DATA,
  healthier_sg: HEALTHIER_SG_STORYBOARD_DATA,
};
