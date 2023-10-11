export const API = {
  baseUrl: 'http://localhost:4000',
  endpoints: {
    todo: '/todo'
  }
}

export const dataTab = [
  {
    name: 'Add',
    location: '/add'
  },
  {
    name: 'Search',
    location: '/search/all'
  },
]

export const dataTabSearch = [
  {
    name: "All",
    location: "/search/all",
  },
  {
    name: "Active",
    location: "/search/active",
  },
  {
    name: "Completed",
    location: "/search/completed",
  },
];