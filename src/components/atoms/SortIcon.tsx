import { useAppStore } from "../../store/productsStore";
import ascendingIcon from "../../assets/sort-a-z.svg";
import descendingIcon from "../../assets/sort-z-a.svg";

export const SortIcon = () => {
  const isAsc = useAppStore((state) => state.isAsc);
  const switchSorting = () => {
    useAppStore.getState().switchAsc();
  };
  return isAsc ? (
    <div onClick={switchSorting}>
      <img src={ascendingIcon} width="20px" height="20px" alt="Sort asc" />
    </div>
  ) : (
    <div onClick={switchSorting}>
      <img src={descendingIcon} width="20px" height="20px" alt="Sort desc" />
    </div>
  );
};
