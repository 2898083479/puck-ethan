import NewPageButton from "./_new-page-button";
import { ManagePageButton } from "./_manage-page-button";

export const LeftActions = () => {
  return (
    <div className="flex-none lg:flex-1 flex items-center gap-2">
      <div className="flex items-center gap-2">
        <NewPageButton />
        <ManagePageButton />
      </div>
    </div>
  );
};
