import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../../api/imageUploadApi";
import { addProducts } from "../../../api/products";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProducts = () => {
  
  const { user } = useContext(AuthContext);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const [error,setError]=useState('');
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('')
    if (!preview) {
      setError('Please Submit Product Image');
    }
    const date = new Date();
    const image = event.target.image.files[0];
    imageUpload(image)
      .then((res) => {
        const bookInfo = {
          book_name: event.target.book_name.value,
          phone_number: event.target.phone_number.value,
          location: event.target.location.value,
          price: event.target.price.value,
          purchase_year: event.target.purchase_year.value,
          condition: event.target.condition.value,
          book_category: event.target.book_category.value,
          date: date,
          description: event.target.description.value,
          writter: event.target.writter.value,
          image: res.data.display_url,
          sold:false,
          advertise:true,
          seller: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        addProducts(bookInfo).then((data) => {
          // setLoading(false)
          toast.success("Home Added!");
          navigate("/dashboard/my-products");
        });
      })
      .catch((err) => {
        console.log(err);
        //   setLoading(false)
      });
  };
  const handleImageChange = (image) => {
    setPreview(window.URL.createObjectURL(image));
    setUploadButtonText(image.name);
  };

  return (
    <div className="lg:mt-0 md:mt-10 sm:mt-10">
      <div className=" min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="absolute  opacity-60 "></div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full space-y-8 p-10 rounded-xl shadow-lg z-10"
        >
          <div className="grid  gap-8 grid-cols-1 justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">
                  PRODUCT INFORMATION
                </h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div className="mt-5">
                <div className="form">
                  <div className="md:space-y-2 mb-3">
                    <label className="text-xs font-semibold text-gray-600 py-2">
                      GIVE A PICTURE OF YOUR BOOK :
                    </label>
                    <div className="flex flex-col md:flex-row items-center py-6">
                      <div className=" mr-4 flex-none rounded-xl border overflow-hidden">
                        {preview && (
                          <img
                            src={preview}
                            className="w-40 h-40"
                            alt="preview_img"
                          />
                        )}
                      </div>
                      <label className="cursor-pointer ">
                        <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-orange-400 hover:bg-orange-500 hover:shadow-lg">
                          Browse
                        </span>
                        <input
                          onChange={(event) =>
                            handleImageChange(event.target.files[0])
                          }
                          type="file"
                          // required
                          name="image"
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Book Name
                      </label>
                      <input
                        placeholder="Book Name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="text"
                        name="book_name"
                      />
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Phone Number
                      </label>
                      <input
                        placeholder="Phone Number"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="text"
                        name="phone_number"
                      />
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Writter Name
                      </label>
                      <input
                        placeholder="Writter Name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="text"
                        name="writter"
                      />
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Location
                      </label>
                      <input
                        placeholder="Location"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="text"
                        name="location"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Price
                      </label>
                      <input
                        placeholder="Price"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="price"
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Year of purchase
                      </label>
                      <input
                        placeholder="Year of purchase"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="purchase_year"
                        required
                      />
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Please fill out this field.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Condition Type
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required
                        name="condition"
                      >
                        <option value="Excelent">Excelent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                      </select>
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Book Category
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required
                        name="book_category"
                      >
                        <option value="Novels">Novels</option>
                        <option value="Comics">Comics</option>
                        <option value="Historical">Historical</option>
                        <option value="Horror">Horror</option>
                        <option value="Technology">Technology</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Bussiness">Bussiness</option>
                      </select>
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Please fill out this field.
                      </p>
                    </div>
                  </div>
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Description
                    </label>
                    <textarea
                      required
                      name="description"
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="description"
                    ></textarea>
                  </div>
                  <p className="text-xs text-red-500 text-right my-3">
                    {error? error : ''}
                  </p>
                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button
                      type="submit"
                      className="mb-2 md:mb-0 bg-orange-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-orange-500"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
