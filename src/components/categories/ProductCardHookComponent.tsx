import { ProductCardComponent, type ProductResponse } from "./productCardComponent";

export default function ProductCardListComponent({
  products,
}: {
  products: ProductResponse[];
}) {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 mx-auto">
      {products.map((product, index) => (
          <ProductCardComponent
            key={product.id}
            {...product}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
    </section>
  )
}
