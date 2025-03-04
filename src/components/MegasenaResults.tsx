import { MegasenaData } from "@/services/api";
import { formatDate } from "../utils/formatDate";
import Link from "next/link";

interface Props {
  readonly megasenaData: MegasenaData;
}

export default function MegasenaResults({ megasenaData }: Props) {
  return (
    <div className="flex gap-4 items-center flex-col">
      <h1 className="text-medium block text-center">
        Sorteio Número: <br /> {megasenaData.numero}
      </h1>
      <h1 className="text-medium block text-center">
        Data do Sorteio: <br /> {formatDate(megasenaData.data)}
      </h1>
      <h2 className="text-4xl block text-center">
        Números Sorteados: <br /> {megasenaData.sorteados}
      </h2>
      <div>
        <div className="flex gap-4 items-center">
            {megasenaData.previous && (
                <Link href={`/megasena/${megasenaData.previous}`} className="text-blue-500">
                  Sorteio Anterior
                </Link>
            )}
            </div>
        <div className="flex gap-4 items-center">
            {megasenaData.next && (
                <Link href={`/megasena/${megasenaData.next}`} className="text-blue-500">
                  Próximo Sorteio
                </Link>
            )}
            </div>
      </div>
    </div>
  );
}
