import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../utility/addToDB';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, category, author, image, rating, tags, review, totalPages, publisher, yearOfPublishing} = singleBook;
    // console.log(singleBook)

    const handleMarkAsRead = id => {
        // store with id
        // where to store
        // arry of collection
        // if book already exist the show a alert
        // if book net exist then push in the conlection or array
        addToStoredDb(id);
    }

    return (
        <div className='flex mb-48 mt-12'>
            <div className='bg-[#1313130D] p-20 w-[50%] rounded-2xl'>
            <img className='w-[425px] h-[564px]' src={image} alt="" />
        </div>
        <div className='w-[50%] ml-4 text-gray-500'>
            <h2 className='text-[#131313] text-4xl font-bold mb-4'>{bookName}</h2>
            <p className='text-gray-500 font-medium text-lg mb-6'>By: {author}</p>
            <p className='border-b border-dashed border-t py-4 text-lg font-medium border-[#13131326] mb-4'>{category}</p>
            <h4 className='text-black font-bold mb-6'>Reviews :<span className='text-gray-500 text-sm'>{review}</span></h4>
            {/* tags */}
            <div className='flex justify-start border-b border-dashed border-[#13131326]'>
                <div className='flex items-center gap-3 justify-center mb-6'>
                <p className='text-[#131313] text-lg font-bold'>Tag</p>
                <p className='px-4 font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-3xl'>#{tags[0]}</p>
                <p className='px-4 font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-3xl'>#{tags[1]}</p>
                </div>
            </div>


            <div className='flex mt-6 gap-14 mb-8'>
                <div className='text-lg font-normal flex flex-col gap-3'>
                    <p>Number of Pages:</p>
                    <p>Publisher:</p>
                    <p>Year of Publishing:</p>
                    <p>Rating:</p>
                </div>
                <div className='text-lg font-normal font-semibold text-[#131313] flex flex-col gap-3'>
                    <p>{totalPages}</p>
                    <p>{publisher}</p>
                    <p>{yearOfPublishing}</p>
                    <p>{rating}</p>
                </div>
            </div>
            {/* buttons */}
            <div className='flex gap-4 font-bold items-center'>
                <button onClick={() => handleMarkAsRead(id)} className='border rounded-lg flex items-center justify-center p-5 bg-white h-14 w-24 text-black border-[#131313]'>Read</button>
                <button className='p-5 btn bg-[#50B1C9] border-none text-white w-32 h-14'>Wishlist</button>
            </div>
        </div>
        </div>
    );
};

export default BookDetails;