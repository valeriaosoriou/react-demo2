import React from 'react';
import  board1 from '../../images/board1.jpg';
import  board2 from '../../images/board2.jpg';
import  board3 from '../../images/board3.jpg';
import ProductCard from '../productcard/ProductCard';


class Products extends React.Component{
  constructor(){
    super();
    this.state={
      cards :[
       {
         id:0,
         imageUrl : board1,
         title: 'Board1',
         description: 'Yellow Surfboard'
       },
       {
         id:1,
         imageUrl : board2,
         title: 'Board2',
         description: 'Surfboards collection'
       },
       {
         id:2,
         imageUrl : board3,
         title: 'Board3',
         description: 'Lightblue surfboard'
       }
     ]
   }

  }

  render(){
   //  const cards=[
   //    {
   //      id:0,
   //      imageUrl : wine1,
   //      title: 'Wine1',
   //      description: 'Red Wine'
   //    },
   //    {
   //      id:1,
   //      imageUrl : wine4,
   //      title: 'Wine4',
   //      description: 'White Wine'
   //    },
   //    {
   //      id:2,
   //      imageUrl : wine2,
   //      title: 'Wine2',
   //      description: 'White Wine'
   //    },
   //    {
   //      id:3,
   //      imageUrl : wine3,
   //      title: 'Wine3',
   //      description: 'White Wine'
   //    },
   //    {
   //      id:4,
   //      imageUrl : wine4,
   //      title: 'Wine4',
   //      description: 'Red Wine'
   //    },
   //  ]
   //
   //  console.log(cards);
   // const cardComponent = cards.map((card)=>{
   //   return (
   //   <ProductCard key={card.id} imgurl={card.imageUrl} tit={card.title} des={card.description}/>
   //   )
   // })
   
   console.log(this.state);
   const cardComponent = this.state.cards.map((card)=>{
     return (
     <ProductCard key={card.id} imgurl={card.imageUrl} tit={card.title} des={card.description}/>
     )
   })

   console.log(cardComponent);

    return(
      <div className="row">
        {cardComponent}
      </div>
    )
  }
}

export default Products;