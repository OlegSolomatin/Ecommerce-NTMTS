import {useContext, useEffect} from "react";
import {ProductsContext} from "../components/productsContext";
import Footer from "../components/footer";
import Background from "../components/bg";

export default function Success () {

    const {setSelectedProducts} = useContext(ProductsContext)
    useEffect(() => {
        if (window.location.href.indexOf('success')){
            setSelectedProducts([]);
        }
    }, [])

    return (
        <div className={'containerApp'}>
            <Background />
            <div role="alert" className="rounded-lg bg-indigo-700 p-4 shadow-xl">
                <div className="flex items-start gap-4">
                    <span className="text-primary-custom">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <div className="flex-1">
                        <strong className="block font-medium text-gray-100"> Оплата прошла успещно </strong>

                        <p className="mt-1 text-sm text-gray-300">
                            Мы приступили к сборке вашего заказа
                        </p>
                </div>
                    <a href='/' className="text-gray-500 transition hover:text-gray-600">
                    <span className="sr-only">Dismiss popup</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}