import type { ProductResponse } from "../productCardComponent";
import { ProductCardDetailComponent } from "./ProductDatilComponent";

export default function ProductDetailDisplayComponent({ product }: { product: ProductResponse }) {
  return <ProductCardDetailComponent {...product} />;
}
