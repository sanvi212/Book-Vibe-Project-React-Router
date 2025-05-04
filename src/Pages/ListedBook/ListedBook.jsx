import { Link } from "react-router";


const ListedBook = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data)
    // console.log(singleBook)

    const {bookName, category, author, image, rating, tags} = singleBook;
    return (
        <Link to={'listedBook'}>

<div className="card p-6 border">
        <figure className="bg-[#F3F3F3] rounded-2xl px-24 py-8 mb-6">
          <img className="w-32 h-40 "
            src={image}
            alt="books" />
        </figure>
        <div className="">
          {/* tags */}
          <div className="border-b border-dashed border-[#13131326]">
            <h2 className="text-[#131313] text-2xl font-bold mb-4">{bookName}</h2>
            <p className="text-[#131313CC] mb-4 text-lg">By : {author} </p>
          </div>

          <div className="flex justify-between">
            <p className="mt-5">{category}</p>
            <div className="flex justify-center items-center text-lg text-[#131313CC] gap-2.5">
                <p className="#131313CC">{rating}</p>
                <IoIosStarHalf />
            </div>
          </div>
        </div>
      </div>
        
        </Link>
    );
};

export default ListedBook;