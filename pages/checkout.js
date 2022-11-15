import Footer from "../components/footer";
import Background from "../components/bg";
import {ProductsContext} from "../components/productsContext";
import { useContext, useEffect, useState} from "react";
import Loading from "../components/loading";
import ContanctInfomation from "../components/contactInformation";
import Image from "next/image";
import Link from "next/link";

export default function Checkout() {

    const {selectedProducts, setSelectedProducts} = useContext(ProductsContext);
    const [productsInfo, setProductsInfo] = useState([]);
    const [isLoading, setLoading] = useState([true]);

    useEffect(() => {
        setLoading(true);

        const ubiqIds = [...new Set(selectedProducts)]
        fetch('/api/products?ids=' + ubiqIds.join(','))
            .then(response => response.json())
            .then(json => setProductsInfo(json))
            .finally(() => setLoading(false))
    }, [selectedProducts]);

    function minusProduct(id){
        const pos = selectedProducts.indexOf(id);
        if (pos !== -1){
            setSelectedProducts(prev => {
                return prev.filter((value, index) => index !== pos)
            });
        }
    }
    function plusProduct (id) {
        setSelectedProducts(prev => [...prev, id])
    }

    /*const clearCart = () => setSelectedProducts([]);*/


    let subTotal = 0;
    let taxes = 0;
    if(selectedProducts?.length){
        for(let id of selectedProducts){
            const itemPrice = productsInfo.find(p => p._id === id)?.price || 0;
            subTotal += itemPrice
            taxes += itemPrice * 0.05
        }
    }
    const total = subTotal + taxes;

    return(
        <div className={'containerApp'}>
            <Background />
            { !selectedProducts.length ? (
                <div>
                Shopping Cart is empty
                </div>
            ) : (
                <>
                {isLoading ? (
                        <Loading />
                    ) : (
                        <div className={'containerCheckout gap-5'}>
                        <ul role="list" className="flex h-fit justify-start flex-wrap gap-5">
                            {productsInfo.length && productsInfo.map(product =>{
                                const amount = selectedProducts.filter(id => id === product._id).length;
                                if (amount === 0) return;
                                return (
                                <li key={product._id} className="w-full tabletS:w-[300px] flex py-6 px-4 bg-slate-800 rounded-lg">
                                    <div className="h-28 w-24 p-3 bg-white flex-shrink-0 overflow-hidden rounded-md border border-gray-200">

                            <Image src={product.photo.all || product.photo.front}
                                 alt={product.title}
                                 className="h-full w-full object-contain object-center" />
                            </div>

                                     <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium">
                                        <h3 className={'h-[69px] line-clamp-3 text-ellipsis custom-break'}>
                                            <Link href="#">{product.name}</Link>
                                        </h3>
                                        <p className="ml-4">${product.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm mt-2">
                                    <div className="containerQty flex items-center">
                                        <button onClick={() => minusProduct(product._id)} className={'py-1 px-2.5 m-0 flex items-center justify-center bg-transparent border border-indigo-500 color-white rounded-lg ease-in duration-300 hover:bg-indigo-500 '}>-</button>
                                        <p className="text-gray-200 mx-4">{selectedProducts.filter(id => id === product._id).length}</p>
                                        <button onClick={() => plusProduct(product._id)} className={'py-1 px-2 m-0 flex items-center justify-center bg-indigo-500 border border-indigo-500 color-white rounded-lg ease-in duration-300 hover:bg-indigo-700 '}>+</button>
                                    </div>
                                </div>
                            </div>
                                </li>
                            )})}
                        </ul>
                        <ContanctInfomation products={selectedProducts} subTotal={subTotal.toFixed(2)} taxes={taxes.toFixed(2)} total={total.toFixed(2)} />
                        </div>
                    )}
                </>
            )}
            <Footer />
        </div>
    )
}