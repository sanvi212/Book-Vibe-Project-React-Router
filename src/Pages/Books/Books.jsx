import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
  // const [allBooks, setAllBooks] = useState([]);
  // useEffect(()=>{
  //   fetch("booksData.json")
  //   .then(res => res.json())
  //   .then(data => {
  //       setAllBooks(data);
  //   })
  // },[])
  // const bookPromise = fetch('../../../public/bookData.json').then(res => res.json())

  return (
    <div className="mb-24">
      <h1 className="mt-24 text-[#131313] font-bold text-4xl text-center mb-9">Books</h1>

      <Suspense fallback={<span>Loading...</span>}>
      {/* book container */}
     <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       
     {
        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
      }
     </div>

      </Suspense>
    </div>
  );
};

export default Books;
