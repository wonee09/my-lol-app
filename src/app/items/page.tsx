import { DDRAGON_URL } from "@/constant/fetchURL";
import { fetchItemList, getVersion } from "@/utils/serverApi";
import Image from "next/image";

async function ItemPage() {
  const itemList = await fetchItemList();
  const ver = await getVersion();

  // console.log("itemList", itemList);
  return (
    <div>
      {itemList.map((item) => {
        return (
          <div key={item.id}>
            <Image
              src={`${DDRAGON_URL}${ver}/img/item/${item.image.full}`}
              alt={item.image.full}
              width={100}
              height={100}
            />
            <div>{item.name}</div>
            <div>{item.plaintext}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemPage;
