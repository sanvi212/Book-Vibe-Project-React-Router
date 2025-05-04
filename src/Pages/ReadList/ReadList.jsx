import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
// import Book from "../Book/Book";
// import ListedBook from "../ListedBook/ListedBook";
import Book from "../Book/Book";

const ReadList = () => {
  // works case
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  // console.log(data)
  useEffect(() => {
    const storedBookData = getStoredBook();
    // converted id to number
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadlist = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadlist);
  });
  const handleSort = (type) => {
    setSort(type);
    if(type === "pages") {
        const sortedByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
        setReadList(sortedByPage);
        // console.log(sortedByPage)
    }
    if(type === "pages") {
        const sortedByRating = [...readList].sort((a,b) => a.rating - b.rating)
        setReadList(sortedByRating);
    }
  }
  return (
    <div>
      <h1 className="text-[#131313] font-bold text-center bg-[#1313130D] py-6 mb-8">
        Books
      </h1>
      <details className="dropdown text-center flex justify-center items-center">
        <summary className="btn m-1 bg-[#23BE0A] text-white p4 font-bold w-[145px] h-[52px]">Sort By : {sort?sort:""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box p-2 shadow-sm border-2">
          <li className="">
            <a onClick={() => handleSort('pages')}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort('ratings')}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList className="text-[#131313CC]">
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
