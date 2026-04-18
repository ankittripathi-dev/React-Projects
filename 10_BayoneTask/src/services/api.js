const DEMO_EMAIL = 'user@gmail.com';
const DEMO_PASSWORD = 'password@123';

export const login = async ({ email, password }) => {
  await new Promise((resolve) => setTimeout(resolve, 400));

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    return { data: { token: 'demo-mocked-token' } };
  }

  const error = new Error('Invalid email or password.');
  error.response = { status: 400 };
  throw error;
};

export const fetchUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    data: {
      data: [
        {
          id: 1,
          email: 'rahul.sharma@gmail.com',
          first_name: 'Rahul',
          last_name: 'Sharma',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          id: 2,
          email: 'priya.verma@gmail.com',
          first_name: 'Priya',
          last_name: 'Verma',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
          id: 3,
          email: 'amit.patel@gmail.com',
          first_name: 'Amit',
          last_name: 'Patel',
          avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
        },
        {
          id: 4,
          email: 'neha.singh@gmail.com',
          first_name: 'Neha',
          last_name: 'Singh',
          avatar: 'https://randomuser.me/api/portraits/women/36.jpg'
        },
        {
          id: 5,
          email: 'rohit.kumar@gmail.com',
          first_name: 'Rohit',
          last_name: 'Kumar',
          avatar: 'https://randomuser.me/api/portraits/men/28.jpg'
        },
        {
          id: 6,
          email: 'ankita.joshi@gmail.com',
          first_name: 'Ankita',
          last_name: 'Joshi',
          avatar: 'https://randomuser.me/api/portraits/women/52.jpg'
        },
        {
          id: 7,
          email: 'vikas.malhotra@gmail.com',
          first_name: 'Vikas',
          last_name: 'Malhotra',
          avatar: 'https://randomuser.me/api/portraits/men/19.jpg'
        },
        {
          id: 8,
          email: 'pooja.agarwal@gmail.com',
          first_name: 'Pooja',
          last_name: 'Agarwal',
          avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
        },
        {
          id: 9,
          email: 'sachin.mehta@gmail.com',
          first_name: 'Sachin',
          last_name: 'Mehta',
          avatar: 'https://randomuser.me/api/portraits/men/55.jpg'
        },
        {
          id: 10,
          email: 'kavita.nair@gmail.com',
          first_name: 'Kavita',
          last_name: 'Nair',
          avatar: 'https://randomuser.me/api/portraits/women/21.jpg'
        },
        {
          id: 11,
          email: 'arjun.reddy@gmail.com',
          first_name: 'Arjun',
          last_name: 'Reddy',
          avatar: 'https://randomuser.me/api/portraits/men/61.jpg'
        },
        {
          id: 12,
          email: 'meenakshi.iyer@gmail.com',
          first_name: 'Meenakshi',
          last_name: 'Iyer',
          avatar: 'https://randomuser.me/api/portraits/women/18.jpg'
        }
      ]
    }
  };
};
