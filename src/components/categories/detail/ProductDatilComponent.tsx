

import { Price, PriceValue } from "@/components/categories/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import type { ProductResponse } from "../productCardComponent";


const ProductCardDetailComponent = ({images,title, description, price}:ProductResponse) => {
  const imageSrc = images?.[0];

  return (
      <Card className="container grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 mx-auto">
        {/* images */}
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={title}
                width={500}
                height={500}
                className="block size-full object-cover object-center"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-muted text-muted-foreground">
                No image available
              </div>
            )}
          </AspectRatio>
        </CardHeader>

        {/* title, description, price */}
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <div>
            <Price onSale={price != null} className="text-lg font-semibold">
              <PriceValue
                price={price}
                currency={'USD'}
                variant="regular"
              />
              <PriceValue price={price} currency={'USD'} variant="sale" />
            </Price>
          </div>
        </CardContent>
      </Card>
  );
};

export { ProductCardDetailComponent };
