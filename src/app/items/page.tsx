import { fetchItemList } from "@/utils/serverApi";

async function ItemPage() {
  fetchItemList();
  return <div></div>;
}

export default ItemPage;
