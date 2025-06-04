import type { RootProps, PageProps, EmailProps } from "@/core";
import { create } from "zustand";

interface State extends EmailProps {
  currentPage: PageProps | undefined;
  isSave: boolean;
}

interface Action {
  set: (state: State) => void;
  setCurrentPage: (data: State["currentPage"]) => void;
  setIsSave: (data: State["isSave"]) => void;
  getHomePage: () => PageProps | null;
  getPageById: (pageId: string) => PageProps | null;
  getPageByPathname: (pathname: string) => PageProps | null;
  updatePage: (pageId: string, data: PageProps) => void;
  deletePage: (pageId: string) => void;
  reset: () => void;
}

const initState = {
  id: "",
  puckTemplateId: undefined,
  root: {
    props: {
      title: "",
      titleTC: "",
      titleSC: "",
      icon: "",
      logo: "",
    },
  },
  pages: {},
  currentPage: undefined,
  isSave: false,
};

// export const usePuckStore = create<State & Action>()((set, get) => ({
//     ...initState,
//     set: (state) => set(state),
//     setCurrentPage: (data) => {
//         set({ currentPage: data });
//     },
//     setIsSave: (data) => {
//         set({ isSave: data });
//     },
//     getHomePage: () => {
//         const homePage = get().pages.home;
//         if (!homePage) return null;
//         return insertGlobalRoot(get().root, homePage);
//     },
//     getPageById: (pageId) => {
//         const page = get().pages[pageId];
//         if (!page) return null;
//         return insertGlobalRoot(get().root, page);
//     },
//     getPageByPathname: (pathname) => {
//         const page = Object.values(get().pages).find(
//             (page) => page.pathname === pathname,
//         );
//         if (!page) return null;
//         return insertGlobalRoot(get().root, page);
//     },
//     updatePage: (pageId, data) => {
//         const { root, page } = splitRoot(data);
//         set({ root, pages: { ...get().pages, [pageId]: page } });
//     },
//     addPage: (data) => {
//         const { pageId } = data;
//         set({ pages: { ...get().pages, [pageId]: data } });
//     },
//     deletePage: (pageId) => {
//         set({
//             pages: Object.fromEntries(
//                 Object.entries(get().pages).filter(([key]) => key !== pageId),
//             ),
//         });
//     },
//     reset: () => {
//         set(initState);
//     },
// }));
