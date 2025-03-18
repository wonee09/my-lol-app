"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const { refresh } = useRouter();

  return (
    <div className="py-24 h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl text-primary">죄송합니다.</h2>
      <h3 className="text-primary mb-4">{error.message}</h3>
      <p>요청하신 페이지에서 일시적인 에러가 발생했습니다.</p>
      <p className="mb-4">다시 시도해주세요.</p>
      <button
        onClick={() =>
          startTransition(() => {
            refresh();
            reset();
          })
        }
        className="py-2 px-4 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold hover:bg-primary dark:hover:bg-primary "
      >
        Try again
      </button>
    </div>
  );
}
