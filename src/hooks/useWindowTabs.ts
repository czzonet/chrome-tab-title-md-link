import { useEffect, useState } from "react";
import { getCurrentTab, getWindowTabs } from "../chromeBridge";

export interface Tab {
  title: string;
  url: string;
}

export const useWindowTabs = () => {
  const [list, setList] = useState<Tab[]>([]);
  const [tab, settab] = useState<Tab>({
    title: "",
    url: "",
  });

  useEffect(() => {
    const h = async () => {
      const atab = await getCurrentTab();
      settab(atab);

      const alist = await getWindowTabs();
      setList(alist);
    };

    h();

    return () => {};
  }, []);

  return {
    tab,
    list,
  };
};
