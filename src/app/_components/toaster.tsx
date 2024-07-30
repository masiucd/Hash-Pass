import toast, {
  Toaster as ReactHotToaster,
  type ToasterProps,
} from "react-hot-toast";

export function notify(message: string) {
  return toast(message);
}

export function notifyError(message: string) {
  return toast.error(message);
}

export function Toaster(props: ToasterProps) {
  return <ReactHotToaster {...props} />;
}
