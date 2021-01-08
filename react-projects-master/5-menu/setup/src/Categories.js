import React from 'react';

const Categories = ({listCategories, filterItems}) => {
  return (
    <div className='btn-container'>
      {
        listCategories.map((category, index) => {
          return (
            <button key={index} className='filter-btn' 
              onClick={() => {
                filterItems(category);
              }}>
              {category}
            </button>
          );
        })
      }
    </div>
  );
};

export default Categories;
