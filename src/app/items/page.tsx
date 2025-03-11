import { IMAGE_URL } from "@/constant/fetchURL";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

async function ItemPage() {
  const itemList = await fetchItemList();
  console.log("itemList", itemList);
  return (
    <div>
      {itemList.map((item) => {
        return (
          <div key={item.id}>
            <Image
              src={`${IMAGE_URL}/${item.image.full}`}
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
