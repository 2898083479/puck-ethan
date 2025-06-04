import { SaveButton } from "./_save-button";
import { PublishButton } from "./_pulish-button";
import { ToggleLanguage } from "@/components/core/toggle-language/locale-switch";

export const RightActions = () => {
  return (
    <div className="flex flex-1 gap-2 justify-end">
      <div className="flex items-center gap-2">
        <ToggleLanguage />
        <SaveButton />
        <PublishButton />
      </div>
    </div>
  );
};
