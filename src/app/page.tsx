"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [arrayOfCards, setArrayOfCards] = useState([])

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/draw/?count=21');
        const data = await response.json();
        setArrayOfCards(data.cards.map((el: any) => el.image))
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }

    fetchCards();
  }, []);


  let pileOne = arrayOfCards.slice(0, 7);
  let pileTwo = arrayOfCards.slice(7, 14);
  let pileThree = arrayOfCards.slice(14, 21);

  const [pileone, setPileone] = useState(false);
  const [piletwo, setPiletwo] = useState(false);
  const [pilethree, setPilethree] = useState(false);

  const [count, setCount] = useState(0);

  
  if (pileone) {
    let arrone = [...pileTwo, ...pileOne, ...pileThree]
    setArrayOfCards([arrone[0], arrone[3], arrone[6], arrone[9], arrone[12], arrone[15], arrone[18], arrone[1], arrone[4], arrone[7], arrone[10], arrone[13], arrone[16], arrone[19],arrone[2], arrone[5], arrone[8], arrone[11], arrone[14], arrone[17], arrone[20]]);
    setPileone(false);
  }
  
  if (piletwo) {
    let arrtwo = [...pileOne, ...pileTwo, ...pileThree];
    setArrayOfCards([arrtwo[0], arrtwo[3], arrtwo[6], arrtwo[9], arrtwo[12], arrtwo[15], arrtwo[18], arrtwo[1], arrtwo[4], arrtwo[7], arrtwo[10], arrtwo[13], arrtwo[16], arrtwo[19],arrtwo[2], arrtwo[5], arrtwo[8], arrtwo[11], arrtwo[14], arrtwo[17], arrtwo[20]]);
    setPiletwo(false);
  }
  
  if (pilethree) {
    let arrthree = [...pileTwo, ...pileThree, ...pileOne];
    setArrayOfCards([arrthree[0], arrthree[3], arrthree[6], arrthree[9], arrthree[12], arrthree[15], arrthree[18], arrthree[1], arrthree[4], arrthree[7], arrthree[10], arrthree[13], arrthree[16], arrthree[19],arrthree[2], arrthree[5], arrthree[8], arrthree[11], arrthree[14], arrthree[17], arrthree[20]]);
    setPilethree(false);
  }

  return (
    <main className=" flex justify-around">
    <div>
      <div className="flex mt-[50px]">
        {pileOne.map((el) => (
          <Image key={el} width={80} height={100} className="text-xl" src={el} alt="playingCard"/>
        ))}
        <button onClick={() => {setPileone(true); setCount((count) => count + 1)} } className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Here</button>
      </div>
      <div className="flex mt-[50px]">
        {pileTwo.map((el) => (
          <Image key={el} width={80} height={100} className="text-xl" src={el} alt="playingCard"/>
        ))}
        <button onClick={() => {setPiletwo(true); setCount((count) => count + 1)} } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Here</button>
      </div>
      <div className="flex mt-[50px]">
        {pileThree.map((el) => (
          <Image key={el} width={80} height={100} className="text-xl" src={el} alt="playingCard"/>
        ))}
        <button onClick={() => {setPilethree(true); setCount((count) => count + 1)} } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Here</button>
      </div>
    </div>
    {count === 3 && <h1 className=" text-[5rem]">Your Card is <Image width={80} height={100} src={arrayOfCards[10]} alt="yourCard"/></h1>}
    </main>
  );
}