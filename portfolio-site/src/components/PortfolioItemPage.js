import React from 'react';


const PortfolioItemPage = (props) => {
  return (
    <div>
      This is portfolio number {props.match.params.id}
    </div>
  )
};

export default PortfolioItemPage;