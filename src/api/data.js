import { reactive } from 'vue'

// Task data
export const tasks = reactive([
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Background context and your project team',
    status: 'active',
    difficulty: 'introductory',
    stars: 1,
    time: '15-30 mins',
    subtasks: [
      { id: 'company', title: 'About your company', active: false },
      { id: 'market', title: 'About the market', active: false },
      { id: 'team', title: 'About your team', active: false },
      { id: 'situation', title: 'About the situation', active: false },
    ],
  },
  {
    id: 'task1',
    title: 'Task 1: Financial Statement Analysis',
    description: '',
    status: 'pending',
    difficulty: 'intermediate',
    stars: 2,
    time: '2-3 hours',
    subtasks: [],
  },
  {
    id: 'task2',
    title: 'Task 2: Financial Ratio Calculation',
    description: '',
    status: 'pending',
    difficulty: 'intermediate',
    stars: 2,
    time: '2-3 hours',
    subtasks: [],
  },
  {
    id: 'task3',
    title: 'Task 3: Trend and Risk Identification',
    description: '',
    status: 'pending',
    difficulty: 'advanced',
    stars: 3,
    time: '4-5 hours',
    subtasks: [],
  },
])

// Team members data
export const teamMembers = reactive([
  {
    id: 'brian',
    name: 'Brian',
    role: 'Team Leader',
    avatar: 'https://placehold.co/200x200/4bc0c0/ffffff?text=B',
    messages: [
      {
        text: 'Hey Lily, I just forwarded you an email from the partner regarding the financial statement analysis. Can you check and let me know your approach?',
        sender: 'them',
      },
    ],
  },
  {
    id: 'anna',
    name: 'Anna',
    role: 'Manager',
    avatar: 'https://placehold.co/200x200/ff9f40/ffffff?text=A',
    messages: [],
  },
  {
    id: 'bert',
    name: 'Bert',
    role: 'Colleague',
    avatar: 'https://placehold.co/200x200/36a2eb/ffffff?text=B',
    messages: [],
  },
])

// Content for different sections
export const contentSections = reactive({
  company: {
    title: 'About your company',
    content: 'X is a world-renowned investment bank known for providing financial advisory services, asset management, and capital market solutions. The firm has a strong reputation for its analytical expertise and innovative financial strategies.',
  },
  market: {
    title: 'Market Overview',
    content: [
      {
        heading: 'MARKET OVERVIEW',
        icon: 'chart',
        text: 'The <strong>financial services</strong> industry <strong>handles money</strong> worldwide, and investment banking is a big part of it. <strong>Investment banks</strong> help companies <strong>raise cash, buy other businesses</strong>, or <strong>plan smart moves</strong>. The whole industry covers banks, insurance, stock markets, and tech apps, powering economies everywhere.',
      },
      {
        heading: 'MARKET SIZE AND GROWTH',
        icon: 'building',
        text: '<strong>Financial Services:</strong> Worth $30.9 trillion in 2023, expected to grow to $37.5 trillion by 2027 (7.5% yearly growth, DashDevs).<br><strong>Investment Banking:</strong> Its tech side is $165.91 billion in 2025, set to hit $307.43 billion by 2030 (13.13% growth, Mordor Intelligence).',
      },
      {
        heading: 'TOP PLAYERS',
        icon: 'chart-bar',
        text: 'JPMorgan Chase (U.S.) - Market cap ~$600 billion.<br>Berkshire Hathaway (U.S.) - Huge in insurance.<br>Goldman Sachs (U.S.) - Tops in deals.<br>Morgan Stanley (U.S.) - Strong in wealth.',
      },
    ],
  },
  team: {
    title: 'Your team at X',
    content: [
      {
        heading: 'TEAM OVERVIEW',
        highlight: true,
        text: 'A dynamic group at X specializing in financial analysis and corporate finance strategies to deliver data-driven insights and innovative solutions for investment decisions.',
      },
      {
        heading: 'ROLE',
        roles: [
          {
            title: 'Manager',
            subtitle: 'Finance Manager',
            avatar: 'https://placehold.co/200x200/ff9f40/ffffff?text=M',
            responsibilities: [
              'Lead and oversee financial analysis, reporting, and budgeting',
              'Ensure accurate financial modeling, forecasting',
              'Collaborate with cross-functional teams to provide financial insights',
            ],
          },
          {
            title: 'Teamleader',
            subtitle: 'Senior Financial Analyst',
            avatar: 'https://placehold.co/200x200/4bc0c0/ffffff?text=T',
            responsibilities: [
              'Lead and coordinate a team of analysts in preparing financial reports',
              'Ensure timely and accurate financial reporting',
              'Assist in the development of financial models and forecasts.',
            ],
          },
          {
            title: 'You/your peer',
            subtitle: 'Financial Analyst',
            avatar: 'https://placehold.co/200x200/36a2eb/ffffff?text=Y',
            responsibilities: [
              'Assist in the preparation of financial reports, forecasts',
              'Perform data analysis and create financial models under the guidance of senior analysts.',
              'Help in compiling financial data and preparing presentations.',
            ],
          },
        ],
      },
    ],
  },
  situation: {
    title: 'About the situation',
    content: 'Your team has been tasked with analyzing the financial performance of a potential acquisition target. You will need to review financial statements, calculate key ratios, identify trends and risks, and prepare a recommendation report.',
  },
})

// Email data
export const emailData = {
  sender: 'Daehyun Kim',
  avatar: 'https://placehold.co/200x200/4bc0c0/ffffff?text=DK',
  to: 'me',
  subject: '',
  content: `Dear Team,
I hope this message finds you well.

As part of our ongoing efforts to optimize financial performance and support strategic decisions, I am assigning a financial analysis task to be conducted. I request that you gather all relevant data, perform in-depth analysis, and prepare the necessary reports for review.

We will be focusing on quarterly performance, cost optimization, revenue growth, and I expect the analysis to be completed by Friday.

Feel free to reach out to the guidance if you need any clarifications or support.

Thank you for your continued effort and dedication.

Chris Kim`,
}
