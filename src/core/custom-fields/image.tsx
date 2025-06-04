import { Input } from "@/components/ui/input";
import { CheckCircle, Loader2, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  id: string;
  name: string;
  value?: string;
  onChange: (value: string) => void;
}

const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/x-icon",
];

const MAX_FILE_SIZE = 1024 * 1024 * 1; // 1MB

export const ImageField = ({ id, name, value = "", onChange }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const uploadImage = async (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size exceeds 1MB limit");
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      toast.error("Invalid file type");
      return;
    }

    setIsSubmitting(true);
    // uploadImage logic here
    onChange("");
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center font-semibold text-[15px]">
        <div className="flex mr-[4px] pl-[4px] text-[#ababab]">
          <CheckCircle size={16} />
        </div>
        <span>{name}</span>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          startContent={<span className="text-[14px] text-tp/50">URL</span>}
        />
        <div
          className="w-full border p-2 flex gap-2 items-center justify-center cursor-pointer rounded-sm text-[14px]"
          onClick={() => {
            document.getElementById(`${id}-upload-image`)?.click();
          }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin w-4 h-4" />
              <span>Uploading...</span>
            </>
          ) : (
            <>
              <Upload size={16} />
              <span>Upload Image</span>
            </>
          )}
          <Input
            type="file"
            id={`${id}-upload-image`}
            accept={ACCEPTED_FILE_TYPES.join(",")}
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              await uploadImage(file);
              e.target.value = "";
            }}
          />
        </div>
      </div>
    </div>
  );
};
