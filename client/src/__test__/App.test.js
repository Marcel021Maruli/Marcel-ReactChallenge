import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import store from "../store";
import App from "../App";
import HomePage from "../pages/main";
import Navbar from "../components/Navbar"
import Card from "../components/card"
import Details from '../components/details'


const dataCard = [
  {
    "id": 47897376,
    "name": "Adamatia Crysta - Leonite",
    "type": "Effect Monster",
    "desc": "If this card is Special Summoned by the effect of an \"Adamatia\" card: You can place 1 \"Adamatia\" card from your hand or GY on the top of the Deck. If this card is in your GY: You can target 1 FIRE Synchro Monster you control or in your GY; return it to the Extra Deck, and if you do, place this card on the top of the Deck. You can only use each effect of \"Adamatia Crysta - Leonite\" once per turn.",
    "atk": 0,
    "def": 2200,
    "level": 4,
    "race": "Rock",
    "attribute": "FIRE",
    "archetype": "Adamatia",
    "card_images": [
      {
        "id": 47897376,
        "image_url": "https://storage.googleapis.com/ygoprodeck.com/pics/47897376.jpg",
        "image_url_small": "https://storage.googleapis.com/ygoprodeck.com/pics_small/47897376.jpg"
      }
    ],
    "card_prices": [
      {
        "cardmarket_price": "0.00",
        "tcgplayer_price": "0.00",
        "coolstuffinc_price": "0.00",
        "ebay_price": "0.99",
        "amazon_price": "0.58"
      }
    ]
  }
]
function renderPage(history, component) {
  return render(
    <Provider store={store}>
      <Router history={history}>{component}</Router>
    </Provider>
  );
}

afterEach(cleanup)

describe("Navbar Component", () => {
  test("Should render an APP", () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderPage(history, <App />);
    const headerTitle = getByTestId(/header-title/i);
    expect(headerTitle).toBeInTheDocument(headerTitle);
  });
  test("Should render Navbar", () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderPage(history, <Navbar />);
    const navBar = getByTestId(/navBar/i);
    expect(navBar).toBeInTheDocument(/navBar/i)
  });
  test("Should show Navbar Brand", () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderPage(history, <Navbar />);
    const navBar = getByTestId(/navBar/i);
    expect(navBar).toHaveTextContent("Yu-Gi OhHomeFavorite")
  })
});

describe("Card Component", () => {
  test("Should Render a Card", () => {
    const history = createMemoryHistory();
    const cards = dataCard[0]
    const { getByTestId } = renderPage(history, <Card data={cards} />);
    const headerTitle = getByTestId(/cardsComponent/i);
    expect(headerTitle).toBeInTheDocument(headerTitle);
  });
  // test("Should")

})

describe("Details Component", () => {
  test("should render a detail component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = renderPage(history, <Details data={47897376} />)
    const DetailComponent = getByTestId(/DetailComponent/i);
    expect(DetailComponent).toBeInTheDocument("DetailComponent");
  })
})

// describe("Should Render Card", () => {
// });
