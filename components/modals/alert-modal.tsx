"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useParams, usePathname } from "next/navigation";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/billboards`,
      label: "billboard",
    },
    {
      href: `/${params.storeId}/categories`,
      label: "category",
    },
    {
      href: `/${params.storeId}/settings`,
      label: "store",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const currentRoute = routes.find((route) => route.href === pathname);
  const label = currentRoute ? currentRoute.label : "";

  return (
    <Modal
      title='Are you absolutely sure?'
      description={`This action cannot be undone. This will permanently delete this ${label}.`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
        <Button disabled={loading} variant='outline' onClick={onClose}>
          No, Cancel
        </Button>
        <Button disabled={loading} variant='destructive' onClick={onConfirm}>
          Yes, Delete
        </Button>
      </div>
    </Modal>
  );
};
