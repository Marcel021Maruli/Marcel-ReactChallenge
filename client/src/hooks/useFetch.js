import { useEffect, useState } from 'react'

export default (url) => {
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    const getCard = async () => {
      const cards = await fetch(url)
      setCardData(await cards.json())
    }
    getCard()
  }, [url]);
  return { cardData, setCardData }
}

