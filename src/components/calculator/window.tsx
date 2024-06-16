export const Window = ({
  resultValue,
  screenValue,
}: {
  resultValue: number | string | null;
  screenValue: number | string | null;
}) => {
  return (
    <div className="text-header bg-window text-right p-4 rounded overflow-auto">
      <output className="text-6xl ">{screenValue ?? resultValue ?? "0"}</output>
    </div>
  );
};
