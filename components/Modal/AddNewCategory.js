import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import categoryApi from "@api/categoryApi";
import Swal from "sweetalert2";

export default function AddNewCategory() {
  let [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function onSubmit(e) {
    e.preventDefault();
    categoryApi
      .postOne(data)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: result.message,
        });
        closeModal();
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: e.message,
        });
      });
  }
  return (null
    // <>
    //   <div>
    //     <button
    //       type="button"
    //       onClick={openModal}
    //       open={isOpen}
    //       className="bg-black text-white px-5 py-2 rounded-lg border-black border-2 hover:bg-white hover:text-black transition-all"
    //     >
    //       Add new
    //     </button>
    //   </div>

    //   <Transition appear show={isOpen} as={Fragment}>
    //     <Dialog
    //       as="div"
    //       className="fixed inset-0 z-10 overflow-y-auto"
    //       onClose={closeModal}
    //     >
    //       <div className="min-h-screen px-4 text-center">
    //         <Transition.Child
    //           as={Fragment}
    //           enter="ease-out duration-300"
    //           enterFrom="opacity-0"
    //           enterTo="opacity-100"
    //           leave="ease-in duration-200"
    //           leaveFrom="opacity-100"
    //           leaveTo="opacity-0"
    //         >
    //           <Dialog.Overlay className="fixed inset-0" />
    //         </Transition.Child>

    //         {/* This element is to trick the browser into centering the modal contents. */}
    //         <span
    //           className="inline-block h-screen align-middle"
    //           aria-hidden="true"
    //         >
    //           &#8203;
    //         </span>
    //         <Transition.Child
    //           as={Fragment}
    //           enter="ease-out duration-300"
    //           enterFrom="opacity-0 scale-95"
    //           enterTo="opacity-100 scale-100"
    //           leave="ease-in duration-200"
    //           leaveFrom="opacity-100 scale-100"
    //           leaveTo="opacity-0 scale-95"
    //         >
    //           <>
    //             <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
    //             <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
    //               <Dialog.Title
    //                 as="h3"
    //                 className="text-lg font-medium leading-6 text-gray-900"
    //               >
    //                 Add new category
    //               </Dialog.Title>
    //               <div className="mt-2 flex flex-col space-y-5">
    //                 <form
    //                   onSubmit={onSubmit}
    //                   className="flex flex-col space-y-3"
    //                 >
    //                   <label htmlFor="categoryName">Category name</label>
    //                   <input
    //                     type="text"
    //                     name="categoryName"
    //                     onChange={(e) =>
    //                       setData({ ...data, name: e.target.value })
    //                     }
    //                   />
    //                   <label htmlFor="categoryDescription">
    //                     Category description
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="categoryDescription"
    //                     onChange={(e) =>
    //                       setData({ ...data, description: e.target.value })
    //                     }
    //                   />
    //                   <input
    //                     type="submit"
    //                     className="py-2 bg-black border-2 border-black text-white hover:bg-white hover:text-black transition-all hover:cursor-pointer"
    //                   />
    //                 </form>
    //               </div>
    //             </div>
    //           </>
    //         </Transition.Child>
    //       </div>
    //     </Dialog>
    //   </Transition>
    // </>
  );
}
