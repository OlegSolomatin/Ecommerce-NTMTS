import {useState} from "react";
import Product from "../components/Product";
import Background from "../components/bg";
import Footer from "../components/footer";
import {findAllProducts} from "./api/products";
import {initMongoose} from "../lib/mongoos";
import Search from "../components/search";

export default function Home({products}) {
    const [search, setSearch] = useState('');

    if (search) {
        products = products.filter(product => product.name.toLowerCase().replace(/\s+/g, '').includes(search.toLowerCase().replace(/\s+/g, '')))
    }

  const categoriesProd = [...new Set(products.map(product => product.category))]

  return (
    <div className='containerApp'>
        <Background />
        <Search products={products} search={search} setSearch={setSearch} />
        <main className="containerContent">
            {categoriesProd.map((categoryName) =>(
                <>
                    {products.find(product => product.category === categoryName) && (
                        <section key={categoryName} className="categoriesProd max-w-[1540px] flex flex-col items-center tabletM:items-start justify-center">
                            <h2 className='title p-4 capitalize text-center'>
                                <span>{categoryName}</span>
                            </h2>
                            <main className='productsItem flex gap-2 items-center justify-center tabletM:justify-start flex-wrap'>
                                {products.filter(product => product.category === categoryName).map((product, index) => (
                                    <Product key={index} {...product} />
                                ))}
                            </main>
                        </section>
                    )}
                </>
            ))}
        </main>
        <Footer />
    </div>
  )
}

export async function getServerSideProps() {
    await initMongoose();

    const products = await findAllProducts();

    return{
        props: {
            products: JSON.parse(JSON.stringify(products)),
        }
    }

}
