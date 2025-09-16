import { Banners } from "@/components/home/banners";
import { ProdutoListaSkeleton } from "@/components/home/produto-lists-skeleton";
import { ProdutosMaisVendidos } from "@/components/home/produtos-mais-vendidos";
import { ProdutosMaisVistos } from "@/components/home/produtos-mais-vistos";
import { HeaderInfoLista } from "@/components/layout/header-info-lista";
import { data } from "@/data";
import { Suspense } from "react";

export default function Page() {
  return(
    <div className="pb-96">
      <Banners list={data.banners} />
      <HeaderInfoLista />

      <Suspense fallback={<ProdutoListaSkeleton />}>
        <ProdutosMaisVistos />
      </Suspense>

      <Suspense fallback={<ProdutoListaSkeleton />}>
        <ProdutosMaisVendidos />
      </Suspense>
    </div>
  )
};