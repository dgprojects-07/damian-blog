import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import CategoryCard from './CategoryCard'

const categories = {
  backgroundColor: '#E26447',
  textAlign: 'center',
  padding: '40px 0 70px',
  marginTop: '60px',
};

const catSection = {
  width: '100%',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto'
};

const title = {
  fontSize: '40px',
  fontWeight: '600',
  lineHeight: '1',
  color: '#fff',
  textTransform: 'capitalize',
  fontFamily: "'P22', sans-serif",
  paddingBottom: '50px'
};

const catContainer = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  columnGap: '30px',
  rowGap: '30px',
  maxWidth: '1310px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

export default function CategorySection() {

  const isMobile = useMediaQuery({
    query: '(max-width: 890px)'
  });

  const isSmall = useMediaQuery({
    query: '(max-width: 450px)'
  });

  const [catContainerStyle, setCatContainerStyle] = useState(catContainer);
  const [catTitleStyle, setCatTitleStyle] = useState(title);

  useEffect(()=>{
   if (isMobile && !isSmall) {
    setCatContainerStyle({
      gridTemplateColumns: '1fr 1fr',
      columnGap: '15px',
      rowGap: '15px',
      padding: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'grid'
    });
    setCatTitleStyle({
      fontSize: '28px',
      fontWeight: '600',
      lineHeight: '1.3',
      color: '#fff',
      textTransform: 'capitalize',
      fontFamily: "'P22', sans-serif",
      padding: '0 0 30px'
    });
   } else if (isSmall) {
    setCatContainerStyle({
      padding: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column'
    });
   }else {
      setCatContainerStyle(catContainer);
      setCatTitleStyle(title);
   }
  },[isMobile, isSmall])

  return (
    <div style={categories}>
      <section style={catSection}>
        <div style={catTitleStyle}>
          <span>Start reading now</span>
        </div>
        <div style={catContainerStyle}>
          <CategoryCard title="supplements" />
          <CategoryCard title="Natural Remedies" />
          <CategoryCard title="recipes" />
          <CategoryCard title="dental" />
          <CategoryCard title="tips&tricks" />
          <CategoryCard title="behaviour" />
          <CategoryCard title="health&wellness" />
          <CategoryCard title="mobility" />
        </div>
      </section>
    </div>
  );
}