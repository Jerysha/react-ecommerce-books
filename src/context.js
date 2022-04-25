import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  Children,
} from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const url = "https://api.jsonbin.io/b/62649ec238be296761f708ed";
  console.log(url);
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [stars, setStars] = useState();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const booksList = await response.json();
    setBooks(booksList);
    console.log(booksList);
    const { id } = booksList;
    if (booksList) {
      const newBooks = booksList.map((item) => {
        const { author, title, desc, rating, price, tag } = item;
        return {
          id,
          author,
          title,
          desc,
          rating,
          price,
          tag,
        };
      });
      setBooks(newBooks);
    } else {
      setBooks([]);
    }
    setIsLoading(false);
  });
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ isLoading, books, stars }}>
      {Children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
