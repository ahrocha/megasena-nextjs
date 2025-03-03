import { MegasenaData } from "@/services/api";
import { formatDate } from "../utils/formatDate";

interface Props {
  readonly megasenaData: MegasenaData;
}

export default function MegasenaResultsRow({ megasenaData }: Props) {
  return (
    <div className="flex gap-4 items-center flex-row w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
      <div className="text-medium block text-right flex-col " >
        {megasenaData.numero}
      </div>
      <div className="block text-center">
        {formatDate(megasenaData.data)}
      </div>
      <div className="block text-left">
        {megasenaData.sorteados}
      </div>
    </div>
  );
}
