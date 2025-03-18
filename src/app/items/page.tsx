import { DDRAGON_URL } from "@/constant/fetchURL";
import { fetchItemList, getVersion } from "@/utils/serverApi";
import Image from "next/image";

async function ItemPage() {
  const itemList = await fetchItemList();
  const ver = await getVersion();

  // console.log("itemList", itemList);
  return (
    <div className="mx-4 py-24">
      <h2 className="text-2xl text-center pb-6">아이템 목록</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {itemList.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start rounded-lg py-2 border-neutral-200 gap-2 border-2 hover:border-primary"
            >
              <Image
                src={`${DDRAGON_URL}${ver}/img/item/${item.image.full}`}
                alt={item.image.full}
                width={100}
                height={100}
              />
              <h2 className="text-lg font-bold px-4">{item.name}</h2>
              <div className="px-4">{item.plaintext}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemPage;
