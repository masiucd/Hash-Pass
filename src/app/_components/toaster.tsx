import toast, {
  Toaster as ReactHotToaster,
  type ToasterProps,
  type ToastOptions,
} from "react-hot-toast";

import {Icons} from "./icons";

export function notify(message: string, options?: ToastOptions) {
  return toast(message, {
    ...options,
    icon: <Icons.Info className="text-green-600" />,
  });
}

export function notifyError(message: string) {
  return toast.error(message);
}

export function Toaster(props: ToasterProps) {
  return <ReactHotToaster {...props} />;
}
