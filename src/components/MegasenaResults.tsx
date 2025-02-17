import { MegasenaData } from "@/services/api";
import { formatDate } from "../utils/formatDate";

interface Props {
  megasenaData: MegasenaData;
}

export default function MegasenaResults({ megasenaData }: Props) {
  return (
    <div className="flex gap-4 items-center flex-col">
      <h1 className="text-medium block text-center">
        Sorteio Número: <br /> {megasenaData.nrSorteio}
      </h1>
      <h1 className="text-medium block text-center">
        Data do Sorteio: <br /> {formatDate(megasenaData.dtSorteio)}
      </h1>
      <h2 className="text-4xl block text-center">
        Números Sorteados: <br /> {megasenaData.dsSorteadosSorteio}
      </h2>
    </div>
  );
}
