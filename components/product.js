import {useContext} from "react";
import {ProductsContext} from "./productsContext";
import Image from "next/image";
import Link from "next/link";

export default function Product({_id,name,price,title,photo,size,deviceColor,players,party,userAge,sizeDetails}){
    const {setSelectedProducts} = useContext(ProductsContext);

    function addCard () {
        setSelectedProducts(prev => [...prev, _id]);
    }

    return(
        <Link key={_id} id={_id} className="card block w-[250px] rounded-lg p-4 bg-slate-800 shadow-sm shadow-indigo-800">
            <Image
                alt={title}
                src={photo.all || photo.front}
                className="h-56 w-full rounded-md object-contain p-3 bg-white"
            />

            <div className="mt-4">
                <dl className={'flex flex-row-reverse justify-between'}>
                    <div>
                        <dt className="sr-only">Price</dt>

                        <dd className="text-sm text-gray-400 font-bold">${price}</dd>
                    </div>

                    <div>
                        <dt className="sr-only">Name</dt>

                        <dd className="font-medium h-[48px] line-clamp-2 text-ellipsis break-all mr-2">{name}</dd>
                    </div>
                </dl>

                <div className="mt-2 flex items-center gap-4 text-xs">
                    <div className="inline-flex shrink-0 items-center">
                        <svg className="h-4 w-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                        </svg>
                        <div className="ml-1">
                            <p className="text-gray-400">Options</p>
                            {
                                size ? (
                                    <>
                                    <p className="font-medium">{size[0]}</p>
                                    </>
                                ) : (
                                    <></>
                                )
                            }
                            {
                                players ? (
                                    <>
                                        <p className="font-medium">{players[0]}</p>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                            {
                                sizeDetails ? (
                                    <>
                                        <p className="font-medium">{sizeDetails[0]}</p>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="inline-flex shrink-0 items-center">
                        <svg className="h-4 w-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        <div className="ml-1">
                            <p className="text-gray-400">Options 2</p>
                            {
                                deviceColor ? (
                                    <>
                                        <p className="font-medium">{deviceColor[0]}</p>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                            {
                                userAge ? (
                                    <>
                                        <p className="font-medium">{userAge}</p>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                            {
                                party ? (
                                    <>
                                        <p className="font-medium">{party}</p>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className={'flex-1 flex justify-end'}>
                        <button onClick={addCard} className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">+
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}