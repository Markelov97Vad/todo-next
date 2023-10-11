import { ReactNode } from "react";
import Navigation from "../components/Navigation/Navigation";
import SearchForm from "../components/Form/SearchForm";
import { dataTabSearch } from "../utils/constants";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchForm />
      <Navigation data={dataTabSearch} />
      <ul className="list-group">{children}</ul>
    </>
  );
}
