// IMPORTANT NOTE
// These are the categories displayed on the homepage hero section, NOT all categories
// There may be more categories, which will all be listed on the All Categories page

export const categories = [
  { category: 'Art', color: '#ffb8b0' },
  { category: 'Business', color: '#fdffba' },
  { category: 'Creativity', color: '#b7ffff' },
  { category: 'Health', color: '#ffd6c5' },
  { category: 'History', color: '#ffffca' },
  { category: 'Philosophy', color: '#ffcdf8' },
  { category: 'Psychology', color: '#ceebff' },
  { category: 'Science', color: '#ffc7d6' },
  { category: 'Technology', color: '#c4ffd4' },
  { category: 'All Categories', color: '#c9c4ff' },
]


export const getColor = (whatCategory) => {
  const index = categories.find(element => element.category.toUpperCase() === whatCategory.toUpperCase())

  //if undefined, return default
  return (index ? index.color : '#c9c4ff');
}
