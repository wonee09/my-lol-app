import { fetchItemList } from "@/utils/serverApi";

function ItemPage() {
  fetchItemList();
  return <div></div>;
}

export default ItemPage;
