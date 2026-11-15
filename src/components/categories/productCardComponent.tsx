import { cn } from "cn";
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
import Link from "next/link";

interface ProductResponse {
 id: number,
 images: string[],
 title: string,
 description: string,
 price: number
}

const ProductCardComponent = ({
  id,
  images,
  title,
  description,
  price,
  loading = "lazy",
}: ProductResponse & { loading?: "eager" | "lazy" }) => {
  return (
    <Link
      href={`/category/${id}`}
      className={cn(
        "block max-w-md transition-opacity hover:opacity-80"
      )}
    >
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            {images?.[0] ? (
              <Image
                src={images[0]}
                alt={title}
                width={500}
                height={500}
                loading={loading}
                className="block size-full object-cover object-center"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-muted text-muted-foreground">
                No image available
              </div>
            )}
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <div className="mt-auto">
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
    </Link>
  );
};

export { ProductCardComponent , type ProductResponse  };
