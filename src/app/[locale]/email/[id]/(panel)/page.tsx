import dynamic from "next/dynamic";

const Client = dynamic(() => import("./client"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function EmailPanel() {
  return (
    <div>
      <Client />
    </div>
  );
}
